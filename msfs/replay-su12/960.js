"use strict";(self.webpackChunkweb_replay_tools=self.webpackChunkweb_replay_tools||[]).push([[960],{2960:(e,t,s)=>{s.r(t),s.d(t,{config:()=>r,errors:()=>n,fromDataTransfer:()=>async function(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");const[t,n,r]=await Promise.all([s.e(64).then(s.bind(s,3064)),s.e(848).then(s.bind(s,1848)),Promise.resolve().then(s.bind(s,5232))]),a=new t.FolderHandle("",!1);return a._entries=e.map(e=>new(e.isFile?n.FileHandle:n.FolderHandle)(e,!1)),new r.FileSystemDirectoryHandle(a)},getDirHandlesFromInput:()=>async function(e){const{FolderHandle:r,FileHandle:a}=await s.e(64).then(s.bind(s,3064)),t=(await Promise.resolve().then(s.bind(s,5232)))["FileSystemDirectoryHandle"],n=Array.from(e.files),i=n[0].webkitRelativePath.split("/",1)[0],o=new r(i,!1);return n.forEach(e=>{var t=e.webkitRelativePath.split("/"),n=(t.shift(),t.pop());t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),o)._entries[n]=new a(e.name,e,!1)}),new t(o)},getFileHandlesFromInput:()=>async function(e){const t=(await s.e(64).then(s.bind(s,3064)))["FileHandle"],n=(await Promise.resolve().then(s.bind(s,2600)))["FileSystemFileHandle"];return Array.from(e.files).map(e=>new n(new t(e.name,e,!1)))}});const n={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>["Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. "+e,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},r={writable:globalThis.WritableStream}}}]);