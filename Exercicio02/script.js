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
    var bioCheck = list.find(function (person) { return person.id === id; });
    if (bioCheck)
        return bioCheck.bio;
    else
        return undefined;
};
var getBioByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].bio;
    }
    return undefined;
};
//(b)
var getNameByIdFunctional = function (id, list) {
    var nameCheck = list.find(function (person) { return person.id === id; });
    if (nameCheck)
        return nameCheck.name;
    else
        return undefined;
};
var getNameByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].name;
    }
    return undefined;
};
//(c)
var deleteByIdFunctional = function (id, list) {
    list.filter(function (person, index) {
        if (person.id === id)
            list.splice(index, 1);
    });
    return list;
};
var deleteByIdImperative = function (id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id)
            list.splice(i, 1);
    }
};
//(d)
var updateByIdFunctional = function (id, list, name, bio) {
    var index = list.findIndex(function (person) { return person["id"] === id; });
    if (index == -1) {
        console.log("Id doesn't exist, so list can't be updated.");
    }
    else {
        var nameList = list[index]["name"] = name;
        var bioList = list[index]["bio"] = bio;
        name ? nameList : undefined;
        bio ? bioList : undefined;
    }
};
var updateByIdImperative = function (id, list, input, valuePerson) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (input === 'name')
                return list[i].name = valuePerson;
            else if (input === 'bio')
                return list[i].bio = valuePerson;
        }
    }
    console.log("Id doesn't exist, so list can't be updated.");
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
//(c)
console.log("(C) Delete By Id Functional id4: ");
deleteByIdFunctional(5, lista);
console.log("(C) Delete By Id Imperative id2: ");
deleteByIdImperative(2, lista);
console.log(lista);
//(d)
console.log("(D) Update Functional id2: ");
updateByIdFunctional(2, lista, "liv novo", "bio alterada");
console.log("(D) Update Functional id1: ");
updateByIdFunctional(1, lista, "liv novo", "bio alterada");
console.log(getNameByIdFunctional(1, lista));
console.log(getBioByIdFunctional(1, lista));
console.log("(D) Update Imperative id3: ");
updateByIdImperative(3, lista, 'name', 'Novo Nomeeeee');
console.log(getNameByIdImperative(3, lista));
console.log("(D) Update Imperative id2: ");
updateByIdImperative(2, lista, 'bio', 'Bio nova aksjhdkajshdkjashkdjhqowique');
console.log(lista);
