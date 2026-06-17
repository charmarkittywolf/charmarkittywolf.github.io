$(".title").on("click",function(){
    let id = "#" + $(this).parent().attr("id") + "-content"
    $(".content").removeClass("content-expand")
    $(id).addClass("content-expand")
})

playSong();

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".section").css("width","90%")
}

$("#message-link").on("click",function(){
    window.location.href = "contact-me.html";
})

$("#star").on("click",function(){
    window.location.href = "secret-page.html";
})

$(".charlotte-marie-link").on("click",function(){
    window.location.href = "thatwhichburdensme.html"
})