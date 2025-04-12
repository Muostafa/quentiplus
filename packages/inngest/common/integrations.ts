export const importIntegration = async (path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  // Assuming the build setup resolves workspace packages correctly for dynamic imports
  return await import(`@quenti/integrations/${path}`);
};
