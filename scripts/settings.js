
let heyCount = 0;
let actualCount = 0;
let heyCountExists = false;
let clicked = false;

let heyTrigger = function(){
    setTimeout(function(){
        $("#testSound").css("color","var(--Color)");
    },100)
    setTimeout(function(){
        if(!clicked){
            heyCount = 0
            $("#hey-count").html("<p>Combo!</p>" + "<p><span id='hey-count-number'>" + heyCount + "</span></p>")
        }else{
            clicked = false;
        }
        $("#testSound").css('color',"white");
    },600)
    console.log("Hey!")
    $("testSound").off("click");
    $("#testSound").on("click",function(){
        playSound("Hey")
        clicked=true;
        heyCount++;
        actualCount++;
        if(!heyCountExists){
            if(heyCount==actualCount){
                $("#song-details").after("<section id='hey-count'><p>Perfect Combo!</p><p><span id='hey-count-number'>" + heyCount + "</span> out of 23</p></section>") 
            }else{
                $("#song-details").after("<section id='hey-count'><p>Combo!</p><p><span id='hey-count-number'>" + heyCount + "</span></p></section>")
            }
            heyCountExists=true;
        }else{
            $("#hey-count-number").text(heyCount)
        }
        if(heyCount==23){
            $("#song-details").html("<span id='Hey'>Hey! You won!</span>")
            $("#song-details").css("text-align","center");
        }
        origHtml = $("#song-details").html();
        $("#song-details").html("<p id='Hey'>HEY!</p>")
        $("#song-details").css("text-align","center");
        $("#settings").addClass("dancing")
        setTimeout(function(){
            $("#song-details").html(origHtml);
            $("#song-details").css("text-align","left");
            $("#settings").removeClass("dancing");
        },500)
    })
    setTimeout(function(){
        $("#testSound").off("click");
        if(heyCountExists){
            $("#testSound").on("click",function(){
                playSound("Hey")
                heyCount = 0;
                $("#hey-count").html("<p>Combo!</p>" + "<p><span id='hey-count-number'>" + heyCount + "</span></p>")
            })
        }else{
            $("#testSound").on("click",function(){
                playSound("Hey")
            })
        }

    },500)
}


let startHeyCheck = function(){
    heyCount=0;
    setTimeout(function(){
        let times = 0;
        heyCheck = setInterval(function(){
            times++;
            if(times>7){
                clearInterval(heyCheck);
                times = 0;
                heyCheck = setInterval(function(){
                    heyTrigger();
                    times++
                    if(times>13){
                        clearInterval(heyCheck);
                        heyCheck = setTimeout(function(){
                            heyTrigger();
                        },14000)
                    }
                },1000)
            }
            heyTrigger();
        },8000)

    },7400)
}

customPlaySong = async function(){
    song = document.getElementById("song");
    song.volume = .25;
    if(localStorage.getItem("musicVolume")){
        song.volume = localStorage.getItem("musicVolume")
    }
    song.play().then(() => {
        startHeyCheck();
        setTimeout(function(){
            changeColor();
            changeColor();
            nameChange = setInterval(changeColor, 1000)
        },500)
        console.log("Playback started successfully!");
    })
    .catch((error) => {
        console.error("Playback failed:", error.name, error.message);
        $("body").append("<div id='music-popup'>You have autoplay turned off! Click anywhere for music! :3</div>")
        setTimeout(animateMusicPopup,100);
        $('body').on("click", function(){
            startHeyCheck();
            setTimeout(function(){
                changeColor();
                changeColor();
                nameChange = setInterval(changeColor, 1000)
            },500)
            $("#music-popup").css("transform","translateY(-100px)")
            setTimeout($("#music-popup").remove,1000);
            song.play();
            $('body').off("click");
    })
  });
}

customPlaySong();
song.addEventListener("ended", function(){
    clearInterval(nameChange);
    clearInterval(heyCheck);
    song.currentTime = 0;
    song.play().then(() => {
        startHeyCheck();
        setTimeout(function(){
            nameChange = setInterval(changeColor, 1000)
        },500)
        console.log("Playback started successfully!");
    })
     console.log("ended");
});

if(localStorage.getItem("musicVolume")){
    $("#musicVolume-slider").attr("value",localStorage.getItem("musicVolume")*100)
}
if(localStorage.getItem("soundVolume")){
    $("#musicVolume-slider").attr("value",localStorage.getItem("soundVolume")*100)
}



$("#musicVolume-slider").on("change", function(){
    localStorage.setItem("musicVolume",$(this).val()/100);
    if(song){
        song.volume = localStorage.getItem("musicVolume");
    }
})

$("#soundVolume-slider").on("change", function(){
    localStorage.setItem("soundVolume",$(this).val()/100);
    if(sound){
        sound.volume = localStorage.getItem("soundVolume");
    }
})

$("#testSound").on("click", function(){
    playSound("Hey")
})

$(".the-steves").on("click",function(){
    window.location.href = "journal/the-steves/main.html";
})





const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $("#song-details").css("width","90%")
    $("#settings").css("position","fixed")
    $("#settings").css("top","200px")
    $("#song-details").css("transform","translateY(140px)")
    $("#song-details").css("height","240px");
}
