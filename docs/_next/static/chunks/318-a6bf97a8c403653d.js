(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{570:function(a,b,c){"use strict";c.d(b,{"$":function(){return n}});var d,e,f,g,h,i=c(1799),j=c(5893),k=c(7694),l=c(7294),m=new Map([["hollow",{fontSize:13,size:{type:"pad",x:"1.61em",y:"1.23em"},base:function(a){return{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",color:null!==(d=a.foreground)&& void 0!==d?d:k.E5,border:"0.077em solid ".concat(null!==(e=a.foreground)&& void 0!==e?e:k.E5),borderRadius:"0.461em",fontWeight:500,lineHeight:"128.5%",letterSpacing:"0.095em",transition:"background 0.8s ease-out, transform 0.5s ease-out, border-radius 0.5s ease-out, box-shadow 0.5s ease-out",flex:"initial"}},hover:function(a){return{background:null!==(f=a.primaryColor)&& void 0!==f?f:k.g6,color:null!==(g=a.background)&& void 0!==g?g:k.fz,border:"0.077em solid ".concat(null!==(h=a.primaryColor)&& void 0!==h?h:k.g6),borderRadius:"0.1538em",transform:"scale(1.01, 1.01) translate(0.3076em, -0.2307692308em)",boxShadow:"0em 0.7692307692em 1em rgba(46, 152, 241, 0.5)"}},disabled:function(a){return{background:k.Np}}}]]),n=function(a){var b=a.text,c=a.onClick,d=a.reprentType,e=a.style,f=a.fontSize,g=a.size,h=a.enabled,k=a.primaryColor,n=a.foreground,o=a.background,p=null==h||h,q=m.get(d),r=q.base,s=q.fontSize,t=q.size,u=q.hover,v=q.disabled,w=r({foreground:n,background:o,primaryColor:k}),x=u?u({foreground:n,background:o,primaryColor:k}):void 0,y=v?v({foreground:n,background:o,primaryColor:k}):void 0,z=(0,l.useState)(!1),A=z[0],B=z[1],C=null!=g?g:t;return(0,j.jsx)("div",{style:(0,i.Z)({display:"flex",gap:0,padding:0},"fixed"===C.type?{width:C.x,height:C.y}:{}),children:(0,j.jsx)("div",{onClick:function(){p&&c&&c()},onMouseEnter:function(){B(!0)},onMouseLeave:function(){B(!1)},style:(0,i.Z)({fontSize:null!=f?f:s},"fixed"===C.type?{width:"100%",height:"100%"}:{paddingLeft:C.x,paddingRight:C.x,paddingTop:C.y,paddingBottom:C.y},{cursor:p?"pointer":"default"},w,A&&x&&p?x:{},!p&&y?y:{},null!=e?e:{}),children:(0,j.jsx)("span",{children:b})})})}},3034:function(a,b,c){"use strict";c.d(b,{I:function(){return h}});var d=c(1799),e=c(5893),f=c(1407),g=c(7294),h=function(a){var b=a.value,c=a.fontSize,h=a.style,i=a.placeholder,j=a.onChange,k=f.O.components.input,l=(0,g.useRef)(null),m=null!=c?c:k.defaultFontSize,n=k.defaultPadding1/k.defaultFontSize*m,o=k.defaultPadding2/k.defaultFontSize*m,p=k.defaultCornerRadiusRatio*m,q=function(a){j(a.target.value)};return(0,e.jsx)("input",{ref:l,value:b,type:"text",placeholder:i,onInput:q,style:(0,d.Z)({fontWeight:"400",width:"100%",fontSize:m,lineHeight:"128.5%",background:"rgba(255, 255, 255, 0.00)",padding:"".concat(n,"px ").concat(n,"px ").concat(n,"px ").concat(o,"px"),borderRadius:p,overflow:"hidden",color:k.defaultColor,border:"none",outline:"none"},null!=h?h:{})})}},7318:function(a,b,c){"use strict";c.d(b,{NC:function(){return G},Qe:function(){return B},TJ:function(){return E},WQ:function(){return F},fQ:function(){return H},sU:function(){return I}});var d=c(7568),e=c(828),f=c(4051),g=c.n(f),h=c(5893),i=c(5675),j=c.n(i),k=c(9789),l=c.n(k),m=c(7294),n=c(9769),o=c(5192),p=c(3092),q=c(6875),r=c(5821),s=c(8713),t=c(1579),u=c(3788),v=c(7716),w=c(889),x=c(570),y=c(3034),z=c(1876).Buffer,A=function(a){var b,c,d=a.coinType,e=a.coinUi,f=a.onClick,g=d.package,i=null!==(b=e.name)&& void 0!==b?b:"";return""===i&&(i="".concat(d.module,"::").concat(d.field)),(0,h.jsxs)("div",{className:l()["modal-token-list-item-frame"],onClick:f,children:[(0,h.jsxs)("div",{className:l()["modal-token-list-item-left-frame"],children:[(0,h.jsx)(j(),{alt:"",src:null!==(c=e.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:30,height:30}),(0,h.jsxs)("span",{style:{width:"210px",overflow:"hidden",whiteSpace:"nowrap"},children:[(0,h.jsx)("span",{className:l()["modal-token-list-item-left-symbol-span"],children:e.symbol}),(0,h.jsx)("span",{className:l()["modal-token-list-item-left-detail-span"],children:" "}),(0,h.jsx)("span",{className:l()["modal-token-list-item-left-detail-span"],children:i})]})]}),(0,h.jsx)("div",{className:l()["modal-token-list-item-right-frame"],children:(0,h.jsx)("span",{children:g.length>13?g.slice(0,10)+"...":g})})]})},B=function(a){var b=a.coinTypeAndUis,c=a.onSelectCoinType;return(0,h.jsxs)("div",{className:l()["modal-wallet-frame"],children:[(0,h.jsx)("div",{className:l()["modal-wallet-title-frame"],children:(0,h.jsx)("span",{children:"Select Token"})}),b.length>0?(0,h.jsx)("div",{className:l()["modal-token-list-panel-frame"],children:b.map(function(a){var b=(0,e.Z)(a,2),d=b[0],f=b[1];return(0,h.jsx)(A,{onClick:function(){void 0!==c&&c(d)},coinType:d,coinUi:f},d.uuid())})}):(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"500",fontSize:"21px",lineHeight:"32px",color:"#9da3ae"},children:"No avaliable token for selecting"})]})},C="#d83939",D="#d88f39",E=function(a){var b,c,f,i,k,p,t,u,v,w,x,y,z,A,B=a.accountAddr,E=a.poolInfo,F=a.getCoinUi,G=a.wallet,H=a.client,I=a.dismissModal,J=E.type.xTokenType,K=E.type.yTokenType,L=H.getPrimaryCoinType(),M=(0,m.useState)("CUSTOM"),N=M[0],O=M[1],P=(0,s.K)().refreshTransactions,Q=(0,m.useState)([]),R=Q[0],S=Q[1],T=(0,m.useState)([]),U=T[0],V=T[1],W=(0,m.useState)([]),X=W[0],Y=W[1],Z=(0,m.useState)(""),$=Z[0],_=Z[1],aa=(0,m.useState)(""),ab=aa[0],ac=aa[1],ad=(0,m.useState)(null),ae=ad[0],af=ad[1],ag=(0,m.useMemo)(function(){return H.getEstimateGasAmount("add-liquidity")},[H]),ah=(0,m.useMemo)(function(){return null===ae?null:ae*ag},[ae,ag]),ai=(null!=X?X:[]).reduce(function(a,b){return a+b.balance},n.BigIntConstants.ZERO);(0,m.useEffect)(function(){var a;(a=(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(null!==G){a.next=2;break}return a.abrupt("return");case 2:return a.prev=2,a.next=5,(0,n.retry)({times:3,ms:2e3,name:"deposit-modal-get-gas-price",fn:(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=af,a.next=3,G.getGasFeePrice();case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}},a)}))});case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),console.log("Error trying to get deposit gas price");case 10:case"end":return a.stop()}},a,null,[[2,7]])})),function(){return a.apply(this,arguments)})()},[G]),(0,m.useEffect)(function(){var a;null!==B&&null!==ah&&(a=(0,d.Z)(g().mark(function a(){var b,c,d,f,h;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=[J,K,L],a.t0=e.Z,a.next=5,H.getSortedAccountCoinsArray(B,b);case 5:a.t1=a.sent,d=(c=(0,a.t0)(a.t1,3))[0],f=c[1],h=c[2],S(d),V(f),Y(h),a.next=18;break;case 15:a.prev=15,a.t2=a.catch(0),console.log(a.t2,"deposit-model-fetch-coin-info");case 18:case"end":return a.stop()}},a,null,[[0,15]])})),function(){return a.apply(this,arguments)})()},[B,G,H,J,K,L,ah]);var aj=(0,m.useMemo)(function(){if(null===ah||null===R||0===R.length)return n.BigIntConstants.ZERO;var a=R.reduce(function(a,b){return a+b.balance},n.BigIntConstants.ZERO),b=n.MoveType.equals(J,L)?a-ah:a;return b>n.BigIntConstants.ZERO?b:n.BigIntConstants.ZERO},[R,ah,J,L]),ak=(0,m.useMemo)(function(){if(null===ah||null===U||0===U.length)return n.BigIntConstants.ZERO;var a=U.reduce(function(a,b){return a+b.balance},n.BigIntConstants.ZERO),b=n.MoveType.equals(K,L)?a-ah:a;return b>n.BigIntConstants.ZERO?b:n.BigIntConstants.ZERO},[U,ah,K,L]),al=null!==R&&null!==U&&null!==X&&null!==ah,am=n.BigIntConstants.ZERO,an=n.BigIntConstants.ZERO;E.isInitialized()&&(E.getDepositXAmount(ak)>aj?(am=aj,an=(an=E.getDepositYAmount(aj))<ak?an:ak):(an=ak,am=(am=E.getDepositXAmount(ak))<aj?am:aj));var ao=F(E.type.xTokenType),ap=F(E.type.yTokenType),aq=null!==(b=ao.demical)&& void 0!==b?b:0,ar=null!==(c=ap.demical)&& void 0!==c?c:0,as=ao.symbol,at=ap.symbol,au=null!==(f=ao.logoUrl)&& void 0!==f?f:"/images/token/unknown-token.svg",av=null!==(i=ap.logoUrl)&& void 0!==i?i:"/images/token/unknown-token.svg",aw=(0,m.useMemo)(function(){return(0,n.truncateNumeric)(new n.DemicalFormat(aj,aq).toString(!0),10)},[aj,aq]),ax=(0,m.useMemo)(function(){return(0,n.truncateNumeric)(new n.DemicalFormat(ak,ar).toString(!0),10)},[ak,ar]),ay=(0,m.useMemo)(function(){var a=n.DemicalFormat.fromString($);return null!==a&&a.canAlignTo(aq)?a.alignTo(aq).value:n.BigIntConstants.ZERO},[$,aq]),az=(0,m.useMemo)(function(){var a=n.DemicalFormat.fromString(ab);return null!==a&&a.canAlignTo(ar)?a.alignTo(ar).value:n.BigIntConstants.ZERO},[ab,ar]),aA=(0,m.useCallback)(function(a){if(""===a){_(""),E.isInitialized()&&ac("");return}if(!(aq<=0&&a.indexOf(".")> -1)){var b=n.DemicalFormat.fromString(a);if(null!==b&&b.canAlignTo(aq)&&b.value>=n.BigIntConstants.ZERO){var c=(b=b.alignTo(aq)).value,d=E.getDepositYAmount(c);c<=aj&&(!E.isInitialized()||d<=ak)&&(_(a),E.isInitialized()&&ac(new n.DemicalFormat(d,ar).toString()))}}},[aj,ak,aq,ar,_,ac,E]),aB=(0,m.useCallback)(function(a){if(""===a){ac(""),E.isInitialized()&&_("");return}if(!(ar<=0&&a.indexOf(".")> -1)){var b=n.DemicalFormat.fromString(a);if(null!==b&&b.canAlignTo(ar)&&b.value>=n.BigIntConstants.ZERO){var c=(b=b.alignTo(ar)).value,d=E.getDepositXAmount(c);c<=ak&&(!E.isInitialized()||d<=aj)&&(ac(a),E.isInitialized()&&_(new n.DemicalFormat(d,aq).toString()))}}},[aj,ak,aq,ar,_,ac,E]),aC=null,aD=null;null===B?(aC=(k=[C,"Invalid account address"])[0],aD=k[1]):ai<ag?(aC=(p=[C,"Cannot pay enough gas"])[0],aD=p[1]):aj===n.BigIntConstants.ZERO?(aC=(t=[C,"Cannot find avaliable coin ".concat(ao.symbol," to deposit")])[0],aD=t[1]):ak===n.BigIntConstants.ZERO?(aC=(u=[C,"Cannot find avaliable coin ".concat(ap.symbol," to deposit")])[0],aD=u[1]):ay<=n.BigIntConstants.ZERO||ay>aj?(aC=(v=[C,"Invalid amount input for ".concat(ao.symbol)])[0],aD=v[1]):az<=n.BigIntConstants.ZERO||az>ak?(aC=(w=[C,"Invalid amount input for ".concat(ap.symbol)])[0],aD=w[1]):E.freeze?(aC=(x=[C,"Pool is freeze for adding liquidity"])[0],aD=x[1]):ay>am&&E.isInitialized()?(aC=(y=[D,"Input amount for ".concat(ao.symbol," is enough")])[0],aD=y[1]):az>an&&E.isInitialized()?(aC=(z=[D,"Input amount for ".concat(ap.symbol," is enough")])[0],aD=z[1]):!E.isInitialized()&&az>n.BigIntConstants.ZERO&&ay>n.BigIntConstants.ZERO&&(aC=(A=["#2e98f1","Pool is initialzed"])[0],aD=A[1]);var aE=(0,r.s)(),aF=aE.refresh,aG=(0,s.K)().refreshAccountObjects,aH=(0,m.useCallback)(function(){if(null!==aD&&aC===C){(0,q._N)(aD);return}var a,b=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.execute(H,{operation:"add-liquidity",pool:E,xAmount:ay,yAmount:az,unlockEpoch:n.BigIntConstants.ZERO},{title:"add-liuidity"});case 2:return(b=a.sent).isSuccess()&&(aF(),aG(),P()),a.abrupt("return",b);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(0,q.pn)(H,"Deposit Coin",b()),void 0!==I&&I()},[H,E,aG,P,G,aD,aC,aF,ay,az,I]),aI=(0,m.useCallback)(function(a,b){var c=am*a/b,d=an*a/b,e=new n.DemicalFormat(aj<c?aj:c,aq).toString(!0),f=new n.DemicalFormat(ak<d?ak:d,ar).toString(!0);_(e),ac(f)},[aq,ar,am,an,aj,ak]);return(0,h.jsxs)("div",{className:l()["modal-wallet-frame"],children:[(0,h.jsx)("div",{className:l()["modal-wallet-title-frame"],children:(0,h.jsxs)("span",{children:["Deposit",(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:as}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:"/"}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:at})]})}),(0,h.jsxs)("div",{className:l()["modal-deposit-info-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-deposit-panel-frame"],children:[(0,h.jsx)(j(),{src:au,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:l()["modal-deposit-panel-token-name-label"],children:as}),(0,h.jsx)("input",{className:l()["modal-deposit-panel-token-amount-input"],placeholder:"0",style:{color:"CUSTOM"===N?"#000000":"#2e98f1"},disabled:E.isInitialized()&&am<=n.BigIntConstants.ZERO||"CUSTOM"!==N||!al,value:$,onInput:function(a){aA(a.target.value)}}),(0,h.jsx)("div",{className:l()["modal-deposit-panel-token-amount-label-frame"],children:(0,h.jsxs)("span",{className:l()["modal-deposit-panel-token-amount-label"],children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:al?aw:"Loading"})]})})]}),(0,h.jsxs)("div",{className:l()["modal-deposit-panel-frame"],children:[(0,h.jsx)(j(),{src:av,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:l()["modal-deposit-panel-token-name-label"],children:at}),(0,h.jsx)("input",{className:l()["modal-deposit-panel-token-amount-input"],placeholder:"0",style:{color:"CUSTOM"===N?"#000000":"#2e98f1"},disabled:E.isInitialized()&&an<=n.BigIntConstants.ZERO||"CUSTOM"!==N||!al,value:ab,onInput:function(a){aB(a.target.value)}}),(0,h.jsx)("div",{className:l()["modal-deposit-panel-token-amount-label-frame"],children:(0,h.jsxs)("span",{className:l()["modal-deposit-panel-token-amount-label"],children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:al?ax:"Loading"})]})})]}),(0,h.jsxs)("div",{className:l()["modal-deposit-panel-quick-select-frame"],children:[(0,h.jsx)(o.cc,{selected:"0.2"===N,onClick:function(){E.isInitialized()&&al&&(O("0.2"),aI(BigInt(2),BigInt(10)))},children:"20%"}),(0,h.jsx)(o.cc,{selected:"0.5"===N,onClick:function(){E.isInitialized()&&al&&(O("0.5"),aI(BigInt(1),BigInt(2)))},children:"50%"}),(0,h.jsx)(o.cc,{selected:"0.75"===N,onClick:function(){E.isInitialized()&&al&&(O("0.75"),aI(BigInt(75),BigInt(100)))},children:"75%"}),(0,h.jsx)(o.cc,{selected:"1.0"===N,onClick:function(){E.isInitialized()&&al&&(O("1.0"),aI(BigInt(1),BigInt(1)))},children:"MAX"}),(0,h.jsx)(o.cc,{selected:!1,onClick:function(){"CUSTOM"!==N&&al&&(O("CUSTOM"),_(""),ac(""))},children:"CUSTOM"})]}),null===aD||null===aC||""===$||""===ab?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(o.OY,{color:aC,message:aD}),(0,h.jsx)(o.Hq,{enabled:aC!==C&&al,onClick:aH,icon:!1})]})]})},F=function(a){var b,c,e=a.positionInfo,f=a.getCoinUi,i=a.dismissModal,k=(0,m.useRef)(null),v=(0,m.useState)(1e3),w=v[0],x=v[1],y=(0,r.s)(),z=y.client,A=y.refreshPool,B=(0,u.O)(),C=B.wallet,D=B.connected,E=(0,s.K)(),F=E.accountAddr,G=(E.accountCoins,E.refreshAccountObjects),H=E.refreshTransactions,I=null!==C&&"connected"===D&&null!==F,J=f(e.poolInfo.type.xTokenType),K=f(e.poolInfo.type.yTokenType),L=J.symbol,M=K.symbol,N=(0,m.useMemo)(function(){return e.partial(new n.DemicalFormat(BigInt(w),3))},[e,w]),O=(0,m.useMemo)(function(){return N.getShareCoinAmounts()},[N]),P=O[0],Q=O[1],R=(0,m.useMemo)(function(){var a;return new n.DemicalFormat(P,null!==(a=J.demical)&& void 0!==a?a:0)},[P,J]),S=(0,m.useMemo)(function(){var a;return new n.DemicalFormat(Q,null!==(a=K.demical)&& void 0!==a?a:0)},[Q,K]),T=(0,m.useMemo)(function(){return(0,h.jsx)(o.$z,{value:R,width:20,precision:5})},[R]),U=(0,m.useMemo)(function(){return(0,h.jsx)(o.$z,{value:S,width:20,precision:5})},[S]),V=function(a){var b=(a.value-a.min)/(a.max-a.min)*100,c="#2e98f1",d="#f9f9f9",e="linear-gradient(to right, ".concat(c," 0%, ").concat(c," ").concat(b,"%, ").concat(d," ").concat(b,"%, ").concat(d," 100%)");a.style.setProperty("--track-background",e)},W=(0,m.useCallback)(function(){if(null===C|| !1===I||null===z){(0,q._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}var a,b=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.execute(z,{operation:"remove-liquidity",positionInfo:N},{title:"remove-liquidity"});case 3:return(b=a.sent).isSuccess()&&(A(N.poolInfo),G(),H()),a.abrupt("return",b);case 8:throw a.prev=8,a.t0=a.catch(0),a.t0;case 11:case"end":return a.stop()}},a,null,[[0,8]])})),function(){return a.apply(this,arguments)});(0,q.pn)(z,"Harvest Position",b()),void 0!==i&&i()},[N,C,z,I,A,G,H,i]);(0,m.useEffect)(function(){null!==k.current&&V(k.current)},[k]);var X=(0,h.jsx)("div",{className:l()["modal-harvest-frame-title"],children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:"Harvest "}),(0,h.jsx)("span",{style:{fontWeight:700},children:L}),(0,h.jsx)("span",{children:"/"}),(0,h.jsx)("span",{style:{fontWeight:700},children:M})]})}),Y=(0,h.jsx)("div",{className:l()["modal-harvest-main-frame"],children:(0,h.jsxs)("div",{className:l()["modal-harvest-amount-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-harvest-amount-detail-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-harvest-amount-detail-left-frame"],children:[(0,h.jsx)(j(),{alt:"",src:null!==(b=J.logoUrl)&& void 0!==b?b:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,h.jsx)("span",{children:L})]}),(0,h.jsx)("span",{className:l()["modal-harvest-amount-detail-right-frame"],children:T})]}),(0,h.jsxs)("div",{className:l()["modal-harvest-amount-detail-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-harvest-amount-detail-left-frame"],children:[(0,h.jsx)(j(),{alt:"",src:null!==(c=K.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,h.jsx)("span",{children:M})]}),(0,h.jsx)("span",{className:l()["modal-harvest-amount-detail-right-frame"],children:U})]}),(0,h.jsxs)("div",{className:l()["modal-harvest-amount-slider-frame"],children:[(0,h.jsx)("input",{type:"range",style:{width:200},min:0,max:1,step:.001,ref:k,value:w/1e3,onInput:function(a){V(a.target);var b=Math.round(1e3*a.target.value);b<0?b=0:b>1e3&&(b=1e3),x(b)}}),(0,h.jsxs)("span",{className:l()["modal-harvest-amount-slider-ratio"],children:[(w/10).toFixed(1),(0,h.jsx)("span",{style:{fontWeight:400},children:"%"})]})]}),(0,h.jsx)(t.Nv,{title:"Harvest",fontSize:18,fontWeight:500,borderRadius:12,size:["fixed",163,37],grow:"always",buttonEnabled:w>0,onClick:W})]})});return(0,h.jsxs)("div",{className:l()["modal-harvest-frame"],children:[X,Y]})},G=function(a){var b,c,d=a.fromCoinUi,e=a.toCoinUi,f=a.fromCoinAmount,g=a.toCoinAmount,i=a.swapPrice,k=a.marketPrice,m=a.priceImpact,q=a.onClick,r=(0,h.jsx)("div",{className:l()["modal-confirm-swap-title-frame"],children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:"Swap"}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:700},children:d.symbol}),(0,h.jsx)("span",{children:" to "}),(0,h.jsx)("span",{style:{fontWeight:700},children:e.symbol})]})}),s=(0,h.jsxs)("div",{className:l()["modal-confirm-swap-token-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-confirm-swap-token-frame-left"],children:[(0,h.jsx)(j(),{alt:"",src:null!==(b=d.logoUrl)&& void 0!==b?b:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:"29",height:"29"}),(0,h.jsx)("span",{children:d.symbol})]}),(0,h.jsx)("div",{className:l()["modal-confirm-swap-token-frame-right"],style:{color:"#a73232"},children:(0,h.jsx)("span",{children:"-".concat(f)})})]}),u=(0,h.jsxs)("div",{className:l()["modal-confirm-swap-token-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-confirm-swap-token-frame-left"],children:[(0,h.jsx)(j(),{alt:"",src:null!==(c=e.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:"29",height:"29"}),(0,h.jsx)("span",{children:e.symbol})]}),(0,h.jsx)("div",{className:l()["modal-confirm-swap-token-frame-right"],style:{color:"#2e98f1"},children:(0,h.jsx)("span",{children:"+".concat(g)})})]}),v=(0,h.jsxs)("div",{className:l()["modal-confirm-swap-token-frame-outer"],children:[s,u]}),w=(0,h.jsxs)("div",{className:l()["modal-confirm-swap-price-frame"],children:[(0,h.jsxs)("div",{className:l()["modal-confirm-swap-price-frame-top"],children:[(0,h.jsx)("span",{className:l()["modal-confirm-swap-price-frame-top-text-bar"],children:"Swap Price"}),(0,h.jsxs)("span",{className:l()["modal-confirm-swap-price-frame-top-text-bar"],children:[(0,h.jsx)("span",{children:"Price Impact "}),(0,h.jsx)("a",{style:{marginLeft:".15rem"}}),(0,h.jsx)("span",{style:{color:"rgb(202 55 55)",fontWeight:700},children:"-".concat((0,n.formatNumeric)((100*m).toFixed(3)),"%")})]})]}),(0,h.jsxs)("span",{className:l()["modal-confirm-swap-price-frame-bottom"],children:[(0,h.jsx)(o.$h,{value:i,hintFontSize:13,width:8,precision:4}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:300},children:"|"}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{color:"#bebebe"},children:(0,h.jsx)(o.$h,{value:k,hintFontSize:13,width:8,precision:4})})]})]}),x=(0,h.jsx)(t.Nv,{title:"Confirm & Swap",fontSize:24,fontWeight:500,borderRadius:12,size:["pad",16,8],grow:"hover",onClick:q}),y=(0,h.jsxs)("div",{className:l()["modal-confirm-swap-frame"],children:[r,v,w,x]});return y},H=function(a){var b=a.avatarUrl,c=a.address,d=a.name,e=a.point,f=a.details,g=a.onClick,i=(0,u.O)().connected,k=(0,m.useState)(""),o=k[0],p=k[1],q=(0,m.useMemo)(function(){if(!o.startsWith("suiswap-"))return[null,null];var a=o.split("-"),b=null;try{b=BigInt(a[1])}catch(c){}var d=null;try{d=new Uint8Array(z.from(a[2],"base64"))}catch(e){}return[b,d]},[o]),r=q[0],s=q[1],t=""!==d&&(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard-user"],children:[(0,h.jsx)("div",{className:l()["suiswap-points-dashboard-user-image"],children:(0,h.jsx)(j(),{width:"100%",height:"100%",src:b,alt:""})}),(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard-user-right-info"],children:[(0,h.jsx)("div",{className:l()["suiswap-points-dashboard-user-name"],children:d}),void 0!==c?(0,h.jsx)(v.F,{maxWidth:"100%",fontSize:10,fontWeight:800,color:w.E5,children:"".concat((0,n.middleEllipsis)(c,32))}):(0,h.jsx)(x.$,{reprentType:"hollow",text:"LINK SUI ADDRESS",fontSize:10}),(0,h.jsx)("span",{className:l()["suiswap-points-dashboard-user-point"],children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{style:{fontSize:32},children:e}),(0,h.jsx)("span",{style:{fontSize:32},children:" "}),(0,h.jsx)("span",{style:{fontSize:16},children:"Points"})]})})]})]}),A=(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"0px",width:"100%"},children:[(0,h.jsx)(v.F,{fontSize:24,fontWeight:600,color:w.E5,children:"Secrect"}),(0,h.jsx)(y.I,{placeholder:"Enter your secrect here to get airdrop",value:o,onChange:p,fontSize:12,style:{fontWeight:700,color:w.E5}})]});return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard"],children:[t,A,(0,h.jsx)("div",{className:l()["suiswap-points-item-list"],children:f.map(function(a){var b=a.title,c=a.name,d=a.point;return(0,h.jsxs)("div",{className:l()["suiswap-points-item"],children:[(0,h.jsxs)("div",{className:l()["suiswap-points-item-left"],children:[(0,h.jsx)("span",{className:l()["suiswap-points-item-title"],children:b}),(0,h.jsx)("span",{className:l()["suiswap-points-item-name"],children:c})]}),(0,h.jsx)("div",{className:l()["suiswap-points-item-right"],children:"+ "+d.toString()})]},c)})}),null!==r&&null!==s&&(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",alignItems:"flex-start"},children:[(0,h.jsx)(x.$,{reprentType:"hollow",fontSize:12,enabled:"connected"!==i,text:"CONNECT WALLET",style:{marginTop:15},onClick:function(){void 0!==g&&null!==r&&null!==s&&g(r,s)}}),(0,h.jsx)(x.$,{reprentType:"hollow",fontSize:12,enabled:"connected"===i,text:"AIRDROP",style:{marginTop:15},onClick:function(){void 0!==g&&null!==r&&null!==s&&g(r,s)}})]})]})})},I=function(a){var b=a.avatarUrl,c=a.amount,d=a.decimal,e=a.address,f=a.name,g=a.onClick,i=""!==f&&(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard-user"],children:[(0,h.jsx)("div",{className:l()["suiswap-points-dashboard-user-image"],children:(0,h.jsx)(j(),{width:"100%",height:"100%",src:b,alt:""})}),(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard-user-right-info"],children:[(0,h.jsx)("div",{className:l()["suiswap-points-dashboard-user-name"],children:f}),void 0!==e?(0,h.jsx)(v.F,{maxWidth:"100%",fontSize:10,fontWeight:800,color:w.E5,children:"".concat((0,n.middleEllipsis)(e,32))}):(0,h.jsx)(x.$,{reprentType:"hollow",text:"LINK SUI ADDRESS",fontSize:10})]})]});return(0,h.jsxs)("div",{className:l()["suiswap-points-dashboard"],children:[i,(0,h.jsxs)("div",{className:l()["suiswap-points-confirm-item-list"],children:[(0,h.jsxs)("span",{style:{fontSize:48,width:"100%",textAlign:"center",fontWeight:700,color:w.E5},children:[(0,h.jsx)(o.$z,{value:new n.DemicalFormat(c,d),width:15}),(0,h.jsx)("span",{style:{fontSize:"0.4em",fontWeight:600},children:"SSWP"})]}),(0,h.jsx)(x.$,{onClick:g,reprentType:"hollow",fontSize:14,text:"CHECK YOUR WALLET",style:{marginTop:15}})]})]})}},9789:function(a){a.exports={"suiswap-points-dashboard":"modals_suiswap-points-dashboard__kCgsr","suiswap-points-dashboard-user-image":"modals_suiswap-points-dashboard-user-image__OV7Oz","suiswap-points-dashboard-user-name":"modals_suiswap-points-dashboard-user-name__ZB9P5","suiswap-points-dashboard-user-point":"modals_suiswap-points-dashboard-user-point___hEjk","suiswap-points-dashboard-user-right-info":"modals_suiswap-points-dashboard-user-right-info__EDEMk","suiswap-points-dashboard-user":"modals_suiswap-points-dashboard-user__oYRBq","suiswap-points-item-list":"modals_suiswap-points-item-list__Zw9uw","suiswap-points-confirm-item-list":"modals_suiswap-points-confirm-item-list__tjLpV","suiswap-points-item":"modals_suiswap-points-item__zfu6m","suiswap-points-item-left":"modals_suiswap-points-item-left__c6h4l","suiswap-points-item-title":"modals_suiswap-points-item-title__TEyCp","suiswap-points-item-name":"modals_suiswap-points-item-name__aeIQN","suiswap-points-item-right":"modals_suiswap-points-item-right__WoHYZ","main-frame":"modals_main-frame__XvhON","modal-deposit-panel-token-amount-input":"modals_modal-deposit-panel-token-amount-input__mqH90","modal-harvest-frame-title":"modals_modal-harvest-frame-title__9ah_G","modal-harvest-amount-detail-left-frame":"modals_modal-harvest-amount-detail-left-frame__pRhS2","modal-wallet-frame":"modals_modal-wallet-frame__FbnQi","modal-wallet-title-frame":"modals_modal-wallet-title-frame___2BHc","swap-frame":"modals_swap-frame__ISt9W","modal-confirm-swap-frame":"modals_modal-confirm-swap-frame__sr8uN","modal-confirm-swap-price-frame":"modals_modal-confirm-swap-price-frame__R4gtD","modal-confirm-swap-price-frame-bottom":"modals_modal-confirm-swap-price-frame-bottom__30C0w","modal-confirm-swap-price-frame-top":"modals_modal-confirm-swap-price-frame-top__0WCj1","modal-confirm-swap-price-frame-top-text-bar":"modals_modal-confirm-swap-price-frame-top-text-bar__jYq0n","modal-confirm-swap-title-frame":"modals_modal-confirm-swap-title-frame__TxVaS","modal-confirm-swap-token-frame":"modals_modal-confirm-swap-token-frame__mj3zf","modal-confirm-swap-token-frame-left":"modals_modal-confirm-swap-token-frame-left__t3_sI","modal-confirm-swap-token-frame-outer":"modals_modal-confirm-swap-token-frame-outer__xW_DN","modal-confirm-swap-token-frame-right":"modals_modal-confirm-swap-token-frame-right__ibuj0","modal-deposit-info-frame":"modals_modal-deposit-info-frame__lPBlJ","modal-deposit-panel-frame":"modals_modal-deposit-panel-frame__FliZ0","modal-deposit-panel-quick-select-frame":"modals_modal-deposit-panel-quick-select-frame__aXF_H","modal-deposit-panel-token-amount-label":"modals_modal-deposit-panel-token-amount-label__tTdZ_","modal-deposit-panel-token-amount-label-frame":"modals_modal-deposit-panel-token-amount-label-frame__Q5jU8","modal-deposit-panel-token-name-label":"modals_modal-deposit-panel-token-name-label__vfWAl","modal-harvest-amount-detail-frame":"modals_modal-harvest-amount-detail-frame__x_GY1","modal-harvest-amount-detail-right-frame":"modals_modal-harvest-amount-detail-right-frame__fIUla","modal-harvest-amount-frame":"modals_modal-harvest-amount-frame__af1ef","modal-harvest-amount-slider-frame":"modals_modal-harvest-amount-slider-frame__7nLmD","modal-harvest-amount-slider-ratio":"modals_modal-harvest-amount-slider-ratio__eQ_fn","modal-harvest-frame":"modals_modal-harvest-frame__K2w5r","modal-harvest-main-frame":"modals_modal-harvest-main-frame__FOMae","modal-token-list-item-frame":"modals_modal-token-list-item-frame__pBvyo","modal-token-list-item-left-detail-span":"modals_modal-token-list-item-left-detail-span__UO1ZQ","modal-token-list-item-left-frame":"modals_modal-token-list-item-left-frame__nQIWe","modal-token-list-item-left-symbol-span":"modals_modal-token-list-item-left-symbol-span__ZvZ8j","modal-token-list-item-right-frame":"modals_modal-token-list-item-right-frame__3oIZf","modal-token-list-panel-frame":"modals_modal-token-list-panel-frame__GCexz"}}}])