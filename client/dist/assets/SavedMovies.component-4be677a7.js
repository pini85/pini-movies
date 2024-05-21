import{_ as a,g as r,n as d,b as e,j as n,F as v,D as l}from"./index-3e55079a.js";import{C as c}from"./CategoryTitle.component-6fa465c6.js";const g=a.h1`
  text-align: center;
  color: white;
  font-weight: 700;
`,h=()=>{const i=r(o=>{var t;return(t=o.user)==null?void 0:t.user._id}),{savedMovies:s}=d(i);return s?n(v,{children:[e(c,{"savedMovies-testId":"category-title",title:"Saved Movies"}),e(l,{data:s.movies}),!s.movies.length&&e(g,{children:" No saved movies"})]}):e("div",{children:"Loading"})};export{h as default};
