export function formatTimestamp(date: Date): string {
  return date.toISOString()
}

export function parseTimestamp(isoString: string): Date {
  return new Date(isoString)
}
