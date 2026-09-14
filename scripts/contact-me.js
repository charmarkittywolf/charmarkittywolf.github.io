
customPlaySong = async function(){
    song = document.getElementById("song");
    song.volume = .25;
    if(localStorage.getItem("musicVolume")){
        song.volume = localStorage.getItem("musicVolume")
    }
    song.play().then(() => {
        changeColor();
        colorChange = setInterval(changeColor, 1500)
        console.log("Playback started successfully!");
    })
    .catch((error) => {
        console.error("Playback failed:", error.name, error.message);
        $("body").append("<div id='music-popup'>You have autoplay turned off! Click anywhere for music! :3</div>")
        setTimeout(animateMusicPopup,100);
        $('body').on("click", function(){
            changeColor();
            colorChange = setInterval(changeColor, 1500)
            $("#music-popup").css("transform","translateY(-100px)")
            setTimeout($("#music-popup").remove,1000);
            song.play();
            $('body').off("click");
    })
  });
}
customPlaySong();
song.addEventListener("ended", function(){
    clearInterval(colorChange);
    song.currentTime = 0;
    song.play().then(() => {
        changeColor()
        colorChange = setInterval(changeColor, 1500)
        console.log("Playback started successfully!");
    })
    console.log("ended");
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    $("input").css("width","150px")
}

if(inventory.includes("Restricted Archives Key")||inventory.includes("Restricted Archives Key Fragment 2")){
    $("#key-fragment-2").append("<p>You've already unlocked this key fragment!</p>")
}else{
    $("#key-fragment-2").append("<img src='/images/RestrictedArchivesKeyFragment2.gif' id='restricted-key-fragment-2'>")
    $("#key-fragment-2").append("<p>You've unlocked a key fragment!</p>")
    $("#key-fragment-2").one("click", function(){
        $("#restricted-key-fragment-2").addClass("spiral-away");
        saveToInventory("Restricted Archives Key Fragment 2")
    })
}

let isDraggingForm = false;
let hasMovedForm = false;
let dragStartX = 0;
let dragStartY = 0;
let formStartLeft = 0;
let formStartTop = 0;
let titleStartLeft = 0;
let titleStartTop = 0;

$(document).on("mousedown", function(event){
    if($(event.target).closest("input, textarea").length){
        return;
    }

    const form = $("#contact-form");
    const title = $("#contact-me-title");
    const formPosition = form.offset();
    const titlePosition = title.offset();
    isDraggingForm = true;
    hasMovedForm = false;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    formStartLeft = formPosition.left;
    formStartTop = formPosition.top;
    titleStartLeft = titlePosition.left;
    titleStartTop = titlePosition.top;
    form.css({
        position: "fixed",
        left: formStartLeft,
        top: formStartTop
    });
    title.css({
        position: "fixed",
        left: titleStartLeft,
        top: titleStartTop
    });
    $("body").css("cursor", "grabbing");
});

$(document).on("mousemove", function(event){
    if(!isDraggingForm){
        return;
    }

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;
    if(deltaX || deltaY){
        hasMovedForm = true;
    }
    $("#contact-form").css({
        left: formStartLeft + deltaX,
        top: formStartTop + deltaY
    });
    $("#contact-me-title").css({
        left: titleStartLeft + deltaX,
        top: titleStartTop + deltaY
    });
});

$(document).on("mouseup", function(){
    isDraggingForm = false;
    $("body").css("cursor", "default");
});