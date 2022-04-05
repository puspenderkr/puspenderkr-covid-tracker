
import { useEffect, useState } from 'react';
import './App.css';
import axiosInstance from './containers/axios';
import Countries from './containers/Countries/Countries';
import CovidSummary from './containers/CovidSummary';
import LineGraph from './containers/LineGraph/LineGraph';

function App() {

  const [totalConfirmed, settotalConfirmed] = useState(0);
  const [totalRecovered, settotalRecovered] = useState(0);
  const [totalDeath, settotalDeath] = useState(0);
  const [loading, setloading] = useState(false);
  const [covidSummary, setcovidSummary] = useState({});
  const [days, setdays] = useState(7);
  const [country, setcountry] = useState('');
  const [coronaCountAr, setcoronaCountAr] = useState([]);
  const [label, setlabel] = useState([]);

  useEffect(() => {
    setloading(true);
      axiosInstance.get(`/summary`)
      .then(res => {
        setloading(false);

        if(res.status === 200){
          settotalConfirmed(res.data.Global.TotalConfirmed);
          settotalRecovered(res.data.Global.NewRecovered);
          settotalDeath(res.data.Global.TotalDeaths);
          setcovidSummary(res.data);
        }

        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const formatDate = (date) => {
    const d = new Date(date);
    const year =  d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  }

  const countryHandler = (e) => {
    setcountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - days));
    console.log(from , to);
    getCoronaReporByDateRange(e.target.value, from , to) 
    
  }

  const daysHandler = (e) => {
    setdays(e.target.value)
     const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - e.target.value));
    console.log(from , to);
    getCoronaReporByDateRange(country, from , to) 
  }

  const getCoronaReporByDateRange = (countrySlug, from, to) => {
    axiosInstance.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
    .then(res => {

      const yAxisCoronaCount = res.data.map(d => d.Cases);
      setcoronaCountAr(yAxisCoronaCount);

      const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);
      settotalConfirmed(covidDetails.TotalConfirmed);
      settotalRecovered(covidDetails.NewRecovered);
      settotalDeath(covidDetails.TotalDeaths);

      const xAxisLabel = res.data.map(d => d.Date);
      setlabel(xAxisLabel);

      console.log(res);    
    })
    .catch(error => {
      console.log(error);
    })
  }


  if(loading){
    return <p>Fetching Data from api</p>
  }
  

  return (
    <div className="App">
      <CovidSummary 
      totalConfirmed={totalConfirmed}
      totalRecovered={totalRecovered}
      totalDeath={totalDeath}
      country={country}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <select value={country} onChange={countryHandler}>
          <option value=''>Select Country</option>
          {
            covidSummary.Countries && covidSummary.Countries.map(country => 
              <option key={country.Slug} value={country.Slug} >{country.Country}</option>
              )
          }
        </select>
        <select value={days} onChange={daysHandler}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <LineGraph
      yAxis = {coronaCountAr}
      label = {label}
      />
      <Countries />
    </div>
  );
}

export default App;
