"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CitiesProviderProps = {
  children: ReactNode;
};

type Position = {
  lat: number;
  lng: number;
};

type CityProp = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: number;
};
type CitiesContextProps = {
  cities: CityProp[];
  currentCity: CityProp | null;
  isLoading: boolean;
  error: string | boolean;
  getCity: (id: number) => Promise<void>;
};

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext<CitiesContextProps | undefined>(undefined);

const CitiesProvider = ({ children }: CitiesProviderProps) => {
  const [cities, setCities] = useState<CityProp[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);
  const [currentCity, setCurrentCity] = useState<CityProp | null>(null);

  useEffect(() => {
    let isMounted = true;
    const cityData = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(`${BASE_URL}/cities`);
        if (!data.ok) {
          throw new Error("Oboy, this thing no go work like this o");
        }
        const res = await data.json();

        if (isMounted) {
          setCities(res);
          setIsLoading(false);
        }
      } catch (error: unknown) {
        if (isMounted) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("An unknown error occured");
          }
          setIsLoading(false);
        }
      }
    };
    cityData();
    return () => {
      isMounted = false;
    };
  }, []);

  const getCity = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const data = await fetch(`${BASE_URL}/cities/${id}`);
      if (!data.ok) {
        throw new Error("Oboy, this thing no go work like this o");
      }
      const res = await data.json();

      setCurrentCity(res);
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occured");
      }
      setIsLoading(false);
    }
  }, []);

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, error, currentCity, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

function useCitiesHook(): CitiesContextProps {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCitiesHook must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCitiesHook };
