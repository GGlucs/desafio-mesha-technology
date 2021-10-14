import { ShazamApi } from "../../configs/shazamApi";

export const GetPlaylistsService = async (genre,limit) => {
  const config = {
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '4cf0212ed4msh81a761d6d333567p1fbed4jsn870bf006c80c'
    }
  }
  const params = new URLSearchParams()
  params.append('term',genre)
  params.append('limit',limit)

  const {data} = await ShazamApi.get(`?${params}`,config)

  return data
}
