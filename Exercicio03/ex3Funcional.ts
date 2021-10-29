const getListFunctional = (list: Array<any>): Array<number> | string => {
    //verificar se todos na lista são numeros.
    const isNumber: boolean = list.every(item => typeof item === 'number');


    if (list.length > 0 && isNumber === true) {
        const maxNumber: number = list.reduce((previous: number, current: number) => Math.max(previous, current));
        const minNumber: number = list.reduce((previous: number, current: number) => Math.min(previous, current));

        const meanNumber = (list: Array<number>) => list.reduce((previous: number, current: number) => previous + current) / list.length;

        const results: Array<number> = [maxNumber, minNumber, meanNumber(list)];

        return results;
    } else {
        return 'Lista vazia ou possui um objeto diferente do tipo numérico.';
    }
}

//teste
console.log(getListFunctional([99, 2, 13]));
console.log(getListFunctional([99, 50, 150]));
console.log(getListFunctional([1, 44, 987, "asdas"]));
console.log(getListFunctional(["asdas"]));
console.log(getListFunctional([]));