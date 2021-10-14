import axios from "axios";

export const ShazamApi = axios.create({
  baseURL:process.env.NEXT_PUBLIC_SHAZAM_URL
})
