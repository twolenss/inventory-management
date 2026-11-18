const API_URL = "/api";

async function handleResponse(response) {

  if (response.status === 204) return null;

  const data = await response.json();   
  
  if (!response.ok) {
    throw new Error(data.message || "Request Failed");
  }
  return data;   
}


export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return handleResponse(response);
};