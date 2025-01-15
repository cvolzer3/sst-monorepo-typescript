/// <reference path="../.sst/platform/config.d.ts" />
import { database } from "./database";
import { vpc } from "./vpc";

export const cluster = new sst.aws.Cluster("AppServerCluster", {
  vpc,
});

export const service = cluster.addService("AppServer", {
  loadBalancer: {
    ports: [{ listen: "80/http" }],
  },
  link: [database],
  dev: {
    // NOTE: FYI, this is relative. If you run `sst dev` from the root, it will run `node --watch packages/app-server/dist/index.js`. If I run it from a folder, it adds that folder.
    command:
      "tsx watch --tsconfig packages/app-server/tsconfig.json packages/app-server/src/index.ts",
  },
  image: {
    dockerfile: "packages/app-server/Dockerfile",
  },
  environment: {
    APP_SERVER_PORT: "80",
  },
});
