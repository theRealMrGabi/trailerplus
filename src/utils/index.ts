export const _formatNumber = (value: number | string) => {
	return new Intl.NumberFormat().format(Number(value))
}

export const _convertMinutesToHoursAndMinutes = (minutes: number) => {
	if (minutes < 0) {
		throw new Error('Input minutes must be a non-negative number.')
	}

	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	if (hours === 1) {
		return `1hr ${remainingMinutes}mins`
	} else if (hours > 1) {
		return `${hours}hrs ${remainingMinutes}mins`
	} else {
		return `${remainingMinutes}mins`
	}
}

export { color } from './color'
export * from './data'
