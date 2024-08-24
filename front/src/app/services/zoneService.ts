export const fetchZoneKeys = async (): Promise<string[]> => {
  try {
    const response = await fetch('http://localhost:8000/zone/keys');
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching zone keys:', error);
    throw error;
  }
};
