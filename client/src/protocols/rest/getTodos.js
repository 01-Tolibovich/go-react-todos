import { baseUrl } from "../config";

export const getTodos = async () => {
  try {
    const response = await fetch(`${baseUrl}todos`);

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data || [];
  } catch (error) {
    console.log(error);
  }
};
