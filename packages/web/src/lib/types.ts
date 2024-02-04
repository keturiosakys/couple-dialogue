export type AstroURLObject = {
	origin: string;
	pathname: string;
};

export type Prices = {
	price_1: number;
	price_2: number;
}

export type Slug = {
	current: string;
};

export type SanityContent = {
	_id: string;
	content: string;
};

export type SanityLang<T> = {
	[key in Languages extends string ? string : never]: T;
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

export type Consultant = {
	name: SanityLang<string>;
	slug: string;
	imageAltText: string;
	imageUrl: string;
	imageMetadata: {
		_type: string;
		width: number;
		height: number;
		aspectRatio: number;
	};
	headline: SanityLang<string>;
	bio: SanityLang<string>;
	bio_new: SanityLang<string>;
};


export type Service = {
	title: SanityLang<string>;
	slug: SanityLang<Slug>;
	priceBlurb: SanityLang<SanityContent>;
	truncatedBlurb: SanityLang<SanityContent>;
	blurb: SanityLang<SanityContent>;
	price: Prices
};

