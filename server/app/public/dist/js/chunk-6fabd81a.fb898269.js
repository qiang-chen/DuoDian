(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fabd81a"],{"0bac":function(t,e,n){"use strict";var a=n("23c4"),i=n.n(a),o=n("f4db"),s=n("a08f"),c=n("a5ee"),r=Object(o["a"])("tag"),u=r[0],l=r[1];function d(t,e,n,a){var o,r,u=e.type,d=e.mark,f=e.plain,p=e.color,b=e.round,g=e.size,m=f?"color":"backgroundColor",v=(o={},o[m]=p,o);e.textColor&&(v.color=e.textColor);var h={mark:d,plain:f,round:b};return g&&(h[g]=g),t("span",i()([{style:v,class:[l([h,u]),(r={},r[c["e"]]=f,r)]},Object(s["b"])(a,!0)]),[n.default&&n.default()])}d.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},e["a"]=u(d)},"1a53":function(t,e,n){"use strict";var a=n("23c4"),i=n.n(a),o=n("f4db"),s=n("a08f"),c=n("e5f0"),r=n("0049"),u=Object(o["a"])("submit-bar"),l=u[0],d=u[1],f=u[2];function p(t,e,n,a){var o=e.tip,u=e.price,l=e.tipIcon;function p(){if("number"===typeof u){var n=e.currency+" "+(u/100).toFixed(e.decimalLength);return t("div",{class:d("text")},[t("span",[e.label||f("label")]),t("span",{class:d("price")},[n]),e.suffixLabel&&t("span",{class:d("suffix-label")},[e.suffixLabel])])}}function b(){if(n.tip||o)return t("div",{class:d("tip")},[l&&t(r["a"],{class:d("tip-icon"),attrs:{name:l}}),o&&t("span",{class:d("tip-text")},[o]),n.tip&&n.tip()])}return t("div",i()([{class:d({"safe-area-inset-bottom":e.safeAreaInsetBottom})},Object(s["b"])(a)]),[n.top&&n.top(),b(),t("div",{class:d("bar")},[n.default&&n.default(),p(),t(c["a"],{attrs:{square:!0,size:"large",type:e.buttonType,loading:e.loading,disabled:e.disabled,text:e.loading?"":e.buttonText},class:d("button"),on:{click:function(){Object(s["a"])(a,"submit")}}})])])}p.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,buttonText:String,suffixLabel:String,safeAreaInsetBottom:Boolean,decimalLength:{type:Number,default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},e["a"]=l(p)},"1c52":function(t,e,n){"use strict";n("ff05"),n("1dd2"),n("c963")},"354e":function(t,e,n){"use strict";var a=n("23c4"),i=n.n(a),o=n("f4db"),s=n("a08f"),c=n("a5ee"),r=Object(o["a"])("cell-group"),u=r[0],l=r[1];function d(t,e,n,a){var o,r=t("div",i()([{class:[l(),(o={},o[c["g"]]=e.border,o)]},Object(s["b"])(a,!0)]),[n.default&&n.default()]);return e.title||n.title?t("div",[t("div",{class:l("title")},[n.title?n.title():e.title]),r]):r}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=u(d)},"5c66":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirmOrder"},[n("Header",{attrs:{title:t.title,isShow:t.isShow}}),n("div",{staticClass:"address",on:{click:t.goAddressPage}},[n("div",{staticClass:"address-left"},[n("h3",{domProps:{textContent:t._s(t.list[0].address)}}),n("p",[n("span",{staticClass:"address-left-name",domProps:{textContent:t._s(t.list[0].name)}}),n("span",{domProps:{textContent:t._s(t.list[0].tel)}})])]),n("div",[n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)]),n("van-card",{attrs:{num:"1",tag:"限时折扣",price:"99","origin-price":"129",title:"休闲时装",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"}}),n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1),n("van-cell-group",[n("van-field",{attrs:{label:"买家留言",type:"textarea",placeholder:"留言建议提前协商（50字以内）",rows:"1",autosize:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("van-submit-bar",{attrs:{price:9900,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1)},i=[],o=(n("1c52"),n("1a53")),s=(n("cd0c"),n("354e")),c=(n("e74e"),n("a1f0")),r=(n("dcb7"),n("a5d3")),u=(n("e10e"),n("6f24")),l=(n("d806"),n("f54e")),d=(n("62f1"),n("a4ac")),f=(n("4f0d"),n("0049")),p=n("8b55"),b={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},g={data:function(){return{list:[{id:0,name:"张三",tel:"13000000000",address:"八维研修学院(第二校区)宿舍楼2号楼"}],title:"确认订单",isShow:!0,showList:!1,chosenCoupon:-1,coupons:[b],disabledCoupons:[b],message:""}},components:{Header:p["a"],vanIcon:f["a"],vanCard:d["a"],vanCouponCell:l["a"],vanPopup:u["a"],vanCouponList:r["a"],vanField:c["a"],vanCellGroup:s["a"],vanSubmitBar:o["a"]},methods:{goAddressPage:function(){this.$router.push("/addressPage")},onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(){this.coupons.push(b)},onSubmit:function(){}}},m=g,v=(n("fba8"),n("6691")),h=Object(v["a"])(m,a,i,!1,null,null,null);e["default"]=h.exports},"62f1":function(t,e,n){"use strict";n("ff05"),n("646c"),n("1dd2"),n("6e49")},"646c":function(t,e,n){},"6e49":function(t,e,n){},"8d09":function(t,e,n){},a4ac:function(t,e,n){"use strict";var a=n("23c4"),i=n.n(a),o=n("f4db"),s=n("f46a"),c=n("a08f"),r=n("0bac"),u=n("f334"),l=Object(o["a"])("card"),d=l[0],f=l[1];function p(t,e,n,a){var o=e.thumb,l=n.num||Object(s["b"])(e.num),d=n.price||Object(s["b"])(e.price),p=n["origin-price"]||Object(s["b"])(e.originPrice),b=l||d||p;function g(t){Object(c["a"])(a,"click-thumb",t)}function m(){if(n.tag||e.tag)return t("div",{class:f("tag")},[n.tag?n.tag():t(r["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function v(){if(n.thumb||o)return t("a",{attrs:{href:e.thumbLink},class:f("thumb"),on:{click:g}},[n.thumb?n.thumb():t(u["a"],{attrs:{src:o,width:"100%",height:"100%",fit:"contain","lazy-load":e.lazyLoad}}),m()])}function h(){return n.title?n.title():e.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function S(){return n.desc?n.desc():e.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[e.desc]):void 0}function x(){if(d)return t("div",{class:f("price")},[n.price?n.price():e.currency+" "+e.price])}function C(){if(p){var a=n["origin-price"];return t("div",{class:f("origin-price")},[a?a():e.currency+" "+e.originPrice])}}function y(){if(l)return t("div",{class:f("num")},[n.num?n.num():"x "+e.num])}function w(){if(n.footer)return t("div",{class:f("footer")},[n.footer()])}return t("div",i()([{class:f()},Object(c["b"])(a,!0)]),[t("div",{class:f("header")},[v(),t("div",{class:f("content",{centered:e.centered})},[h(),S(),n.tags&&n.tags(),b&&t("div",{class:"van-card__bottom"},[x(),C(),y(),n.bottom&&n.bottom()])])]),w()])}p.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=d(p)},c963:function(t,e,n){},cd0c:function(t,e,n){"use strict";n("ff05")},e74e:function(t,e,n){"use strict";n("ff05"),n("1dd2"),n("0ed9")},fba8:function(t,e,n){"use strict";var a=n("8d09"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-6fabd81a.fb898269.js.map