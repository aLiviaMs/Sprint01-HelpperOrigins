const getListImperativo = (list: Array<any>): Array<number> | string | boolean => {
    let isNumber: boolean = true;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number')
            isNumber = false;
    }

    if (isNumber === true && list.length > 0) {
        let sum: number = 0;
        let minNumber: number = list[0];
        let maxNumber: number = list[0];
        let meanNumber: number;

        for (let i = 0; i < list.length; i++) {
            sum = sum + list[i];

            maxNumber = list[i] > maxNumber ? list[i] : maxNumber;
            minNumber = list[i] < minNumber ? list[i] : minNumber;
        }
        meanNumber = sum / list.length;


        return [maxNumber, minNumber, meanNumber];
    } else {
        return "Lista vazia ou possui um objeto diferente do tipo numérico.";
    }

}

console.log(getListImperativo([99, 2, 13]));
console.log(getListImperativo([99, 50, 150]));
console.log(getListImperativo([1, 5, 1231, "aksjdha"]));
console.log(getListImperativo(['1, 5, 1231']));
console.log(getListImperativo([]));
