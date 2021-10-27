function getWordInput(event: Event) {
    event.preventDefault();

    let word: HTMLSelectElement = document.querySelector('#word') as HTMLSelectElement;
    let vowelAnswer: HTMLSelectElement = document.querySelector('#answer') as HTMLSelectElement;

    vowelAnswer.innerHTML = vowelCountByInput(word.value).toString();
}

function vowelCountByInput(word: string) {
    return word.match(/[aeiou]/gi).length;
}