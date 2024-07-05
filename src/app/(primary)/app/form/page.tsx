"use client";

import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";

function Form() {
  const [cityName, setCityName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [notes, setNotes] = useState<string>("");

  const handleCityNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <form className=" p-6 mt-16 flex flex-col justify-center items-center mx-auto h-1/2 w-1/2">
      <div className="bg-slate-400 p-8">
        <div className="flex flex-col w-80 py-3 px-3">
          <label htmlFor="cityName">City name</label>
          <input
            id="cityName"
            onChange={handleCityNameChange}
            value={cityName}
            className="py-3"
          />
          {/* <span className={styles.flag}>{emoji}</span> */}
        </div>

        <div className="flex flex-col w-80 py-3 px-3">
          <label htmlFor="date">When did you go to {cityName}?</label>
          <input
            id="date"
            type="date"
            onChange={handleDateChange}
            value={date.toISOString().substring(0, 10)}
            className="py-3"
          />
        </div>

        <div className="flex flex-col w-80 py-3 px-3">
          <label htmlFor="notes">Notes about your trip to {cityName}</label>
          <textarea
            id="notes"
            onChange={handleNotesChange}
            value={notes}
            className="resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button type="button" className="w-80 py-3 px-3 bg-green-100">
            Add
          </button>
          <button
            type="button"
            className="w-80 py-3 px-3 bg-green-100"
            onClick={navigateBack}
          >
            &larr; Back
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
