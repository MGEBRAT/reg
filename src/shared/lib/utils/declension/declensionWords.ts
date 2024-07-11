export class DeclensionWord {
    #words: string[]
    constructor(words: string[]) {
        if (words.length !== 3) {
            throw new Error('DeclensionWord must have 3 words')
        }
        this.#words = words
    }
    getWord(value: number) {
        value = Math.abs(value) % 100
        const num = value % 10
        if (value > 10 && value < 20) return this.#words[2]
        if (num > 1 && num < 5) return this.#words[1]
        if (num == 1) return this.#words[0]
        return this.#words[2]
    }
}
