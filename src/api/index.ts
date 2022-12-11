import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("user")}`,
  },
});

export const PATH = {
  JOIN: "/auth/signup",
  LOGIN: "/auth/signin",
  GET_TODO: "/todos",
  CREATE_TODO: "/todos",
  UPDATE_TODO: "/todos",
  DELETE_TODO: "/todos",
};

export async function to<T>(
  promise: Promise<T>
): Promise<[null, T] | [unknown, null]> {
  try {
    return [null, await promise];
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.message);
    else throw error;

    return [error, null];
  }
}
