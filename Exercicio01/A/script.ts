function vowelCountByParameter(word: string): number {
    const wordFilter: number = word.replace(/[^aeiou]/gi, '').length;

    return wordFilter;
}

console.log("Total de vogais passado via paramĂȘtro: " + vowelCountByParameter("Helpper Origins"));