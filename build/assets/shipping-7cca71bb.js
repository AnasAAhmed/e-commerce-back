import{e as l,o as h,f as m,r as i,j as e,p as g,g as x,s as y,_ as j}from"./index-5cb102fc.js";import{B as v}from"./index.esm-a140e6ef.js";const S=()=>{const{cartItems:o,total:c}=l(a=>a.cartReducer),r=h(),p=m(),[t,u]=i.useState({address:"",city:"",state:"",country:"",pinCode:""}),n=a=>{u(s=>({...s,[a.target.name]:a.target.value}))},d=async a=>{a.preventDefault(),p(g(t));try{const{data:s}=await x.post(`${y}/api/v1/payment/create`,{amount:c},{headers:{"Content-Type":"application/json"}});r("/pay",{state:s.clientSecret})}catch(s){console.log(s),j.error("Something went wrong")}};return i.useEffect(()=>{if(o.length<=0)return r("/cart")},[o]),e.jsxs("div",{className:"shipping",children:[e.jsx("button",{className:"back-btn",onClick:()=>r("/cart"),children:e.jsx(v,{})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("h1",{children:"Shipping Address"}),e.jsx("input",{required:!0,type:"text",placeholder:"Address",name:"address",value:t.address,onChange:n}),e.jsx("input",{required:!0,type:"text",placeholder:"City",name:"city",value:t.city,onChange:n}),e.jsx("input",{required:!0,type:"text",placeholder:"State",name:"state",value:t.state,onChange:n}),e.jsxs("select",{name:"country",required:!0,value:t.country,onChange:n,children:[e.jsx("option",{value:"",children:"Choose Country"}),e.jsx("option",{value:"pakistan",children:"Pakistan"})]}),e.jsx("input",{required:!0,type:"number",placeholder:"Pin Code",name:"pinCode",value:t.pinCode,onChange:n}),e.jsx("button",{type:"submit",children:"Pay Now"})]})]})};export{S as default};