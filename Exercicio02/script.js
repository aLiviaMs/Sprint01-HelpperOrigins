var lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    },
];
//(a)
var getBioByIdFunctional = function (id, list) {
    var bioCheck = list.find(function (item) { return item.id === id; });
    if (bioCheck)
        return bioCheck.bio;
    else
        return null;
};
var getBioByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].bio;
    }
    return null;
};
//(b)
var getNameByIdFunctional = function (id, list) {
    var nameCheck = list.find(function (item) { return item.id === id; });
    if (nameCheck)
        return nameCheck.name;
    else
        return null;
};
var getNameByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].name;
    }
    return null;
};
//(c)
var deleteByIdFunctional = function (id, list) {
    var newList = list.map(function (item, index) {
        if (item.id === id)
            list.splice(index, 1);
    });
    return newList;
};
var deleteByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id)
            list.splice(i, 1);
    }
};
//(d)
var updateByIdFunctional = function (id, list, name, bio) {
    var index = list.findIndex(function (item) { return item["id"] === id; });
    var nameList = list[index]["name"] = name;
    var bioList = list[index]["bio"] = bio;
    name ? nameList : null;
    bio ? bioList : null;
};
var updateByIdImperative = function (id, list, input, valueItem) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (input === 'name')
                return list[i].name = valueItem;
            else if (input === 'bio')
                return list[i].bio = valueItem;
        }
    }
};
//testes
//(a)
console.log("(A) Bio By Id Functional1: " + getBioByIdFunctional(1, lista));
console.log("(A) Bio By Id Functional2: " + getBioByIdFunctional(5, lista));
console.log("(A) Bio By Id Imperative1: " + getBioByIdImperative(3, lista));
console.log("(A) Bio By Id Imperative2: " + getBioByIdImperative(5, lista));
//(b)
console.log("(B) Name By Id Functional1: " + getNameByIdFunctional(2, lista));
console.log("(B) Name By Id Functional2: " + getNameByIdFunctional(5, lista));
console.log("(B) Name By Id Imperative1: " + getNameByIdImperative(1, lista));
console.log("(B) Name By Id Imperative1: " + getNameByIdImperative(5, lista));
//(d)
var updateList = {
    name: "lovelace ada",
    bio: "alterado"
};
updateByIdFunctional(1, lista, "liv novo", "bio alterada");
updateByIdImperative(2, lista, 'name', 'Novo Nomeeeee');
updateByIdImperative(2, lista, 'bio', 'Bio nova aksjhdkajshdkjashkdjhqowique');
console.log("(D) Update Functional id1: ");
console.log("(D) Update Imperative id2: ");
console.log(lista);
//(c)
deleteByIdFunctional(2, lista);
deleteByIdImperative(1, lista);
console.log("(C) Delete By Id Functional id2: ");
console.log("(C) Delete By Id Imperative id1: ");
console.log(lista);
