import { useCitiesHook } from "@/contexts/CitiesContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CityList = ({ id }: { id: number }) => {
  const { cities } = useCitiesHook();
  const searchParams = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  //   date formatter
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const city = cities.find((c) => c.id === id);

  if (!city) return null;

  return (
    <>
      <div key={city.id} className=" bg-slate-300">
        <Link
          href={`/app/cities/${id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        >
          <p>{city.emoji}</p>
          {city.cityName}
          <p>{formatDate(city.date)}</p>
        </Link>
      </div>
    </>
  );
};

export default CityList;
