import fs from 'node:fs';
const assets={},types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',jpg:'image/jpeg',txt:'text/plain; charset=utf-8',xml:'application/xml'};
function walk(dir,prefix=''){for(const name of fs.readdirSync(dir)){const path=dir+'/'+name,key=prefix+'/'+name;if(fs.statSync(path).isDirectory())walk(path,key);else if(types[name.split('.').pop()])assets[key]={type:types[name.split('.').pop()],data:fs.readFileSync(path).toString('base64')}}}walk('dist');
// Also serve Vite's repository-prefixed asset URLs in a standalone Worker.
for(const [key,value] of Object.entries({...assets}))assets['/agent-fInd'+key]=value;
assets['/agent-fInd/']=assets['/index.html'];
fs.mkdirSync('worker-dist',{recursive:true});fs.writeFileSync('worker-dist/index.js','const assets='+JSON.stringify(assets)+';\n'+fs.readFileSync('server/worker.js','utf8'));
