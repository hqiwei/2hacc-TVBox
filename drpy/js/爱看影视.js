var rule={     
    title:'爱看影视',     
    host:'https://ikan6.vip',     
    url:'/vodtype/fyclass-fypage/ ',    
    searchUrl:'/vodsearch/-------------/?wd=**&submit=', 
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA',         },     
    class_name:'电影&电视剧&综艺&动漫&日韩剧&美剧',     
    class_url:'1&2&3&4&15&16',     
    推荐:'.myui-vodlist__box;a&&title;*;*;*;*',     
    一级:'.myui-vodlist__box;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',     
    二级:{"title":"h1&&Text;.myui-content__detail p:eq(1)&&Text","img":".lazyload&&data-original","desc":";;;.myui-content__detail p:eq(3)&&Text;.myui-content__detail p:eq(4)&&Text","content":".sketch.content&&Text","tabs":'.nav.nav-tabs.active',"lists":".myui-content__list:eq(#id) a"},     
    搜索:'.myui-vodlist__box;a&&title;*;*;*;*', 
   
}