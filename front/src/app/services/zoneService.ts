// src/app/services/zoneService.ts

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

export const sendZoneSelection = async (zone: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:8000/zone/select', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ zone }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error('Error sending selected zone:', error);
    throw error;
  }
};
