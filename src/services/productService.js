const BASE_URL = "http://localhost:5000/products";

async function handlResponse(response) {
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  if (response.status === 204) return null;

  return response.json();
}

export async function getProducts() {
  const response = await fetch(BASE_URL);
  return handlResponse(response);
}
export async function createProduct(product) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Contend-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return handlResponse(response);
}
export async function updateProduct(product, id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return handlResponse(response);
}

export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}
