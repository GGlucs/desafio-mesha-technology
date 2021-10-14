import { WheaterApi } from "../../configs/wheaterApi";

export const GetWheatherByCityName = async (cityName) => {

  const params = new URLSearchParams()
  params.append('q',cityName)
  params.append('appid','76e3a35c0ffee959ffc0aec3ded914e2')
  const {data} = await WheaterApi.get(`?${params}`)

  return data
}
