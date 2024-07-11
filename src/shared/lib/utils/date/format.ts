const formatterDate = new Intl.DateTimeFormat('ru-RU')

const formatterDateTime = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})
const formatterTime = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric'
})

type TDate = number | string | Date

// DD/MM/YYYY
export function formatDate(date: TDate) {
    return formatterDate.format(new Date(date))
}

// DD/MM/YYYY, HH:mm
export function formatDateTime(date: TDate) {
    return formatterDateTime.format(new Date(date))
}

// HH:mm
export function formatTime(date: TDate) {
    return formatterTime.format(new Date(date))
}
