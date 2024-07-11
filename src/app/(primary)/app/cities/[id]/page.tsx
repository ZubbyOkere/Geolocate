"use client";

import BackButton from "@/components/BackButton";
import CitiesLoader from "@/components/CitiesLoader";
import { useCitiesHook } from "@/contexts/CitiesContext";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type ParamsProps = {
  id: string;
};

export default function CityId({ params }: { params: ParamsProps }) {
  const { id } = params;
  const searchParams = useSearchParams();
  const { currentCity, getCity } = useCitiesHook();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (id) {
      getCity(Number(id));
    }
  }, [id]);

  if (!currentCity) {
    return <CitiesLoader />;
  }

  const { emoji, cityName, country, notes } = currentCity;

  return (
    <div>
      <h1>
        {emoji} Welcome to {cityName}
      </h1>
      <p>Country: {country}</p>
      <p>Notes: {notes}</p>
      <p>City ID: {params.id}</p>
      <p>
        Latitude: {lat}, Longitude: {lng}
      </p>
      <button>
        <BackButton />
      </button>
    </div>
  );
}
