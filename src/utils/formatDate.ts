import { format, parseISO } from 'date-fns'

export function formatDate(date: string) {
  return format(parseISO(date), 'LLL d, yyyy')
}
