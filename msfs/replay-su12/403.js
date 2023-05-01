"use strict";(self.webpackChunkweb_replay_tools=self.webpackChunkweb_replay_tools||[]).push([[403],{403:(e,i,t)=>{t.r(i),t.d(i,{FileHandle:()=>c,FolderHandle:()=>u,Sink:()=>d,default:()=>p});i=t(238);const{File:o,Blob:h,DOMException:a}=t(277).Z,{INVALID:l,GONE:n,MISMATCH:r,MOD_ERR:s,SYNTAX:w,DISALLOWED:f}=i.errors;class d{constructor(e,i){this.fileHandle=e,this.file=i,this.size=i.size,this.position=0}write(e){let i=this.file;if("object"==typeof e)if("write"===e.type){if(Number.isInteger(e.position)&&0<=e.position&&(this.position=e.position,this.size<e.position)&&(this.file=new o([this.file,new ArrayBuffer(e.position-this.size)],this.file.name,this.file)),!("data"in e))throw new a(...w("write requires a data argument"));e=e.data}else{if("seek"===e.type){if(Number.isInteger(e.position)&&0<=e.position){if(this.size<e.position)throw new a(...l);return void(this.position=e.position)}throw new a(...w("seek requires a position argument"))}if("truncate"===e.type){if(Number.isInteger(e.size)&&0<=e.size)return i=e.size<this.size?new o([i.slice(0,e.size)],i.name,i):new o([i,new Uint8Array(e.size-this.size)],i.name),this.size=i.size,this.position>i.size&&(this.position=i.size),void(this.file=i);throw new a(...w("truncate requires a size argument"))}}e=new h([e]);let t=this.file;var s=t.slice(0,this.position),n=t.slice(this.position+e.size);let r=this.position-s.size;r<0&&(r=0),t=new o([s,new Uint8Array(r),e,n],t.name),this.size=t.size,this.position+=e.size,this.file=t}close(){if(this.fileHandle._deleted)throw new a(...n);this.fileHandle._file=this.file,this.file=this.position=this.size=null,this.fileHandle.onclose&&this.fileHandle.onclose(this.fileHandle)}}class c{constructor(e="",i=new o([],e),t=!0){this._file=i,this.name=e,this.kind="file",this._deleted=!1,this.writable=t,this.readable=!0}async getFile(){if(this._deleted)throw new a(...n);return this._file}async createWritable(e){if(!this.writable)throw new a(...f);if(this._deleted)throw new a(...n);e=e.keepExistingData?await this.getFile():new o([],this.name);return new d(this,e)}async isSameEntry(e){return this===e}async _destroy(){this._deleted=!0,this._file=null}}class u{constructor(e,i=!0){this.name=e,this.kind="directory",this._deleted=!1,this._entries={},this.writable=i,this.readable=!0}async*entries(){if(this._deleted)throw new a(...n);yield*Object.entries(this._entries)}async isSameEntry(e){return this===e}async getDirectoryHandle(e,i){if(!this._deleted){var t=this._entries[e];if(t){if(t instanceof c)throw new a(...r);return t}if(i.create)return this._entries[e]=new u(e)}throw new a(...n)}async getFileHandle(e,i){var t=this._entries[e],s=t instanceof c;if(t&&s)return t;if(t&&!s)throw new a(...r);if(t||i.create)return!t&&i.create?this._entries[e]=new c(e):void 0;throw new a(...n)}async removeEntry(e,i){var t=this._entries[e];if(!t)throw new a(...n);await t._destroy(i.recursive),delete this._entries[e]}async _destroy(e){for(var i of Object.values(this._entries)){if(!e)throw new a(...s);await i._destroy(e)}this._entries={},this._deleted=!0}}const _=new u(""),p=()=>_}}]);