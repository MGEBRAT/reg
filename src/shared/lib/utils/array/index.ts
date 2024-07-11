type TValue = number | string
interface IObject {
    id?: TValue
    uuid?: TValue
}

export function toSpliceBy<T extends IObject>(value: TValue, array: T[]): T[] {
    const idx = findIndexBy(value, array)
    return toSplice(idx, array)
}
function toSplice<T>(idx: number, array: T[]) {
    if (idx === -1) return array
    return array.toSpliced(idx, 1)
}

export function toReplaceBy<T extends IObject>(
    idValue: TValue,
    setterValue: T,
    array: T[]
) {
    const idx = findIndexBy(idValue, array)
    return toReplace(idx, setterValue, array)
}
function toReplace<T>(idx: number, value: T, array: T[]) {
    if (idx === -1) return array
    return array.toSpliced(idx, 1, value)
}
export function findBy<T extends IObject>(
    id: TValue,
    array: T[]
): T | undefined {
    return array.find((item) => item.id === id || item.uuid === id)
}
export function findIndexBy<T extends IObject>(id: TValue, array: T[]): number {
    return array.findIndex((item) => item.id === id || item.uuid === id)
}
