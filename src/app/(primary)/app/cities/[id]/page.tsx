"use client";

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
      <span>
        {emoji} welcome to {cityName}
      </span>
      <p>{params.id}</p>
      <span>
        {lat}, {lng}
      </span>
    </div>
  );
}
