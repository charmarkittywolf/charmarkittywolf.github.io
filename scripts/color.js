colorList = [
    "rgba(255, 154, 0, 1)",
    "rgba(79, 220, 74, 1)",
    "rgba(63, 218, 216, 1)",
    "rgba(186, 12, 248, 1)",
    "rgba(251, 7, 217, 1)",
]
currentColor= 0;
changeColor = function(){
    if(currentColor<colorList.length-1){
        currentColor++;
    }else{
        currentColor = 0;
    }

    document.documentElement.style.setProperty('--Color', `${colorList[currentColor]}`);
}