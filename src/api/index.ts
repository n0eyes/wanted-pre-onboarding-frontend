import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const PATH = {
  JOIN: "/auth/signup",
  LOGIN: "/auth/signin",
};
