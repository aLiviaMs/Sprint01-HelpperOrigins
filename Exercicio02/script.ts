let lista: Array<Object> = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];

type Item = {
    id: number,
    name: string,
    bio: string
}

type UpdateListFunctional = {
    name?: string,
    bio?: string
}

//(a)
const getBioByIdFunctional = (id: number, list: Array<Item>): string => {
    const bioCheck: Item = list.find(item => item.id === id);

    if (bioCheck)
        return bioCheck.bio;
    else
        return null;
}

const getBioByIdImperative = (id: number, list: Array<Item>): string => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].bio;
    }
    return null;
};

//(b)
const getNameByIdFunctional = (id: number, list: Array<Item>): string => {
    const nameCheck: Item = list.find(item => item.id === id);

    if (nameCheck)
        return nameCheck.name;
    else
        return null;
}

const getNameByIdImperative = (id: number, list: Array<Item>): string => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id)
            return list[i].name;
    }
    return null;
}

//(c)
const deleteByIdFunctional = (id: number, list: Array<Item>): Array<Item> => {

    const newList: any = list.map((item, index) => {
        if (item.id === id)
            list.splice(index, 1);
    })

    return newList;
}

const deleteByIdImperative = (id: number, list: Array<Item>): void => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id)
            list.splice(i, 1);
    }
}

//(d)
const updateByIdFunctional = (id: number, list: Array<Item>, name?: string, bio?: string): void => {
    const index = list.findIndex(item => item["id"] === id);
    const nameList = list[index]["name"] = name;
    const bioList = list[index]["bio"] = bio;

    name ? nameList : null;
    bio ? bioList : null;
}

const updateByIdImperative = (id: number, list: Array<Item>, input: string, valueItem: string): string => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (input === 'name')
                return list[i].name = valueItem;
            else if (input === 'bio')
                return list[i].bio = valueItem;
        }
    }
}


//testes

//(a)
console.log("(A) Bio By Id Functional1: " + getBioByIdFunctional(1, lista as Item[]));
console.log("(A) Bio By Id Functional2: " + getBioByIdFunctional(5, lista as Item[]));
console.log("(A) Bio By Id Imperative1: " + getBioByIdImperative(3, lista as Item[]));
console.log("(A) Bio By Id Imperative2: " + getBioByIdImperative(5, lista as Item[]));

//(b)
console.log("(B) Name By Id Functional1: " + getNameByIdFunctional(2, lista as Item[]));
console.log("(B) Name By Id Functional2: " + getNameByIdFunctional(5, lista as Item[]));
console.log("(B) Name By Id Imperative1: " + getNameByIdImperative(1, lista as Item[]));
console.log("(B) Name By Id Imperative1: " + getNameByIdImperative(5, lista as Item[]));

//(d)
const updateList: UpdateListFunctional = {
    name: "lovelace ada",
    bio: "alterado",
};

updateByIdFunctional(1, lista as Item[], "liv novo", "bio alterada");

updateByIdImperative(2, lista as Item[], 'name', 'Novo Nomeeeee');
updateByIdImperative(2, lista as Item[], 'bio', 'Bio nova aksjhdkajshdkjashkdjhqowique');

console.log("(D) Update Functional id1: ");
console.log("(D) Update Imperative id2: ");
console.log(lista as Item[]);



//(c)
deleteByIdFunctional(2, lista as Item[]);
deleteByIdImperative(1, lista as Item[]);
console.log("(C) Delete By Id Functional id2: ");
console.log("(C) Delete By Id Imperative id1: ");
console.log(lista as Item[]);
