import axios from "axios";
import { BASE_URL } from "../constants";

export const urerSignIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axios.post(
    `${BASE_URL}/user/login/`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const userSignUp = ({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) => {
  return axios.post(
    `${BASE_URL}/user/signup/`,
    { email, password, username },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
