(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{405:function(e,t,a){"use strict";a.d(t,{I:function(){return n}});var s=a(5893),l=a(4947),i=a(7294);let n=e=>{let{value:t,fontSize:a,style:n,placeholder:o,onChange:r}=e,d=l.O.components.input,m=(0,i.useRef)(null),c=null!=a?a:d.defaultFontSize,p=d.defaultPadding1/d.defaultFontSize*c,u=d.defaultPadding2/d.defaultFontSize*c,h=d.defaultCornerRadiusRatio*c,f=e=>{let t=e.target.value;r(t)};return(0,s.jsx)("input",{ref:m,value:t,type:"text",placeholder:o,onInput:f,style:{fontWeight:"400",width:"100%",fontSize:c,lineHeight:"128.5%",background:"rgba(255, 255, 255, 0.00)",padding:"".concat(p,"px ").concat(p,"px ").concat(p,"px ").concat(u,"px"),borderRadius:h,overflow:"hidden",color:d.defaultColor,border:"none",outline:"none",...null!=n?n:{}}})}},7213:function(e,t,a){"use strict";a.d(t,{w:function(){return l}});var s=a(5893);let l=e=>{var t,a,l;let i=null!==(t=e.variant)&&void 0!==t?t:"-",n=null!==(a=e.repeat)&&void 0!==a?a:3,o=Array(n).fill(i).join("");return(0,s.jsx)("span",{style:{fontWeight:null!==(l=e.reserveFontWeight)&&void 0!==l&&l?void 0:200},children:o})}},8744:function(e,t,a){"use strict";a.d(t,{V:function(){return r}});var s=a(5893),l=a(7294),i=a(4947),n=a(8600);let o=(e,t,a,s)=>{let l=(t-e.min)/(e.max-e.min)*100,i="linear-gradient(to right, ".concat(a," 0%, ").concat(a," ").concat(l,"%, ").concat(s," ").concat(l,"%, ").concat(s," 100%)");e.style.setProperty("--track-background",i)},r=e=>{let{value:t,onChange:a,color:r,step:d,style:m}=e,c=i.O.components.slider,p=(0,l.useRef)(null),u=null!=d?d:1e-4;return(0,l.useEffect)(()=>{p.current&&o(p.current,t,null!=r?r:c.defaultFilled,n.fz)},[t,p,c.defaultFilled,,r]),(0,s.jsx)("input",{type:"range",style:{height:27,margin:0,background:n.Dn,...null!=m?m:{}},min:0,max:1,step:u,ref:p,value:t,onInput:e=>{let t=Math.round(e.target.value/u)*u;a(t=(0,n.uZ)(t,0,1))}})}},7599:function(e,t,a){"use strict";a.d(t,{NC:function(){return F},Qe:function(){return E},TJ:function(){return D},WQ:function(){return R},fQ:function(){return U},sU:function(){return W}});var s=a(5893),l=a(5675),i=a.n(l),n=a(7292),o=a.n(n),r=a(7294),d=a(9769),m=a(793),c=a(2069),p=a(1461),u=a(364),h=a(6501),f=a(2991),x=a(8788),g=a(7022),_=a(8726),v=a(405),j=a(358),w=a(8744),y=a(227),b=a(7213),k=a(3851),N=a(4947),I=a(7081),S=a(7480),C=a(1876).Buffer;let O=e=>{var t,a;let{coinType:l,coinUi:n,onClick:r}=e,d=l.package,m=null!==(t=n.name)&&void 0!==t?t:"";return""===m&&(m="".concat(l.module,"::").concat(l.field)),(0,s.jsxs)("div",{className:o()["modal-token-list-item-frame"],onClick:r,children:[(0,s.jsxs)("div",{className:o()["modal-token-list-item-left-frame"],children:[(0,s.jsx)(i(),{alt:"",src:null!==(a=n.logoUrl)&&void 0!==a?a:c.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:30,height:30}),(0,s.jsxs)("div",{className:o()["modal-token-list-item-left-frame-title"],children:[(0,s.jsx)("span",{className:o()["modal-token-list-item-left-symbol-span"],children:n.symbol}),(0,s.jsx)("span",{className:o()["modal-token-list-item-left-detail-span"],children:m})]})]}),(0,s.jsx)("div",{className:o()["modal-token-list-item-right-frame"],children:(0,s.jsx)("span",{children:d.length>13?d.slice(0,10)+"...":d})})]})},E=e=>{let{coinTypeAndUis:t,onSelectCoinType:a}=e;return(0,s.jsxs)("div",{className:o()["modal-wallet-frame"],children:[(0,s.jsx)("div",{className:o()["modal-wallet-title-frame"],children:(0,s.jsx)("span",{children:"Select Token"})}),t.length>0?(0,s.jsx)("div",{className:o()["modal-token-list-panel-frame"],children:t.map(e=>{let[t,l]=e;return(0,s.jsx)(O,{onClick:()=>{void 0!==a&&a(t)},coinType:t,coinUi:l},t.uuid())})}):(0,s.jsx)("span",{style:{fontStyle:"normal",fontWeight:"500",fontSize:"21px",lineHeight:"32px",color:"#9da3ae"},children:"No avaliable token for selecting"})]})},T="#d83939",z="#d88f39",D=e=>{var t,a,l,n;let{accountAddr:c,poolInfo:f,getCoinUi:x,wallet:v,client:C,dismissModal:O}=e,E=f.type.xTokenType,D=f.type.yTokenType,R=C.getPrimaryCoinType(),F=(0,I.Z)(),U=(0,r.useRef)(null),W=(0,k.VB)(U),L=null!==W.current&&W.current.width<N.O.specified.depositModal.sw,[A,M]=(0,r.useState)(null),{refreshTransactions:B}=(0,h.K)(),[Z,P]=(0,r.useState)("SLIDER");(0,r.useEffect)(()=>{f.isInitialized()||P("CUSTOM")},[f]);let{refresh:q,gasFeePrice:H}=(0,u.s)(),{refreshAccountObjects:Y}=(0,h.K)(),[K,$]=(0,r.useState)([]),[G,Q]=(0,r.useState)([]),[V,X]=(0,r.useState)([]),[J,ee]=(0,r.useState)(""),[et,ea]=(0,r.useState)(""),es=(0,r.useMemo)(()=>C.getEstimateGasAmount("add-liquidity"),[C]),el=(0,r.useMemo)(()=>null===H?null:H*es,[H,es]),ei=(null!=V?V:[]).reduce((e,t)=>e+t.balance,d.BigIntConstants.ZERO);(0,r.useEffect)(()=>{if(null===c||null===el)return;let e=async()=>{try{let[e,t,a]=await C.getSortedAccountCoinsArray(c,[E,D,R]);$(e),Q(t),X(a)}catch(e){(0,d.debugLog)(e,"deposit-model-fetch-coin-info")}};e()},[c,v,C,E,D,R,el]);let en=(0,r.useMemo)(()=>{if(null===el||null===K||0===K.length)return d.BigIntConstants.ZERO;let e=K.reduce((e,t)=>e+t.balance,d.BigIntConstants.ZERO),t=d.MoveType.equals(E,R)?e-el:e;return t>d.BigIntConstants.ZERO?t:d.BigIntConstants.ZERO},[K,el,E,R]),eo=(0,r.useMemo)(()=>{if(null===el||null===G||0===G.length)return d.BigIntConstants.ZERO;let e=G.reduce((e,t)=>e+t.balance,d.BigIntConstants.ZERO),t=d.MoveType.equals(D,R)?e-el:e;return t>d.BigIntConstants.ZERO?t:d.BigIntConstants.ZERO},[G,el,D,R]),er=null!==K&&null!==G&&null!==V&&null!==el,ed=d.BigIntConstants.ZERO,em=d.BigIntConstants.ZERO;f.isInitialized()&&(f.getDepositXAmount(eo)>en?(ed=en,em=(em=f.getDepositYAmount(en))<eo?em:eo):(em=eo,ed=(ed=f.getDepositXAmount(eo))<en?ed:en));let ec=x(f.type.xTokenType),ep=x(f.type.yTokenType),eu=null!==(t=ec.demical)&&void 0!==t?t:0,eh=null!==(a=ep.demical)&&void 0!==a?a:0,ef=ec.symbol,ex=ep.symbol,eg=null!==(l=ec.logoUrl)&&void 0!==l?l:"/images/token/unknown-token.svg",e_=null!==(n=ep.logoUrl)&&void 0!==n?n:"/images/token/unknown-token.svg",ev=(0,r.useMemo)(()=>(0,d.truncateNumeric)(new d.DemicalFormat(en,eu).toString(!0),10),[en,eu]),ej=(0,r.useMemo)(()=>(0,d.truncateNumeric)(new d.DemicalFormat(eo,eh).toString(!0),10),[eo,eh]),ew=(0,r.useMemo)(()=>{let e=d.DemicalFormat.fromString(J);return null!==e&&e.canAlignTo(eu)?e.alignTo(eu).value:d.BigIntConstants.ZERO},[J,eu]),ey=(0,r.useMemo)(()=>{let e=d.DemicalFormat.fromString(et);return null!==e&&e.canAlignTo(eh)?e.alignTo(eh).value:d.BigIntConstants.ZERO},[et,eh]),eb=(0,r.useCallback)(e=>{if(""===e){ee(""),f.isInitialized()&&ea("");return}if(eu<=0&&e.indexOf(".")>-1)return;let t=d.DemicalFormat.fromString(e);if(null!==t&&t.canAlignTo(eu)&&t.value>=d.BigIntConstants.ZERO){t=t.alignTo(eu);let a=t.value,s=f.getDepositYAmount(a);a<=en&&(!f.isInitialized()||s<=eo)&&(ee(e),f.isInitialized()&&ea(new d.DemicalFormat(s,eh).toString()))}},[en,eo,eu,eh,ee,ea,f]),ek=(0,r.useCallback)(e=>{if(""===e){ea(""),f.isInitialized()&&ee("");return}if(eh<=0&&e.indexOf(".")>-1)return;let t=d.DemicalFormat.fromString(e);if(null!==t&&t.canAlignTo(eh)&&t.value>=d.BigIntConstants.ZERO){t=t.alignTo(eh);let a=t.value,s=f.getDepositXAmount(a);a<=eo&&(!f.isInitialized()||s<=en)&&(ea(e),f.isInitialized()&&ee(new d.DemicalFormat(s,eu).toString()))}},[en,eo,eu,eh,ee,ea,f]),eN=null,eI=null;null===c?[eN,eI]=[T,"Invalid account address"]:ei<es?[eN,eI]=[T,"Cannot pay enough gas"]:en===d.BigIntConstants.ZERO?[eN,eI]=[T,"Cannot find avaliable coin ".concat(ec.symbol," to deposit")]:eo===d.BigIntConstants.ZERO?[eN,eI]=[T,"Cannot find avaliable coin ".concat(ep.symbol," to deposit")]:ew<=d.BigIntConstants.ZERO||ew>en?[eN,eI]=[T,"Invalid amount input for ".concat(ec.symbol)]:ey<=d.BigIntConstants.ZERO||ey>eo?[eN,eI]=[T,"Invalid amount input for ".concat(ep.symbol)]:f.canAddLiquidity()?ew>ed&&f.isInitialized()?[eN,eI]=[z,"Input amount for ".concat(ec.symbol," is enough")]:ey>em&&f.isInitialized()?[eN,eI]=[z,"Input amount for ".concat(ep.symbol," is enough")]:!f.isInitialized()&&ey>d.BigIntConstants.ZERO&&ew>d.BigIntConstants.ZERO&&([eN,eI]=["#2e98f1","Pool is initialzed"]):[eN,eI]=[T,"Pool is freeze for adding liquidity"];let eS=(0,r.useCallback)(()=>{if(null!==eI&&eN===T){(0,p._N)(eI);return}let e=async()=>{let e=await v.execute(C,{operation:"add-liquidity",pool:f,xAmount:ew,yAmount:ey,unlockEpoch:null===A?d.BigIntConstants.ZERO:BigInt(A)},{title:"add-liuidity"});return e.isSuccess()&&(q(),Y(),B()),e};(0,S.UI)("Deposit Coin",e()),void 0!==O&&O()},[A,C,f,Y,B,v,eI,eN,q,ew,ey,O]),[eC,eO]=(0,r.useState)(1);(0,r.useEffect)(()=>{if("SLIDER"===Z){let e=BigInt(Math.round(1e4*eC)),t=d.BigIntConstants._1E4,a=ed*e/t,s=em*e/t,l=new d.DemicalFormat(en<a?en:a,eu).toString(!0),i=new d.DemicalFormat(eo<s?eo:s,eh).toString(!0);e===d.BigIntConstants.ZERO&&(l="",i=""),ee(l),ea(i)}},[Z,eC,eu,eh,ed,em,en,eo]);let eE=(0,r.useMemo)(()=>{var e;let t=null!==(e=f.boostMultiplierData.find(e=>e.epoch===A))&&void 0!==e?e:null;if(null===t)return(0,s.jsx)(b.w,{reserveFontWeight:!0});let a=(Number(t.boostMultiplier)/Number(d.PoolInfo.POOL_LSP_DEFAULT_BOOST_MULTIPLIER)).toFixed(1);return(0,s.jsx)("span",{style:{color:g.g6,fontWeight:700},children:a})},[A,f.boostMultiplierData]);return(0,s.jsxs)("div",{ref:U,className:o()["modal-deposit-frame"],children:[(0,s.jsxs)("span",{className:o()["modal-wallet-title-frame"],children:["Deposit",(0,s.jsx)("span",{children:" "}),(0,s.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:ef}),(0,s.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:"/"}),(0,s.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:ex})]}),(0,s.jsxs)("div",{className:o()["modal-deposit-info-frame"],children:[(0,s.jsxs)("div",{className:L?o()["modal-deposit-panel-frame-vertical"]:o()["modal-deposit-panel-frame"],children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,flex:"none",width:L?"100%":void 0},children:[(0,s.jsx)(i(),{src:eg,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,s.jsx)("span",{className:o()["modal-deposit-panel-token-name-label"],children:ef})]}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,width:L?"100%":void 0},children:[(0,s.jsx)("input",{className:L?o()["modal-deposit-panel-token-amount-input-vertical"]:o()["modal-deposit-panel-token-amount-input"],placeholder:"0",style:{color:"CUSTOM"===Z?"#000000":"#2e98f1"},disabled:f.isInitialized()&&ed<=d.BigIntConstants.ZERO||"CUSTOM"!==Z||!er,value:er?J:"",onInput:e=>{er&&eb(e.target.value)}}),(0,s.jsx)("div",{className:o()["modal-deposit-panel-token-amount-label-frame"],children:(0,s.jsxs)("span",{className:o()["modal-deposit-panel-token-amount-label"],children:[(0,s.jsx)("span",{children:"max: "}),er?(0,s.jsx)("span",{children:ev}):(0,s.jsx)(b.w,{reserveFontWeight:!0})]})})]})]}),(0,s.jsxs)("div",{className:L?o()["modal-deposit-panel-frame-vertical"]:o()["modal-deposit-panel-frame"],children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,flex:"none"},children:[(0,s.jsx)(i(),{src:e_,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,s.jsx)("span",{className:o()["modal-deposit-panel-token-name-label"],children:ex})]}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0},children:[(0,s.jsx)("input",{className:L?o()["modal-deposit-panel-token-amount-input-vertical"]:o()["modal-deposit-panel-token-amount-input"],placeholder:"0",style:{color:"CUSTOM"===Z?"#000000":"#2e98f1"},disabled:f.isInitialized()&&em<=d.BigIntConstants.ZERO||"CUSTOM"!==Z||!er,value:er?et:"",onInput:e=>{er&&ek(e.target.value)}}),(0,s.jsx)("div",{className:o()["modal-deposit-panel-token-amount-label-frame"],children:(0,s.jsxs)("span",{className:o()["modal-deposit-panel-token-amount-label"],children:[(0,s.jsx)("span",{children:"max: "}),er?(0,s.jsx)("span",{children:ej}):(0,s.jsx)(b.w,{reserveFontWeight:!0})]})})]})]}),(0,s.jsxs)("div",{style:{width:"100%"},children:[(0,s.jsxs)("div",{className:o()["modal-deposit-panel-quick-select-frame"],children:[(0,s.jsx)("span",{style:{fontSize:10,color:g.vJ},children:"Deposit Amount: "}),f.isInitialized()&&(0,s.jsx)(j.L,{selected:"SLIDER"===Z,onClick:()=>{f.isInitialized()&&er&&P("SLIDER")},children:"RATIO"}),(0,s.jsx)(j.L,{selected:!1,onClick:()=>{"CUSTOM"!==Z&&er&&(P("CUSTOM"),ee(""),ea(""))},children:f.isInitialized()?"CUSTOM":"INITIAL LIQUIDITY"})]}),"SLIDER"===Z&&(0,s.jsxs)("div",{style:{width:"100%",gap:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",padding:"3.5px 6%"},children:[(0,s.jsx)(w.V,{value:eC,onChange:e=>{eO(e)},style:{width:"100%"}}),(0,s.jsx)("span",{style:{fontWeight:"700",fontSize:"13px",minWidth:70,lineHeight:"150%",lineBreak:"anywhere",textAlign:"right",flex:"none",color:g.g6},children:(100*eC).toFixed(2)+"%"})]}),(0,s.jsx)("div",{className:o()["modal-deposit-panel-quick-select-frame"],children:(0,s.jsx)(y.Y,{id:"deposit-modal-liquidity-boost-info",content:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"Your final liquidity mining weight and other Suiswap token distribution activities depend on the liquidity value you provide multiplied by the liquidity boost. "}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Having $1,000 in liquidity with a 2.0 boost value and having $2,000 in liquidity with a 1.0 boost value have the same liquidity mining and activity weight"})]}),children:(0,s.jsxs)("span",{style:{fontSize:10,color:g.vJ},children:["Liquidity Boost: ",eE]})})}),(0,s.jsxs)("div",{className:o()["modal-deposit-panel-quick-select-frame"],children:[(0,s.jsx)("span",{style:{fontSize:10,color:g.vJ},children:"Lock Time: "}),(0,s.jsx)(y.Y,{id:"deposit-modal-lock-epoch-select-button-none",content:"You liquidity will not be unlocked",children:(0,s.jsx)(j.L,{selected:null===A,onClick:()=>{M(null)},children:"NO-LOCK"})}),f.boostMultiplierData.map(e=>{let t=e.epoch,a=t.toString()+" DAY";t%30==0&&(a=Math.round(t/30).toString()+" MONTH"),t%360==0&&(a=Math.round(t/360).toString()+" YEAR"),t%365==0&&(a=Math.round(t/365).toString()+" YEAR");let l=(0,s.jsxs)("span",{children:["You liquidity will be locked ",(0,s.jsx)("b",{children:t})," day before withdraw, but you get ",(0,s.jsx)("b",{children:(Number(e.boostMultiplier)/Number(d.PoolInfo.POOL_LSP_DEFAULT_BOOST_MULTIPLIER)).toFixed(1)})," boost ratio"]});return"mainnet"===F.network&&(30===t||60===t)?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(y.Y,{id:"deposit-modal-lock-epoch-select-button-".concat(t),content:l,children:(0,s.jsx)(j.L,{selected:A==t,onClick:()=>M(t),children:a},t)},t)})]})]}),null!==eI&&null!==eN&&""!==J&&""!==et&&er?(0,s.jsx)(m.OY,{color:eN,message:eI}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(_.U,{text:"Deposit",enabled:eN!==T&&er,onClick:eS,size:{type:"fixed",x:148,y:37}})]})]})},R=e=>{var t,a;let{positionInfo:l,getCoinUi:n,dismissModal:x}=e,g=(0,r.useRef)(null),[v,j]=(0,r.useState)(1e3),{client:w,refreshPool:y}=(0,u.s)(),{wallet:b,connected:k}=(0,f.O)(),{accountAddr:N,accountCoins:I,refreshAccountObjects:C,refreshTransactions:O}=(0,h.K)(),E=null!==b&&"connected"===k&&null!==N,T=n(l.poolInfo.type.xTokenType),z=n(l.poolInfo.type.yTokenType),D=T.symbol,R=z.symbol,F=(0,r.useMemo)(()=>l.partial(new d.DemicalFormat(BigInt(v),3)),[l,v]),[U,W]=(0,r.useMemo)(()=>F.getShareCoinAmounts(),[F]),L=(0,r.useMemo)(()=>{var e;return new d.DemicalFormat(U,null!==(e=T.demical)&&void 0!==e?e:0)},[U,T]),A=(0,r.useMemo)(()=>{var e;return new d.DemicalFormat(W,null!==(e=z.demical)&&void 0!==e?e:0)},[W,z]),M=(0,r.useMemo)(()=>(0,s.jsx)(m.$z,{value:L,width:20,precision:5}),[L]),B=(0,r.useMemo)(()=>(0,s.jsx)(m.$z,{value:A,width:20,precision:5}),[A]),Z=e=>{let t=(e.value-e.min)/(e.max-e.min)*100,a="#2e98f1",s="#f9f9f9",l="linear-gradient(to right, ".concat(a," 0%, ").concat(a," ").concat(t,"%, ").concat(s," ").concat(t,"%, ").concat(s," 100%)");e.style.setProperty("--track-background",l)},P=(0,r.useCallback)(()=>{if(null===b||!1===E||null===w){(0,p._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}let e=async()=>{try{let e=await b.execute(w,{operation:"remove-liquidity",positionInfo:F},{title:"remove-liquidity"});return e.isSuccess()&&(y(F.poolInfo),C(),O()),e}catch(e){throw e}};(0,S.UI)("Harvest Position",e()),void 0!==x&&x()},[F,b,w,E,y,C,O,x]);(0,r.useEffect)(()=>{null!==g.current&&Z(g.current)},[g]);let q=(0,s.jsx)("div",{className:o()["modal-harvest-frame-title"],children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"Harvest "}),(0,s.jsx)("span",{style:{fontWeight:700},children:D}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("span",{style:{fontWeight:700},children:R})]})}),H=(0,s.jsx)("div",{className:o()["modal-harvest-main-frame"],children:(0,s.jsxs)("div",{className:o()["modal-harvest-amount-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-harvest-amount-detail-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-harvest-amount-detail-left-frame"],children:[(0,s.jsx)(i(),{alt:"",src:null!==(t=T.logoUrl)&&void 0!==t?t:c.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,s.jsx)("span",{children:D})]}),(0,s.jsx)("span",{className:o()["modal-harvest-amount-detail-right-frame"],children:M})]}),(0,s.jsxs)("div",{className:o()["modal-harvest-amount-detail-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-harvest-amount-detail-left-frame"],children:[(0,s.jsx)(i(),{alt:"",src:null!==(a=z.logoUrl)&&void 0!==a?a:c.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,s.jsx)("span",{children:R})]}),(0,s.jsx)("span",{className:o()["modal-harvest-amount-detail-right-frame"],children:B})]}),(0,s.jsxs)("div",{className:o()["modal-harvest-amount-slider-frame"],children:[(0,s.jsx)("input",{type:"range",style:{width:200},min:0,max:1,step:.001,ref:g,value:v/1e3,onInput:e=>{Z(e.target);let t=Math.round(1e3*e.target.value);t<0?t=0:t>1e3&&(t=1e3),j(t)}}),(0,s.jsxs)("span",{className:o()["modal-harvest-amount-slider-ratio"],children:[(v/10).toFixed(1),(0,s.jsx)("span",{style:{fontWeight:400},children:"%"})]})]}),(0,s.jsx)(_.U,{enabled:v>0,onClick:P,text:"HARVEST",size:{type:"fixed",x:163,y:45}})]})});return(0,s.jsxs)("div",{className:o()["modal-harvest-frame"],children:[q,H]})},F=e=>{var t,a;let{fromCoinUi:l,toCoinUi:n,fromCoinAmount:p,toCoinAmount:u,swapPrice:h,marketPrice:f,priceImpact:x,style:g,onClick:v}=e,[j,w]=(0,r.useState)(0),y=(0,r.useMemo)(()=>(0,s.jsx)(m.$h,{value:f,hintFontSize:13,width:8,precision:5}),[f]),b=(0,r.useMemo)(()=>(0,s.jsx)(m.$h,{value:h,hintFontSize:13,width:8,precision:5}),[h]),k=(0,r.useMemo)(()=>1===j&&x>=.025?(0,s.jsxs)("span",{style:{fontSize:14,fontWeight:400,color:"rgb(216 103 103)"},children:[(0,s.jsx)("span",{children:"Please make sure that your actual swap price is "}),(0,s.jsx)("span",{style:{fontWeight:700},children:b}),(0,s.jsx)("span",{children:", not "}),(0,s.jsx)("span",{style:{fontWeight:700},children:y}),(0,s.jsx)("span",{children:", you have a relative large price bias to the market price: "}),(0,s.jsx)("span",{style:{fontWeight:700},children:"".concat((100*x).toFixed(2),"%")})]}):(0,s.jsx)(s.Fragment,{}),[j,y,b,x]),N=(0,r.useCallback)(()=>{0===j?x<.025?v&&v():w(1):v&&v()},[v,x,j]),I=(0,s.jsx)("div",{className:o()["modal-confirm-swap-title-frame"],children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"Swap"}),(0,s.jsx)("span",{children:" "}),(0,s.jsx)("span",{style:{fontWeight:700},children:l.symbol}),(0,s.jsx)("span",{children:" to "}),(0,s.jsx)("span",{style:{fontWeight:700},children:n.symbol})]})}),S=(0,s.jsxs)("div",{className:o()["modal-confirm-swap-token-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-confirm-swap-token-frame-left"],children:[(0,s.jsx)(i(),{alt:"",src:null!==(t=l.logoUrl)&&void 0!==t?t:c.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29}),(0,s.jsx)("span",{children:l.symbol})]}),(0,s.jsx)("div",{className:o()["modal-confirm-swap-token-frame-right"],style:{color:"#a73232"},children:(0,s.jsx)("span",{children:"-".concat(p)})})]}),C=(0,s.jsxs)("div",{className:o()["modal-confirm-swap-token-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-confirm-swap-token-frame-left"],children:[(0,s.jsx)(i(),{alt:"",src:null!==(a=n.logoUrl)&&void 0!==a?a:c.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29}),(0,s.jsx)("span",{children:n.symbol})]}),(0,s.jsx)("div",{className:o()["modal-confirm-swap-token-frame-right"],style:{color:"#2e98f1"},children:(0,s.jsx)("span",{children:"+".concat(u)})})]}),O=(0,s.jsxs)("div",{className:o()["modal-confirm-swap-token-frame-outer"],children:[S,C]}),E=(0,s.jsxs)("div",{className:o()["modal-confirm-swap-price-frame"],children:[(0,s.jsxs)("div",{className:o()["modal-confirm-swap-price-frame-top"],children:[(0,s.jsx)("span",{className:o()["modal-confirm-swap-price-frame-top-text-bar"],children:"Swap Price"}),(0,s.jsxs)("span",{className:o()["modal-confirm-swap-price-frame-top-text-bar"],children:[(0,s.jsx)("span",{children:"Price Impact "}),(0,s.jsx)("a",{style:{marginLeft:".15rem"}}),(0,s.jsx)("span",{style:{color:"rgb(202 55 55)",fontWeight:700},children:"".concat((0,d.formatNumeric)((100*x).toFixed(3)),"%")})]})]}),(0,s.jsxs)("span",{className:o()["modal-confirm-swap-price-frame-bottom"],children:[b,(0,s.jsx)("span",{children:" "}),(0,s.jsx)("span",{style:{fontWeight:300},children:"|"}),(0,s.jsx)("span",{children:" "}),(0,s.jsx)("span",{style:{color:"#bebebe"},children:y})]})]}),T=(0,s.jsx)(_.U,{onClick:N,text:0===j?"Confirm & Swap":"I'm Sure !",size:{type:"fixed",x:215.5,y:45.5}}),z=(0,s.jsxs)("div",{style:g,className:o()["modal-confirm-swap-frame"],children:[I,O,E,k,T]});return z},U=e=>{let{avatarUrl:t,address:a,name:l,point:i,details:n,onClick:m}=e,{connected:c}=(0,f.O)(),[p,u]=(0,r.useState)(""),[h,j]=(0,r.useMemo)(()=>{if(!p.startsWith("suiswap-"))return[null,null];let e=p.split("-"),t=null;try{t=BigInt(e[1])}catch(e){}let a=null;try{a=new Uint8Array(C.from(e[2],"base64"))}catch(e){}return[t,a]},[p]),w=""!==l&&(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard-user"],children:[(0,s.jsx)("div",{className:o()["suiswap-points-dashboard-user-image"],children:(0,s.jsx)("img",{alt:"",style:{width:"100%",height:"100%"},src:t})}),(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard-user-right-info"],children:[(0,s.jsx)("div",{className:o()["suiswap-points-dashboard-user-name"],children:l}),void 0!==a?(0,s.jsx)(x.F,{maxWidth:"100%",fontSize:10,fontWeight:800,color:g.E5,children:"".concat((0,d.middleEllipsis)(a,32))}):(0,s.jsx)(_.$,{reprentType:"hollow",text:"LINK SUI ADDRESS",fontSize:10}),(0,s.jsx)("span",{className:o()["suiswap-points-dashboard-user-point"],children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{style:{fontSize:32},children:i}),(0,s.jsx)("span",{style:{fontSize:32},children:" "}),(0,s.jsx)("span",{style:{fontSize:16},children:"Points"})]})})]})]}),y=(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",width:"100%"},children:[(0,s.jsx)(x.F,{fontSize:24,fontWeight:600,color:g.E5,children:"Secret"}),(0,s.jsx)(v.I,{placeholder:"Enter your secrect here to get airdrop",value:p,onChange:u,fontSize:12,style:{fontWeight:700,color:g.E5}})]});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard"],children:[w,y,(0,s.jsx)("div",{className:o()["suiswap-points-item-list"],children:n.map(e=>{let{title:t,name:a,point:l}=e,i=t.toLocaleLowerCase().endsWith("potion")&&0===l,n=i?"\uD83E\uDE84":"+ "+l.toString();return(0,s.jsxs)("div",{className:o()["suiswap-points-item"],style:{background:i?"#c590d563":void 0},children:[(0,s.jsxs)("div",{className:o()["suiswap-points-item-left"],children:[(0,s.jsx)("span",{className:o()["suiswap-points-item-title"],children:t}),(0,s.jsx)("span",{className:o()["suiswap-points-item-name"],children:a})]}),(0,s.jsx)("div",{className:o()["suiswap-points-item-right"],children:n})]},a)})}),null!==h&&null!==j&&(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",alignItems:"flex-start"},children:[(0,s.jsx)(_.$,{reprentType:"hollow",fontSize:12,enabled:"connected"!==c,text:"CONNECT WALLET",style:{marginTop:15},onClick:()=>{void 0!==m&&null!==h&&null!==j&&m(h,j)}}),(0,s.jsx)(_.$,{reprentType:"hollow",fontSize:12,enabled:"connected"===c,text:"AIRDROP",style:{marginTop:15},onClick:()=>{void 0!==m&&null!==h&&null!==j&&m(h,j)}})]})]})})},W=e=>{let{avatarUrl:t,amount:a,decimal:l,address:i,name:n,onClick:r}=e,c=""!==n&&(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard-user"],children:[(0,s.jsx)("div",{className:o()["suiswap-points-dashboard-user-image"],children:(0,s.jsx)("img",{alt:"",src:t,style:{width:"100%",height:"100%"}})}),(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard-user-right-info"],children:[(0,s.jsx)("div",{className:o()["suiswap-points-dashboard-user-name"],children:n}),void 0!==i?(0,s.jsx)(x.F,{maxWidth:"100%",fontSize:10,fontWeight:800,color:g.E5,children:"".concat((0,d.middleEllipsis)(i,32))}):(0,s.jsx)(_.$,{reprentType:"hollow",text:"LINK SUI ADDRESS",fontSize:10})]})]});return(0,s.jsxs)("div",{className:o()["suiswap-points-dashboard"],children:[c,(0,s.jsxs)("div",{className:o()["suiswap-points-confirm-item-list"],children:[(0,s.jsxs)("span",{style:{fontSize:48,width:"100%",textAlign:"center",fontWeight:700,color:g.E5},children:[(0,s.jsx)(m.$z,{value:new d.DemicalFormat(a,l),width:15}),(0,s.jsx)("span",{style:{fontSize:"0.4em",fontWeight:600},children:"SSWP"})]}),(0,s.jsx)(_.$,{onClick:r,reprentType:"hollow",fontSize:14,text:"CHECK YOUR WALLET",style:{marginTop:15}})]})]})}},7292:function(e){e.exports={"suiswap-points-dashboard":"modals_suiswap-points-dashboard__kCgsr","suiswap-points-dashboard-user-image":"modals_suiswap-points-dashboard-user-image__OV7Oz","suiswap-points-dashboard-user-name":"modals_suiswap-points-dashboard-user-name__ZB9P5","suiswap-points-dashboard-user-point":"modals_suiswap-points-dashboard-user-point___hEjk","suiswap-points-dashboard-user-right-info":"modals_suiswap-points-dashboard-user-right-info__EDEMk","suiswap-points-dashboard-user":"modals_suiswap-points-dashboard-user__oYRBq","suiswap-points-item-list":"modals_suiswap-points-item-list__Zw9uw","suiswap-points-confirm-item-list":"modals_suiswap-points-confirm-item-list__tjLpV","suiswap-points-item":"modals_suiswap-points-item__zfu6m","suiswap-points-item-left":"modals_suiswap-points-item-left__c6h4l","suiswap-points-item-title":"modals_suiswap-points-item-title__TEyCp","suiswap-points-item-name":"modals_suiswap-points-item-name__aeIQN","suiswap-points-item-right":"modals_suiswap-points-item-right__WoHYZ","main-frame":"modals_main-frame__XvhON","modal-deposit-panel-token-amount-input":"modals_modal-deposit-panel-token-amount-input__mqH90","modal-deposit-panel-token-amount-input-vertical":"modals_modal-deposit-panel-token-amount-input-vertical__2cHGB","modal-harvest-frame-title":"modals_modal-harvest-frame-title__9ah_G","modal-harvest-amount-detail-left-frame":"modals_modal-harvest-amount-detail-left-frame__pRhS2","modal-wallet-frame":"modals_modal-wallet-frame__FbnQi","modal-deposit-frame":"modals_modal-deposit-frame__BAqC3","modal-wallet-title-frame":"modals_modal-wallet-title-frame___2BHc","swap-frame":"modals_swap-frame__ISt9W","modal-confirm-swap-frame":"modals_modal-confirm-swap-frame__sr8uN","modal-confirm-swap-price-frame":"modals_modal-confirm-swap-price-frame__R4gtD","modal-confirm-swap-price-frame-bottom":"modals_modal-confirm-swap-price-frame-bottom__30C0w","modal-confirm-swap-price-frame-top":"modals_modal-confirm-swap-price-frame-top__0WCj1","modal-confirm-swap-price-frame-top-text-bar":"modals_modal-confirm-swap-price-frame-top-text-bar__jYq0n","modal-confirm-swap-title-frame":"modals_modal-confirm-swap-title-frame__TxVaS","modal-confirm-swap-token-frame":"modals_modal-confirm-swap-token-frame__mj3zf","modal-confirm-swap-token-frame-left":"modals_modal-confirm-swap-token-frame-left__t3_sI","modal-confirm-swap-token-frame-outer":"modals_modal-confirm-swap-token-frame-outer__xW_DN","modal-confirm-swap-token-frame-right":"modals_modal-confirm-swap-token-frame-right__ibuj0","modal-deposit-info-frame":"modals_modal-deposit-info-frame__lPBlJ","modal-deposit-panel-frame":"modals_modal-deposit-panel-frame__FliZ0","modal-deposit-panel-frame-vertical":"modals_modal-deposit-panel-frame-vertical__HozPX","modal-deposit-panel-quick-select-frame":"modals_modal-deposit-panel-quick-select-frame__aXF_H","modal-deposit-panel-token-amount-label":"modals_modal-deposit-panel-token-amount-label__tTdZ_","modal-deposit-panel-token-amount-label-frame":"modals_modal-deposit-panel-token-amount-label-frame__Q5jU8","modal-deposit-panel-token-name-label":"modals_modal-deposit-panel-token-name-label__vfWAl","modal-harvest-amount-detail-frame":"modals_modal-harvest-amount-detail-frame__x_GY1","modal-harvest-amount-detail-right-frame":"modals_modal-harvest-amount-detail-right-frame__fIUla","modal-harvest-amount-frame":"modals_modal-harvest-amount-frame__af1ef","modal-harvest-amount-slider-frame":"modals_modal-harvest-amount-slider-frame__7nLmD","modal-harvest-amount-slider-ratio":"modals_modal-harvest-amount-slider-ratio__eQ_fn","modal-harvest-frame":"modals_modal-harvest-frame__K2w5r","modal-harvest-main-frame":"modals_modal-harvest-main-frame__FOMae","modal-token-list-item-frame":"modals_modal-token-list-item-frame__pBvyo","modal-token-list-item-left-detail-span":"modals_modal-token-list-item-left-detail-span__UO1ZQ","modal-token-list-item-left-frame":"modals_modal-token-list-item-left-frame__nQIWe","modal-token-list-item-left-frame-title":"modals_modal-token-list-item-left-frame-title__b6yE6","modal-token-list-item-left-symbol-span":"modals_modal-token-list-item-left-symbol-span__ZvZ8j","modal-token-list-item-right-frame":"modals_modal-token-list-item-right-frame__3oIZf","modal-token-list-panel-frame":"modals_modal-token-list-panel-frame__GCexz"}}}]);