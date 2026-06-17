let variableList = window.location.search.replace("?","").split("&")
let variables = {index:null};
let currentRoom = null;
for(let x=0; x<variableList.length; x++){
    variables[variableList[x].split("=")[0]] = variableList[x].split("=")[1] 
}
if(variables.index||variables.index==0){
    currentRoom = rooms[variables.type][variables.index]
}else{
    for (let x=0; x<rooms[variables.type].length; x++){
        if(rooms[variables.type][x]==variables.name){
            currentRoom = rooms[variables.type][x]
        }
    } 
}


