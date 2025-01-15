import crypto from "node:crypto";

export const generateString = () => {
  return crypto.randomUUID();
};
