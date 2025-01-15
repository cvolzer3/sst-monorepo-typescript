export const vpc = new sst.aws.Vpc("MainVPC", {
  nat: "managed",
  // Bastion is used for VPC access from the local machine.
  bastion: true,
});
