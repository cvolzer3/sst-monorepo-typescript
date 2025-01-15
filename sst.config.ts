/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-workspace",
      home: "aws",
      providers: {
        aws: {
          // NOTE: `sst.config.ts` is overriden by AWS_PROFILE if that is set.
          profile:
            input.stage === "production"
              ? "astronaut-production"
              : "astronaut-dev",
          region: "us-east-1",
        },
      },
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
    };
  },
  async run() {
    await import("./infra/vpc");
    await import("./infra/database");
    await import("./infra/function");
    await import("./infra/app-server");
  },
});
