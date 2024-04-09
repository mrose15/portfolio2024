import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "883v7oiz",
  dataset: "production",
  title: "My Portfolio Site",
  apiVerson: "2024-04-08",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
