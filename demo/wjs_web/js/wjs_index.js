/**
 * Created by 97865 on 2018/10/15.
 */

$(function () {
    // ��ʼ��������ʾ
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

    /*����ƶ��˵Ļ�������*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*��ȡ��ǰ�ֲ�ͼ*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*��һ��*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*��һ��*/
            carousel.carousel('next');
        }
    });

    //��Ʒ�鵼����Ļ���
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