import S from "@sanity/desk-tool/structure-builder";

export default () =>
	S.list()
		.title("coupledialogue.com")
		.items([
			S.listItem()
				.title("Titulinis")
				.child(
					S.document()
						.schemaType("landingPage")
						.documentId("landingPage")
						.title("Titulinis"),
				),

			S.listItem()
				.title("Modelis")
				.child(
					S.document()
						.schemaType("model")
						.documentId("model")
						.title("Modelis"),
				),
			S.listItem()
				.title("Terapija")
				.child(S.documentTypeList("paslaugos").title("Terapija")),
			S.listItem()
				.title("Konsultantai")
				.child(S.documentTypeList("consultant").title("Konsultantai")),
			S.listItem()
				.title("Knyga")
				.child(
					S.document()
						.schemaType("book")
						.documentId("book")
						.title("Knyga")
				),
			// S.divider(),

			// S.listItem()
			//   .title("Blog")
			//   .child(
			//     S.list()
			//       .title("Blog Content")
			//       .items([
			//         S.listItem()
			//           .title("Categories")
			//           .child(S.documentTypeList("category").title("Categories")),
			//         S.listItem()
			//           .title("Posts")
			//           .child(S.documentTypeList("post").title("Posts")),
			//       ])
			//   ),
			S.divider(),

			S.listItem()
				.title("Nustatymai")
				.child(S.document().schemaType("config").documentId("config")),
		]);
