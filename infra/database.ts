import { vpc } from "./vpc";

export const database = new sst.aws.Postgres("Database", {
  vpc: vpc,
  storage: "100 GB",
});
