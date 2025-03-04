import { baseUrl } from "../config";

export const completeTodo = async (todoId) => {
  try {
    const response = await fetch(`${baseUrl}todos/${todoId}`, {
      method: "PATCH",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
