let names = []

const addName = function(newName){
    names = names.concat(newName)
}

const nameExist = function(name){
    return names.includes(name)
}