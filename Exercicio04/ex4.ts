let lista: Array<Person> = [
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

type Person = {
    id: number,
    name: string,
    bio: string
}

type UpdateInfos = {
    name?: string,
    bio?: string
}


//Cria tabela e renderiza para o HTML
const createTable = (person: Person): HTMLElement => {
    const personTr: HTMLTableRowElement = document.createElement("tr");

    const idTd: HTMLTableCellElement = document.createElement("td");
    idTd.innerText = person.id.toString();

    const nameTd: HTMLTableCellElement = document.createElement("td");
    nameTd.innerText = person.name;

    const bioTd: HTMLTableCellElement = document.createElement("td");
    bioTd.innerText = person.bio;

    const btnDelete: HTMLButtonElement = document.createElement("button");
    btnDelete.innerText = "Deletar ID";
    btnDelete.addEventListener("click", () => deleteId(person.id));


    //btn update not working yet.
    const btnUpdate: HTMLButtonElement = document.createElement("button");
    btnUpdate.innerText = "Editar Itens";
    btnUpdate.addEventListener("click", () => updateTheForm(person.id));
    btnUpdate.addEventListener("click", () => btnUpdate.style.display = "none");


    personTr.appendChild(idTd);
    personTr.appendChild(nameTd);
    personTr.appendChild(bioTd);
    personTr.appendChild(btnDelete);
    personTr.appendChild(btnUpdate);

    return personTr;
};
const loadTable = (list: Array<Person>): void => {
    const table: HTMLTableElement = document.querySelector("#table") as HTMLTableElement;

    table.innerHTML = "";
    const tableTrs: HTMLElement[] = list.map(createTable);

    tableTrs.forEach((personTr: HTMLElement) => table.appendChild(personTr));
}

const updateTheForm = (id: number): void => {
    const container: HTMLDivElement = document.querySelector(
        "#form-container"
    ) as HTMLDivElement;
    const updateForm: HTMLFormElement = document.createElement("form");

    const nameInput: HTMLInputElement = document.createElement("input");
    nameInput.className = "input-name"
    nameInput.placeholder = "Insira novo nome aqui";

    const bioInput: HTMLInputElement = document.createElement("input");
    bioInput.placeholder = "Insira nova bio aqui";

    const submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.innerText = "Atualizar";
    submitButton.type = "submit";

    updateForm.appendChild(nameInput);
    updateForm.appendChild(bioInput);
    updateForm.appendChild(submitButton);

    updateForm.addEventListener("submit", (event: Event) => actionSubmit(event, id, {
        name: nameInput.value,
        bio: bioInput.value,
    }));

    container.appendChild(updateForm);
}

const actionSubmit = (event: Event, id: number, updateInfo: UpdateInfos): void => {
    event.preventDefault();

    lista = updateById(id, lista, updateInfo);

    const containerForm: HTMLDivElement = document.querySelector("#form-container") as HTMLDivElement;

    containerForm.innerHTML = '';
    loadTable(lista);
}

const deleteId = (id: number): void => {
    lista = removePerson(id, lista);
    loadTable(lista);
}


//Funções para manipulação dos dados da lista.
const getBioById = (id: number, list: Array<Person>): string => {
    const bioCheck: Person = list.find(person => person.id === id);

    return bioCheck ? bioCheck.bio : '';
}

const getNameById = (id: number, list: Array<Person>): string => {
    const nameCheck: Person = list.find(person => person.id === id);

    return nameCheck ? nameCheck.name : '';
}

const removePerson = (id: number, list: Array<Person>): Array<Person> => {
    const listRemoveId: Array<Person> = list.filter((person: Person) => person.id !== id);
    return listRemoveId;
}

const updateById = (id: number, list: Array<Person>, update: UpdateInfos): Array<Person> => {
    const personToUpdate: Person | undefined = list.find(
        (person: Person) => person.id === id
    );
    if (personToUpdate === undefined) {
        return list;
    }

    const updatedPerson: Person = { ...personToUpdate, ...update };
    const updatedList: Array<Person> = list.map((person: Person) =>
        person !== personToUpdate ? person : updatedPerson
    );

    return updatedList;
}

document.addEventListener("DOMContentLoaded", () => loadTable(lista));