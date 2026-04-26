playSong();

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".task").css("width","auto")
    $("#main-task-bonus").css("width","auto")
}