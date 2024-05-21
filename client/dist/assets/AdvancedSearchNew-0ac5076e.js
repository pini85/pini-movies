import{r as d,b as n,_ as i,j as p,F as R,A as k,m as $,Q as Y,a as S,e as F,I as x,J as _,R as B,c as V,p as z,g as Q,q as D,T as j,U as E,L as M,V as q,X as W}from"./index-3e55079a.js";import{M as G}from"./Modal.component-79b0f4a0.js";import"./Spin.styles-cd18b5b4.js";import{C as P}from"./CategoryTitle.component-6fa465c6.js";const T=d.createContext(),y=()=>{const e=d.useContext(T);if(!e)throw new Error("useAdvancedForm must be used within a AdvancedForm Provider");return e},L=e=>{const[o,a]=d.useState({fromYear:"",toYear:"",minmumRating:"",minumumVotes:"",genre:"",minumumRuntime:""}),[r,t]=d.useState({actors:{type:null,casts:[]},directors:{type:null,casts:[]},writers:{type:null,casts:[]}}),[s,h]=d.useState({actors:"",directors:"",writers:""}),g={handleOnChange:(c,l)=>{l==="input"&&h(f=>({...f,[c.target.name]:c.target.value})),l==="selector"&&a(f=>({...f,[c.target.name]:c.target.value}))},selectorsData:o,setSelectorsData:a,setInputValues:h,inputValues:s,inputData:r,setInputData:t,resetForm:()=>{a({fromYear:"",toYear:"",minmumRating:"",minumumVotes:"",genre:"",minumumRuntime:""}),t({actors:{type:null,casts:[]},directors:{type:null,casts:[]},writers:{type:null,casts:[]}})},searchResults:()=>({...r,...o})};return n(T.Provider,{value:g,...e})},J=i.div`
  display: flex;
  justify-content: center;
  width: 18rem;
  background: var(--secondary-color);
  margin: 0 1rem;
  border-left: 1px solid white;
  border-right: 1px solid white;

  font-size: 1.5rem;
  color: var(--text-white);
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background-color: var(--primary-color-light);
  }
`,U=({name:e,cb:o})=>n(J,{onClick:r=>{o(r.target.innerText)},children:p("div",{children:[" ",e]})}),X=({input:e,dropDownOption:o,showInput:a})=>p(R,{children:[o,n(k,{children:a&&n($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:1},transition:{duration:1},children:e})})]}),Z=({searchQuery:e,type:o})=>{const a={searchQuery:e,showMovies:!1,showCast:!0,moviesNumber:null,castNumber:5,type:o},{suggestions:r}=Y(...Object.values(a));return{suggestions:r}},H=i.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  width: 20rem;
  text-align: center;
  /* background: red; */
`,K=i.div`
  color: ${e=>e.isActive?"var(--text-dark)":"var(--text-white)"};
  background: ${e=>e.isActive?"var(--primary-color)":null};
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  border: 1px solid var(--primary-color);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background: var(--primary-color);
  }
`,ee=i.div`
  width: 100%;
  font-size: 1.5rem;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  background: white;
`,A=i.div`
  cursor: pointer;
  padding: 0.7rem;
  font-weight: 700;
  /* background: var(--secondary-color); */
  &:hover {
    background: var(--primary-color-light);
  }
