var getListFunctional = function (list) {
    //verificar se todos na lista são numeros.
    var isNumber = list.every(function (item) { return typeof item === 'number'; });
    if (list.length > 0) {
        var maxNumber = Math.max.apply(Math, list);
        var minNumber = Math.min.apply(Math, list);
        var meanNumber = function (list) { return list.reduce(function (previous, current) { return previous + current; }) / list.length; };
        var results = [maxNumber, minNumber, meanNumber(list)];
        return isNumber ? results : "Não existe só numeros na lista";
    }
    else {
        return 'lista vazia';
    }
};
//teste
console.log(getListFunctional([99, 2, 13]));
console.log(getListFunctional([1, 44, 987, "asdas"]));
console.log(getListFunctional(["asdas"]));
console.log(getListFunctional([]));
