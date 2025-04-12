export const importConsole = async (path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  // Assuming the build setup resolves workspace packages correctly for dynamic imports
  return (await import(`@quenti/console/${path}`)) as {
    usernameAvailable: (username: string) => boolean;
  };
};