`,te=({name:e,setShowInput:o,showInput:a})=>{const[r,t]=d.useState(!1),[s,h]=d.useState(!1),{inputData:m,setInputData:u}=y(),v=()=>{t(c=>!c),h(c=>!c)},g=c=>{o(!0),t(l=>!l),h(l=>!l),u({...m,[e]:{...m[e],type:c.target.getAttribute("data-tag")}})};return n(R,{children:!a&&p(H,{children:[n(K,{isActive:s,children:p("h4",{onClick:v,children:["Add ",e]})}),n(k,{children:r&&n($.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:1},style:{overflow:"hidden"},children:p(ee,{children:[p("div",{children:["Do you want ",e," in"]}),n(A,{"data-tag":"or",onClick:c=>g(c),children:"In different movies"}),n("div",{children:"- OR -"}),n(A,{"data-tag":"and",onClick:c=>g(c),children:"In the same movie"})]})})})]})})},ne=i.div.withConfig({displayName:"CreateInputsstyles__CreateInputContainer",componentId:"sc-lcibow-0"})(["position:relative;display:flex;margin:5rem 0;justify-content:center;align-items:center;@media screen and (max-width:700px){flex-direction:column;align-items:center;gap:20px;}"]);i.div.withConfig({displayName:"CreateInputsstyles__Container",componentId:"sc-lcibow-1"})(["position:relative;"]);i.div.withConfig({displayName:"CreateInputsstyles__Wrapper",componentId:"sc-lcibow-2"})(["position:absolute;"]);const re=i.div.withConfig({displayName:"CreateInputsstyles__InputWrapper",componentId:"sc-lcibow-3"})(["display:flex;"]),ae=i.div.withConfig({displayName:"CreateInputsstyles__SuggestionContainer",componentId:"sc-lcibow-4"})(["position:absolute;margin-top:4rem;width:100%;"]),b=({name:e,type:o,inputRef:a,setShowInput:r,showInput:t,value:s,children:h})=>{var N;const{setInputData:m,inputData:u,inputValues:v,setInputValues:g}=y(),{suggestions:c}=Z({searchQuery:s,type:o}),{data:l,refetch:f}=S(s,()=>F(s),{refetchOnWindowFocus:!1,enabled:!1});d.useEffect(()=>{l&&(m({...u,[e]:{...u[e],casts:[...u[e].casts,{name:s,id:l.results[0].id}]}}),a.current.focus(),g({...v,[e]:""}))},[l]);const C=(N=c==null?void 0:c.castObj)==null?void 0:N.casts,I=w=>{w.preventDefault(),f()},O=w=>{g({...v,[e]:w})};return p(re,{children:[n(X,{input:h,dropDownOption:n(te,{name:e,setShowInput:r,showInput:t}),showInput:t}),n(x,{handleClick:I,padding:"0.5rem 1rem",height:"3rem",title:"+"}),C&&s&&n(ae,{children:(()=>C.map(w=>n(U,{name:w.name,cb:O},w.id)))()})]})},oe=()=>{const[e,o]=d.useState(!1),{handleOnChange:a,inputValues:r}=y(),t=r.actors,s=d.useRef();return d.useEffect(()=>{s.current&&s.current.focus()},[e]),n(b,{value:t,name:"actors",type:"Acting",inputRef:s,showInput:e,setShowInput:o,children:n(_,{value:t,ref:s,name:"actors",type:"text",placeholder:"actors",handleOnChange:a,width:"20rem"})})},ie=()=>{const[e,o]=d.useState(!1),{handleOnChange:a,inputValues:r}=y(),t=d.useRef(),s=r.directors;return d.useEffect(()=>{t.current&&t.current.focus()},[e]),n(b,{value:s,name:"directors",type:"Directing",inputRef:t,setShowInput:o,showInput:e,children:n(_,{value:s,ref:t,name:"directors",type:"text",placeholder:"directors",handleOnChange:a})})},se=()=>{const[e,o]=d.useState(!1),{handleOnChange:a,inputValues:r}=y(),t=d.useRef(),s=r.writers;return d.useEffect(()=>{t.current&&t.current.focus()},[e]),n(b,{value:s,name:"writers",type:"Writing",inputRef:t,setShowInput:o,showInput:e,children:n(_,{value:s,ref:t,name:"writers",type:"text",placeholder:"writers",handleOnChange:a})})},ce=()=>p(ne,{children:[n(oe,{}),n(ie,{}),n(se,{})]}),le=i.select`
  color: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--primary-color);
  width: ${({width:e})=>e&&e};
  font-weight: 300;

  text-align-last: center;
  margin: 0 1rem;

  font-size: 1.5rem;
  background: white;
  @media screen and (max-width: 700px) {
    margin: 1rem 1rem;
  }
`,de=i.option`
  display: none;
