import { client } from "@lib/sanityClient.js";
import { SiteConfig } from "@lib/types";
import groq from "groq";

export const allConfigQuery = groq`*[_type =='config'] {
        seo {
            ...,
            image {
                "url": image.asset->.url,
                altText,
                "width": image.asset->.metadata.dimensions.width,
                "height": image.asset->.metadata.dimensions.height
            }
        }
    }[0]`;

export const allLandingPageQuery = groq`*[_type == "landingPage"] {
        content {
          hero,
          jauLaikas {
            title,
            subtitle,
            "imageAltText": visual.altText,
            "imageUrl": visual.image.asset->url,
						"imageMetadata": visual.image.asset->metadata.dimensions
          }
        }
    }  [0]`;

export const modelQuery = groq`*[_type == "model"] { 
  title,
  description,
  model
    }[0]`;

export const bookQuery = groq`*[_type == "book"] {
            title,
            cover {
              altText,
							"imageUrl": image.asset->url,
							"imageMetadata": image.asset->metadata.dimensions
            },
  description,
  cta
    }[0]`;

export const allConsultantsQuery = groq`*[_type == "consultant"] | order(order asc) { 
      name,
      "slug": slug.current,
      "imageAltText": profile.altText,
      "imageUrl": profile.image.asset->url,
      "imageMetadata": profile.image.asset->metadata.dimensions,
      headline,
      shortBio,
      bio_new
    }`; //TODO: maybe migrate bio_new to bio

export const allServicesQuery = groq`*[_type == "paslaugos"] | order(order asc) {
            title,
            blurb,
            truncatedBlurb,
            priceBlurb,
            slug,
						price
    }`;

export const allConfig: SiteConfig = await client.fetch(allConfigQuery);

export const allModel = await client.fetch(modelQuery);

export const allBook = await client.fetch(bookQuery);

export const allLandingPage = await client.fetch(allLandingPageQuery);

export const allConsultants = await client.fetch(allConsultantsQuery);

export const allServices = await client.fetch(allServicesQuery);
