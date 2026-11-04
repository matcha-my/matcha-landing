import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MY,GB} from 'country-flag-icons/react/3x2';
const h=React.createElement;
export function renderLanguage(en){return renderToStaticMarkup(h('details',{className:'language-picker'},h('summary',{'aria-label':en?'Choose language':'选择语言'},h(en?GB:MY,{'aria-hidden':true}),h('span',null,en?'English':'简体中文'),h('span',{className:'language-chevron','aria-hidden':true},'⌄')),h('div',{className:'language-options'},h('a',{href:'/',lang:'zh-MY','aria-label':'简体中文','aria-current':!en?'page':undefined},h(MY,{'aria-hidden':true}),'简体中文'),h('a',{href:'/en/',lang:'en-MY','aria-label':'English','aria-current':en?'page':undefined},h(GB,{'aria-hidden':true}),'English'))));}
const specs=[
 ['Yuna','voice','甜系陪聊','Sweet conversations','华语 · English'],['Joey','video','心动视频','Video hello','华语 · English'],['小晴','voice','温柔声线','Soft-spoken company','华语 · 粤语'],['Yuna','voice','只想听你说','All ears for you','华语 · English'],
 ['Kiki','video','视频陪伴','Video company','华语 · English'],['Chloe','video','见面聊日常','Everyday video calls','华语 · English'],['Luna','video','陪你视频聊','Video hello','华语 · 粤语'],['Nana','video','轻松聊，认真陪','Talk. Laugh. Repeat.','华语 · English'],
 ['Celine','voice','今晚聊久一点','Stay a little longer','华语 · English'],['Belle','video','见面说 hello','Face-to-face hello','华语 · English'],['Venus','voice','你的专属树洞','Tell me everything','华语 · 粤语'],['Eve','voice','好声音，好心情','Your favourite voice','华语 · English']
];
const profilesByName=new Map(specs.map(([name,type,zh,en,languages],i)=>[name,{name,type,zh,en,mood:zh,moodEn:en,tags:languages.split(' · '),enTags:languages.replace('华语','Mandarin').replace('粤语','Cantonese').split(' · '),image:i<3?`/assets/pp-studio-v6-${String(i+1).padStart(2,'0')}.webp`:`/assets/pp-iphone-v5-${String(i+1).padStart(2,'0')}.webp`,color:'lilac'}]));
profilesByName.get('Yuna').image='/assets/pp-yuna-v7.webp';
// Swap only the approved portraits; preserve each profile's name and services.
const xiaoqing=profilesByName.get('小晴'),belle=profilesByName.get('Belle');
[xiaoqing.image,belle.image]=[belle.image,xiaoqing.image];
// Belle takes the first HOT position; Yuna moves to Belle's former catalog slot.
export const people=['Belle','Joey','小晴','Yuna','Kiki','Chloe','Luna','Nana','Celine','Venus','Eve'].map((name,index)=>({...profilesByName.get(name),origin:index%2===0?'Malaysia':'China'}));
