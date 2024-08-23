import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { externalImageType } from "./externalImageType";
import { postType } from "./postType";
import { tagType } from "./tagType";
import { portableTextType } from "./portableTextType";

export const schemaTypes = [
  authorType,
  categoryType,
  postType,
  tagType,
  externalImageType,
  portableTextType,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
