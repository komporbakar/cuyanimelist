

export const GetAnimeResponse = async (resource, query ) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async(resourse, objectProperty) => {
  const response = await GetAnimeResponse(resourse)
  return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length  - gap) +1)
  const last = first + gap
  return data = {
    data :  data.slice(first, last)
  }
}
