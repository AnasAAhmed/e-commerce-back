import{a as f,b as E,r as t,c as N,_ as h,j as e,F,S as _}from"./index-5cb102fc.js";import{P as k}from"./product-card-a4c77911.js";const I=()=>{const u=f(),{data:o,isLoading:x,isError:p,error:g}=E(""),[n,j]=t.useState(""),[i,m]=t.useState(""),[c,v]=t.useState(1e5),[l,P]=t.useState(u.category),[a,d]=t.useState(1),{isLoading:S,data:s,isError:C,error:y}=N({search:n,sort:i,category:l,page:a,price:c}),b=a>1,L=(s==null?void 0:s.totalPage)===a;if(p){const r=g;h.error(r.data.message)}if(C){const r=y;h.error(r.data.message)}return e.jsxs("div",{className:"product-search-page",children:[e.jsxs("aside",{children:[e.jsxs("h2",{children:["Filters ",e.jsx(F,{})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Sort"}),e.jsxs("select",{value:i,onChange:r=>m(r.target.value),children:[e.jsx("option",{value:"",children:"None"}),e.jsx("option",{value:"asc",children:"Price (Low to High)"}),e.jsx("option",{value:"dsc",children:"Price (High to Low)"})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{children:["Max Price: ",c||""]}),e.jsx("input",{type:"range",min:1,max:1e5,value:c,onChange:r=>v(Number(r.target.value))})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Category"}),e.jsxs("select",{value:l,onChange:r=>P(r.target.value),children:[e.jsx("option",{value:"",children:"ALL"}),!x&&(o==null?void 0:o.categories.map(r=>e.jsx("option",{value:r,children:r.toUpperCase()},r)))]})]})]}),e.jsxs("main",{children:[e.jsx("h1",{children:"Products"}),e.jsx("input",{type:"text",placeholder:"Search by name...",value:n,onChange:r=>j(r.target.value)}),S?e.jsx(_,{length:10}):e.jsx("div",{className:"search-product-list",children:s==null?void 0:s.products.map(r=>e.jsx(k,{productId:r._id,name:r.name,price:r.price,photo:r.photo},r._id))}),s&&s.totalPage>1&&e.jsxs("article",{children:[e.jsx("button",{disabled:!b,onClick:()=>d(r=>r-1),children:"Prev"}),e.jsxs("span",{children:[a," of ",s.totalPage]}),e.jsx("button",{disabled:L,onClick:()=>d(r=>r+1),children:"Next"})]})]})]})};export{I as default};
