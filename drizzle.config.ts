import config from "./lib/config";
import { defineConfig } from "drizzle-kit";

let sslmode = "";
if (config.APP_ENV === "prod") {
  sslmode = "?sslmode=require";
}

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: config.POSTGRES_URL + sslmode,
  },
  verbose: true,
  strict: true,
});
