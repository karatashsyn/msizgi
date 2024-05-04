import { createClient } from "@sanity/client";
import urlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "dtezafsg", // find this at manage.sanity.io or in your sanity.json, example :dtezafsg
  dataset: "production", // this is from those question during 'sanity init', example: production
  useCdn: true,
  apiVersion: "2024-03-28",
});

export const imgUrlBuilder = urlBuilder(client);

export default client;
