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
function myReduce(collection, callback){
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