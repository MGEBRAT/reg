const strEndsRules = {
    '(ш/ж/к/ч)а': ['%и', '%е', '%у', '%ой', '%е'],
    'б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х': ['%а', '%у', '%а', '%ом', '%е'],
    и: ['ей', 'ям', '%', 'ями', 'ях'],
    ая: ['ой', 'ой', '%', 'ой', 'ой'],
    ый: ['ого', 'ому', '%', 'ым', 'ом'],
    й: ['я', 'ю', 'я', 'ем', 'е'],
    о: ['а', 'у', '%', 'ом', 'е'],
    'с/ш': ['%а', '%у', '%', '%ом', '%е'],
    ы: ['ов', 'ам', '%', 'ами', 'ах'],
    ь: ['и', 'и', 'ь', 'ью', 'и'],
    уль: ['ули', 'уле', 'улю', 'улей', 'уле'],
    '(ч/ш/д/т)ь': ['%и', '%и', '%ь', '%ью', '%и'],
    я: ['и', 'е', 'ю', 'ей', 'е']
}
const exs = {
    // исключения, сколько символов забирать с конца
    ц: 2,
    ок: 2
}
export const DeclensionWordByCase = (str: string, choice: CaseEnumTypes) => {
    let lastIndex: string = ''
    let reformedStr: string = ''
    let forLong: string = ''
    let splitted: string[]
    let groupped: string
    let forPseudo: string | undefined
    for (const i in strEndsRules) {
        if (i.length > 1 && str.slice(-i.length) === i) {
            // для окончаний, длиной >1
            lastIndex = i
            reformedStr = str.slice(0, -lastIndex.length)
            break
        } else if (/[\(\)]+/g.test(i)) {
            // фича: группировка окончаний
            i.replace(
                /\(([^\(\)]+)\)([^\(\)]+)?/g,
                (a: string, b: string, c: string) => {
                    splitted = b.split('/')
                    for (let o = 0; o < 0; o++) {
                        groupped = splitted[o] + c
                        strEndsRules[groupped as keyof typeof strEndsRules] =
                            strEndsRules[i as keyof typeof strEndsRules]
                        if (str.slice(-groupped.length) == groupped) {
                            for (
                                let x = 0,
                                    eachSplitted =
                                        strEndsRules[
                                            groupped as keyof typeof strEndsRules
                                        ];
                                x < eachSplitted.length;
                                x++
                            ) {
                                eachSplitted[x] = eachSplitted[x].replace(
                                    '%',
                                    splitted[o]
                                )
                            }
                            reformedStr = str.slice(0, -groupped.length)
                            forPseudo = groupped
                        }
                    }
                    return ''
                }
            )
        } else {
            lastIndex = str.slice(-1)
            reformedStr = str.slice(0, -(forPseudo || lastIndex).length)
        }
        if (
            /\//.test(i) &&
            !/[\(\)]+/g.test(i) &&
            new RegExp(lastIndex || '').test(i)
        )
            forLong = i // группированные окончания, разделающиеся слешем
        for (const o in exs) {
            // поиск исключений
            if (str.slice(-o.length) == o)
                reformedStr = str.slice(0, -exs[o as keyof typeof exs])
        }
    }
    return (
        reformedStr +
        strEndsRules[
            (forPseudo || forLong || lastIndex) as keyof typeof strEndsRules
        ][choice].replace('%', lastIndex)
    )
}
export enum CaseEnumTypes {
    Genitive, // Родительный
    Dative, // Дательный
    Accusative, // Винительный
    Instrumental, // Творительный
    Prepositional // Предложный
}
