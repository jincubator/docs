import{g as m,h as me,j as t,f as _}from"./index-BOriQ2vj.js";/* empty css               */function ue(){return m.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))}function pe(){return m.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))}const M=(i,e)=>{var n,s;return i===((s=(n=e==null?void 0:e.tagName)==null?void 0:n.toUpperCase)==null?void 0:s.call(n))},O=i=>M("DIV",i)||M("SPAN",i),k=i=>M("IMG",i),$=i=>i.complete&&i.naturalHeight!==0,I=i=>M("SVG",i),H=({height:i,offset:e,width:n})=>Math.min((window.innerWidth-e*2)/n,(window.innerHeight-e*2)/i),fe=({containerHeight:i,containerWidth:e,offset:n,targetHeight:s,targetWidth:o})=>{const r=H({height:s,offset:n,width:o}),d=o>s?o/e:s/i;return r>1?d:r*d},y=({containerHeight:i,containerWidth:e,hasScalableSrc:n,offset:s,targetHeight:o,targetWidth:r})=>!i||!e?1:!n&&o&&r?fe({containerHeight:i,containerWidth:e,offset:s,targetHeight:o,targetWidth:r}):H({height:i,offset:s,width:e}),ge=/url(?:\(['"]?)(.*?)(?:['"]?\))/,V=i=>{var e;if(i){if(k(i))return i.currentSrc;if(O(i)){const n=window.getComputedStyle(i).backgroundImage;if(n)return(e=ge.exec(n))==null?void 0:e[1]}}},we=i=>{if(i)return k(i)?i.alt??void 0:i.getAttribute("aria-label")??void 0},xe=({containerHeight:i,containerLeft:e,containerTop:n,containerWidth:s,hasScalableSrc:o,offset:r,targetHeight:d,targetWidth:h})=>{const l=y({containerHeight:i,containerWidth:s,hasScalableSrc:o,offset:r,targetHeight:d,targetWidth:h});return{top:n,left:e,width:s*l,height:i*l,transform:`translate(0,0) scale(${1/l})`}},v=({position:i,relativeNum:e})=>{const n=parseFloat(i);return i.endsWith("%")?e*n/100:n},ve=({containerHeight:i,containerLeft:e,containerTop:n,containerWidth:s,hasScalableSrc:o,objectFit:r,objectPosition:d,offset:h,targetHeight:l,targetWidth:a})=>{if(r==="scale-down"&&(a<=s&&l<=i?r="none":r="contain"),r==="cover"||r==="contain"){const u=s/a,p=i/l,c=r==="cover"?Math.max(u,p):Math.min(u,p),[g="50%",w="50%"]=d.split(" "),b=v({position:g,relativeNum:s-a*c}),f=v({position:w,relativeNum:i-l*c}),x=y({containerHeight:l*c,containerWidth:a*c,hasScalableSrc:o,offset:h,targetHeight:l,targetWidth:a});return{top:n+f,left:e+b,width:a*c*x,height:l*c*x,transform:`translate(0,0) scale(${1/x})`}}else if(r==="none"){const[u="50%",p="50%"]=d.split(" "),c=v({position:u,relativeNum:s-a}),g=v({position:p,relativeNum:i-l}),w=y({containerHeight:l,containerWidth:a,hasScalableSrc:o,offset:h,targetHeight:l,targetWidth:a});return{top:n+g,left:e+c,width:a*w,height:l*w,transform:`translate(0,0) scale(${1/w})`}}else if(r==="fill"){const u=s/a,p=i/l,c=Math.max(u,p),g=y({containerHeight:l*c,containerWidth:a*c,hasScalableSrc:o,offset:h,targetHeight:l,targetWidth:a});return{width:s*g,height:i*g,transform:`translate(0,0) scale(${1/g})`}}else return{}},be=({backgroundPosition:i,backgroundSize:e,containerHeight:n,containerLeft:s,containerTop:o,containerWidth:r,hasScalableSrc:d,offset:h,targetHeight:l,targetWidth:a})=>{if(e==="cover"||e==="contain"){const u=r/a,p=n/l,c=e==="cover"?Math.max(u,p):Math.min(u,p),[g="50%",w="50%"]=i.split(" "),b=v({position:g,relativeNum:r-a*c}),f=v({position:w,relativeNum:n-l*c}),x=y({containerHeight:l*c,containerWidth:a*c,hasScalableSrc:d,offset:h,targetHeight:l,targetWidth:a});return{top:o+f,left:s+b,width:a*c*x,height:l*c*x,transform:`translate(0,0) scale(${1/x})`}}else if(e==="auto"){const[u="50%",p="50%"]=i.split(" "),c=v({position:u,relativeNum:r-a}),g=v({position:p,relativeNum:n-l}),w=y({containerHeight:l,containerWidth:a,hasScalableSrc:d,offset:h,targetHeight:l,targetWidth:a});return{top:o+g,left:s+c,width:a*w,height:l*w,transform:`translate(0,0) scale(${1/w})`}}else{const[u="50%",p="50%"]=e.split(" "),c=v({position:u,relativeNum:r}),g=v({position:p,relativeNum:n}),w=c/a,b=g/l,f=Math.min(w,b),[x="50%",L="50%"]=i.split(" "),S=v({position:x,relativeNum:r-a*f}),Q=v({position:L,relativeNum:n-l*f}),j=y({containerHeight:l*f,containerWidth:a*f,hasScalableSrc:d,offset:h,targetHeight:l,targetWidth:a});return{top:o+Q,left:s+S,width:a*f*j,height:l*f*j,transform:`translate(0,0) scale(${1/j})`}}},je=/\.svg$/i,Te=({hasZoomImg:i,imgSrc:e,isSvg:n,isZoomed:s,loadedImgEl:o,offset:r,shouldRefresh:d,targetEl:h})=>{var x;const l=n||((x=e==null?void 0:e.slice)==null?void 0:x.call(e,0,18))==="data:image/svg+xml"||i||!!(e&&je.test(e)),a=h.getBoundingClientRect(),u=window.getComputedStyle(h),p=o!=null&&O(h),c=o!=null&&!p,g=xe({containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:l,offset:r,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}),w=c?ve({containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:l,objectFit:u.objectFit,objectPosition:u.objectPosition,offset:r,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}):void 0,b=p?be({backgroundPosition:u.backgroundPosition,backgroundSize:u.backgroundSize,containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:l,offset:r,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}):void 0,f=Object.assign({},g,w,b);if(s){const L=window.innerWidth/2,S=window.innerHeight/2,Q=parseFloat(String(f.left||0))+parseFloat(String(f.width||0))/2,j=parseFloat(String(f.top||0))+parseFloat(String(f.height||0))/2,D=L-Q,z=S-j;d&&(f.transitionDuration="0.01ms"),f.transform=`translate(${D}px,${z}px) scale(1)`}return f},N=i=>{if(!i)return{};if(I(i)){const e=i.parentElement,n=i.getBoundingClientRect();if(e){const s=e.getBoundingClientRect();return{height:n.height,left:s.left-n.left,top:s.top-n.top,width:n.width}}else return{height:n.height,left:n.left,width:n.width,top:n.top}}else return{height:i.offsetHeight,left:i.offsetLeft,width:i.offsetWidth,top:i.offsetTop}},ye=i=>{const e="-zoom",n=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],s=new Map;if(i.hasAttribute("id")){const o=i.id,r=o+e;s.set(o,r),i.id=r}i.querySelectorAll("[id]").forEach(o=>{const r=o.id,d=r+e;s.set(r,d),o.id=d}),s.forEach((o,r)=>{const d=`url(#${r})`,h=`url(#${o})`,l=n.map(a=>`[${a}="${d}"]`).join(", ");i.querySelectorAll(l).forEach(a=>{n.forEach(u=>{a.getAttribute(u)===d&&a.setAttribute(u,h)})})}),i.querySelectorAll("style").forEach(o=>{s.forEach((r,d)=>{o.textContent&&(o.textContent=o.textContent.replaceAll(`#${d}`,`#${r}`))})})},Le=["img","svg",'[role="img"]',"[data-zoom]"].map(i=>`${i}:not([aria-hidden="true"])`).join(","),q={overflow:"",width:""};function Se(i){return m.createElement(K,{...i})}class K extends m.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=m.createRef(),this.refDialog=m.createRef(),this.refModalContent=m.createRef(),this.refModalImg=m.createRef(),this.refWrap=m.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=q,this.styleModalImg={},this.handleModalStateChange=e=>{var s,o,r,d;const{modalState:n}=this.state;e!=="LOADING"&&n==="LOADING"?(this.loadZoomImg(),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0)):e!=="LOADED"&&n==="LOADED"?window.addEventListener("wheel",this.handleWheel,{passive:!0}):e!=="UNLOADING"&&n==="UNLOADING"?(this.ensureImgTransitionEnd(),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0)):e!=="UNLOADED"&&n==="UNLOADED"&&(this.bodyScrollEnable(),window.removeEventListener("resize",this.handleResize),(o=(s=this.refModalImg.current)==null?void 0:s.removeEventListener)==null||o.call(s,"transitionend",this.handleImgTransitionEnd),(d=(r=this.refDialog.current)==null?void 0:r.close)==null||d.call(r))},this.getDialogContainer=()=>{let e=document.querySelector("[data-rmiz-portal]");return e==null&&(e=document.createElement("div"),e.setAttribute("data-rmiz-portal",""),document.body.appendChild(e)),e},this.setId=()=>{const e=()=>Math.random().toString(16).slice(-4);this.setState({id:e()+e()+e()})},this.setAndTrackImg=()=>{var n,s;const e=this.refContent.current;e&&(this.imgEl=e.querySelector(Le),this.imgEl?((s=(n=this.contentNotFoundChangeObserver)==null?void 0:n.disconnect)==null||s.call(n),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver(o=>{const r=o[0];r!=null&&r.target&&(this.imgEl=r.target,this.setState({styleGhost:N(this.imgEl)}))}),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver(()=>{this.setState({styleGhost:N(this.imgEl)})}),this.contentChangeObserver.observe(e,{attributes:!0,childList:!0,subtree:!0}))):this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(e,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=e=>{const{isZoomed:n}=this.props;!e&&n?this.zoom():e&&!n&&this.unzoom()},this.handleImgLoad=()=>{const e=V(this.imgEl);if(!e)return;const n=new Image;k(this.imgEl)&&(n.sizes=this.imgEl.sizes,n.srcset=this.imgEl.srcset,n.crossOrigin=this.imgEl.crossOrigin),n.src=e;const s=()=>{this.setState({loadedImgEl:n,styleGhost:N(this.imgEl)})};n.decode().then(s).catch(()=>{if($(n)){s();return}n.onload=s})},this.handleZoom=()=>{var e,n;!this.props.isDisabled&&this.hasImage()&&((n=(e=this.props).onZoomChange)==null||n.call(e,!0))},this.handleUnzoom=()=>{var e,n;this.props.isDisabled||(n=(e=this.props).onZoomChange)==null||n.call(e,!1)},this.handleBtnUnzoomClick=e=>{e.preventDefault(),e.stopPropagation(),this.handleUnzoom()},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{(e.target===this.refModalContent.current||e.target===this.refModalImg.current)&&(e.stopPropagation(),this.handleUnzoom())},this.handleDialogClose=e=>{e.stopPropagation(),this.handleUnzoom()},this.handleKeyDown=e=>{(e.key==="Escape"||e.keyCode===27)&&(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=e=>{if(e.touches.length>1){this.isScaling=!0;return}e.changedTouches.length===1&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{var s;const n=((s=window.visualViewport)==null?void 0:s.scale)??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&n<=1&&this.touchYStart!=null&&e.changedTouches[0]){this.touchYEnd=e.changedTouches[0].screenY;const o=Math.max(this.touchYStart,this.touchYEnd),r=Math.min(this.touchYStart,this.touchYEnd);Math.abs(o-r)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||I(this.imgEl))&&window.getComputedStyle(this.imgEl).display!=="none",this.zoom=()=>{var e,n,s,o;this.bodyScrollDisable(),(n=(e=this.refDialog.current)==null?void 0:e.showModal)==null||n.call(e),(o=(s=this.refModalImg.current)==null?void 0:s.addEventListener)==null||o.call(s,"transitionend",this.handleImgTransitionEnd),this.setState({modalState:"LOADING"})},this.unzoom=()=>{this.setState({modalState:"UNLOADING"})},this.handleImgTransitionEnd=()=>{clearTimeout(this.timeoutTransitionEnd),this.state.modalState==="LOADING"?this.setState({modalState:"LOADED"}):this.state.modalState==="UNLOADING"&&this.setState({shouldRefresh:!1,modalState:"UNLOADED"})},this.ensureImgTransitionEnd=()=>{if(this.refModalImg.current){const e=window.getComputedStyle(this.refModalImg.current).transitionDuration,n=parseFloat(e);if(n){const s=n*(e.endsWith("ms")?1:1e3)+50;this.timeoutTransitionEnd=setTimeout(this.handleImgTransitionEnd,s)}}},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${e}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=q},this.loadZoomImg=()=>{const{props:{zoomImg:e}}=this,n=e==null?void 0:e.src;if(n){const s=new Image;s.sizes=(e==null?void 0:e.sizes)??"",s.srcset=(e==null?void 0:e.srcSet)??"",s.crossOrigin=(e==null?void 0:e.crossOrigin)??void 0,s.src=n;const o=()=>{this.setState({isZoomImgLoaded:!0})};s.decode().then(o).catch(()=>{if($(s)){o();return}s.onload=o})}},this.UNSAFE_handleSvg=()=>{var o,r,d,h,l;const{imgEl:e,refModalImg:n,styleModalImg:s}=this;if(I(e)){const a=e.cloneNode(!0);ye(a),a.style.width=`${s.width||0}px`,a.style.height=`${s.height||0}px`,a.addEventListener("click",this.handleUnzoom),(d=(r=(o=n.current)==null?void 0:o.firstChild)==null?void 0:r.remove)==null||d.call(r),(l=(h=n.current)==null?void 0:h.appendChild)==null||l.call(h,a)}}}render(){const{handleBtnUnzoomClick:e,handleDialogCancel:n,handleDialogClick:s,handleDialogClose:o,handleUnzoom:r,handleZoom:d,imgEl:h,props:{a11yNameButtonUnzoom:l,a11yNameButtonZoom:a,children:u,classDialog:p,IconUnzoom:c,IconZoom:g,isZoomed:w,wrapElement:b,ZoomContent:f,zoomImg:x,zoomMargin:L},refContent:S,refDialog:Q,refModalContent:j,refModalImg:D,refWrap:z,state:{id:U,isZoomImgLoaded:R,loadedImgEl:W,modalState:T,shouldRefresh:ee,styleGhost:te}}=this,X=`rmiz-modal-${U}`,Z=`rmiz-modal-img-${U}`,ne=O(h),C=k(h),G=I(h),A=we(h),P=V(h),ie=C?h.sizes:void 0,se=C?h.srcset:void 0,oe=C?h.crossOrigin:void 0,ae=!!(x!=null&&x.src),E=this.hasImage(),re=A?`${a}: ${A}`:a,le=T==="LOADING"||T==="LOADED",he=E?"found":"not-found",de=T==="UNLOADED"||T==="UNLOADING"?"hidden":"visible",ce={visibility:T==="UNLOADED"?"visible":"hidden"};this.styleModalImg=E?Te({hasZoomImg:ae,imgSrc:P,isSvg:G,isZoomed:w&&le,loadedImgEl:W,offset:L,shouldRefresh:ee,targetEl:h}):{};let F=null;if(E){const Y=C||ne?m.createElement("img",{alt:A,crossOrigin:oe,sizes:ie,src:P,srcSet:se,...R&&T==="LOADED"?x:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:Z,ref:D,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):G?m.createElement("div",{"data-rmiz-modal-img":!0,ref:D,style:this.styleModalImg}):null,B=m.createElement("button",{"aria-label":l,"data-rmiz-btn-unzoom":"",onClick:e,type:"button"},m.createElement(c,null));F=f?m.createElement(f,{buttonUnzoom:B,modalState:T,img:Y,isZoomImgLoaded:R,onUnzoom:r}):m.createElement(m.Fragment,null,Y,B)}return m.createElement(b,{"aria-owns":X,"data-rmiz":"",ref:z},m.createElement(b,{"data-rmiz-content":he,ref:S,style:ce},u),E&&m.createElement(b,{"data-rmiz-ghost":"",style:te},m.createElement("button",{"aria-label":re,"data-rmiz-btn-zoom":"",onClick:d,type:"button"},m.createElement(g,null))),E&&me.createPortal(m.createElement("dialog",{"aria-labelledby":Z,"aria-modal":"true",className:p,"data-rmiz-modal":"",id:X,onClick:s,onClose:o,onCancel:n,ref:Q,role:"dialog"},m.createElement("div",{"data-rmiz-modal-overlay":de}),m.createElement("div",{"data-rmiz-modal-content":"",ref:j},F)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){var e,n,s,o,r,d,h,l,a,u,p,c;this.state.modalState!=="UNLOADED"&&this.bodyScrollEnable(),(n=(e=this.contentChangeObserver)==null?void 0:e.disconnect)==null||n.call(e),(o=(s=this.contentNotFoundChangeObserver)==null?void 0:s.disconnect)==null||o.call(s),(d=(r=this.imgElResizeObserver)==null?void 0:r.disconnect)==null||d.call(r),(l=(h=this.imgEl)==null?void 0:h.removeEventListener)==null||l.call(h,"load",this.handleImgLoad),(u=(a=this.imgEl)==null?void 0:a.removeEventListener)==null||u.call(a,"click",this.handleZoom),(c=(p=this.refModalImg.current)==null?void 0:p.removeEventListener)==null||c.call(p,"transitionend",this.handleImgTransitionEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e,n){this.handleModalStateChange(n.modalState),this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}}K.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:ue,IconZoom:pe,isDisabled:!1,swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};function Qe(i){const[e,n]=m.useState(!1);return m.createElement(Se,{...i,isZoomed:e,onZoomChange:n})}const Ee=i=>t.jsx(Qe,{children:t.jsx("img",{...i,style:{maxWidth:"100%",height:"auto",...i.style}})}),Ie={title:"Overview",description:"undefined"};function J(i){const e={a:"a",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",header:"header",li:"li","mjx-container":"mjx-container",p:"p",path:"path",style:"style",svg:"svg",ul:"ul",use:"use",..._(),...i.components},n=e["mjx-container"];return t.jsxs(t.Fragment,{children:[t.jsx(e.header,{children:t.jsxs(e.h1,{id:"overview",children:["Overview",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:t.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,t.jsx(e.p,{children:"This is an opinionated architecture for an intent based solving protocol which facilitates single and mult-chain solving of intents. Intents can be solved on a single chain without provisioning up front capital as we arbiters can confirm mandates have been met by solvers at execution time, thus solvers may used the swappers locked funds for execution."}),`
`,t.jsxs(e.h2,{id:"goals",children:["Goals",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#goals",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"Key Goals for this design include"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Intent Based Architecture to improve execution"}),`
`,t.jsx(e.li,{children:"Ability for Solvers to execute fills without needing to provide upfront capital"}),`
`]}),`
`,t.jsx(e.p,{children:"Future work includes"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Capital Efficient Liquidity Provisioning including rehypothecation"}),`
`,t.jsx(e.li,{children:"Improved Price Discover via the use of Oracles and external services"}),`
`,t.jsx(e.li,{children:"Incorporating BackRunning of Transactions into Protocols such as Uniswap V4 via hooks"}),`
`]}),`
`,t.jsxs(e.h2,{id:"architecture-digrams",children:["Architecture Digrams",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-digrams",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(Ee,{src:"/images/IntentSwapProtocolMonoChain.png",alt:"IntentSwap Components",title:"IntentSwap Components"}),`
`,t.jsxs(e.h2,{id:"opinionated-sample-architecture-from-jincubator",children:["Opinionated Sample Architecture from ",t.jsx(e.a,{href:"https://github.com/jincubator",children:"jincubator"}),t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opinionated-sample-architecture-from-jincubator",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsxs(e.p,{children:["This work focuses on designing and building solutions around Solving, Arbitrage and Indexing. This work is being done in a combination of public and private repositories on ",t.jsx(e.a,{href:"https://github.com/jincubator",children:"jincubator"}),". The project is drawing inspiration from and leveraging the following codebases for key components"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Solving built in RUST leveraging ",t.jsx(e.a,{href:"https://docs.propellerheads.xyz/tycho/overview",children:"Tycho"})," from ",t.jsx(e.a,{href:"https://www.propellerheads.xyz/",children:"Propellor Heads"})," including",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/propeller-heads/tycho-protocol-sdk",children:"tycho-sdk"}),": For integrate DEXs and other onchain liquidity protocols"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/propeller-heads/tycho-indexer",children:"tycho-indexer"}),": a low-latency, reorg-aware stream of all attributes you need to simulate swaps over DEX and other on-chain liquidity built on ",t.jsx(e.a,{href:"https://github.com/streamingfast/substreams",children:"substreams"})]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/propeller-heads/tycho-simulation",children:"tycho-simulation"}),": a Rust crate which allows simulating a set of supported protocols off-chain"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/propeller-heads/tycho-execution",children:"tycho-execution"}),": a simple, ready-to-use tool that generates the necessary data to execute trades on multiple chains and DEX's"]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Intent Management platform allowing optimized trading routes optimized by solvers who do not need to provide liquidity up front",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/the-compact",children:"the-compact"}),": an ownerless ERC6909 contract that facilitates the voluntary formation (and, if necessary, eventual dissolution) of reusable resource locks."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/arbiters",children:"arbiters"}),": selects a claim method based on the type of Compact message signed by the sponsor and allocator and on the desired settlement behavior. To finalize a claim, some actor must call into the arbiter, which will act on the input and translate it into their preferred claim method. The arbiter then must call the derived claim method on The Compact to finalize the claim process."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/uniswap/tribunal",children:"Tribunal"}),": a framework for processing cross-chain swap settlements against PGA (priority gas auction) blockchains. It ensures that tokens are transferred according to the mandate specified by the originating sponsor and enforces that a single party is able to perform the settlement in the event of a dispute. ",t.jsxs(e.em,{children:["Note: currently working on enhancing the ",t.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP712 Signing"})," of the ",t.jsx(e.a,{href:"https://github.com/uniswap/tribunal?tab=readme-ov-file#mandate-structure",children:"mandates"})," so that the protocol can be used for solving on a single chain and multichain settlement."]})]}),`
`,t.jsxs(e.li,{children:["Services that enable Solving and Arbitrage are drawn primarily from uniswap prototypes for ",t.jsx(e.a,{href:"https://github.com/uniswap/compactx",children:"compactX"}),". ",t.jsx(e.em,{children:"Note: it would be good to develop the majority of these in Rust and leverage Tycho's indexing and execution services"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/Calibrator",children:"callibrator"}),": An intent parameterization service, demo is ",t.jsx(e.a,{href:"https://calibrat0r.com/",children:"here"}),". ",t.jsxs(e.em,{children:["Note: This will need to incorprate/integrate ",t.jsx(e.a,{href:"https://github.com/uniswap/tribunal?tab=readme-ov-file#mandate-structure",children:"mandates"})," as we build a solution for solving."]})]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/jincubator/v4-router",children:"v4-router"}),": a simple and optimized router for swapping on Uniswap V4. ",t.jsx(e.em,{children:"Note: Currently working on integrating intents into this management into this codebase and integrating this with an optimized smart order router."})]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/uniswap/autocator",children:"autocator"}),": A server-based allocator for The Compact that leverages protocol signatures and transactions for authentication, API reference is ",t.jsx(e.a,{href:"https://autocator.org/",children:"here"}),"."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/Smallocator",children:"smallocator"}),": Similar to autocator with smart contract support via EIP-4361 session authentication and signing EIP-712 Compact messages."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/Fillanthropist",children:"Fillanthropist"}),": receiving and filling broadcasted cross-chain swap intents, demo is ",t.jsx(e.a,{href:"https://fillanthropist.org/",children:"here"}),". ",t.jsx(e.em,{children:"Note: This infrastructure can be replaced by solver technology built on tycho as well as an update dissemination approach (see repo below) which can leverage tycho indexing."})]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/Uniswap/disseminator",children:"disseminator"}),": A TypeScript WebSocket server implementation that broadcasts messages to both HTTP endpoints and WebSocket clients. The server validates incoming messages using Zod schemas and ensures proper message delivery to all connected clients. ",t.jsx(e.em,{children:"Note: Design work still needs to be done as to the most efficient way to store and transmit detailed intent and mandate information"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Frontend would include swapping and also liquidity provisioning and optimized Yield strategies for Liquidity Providers two inspirational repositories are",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://github.com/uniswap/compactx",children:"compactX"}),": a proof-of-concept, React-based web interface for performing cross-chain swaps."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"https://yolo-demo-ui-hackathon-chainlink-ch.vercel.app/",children:"YOLO Protocol"}),": A Demo app developed for a hackathon by ",t.jsx(e.a,{href:"https://linktr.ee/yolo.protocol",children:"YOLO Protocol"})," which includes a dashboard for Liquidity Providers to manage their positions."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,t.jsxs(e.h2,{id:"proposed-rollout-strategy",children:["Proposed Rollout Strategy",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proposed-rollout-strategy",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"The following diagram gives an overview of the components to be developed."}),`
`,t.jsxs(e.p,{children:["Technology: Proposed developing ",t.jsx(n,{className:"MathJax",jax:"SVG",children:t.jsxs(e.svg,{style:{verticalAlign:"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.699ex",height:"2.072ex",role:"img",focusable:"false",viewBox:"0 -833.9 3845.1 915.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[t.jsxs(e.defs,{children:[t.jsx(e.path,{id:"MJX-1-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}),t.jsx(e.path,{id:"MJX-1-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),t.jsx(e.path,{id:"MJX-1-TEX-I-1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}),t.jsx(e.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),t.jsx(e.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"})]}),t.jsx(e.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:t.jsxs(e.g,{"data-mml-node":"math",children:[t.jsx(e.g,{"data-mml-node":"mi",children:t.jsx(e.use,{"data-c":"1D438",xlinkHref:"#MJX-1-TEX-I-1D438"})}),t.jsx(e.g,{"data-mml-node":"mo",transform:"translate(1041.8,0)",children:t.jsx(e.use,{"data-c":"3D",xlinkHref:"#MJX-1-TEX-N-3D"})}),t.jsx(e.g,{"data-mml-node":"mi",transform:"translate(2097.6,0)",children:t.jsx(e.use,{"data-c":"1D45A",xlinkHref:"#MJX-1-TEX-I-1D45A"})}),t.jsxs(e.g,{"data-mml-node":"msup",transform:"translate(2975.6,0)",children:[t.jsx(e.g,{"data-mml-node":"mi",children:t.jsx(e.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),t.jsx(e.g,{"data-mml-node":"mn",transform:"translate(466,363) scale(0.707)",children:t.jsx(e.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]})})]})})]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Back end services predominately in ",t.jsx(e.a,{href:"https://www.rust-lang.org/",children:"RUST"})," using ",t.jsx(e.a,{href:"https://alloy.rs/",children:"Alloy"}),"."]}),`
`,t.jsxs(e.li,{children:["Off Chain Persistence and Indexing: using ",t.jsx(e.a,{href:"https://docs.substreams.dev/",children:"Substreams"})," and ",t.jsx(e.a,{href:"https://www.propellerheads.xyz/tycho",children:"Tycho"})]}),`
`,t.jsxs(e.li,{children:["Frontend Components leveraging ",t.jsx(e.a,{href:"https://porto.sh/",children:"Porto"})]}),`
`]}),`
`,t.jsx(e.p,{children:"Outstanding Design Considerations:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Intent Management: Should detail intent information be stored completely off chain, or can it be passed in callData and leveraged in events, with only the Hash on chain?"}),`
`,t.jsx(e.li,{children:"Source of Funds: The proposed architecture's goal is to allow Solvers to use Swappers funds through mandate validation using EIP-721."}),`
`,t.jsxs(e.li,{children:["Price Discovery: What is the most accurate price to be used for quoting, is it the best price we can get on-chain using Tycho Simulation or should we use feeds such as Coingecko and Uniswap API as used in ",t.jsx(e.a,{href:"https://github.com/Uniswap/calibrator",children:"calibrator"}),"."]}),`
`]}),t.jsx(e.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})}function Me(i={}){const{wrapper:e}={..._(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(J,{...i})}):J(i)}export{Me as default,Ie as frontmatter};
