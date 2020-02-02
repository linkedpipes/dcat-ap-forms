import {
  DCTERMS,
  DCATAP,
  NKOD,
  FOAF,
  VCARD,
  PU,
  CREATIVE_COMMONS,
  SCHEMA
} from "@/app-service/vocabulary";

export const FRAME = {
  "@type": DCATAP.Dataset,
  [DCATAP.distribution]: [{
    "@type": [DCATAP.Distribution]
  }]
}