const getListFunctional = (list: Array<any>): Array<number> | string => {
    //verificar se todos na lista são numeros.
    const isNumber: boolean = list.every(item => typeof item === 'number');

    if (list.length > 0) {
        const maxNumber: number = Math.max.apply(Math, list);
        const minNumber: number = Math.min.apply(Math, list);
        const meanNumber = (list: Array<number>) => list.reduce((previous: number, current: number) => previous + current) / list.length;

        const results: Array<number> = [maxNumber, minNumber, meanNumber(list)];

        return isNumber ? results : "Não existe só numeros na lista";
    } else {
        return 'lista vazia';
    }
}

//teste

console.log(getListFunctional([99, 2, 13]));
console.log(getListFunctional([1, 44, 987, "asdas"]));
console.log(getListFunctional(["asdas"]));
console.log(getListFunctional([]));