(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{292:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("3acb81b7",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";var n=r(292);r.n(n).a},329:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,'.fe-article__container[data-v-2b347545]{width:100%}.fe-article__link:hover .fe-article__thumb-title h3[data-v-2b347545],.fe-article__link:hover .fe-article__title[data-v-2b347545]{margin-left:10px}.fe-article__item[data-v-2b347545]{background-color:#fff;margin-bottom:1.2rem;list-style-type:none;border-radius:.5rem;overflow:hidden}.fe-article__item[data-v-2b347545]:last-child{margin-bottom:0}.fe-article__item-content[data-v-2b347545]{display:flex;align-items:center}.fe-article__info[data-v-2b347545]{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;min-width:0}.fe-article__wrapper[data-v-2b347545]{padding:1rem 1.2rem}.fe-article__title[data-v-2b347545]{overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:flex-start;align-items:center;margin-bottom:.5rem;font-weight:700;color:#2a2b33;font-family:PingFang SC,Microsoft Yahei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;transition:all .3s ease}.fe-article__thumb[data-v-2b347545]{position:relative;display:block;width:100%;-o-object-fit:cover;object-fit:cover}.fe-article__thumb-img[data-v-2b347545]{width:100%;height:100%}.fe-article__thumb-title[data-v-2b347545]{position:absolute;bottom:.3rem;left:0;height:4rem;width:100%;color:#fff;line-height:4rem;padding-left:1.2rem;font-family:PingFang SC,Microsoft Yahei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;background-color:rgba(0,0,0,.1)}.fe-article__thumb-title h3[data-v-2b347545]{transition:all .3s ease}.fe-article__desc[data-v-2b347545]{line-height:1.8rem;margin-top:20px!important}.fe-article__tag[data-v-2b347545]{margin:24px 0 10px;font-size:14px;color:#999}.fe-article__tag span[data-v-2b347545]{color:#ea6f5a}.fe-article__opt[data-v-2b347545]{display:flex;align-items:center;color:rgba(0,0,0,.43);justify-content:space-between}.fe-article__opt .iconfont[data-v-2b347545]{font-size:14px;margin-right:2px}.fe-article__meta[data-v-2b347545]{justify-content:flex-end;flex-wrap:nowrap;color:rgba(0,0,0,.43);font-size:.8rem}.fe-article__meta[data-v-2b347545],.fe-article__meta-item[data-v-2b347545]{display:flex;flex-direction:row;align-items:center}.fe-article__meta-item[data-v-2b347545]{justify-content:flex-start}.fe-article__meta-item[data-v-2b347545]:first-child:before{content:"";border:none}.fe-article__meta-item[data-v-2b347545]:before{content:"";width:2px;height:2px;margin:0 10px;border:1px solid rgba(0,0,0,.43);border-radius:1px}.article-source[data-v-2b347545]{display:inline-block;width:36px;text-align:center;border-radius:2px;cursor:pointer;opacity:.5;transition:opacity .3s ease;font-size:.8rem}.article-source.original[data-v-2b347545]{color:#302e31;background-color:rgba(48,46,49,.2)}.article-source.reprint[data-v-2b347545]{color:#f56a00;background-color:rgba(245,106,0,.2)}.article-source.hybrid[data-v-2b347545]{color:#108ee9;background-color:rgba(16,142,233,.2)}.article-source.translate[data-v-2b347545]{color:#00a2ae;background-color:rgba(0,162,174,.2)}.fe-pagination[data-v-2b347545]{background-color:#fff;padding:6px 32px;text-align:center}.fe-pagination__more[data-v-2b347545]{padding:6px 32px;background:#f2f2f2;border-radius:2px;border:1px solid #e6e6e6;cursor:pointer;transition:all .3s ease}.fe-pagination__empty[data-v-2b347545]{color:#666;font-size:12px}@media (max-width:656px){.fe-article__item[data-v-2b347545]{margin:1rem}.fe-pagination[data-v-2b347545]{margin:0 1rem 1rem}}.my-swiper[data-v-2b347545]{height:240px;width:100%;margin-bottom:20px;border-radius:10px}.my-swiper .swiper-slide[data-v-2b347545]{text-align:center;font-size:38px;font-weight:700;background-color:#eee;display:flex;justify-content:center;align-items:center}.my-swiper .swiper-pagination[data-v-2b347545]{bottom:4px;right:10px}.my-swiper .swiper-pagination>.swiper-pagination-bullet[data-v-2b347545]{background-color:red}',""])},335:function(t,e,r){"use strict";r.r(e);r(44);var n=r(3),o=r(20),l=r(73),c={fetch:function(t){return t.store.dispatch("getArticleList")},data:function(){return{banners:["/images/banner/1.png","/images/banner/2.png"],current_page:1,source:o.a,swiperOption:{autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},effect:"fade",paginationClickable:!0,speed:1e3,loop:!0,observer:!0,observeParents:!0,autoplayDisableOnInteraction:!1}}},computed:{artlist:function(){return this.$store.state.article.art.list},pagination:function(){return this.$store.state.article.art.pagination}},methods:{marked:function(content){return Object(l.a)(content,null,!1).html},loadmore:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.current_page!==this.pagination.pages){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$store.dispatch("getArticleList",{page:this.current_page+=1});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){},components:{}},d=(r(328),r(2)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"fe-article"},[r("ul",{staticClass:"fe-article__container"},t._l(t.artlist,function(e,n){return r("li",{key:n,staticClass:"fe-article__item"},[r("nuxt-link",{staticClass:"fe-article__link",attrs:{to:"/article/"+e._id}},[r("div",{staticClass:"fe-article__item-content"},[r("div",{staticClass:"fe-article__info"},[e.thumb?r("div",{staticClass:"fe-article__thumb"},[r("img",{staticClass:"fe-article__thumb-img",attrs:{"data-title":e.title,src:e.thumb,alt:""}}),t._v(" "),r("div",{staticClass:"fe-article__thumb-title"},[r("h3",{},[t._v("\n                  "+t._s(e.title)+"\n                ")])])]):t._e(),t._v(" "),r("div",{staticClass:"fe-article__wrapper"},[e.thumb?t._e():r("h3",{staticClass:"fe-article__title"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),e.description?r("div",{staticClass:"fe-article__desc markdown-body",domProps:{innerHTML:t._s(t.marked(e.description))}}):t._e(),t._v(" "),r("p",{staticClass:"fe-article__tag"}),t._v(" "),r("div",{staticClass:"fe-article__opt"},[r("p",[r("span",{staticClass:"iconfont icon-calendar"}),t._v(t._s(e.create_at)+"\n                ")]),t._v(" "),r("div",{staticClass:"fe-article__meta"},[r("div",{staticClass:"fe-article__meta-item"},[t._v(t._s(e.likes)+" 人喜欢")]),t._v(" "),r("div",{staticClass:"fe-article__meta-item"},[t._v(t._s(e.views)+" 次阅读  ")]),t._v(" "),r("span",{staticClass:"article-source",class:e.sourceClass},[t._v("\n                  "+t._s(e.sourceName)+"\n                ")])])])])])])])],1)}),0),t._v(" "),t.artlist.length?r("div",{staticClass:"fe-pagination"},[t.pagination.pages!==t.current_page?r("button",{staticClass:"fe-pagination__more",on:{click:t.loadmore}},[t._v("Continue")]):r("div",{staticClass:"fe-pagination__empty"},[t._v("No More!")])]):t._e()])},[],!1,null,"2b347545",null);e.default=component.exports}}]);