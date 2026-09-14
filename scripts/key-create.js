let draggedFragmentId = "";
let keyCompleted = false;
let isRestrictedFragment = function(fragmentId){
    return /^Restricted-Archives-Key-Fragment-[123]$/.test(fragmentId);
};

$(document).on("dragstart", "#inventory-box img[id^='Restricted-Archives-Key-Fragment-']", function(event){
    draggedFragmentId = this.id;
    event.originalEvent.dataTransfer.setData("text/plain", draggedFragmentId);
});

$(document).on("dragend", function(){
    draggedFragmentId = "";
    $("#keymold").removeClass("mold-ready");
});

$("#keymold").on("dragover", function(event){
    if(!isRestrictedFragment(draggedFragmentId)){
        $(this).removeClass("mold-ready");
        return;
    }

    event.preventDefault();
    $(this).addClass("mold-ready");
});

$("#keymold").on("dragleave", function(){
    $(this).removeClass("mold-ready");
});

$("#keymold").on("drop", function(event){
    event.preventDefault();
    $(this).removeClass("mold-ready");

    const fragmentId = event.originalEvent.dataTransfer.getData("text/plain") || draggedFragmentId;
    if(!isRestrictedFragment(fragmentId)){
        return;
    }

    const fragmentNumber = fragmentId.replace("Restricted-Archives-Key-Fragment-", "");
    $(`#keymold-fragment-${fragmentNumber}`).addClass("placed");
    if($(".mold-fragment.placed").length === 3){
        $("#keymold").addClass("key-ready");
    }
});

$("#keymold").on("click", function(){
    if(keyCompleted || $(".mold-fragment.placed").length !== 3){
        return;
    }

    $("#keymold").removeClass("key-ready");
    $("#keymold").addClass("key-completing");
    $(".mold-fragment.placed").addClass("spiral-away");

    const fragmentNames = [
        "Restricted Archives Key Fragment 1",
        "Restricted Archives Key Fragment 2",
        "Restricted Archives Key Fragment 3"
    ];
    inventory = inventory.filter(function(item){
        return !fragmentNames.includes(item);
    });
    if(!inventory.includes("Restricted Archives Key")){
        inventory.push("Restricted Archives Key");
    }
    localStorage.setItem("inventory", JSON.stringify(inventory));
    loadInventory();
    keyCompleted = true;
});