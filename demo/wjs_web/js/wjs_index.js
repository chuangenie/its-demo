/**
 * Created by 97865 on 2018/10/15.
 */

$(function () {
    // 初始化工具提示
    $('[data-toggle="tooltip"]').tooltip();


    var items = $(".item");
    $(window).on("resize",function(){
        var w = $(window).width();
        if (w >= 768) {
            $(items).each(function(index,value){
                //console.log(value)
                var item = $(this);
                var imgSrc = item.attr("pcImg");
                //console.log(imgSrc)
                item.html($('<a class="pcImg" href="javascript:;"></a>').css("backgroundImage","url('"+imgSrc+"')"))
            });
        } else {
            $(items).each(function(index,value){
                var item = $(this);
                var imgSrc = item.attr("icor");
                item.html($('<img src="'+imgSrc+'">'));
            })
        }
    }).trigger("resize");

    /*添加移动端的滑动操作*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });

    //产品块导航项的滑动
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var ulW = 0;
    lis.each(function(index,value){
        //console.log($(value));
        ulW = ulW + $(value).innerWidth();
    })
    //console.log(ulW);
    ul.width(ulW);
    var myScroll = new IScroll('.tabs_parent',{
        scrollX: true, scrollY: false
    })




})