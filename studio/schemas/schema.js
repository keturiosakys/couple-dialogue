// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Language config

// import languages from "./languages";
//
// We import object and document schemas
// Docs
// import post from "./documents/post";
import consultant from "./documents/consultant";
import category from "./documents/category";
import config from "./documents/config";
import book from "./documents/book";
import landingPage from "./documents/landingPage";
import model from "./documents/model";
import paslaugos from "./documents/paslaugos";
import pricing from "./documents/pricing";

// Objects
import localizedString from "./objects/localizedString";
import localizedSlug from "./objects/localizedSlug";
import localizedCta from "./objects/localizedCta";
import localizedText from "./objects/localizedText";
import localizedEditorial from "./objects/localizedEditorial";
import localizedConsultantBioSections from "./objects/localizedConsultantBioSections";
import consultantBioSection from "./objects/consultantBioSection";
import blockEditorial from "./objects/blockEditorial";
import a11yImage from "./objects/a11yImage";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		// post,
		book,
		consultant,
		category,
		config,
		model,
		paslaugos,
		pricing,
		landingPage,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		a11yImage,
		blockEditorial,
		consultantBioSection,
		localizedEditorial,
		localizedConsultantBioSections,
		localizedText,
		localizedString,
		localizedCta,
		localizedSlug,
	]),
});
