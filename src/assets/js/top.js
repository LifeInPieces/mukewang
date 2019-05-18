// 顶部导航
function scrollTop(){
    var bannerHeight=document.querySelector(".js-qa-wenda-title").offsetHeight;
    console.log("高度为"+bannerHeight);
    var searchBox=document.querySelector(".search");
    window.onscroll=function(){
        var opacity=0;
        var offsetTop=document.body.scrollTop ||document.documentElement.scrollTop;

        if(offsetTop<bannerHeight){
            opacity=offsetTop/ bannerHeight;
            searchBox.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        
        }else{
            opacity=1;
        }
        // console.log(opacity);
    }
}