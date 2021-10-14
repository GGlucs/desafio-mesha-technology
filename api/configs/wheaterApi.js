import axios from "axios";

export const WheaterApi = axios.create({
  baseURL:process.env.NEXT_PUBLIC_WHEATER_URL
})
