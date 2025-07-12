import axios from "axios";
import { BASE_URL } from "../constants";
import { TrackType } from "@sharedTypes/types";
import { userGetToken } from "../auth/authApi";

export const tracksGetAll = (): Promise<TrackType[]> => {
  return axios.get(`${BASE_URL}/catalog/track/all/`).then((response) => {
    return response.data.data;
  });
};

export const tracksGetSelection = ({
  id,
}: {
  id: number;
}): Promise<TrackType[]> => {
  return axios
    .get(`${BASE_URL}/catalog/track/selection/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userGetToken({
          email: localStorage.getItem("email") || "",
          password: localStorage.getItem("password") || "",
        })}`,
      },
    })
    .then((response) => {
      return response.data.data;
    });
};
