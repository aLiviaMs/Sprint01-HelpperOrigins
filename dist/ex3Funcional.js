var getListFunctional = function (list) {
    //verificar se todos na lista são numeros.
    var isNumber = list.every(function (item) { return typeof item === 'number'; });
    if (list.length > 0 && isNumber === true) {
        var maxNumber = list.reduce(function (previous, current) { return Math.max(previous, current); });
        var minNumber = list.reduce(function (previous, current) { return Math.min(previous, current); });
        var meanNumber = function (list) { return list.reduce(function (previous, current) { return previous + current; }) / list.length; };
        var results = [maxNumber, minNumber, meanNumber(list)];
        return results;
    }
    else {
        return 'Lista vazia ou possui um objeto diferente do tipo numérico.';
    }
};
//teste
console.log(getListFunctional([99, 2, 13]));
console.log(getListFunctional([99, 50, 150]));
console.log(getListFunctional([1, 44, 987, "asdas"]));
console.log(getListFunctional(["asdas"]));
console.log(getListFunctional([]));
