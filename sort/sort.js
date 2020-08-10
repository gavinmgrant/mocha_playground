function sort(list) {
    for(let i = 2; i < list.length; i++) {
        let j = 1;
        while (j > 0 && list[j - 1] > list[j]) {
            let temp = list[j];
            list[j] = list[j - 1];
            list[j - 1] = temp;
            j--;
        }
    }
    return list.sort(function(a, b) {return a-b});
}

module.exports = sort;