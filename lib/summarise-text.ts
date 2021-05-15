export const summariseText = async (blogText: string) => {
  const config = {
    method: 'POST',
    hostname: 'api.meaningcloud.com',
    path: `http://api.meaningcloud.com/summarization-1.0?key=${process.env.MEANING_CLOUD_LICENSE_KEY}&txt=${blogText}&sentences=3`
  };
  const response = await fetch(config.path, config);
  console.log(await response.json());
};
