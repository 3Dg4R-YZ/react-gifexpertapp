export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VD7v9V9naSuFFB3oGtnANr1pRD8AXaiU&limit=10&q=${encodeURI(category)}`;
  const { data } = await (await fetch(url)).json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
}