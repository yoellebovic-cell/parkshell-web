import { useEffect, useState } from "react";
import * as Location from "expo-location";

export function useParking() {
  const [city, setCity] = useState("Detecting...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    detectCity();
  }, []);

  async function detectCity() {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setCity("Permission denied");
        setLoading(false);
        return;
      }

      const location =
        await Location.getCurrentPositionAsync({});

      const geocode =
        await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });

      if (geocode.length > 0) {
        setCity(geocode[0].city || "Unknown city");
      } else {
        setCity("Unknown city");
      }
    } catch (e) {
      setCity("Error detecting city");
    }

    setLoading(false);
  }

  return {
    city,
    loading
  };
}
