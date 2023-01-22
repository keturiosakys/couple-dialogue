export interface AstroURLObject {
	origin: string;
	pathname: string;
}

export interface Slug {
	current: string;
}

export interface Service {
	title: string;
	slug: Slug;
	truncatedBlurb?: string;
}

export interface SiteConfig {
	seo: {
		title: string;
		description: string;
		image: {
			url: string;
			altText: string;
			width: string;
			height: string;
		};
	};
}
