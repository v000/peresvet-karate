(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9],{228:function(t,e,r){var content=r(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("02cea074",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";var n=r(228);r.n(n).a},251:function(t,e,r){(e=r(15)(!1)).push([t.i,".gallery-items[data-v-5928db64]{width:70%;margin-left:15%;display:grid;grid-template-columns:33% 33% 33%}.gallery-image[data-v-5928db64]{height:15vw;width:99%;float:left;background-size:cover}.post-wrapper-img[data-v-5928db64]{height:420px;width:70%;margin-left:15%;background-size:cover;background-position-y:25%}.post-wrapper-info[data-v-5928db64]{margin-top:50px;width:70%;margin-left:15%}.post-wrapper-info h2[data-v-5928db64]{margin-bottom:6px}.post-wrapper-info span[data-v-5928db64]{color:#f33}.post-wrapper-info p[data-v-5928db64]{margin-top:84px}.post-gallery[data-v-5928db64]{margin-top:80px;width:80%;margin-left:10%;display:grid;grid-template-columns:24% 24% 24% 24%;grid-gap:15px 15px}.post-gallery .gallery-item[data-v-5928db64]{height:150px;width:100%;background-size:cover;background-position:50%}@media screen and (max-width:1280px){.post-wrapper-img[data-v-5928db64]{height:420px;width:76%;margin-left:12%;background-size:cover;background-position-y:25%}}@media screen and (max-width:1024px){.post-wrapper-img[data-v-5928db64]{height:52vw;width:100%;margin-left:0;background-size:cover}.post-wrapper-info[data-v-5928db64]{margin-top:50px;width:80%;margin-left:10%}.post-wrapper-info h2[data-v-5928db64]{margin-bottom:6px}.post-wrapper-info span[data-v-5928db64]{color:#f33}.post-wrapper-info p[data-v-5928db64]{margin-top:64px}}@media screen and (max-width:767px){.post-wrapper-info[data-v-5928db64]{margin-top:50px;width:80%;margin-left:10%}.post-wrapper-info h2[data-v-5928db64]{margin-bottom:6px}.post-wrapper-info span[data-v-5928db64]{color:#f33}.post-wrapper-info p[data-v-5928db64]{margin-top:64px}}@media screen and (max-width:480px){.post-wrapper-img[data-v-5928db64]{height:62vw;width:100%;background-size:cover}.post-wrapper-info[data-v-5928db64]{margin-top:50px;width:80%;margin-left:10%}.post-wrapper-info h2[data-v-5928db64]{margin-bottom:6px}.post-wrapper-info span[data-v-5928db64]{color:#f33}.post-wrapper-info p[data-v-5928db64]{margin-top:44px}}",""]),t.exports=e},266:function(t,e,r){"use strict";r.r(e);var n=r(91),o={components:{gallery:r.n(n).a},asyncData:function(t){return t.$axios.get("https://peresvet-karate.firebaseio.com/news/".concat(t.params.id,".json")).then((function(t){return{news:t.data,images:t.data.images,index:null}}))}},d=(r(250),r(5)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"post-head"},[r("div",{staticClass:"post-wrapper-img",style:{"background-image":"url("+t.news.pic+")"}}),t._v(" "),r("div",{staticClass:"post-wrapper-info"},[r("h2",{staticClass:"reading_heading"},[t._v(t._s(t.news.title))]),t._v(" "),r("span",{staticClass:"post-wrapper-place"},[t._v(t._s(t.news.place))]),t._v(" "),r("div",{staticClass:"reading_paragraph post-text"},[r("p",[t._v(t._s(t.news.text))])])])]),t._v(" "),r("gallery",{staticClass:"images-gallery",attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),r("div",{staticClass:"gallery-items"},t._l(t.images,(function(image,e){return r("div",{key:e,staticClass:"gallery-image",style:{backgroundImage:"url("+image+")"},on:{click:function(r){t.index=e}}})})),0)],1)}),[],!1,null,"5928db64",null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);var n=r(266).default,o=r(5),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);