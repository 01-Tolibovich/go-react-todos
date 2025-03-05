import { baseUrl } from "../config";

export const createTodo = async (newTodo) => {

  try {
    const response = await fetch(`${baseUrl}todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data
    
  } catch (error) {
    console.log(error);
    
  }

}