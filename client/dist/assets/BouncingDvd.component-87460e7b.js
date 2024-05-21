import{_ as l,k as h,r as g,b as r}from"./index-3e55079a.js";l.div`
  background: black;
`;const f=l.div`
  /* position: fixed; */
  /* opacity: 0.1; */
  top: 0;
  left: 0;
  height: 93vh;
  /* margin: 7vh 14vw; */
`,v=()=>{h().width,h().height;const m=document.getElementById("app"),p=getComputedStyle(m);let n=.5,c;const o=g.useRef(null);let t={x:300,y:400,xSpeed:8,ySpeed:8,speed:25,img:new Image,background:p.getPropertyValue("--secondary-color")};g.useEffect(()=>{u()},[]);const u=()=>{const e=o.current;e.getContext("2d");const i="https://i.ibb.co/pJ8CK41/DVD-1.png";t.img.src=i,e.width=1440,e.height=710,d()},d=()=>{let e;setTimeout(()=>{const i=o.current;i&&(e=i.getContext("2d"),e.fillStyle=t.background,e.fillRect(0,0,i.width,i.height),e.fillStyle=c||"#82d8d8",e.fillRect(t.x,t.y,t.img.width*n,t.img.height*n),e.drawImage(t.img,t.x,t.y,t.img.width*n,t.img.height*n),t.x+=t.xSpeed,t.y+=t.ySpeed,y(),d())},t.speed)},y=()=>{const e=o.current;e&&((t.x+t.img.width*n>=e.width||t.x<=0)&&(t.xSpeed*=-1,a()),(t.y+t.img.height*n>=e.height||t.y<=0)&&(t.ySpeed*=-1,a()))};function a(){let e,i,s;e=Math.random()*(254-0)+0,i=Math.random()*(254-0)+0,s=Math.random()*(254-0)+0,c="rgb("+e+","+i+", "+s+")"}return r(f,{children:r("canvas",{id:"tv-screen",ref:o,width:1e3,height:1e3})})};export{v as B};
