(this["webpackJsonpreact-protrips"]=this["webpackJsonpreact-protrips"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),c=n(19),s=n.n(c),a=(n(25),n(7)),l=n(8),j=n(10),o=n(9),d=(n(26),n(27),n(13)),p=n(2),u=(n(28),n(0)),b=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).loadTotalTrips=function(){return Object(u.jsxs)("p",{className:"text",children:[t.props.tripsArray.length," ",Object(u.jsx)("sub",{children:"trip(s)"})]})},t.displayClub=function(){var e=t.props.tripsArray.filter((function(t){return"club"===t[2]}));return Object(u.jsxs)("p",{className:"text",children:[e.length,Object(u.jsx)("sub",{children:Object(u.jsx)("i",{className:"fas fa-sun"})})]})},t.displayTrek=function(){var e=t.props.tripsArray.filter((function(t){return"trek"===t[2]}));return Object(u.jsxs)("p",{className:"text",children:[e.length,Object(u.jsx)("sub",{children:Object(u.jsx)("i",{className:"fas fa-mountain"})})]})},t.displayTropic=function(){var e=t.props.tripsArray.filter((function(t){return"tropic"===t[2]}));return Object(u.jsxs)("p",{className:"text",children:[e.length,Object(u.jsx)("sub",{children:Object(u.jsx)("i",{className:"fas fa-trophy"})})]})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"home",children:[Object(u.jsx)("div",{id:"total-trips",children:this.loadTotalTrips()}),Object(u.jsxs)("div",{id:"individual-trips",children:[this.displayClub(),this.displayTrek(),this.displayTropic()]})]})}}]),n}(r.Component),h=(n(30),function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).pushData=function(){t.props.update("hello")},t.addTrip=function(e){e.preventDefault();var n=[];document.getElementById("date").value>=(new Date).toISOString().slice(0,10)?(n.push(document.getElementById("date").value),n.push(document.getElementById("place").value),n.push(document.getElementById("type").value),t.props.update(n),alert("Trip has been added")):alert("Choose upcoming dates")},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{id:"trip",children:[Object(u.jsx)("h1",{children:"Add Trip"}),Object(u.jsxs)("form",{action:"",children:[Object(u.jsx)("label",{htmlFor:"date",children:"Date:"}),Object(u.jsx)("input",{type:"date",name:"date",id:"date"}),Object(u.jsx)("label",{htmlFor:"place",children:"Place:"}),Object(u.jsx)("input",{type:"text",name:"place",id:"place"}),Object(u.jsx)("label",{htmlFor:"type",children:"Type"}),Object(u.jsxs)("select",{name:"type",id:"type",children:[Object(u.jsx)("option",{value:"trek",children:"Trek"}),Object(u.jsx)("option",{value:"tropic",children:"Tropic"}),Object(u.jsx)("option",{value:"club",children:"Club"})]}),Object(u.jsx)("input",{type:"submit",value:"Submit",onClick:function(e){return t.addTrip(e)}})]})]})}}]),n}(r.Component)),O=(n(31),function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).displayList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=[];e="all"===t?r.props.list.filter((function(t){return t})):r.props.list.filter((function(e){return e[2]===t})),r.setState({list:e})},r.state={list:r.props.list},r}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{id:"list",children:[Object(u.jsx)("h1",{children:"All trips"}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Date"}),Object(u.jsx)("th",{children:"Place"}),Object(u.jsx)("th",{children:"Type"})]}),this.state.list.map((function(t,e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t[0]}),Object(u.jsx)("td",{children:t[1]}),Object(u.jsx)("td",{children:t[2]})]},e)}))]})}),Object(u.jsxs)("form",{action:"",children:[Object(u.jsx)("label",{htmlFor:"",children:"Filter By:"}),Object(u.jsx)("input",{type:"radio",name:"filter",id:"",onChange:function(){return t.displayList("trek")}}),"Trek",Object(u.jsx)("input",{type:"radio",name:"filter",id:"",onChange:function(){return t.displayList("tropic")}}),"Tropic",Object(u.jsx)("input",{type:"radio",name:"filter",id:"",onChange:function(){return t.displayList("club")}}),"Club",Object(u.jsx)("input",{type:"radio",name:"filter",id:"",onChange:function(){return t.displayList("all")}}),"All"]})]})}}]),n}(r.Component)),f=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).updateTrip=function(e){var n=t.state.trips;n.push(e),t.setState({trips:n})},t.state={trips:[]},t}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.state.trips),Object(u.jsx)("div",{id:"side-bar",children:Object(u.jsxs)(d.a,{children:[Object(u.jsxs)("nav",{id:"nav-bar",children:[Object(u.jsx)(d.b,{to:"/home",children:Object(u.jsx)("i",{className:"fas fa-home"})}),Object(u.jsx)(d.b,{to:"/trip",children:Object(u.jsx)("i",{className:"far fa-calendar-plus"})}),Object(u.jsx)(d.b,{to:"/list",children:Object(u.jsx)("i",{className:"fas fa-th-list"})})]}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/home",children:Object(u.jsx)(b,{tripsArray:this.state.trips})}),Object(u.jsx)(p.a,{path:"/trip",children:Object(u.jsx)(h,{add:this.state.trips,update:this.updateTrip})}),Object(u.jsx)(p.a,{path:"/list",children:Object(u.jsx)(O,{list:this.state.trips})})]})]})})}}]),n}(r.Component),x=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(f,{})}}]),n}(r.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.75dd7dd7.chunk.js.map