export const transformImageUrl = (url: string) => {
  const root = url.split('/private');
  const suffix = url.split('/private')[1].split(/(?=\/v)/);
  return (
    root[0] + '/private/c_scale,e_anti_removal,l_watermark,w_450' + suffix[1]
  );
};
