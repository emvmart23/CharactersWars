export async function fetchData<Response = any>(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const response = await fetch(`https://swapi.dev/api/${url}`, {
    ...(init ?? {}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}
