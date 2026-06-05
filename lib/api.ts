const API = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchFromAPI(endpoint: string) {
  const response = await fetch(`${API}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}