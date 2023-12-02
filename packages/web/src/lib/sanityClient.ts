import { createClient } from "@sanity/client";

const config = {
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
	useCdn: false,
};

export const client = createClient(config);
