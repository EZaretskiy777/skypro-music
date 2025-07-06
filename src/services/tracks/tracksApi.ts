import axios from "axios";
import { BASE_URL } from "../constants";
import { TrackType } from "@sharedTypes/types";

export const tracksApi = (): Promise<TrackType[]> => {
  return axios.get(`${BASE_URL}/catalog/track/all/`).then((response) => {
    return response.data.data;
  });
};
