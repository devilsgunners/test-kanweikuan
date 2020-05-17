var arrayHelper = {}
arrayHelper.chunkArray = (array, chunk_size) => {
    var results = [];
    
    while (array.length) {
        results.push(array.splice(0, chunk_size));
    }
    
    return results;
}
module.exports = arrayHelper