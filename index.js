function standardizeData (collection){
    if(typeof collection==='array'){
        return collection
    } else {
        return Object.values(collection)
} };

function myEach(collection, callback) {
    const newData = standardizeData(collection)
    for(let i = 0; i < newData.length; i++){
        callback(newData[i])
    }
    return collection
}
function myMap(collection, callback) {
    const newData = standardizeData(collection)
    let newArray = []
    for(let i = 0; i < newData.length; i++){
        newArray.push(callback(newData[i]))
    }
    return newArray
}
function myReduce(collection, callback, acc){
    let newData = standardizeData(collection)
    if(!acc){
        acc = newData[0]
        newData = newData.slice(1)
    }
    for(let i=0; i<newData.length; i++){
        acc = callback(acc, newData[i], newData)
    }
    return acc
}
function myFind(collection, predicate){
    const newData = standardizeData(collection)
    for(let i=0; i< newData.length; i++){
        if(predicate(newData[i])){
            return newData[i]
        }
    }
}
function myFilter(collection, predicate){
    const newData = standardizeData(collection)
    let newArray =[]
    for(let i = 0; i< newData.length; i++){
        if(predicate(newData[i])){
            newArray.push(newData[i])
        }
    }
    return newArray
}
function mySize(collection) { 
    const newData = standardizeData(collection)
    let count = 0;
    for(let i = 0; i < newData.length; i++) {
        count++
    }
    return count
}
function myFirst(array, num) {
    let results = []
    if (!num){
        return array[0]
    }else {
        for(let i = 0; i < num; i++) {
            results.push(array[i])
        }
        return results
    }
}
function myLast(array, num) {
    if(!num) {
        return array.slice(-1)[0]
    }else {
        return array.slice(-(num))
    }
}
function myKeys (object) {
    const keys = [];
    for (let key in object){
      keys.push(key);
    }
    return keys;
}

function myValues (object) {
    const values = [];
    for (let key in object){
        values.push(object[key]);
    }
    return values;

}