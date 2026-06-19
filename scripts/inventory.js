
let inventory = JSON.parse(localStorage.getItem("inventory"));
let hideBox = function(){
    $("#close-inventory").off("click");
    $("#inventory-box").css("transform","translateX(calc(25vw - 5px))")
    $("#inventory-box").removeClass("hide-arrow")
    setTimeout(function(){
        $("#inventory-box").on("click",function(){
            showBox();
        })
    },100)

}
let showBox = function(){
    $("#inventory-box").off("click");
    $("#inventory-box").css("transform","none")
    $("#inventory-box").addClass("hide-arrow")
    $("#close-inventory").on("click",function(){
        hideBox();
    })
}
if(inventory.length){
    console.log("Inventory: " + inventory)
    $("body").append("<div id='inventory-box'></div>")
    for(let x=0; x<inventory.length; x++){
        $("#inventory-box").append(`<div class='inventory-item'><img id='${inventory[x].replaceAll(" ","-")}' style="max-width: 20vw; max-height: 20vh;"src="/images/${inventory[x].replaceAll(" ","")}.gif"><p style="text-align:center">${inventory[x]}</p></div>`)
    }
    $("#inventory-box").append(`<div id="close-inventory">Close Inventory</div>`)
    $("#inventory-box").on("click",function(){
        showBox();
    })
}else{
    inventory = [];
}


