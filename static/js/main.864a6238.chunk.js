(this["webpackJsonpcxbi-front"]=this["webpackJsonpcxbi-front"]||[]).push([[0],{100:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(20),r=n(8),i=n(25),l=n(13),s=n(32),p=n(11),u=n(55),m=n.n(u).a.create({baseURL:"https://elib.nlu.org.ua/mobile/api/index.php",responseType:"json",headers:{accept:"*/*",contentType:"application/json"}});m.interceptors.response.use((function(e){return e}),(function(e){return console.log(e.response.data.errors),Promise.reject(e)}));var d=n(56),h=n.n(d),b=n(34),g={collections:[],object:{}},j=function(e,t){switch(e||(e=g),t.type){case"GET_COLLECTION_SUCCESS":return Object(b.a)({},e,{collections:t.payload.data});case"GET_OBJECT_SUCCESS":case"GET_OBJECT_VIEW_SUCCESS":return Object(b.a)({},e,{object:t.payload.data});default:return e}},E=(n(100),n(126)),O=n(136),f=n(128),v=n(129),y=n(130),C=n(131),w=n(62),T=n.n(w),S=n(63),_=n.n(S),k=Object(E.a)((function(e){return Object(O.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},media:{height:140},card:{textAlign:"center",border:"1px solid #acacac",padding:20}})}));var x=function(e){var t=k();return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{position:"fixed"},c.a.createElement(v.a,null,c.a.createElement(y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(T.a,null)),c.a.createElement(C.a,{variant:"h6",className:t.title},"News"),c.a.createElement(y.a,{edge:"start",className:t.menuButton,color:"inherit"},c.a.createElement(_.a,null)))),e.children)},N=n(21),B=n(15),G=n(22),D=n(23),I=n(24),P=n(28),L=n(132),U=n(133),F=n(134),J=n(135),V=(Object(E.a)((function(e){return Object(O.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},media:{height:140},card:{textAlign:"center",border:"1px solid #acacac",padding:20}})})),function(e){function t(){return Object(N.a)(this,t),Object(G.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.getCollection()}},{key:"render",value:function(){console.log(this.props);return c.a.createElement(c.a.Fragment,null,this.props.collections.map((function(e){return c.a.createElement(P.a,{key:e.id,to:"/collection/"+e.id},c.a.createElement(L.a,{className:"card"},c.a.createElement("img",{className:"card-img",src:"https://elib.nlu.org.ua/resourses/collections/"+e.id+"/cover.jpg"}),c.a.createElement(U.a,{className:"card-content"},c.a.createElement(C.a,{variant:"h5",component:"h2",className:"card-title"},e.title)),c.a.createElement(F.a,null,c.a.createElement(J.a,{size:"small"},"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438"))))})))}}]),t}(a.Component));function M(e){return{type:"GET_COLLECTION",payload:{request:{url:"",method:"POST",data:{action:"getCollection",id:e,language:1}}}}}var R=Object(l.c)((function(e,t){return{collections:e.main.collections}}),(function(e,t){return{getCollection:function(){return e(M(0))}}}))(V);var q,A=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"CollectionItem"},c.a.createElement("img",{title:e.title,src:e.cover,width:"93",height:"97"}),c.a.createElement("div",{title:e.title},e.title)))},W=function(e){function t(){return Object(N.a)(this,t),Object(G.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.match.params.id),this.props.getCollection(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.getCollection(this.props.match.params.id)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.collections.map((function(e){return c.a.createElement(P.a,{key:e.id,to:("book"===e.type?"/object/":"/collection/")+e.id},c.a.createElement(A,{cover:"https://elib.nlu.org.ua/pic.php?w=93&h=97&pic="+("book"===e.type?e.path:"resourses/collections/"+e.id)+"/cover.jpg",title:e.title,id:e.id}))})))}}]),t}(a.Component),X=Object(l.c)((function(e,t){return{collections:e.main.collections}}),(function(e,t){return{getCollection:function(t){return e(M(t))}}}))(W),z=n(64),H=n.n(z),K=function(e){function t(){return Object(N.a)(this,t),Object(G.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.getObject(this.props.match.params.id)}},{key:"render",value:function(){return console.log(this.props),c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,this.props.object.title),c.a.createElement("center",null,c.a.createElement("div",{class:"ObjImg"},c.a.createElement(P.a,{to:"/view/"+this.props.object.id},c.a.createElement("img",{src:"https://elib.nlu.org.ua/pic.php?w=152&h=198&pic="+this.props.object.path+"/cover.jpg"})))),c.a.createElement("div",{class:"book-description"},this.props.object.description),c.a.createElement("div",{className:"ObjBibOpus"},c.a.createElement("b",null,"\u0411\u0456\u0431\u043b\u0456\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u0438\u0439 \u043e\u043f\u0438\u0441:"),c.a.createElement("br",null),"string"===typeof this.props.object.metadata?H()(this.props.object.metadata):""))}}]),t}(a.Component),Q=Object(l.c)((function(e,t){return{object:e.main.object}}),(function(e,t){return{getObject:function(t){return e(function(e){return{type:"GET_OBJECT",payload:{request:{url:"",method:"POST",data:{action:"getObject",id:e,language:1}}}}}(t))}}}))(K),Y=n(65),Z=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(G.a)(this,Object(D.a)(t).call(this,e))).state={page:1},n}return Object(I.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.getObjectView(this.props.match.params.id)}},{key:"goToPage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page-view"},c.a.createElement(Y.a,{onSwipedLeft:function(){e.goToPage(e.state.page+1)},onSwipedRight:function(){e.goToPage(e.state.page-1)},onSwipedDown:function(){},onSwipedUp:function(){}},c.a.createElement("img",{src:"http://elib.nlu.org.ua/"+this.props.object.path+"/jpg/"+(this.props.object.pages?this.props.object.pages[this.state.page]:"")}))))}}]),t}(a.Component),$=Object(l.c)((function(e,t){return{object:e.main.object}}),(function(e,t){return{getObjectView:function(t){return e(function(e){return{type:"GET_OBJECT_VIEW",payload:{request:{url:"",method:"POST",data:{action:"getObjectView",id:e,language:1}}}}}(t))}}}))(Z),ee=Object(p.d)(),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ne=Object(i.e)((q=ee,Object(i.c)({router:Object(s.b)(q),main:j})),te(Object(i.a)(h()(m))));Object(o.render)(c.a.createElement(l.a,{store:ne},c.a.createElement(s.a,{history:ee},c.a.createElement(x,null,c.a.createElement(r.a,{exact:!0,path:"/",component:R}),c.a.createElement(r.a,{exact:!0,path:"/collection/:id",component:X}),c.a.createElement(r.a,{exact:!0,path:"/object/:id",component:Q}),c.a.createElement(r.a,{exact:!0,path:"/view/:id",component:$})))),document.getElementById("root"))},73:function(e,t,n){e.exports=n(113)}},[[73,1,2]]]);
//# sourceMappingURL=main.864a6238.chunk.js.map