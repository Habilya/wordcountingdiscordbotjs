function intersectManyOneDimensionalArrays(...arrs) {
    let res = arrs[0].slice();
    for(let i = 1; i < arrs.length; i++) {
        res = intersection(res, arrs[i]);
    }
    return res;
}

function intersection(arr1, arr2) {
    const res = [];
    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            continue;
        }
        res.push(arr1[i]);
    }
    return res;
}


// Example of usage of this function : 
// groupedSystemsByNbSettlements.sort(compareObjectArrayValues('nbSettlements', 'desc'));

function compareObjectArrayValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if(varA > varB) {
            comparison = 1;
        } else if(varA < varB) {
            comparison = -1;
        }
        return(
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

exports.compareObjectArrayValues = compareObjectArrayValues;
exports.intersectManyOneDimensionalArrays = intersectManyOneDimensionalArrays;
