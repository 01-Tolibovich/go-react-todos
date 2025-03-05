import { baseUrl } from "../config";

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${baseUrl}todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
