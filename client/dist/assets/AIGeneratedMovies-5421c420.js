import{a as T,B as W,C as E,p as S,q as I,E as $,G as N,H as q,_ as g,c as K,j as d,b as t,g as R,r as l,S as H,v as J,F as U,I as b,J as V}from"./index-3e55079a.js";import{A as P,C as X,I as Y,E as u,B as M,S as Z}from"./AIGeneratedMovies.styles-701da3ec.js";import{C as ee}from"./CategoryTitle.component-6fa465c6.js";import{S as te}from"./Spin.component-345606c9.js";import"./Spin.styles-cd18b5b4.js";const ne=()=>{const{data:e,isLoading:n,isFetching:a,isError:s}=T("ai-movie-categories",W);return{data:e==null?void 0:e.data,isLoading:n,isFetching:a,isError:s}},re=()=>{const e=E(),n=S(),{mutate:a,isError:s,isLoading:r}=I({mutationFn:$,onSuccess:o=>{e(N(o.data.credit)),n.invalidateQueries("ai-movie-categories")}});return{mutate:a,isError:s,isLoading:r}},ie=()=>{const e=E(),n=S(),{mutate:a,isError:s,isLoading:r,data:o}=I({mutationFn:q,onSuccess:c=>{e(N(c.data.credit)),n.invalidateQueries("ai-movie-categories")}});return{mutate:a,isError:s,isLoading:r,data:o}},ae=g.div.withConfig({displayName:"CategoryCardstyles__Container",componentId:"sc-s3285d-0"})(["position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:350px;width:250px;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;transition:all 2s;transition:0.5s;cursor:pointer;:hover{transform:scale(1.1);box-shadow:0 0 10px 0 rgba(0,0,0,0.5);}"],({image:e})=>e),se=g.div.withConfig({displayName:"CategoryCardstyles__Wrapper",componentId:"sc-s3285d-1"})(["display:flex;flex-direction:column;align-items:center;"]),k=g.div.withConfig({displayName:"CategoryCardstyles__CategoryTitleContainer",componentId:"sc-s3285d-2"})(["min-width:50%;width:fit-content;font-size:1.5rem;text-transform:capitalize;height:max-content;text-align:center;background-color:var(--primary-color);border-radius:5px;padding:2px 5px;margin-bottom:1rem;margin-top:1rem;"]),oe=g.div.withConfig({displayName:"CategoryCardstyles__KeyWordsContainer",componentId:"sc-s3285d-3"})(["font-size:1rem;text-transform:capitalize;height:max-content;text-align:center;background-color:var(--primary-color);border-radius:5px;padding:2px 5px;"]),de=({category:e})=>{const n=K();return d(ae,{onClick:()=>{n(`/ai-generated-movies/${e==null?void 0:e.categoryName}`)},image:()=>{var r,o;return((r=e==null?void 0:e.mainMovie)==null?void 0:r.poster_path)===null?"https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg":`https://image.tmdb.org/t/p/w185//${(o=e==null?void 0:e.mainMovie)==null?void 0:o.poster_path}`},children:[d(se,{children:[t(k,{children:e==null?void 0:e.categoryName}),d(k,{children:["Created by: ",e==null?void 0:e.createdByUser]})]}),t(oe,{children:e==null?void 0:e.keywords.join(", ")})]})},Ce=()=>{const{user:e}=R(i=>i.user),[n,a]=l.useState(""),[s,r]=l.useState(!1),[o,c]=l.useState(!1),[p,m]=l.useState(!1),{data:C,isFetching:h,isLoading:_,isError:f}=ne(),{mutate:L,isLoading:w,isError:v}=re(),{mutate:F,isLoading:x,isError:y,data:le}=ie();l.useEffect(()=>{e&&r(!1)},[e]);const O=()=>{if(p&&m(!1),!e)return r(!0);if(e&&e.credit<1)return c(!0);L()},j=()=>{if(!e)return r(!0);if(e&&e.credit<1)return c(!0);if(n.length<4)return m(!0);p&&m(!1),F(n)},G=i=>{a(i.target.value)},z=()=>C==null?void 0:C.map((i,Q)=>t(de,{category:i},Q)),A=()=>{const i=w||x||h;return d(Y,{children:[s&&t(u,{children:"Must be logged in to generate"}),o&&t(u,{children:"Not enough credits"}),p&&t(u,{children:"Create a genuine category effort"}),t(M,{children:t(b,{disabled:i,title:"generate random category",handleClick:O})}),d(M,{children:[t(V,{type:"text",placeholder:"example: funny movies with a plot twist",name:"generate your own",handleOnChange:G,value:n,width:"26rem"}),t(b,{disabled:i,title:"generate",handleClick:j})]})]})};if(_)return t(H,{children:t(J,{})});const B=()=>{if(h||w||x)return t(Z,{children:t(te,{})})},D=()=>{if(console.log(f||v||y),f||v||y)return t(u,{children:"Damn you AI! Sorry, something went wrong. Try again"})};return d(U,{children:[t(ee,{title:"AI Generated Movies"}),e&&d(P,{children:["Credits remaining: ",e.credit]}),A(),D(),d(X,{children:[B(),z()]})]})};export{Ce as default};
