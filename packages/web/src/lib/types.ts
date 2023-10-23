export type AstroURLObject = {
	origin: string;
	pathname: string;
};

export type PricingTable = Array<PricingBracket>;

export type PricingBracket = {
	slug: string;
	label: {
		en: string;
		lt: string;
	};
	price_1: number;
	price_2: number;
};

export type Slug = {
	current: string;
};

export type SanityContent = {
	_id: string;
	content: string;
};

export type SanityLang<T> = {
	[key in Languages extends string ? string: never]: T;
};

export type Languages = "en" | "lt";

export type SiteConfig = {
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
};
