const idOrderMap = function(arr, callback, thisArg) {
    let i; const length = arr.length, results = [];
    const funcElemId = (i) => arr.find( (item) => item.id === i.toString());
    for (i = 0; i < length; i = i + 1) {
        const elemId = funcElemId(i);
        if (elemId) results.push(callback.call(thisArg, elemId, i, arr));
    }
    return results;
};

export default idOrderMap;