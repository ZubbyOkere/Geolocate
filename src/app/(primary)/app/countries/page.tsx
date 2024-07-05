"use client";
import CitiesLoader from "@/components/CitiesLoader";
import CountryList from "@/components/CountryList";
import { useCitiesHook } from "@/contexts/CitiesContext";
import React from "react";

type City = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
};

type CountryItem = {
  country: string;
  emoji: string;
};

export default function Countries() {
  const { cities, isLoading } = useCitiesHook();

  const country = cities.reduce((arr: CountryItem[], city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, [] as CountryItem[]);
  if (isLoading) return <CitiesLoader />;

  return (
    <div className="flex justify-center items-center bg-slate-400 w-1/2 gap-4 py-6 px-2">
      {country.map((countryItem) => (
        <CountryList countryItem={countryItem} key={countryItem.country} />
      ))}
    </div>
  );
}
