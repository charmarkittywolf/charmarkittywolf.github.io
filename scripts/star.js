if(inventory.includes("Restricted Archives Key")||inventory.includes("Restricted Archives Key Fragment 1")){
    $("#key-fragment-1").append("<p>You've already unlocked this key fragment!</p>")
}else{
    $("#key-fragment-1").append("<img src='/images/RestrictedArchivesKeyFragment1.gif' id='restricted-key-fragment'>")
    $("#key-fragment-1").append("<p>You've unlocked a key fragment!</p>")
    $("#key-fragment-1").one("click", function(){
        $("#restricted-key-fragment").addClass("spiral-away");
        saveToInventory("Restricted Archives Key Fragment 1")
    })
}

