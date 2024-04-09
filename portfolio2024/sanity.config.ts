import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "883v7oiz",
  dataset: "production",
  title: "My Portfolio Site",
  apiVerson: "2024-04-08",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: [project] },
});

export default config;
