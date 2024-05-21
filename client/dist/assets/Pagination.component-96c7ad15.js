import{_ as g,u as b,g as I,i as L,c as T,r as l,k as z,j as v,b as u}from"./index-3e55079a.js";const F=g.div`
  display: flex;
  position: sticky;
  z-index: 3;
  top: ${({headerHeight:e})=>`${e}px`};
  justify-content: center;
  background: var(--secondary-color);
`,f=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  font-size: 1.7rem;
  background:${({isActive:e})=>e?"var(--secondary-color-lightest)":"var(--secondary-color-light)"};
  color: var(--text-white);
  padding: 3px 8px;
  border: 1px solid var(--secondary-color-lightest);
  transition: all 0.3s;
  font-weight:${({isActive:e})=>e?"700":null}
  &:hover {
    /* background: var(--secondary-color-lightest);
    color: var(--text-dark); */
  }
  &:focus {
    outline: 0 !important;
  }
`,B=g.div`
  padding: ${({direction:e})=>e==="right"?"0px 3px 0px 0px":"0px 0px 0px 3px"};
`,_=({pages:e})=>{const C=b(),N=I(t=>t.ui.headerHeight),r=Number(C.page),O=L(),j=T(),p=t=>{const n=O.pathname.split("/");n[n.length-1]=t,j(n.join("/"))},[d,w]=l.useState(null),[k,a]=l.useState(0),[S,o]=l.useState(0),[s,y]=l.useState(20),i=e??null,A=z().width;l.useEffect(()=>{d&&m(r)},[d]),l.useEffect(()=>{A<=500?(y(5),o(7)):(y(10),o(10))},[]),l.useEffect(()=>{if(!i)return;let t=[];for(let n=k;n<=i-1;n++)t.push(n+1);w(t)},[i]);const m=t=>{if(p(t),e<=s)return;const n=Math.ceil(s/2),h=t-1>i-n,x=t-n;if(h)return a(d.length-s),o(d.length);if(t<n)return a(0),o(s);a(x),o(x+s)},E=t=>{let n=t>r?1:-1;if(p(t),e<=s)return;const h=Math.ceil(s/2);t-1>i-h||(n===1&&t>h&&(a(c=>c+1),o(c=>c+1)),n===-1&&t>=h&&(a(c=>c-1),o(c=>c-1)))},$=()=>{p(1),a(0),o(s)},H=()=>{p(i),a(i-s),o(i)};return v(F,{headerHeight:N,children:[v(f,{disabled:r===1,onClick:()=>E(r-1),children:[u(B,{direction:"right",children:"←"})," Prev"]}),u(f,{onClick:$,children:"First"}),(()=>d&&d.slice(k,S).map(t=>u("div",{children:u(f,{isActive:t===r,onClick:()=>m(t),children:t})},t)))(),u(f,{onClick:H,children:"Last"}),v(f,{disabled:r===i,onClick:()=>E(r+1),children:["Next ",u(B,{direction:"left",children:"→"})]})]})};export{_ as P};
