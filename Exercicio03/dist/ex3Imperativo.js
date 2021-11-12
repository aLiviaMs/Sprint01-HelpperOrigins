var getListImperativo = function (list) {
    var isNumber = true;
    var sum = 0;
    var minNumber = list[0];
    var maxNumber = list[0];
    var meanNumber;
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number')
            isNumber = false;
    }
    for (var i = 0; i < list.length; i++) {
        sum = sum + list[i];
        maxNumber = list[i] > maxNumber ? list[i] : maxNumber;
        minNumber = list[i] < minNumber ? list[i] : minNumber;
    }
    meanNumber = sum / list.length;
    var results = [maxNumber, minNumber, meanNumber];
    return isNumber === true && list.length > 0 ? results : "Lista vazia ou possui um objeto diferente do tipo numérico.";
};
console.log(getListImperativo([1, 5, 1231]));
console.log(getListImperativo([99, 2, 13]));
console.log(getListImperativo([1, 5, 1231, "aksjdha"]));
console.log(getListImperativo([]));
