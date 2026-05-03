let rotatePictures = function(){
    let pictures = $(".picture")
    for(let x=0; x<pictures.length; x++){
        let random = (Math.floor(Math.random() * 6)) -3
        console.log(random);
        $(pictures[x]).css("transform",`rotate(${random}deg)`)
    }
}
rotatePictures();

$(".picture").on("mouseenter",function(){
    $(this).css("transform",$(this).css("transform").replace("scale(1)","") + "scale(2)")
    $(this).css("z-index",1);
})
$(".picture").on("mouseleave",function(){
    $(this).css("transform",$(this).css("transform").replace("scale(2)","") + "scale(.5)")
    $(this).css("z-index",0);
})

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

let mobileClick = function(){
    $(".picture").on("click",function(){
        $(this).css("transform",$(this).css("transform").replace("scale(1)","") + "scale(2)")
        $(this).css("z-index",1);
        $(".picture").off("click");
        $(".picture").on("click",function(){
            $(this).css("transform",$(this).css("transform").replace("scale(2)","") + "scale(.5)")
            $(this).css("z-index",0);
                $(".picture").off("click");
                mobileClick();   
        })
    })
}

if (isMobile) {
    $("img").css("width","-webkit-fill-available")
    $(".picture").css("width","-webkit-fill-available")
    $(".picture-box").css("width","-webkit-fill-available")
    $("#entry").css("width","90%");
    $("body").css("width","100%");
    $("body").css("height","auto");
    $(".flex-row").css("flex-direction","column");
    $(".picture-box-caption").css("width","auto");
    $(".picture").off("mouseenter");
    $(".picture").off("mouseleave")
    mobileClick();
}

$("#prev").on("click",function(){
    let pageNum = window.location.href.substring(window.location.href.length-7,window.location.href.length-5)
    if(pageNum.substring(0,1)=='/'){
        pageNum = pageNum.substring(1)
    }
    pageNum = parseInt(pageNum)-1;
    window.location.href = pageNum + ".html";
})

$("#next").on("click",function(){
    let pageNum = window.location.href.substring(window.location.href.length-7,window.location.href.length-5)
    if(pageNum.substring(0,1)=='/'){
        pageNum = pageNum.substring(1)
    }
    pageNum = parseInt(pageNum)+1;
    window.location.href = pageNum + ".html";
})

$("#return-to-contents").on("click",function(){
    window.location.href = "../table-of-contents.html";
})