import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
	title: "couple-dialogue",
	projectId: "8n32b6sa",
	dataset: "prod",
	plugins: [
		deskTool({ structure: deskStructure }),
		visionTool()
	],
	schema: {
		types: schemas,
	},
});
