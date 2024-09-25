export const getAssetPath = (path: string) => {
	const baseImageUrl = import.meta.env.VITE_BASE_IMG as string
	const imageSrc = path.includes('https') ? path : path.includes("~") ? path : `${baseImageUrl}${path}`

	return imageSrc
}
