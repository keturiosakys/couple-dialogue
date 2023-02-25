import deskStructure from "./deskStructure";
import schemas from "./schemas/schema";
import { siteId, buildHookId } from "./environment";
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
	title: "couple-dialogue",
	projectId: "8n32b6sa",
	dataset: "prod",
	plugins: [
		dashboardTool({
			widgets: [
				netlifyWidget({
					title: "Atnaujinti tinklapį",
					sites: [
						{
							title: "Couple Dialogue",
							apiId: siteId ?? "",
							buildHookId: buildHookId ?? "",
						},
					],
				}),
				projectInfoWidget(),
				projectUsersWidget(),
			],
		}),
		deskTool({ structure: deskStructure }),
		visionTool(),
	],
	schema: {
		types: schemas,
	},
});
