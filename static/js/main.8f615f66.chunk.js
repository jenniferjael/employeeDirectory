(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(12),c=n.n(r),l=(n(22),n(23),n(0));var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{style:{textDecoration:"underline",color:"blue"},children:"EMPLOYEE DIRECTORY"})})},i=n(13),u=n(14),h=n(17),m=n(16);var d=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("main",{children:Object(l.jsxs)("form",{id:"searchForm",onSubmit:e.handleSearch,style:{textDecoration:"underline",color:"blue"},children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Type employee name...","aria-label":"Recipient's username","aria-describedby":"button-addon2",name:"search",onChange:e.handleChange,value:e.value,id:"employees"}),Object(l.jsx)("button",{className:"btn btn-outline-primary",onClick:e.handleSearch,type:"submit",id:"search",children:"Search"})]})})})};var j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{className:"tableEmployee ",style:{margin:"30px auto"},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{onClick:e.sortByName,children:"Name"}),Object(l.jsx)("th",{children:"Phone"}),Object(l.jsx)("th",{children:"E-mail"})]})}),Object(l.jsx)("tbody",{className:"",children:e.results.map((function(e){return Object(l.jsxs)("tr",{className:"table",children:[Object(l.jsxs)("td",{children:[" ",Object(l.jsx)("img",{className:" ",src:e.picture.medium,alt:""})]}),Object(l.jsxs)("td",{children:[e.name.first+" "+e.name.last,"  "]}),Object(l.jsx)("td",{children:e.cell}),Object(l.jsx)("td",{className:"email",children:Object(l.jsx)("a",{href:e.email,children:e.email})})]},e.login.uuid)}))})]})})},b=n(15),p=n.n(b),y={getEmployees:function(){return p.a.get("https://randomuser.me/api/?results=100&nat=us")}},f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],employeesData:[],ascending:""},e.sortByName=function(){var t=e.state.employeesData;if("asc"===e.state.ascending){var n=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(n),e.setState({employeesData:n,ascending:"desc"})}else{var a=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log(a),e.setState({employeesData:a,ascending:"asc"})}},e.handleChange=function(t){var n=e.state.employees,a=t.target.value,s=n.filter((function(e){return e.name.first.toLowerCase().indexOf(a.toLowerCase())>-1}));e.setState({employeesData:s})},e.searchEmployee=function(){y.getEmployees().then((function(t){return e.setState({employees:t.data.results,employeesData:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),e.state.search||alert("Enter an employee name, please.");var n=e.state,a=n.employees,s=n.search,r=a.filter((function(e){return e.name.first.toLowerCase().includes(s.toLowerCase())}));e.setState({employeesData:r})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getEmployees().then((function(t){return e.setState({employees:t.data.results,employeesData:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{employee:this.state.employees,handleSearch:this.handleSearch,handleChange:this.handleChange}),Object(l.jsx)(j,{results:this.state.employeesData,sortByName:this.sortByName})]})}}]),n}(a.Component);var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};n(43);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.8f615f66.chunk.js.map