let loadHope = function(){
    console.log(":)")
    let hope = 0;
    $("#hope").removeClass("hidden")
    setTimeout(function(){    
        $("body").on("click",function(){
        $(`#hope-${hope}`).removeClass("content-expand")
        hope++
        $(`#hope-${hope}`).addClass("content-expand")
        $("#background-3").css("transform",`scale(${5*hope})`)
        if(hope==2){
            $("body").css("animation","rainbow 10s linear infinite")
        }
        if(hope==11){
            $(`#hope-10`).addClass("content-expand")
            $("#background-3").css("transform",`scale(50)`)
            $("body").off("click")
            $(".click-signifier").removeClass("hidden")
            $(".down-signifier").addClass("hidden")
            setTimeout(function(){
                $("body").on("click",function(){
                    window.location.href = "aboutme.html"
                })
            },10)
        }
    })},10)
}

$(".title").on("click",function(){
    $("#background-3").css("background","radial-gradient(circle,rgba(0,0,0,50%)0%, rgb(0, 0, 0)1%)")
    $("#background-3").css("transform","scale(50)")
    setTimeout(function(){
    $("#background-3").css("transition","1000ms")
    },10)
    $("body").css("background-color","white")
    $("body").css("animation","none")
    $("body").css("transition","1000ms")
    let id = "#" + $(this).parent().attr("id") + "-content"
    $(".content").removeClass("content-expand")
    $(id).addClass("content-expand")
    $(".title").off("click");
    let burden = 1;
    let line = 1;
    setTimeout(function(){
    $("body").on("click", function(){
        $("#overall-title").addClass("content")
        console.log(burden + " " + line)
        $(`#burden-${burden}-${line}`).addClass("content-expand");
        if(line==0){
            $(`#burden-${burden}`).addClass("content")
            burden++;
            $(`#burden-${burden}`).removeClass("hidden")
            $(".down-signifier").removeClass("hidden")
            $(".click-signifier").addClass("hidden")
            if(burden==8){
                loadHope();
                $("body").off("click")
            }
        }
        if($(`#burden-${burden}-${line}`).hasClass("burden-statement")){
            let $this = $(`#burden-${burden}-${line}`);
            setTimeout(function(){
                $this.css("transition","2000ms")
                $this.css("text-shadow","0px 1px red")
            },500)
            if(burden==1){
                $("#background-3").css("transform","scale(44.75)")
                $("body").css("background-color","rgb(255,245,245")
            }
            if(burden==2){
                $("#background-3").css("transform","scale(38.5)")
                $("body").css("background-color","rgb(255,210,210")
            }
            if(burden==3){
                $("#background-3").css("transform","scale(32.25)")
                $("body").css("background-color","rgb(255,175,175")
            }
            if(burden==4){
                $("#background-3").css("transform","scale(26)")
                $("body").css("background-color","rgb(255,140,140")
            }
            if(burden==5){
                $("#background-3").css("transform","scale(19.75)")
                $("body").css("background-color","rgb(255,105,105")
            }
            if(burden==6){
                $("#background-3").css("transform","scale(13.5)")   
                $("body").css("background-color","rgb(255,70,70")    
            }
            if(burden==7){
                $("#background-3").css("transform","scale(6.25)") 
                $("body").css("background-color","rgb(255,35,35")     
            }
            line = -1;
            $(".down-signifier").addClass("hidden")
            $(".click-signifier").removeClass("hidden")

        }
        line++;
    })
    },100)

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