`,ue=({title:e,name:o,handleOnChange:a,value:r,children:t})=>n("label",{htmlFor:o,style:{width:"100%"},children:p(le,{width:"100%",onChange:s=>a(s,"selector"),value:r,name:o,id:o,children:[n(de,{children:e}),t]})}),me=e=>{const[o,a]=d.useState(null);return d.useEffect(()=>{let r=[];for(let t=new Date().getFullYear();t>e;t--)r.push(n("option",{value:t,children:t},t));a(r)},[]),{createYears:o}},pe=()=>{const[e,o]=d.useState(null);return d.useEffect(()=>{let a=[];for(let r=9;r>=1;r--)a.push(n("option",{value:r,children:r},r));o(a)},[]),{createRating:e}},he=()=>{const[e,o]=d.useState(null),a=[2e4,15e3,1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,500,100];return d.useEffect(()=>{let r=[];for(let t=0;t<a.length;t++)r.push(n("option",{value:a[t],children:a[t]},t));o(r)},[]),{createVoteCount:e}},ge=()=>{const{data:e}=S("movie-genres",B);return{data:e}},ve=()=>{const[e,o]=d.useState(),{data:a}=ge();return d.useEffect(()=>{if(!a)return;let r=[];for(let t=0;t<a.length;t++)r.push(n("option",{value:a[t].id,children:a[t].name},t)),o(r)},[a]),{createGenres:e}},fe=()=>{const[e,o]=d.useState(null),a=["Any run time",1,1.5,2,3],r=t=>{switch(t){case"Any run time":return t;case 1:return`${t} hour - 1.5 hours`;case 1.5:return`${t} hours - ${t+.5} hours`;case 2:return`${t} hours - ${t+1} hours`;case 3:return`more than ${t} hours`}};return d.useEffect(()=>{let t=[];for(let s=0;s<a.length;s++)t.push(n("option",{value:a[s],children:r(a[s])},s));o(t)},[]),{createRunTimes:e}},ye=()=>{const{createYears:e}=me(1902),{createRating:o}=pe(),{createVoteCount:a}=he(),{createGenres:r}=ve(),{createRunTimes:t}=fe();return{createYears:e,createRating:o,createVoteCount:a,createGenres:r,createRunTimes:t}},Ce=i.div.withConfig({displayName:"AdvancedSearchNewstyles__Container",componentId:"sc-pmslgp-0"})([""]);i.div.withConfig({displayName:"AdvancedSearchNewstyles__SearchContainer",componentId:"sc-pmslgp-1"})(["display:flex;flex-direction:column;color:var(--text-white);margin-bottom:3rem;margin-top:1rem;flex-wrap:wrap;justify-content:center;align-items:center;overflow:visible;"]);const we=i.form.withConfig({displayName:"AdvancedSearchNewstyles__FormContainer",componentId:"sc-pmslgp-2"})(["display:flex;flex-direction:column;align-items:center;margin-bottom:3rem;@media screen and (max-width:700px){display:flex;}"]),xe=i.div.withConfig({displayName:"AdvancedSearchNewstyles__SelectorContainer",componentId:"sc-pmslgp-3"})(["display:flex;gap:1rem;@media screen and (max-width:700px){flex-direction:column;align-items:center;& input[type='select']{width:100%;}& label selector{width:100%;}}"]),_e=i.div.withConfig({displayName:"AdvancedSearchNewstyles__BottomSearchContainer",componentId:"sc-pmslgp-4"})(["display:flex;justify-content:center;@media screen and (max-width:700px){flex-direction:column;}"]),Se=i.div.withConfig({displayName:"AdvancedSearchNewstyles__ButtonContainer",componentId:"sc-pmslgp-5"})(["display:flex;justify-content:center;align-items:center;"]),be=i.div.withConfig({displayName:"AdvancedSearchNewstyles__Divider",componentId:"sc-pmslgp-6"})(["margin-top:5rem;display:inline-block;height:33rem;width:2px;background:var(--text-white);@media screen and (max-width:700px){display:none;}"]);i.div.withConfig({displayName:"AdvancedSearchNewstyles__AdvancedSearchResultContainer",componentId:"sc-pmslgp-7"})(["display:flex;@media screen and (max-width:700px){flex-direction:column;}"]);const Ie=()=>{const[e,o]=d.useState([]),{handleOnChange:a,selectorsData:r}=y(),{createYears:t,createRating:s,createVoteCount:h,createGenres:m,createRunTimes:u}=ye();d.useEffect(()=>{o(v)},[t,s,h,m,u]);const v=[{name:"fromYear",title:"From",data:t},{name:"toYear",title:"To",data:t},{name:"rating",title:"Minimum Rating",data:s},{name:"voteCount",title:"Minimum Votes",data:h},{name:"genre",title:"Genre",data:m},{name:"runTime",title:"Minimum Runtime",data:u}];return v&&n(xe,{children:(()=>e.map(c=>n(ue,{value:r[c.name],title:c.title,name:c.name,data:c.data,handleOnChange:a,children:c.data},c.name)))()})},Ne=e=>{switch(e){case 1:return"&with_runtime.lte=90";case 1.5:return"&with_runtime.gte=90&with_runtime.lte=120";case 2:return"&with_runtime.gte=120&with_runtime.lte=180";case 3:return"&with_runtime.gte=180";default:return""}},Ae=e=>{switch(e){case 9:return"&vote_average.gte=9";case 8:return"&vote_average.gte=8";case 7:return"&vote_average.gte=7";case 6:return"&vote_average.gte=6";case 5:return"&vote_average.gte=5";case 4:return"&vote_average.gte=4";case 3:return"&vote_average.gte=3";case 2:return"&vote_average.gte=2";case 1:return"&vote_average.gte=1";default:return""}},Re=e=>{switch(e){case 2e4:return"&vote_count.gte=20000";case 15e3:return"&vote_count.gte=15000";case 1e4:return"&vote_count.gte=10000";case 9e3:return"&vote_count.gte=9000";case 8e3:return"&vote_count.gt=8000";case 7e3:return"&vote_count.gte=7000";case 6e3:return"&vote_count.gte=6000";case 5e3:return"&vote_count.gte=5000";case 4e3:return"&vote_count.gte=4000";case 3e3:return"&vote_count.gte=3000";case 2e3:return"&vote_count.gte=2000";case 1e3:return"&vote_count.gte=1000";case 500:return"&vote_count.gte=500";case 100:return"&vote_count.gte=100";default:return"&vote_count.gte=100"}},ke=e=>{const o=[e.actors,e.directors,e.writers],a=o.some(t=>t.casts.length>0);let r;if(a)r="&with_cast=";else return r="";return o.forEach((t,s)=>{if(t.casts.length<1)return;const h=t.type==="or"?"|":",";t.casts.forEach((m,u)=>{s===0&&u===0?r+=m.id:r+=h+m.id})}),r},$e=e=>e?`&primary_release_date.gte=${e}-01-01`:"",ze=e=>e?`&primary_release_date.lte=${e}-01-01`:"",Qe=e=>{switch(e){case"vote-average":return"&sort_by=vote_average.desc";default:return"&sort_by=vote_average.desc"}},De=e=>e?`&with_genres=${e}`:"",Te=(e,o)=>{const{fromYear:a,toYear:r,genre:t,rating:s,runTime:h,voteCount:m}=o,u=ke(e),v=Ae(Number(s)),g=Ne(Number(h)),c=Re(Number(m)),l=Qe(),f=De(t),C=$e(a).concat(ze(r));return(u+v+g+c+l+f+C).slice(1)},Oe=()=>{const e=V(),{inputData:o,selectorsData:a}=y();return p(we,{children:[n(Ie,{}),n(ce,{}),n(Se,{children:n(x,{handleClick:async t=>{t.preventDefault();const s=Te(o,a);e(`/search/advanced-search/${s}/page/1`)},title:"Search"})})]})},Ye=i.div.withConfig({displayName:"AdvancedSearchResultsstyles__Container",componentId:"sc-ugbjbh-0"})(["margin-top:5rem;width:50%;color:var(--primary-color);font-size:2rem;text-align:center;padding:0 5rem;@media screen and (max-width:700px){width:100%;}"]),Fe=i.div.withConfig({displayName:"AdvancedSearchResultsstyles__Title",componentId:"sc-ugbjbh-1"})(["display:inline-block;position:relative;color:var(--text-white);font-size:2.5rem;margin-bottom:2rem;text-align:center;&::before{content:'';position:absolute;bottom:-5px;left:50%;height:2px;width:95%;background:white;transform:translate(-50%,-50%);}"]),Be=i.div.withConfig({displayName:"AdvancedSearchResultsstyles__ResultWrapper",componentId:"sc-ugbjbh-2"})([""]),Ve=i.span.withConfig({displayName:"AdvancedSearchResultsstyles__ResultSpan",componentId:"sc-ugbjbh-3"})(["display:inline-block;margin-left:5px;color:var(--text-white);&::first-letter{text-transform:uppercase;}"]),je=i.div.withConfig({displayName:"AdvancedSearchResultsstyles__ButtonContainer",componentId:"sc-ugbjbh-4"})(["display:flex;justify-content:center;margin-top:2rem;"]);i.div.withConfig({displayName:"SaveQuerystyles__Container",componentId:"sc-1wtz4zg-0"})(["margin-top:5rem;width:50%;color:var(--text-white);font-size:2rem;text-align:center;padding:0 5rem;@media screen and (max-width:700px){width:100%;}"]);i.div.withConfig({displayName:"SaveQuerystyles__Title",componentId:"sc-1wtz4zg-1"})(["display:inline-block;position:relative;font-size:2.5rem;margin-bottom:2rem;text-align:center;&::before{content:'';position:absolute;bottom:-5px;left:50%;height:2px;width:95%;background:white;transform:translate(-50%,-50%);}"]);const Ee=i.div.withConfig({displayName:"SaveQuerystyles__ButtonContainer",componentId:"sc-1wtz4zg-2"})(["display:flex;justify-content:center;gap:20px;"]);i.div.withConfig({displayName:"SaveQuerystyles__ResultContainer",componentId:"sc-1wtz4zg-3"})(["margin:1rem 0;width:50%;"]);i.div.withConfig({displayName:"SaveQuerystyles__ResultContainerTop",componentId:"sc-1wtz4zg-4"})(["display:flex;"]);i.div.withConfig({displayName:"SaveQuerystyles__ResultContainerBottom",componentId:"sc-1wtz4zg-5"})(["display:flex;"]);i.div.withConfig({displayName:"SaveQuerystyles__Result",componentId:"sc-1wtz4zg-6"})(["color:var(--primary-color);"]);i.div.withConfig({displayName:"SaveQuerystyles__ResultSpan",componentId:"sc-1wtz4zg-7"})(["display:inline-block;margin-left:5px;color:var(--primary-color);"]);const Me=i.div.withConfig({displayName:"SaveQuerystyles__ModalContainer",componentId:"sc-1wtz4zg-8"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;height:30vh;"]),qe=i.div.withConfig({displayName:"SaveQuerystyles__Wrapper",componentId:"sc-1wtz4zg-9"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px;background:var(--secondary-color);padding:4rem;"]),We=i.div.withConfig({displayName:"SaveQuerystyles__ModalTitleContainer",componentId:"sc-1wtz4zg-10"})([""]),Ge=({isSaved:e,setSaved:o})=>{const[a,r]=d.useState(""),t=z(),{inputData:s,selectorsData:h}=y(),m=Q(g=>{var c,l;return(l=(c=g.user)==null?void 0:c.user)==null?void 0:l._id}),u=D(g=>j(m,g),{onSuccess:()=>t.invalidateQueries("saved-queries",m)});return n("div",{children:n(G,{isToggled:e,setToggled:o,title:"save query",children:n(Me,{children:p(qe,{children:[n(We,{children:"What would be the name?"}),n(_,{handleOnChange:g=>r(g.target.value),value:a,placeholder:"name"}),p(Ee,{children:[n(x,{handleClick:()=>{u.mutate({name:a,query:{inputData:s,selectorsData:h}}),o(!1)},title:"save"}),n(x,{handleClick:()=>{o(!1)},title:"cancel"})]})]})})})})},Pe=()=>{const[e,o]=d.useState(!1),{searchResults:a,resetForm:r}=y(),t=()=>Object.entries(a()).map(u=>{let v;const g=u[0].replace(/([A-Z])/g," $1").trim();return u[1].casts?v=u[1].casts.length?u[1].casts.map(l=>n("div",{children:l.name})):"N/A":v=u[1]?u[1]:"N/A",p(Be,{children:[n(Ve,{children:g})," : ",v]},u[0])}),s=()=>r(),h=()=>o(!0);return p(Ye,{children:[n(Fe,{children:"Search Information"}),t(),p(je,{children:[n(x,{handleClick:s,title:"reset"}),n("div",{style:{margin:"0 2rem"}}),n(x,{handleClick:h,title:"save"})]}),n(Ge,{isSaved:e,setSaved:o})]})},Le=i.div`
  color: ${e=>e.textColor};

  & > :nth-child(odd) {
    background: ${e=>`linear-gradient(to right, ${e.color2}, ${e.color1})`};
    text-align: left;
    padding-left: 10%;
    transform: perspective(500px) rotateY(45deg);
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0.5em;
      z-index: -1;
      transition: opacity 0.3s;
      opacity: 0;
      background: ${e=>`linear-gradient(to right, ${e.color1}, ${e.color2})`};
    }
    &:hover::before {
      opacity: 1;
    }
    &:hover {
      transform: perspective(200px) rotateY(45deg);
      padding-left: 5%;
    }
  }

  & > :nth-child(even) {
    background: ${e=>`linear-gradient(to left, ${e.color2}, ${e.color1})`};
    text-align: right;
    padding-right: 10%;
    transform: perspective(500px) rotateY(-45deg);
    z-index: 1;
    &:before {
      background: ${e=>`linear-gradient(to right, ${e.color1}, ${e.color2})`};
    }
    &:hover {
      transform: perspective(200px) rotateY(-45deg);
      padding-right: 5%;
    }
  }
