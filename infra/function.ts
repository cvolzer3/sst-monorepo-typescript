import { database } from "./database";
import { vpc } from "./vpc";

export const functionDlq = new sst.aws.Queue("FunctionDlq", {
  fifo: true,
});

export const functionQueue = new sst.aws.Queue("FunctionQueue", {
  fifo: true,
  dlq: {
    queue: functionDlq.arn,
    retry: 1,
  },
  visibilityTimeout: "30 seconds",
});

functionQueue.subscribe({
  handler: "packages/function/src/index.handler",
  url: true,
  link: [database],
  vpc,
});
