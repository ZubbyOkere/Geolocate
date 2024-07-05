import React from "react";

type Props = {};

const CountryList = ({ countryItem }: any) => {
  return (
    <div className="">
      <span>{countryItem.emoji}</span>
      <span>{countryItem.country}</span>
    </div>
  );
};

export default CountryList;
