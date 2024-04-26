(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{5600:function(e,r,i){Promise.resolve().then(i.bind(i,378))},6523:function(e,r,i){"use strict";var t=i(7437);i(2265),r.Z=e=>{let{children:r,startIcon:i}=e;return(0,t.jsxs)("button",{className:"w-full max-h-11 bg-background-dark text-texto-white flex items-center justify-center rounded-lg  pt-5 pb-5 mt-5 font-semibold hover:bg-zinc-500 transition ease-in duration-300",children:[i&&(0,t.jsx)("div",{className:"flex h-full items-center mr-8",children:i}),r]})}},5870:function(e,r,i){"use strict";var t=i(7437);let s=i(2265).forwardRef((e,r)=>{let{hasError:i,...s}=e;return(0,t.jsx)("input",{...s,ref:r,className:"w-full bg-input-background ".concat(i?"border-2 border-error":"border-none"," p-2 box-border rounded-md text-text-dark focus:outline-none shadow-lg")})});s.displayName="CustomInput",r.Z=s},1994:function(e,r,i){"use strict";var t=i(7437);r.Z=e=>{let{children:r}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:"w-full text-sm mt-1 text-error",children:r})})}},7346:function(e,r,i){"use strict";var t=i(7437),s=i(3810);r.Z=()=>(0,t.jsx)("div",{className:"flex fixed h-screen top-0 left-0 w-screen items-center justify-center bg-black bg-opacity-50",children:(0,t.jsx)(s.Z,{size:30})})},378:function(e,r,i){"use strict";i.r(r);var t=i(7437),s=i(3085),l=i(5727),a=i(2265),n=i(4606),o=i(8920),d=i(1865),c=i(4589),u=i.n(c),m=i(1396),f=i.n(m),b=i(5870),h=i(1994),p=i(6523),x=i(4086),v=i(7346),j=i(3046),w=i(4033);r.default=()=>{var e,r,i,c,m;let g=(0,w.useRouter)(),[y,N]=(0,a.useState)(!1),{isAuthenticated:k}=(0,j.v9)(e=>e.userReducer),{register:I,handleSubmit:E,setError:Z,formState:{errors:O}}=(0,d.cI)();(0,a.useEffect)(()=>{k&&g.push("/")},[k]);let _=async e=>{try{N(!0),await (0,s.e5)(l.I8,e.email,e.password),(0,s.Aj)(l.I8,e=>{e&&(window.location.href="/")})}catch(e){if(console.log(e),e.code===s.kq.INVALID_LOGIN_CREDENTIALS)return Z("email",{type:"invalidCredential"});if(e.code===s.kq.INVALID_PASSWORD)return Z("password",{type:"mismatch"})}finally{N(!1)}},S=async()=>{try{var e,r,i;N(!0);let t=await (0,s.rh)(l.I8,l.Vv),a=await (0,x.PL)((0,x.IO)((0,x.hJ)(l.db,"users"),(0,x.ar)("id","==",t.user.uid)));if(!(null===(e=a.docs[0])||void 0===e?void 0:e.data())){let e=null===(r=t.user.displayName)||void 0===r?void 0:r.split(" ")[0],s=null===(i=t.user.displayName)||void 0===i?void 0:i.split(" ")[1];await (0,x.ET)((0,x.hJ)(l.db,"users"),{id:t.user.uid,email:t.user.email,firstName:e,lastName:s})}}catch(e){console.log(e)}finally{N(!1)}};return y?(0,t.jsx)(v.Z,{}):(0,t.jsx)("div",{className:"h-full flex items-center justify-center mt-24",children:(0,t.jsxs)("div",{className:"flex flex-col items-center w-96",children:[(0,t.jsx)("p",{className:"text-texto-dark font-semibold mb-5 text-rem",children:"Entre com a sua conta"}),(0,t.jsxs)("div",{className:"w-full gap-2  max-h-11 bg-background-dark text-texto-white flex items-center justify-center rounded-lg  pt-5 pb-5 mt-5 font-semibold hover:bg-zinc-500 transition ease-in duration-300",children:[(0,t.jsx)(n.VyK,{size:18}),(0,t.jsx)("button",{onClick:S,children:"Entrar com o google"})]}),(0,t.jsx)("p",{className:"text-primary w-full p-3 mb-8 text-center font-medium border-b border-black",children:"ou entre com seu email"}),(0,t.jsxs)("form",{onSubmit:E(_),className:"w-full",children:[(0,t.jsxs)("div",{className:"w-full mb-5",children:[(0,t.jsx)("p",{className:"font-semibold mb-5",children:"E-mail"}),(0,t.jsx)(b.Z,{hasError:!!(null==O?void 0:O.email),placeholder:"Digite seu email",...I("email",{required:!0,validate:e=>u().isEmail(e)})}),(null==O?void 0:null===(e=O.email)||void 0===e?void 0:e.type)==="required"&&(0,t.jsx)(h.Z,{children:"O email \xe9 Obrigat\xf3rio"}),(null==O?void 0:null===(r=O.email)||void 0===r?void 0:r.type)==="validate"&&(0,t.jsx)(h.Z,{children:"Por favor inserir um email valido"})]}),(0,t.jsxs)("div",{className:"w-full mb-5",children:[(0,t.jsx)("p",{className:"font-semibold mb-5",children:"Senha"}),(0,t.jsx)(b.Z,{type:"password",hasError:!!(null==O?void 0:O.password),placeholder:"Digite sua senha",...I("password",{required:!0})}),(null==O?void 0:null===(i=O.password)||void 0===i?void 0:i.type)==="required"&&(0,t.jsx)(h.Z,{children:"A senha \xe9 Obrigat\xf3rio \xe9 Obrigat\xf3rio"}),(null==O?void 0:null===(c=O.email)||void 0===c?void 0:c.type)&&(null==O?void 0:null===(m=O.password)||void 0===m?void 0:m.type)==="invalidCredential"&&(0,t.jsx)(h.Z,{children:"O email ou senha esta incorreto"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(f(),{href:"create-login",className:"border-b border-b-black",children:"Criar conta"})}),(0,t.jsx)(p.Z,{type:"submit",startIcon:(0,t.jsx)(o._fJ,{size:18}),children:"Entrar"})]})]})})}},5727:function(e,r,i){"use strict";i.d(r,{I8:function(){return o},Vv:function(){return d},db:function(){return n}});var t=i(4086),s=i(994),l=i(3085);let a=(0,s.ZF)({apiKey:"AIzaSyBTWfSnkr_a23YFeGb4ONmHlCFIikumY7k",authDomain:"club-ecommerce-313da.firebaseapp.com",projectId:"club-ecommerce-313da",storageBucket:"club-ecommerce-313da.appspot.com",messagingSenderId:"967700354438",appId:"1:967700354438:web:27ce6090a13d6a231a8807"}),n=(0,t.ad)(a),o=(0,l.v0)(a),d=new l.hJ}},function(e){e.O(0,[358,220,447,647,46,181,396,504,971,938,744],function(){return e(e.s=5600)}),_N_E=e.O()}]);