function getWordInput(event: Event): void {
    event.preventDefault();

    const word: HTMLSelectElement = document.querySelector('#word') as HTMLSelectElement;
    const vowelAnswer: HTMLSelectElement = document.querySelector('#answer') as HTMLSelectElement;

    vowelAnswer.innerHTML = vowelCountByInput(word.value).toString();
}

function vowelCountByInput(word: string): number {
    let wordFilter: number;

    wordFilter = word.replace(/[^aeiou]/gi, '').length;

    return wordFilter;
}