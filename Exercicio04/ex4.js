var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
//Cria tabela e renderiza para o HTML
var createTable = function (person) {
    var personTr = document.createElement("tr");
    var idTd = document.createElement("td");
    idTd.innerText = person.id.toString();
    var nameTd = document.createElement("td");
    nameTd.innerText = person.name;
    var bioTd = document.createElement("td");
    bioTd.innerText = person.bio;
    var btnDelete = document.createElement("button");
    btnDelete.innerText = "Deletar ID";
    btnDelete.addEventListener("click", function () { return deleteId(person.id); });
    //btn update not working yet.
    var btnUpdate = document.createElement("button");
    btnUpdate.innerText = "Editar Itens";
    btnUpdate.addEventListener("click", function () { return updateTheForm(person.id); });
    btnUpdate.addEventListener("click", function () { return btnUpdate.style.display = "none"; });
    personTr.appendChild(idTd);
    personTr.appendChild(nameTd);
    personTr.appendChild(bioTd);
    personTr.appendChild(btnDelete);
    personTr.appendChild(btnUpdate);
    return personTr;
};
var loadTable = function (list) {
    var table = document.querySelector("#table");
    table.innerHTML = "";
    var tableTrs = list.map(createTable);
    tableTrs.forEach(function (personTr) { return table.appendChild(personTr); });
};
var updateTheForm = function (id) {
    var container = document.querySelector("#form-container");
    var updateForm = document.createElement("form");
    var nameInput = document.createElement("input");
    nameInput.className = "input-name";
    nameInput.placeholder = "Insira novo nome aqui";
    var bioInput = document.createElement("input");
    bioInput.placeholder = "Insira nova bio aqui";
    var submitButton = document.createElement("button");
    submitButton.innerText = "Atualizar";
    submitButton.type = "submit";
    updateForm.appendChild(nameInput);
    updateForm.appendChild(bioInput);
    updateForm.appendChild(submitButton);
    updateForm.addEventListener("submit", function (event) { return actionSubmit(event, id, {
        name: nameInput.value,
        bio: bioInput.value
    }); });
    container.appendChild(updateForm);
    console.log(updateForm);
    console.log(container);
};
var actionSubmit = function (event, id, updateInfo) {
    event.preventDefault();
    lista = updateById(id, lista, updateInfo);
    var containerForm = document.querySelector("#form-container");
    containerForm.innerHTML = '';
    loadTable(lista);
    console.log(updateInfo);
};
var deleteId = function (id) {
    lista = removePerson(id, lista);
    loadTable(lista);
};
//Funções para manipulação dos dados da lista.
var getBioById = function (id, list) {
    var bioCheck = list.find(function (person) { return person.id === id; });
    return bioCheck ? bioCheck.bio : '';
};
var getNameById = function (id, list) {
    var nameCheck = list.find(function (person) { return person.id === id; });
    return nameCheck ? nameCheck.name : '';
};
var removePerson = function (id, list) {
    var listRemoveId = list.filter(function (person) { return person.id !== id; });
    return listRemoveId;
};
var updateById = function (id, list, update) {
    var personToUpdate = list.find(function (person) { return person.id === id; });
    if (personToUpdate === undefined) {
        return list;
    }
    var updatedPerson = __assign(__assign({}, personToUpdate), update);
    var updatedList = list.map(function (person) {
        return person !== personToUpdate ? person : updatedPerson;
    });
    return updatedList;
};
document.addEventListener("DOMContentLoaded", function () { return loadTable(lista); });
