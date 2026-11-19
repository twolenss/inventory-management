const BASE_URL = "/api/products";
function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
async function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  if (response.status === 204) return null;

  return response.json();
}

export async function getProducts() {
  const response = await fetch(BASE_URL, {
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
}

export async function getSingleProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
}
export async function createProduct(product) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(product),
  });
  return handleResponse(response);
}
export async function updateProduct(product, id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(product),
  });
  return handleResponse(response);
}

export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
}
