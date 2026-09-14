
let heyCount = 0;
let messageCount = 0;
let actualCount = 0;
let heyCountExists = false;
let clicked = false;

if(inventory.includes("Restricted Archives Key")||inventory.includes("Restricted Archives Key Fragment 3")){
    $("#key-fragment-3").append("<p>You've already unlocked this key fragment!</p>")
}else{
    $("#key-fragment-3").append("<img src='/images/RestrictedArchivesKeyFragment3.gif' id='restricted-key-fragment-3'>")
    $("#key-fragment-3").append("<p>You've unlocked a key fragment!</p>")
    $("#key-fragment-3").one("click", function(){
        $("#restricted-key-fragment-3").addClass("spiral-away");
        saveToInventory("Restricted Archives Key Fragment 3")
    })
}

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
    $("#testSound").off("click");
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
            $("#settings").css("display","none")
            $("#key-fragment-3").css("display","flex")
            $("#song-details").html("<span id='Hey'>Hey! You won!</span>")
            $("#song-details").css("text-align","center");
        }
        messageCount++;
        if(messageCount==1||messageCount==4){
            $("#song-details").html("<p>Oh! Hi, you found the secret hidden rythym game! To play you just have to hit the test sound button at the approriate time.</p><p>Do note, this game tends to run best on chrome. Sorry firefox users!</p>")
        }
        if(messageCount==2){
            $("#song-details").html("<p>Also just so you're aware, occasionally the page can become off-sync. You can check for that by whether or not the color changes match the heavy drum beat. My apologies for the jank, html/js isn't really the best langauge for precise timing.</p>")
        }
        if(messageCount==3){
            $("#song-details").html("<p>There's a special prize for getting all 23 'Hey!'s in a perfect combo.</p>")
        }
        if(messageCount==4){
            $("#song-details").html("<p>Good Luck! Have Fun!</p>")
        }
        if(messageCount==7&&heyCount==7){
            $("#song-details").html("<p>We're about to get spicy! After this next 'Hey!' you're gonna be hitting the button every other beat. Hope you're ready!</p>")
        }
        if(messageCount==8&&heyCount==8){
            $("#song-details").html("<p id='Hey'>HO!</p>")
        }
        if(messageCount==22&&heyCount==22){
            $("#song-details").html("<p id='Hey' style='color: red;'>STOP!</p>")
            setTimeout(function(){
                if(heyCount==22){
                    $("#song-details").html("<p>Alright, just one more, get ready...</p>")
                }else{
                    $("#song-details").html("<p>Oof, sorry about that. You're gonna have to refresh and try again.</p>")
                }
            },2000)
            setTimeout(function(){
                if(heyCount==22){
                    $("#song-details").html("<p>Wait for it...!</p>")
                }
            },10000)
            setTimeout(function(){
                if(heyCount==22){
                    $("#song-details").html("<p>3</p>")
                }
            },12500)
            setTimeout(function(){
                if(heyCount==22){
                    $("#song-details").html("<p>2</p>")
                }
            },13000)
            setTimeout(function(){
                if(heyCount==22){
                    $("#song-details").html("<p>1</p>")
                }
            },13500)
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
