import React from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";
import { useState } from "react";

const Geo = () => {
    const [value, setvalue] = useState("")
  function onPlaceSelect(value) {
    console.log(value);
    console.log("Select Place")
  }

  function onSuggectionChange(value) {
    console.log(value);
    console.log("Suggestion")
  }
  return (
    <GeoapifyContext apiKey="97f987398f2749eaa962a9ef73dadacf">
      <GeoapifyGeocoderAutocomplete
        placeholder="Choose Specific"
        type={"locality"}
    
        
        
        value={value}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />
    </GeoapifyContext>
  );
};

export default Geo;
