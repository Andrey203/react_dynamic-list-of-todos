(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),c=a(1),i=a.n(c),l=a(6),u=a(2),p=a(3),d=a(5),m=a(4),h=(a(18),a(19),a(7)),f=a(10),v=a.n(f),b=(a(20),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:"",optionValue:"all",todos:[]},e.setTodos=function(t){e.setState({todos:t})},e.listFilter=function(t){if(e.state.optionValue!==t.target.value)switch(t.target.value){case"all":e.setState({todos:Object(h.a)(e.props.todos),optionValue:"all"});break;case"active":e.setState({todos:e.props.todos.filter((function(e){return!e.completed})),optionValue:"active"});break;case"completed":e.setState({todos:e.props.todos.filter((function(e){return e.completed})),optionValue:"completed"})}},e.inputHandler=function(t){e.setState({inputValue:t.target.value})},e.selectHandler=function(t){e.setState({optionValue:t.target.value})},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.todos.length!==this.props.todos.length&&this.setTodos(Object(h.a)(this.props.todos)),t.inputValue!==this.state.inputValue){if(""!==this.state.inputValue){var n=Object(h.a)(this.props.todos).filter((function(e){return null!==e.title&&e.title.includes(a.state.inputValue)}));this.setTodos(n)}""!==this.state.inputValue&&void 0!==this.state.inputValue||this.setTodos(Object(h.a)(this.props.todos))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=t.inputValue;return s.a.createElement("div",{className:"TodoList"},s.a.createElement("h2",null,"Todos:"),s.a.createElement("div",{className:"TodoList__list-container"},s.a.createElement("input",{type:"text",value:n,onChange:this.inputHandler}),s.a.createElement("select",{onClick:this.listFilter},s.a.createElement("option",{value:"all"},"All"),s.a.createElement("option",{value:"active"},"Active"),s.a.createElement("option",{value:"completed"},"Completed")),s.a.createElement("ul",{className:"TodoList__list"},a.map((function(t){return s.a.createElement("li",{key:t.id,className:v()("TodoList__item",{"TodoList__item--unchecked":!t.completed},{"TodoList__item--checked":t.completed})},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:t.completed,readOnly:!0}),s.a.createElement("p",null,t.title)),s.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return e.props.chooseUser(t.userId)}},"User\xa0#",t.userId))})))))}}]),a}(s.a.Component)),_=a(11),E=(a(21),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:{}},e.clear=function(){e.setState({user:{}})},e.setUser=function(t){e.setState({user:Object(_.a)({},t.data)})},e.getUser=function(){return fetch("https://mate-api.herokuapp.com/users/".concat(e.props.userId)).then((function(e){return e.json()}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:t=e.sent,this.setUser(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.userId===this.props.userId){e.next=5;break}return e.next=3,this.getUser();case 3:a=e.sent,this.setUser(a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=e.id,a=e.name,n=e.email,r=e.phone;return s.a.createElement("div",{className:"CurrentUser"},s.a.createElement("h2",{className:"CurrentUser__title"},s.a.createElement("span",null,"Selected user:",t)),s.a.createElement("h3",{className:"CurrentUser__name"},a),s.a.createElement("p",{className:"CurrentUser__email"},n),s.a.createElement("p",{className:"CurrentUser__phone"},r),s.a.createElement("button",{type:"button",onClick:this.clear},"Clear"))}}]),a}(s.a.Component)),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],selectedUserId:0},e.chooseUser=function(t){e.setState({selectedUserId:t})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()}));case 2:t=e.sent,this.setState({todos:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__sidebar"},s.a.createElement(b,{todos:t,chooseUser:this.chooseUser})),s.a.createElement("div",{className:"App__content"},s.a.createElement("div",{className:"App__content-container"},a?s.a.createElement(E,{userId:a}):"No user selected")))}}]),a}(s.a.Component);o.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.76d18617.chunk.js.map