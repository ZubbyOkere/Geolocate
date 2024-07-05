"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const Map = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const navigate = () => {
    router.push("/app/form");
  };

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className="w-1/2" onClick={navigate}>
      <p>Latitude: {lat}</p>
      <p>Longititude: {lng}</p>
    </div>
  );
};

export default Map;
