export const getVersion = (): string => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const packageJson = require("../../package.json");
  if (packageJson && packageJson.version) {
    return packageJson.version;
  }
  return "unknown";
};