`,Je=({textColor:e,color1:o,color2:a,children:r})=>n(Le,{textColor:e,color1:o,color2:a,children:r}),Ue=i.div`
  box-sizing: border-box;
  width: 12em;
  height: 3em;
  font-size: 20px;
  border-radius: 0.5em;
  margin: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  color: ${e=>e.textColor};
  text-transform: uppercase;
  line-height: 3em;
  font-weight: 700;

  transition: all 0.3s;
  cursor: pointer;
  margin: 2rem;
  /* z-index: 1; */
`,Xe=({handleOptionClick:e,title:o,textColor:a,type:r})=>n(Ue,{onClick:()=>e(r),textColor:a,children:n("div",{children:o})}),Ze=i.div.withConfig({displayName:"AdvancedSearchSavedstyles__Container",componentId:"sc-d7l31s-0"})(["margin-top:5rem;text-align:center;width:50%;color:var(--text-white);font-size:2rem;padding:0 5rem;@media screen and (max-width:700px){width:100%;margin-bottom:4rem;}"]),He=i.div.withConfig({displayName:"AdvancedSearchSavedstyles__SearchContainer",componentId:"sc-d7l31s-1"})(["display:flex;flex-direction:column;align-items:center;"]),Ke=i.div.withConfig({displayName:"AdvancedSearchSavedstyles__Title",componentId:"sc-d7l31s-2"})(["display:inline-block;position:relative;font-size:2.5rem;margin-bottom:4rem;text-align:center;&::before{content:'';position:absolute;bottom:-5px;left:50%;height:2px;width:95%;background:white;transform:translate(-50%,-50%);}"]),et=i.div.withConfig({displayName:"AdvancedSearchSavedstyles__ButtonContainer",componentId:"sc-d7l31s-3"})(["margin:1rem 0;display:flex;align-items:center;"]),tt=i.div.withConfig({displayName:"AdvancedSearchSavedstyles__IconContainer",componentId:"sc-d7l31s-4"})(["margin-left:-5rem;transition:all 0.3s;cursor:pointer;&:hover{transform:scale(1.1) rotate(45deg);}"]),nt=()=>{var c;const e=z(),{setInputData:o,setSelectorsData:a}=y(),r=Q(l=>{var f,C;return(C=(f=l.user)==null?void 0:f.user)==null?void 0:C._id}),{data:t,isLoading:s}=S(["saved-queries",r],()=>E(r),{enabled:!!r}),h=D(l=>W(r,l),{onSuccess:()=>e.invalidateQueries("saved-queries",r)}),m=(c=t==null?void 0:t.data)==null?void 0:c.queries,u=l=>{o(l.query.inputData),a(l.query.selectorsData)},v=l=>{h.mutate(l)};return p(Ze,{children:[n(Ke,{children:"Saved Search Results"}),p(He,{children:[r&&m&&(()=>m.length<1?n("div",{style:{marginBottom:"2rem"},children:"No saved searches"}):m.map(l=>p(et,{children:[n(Je,{color1:"var(--primary-color-light)",color2:"var(--primary-color)",children:n(Xe,{handleOptionClick:()=>u(l),title:l.name,textColor:"white"})}),n(tt,{onClick:()=>v(l._id),children:n(M,{icon:q})})]},l._id)))(),!r&&n("div",{style:{marginBottom:"2rem"},children:"Login to save movies"})]})]})},ct=()=>p(Ce,{children:[n(P,{title:"advanced search"}),p(L,{children:[n(Oe,{}),p(_e,{children:[n(Pe,{}),n(be,{}),n(nt,{})]})]})]});export{ct as default};
