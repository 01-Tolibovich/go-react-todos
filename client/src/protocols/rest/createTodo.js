import { baseUrl } from "../config";

export const createTodo = async (newTodo) => {
  const response = await fetch(`${baseUrl}todos`, {
    method: "POST"
  })
}