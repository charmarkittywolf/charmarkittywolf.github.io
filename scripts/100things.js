playSong();

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".task").css("width","auto")
    $(".completed-task").css("width","-webkit-fill-available")
    $("#main-task-bonus").css("width","auto")
}