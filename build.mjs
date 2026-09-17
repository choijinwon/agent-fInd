import fs from 'node:fs';
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',jpg:'image/jpeg'};
const assets={};for(const name of fs.readdirSync('public')){if(!types[name.split('.').pop()])continue;assets['/'+name]={type:types[name.split('.').pop()],data:fs.readFileSync('public/'+name).toString('base64')}}
fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist/server',{recursive:true});
fs.writeFileSync('dist/server/index.js','const assets='+JSON.stringify(assets)+';\n'+fs.readFileSync('server/worker.js','utf8'));

