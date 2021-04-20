const myRemove = (arr, item) => {
    arr.splice(arr.indexOf(item), 1);
    return arr;
}

console.log(myRemove([1, 2, 3, 4], 3))