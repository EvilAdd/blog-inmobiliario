interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Diego Meneses', // Site author
	title: 'Inmobipedia', // Site title.
	description:
		'Blog donde encontrarás información y consejos para invertir en la industria inmobiliaria.', // Description to display in the meta tags
	lang: 'es-CL',
	ogLocale: 'es-CL',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
