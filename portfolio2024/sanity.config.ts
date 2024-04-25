import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemas";

import client_config from "./sanity/config/client-config";

const config = defineConfig({
  projectId: client_config.projectId,
  dataset: client_config.dataset,
  title: "My Portfolio Site",
  apiVersion: client_config.apiVersion,
  basePath: "/admin",
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: client_config.apiVersion }),
  ],
});

export default config;
