import{W as r,_ as i}from"./index-3e55079a.js";const t=r`
  from {transform:rotate(0deg);}
  to {transform:rotate(720deg);}
`,o=r`
  from {transform:rotate(360deg);}
  to {transform:rotate(0deg);}
  `,e=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,n=i.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  width: 8vmax;
  height: 8vmax;
  border-right: 4px solid var(--primary-color);
  border-radius: 100%;
  animation: ${o} 1s linear infinite;
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-left: 3px solid var(--primary-color);
    border-radius: 100%;
    animation: ${t} 1s linear infinite;
    width: 4vmax;
    height: 4vmax;
    top: calc(50% - 2vmax);
    left: calc(50% - 2vmax);
    border: 0;
    border-right: 2px solid var(--primary-color);
    animation: none;
  }
  &::before {
    content: "";
    width: 6vmax;
    height: 6vmax;
    display: block;
    position: absolute;
    top: calc(50% - 3vmax);
    left: calc(50% - 3vmax);
    border-left: 3px solid var(--primary-color);
    border-radius: 100%;
    animation: ${t} 1s linear infinite;
  }
`;export{e as C,n as S};
