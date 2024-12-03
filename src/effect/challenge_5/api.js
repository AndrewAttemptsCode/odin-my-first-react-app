export async function fetchData(endpoint) {
  const data = {
    "/planets": [
      { id: "earth", name: "Earth" },
      { id: "mars", name: "Mars" },
      { id: "jupiter", name: "Jupiter" },
    ],
    "/planets/earth/places": [
      { id: "london", name: "London" },
      { id: "tokyo", name: "Tokyo" },
    ],
    "/planets/mars/places": [
      { id: "olympus", name: "Olympus Mons" },
      { id: "valles", name: "Valles Marineris" },
    ],
    "/planets/jupiter/places": [
      { id: "io", name: "Io" },
      { id: "europa", name: "Europa" },
    ],
  };

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return mock data based on the endpoint
  return data[endpoint] || [];
}
