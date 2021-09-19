(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1Hhe4",summary:"CartItem_summary__Ty6fr",price:"CartItem_price__8M7m3",amount:"CartItem_amount__2d5Cc",actions:"CartItem_actions__2us-w"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1ITz_",total:"Cart_total__3MWvJ",actions:"Cart_actions__3TTN_","button--alt":"Cart_button--alt__2D9sQ",button:"Cart_button__1rso1"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__6OIKx",icon:"HeaderCartButton_icon__2Yblw",badge:"HeaderCartButton_badge__1CprW",bump:"HeaderCartButton_bump__ObMij"}},,function(e,t,n){e.exports={meal:"MealItems_meal__2C9c7",description:"MealItems_description__go9rg",price:"MealItems_price__2R44A"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__30rLa","meals-appear":"AvailableMeals_meals-appear__2iN22",MealsError:"AvailableMeals_MealsError__3NlQy",MealsLoad:"AvailableMeals_MealsLoad__2Jpmf"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__sbYqs",modal:"Modal_modal__Ybx0M","slide-down":"Modal_slide-down__19FHf"}},,function(e,t,n){e.exports={header:"Header_header__1AbQY","main-image":"Header_main-image__yjakU"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__vD2OM"}},,function(e,t,n){e.exports={card:"Card_card__3D8MG"}},function(e,t,n){e.exports={input:"Input_input__3h43l"}},function(e,t,n){e.exports={form:"MealItemForm_form__2mr9w"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),r=(n(26),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(8),m=n.n(d),j=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(14),x=n.n(O),f=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(17),p=n.n(h),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(15),C=n.n(v),N=n(18),M=n(19),g=n.n(M),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},y=n(3),I=n(20),w=n.n(I),k=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(y.a)({ref:t},e.input))]})})),H=n(21),E=n.n(H),S=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(k,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},D=n(10),F=n.n(D),T=function(e){var t=Object(i.useContext)(u),n="\t\u20b9 ".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:F.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:F.a.description,children:e.description}),Object(o.jsx)("div",{className:F.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(S,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=n(11),B=n.n(R),Y=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(),s=Object(r.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)(!0),m=Object(r.a)(d,2),j=m[0],b=m[1];if(Object(i.useEffect)((function(){b(!0);var e=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-71a5f-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),b(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){b(!1),u(e.message)}))}),[]),j)return Object(o.jsx)("section",{className:B.a.MealsLoad,children:Object(o.jsx)("p",{children:"Loading....."})});if(l)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:l})});var O=n.map((function(e){return Object(o.jsx)(T,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},L=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(Y,{})]})},z=n(12),J=n.n(z),P=function(e){return Object(o.jsx)("div",{className:J.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(o.jsx)("div",{className:J.a.modal,children:Object(o.jsx)("div",{className:J.a.content,children:e.children})})},V=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(P,{onClose:e.onClose}),V),c.a.createPortal(Object(o.jsx)(Q,{children:e.children}),V)]})},W=n(4),G=n.n(W),K=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:G.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:G.a.summary,children:[Object(o.jsx)("span",{className:G.a.price,children:t}),Object(o.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(5),X=n.n(U),Z=function(e){var t=Object(i.useContext)(u),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},r=function(e){t.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(K,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(o.jsxs)(q,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:X.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:X.a.button,children:"Order"})]})]})},$=n(16),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(y.a)(Object(y.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object($.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return ee},ne=function(e){var t=Object(i.useReducer)(te,ee),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ne,{children:[n&&Object(o.jsx)(Z,{onClose:function(){a(!1)}}),Object(o.jsx)(f,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};c.a.render(Object(o.jsx)(ae,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.bd157487.chunk.js.map