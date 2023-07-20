import type { AstroURLObject } from "@lib/types";

export function checkLang(url: AstroURLObject) {
	const lang = url.pathname.split("/")[1] === "en" ? "en" : "lt";

	return lang;
}
