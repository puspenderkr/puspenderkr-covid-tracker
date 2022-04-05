import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import "../../App.css";

export default function Countries() {
  const [countryDetail, setcountryDetail] = useState({});
  const [searchedCountries, setsearchedCountries] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/summary`)
      .then((res) => {
        if (res.status === 200) {
          console.log("NEW DETALLLLLLL");
          setcountryDetail(res.data);
          // console.log(res.data.Countries)
          // console.log(typeof(res.data.Countries))
          // console.log(countryDetail)
        }

        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="serach"
          onChange={(event) => {
            setsearchedCountries(event.target.value);
          }}
        />
      </div>

      <table cellSpacing="10">
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
      </table>

      {countryDetail.Countries &&
        countryDetail.Countries.filter((val) => {
          if (searchedCountries === "") {
            return val;
          } else if (
            val.Country.toLowerCase().includes(searchedCountries.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <table>
                <tbody>
                  <tr>
                    <td>{val.Country}</td>
                    <td>{val.NewConfirmed}</td>
                    <td>{val.NewDeaths}</td>
                    <td>{val.NewRecovered}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}
