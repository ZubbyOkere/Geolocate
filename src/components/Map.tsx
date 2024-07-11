"use client";

import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {};

const Map = (props: Props) => {
  const [map, setMap] = useState<[number, number]>([40, 0]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const navigate = () => {
    router.push("/app/form");
  };

  useEffect(() => {
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    if (lat && lng) {
      setMap([parseFloat(lat), parseFloat(lng)]);
    }
  }, [searchParams]);
  const lat = searchParams.get("lat");
  return (
    <div className="w-1/3" onClick={navigate}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>
      <MapContainer
        center={map}
        zoom={13}
        scrollWheelZoom={false}
        className="w-scree h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={map}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
