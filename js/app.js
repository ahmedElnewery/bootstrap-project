$('.carousel').carousel()
$("#linksBtn").click(function(){
    if($(".links").css("left") === "0px"){
        $(".links").animate({
            left:"-300px"
        },500)
        
    }else{
        $(".links").animate({
            left:"0"
        },500)

    }
})
$("body").click(function(){
    if($(".links").css("left") === "0px"){
        $(".links").animate({
            left:"-300px"
        },500)
        
    }
})