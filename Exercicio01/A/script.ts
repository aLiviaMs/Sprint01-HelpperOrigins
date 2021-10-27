function vowelCountByParameter(word: string) {
    return word.match(/[aeiou]/gi).length;
}

console.log("Total de vogais passado via paramêtro: " + vowelCountByParameter("Helpper Origins"));