(this.webpackJsonpopentrade=this.webpackJsonpopentrade||[]).push([[0],{13:function(e,a,t){e.exports={Input:"input_Input__2Cny7"}},152:function(e,a,t){e.exports={Backdrop:"backdrop_Backdrop__8vPtZ"}},158:function(e,a,t){e.exports=t.p+"static/media/man.e792d17d.svg"},159:function(e,a,t){e.exports=t.p+"static/media/lock.62f94555.svg"},164:function(e,a,t){e.exports=t(390)},169:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){},25:function(e,a,t){e.exports={ChangePassword:"changePassword_ChangePassword__19Q2o",Draggable:"changePassword_Draggable__3waay",DraggablePart:"changePassword_DraggablePart__2JANn",InputPart:"changePassword_InputPart__lOPye",Error:"changePassword_Error__Iyngo",Input:"changePassword_Input__2ozP0",ButtonPart:"changePassword_ButtonPart__JtbEE"}},3:function(e,a,t){e.exports={SelectPart:"manual_SelectPart__3g6iI",Error:"manual_Error___qenC",Input:"manual_Input__28mE3",ButtonPart:"manual_ButtonPart__3cen8",HeaderGroup:"manual_HeaderGroup__2rcPy",Row:"manual_Row__l7-7w",WrapTitle:"manual_WrapTitle__2ZST2"}},37:function(e,a,t){e.exports=t.p+"static/media/cross.975c33cd.svg"},378:function(e,a,t){},39:function(e,a,t){e.exports={Wrapper:"algoEditor_Wrapper__jCBYY",Draggable:"algoEditor_Draggable__1BJh1",ContentWrapper:"algoEditor_ContentWrapper__2aPvn",Tree:"algoEditor_Tree__1KJdw",Result:"algoEditor_Result__30r2r"}},390:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),i=t.n(r),o=(t(169),t(8)),c=t(9),s=t(10),m=t(11),u=t(12),d=t(34),p=t(162),h=t(62),E=t.n(h),g=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Layout"),this.props.children)}}]),a}(n.Component),b=t(25),v=t.n(b),f=t(44),w=t.n(f),N=t(95),y=t.n(N),O=function(e){var a=e.btnSelector;return a="btnDisabled"===a?l.a.createElement("button",{className:y.a.ButtonDisabled,type:e.type,onClick:e.clicked,disabled:e.disabled},e.caption):l.a.createElement("button",{className:y.a.Button,onClick:e.clicked,disabled:e.disabled,onSubmit:e.submit},e.caption),l.a.createElement(l.a.Fragment,null,a)},_=t(152),S=t.n(_),x=function(e){return e.show?l.a.createElement("div",{className:S.a.Backdrop,onClick:e.clicked}):null},C=(t(68),t(37)),P=t.n(C),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={styles:{border:""},errorMessage:""},t.layout=[{i:"a",x:5,y:0,w:3,h:2.2,minW:2.8,maxW:1/0,minH:2.1,maxH:1/0}],t.onChangePassword=function(){t.setState({styles:{border:"1px solid red"},errorMessage:"Server unreachable"}),console.log(t.state)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:this.props.show}),l.a.createElement(w.a,{className:v.a.changePassword,layout:this.layout,style:{transform:this.props.show?"translateY(0)":"translateY(-150vh)",opacity:this.props.show?"1":"0"},width:1200,verticalCompact:!1,isResizable:!0},l.a.createElement("div",{key:"a",className:v.a.Draggable},l.a.createElement("div",{className:v.a.DraggablePart},l.a.createElement("p",null,"Change Password"),l.a.createElement("img",{src:P.a,alt:"",onClick:this.props.modalClosed})),l.a.createElement("p",{className:v.a.Error},this.state.errorMessage),l.a.createElement("div",{className:v.a.InputPart},l.a.createElement("input",{className:v.a.Input,style:this.state.styles,placeholder:"Change password"}),l.a.createElement("input",{className:v.a.Input,style:this.state.styles,placeholder:"New password"}),l.a.createElement("input",{className:v.a.Input,style:this.state.styles,placeholder:"New password confirmation"})),l.a.createElement("div",{className:v.a.ButtonPart},l.a.createElement(O,{caption:"Submit",clicked:this.onChangePassword}),l.a.createElement(O,{caption:"Cancel",btnSelector:"btnDisabled",clicked:this.props.modalClosed})))))}}]),a}(n.Component),W=t(2),j=t(163),k=(t(178),function e(a){var t=a.options,n={container:function(){return{width:a.containerWidth,marginRight:20}},control:function(e,t){var n=t.isFocused;t.isSelected,t.isHovered;return{width:a.width,height:"20px",border:n?"2px solid #20a8d8":a.invalid?"2px solid red":"2px solid #37373c",borderRadius:"5px",transition:"0.2s ease",backgroundColor:"#202028",color:"#22ADF6",fontSize:"12px",cursor:"pointer",padding:"5px",display:"flex",boxShadow:n?"0px 0px 15px #20a8d8":null}},singleValue:function(){return{color:"#22ADF6",marginBottom:5}},indicatorSeparator:function(){return{border:"none"}},menu:function(){return Object(W.a)({width:a.containerWidth,zIndex:"200",marginLeft:3,position:"absolute",color:"white",background:"rgb(34,173,246)"},"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)")},option:function(){var e;return e={color:"white",height:"20px",background:"rgb(34,173,246)"},Object(W.a)(e,"background","linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)"),Object(W.a)(e,"textAlign","left"),Object(W.a)(e,"fontSize",12),Object(W.a)(e,"padding",5),Object(W.a)(e,"paddingLeft",14),Object(W.a)(e,"fontWeigt","regular "),e},placeholder:function(){return{color:"#555555",marginBottom:5}}};return l.a.createElement(j.a,Object.assign({options:t,name:a.name,styles:n,style:a.style,className:"react-select-container",classNamePrefix:"react-select",defaultValue:a.value,placeholder:a.inputValue,onChange:a.changed},e))}),I=t(52),L=t.n(I),F=t(13),A=t.n(F),H=(t(179),t(15)),V=t(3),M=t.n(V),R=t(5),B=t(14),D=t.n(B),q=t(17),z=t.n(q),Y=function(e){console.log(e)},Q=z()({prefix:"",suffix:""}),G=z()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5});console.log(G);var J=function(e){return e?void 0:"Required"};function U(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:M.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Z=[{value:"Server unreachable",label:"Server unreachable"}],$=[{value:"Limit",label:"Limit"},{value:"Market",label:"Market"},{value:"Shop",label:"Shop"},{value:"Stop Limit",label:"Stop Limit"},{value:"OTC",label:"OTC"}],K=[{value:"Day",label:"Day"},{value:"IOC",label:"IOC"},{value:"OPG",label:"OPG"},{value:"FOK",label:"FOK"}],X=function(e){return l.a.createElement(R.b,{onSubmit:Y,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:M.a.SelectPart},l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security",component:U,validate:J,options:Z,inputValue:"security",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:U,validate:J,options:Z,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:U,validate:J,options:Z,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Type:"),l.a.createElement(R.a,{name:"type",component:U,options:$,width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"TimeInForce:"),l.a.createElement(R.a,{name:"timeInForce",component:U,options:K,width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Q,placeholder:"Quantity",name:"quantity",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price",validate:J},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:G,placeholder:"Price",name:"price",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Stop price:"),l.a.createElement(R.a,{name:"stopPrice"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:G,placeholder:"Stop Price",name:"stopPrice",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:M.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},ee=function(e){console.log(e)},ae=z()({prefix:"",suffix:""}),te=function(e){return e?void 0:"Required"},ne=[{value:"Server unreachable",label:"Server unreachable"}];function le(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:M.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var re=function(e){return l.a.createElement(R.b,{onSubmit:ee,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:M.a.SelectPart},l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security",component:le,validate:te,options:ne,inputValue:"security",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:le,validate:te,options:ne,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:le,validate:te,options:ne,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:te},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:ae,placeholder:"Quantity",name:"quantity",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:M.a.ButtonPart},l.a.createElement("p",null),l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},ie=[{value:"Server unreachable",label:"Server unreachable"}],oe=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],ce=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],se=function(e){console.log(e)},me=z()({prefix:"",suffix:""}),ue=z()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),de=function(e){return e?void 0:"Required"};function pe(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:M.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var he=function(e){return l.a.createElement(R.b,{onSubmit:se,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:M.a.SelectPart},l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security",component:pe,validate:de,options:ie,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:pe,validate:de,options:ie,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:pe,validate:de,options:ie,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:de},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,placeholder:"Quantity",name:"quantity",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:ue,placeholder:"Price",name:"price",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"ValidSeconds:"),l.a.createElement(R.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"validSeconds",placeholder:"300",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"MinSize:"),l.a.createElement(R.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"minSize",placeholder:"0",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"MaxFloor:"),l.a.createElement(R.a,{name:"maxFloor"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"maxFloor",placeholder:"0",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"MaxPov:"),l.a.createElement(R.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:me,name:"MaxPov",placeholder:"0",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Agression:"),l.a.createElement(R.a,{name:"agression",component:pe,validate:de,options:ce,inputValue:"side",width:"340%",containerWidth:"25%"})),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"InternalCross:"),l.a.createElement(R.a,{name:"internalCross",component:pe,options:oe,inputValue:"side",width:"340%",containerWidth:"25%"})))),l.a.createElement("div",{className:M.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},Ee=[{value:"Server unreachable",label:"Server unreachable"}],ge=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],be=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Highest",label:"Highest"}],ve=function(e){console.log(e)},fe=z()({prefix:"",suffix:""}),we=z()({prefix:"$",suffix:"",allowDecimal:!0,decimalLimit:5}),Ne=function(e){return e?void 0:"Required"};function ye(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:M.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var Oe=function(e){return l.a.createElement(R.b,{onSubmit:ve,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:M.a.SelectPart},l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security",component:ye,validate:Ne,options:Ee,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:ye,validate:Ne,options:Ee,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:ye,validate:Ne,options:Ee,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity:"),l.a.createElement(R.a,{name:"quantity",validate:Ne},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,placeholder:"Quantity",name:"quantity",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Price:"),l.a.createElement(R.a,{name:"Price"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:we,placeholder:"Price",name:"price",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"ValidSeconds:"),l.a.createElement(R.a,{name:"validSeconds"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"validSeconds",placeholder:"300",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"MinSize:"),l.a.createElement(R.a,{name:"minSize"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"minSize",placeholder:"0",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"MaxPov:"),l.a.createElement(R.a,{name:"MaxPov"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:fe,name:"MaxPov",placeholder:"0",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Agression:"),l.a.createElement(R.a,{name:"agression",component:ye,validate:Ne,options:be,inputValue:"side",width:"340%",containerWidth:"25%"}))),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"InternalCross:"),l.a.createElement(R.a,{name:"internalCross",component:ye,options:ge,inputValue:"side",width:"340%",containerWidth:"25%"})))),l.a.createElement("div",{className:M.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},_e=[{value:"Server unreachable",label:"Server unreachable"}],Se=function(e){console.log(e)},xe=z()({prefix:"",suffix:""}),Ce=z()({prefix:"",suffix:"",allowDecimal:!0,decimalLimit:5}),Pe=function(e){return e?void 0:"Required"};function Te(e){var a=e.input,t=(a.name,a.options,a.onChange),n=(Object(H.a)(a,["name","options","onChange"]),e.meta),r=Object(H.a)(e,["input","meta"]);return l.a.createElement(k,Object.assign({},r,{className:M.a.Select,options:e.options,name:e.name,changed:t,inputValue:e.inputValue,width:e.width,invalid:n.error&&n.touched,containerWidth:e.containerWidth}))}var We=function(e){return l.a.createElement(R.b,{onSubmit:Se,render:function(a){var t=a.handleSubmit;a.form,a.submitting,a.pristine,a.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:M.a.SelectPart},l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security",component:Te,validate:Pe,options:_e,inputValue:"security 1",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account",component:Te,validate:Pe,options:_e,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side",component:Te,validate:Pe,options:_e,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity 1:"),l.a.createElement(R.a,{name:"quantity1",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity",name:"quantity1",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"SYMBOL LEG 2:"),l.a.createElement(R.a,{name:"symbolLeg2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 2",name:"symbolLeg2",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"ACCOUNT 2:"),l.a.createElement(R.a,{name:"accountInput2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Account 2",name:"accountInput2",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security2",component:Te,validate:Pe,options:_e,inputValue:"security 2",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account2",component:Te,validate:Pe,options:_e,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side2",component:Te,validate:Pe,options:_e,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity 2:"),l.a.createElement(R.a,{name:"quantity2",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity 2",name:"quantity2",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"SYMBOL LEG 3:"),l.a.createElement(R.a,{name:"symbolLeg3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:!1,placeholder:"Symbol leg 3",name:"symbolLeg3",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"ACCOUNT 3:"),l.a.createElement(R.a,{name:"accountInput3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{placeholder:"Account 3",mask:!1,name:"accountInput3",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))})))),l.a.createElement("div",{className:M.a.Row},l.a.createElement(R.a,{name:"security3",component:Te,validate:Pe,options:_e,inputValue:"security 3",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"account3",component:Te,validate:Pe,options:_e,inputValue:"account",width:"100%",containerWidth:"30%"}),l.a.createElement(R.a,{name:"side3",component:Te,validate:Pe,options:_e,inputValue:"side",width:"100%",containerWidth:"20%"})),l.a.createElement("div",{className:M.a.Row},l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"Quantity 3:"),l.a.createElement(R.a,{name:"quantity3",validate:Pe},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:xe,placeholder:"Quantity 3",name:"quantity3",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"FastMA:"),l.a.createElement(R.a,{name:"FastMA"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Ce,placeholder:"FastMA",name:"price",defaultValue:"6",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))),l.a.createElement("div",{className:M.a.WrapTitle},l.a.createElement("p",{className:M.a.Title},"SlowMA:"),l.a.createElement(R.a,{name:"SlowMA"},(function(e){var a=e.input,t=e.meta;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,Object.assign({},a,{mask:Ce,placeholder:"SlwoMA",name:"price",defaultValue:"24",className:A.a.Input,style:t.error&&t.touched?{border:"2px solid red"}:null})))}))))),l.a.createElement("div",{className:M.a.ButtonPart},l.a.createElement(O,{caption:"Send",type:"submit"}),l.a.createElement(O,{caption:"Close",btnSelector:"btnDisabled",clicked:e.modalClosed})))}})},je=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={styles:{border:""},errorMessage:"",option:"Manual"},t.options=[{value:"Manual",label:"MANUAL"},{value:"MACrossing",label:"MACrossing"},{value:"TWAP",label:"TWAP"},{value:"AlphaExample",label:"AlphaExample"},{value:"TwapPy",label:"TwapPy"}],t.layout=[{i:"a",x:4,y:0,w:6,h:3,minW:3.3,maxW:1/0,minH:2.9,maxH:1/0}],t.onSelectedChange=function(e){t.setState({option:e.value})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.option;return"Manual"===a?a=l.a.createElement(X,{modalClosed:this.props.modalClosed}):"AlphaExample"===a?a=l.a.createElement(re,{modalClosed:this.props.modalClosed}):"TWAP"===a?a=l.a.createElement(he,{modalClosed:this.props.modalClosed}):"TwapPy"===a?a=l.a.createElement(Oe,{modalClosed:this.props.modalClosed}):"MACrossing"===a&&(a=l.a.createElement(We,{modalClosed:this.props.modalClosed})),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:this.props.show}),l.a.createElement(w.a,{className:L.a.placeOrder,draggableHandle:".Handler",layout:this.layout,width:1200,verticalCompact:!1,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},isResizable:!0},l.a.createElement("div",{key:"a",className:L.a.Draggable},l.a.createElement("div",{className:"Handler"},l.a.createElement("div",{className:L.a.Header},l.a.createElement("div",{className:L.a.HeaderGroup},l.a.createElement("p",null,"Algo: "),l.a.createElement(k,{options:this.options,value:this.options,changed:function(a){return e.onSelectedChange(a)},width:"145%",containerWidth:"30%"})),l.a.createElement("img",{src:P.a,alt:"",onClick:this.props.modalClosed}))),a)))}}]),a}(n.Component),ke=t(39),Ie=t.n(ke),Le=t(96),Fe=t(97),Ae=t.n(Fe),He=(t(378),t(157)),Ve=t.n(He),Me=(t(384),t(385),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).layout=[{i:"a",x:10,y:.5,w:11,h:4,minW:10,maxW:1/0,minH:3.8,maxH:1/0}],t.dataPython={name:"python",toggled:!1,activate:!0,children:[{name:"loading",loading:!0,children:[]}]},t.dataOther={name:"Other",toggled:!1,children:[{name:"loading",loading:!0,children:[]}]},t.onToggle=function(){},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:this.props.show}),l.a.createElement(w.a,{className:Ie.a.AlgoEditor,layout:this.layout,width:1200,draggableHandle:".Handler",verticalCompact:!1,isResizable:!0,style:{transform:this.props.show?"translateY(0)":"translateY(-150vh)",opacity:this.props.show?"1":"0"}},l.a.createElement("div",{key:"a",className:Ie.a.Wrapper},l.a.createElement("div",{className:"Handler"},l.a.createElement("div",{className:Ie.a.Draggable},l.a.createElement("div",null,l.a.createElement("h3",null,"Algo Editor"),l.a.createElement("img",{src:P.a,alt:""})),l.a.createElement("img",{src:P.a,alt:"",onClick:this.props.modalClosed}))),l.a.createElement("div",{className:Ie.a.ContentWrapper},l.a.createElement(Ae.a,{split:"horizontal"},l.a.createElement(Ae.a,{split:"vertical"},l.a.createElement("div",{initialSize:"200px",className:Ie.a.Tree},l.a.createElement(Le.Treebeard,{data:this.dataPython,onToggle:this.onToggle}),l.a.createElement(Le.Treebeard,{data:this.dataOther})),l.a.createElement("div",{className:Ie.a.Editor},l.a.createElement(Ve.a,{placeholder:"Placeholder Text",mode:"python",theme:"twilight",name:"blah2",onLoad:this.onLoad,onChange:this.onChange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:"from",setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2},width:"100%"}))),l.a.createElement("div",{initialSize:"170px"},"debug"))))))}}]),a}(n.Component)),Re=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={showPlaceOrder:!1,showChangePassword:!1,showAlgo:!0},t.placeOrderHandler=function(){t.setState({showPlaceOrder:!0})},t.changePasswordHandler=function(){t.setState({showChangePassword:!0})},t.algoHandler=function(){t.setState({showAlgo:!0})},t.modalClosedHandler=function(){t.setState({showPlaceOrder:!1,showChangePassword:!1,showAlgo:!1})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"dashboard"),l.a.createElement(O,{caption:"Place order",clicked:this.placeOrderHandler}),"  ",l.a.createElement("br",null),l.a.createElement(O,{caption:"Change password",clicked:this.changePasswordHandler})," ",l.a.createElement("br",null),l.a.createElement(O,{caption:"Algo",clicked:this.algoHandler}),l.a.createElement(je,{show:this.state.showPlaceOrder,modalClosed:this.modalClosedHandler}),l.a.createElement(T,{show:this.state.showChangePassword,modalClosed:this.modalClosedHandler}),l.a.createElement(Me,{show:this.state.showAlgo,modalClosed:this.modalClosedHandler}))}}]),a}(n.Component),Be=t(99),De=t.n(Be),qe=function(e){return l.a.createElement("div",{className:De.a.InputBox},l.a.createElement("img",{src:e.img,alt:""}),l.a.createElement("input",{onChange:e.changed,value:e.value,className:De.a.Input,placeholder:e.placeholder,type:e.type}))},ze=t(158),Ye=t.n(ze),Qe=t(159),Ge=t.n(Qe),Je=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:"",valid:!1,errormessage:"Server unreachable"},t.userInputHandler=function(e){t.setState({username:e.target.value}),t.buttonClicked()},t.passwordInputHandler=function(e){t.setState({password:e.target.value}),t.buttonClicked()},t.buttonClicked=function(){setTimeout((function(){"test"===t.state.username&&"test"===t.state.password?t.setState({valid:!0}):t.setState({valid:!1})}),0)},t.errorHandler=function(){setTimeout((function(){t.setState({errormessage:"Unknown username or password"})}),0)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=""===this.state.username||""===this.state.password,a=this.state.valid?l.a.createElement(O,{clicked:this.props.clicked,caption:"Login",disabled:e}):l.a.createElement(O,{clicked:this.errorHandler,caption:"Login",disabled:e});return l.a.createElement("div",{"data-theme":this.props.dataTheme,className:E.a.Login},l.a.createElement("h1",null,"Login"),l.a.createElement("p",null,"Sing in to your account"),l.a.createElement("p",null,"Username/password: ",l.a.createElement("span",{className:E.a.YellowText},"test/test")),l.a.createElement(qe,{changed:this.userInputHandler,img:Ye.a,placeholder:"Username",type:"text",value:this.state.value}),l.a.createElement(qe,{changed:this.passwordInputHandler,img:Ge.a,value:this.state.value,placeholder:"Password",type:"password"}),a,l.a.createElement("p",null,this.state.errormessage))}}]),a}(n.Component),Ue=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("p",null,"risk")}}]),a}(n.Component),Ze=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={isLogged:!1},t.onLoginPass=function(){new Promise((function(e){e(t.setState({isLogged:!0}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t.onLogout=function(){new Promise((function(e){e(t.setState({isLogged:!1}))})).then((function(e){return localStorage.setItem("isLogged",t.state.isLogged)}))},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("isLogged"));console.log(e),this.setState({isLogged:e})}},{key:"render",value:function(){var e=l.a.createElement(Je,{clicked:this.onLoginPass}),a=this.state.isLogged?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{path:"/dashboard",component:Re}),l.a.createElement(d.b,{path:"/login"},l.a.createElement(d.a,{to:"/dashboard"})),l.a.createElement(d.b,{path:"/risk",component:Ue}),l.a.createElement(d.b,{path:"/",exact:!0},l.a.createElement(d.a,{to:"/dashboard"})),l.a.createElement("button",{onClick:this.onLogout},"Log Out")):l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{path:"/login"},e),l.a.createElement(d.b,{path:"/dashboard"},l.a.createElement(d.a,{to:"/login"})),l.a.createElement(d.b,{path:"/risk"},l.a.createElement(d.a,{to:"/login"})),l.a.createElement(d.b,{path:"/",exact:!0},l.a.createElement(d.a,{to:"/login"})));return l.a.createElement(g,null,l.a.createElement(p.a,null,l.a.createElement(d.d,null,a)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,a,t){e.exports={PlaceOrder:"placeOrder_PlaceOrder__3M5Uy",Draggable:"placeOrder_Draggable__3oNuX",Header:"placeOrder_Header__2sOe0",SelectPart:"placeOrder_SelectPart__3LItk",Error:"placeOrder_Error__1ii4_",Input:"placeOrder_Input__2gafB",ButtonPart:"placeOrder_ButtonPart__2ftAN",HeaderGroup:"placeOrder_HeaderGroup__25_or",Row:"placeOrder_Row__3O4Db",WrapTitle:"placeOrder_WrapTitle__ZivIM"}},62:function(e,a,t){e.exports={Login:"login_Login__3w3_t",YellowText:"login_YellowText__3i5z7"}},68:function(e,a,t){},95:function(e,a,t){e.exports={Button:"button_Button__ZQLJg",ButtonDisabled:"button_ButtonDisabled__1FgY3"}},99:function(e,a,t){e.exports={Input:"input_Input__2z1qa",InputBox:"input_InputBox__JoeFr"}}},[[164,1,2]]]);
//# sourceMappingURL=main.24df554c.chunk.js.map