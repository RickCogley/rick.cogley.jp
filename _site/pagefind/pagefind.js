let e;!function(){const t={};let n,r;"undefined"!=typeof document&&null!==document.currentScript&&(n=new URL("UNHANDLED",location.href).toString());let a=null;function i(){return null!==a&&0!==a.byteLength||(a=new Uint8Array(r.memory.buffer)),a}let s=0;function o(e,t){const n=t(1*e.length,1)>>>0;return i().set(e,n/1),s=e.length,n}t.init_pagefind=function(e){const t=o(e,r.__wbindgen_malloc),n=s;return r.init_pagefind(t,n)>>>0};const l="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},c="function"==typeof l.encodeInto?function(e,t){return l.encodeInto(e,t)}:function(e,t){const n=l.encode(e);return t.set(n),{read:e.length,written:n.length}};function h(e,t,n){if(void 0===n){const n=l.encode(e),r=t(n.length,1)>>>0;return i().subarray(r,r+n.length).set(n),s=n.length,r}let r=e.length,a=t(r,1)>>>0;const o=i();let h=0;for(;h<r;h++){const t=e.charCodeAt(h);if(t>127)break;o[a+h]=t}if(h!==r){0!==h&&(e=e.slice(h)),a=n(a,r,r=h+3*e.length,1)>>>0;const t=i().subarray(a+h,a+r);h+=c(e,t).written,a=n(a,r,h,1)>>>0}return s=h,a}t.set_ranking_weights=function(e,t){const n=h(t,r.__wbindgen_malloc,r.__wbindgen_realloc),a=s;return r.set_ranking_weights(e,n,a)>>>0},t.load_index_chunk=function(e,t){const n=o(t,r.__wbindgen_malloc),a=s;return r.load_index_chunk(e,n,a)>>>0},t.load_filter_chunk=function(e,t){const n=o(t,r.__wbindgen_malloc),a=s;return r.load_filter_chunk(e,n,a)>>>0},t.add_synthetic_filter=function(e,t){const n=h(t,r.__wbindgen_malloc,r.__wbindgen_realloc),a=s;return r.add_synthetic_filter(e,n,a)>>>0};let d=null;function f(){return null!==d&&0!==d.byteLength||(d=new Int32Array(r.memory.buffer)),d}const u="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};function g(e,t){return e>>>=0,u.decode(i().subarray(e,e+t))}function _(){const e={wbg:{}};return e}function w(e,t){return r=e.exports,p.__wbindgen_wasm_module=t,d=null,a=null,r}async function p(e){if(void 0!==r)return r;void 0===e&&void 0!==n&&(e=n.replace(/\.js$/,"_bg.wasm"));const t=_();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:a,module:i}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return w(a,i)}"undefined"!=typeof TextDecoder&&u.decode(),t.request_indexes=function(e,t){let n,a;try{const l=r.__wbindgen_add_to_stack_pointer(-16),c=h(t,r.__wbindgen_malloc,r.__wbindgen_realloc),d=s;r.request_indexes(l,e,c,d);var i=f()[l/4+0],o=f()[l/4+1];return n=i,a=o,g(i,o)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,a,1)}},t.request_filter_indexes=function(e,t){let n,a;try{const l=r.__wbindgen_add_to_stack_pointer(-16),c=h(t,r.__wbindgen_malloc,r.__wbindgen_realloc),d=s;r.request_filter_indexes(l,e,c,d);var i=f()[l/4+0],o=f()[l/4+1];return n=i,a=o,g(i,o)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,a,1)}},t.request_all_filter_indexes=function(e){let t,n;try{const s=r.__wbindgen_add_to_stack_pointer(-16);r.request_all_filter_indexes(s,e);var a=f()[s/4+0],i=f()[s/4+1];return t=a,n=i,g(a,i)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n,1)}},t.filters=function(e){let t,n;try{const s=r.__wbindgen_add_to_stack_pointer(-16);r.filters(s,e);var a=f()[s/4+0],i=f()[s/4+1];return t=a,n=i,g(a,i)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n,1)}},t.search=function(e,t,n,a,i){let o,l;try{const u=r.__wbindgen_add_to_stack_pointer(-16),_=h(t,r.__wbindgen_malloc,r.__wbindgen_realloc),w=s,p=h(n,r.__wbindgen_malloc,r.__wbindgen_realloc),m=s,y=h(a,r.__wbindgen_malloc,r.__wbindgen_realloc),b=s;r.search(u,e,_,w,p,m,y,b,i);var c=f()[u/4+0],d=f()[u/4+1];return o=c,l=d,g(c,d)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(o,l,1)}},e=Object.assign(p,{initSync:function(e){if(void 0!==r)return r;const t=_();return e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),w(new WebAssembly.Instance(e,t),e)}},t)}();var t=Uint8Array,n=Uint16Array,r=Uint32Array,a=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(e,t){for(var a=new n(31),i=0;i<31;++i)a[i]=t+=1<<e[i-1];var s=new r(a[30]);for(i=1;i<30;++i)for(var o=a[i];o<a[i+1];++o)s[o]=o-a[i]<<5|i;return[a,s]},l=o(a,2),c=l[0],h=l[1];c[28]=258,h[258]=28;var d,f=o(i,0),u=f[0],g=(f[1],new n(32768));for(p=0;p<32768;++p)d=(61680&(d=(52428&(d=(43690&p)>>>1|(21845&p)<<1))>>>2|(13107&d)<<2))>>>4|(3855&d)<<4,g[p]=((65280&d)>>>8|(255&d)<<8)>>>1;var _=function(e,t,r){for(var a=e.length,i=0,s=new n(t);i<a;++i)e[i]&&++s[e[i]-1];var o,l=new n(t);for(i=0;i<t;++i)l[i]=l[i-1]+s[i-1]<<1;if(r){o=new n(1<<t);var c=15-t;for(i=0;i<a;++i)if(e[i])for(var h=i<<4|e[i],d=t-e[i],f=l[e[i]-1]++<<d,u=f|(1<<d)-1;f<=u;++f)o[g[f]>>>c]=h}else for(o=new n(a),i=0;i<a;++i)e[i]&&(o[i]=g[l[e[i]-1]++]>>>15-e[i]);return o},w=new t(288);for(p=0;p<144;++p)w[p]=8;for(p=144;p<256;++p)w[p]=9;for(p=256;p<280;++p)w[p]=7;for(p=280;p<288;++p)w[p]=8;var p,m=new t(32);for(p=0;p<32;++p)m[p]=5;var y=_(w,9,1),b=_(m,5,1),v=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},P=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&n},k=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},x=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$=function(e,t,n){var r=new Error(t||x[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,$),!n)throw r;return r},F=function(e,o,l){var h=e.length;if(!h||l&&l.f&&!l.l)return o||new t(0);var d=!o||l,f=!l||l.i;l||(l={}),o||(o=new t(3*h));var g=function(e){var n=o.length;if(e>n){var r=new t(Math.max(2*n,e));r.set(o),o=r}},w=l.f||0,p=l.p||0,m=l.b||0,x=l.l,F=l.d,S=l.m,E=l.n,U=8*h;do{if(!x){w=P(e,p,1);var L=P(e,p+1,3);if(p+=3,!L){var A=e[(O=4+((p+7)/8|0))-4]|e[O-3]<<8,D=O+A;if(D>h){f&&$(0);break}d&&g(m+A),o.set(e.subarray(O,D),m),l.b=m+=A,l.p=p=8*D,l.f=w;continue}if(1==L)x=y,F=b,S=9,E=5;else if(2==L){var I=P(e,p,31)+257,M=P(e,p+10,15)+4,W=I+P(e,p+5,31)+1;p+=14;for(var T=new t(W),R=new t(19),j=0;j<M;++j)R[s[j]]=P(e,p+3*j,7);p+=3*M;var C=v(R),q=(1<<C)-1,N=_(R,C,1);for(j=0;j<W;){var O,B=N[P(e,p,q)];if(p+=15&B,(O=B>>>4)<16)T[j++]=O;else{var J=0,G=0;for(16==O?(G=3+P(e,p,3),p+=2,J=T[j-1]):17==O?(G=3+P(e,p,7),p+=3):18==O&&(G=11+P(e,p,127),p+=7);G--;)T[j++]=J}}var z=T.subarray(0,I),Y=T.subarray(I);S=v(z),E=v(Y),x=_(z,S,1),F=_(Y,E,1)}else $(1);if(p>U){f&&$(0);break}}d&&g(m+131072);for(var H=(1<<S)-1,V=(1<<E)-1,K=p;;K=p){var Q=(J=x[k(e,p)&H])>>>4;if((p+=15&J)>U){f&&$(0);break}if(J||$(2),Q<256)o[m++]=Q;else{if(256==Q){K=p,x=null;break}var X=Q-254;if(Q>264){var Z=a[j=Q-257];X=P(e,p,(1<<Z)-1)+c[j],p+=Z}var ee=F[k(e,p)&V],te=ee>>>4;ee||$(3),p+=15&ee;Y=u[te];if(te>3){Z=i[te];Y+=k(e,p)&(1<<Z)-1,p+=Z}if(p>U){f&&$(0);break}d&&g(m+131072);for(var ne=m+X;m<ne;m+=4)o[m]=o[m-Y],o[m+1]=o[m+1-Y],o[m+2]=o[m+2-Y],o[m+3]=o[m+3-Y];m=ne}}l.l=x,l.p=K,l.b=m,l.f=w,x&&(w=1,l.m=S,l.d=F,l.n=E)}while(!w);return m==o.length?o:function(e,a,i){(null==a||a<0)&&(a=0),(null==i||i>e.length)&&(i=e.length);var s=new(2==e.BYTES_PER_ELEMENT?n:4==e.BYTES_PER_ELEMENT?r:t)(i-a);return s.set(e.subarray(a,i)),s}(o,0,m)},S=new t(0);var E="undefined"!=typeof TextDecoder&&new TextDecoder;try{E.decode(S,{stream:!0})}catch(e){}var U=function(e,n){return F(e.subarray(function(e){31==e[0]&&139==e[1]&&8==e[2]||$(6,"invalid gzip data");var t=e[3],n=10;4&t&&(n+=e[10]|2+(e[11]<<8));for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(2&t)}(e),-8),n||new t((a=(r=e).length,(r[a-4]|r[a-3]<<8|r[a-2]<<16|r[a-1]<<24)>>>0)));var r,a},L=(e,t)=>{if(0===e.length)return 0;let n=[];for(const t of e)n[t.location]=n[t.location]||0,n[t.location]+=t.balanced_score;if(n.length<=t)return 0;let r=n.slice(0,t).reduce(((e,t)=>e+t),0),a=r,i=[0];for(let e=0;e<n.length;e++){a+=(n[e+t]??0)-(n[e]??0),a>r?(r=a,i=[e]):a===r&&i[i.length-1]===e-1&&i.push(e)}return i[Math.floor(i.length/2)]},A=(e,t,n,r,a,i)=>{let s=e.includes("​"),o=[];o=s?e.split("​"):e.split(/[\r\n\s]+/g);for(let e of r)o[e]?.startsWith("<mark>")||(o[e]=`<mark>${o[e]}</mark>`);let l=i??o.length,c=a??0;return l-c<n&&(n=l-c),t+n>l&&(t=l-n),t<c&&(t=c),o.slice(t,t+n).join(s?"":" ").trim()},D=async(e=100)=>new Promise((t=>setTimeout(t,e))),I=class{constructor(t={}){this.version="1.2.0",this.backend=e,this.decoder=new TextDecoder("utf-8"),this.wasm=null,this.basePath=t.basePath||"/pagefind/",this.primary=t.primary||!1,this.primary&&!t.basePath&&this.initPrimary(),/[^\/]$/.test(this.basePath)&&(this.basePath=`${this.basePath}/`),window?.location?.origin&&this.basePath.startsWith(window.location.origin)&&(this.basePath=this.basePath.replace(window.location.origin,"")),this.baseUrl=t.baseUrl||this.defaultBaseUrl(),/^(\/|https?:\/\/)/.test(this.baseUrl)||(this.baseUrl=`/${this.baseUrl}`),this.indexWeight=t.indexWeight??1,this.excerptLength=t.excerptLength??30,this.mergeFilter=t.mergeFilter??{},this.ranking=t.ranking,this.highlightParam=t.highlightParam??null,this.loaded_chunks={},this.loaded_filters={},this.loaded_fragments={},this.raw_ptr=null,this.searchMeta=null,this.languages=null}initPrimary(){let e=import.meta.url.match(/^(.*\/)pagefind.js.*$/)?.[1];e?this.basePath=e:console.warn(["Pagefind couldn't determine the base of the bundle from the import path. Falling back to the default.","Set a basePath option when initialising Pagefind to ignore this message."].join("\n"))}defaultBaseUrl(){let e=this.basePath.match(/^(.*\/)_?pagefind/)?.[1];return e||"/"}async options(e){const t=["basePath","baseUrl","indexWeight","excerptLength","mergeFilter","highlightParam","ranking"];for(const[n,r]of Object.entries(e))if("mergeFilter"===n){let e=this.stringifyFilters(r),t=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(t,e)}else"ranking"===n?await this.set_ranking(e.ranking):t.includes(n)?("basePath"===n&&"string"==typeof r&&(this.basePath=r),"baseUrl"===n&&"string"==typeof r&&(this.baseUrl=r),"indexWeight"===n&&"number"==typeof r&&(this.indexWeight=r),"excerptLength"===n&&"number"==typeof r&&(this.excerptLength=r),"mergeFilter"===n&&"object"==typeof r&&(this.mergeFilter=r),"highlightParam"===n&&"string"==typeof r&&(this.highlightParam=r)):console.warn(`Unknown Pagefind option ${n}. Allowed options: [${t.join(", ")}]`)}decompress(e,t="unknown file"){return"pagefind_dcd"===this.decoder.decode(e.slice(0,12))?e.slice(12):(e=U(e),"pagefind_dcd"!==this.decoder.decode(e.slice(0,12))?(console.error(`Decompressing ${t} appears to have failed: Missing signature`),e):e.slice(12))}async set_ranking(e){if(!e)return;let t={term_similarity:e.termSimilarity??null,page_length:e.pageLength??null,term_saturation:e.termSaturation??null,term_frequency:e.termFrequency??null},n=await this.getPtr();this.raw_ptr=this.backend.set_ranking_weights(n,JSON.stringify(t))}async init(e,t){await this.loadEntry();let n=this.findIndex(e),r=n.wasm?n.wasm:"unknown",a=[this.loadMeta(n.hash)];if(!0===t.load_wasm&&a.push(this.loadWasm(r)),await Promise.all(a),this.raw_ptr=this.backend.init_pagefind(new Uint8Array(this.searchMeta)),Object.keys(this.mergeFilter)?.length){let e=this.stringifyFilters(this.mergeFilter),t=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(t,e)}this.ranking&&await this.set_ranking(this.ranking)}async loadEntry(){try{let e=await fetch(`${this.basePath}pagefind-entry.json?ts=${Date.now()}`),t=await e.json();this.languages=t.languages,t.version!==this.version&&(this.primary?console.warn(["Pagefind JS version doesn't match the version in your search index.",`Pagefind JS: ${this.version}. Pagefind index: ${t.version}`,"If you upgraded Pagefind recently, you likely have a cached pagefind.js file.","If you encounter any search errors, try clearing your cache."].join("\n")):console.warn(["Merging a Pagefind index from a different version than the main Pagefind instance.",`Main Pagefind JS: ${this.version}. Merged index (${this.basePath}): ${t.version}`,"If you encounter any search errors, make sure that both sites are running the same version of Pagefind."].join("\n")))}catch(e){throw console.error(`Failed to load Pagefind metadata:\n${e?.toString()}`),new Error("Failed to load Pagefind metadata")}}findIndex(e){if(this.languages){let t=this.languages[e];if(t)return t;if(t=this.languages[e.split("-")[0]],t)return t;let n=Object.values(this.languages).sort(((e,t)=>t.page_count-e.page_count));if(n[0])return n[0]}throw new Error("Pagefind Error: No language indexes found.")}async loadMeta(e){try{let t=await fetch(`${this.basePath}pagefind.${e}.pf_meta`),n=await t.arrayBuffer();this.searchMeta=this.decompress(new Uint8Array(n),"Pagefind metadata")}catch(e){console.error(`Failed to load the meta index:\n${e?.toString()}`)}}async loadWasm(e){try{const t=`${this.basePath}wasm.${e}.pagefind`;let n=await fetch(t),r=await n.arrayBuffer();const a=this.decompress(new Uint8Array(r),"Pagefind WebAssembly");if(!a)throw new Error("No WASM after decompression");this.wasm=await this.backend(a)}catch(e){throw console.error(`Failed to load the Pagefind WASM:\n${e?.toString()}`),new Error(`Failed to load the Pagefind WASM:\n${e?.toString()}`)}}async _loadGenericChunk(e,t){try{let n=await fetch(e),r=await n.arrayBuffer(),a=this.decompress(new Uint8Array(r),e),i=await this.getPtr();this.raw_ptr=this.backend[t](i,a)}catch(t){console.error(`Failed to load the index chunk ${e}:\n${t?.toString()}`)}}async loadChunk(e){if(!this.loaded_chunks[e]){const t=`${this.basePath}index/${e}.pf_index`;this.loaded_chunks[e]=this._loadGenericChunk(t,"load_index_chunk")}return await this.loaded_chunks[e]}async loadFilterChunk(e){if(!this.loaded_filters[e]){const t=`${this.basePath}filter/${e}.pf_filter`;this.loaded_filters[e]=this._loadGenericChunk(t,"load_filter_chunk")}return await this.loaded_filters[e]}async _loadFragment(e){let t=await fetch(`${this.basePath}fragment/${e}.pf_fragment`),n=await t.arrayBuffer(),r=this.decompress(new Uint8Array(n),`Fragment ${e}`);return JSON.parse((new TextDecoder).decode(r))}async loadFragment(e,t=[],n){this.loaded_fragments[e]||(this.loaded_fragments[e]=this._loadFragment(e));let r=await this.loaded_fragments[e];r.weighted_locations=t,r.locations=t.map((e=>e.location)),r.raw_content||(r.raw_content=r.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"),r.content=r.content.replace(/\u200B/g,"")),r.raw_url||(r.raw_url=r.url),r.url=this.processedUrl(r.raw_url,n);const a=L(t,this.excerptLength);return r.excerpt=A(r.raw_content,a,this.excerptLength,r.locations),r.sub_results=((e,t)=>{const n=e.anchors.filter((e=>/h\d/i.test(e.element)&&e.text?.length&&/\S/.test(e.text))).sort(((e,t)=>e.location-t.location)),r=[];let a=0,i={title:e.meta.title,url:e.url,weighted_locations:[],locations:[],excerpt:""};const s=n=>{if(i.locations.length){const s=i.weighted_locations.map((e=>({weight:e.weight,balanced_score:e.balanced_score,location:e.location-a}))),o=L(s,t)+a,l=n?Math.min(n-o,t):t;i.excerpt=A(e.raw_content??"",o,l,i.locations,a,n),r.push(i)}};for(let t of e.weighted_locations)if(!n.length||t.location<n[0].location)i.weighted_locations.push(t),i.locations.push(t.location);else{let r=n.shift();for(s(r.location);n.length&&t.location>=n[0].location;)r=n.shift();let o=e.url;try{if(/^((https?:)?\/\/)/.test(o)){let e=new URL(o);e.hash=r.id,o=e.toString()}else{/^\//.test(o)||(o=`/${o}`);let e=new URL(`https://example.com${o}`);e.hash=r.id,o=e.toString().replace(/^https:\/\/example.com/,"")}}catch(e){console.error(`Pagefind: Couldn't process ${o} for a search result`)}a=r.location,i={title:r.text,url:o,anchor:r,weighted_locations:[t],locations:[t.location],excerpt:""}}return s(n[0]?.location),r})(r,this.excerptLength),r}fullUrl(e){return/^(https?:)?\/\//.test(e)?e:`${this.baseUrl}/${e}`.replace(/\/+/g,"/").replace(/^(https?:\/)/,"$1/")}processedUrl(e,t){const n=this.fullUrl(e);if(null===this.highlightParam)return n;let r=t.split(/\s+/);try{let e=new URL(n);for(const t of r)e.searchParams.append(this.highlightParam,t);return e.toString()}catch(e){try{let e=new URL(`https://example.com${n}`);for(const t of r)e.searchParams.append(this.highlightParam,t);return e.toString().replace(/^https:\/\/example\.com/,"")}catch(e){return n}}}async getPtr(){for(;null===this.raw_ptr;)await D(50);if(!this.raw_ptr)throw console.error("Pagefind: WASM Error (No pointer)"),new Error("Pagefind: WASM Error (No pointer)");return this.raw_ptr}parseFilters(e){let t={};if(!e)return t;for(const n of e.split("__PF_FILTER_DELIM__")){let[e,r]=n.split(/:(.*)$/);if(t[e]={},r)for(const n of r.split("__PF_VALUE_DELIM__"))if(n){let r=n.match(/^(.*):(\d+)$/);if(r){let[,n,a]=r;t[e][n]=parseInt(a)??a}}}return t}stringifyFilters(e={}){return JSON.stringify(e)}stringifySorts(e={}){let t=Object.entries(e);for(let[e,n]of t)return t.length>1&&console.warn(`Pagefind was provided multiple sort options in this search, but can only operate on one. Using the ${e} sort.`),"asc"!==n&&"desc"!==n&&console.warn(`Pagefind was provided a sort with unknown direction ${n}. Supported: [asc, desc]`),`${e}:${n}`;return""}async filters(){let e=await this.getPtr(),t=this.backend.request_all_filter_indexes(e).split(" ").filter((e=>e)).map((e=>this.loadFilterChunk(e)));await Promise.all([...t]),e=await this.getPtr();let n=this.backend.filters(e);return this.parseFilters(n)}async preload(e,t={}){await this.search(e,{...t,preload:!0})}async search(e,t={}){t={verbose:!1,filters:{},sort:{},...t};const n=e=>{t.verbose&&console.log(e)};n(`Starting search on ${this.basePath}`);let r=Date.now(),a=await this.getPtr(),i=null===e,s=/^\s*".+"\s*$/.test(e=e??"");if(s&&n("Running an exact search"),e=e.toLowerCase().trim().replace(/[\.`~!@#\$%\^&\*\(\)\{\}\[\]\\\|:;'",<>\/\?\-]/g,"").replace(/\s{2,}/g," ").trim(),n(`Normalized search term to ${e}`),!e?.length&&!i)return{results:[],unfilteredResultCount:0,filters:{},totalFilters:{},timings:{preload:Date.now()-r,search:Date.now()-r,total:Date.now()-r}};let o=this.stringifySorts(t.sort);n(`Stringified sort to ${o}`);const l=this.stringifyFilters(t.filters);n(`Stringified filters to ${l}`);let c=this.backend.request_indexes(a,e),h=this.backend.request_filter_indexes(a,l),d=c.split(" ").filter((e=>e)).map((e=>this.loadChunk(e))),f=h.split(" ").filter((e=>e)).map((e=>this.loadFilterChunk(e)));if(await Promise.all([...d,...f]),n("Loaded necessary chunks to run search"),t.preload)return n("Preload — bailing out of search operation now."),null;a=await this.getPtr();let u=Date.now(),g=this.backend.search(a,e,l,o,s);n(`Got the raw search result: ${g}`);let[_,w,p,m]=g.split(/:([^:]*):(.*)__PF_UNFILTERED_DELIM__(.*)$/),y=this.parseFilters(p),b=this.parseFilters(m);n(`Remaining filters: ${JSON.stringify(g)}`);let v=w.length?w.split(" "):[],P=v.map((t=>{let[r,a,i]=t.split("@");n(`Processing result: \n  hash:${r}\n  score:${a}\n  locations:${i}`);let s=i.length?i.split(",").map((e=>{let[t,n,r]=e.split(">");return{weight:parseInt(t)/24,balanced_score:parseFloat(n),location:parseInt(r)}})):[],o=s.map((e=>e.location));return{id:r,score:parseFloat(a)*this.indexWeight,words:o,data:async()=>await this.loadFragment(r,s,e)}}));const k=Date.now()-u,x=Date.now()-r;return n(`Found ${v.length} result${1==v.length?"":"s"} for "${e}" in ${Date.now()-u}ms (${Date.now()-r}ms realtime)`),{results:P,unfilteredResultCount:parseInt(_),filters:y,totalFilters:b,timings:{preload:x-k,search:k,total:x}}}},M=class{constructor(t={}){this.backend=e,this.primaryLanguage="unknown",this.searchID=0,this.primary=new I({...t,primary:!0}),this.instances=[this.primary],this.init(t?.language)}async options(e){await this.primary.options(e)}async init(e){if(document?.querySelector){const e=document.querySelector("html")?.getAttribute("lang")||"unknown";this.primaryLanguage=e.toLocaleLowerCase()}await this.primary.init(e||this.primaryLanguage,{load_wasm:!0})}async mergeIndex(e,t={}){if(this.primary.basePath.startsWith(e))return void console.warn(`Skipping mergeIndex ${e} that appears to be the same as the primary index (${this.primary.basePath})`);let n=new I({primary:!1,basePath:e});for(this.instances.push(n);null===this.primary.wasm;)await D(50);await n.init(t.language||this.primaryLanguage,{load_wasm:!1}),delete t.language,await n.options(t)}mergeFilters(e){const t={};for(const n of e)for(const[e,r]of Object.entries(n))if(t[e]){const n=t[e];for(const[e,t]of Object.entries(r))n[e]=(n[e]||0)+t}else t[e]=r;return t}async filters(){let e=await Promise.all(this.instances.map((e=>e.filters())));return this.mergeFilters(e)}async preload(e,t={}){await Promise.all(this.instances.map((n=>n.preload(e,t))))}async debouncedSearch(e,t,n){const r=++this.searchID;if(this.preload(e,t),await D(n),r!==this.searchID)return null;const a=await this.search(e,t);return r!==this.searchID?null:a}async search(e,t={}){let n=await Promise.all(this.instances.map((n=>n.search(e,t))));const r=this.mergeFilters(n.map((e=>e.filters))),a=this.mergeFilters(n.map((e=>e.totalFilters))),i=n.map((e=>e.results)).flat().sort(((e,t)=>t.score-e.score)),s=n.map((e=>e.timings));return{results:i,unfilteredResultCount:n.reduce(((e,t)=>e+t.unfilteredResultCount),0),filters:r,totalFilters:a,timings:s}}},W=void 0,T=void 0,R=()=>{W||(W=new M(T??{}))},j=async e=>{W?await W.options(e):T=e},C=async()=>{R()},q=async()=>{W=void 0,T=void 0},N=async(e,t)=>(R(),await W.mergeIndex(e,t)),O=async(e,t)=>(R(),await W.search(e,t)),B=async(e,t,n=300)=>(R(),await W.debouncedSearch(e,t,n)),J=async(e,t)=>(R(),await W.preload(e,t)),G=async()=>(R(),await W.filters());export{B as debouncedSearch,q as destroy,G as filters,C as init,N as mergeIndex,j as options,J as preload,O as search};