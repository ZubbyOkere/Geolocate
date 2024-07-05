"use client";
import CitiesLoader from "@/components/CitiesLoader";
import CityList from "@/components/CityList";
import { useCitiesHook } from "@/contexts/CitiesContext";

type Props = {};

export default function Cities({}: Props) {
  const { cities, isLoading, error } = useCitiesHook();
  console.log(cities);

  {
    isLoading && <CitiesLoader />;
  }
  if (!cities) return <p>Click the map to select city</p>;
  if (!cities.length) return <p>There was an error here...</p>;
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-4 w-1/2 p-8 bg-slate-400">
          {cities.map((city, index) => (
            <CityList id={city.id} key={city.id} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
