import{SvelteComponent as x,append as g,attr as h,create_component as a,destroy_component as i,detach as y,element as C,init as b,insert as A,mount_component as f,noop as D,safe_not_equal as F,space as u,transition_in as $,transition_out as l}from"../web_modules/svelte/internal.js";import"./main.css.proxy.js";import H from"./Header.js";import L from"./Footer.js";import N from"./Discord.js";import S from"./CommandList.js";import q from"./News.js";function T(d){let t,n,c,r,w,o,_,m,j,s,p;return n=new H({}),r=new q({}),o=new N({}),m=new S({}),s=new L({}),{c(){t=C("div"),a(n.$$.fragment),c=u(),a(r.$$.fragment),w=u(),a(o.$$.fragment),_=u(),a(m.$$.fragment),j=u(),a(s.$$.fragment),h(t,"class","w-full")},m(e,v){A(e,t,v),f(n,t,null),g(t,c),f(r,t,null),g(t,w),f(o,t,null),g(t,_),f(m,t,null),g(t,j),f(s,t,null),p=!0},p:D,i(e){if(p)return;$(n.$$.fragment,e),$(r.$$.fragment,e),$(o.$$.fragment,e),$(m.$$.fragment,e),$(s.$$.fragment,e),p=!0},o(e){l(n.$$.fragment,e),l(r.$$.fragment,e),l(o.$$.fragment,e),l(m.$$.fragment,e),l(s.$$.fragment,e),p=!1},d(e){e&&y(t),i(n),i(r),i(o),i(m),i(s)}}}const O="logo.jpg",P="logo with pile of treasure";class k extends x{constructor(d){super();b(this,d,null,T,F,{})}}export default k;
