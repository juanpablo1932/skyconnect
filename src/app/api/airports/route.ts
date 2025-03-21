export async function getAirports(offset: string) {
  const limit = "6";

  const response = await fetch(
    `${process.env.AVIATIONSTACK_URL}airports?limit=${limit}&offset=${offset}${process.env.AVIATIONSTACK_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch airports");
  }
  const { data, pagination } = await response.json();
  return { data, pagination };
}
