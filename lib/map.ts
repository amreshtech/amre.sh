export const getMap = () => {
    const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
    const query = `center=Galway&zoom=13&size=220x225&maptype=roadmap&key=${process.env.GOOGLE_MAPS_API}`;
    return `${baseUrl}?${query}`;
  };