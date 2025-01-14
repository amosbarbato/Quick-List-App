const API_URL = import.meta.env.VITE_API_URL

export const getItems = async () => {
  const response = await fetch(API_URL)
  return response.json()
}

export const addItem = async (item: { title: string }) => {
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  // return await response.json()

  // Verifica se há corpo de resposta
  if (response.ok) {
    try {
      return await response.json(); // Tenta converter a resposta para JSON
    } catch {
      return null; // Retorna null caso o JSON seja inválido ou ausente
    }
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

export const deleteItem = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
  return response.ok
}