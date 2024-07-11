const formatterRUB = createCurrencyFormatter('RUB')

// делим на 100, так как цена всегда приходит в копейках
export function formatRUB(num: number): string {
    return formatterRUB.format(num / 100)
}

function createCurrencyFormatter(currency: string) {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
}
