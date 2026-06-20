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
    $(".picture-box").css("width","inherit")
    $("img").css("aspect-ratio","1")
    $(".flex-row").css("width","inherit");
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

let turnOffClick = function(element,sib){
    element.siblings(sib).css("height","0");
    element.off("click");
    element.on("click",function(){
        turnOnClick(element,sib);
    })
}

let turnOnClick = function(element,sib){
    element.siblings(sib).css("visibility","visible");
    element.siblings(sib).css("height","auto");
    element.off("click");
    element.on("click",function(){
        turnOffClick(element,sib);
    })
}

let turnOnClickArchives = function(element){
    setTimeout(function(){
        $(".pixel-book").css("transform","scale(5)")
    },500)
    $("#archives-entrance").css("height","178px")
    element.off("click");
    element.on("click",function(){
        turnOffClickArchives(element);
    })
}

let turnOffClickArchives = function(element){
    setTimeout(function(){
        $("#archives-entrance").css("height","0px")
    },500)
    $(".pixel-book").css("transform","scale(0)")
    element.off("click");
    element.on("click",function(){
        turnOnClickArchives(element);
    })
}

let turnOnClickSteves = function(element){
    setTimeout(function(){
        $(".card-image").css("transform","scale(3)")
    },500)
    $("#the-steves-cards").css("height","195px")
    element.off("click");
    element.on("click",function(){
        turnOffClickSteves(element);
    })
}

let turnOffClickSteves = function(element){
    setTimeout(function(){
        $("#the-steves-cards").css("height","0px")
    },500)
    $(".card-image").css("transform","scale(0)")
    element.off("click");
    element.on("click",function(){
        turnOnClickSteves(element);
    })
}

$(".table-category").on("click",function(){
    turnOnClick($(this),"p");
})

$("#archives").on("click",function(){
    turnOnClickArchives($(this))
})

$("#the-steves").on("click",function(){
    turnOnClickSteves($(this))
})


$(".pixel-book").on("mousedown touchstart", function(){
    $(".pixel-book").attr("src","../images/BookLocked.gif");

})

$(".pixel-book").on("mouseup touchend", function(){
    $(".pixel-book").attr("src","../images/Book.gif")
})

let DarkKey = false;
$("#Dark-Archives-Key").on("dragstart",function(){
    DarkKey = true;
    $("#Dark-Archives-Key").css("cursor","grab !important")
})
$("#Dark-Archives-Key").on("dragend",function(event){
    DarkKey = false;
    let x = event.originalEvent.clientX;
    let y = event.originalEvent.clientY;
    let targetDiv = $(".pixel-book")
    const offset = targetDiv.offset();
    const tLeft = offset.left;
    const tTop = offset.top;
    const tRight = tLeft + 178;
    const tBottom = tTop + 178;
    if (x >= tLeft && x <= tRight && y >= tTop && y <= tBottom) {
        window.location.href = "../secret-page.html"
    }
})

$(".pixel-book").on("dragover", function(){
    if(DarkKey){
        event.preventDefault();
        $(".pixel-book").attr("src","../images/BookUnlocked.gif");
        $(".pixel-book").addClass("activated")
    }else{
        $(".pixel-book").attr("src","../images/BookLocked.gif");
        $(".pixel-book").addClass("activated")
    }
})

$(".pixel-book").on("dragleave", function(){
    $(".pixel-book").attr("src","../images/Book.gif")
    $(".pixel-book").removeClass("activated")
})

$(".pixel-book").on("contextmenu", function(e) {
    e.preventDefault();
});

$(".pixel-book").on('dragend', function() {
    $(".pixel-book").attr("src","../images/Book.gif")
});

let card7 = function(){
    $("#card-7").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-7").css("z-index","4")
        $("#card-7").css("transition","transform 3000ms")
        $("#card-7").css("transform","scale(5) translate(50vw,-20vh")
    },500)
}

let card6 = function(){
    $("#card-6").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-6").css("z-index","4")
        $("#card-6").css("transition","transform 3000ms")
        $("#card-6").css("transform","scale(5) translate(50vw,-40vh")
    },500)
}

let card5 = function(){
    $("#card-5").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-5").css("z-index","4")
        $("#card-5").css("transition","transform 3000ms")
        $("#card-5").css("transform","scale(5) translate(-50vw,-40vh")
    },500)
}

let card4 = function(){
    $("#card-4").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-4").css("z-index","4")
        $("#card-4").css("transition","transform 3000ms")
        $("#card-4").css("transform","scale(5) translate(-50vw,-20vh")
    },500)
}

let card3 = function(){
    $("#card-3").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-3").css("z-index","4")
        $("#card-3").css("transition","transform 3000ms")
        $("#card-3").css("transform","scale(5) translate(-50vw,20vh")
    },500)
}

let card2 = function(){
    $("#card-2").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-2").css("z-index","4")
        $("#card-2").css("transition","transform 3000ms")
        $("#card-2").css("transform","scale(5) translate(-50vw,40vh")
    },500)
}

let card1 = function(){
    $("#card-1").css("transform","scale(3) translateY(-50px)")
    setTimeout(function(){
        $("#card-1").css("z-index","4")
        $("#card-1").css("transition","transform 3000ms")
        $("#card-1").css("transform","scale(5) translate(50vw,40vh")
    },500)
}

let cardsOn = function(){
    $("#fixed-card-7").css("right","calc(17vw - 20vh)")
    $("#fixed-card-7").css("top","calc(6vh)")
    $("#fixed-card-6").css("right","calc(41vw - 20vh)")
    $("#fixed-card-6").css("top","calc(6vh)")
    $("#fixed-card-5").css("left","calc(41vw - 20vh)")
    $("#fixed-card-5").css("top","calc(6vh)")
    $("#fixed-card-4").css("left","calc(17vw - 20vh)")
    $("#fixed-card-4").css("top","calc(6vh)")
    $("#fixed-card-3").css("left","calc(41vw - 20vh)")
    $("#fixed-card-3").css("bottom","calc(6vh)")
    $("#fixed-card-2").css("left","calc(17vw - 20vh)")
    $("#fixed-card-2").css("bottom","calc(6vh)")
    $("#fixed-card-1").css("right","calc(41vw - 20vh)")
    $("#fixed-card-1").css("bottom","calc(6vh)")
}

$("#cards-closed").on("click",function(){
    $("#cards-closed").css("display","none");
    $("#cards-front").css("display","block");
    $("#cards-back").css("display","block");
    $(".card").css("display","block");
    setTimeout(function(){
        card7();
    },500)
    setTimeout(function(){
        card6();
    },750)
    setTimeout(function(){
        card5();
    },1000)
    setTimeout(function(){
        card4();
    },1250)
    setTimeout(function(){
        card3();
    },1500)
    setTimeout(function(){
        card2();
    },1750)
    setTimeout(function(){
        card1();
    },2000)
    setTimeout(function(){
        $(".card").css("display","none")
        cardsOn();
    },3500)
})

