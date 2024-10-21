export const formatDate = (date: string) => {
  if (!date) return

  if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(date)) {
    const [day, month, year] = date.split('/')
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
  }

  if (!/\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}Z$/.test(date)) return

  const formattedDate = new Date(date)

  const day = formattedDate.getDate().toString().padStart(2, '0')
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0')
  const year = formattedDate.getFullYear()

  return `${day}/${month}/${year}`
}
