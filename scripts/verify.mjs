import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import config from '../site.config.mjs';
const origin=new URL(config.origin).origin;
const routes=['/','/en/','/credits/','/privacy/','/guide/'];
let count=0;
for(const route of routes){
 const dir='dist'+(route==='/'?'':route.slice(0,-1));
 const html=await fs.readFile(dir+'/index.html','utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,route+' has one H1');
 assert(html.includes(`<link rel="canonical" href="${origin+route}">`),route+' canonical matches origin');
 for(const name of ['description','robots','twitter:card'])assert(html.includes(`name="${name}"`),route+' '+name);
 for(const name of ['og:title','og:url','og:image'])assert(html.includes(`property="${name}"`),route+' '+name);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 assert.deepEqual(schema,JSON.parse(await fs.readFile(dir+'/schema.json','utf8')),route+' exported schema matches inline');
 const types=schema['@graph'].map(n=>n['@type']);
 assert(types.includes('Organization')&&types.includes('WebSite')&&(types.includes('WebPage')||types.includes('AboutPage')));
 assert(!types.includes('AggregateRating')&&!types.includes('Review')&&!types.includes('Offer'));
 assert(schema['@graph'].every(n=>n['@id'].startsWith(origin)));
 if(route==='/'||route==='/en/'){
  for(const code of ['zh-MY','en-MY','x-default'])assert(html.includes(`hreflang="${code}"`));
 }
 if(!config.publicLaunch)assert(html.includes('noindex, follow'));
 for(const match of html.matchAll(/(?:src|href)="(\/[^"#]*)(#[^"]*)?"/g)){
  let pathname=match[1];
  if(!pathname||pathname.startsWith('//'))continue;
  await fs.access('dist'+pathname+(pathname.endsWith('/')?'index.html':''));
  count++;
 }
 assert(!html.includes('jk6')&&!html.includes('eventflo')&&!html.includes('revisit.asia'));
}
const sitemap=await fs.readFile('dist/sitemap.xml','utf8');
const locs=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.deepEqual(locs,config.publicLaunch?routes.map(r=>origin+r):[],'Sitemap excludes preview/noindex content');
for(const f of ['robots.txt','llms.txt','LM.txt']){const text=await fs.readFile('dist/'+f,'utf8');assert(!text.includes('jk6')&&!text.includes('eventflo'));}
for(const file of await fs.readdir('dist/assets')){
 if(file.endsWith('.webp'))assert((await fs.stat('dist/assets/'+file)).size<250000,`${file} optimized under 250KB`);
}
const sensitiveMarkers=['matchablockchain@gmail.com','account.json','credentials/matcha'];
for(const f of ['dist/index.html','dist/app.js','dist/style.css','dist/llms.txt']){const t=await fs.readFile(f,'utf8');for(const marker of sensitiveMarkers)assert(!t.includes(marker),'No credentials or account identifier in public artifacts');}
console.log(`PASS: ${routes.length} pages; ${count} local asset/link references; schema identity, hreflang, preview/public sitemap rules, image budgets, and credential isolation.`);
