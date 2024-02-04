import type { AstroURLObject, Languages, Service } from "@lib/types";

export function checkLang(url: AstroURLObject) {
	const lang = url.pathname.split("/")[1] === "en" ? "en" : "lt";

	return lang;
}

export async function getServices(lang: Languages, all: any) {
	return all.map((service: Service) => {
		return {
			blurb: service.blurb[lang].content,
			priceBlurb: service.priceBlurb[lang].content,
			title: service.title[lang],
			truncatedBlurb: service.truncatedBlurb[lang],
			slug: service.slug[lang].current,
			price: service.price,
		};
	});
}

export function mapServices(lang: Languages) {
	return (service: Service) => {
		return [
			{
				params: {
					service: service.slug,
				},
				props: {
					lang: lang,
					title: service.title,
					description: service.truncatedBlurb,
					content: service.blurb,
					kainos_prierasas: service.priceBlurb,
					price: service.price,
				},
			},
		];
	};
}
