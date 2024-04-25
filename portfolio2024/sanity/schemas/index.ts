import { type SchemaTypeDefinition } from "sanity";
import page from "./page-schema";
import project from "./project-schema";
import post from "./post-schema";

import blockContent from "./blockContent-schema";
import category from "./category-schema";
import author from "./author-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, page, post, author, category, blockContent],
};
