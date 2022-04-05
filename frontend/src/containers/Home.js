import axios from "axios";
import React, { useEffect, useState } from "react";
import CovidSummary from "./CovidSummary";

export default function Home() {
  const [covidData, setcovidData] = useState({});
  const [totalConfirmed, settotalConfirmed] = useState(0);
  const [totalRecovered, settotalRecovered] = useState(0);
  const [totalDeath, settotalDeath] = useState(0);
  const [loading, setloading] = useState(false);
  const [days, setdays] = useState(7);
  const [country, setcountry] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("/api/data");
    setcovidData(data);
    settotalConfirmed(data.Global.TotalConfirmed);
    settotalRecovered(data.Global.NewRecovered);
    settotalDeath(data.Global.TotalDeaths);
  };
  // console.log(totalConfirmed)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeath={totalDeath}
        country={country}
      />
    </div>
  );
}
