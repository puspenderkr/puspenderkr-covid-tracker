import React from 'react'
import Cards from './Cards/Cards'
import NumberFormat from 'react-number-format'

export default function CovidSummary(props) {

    const {
      totalConfirmed,
      totalRecovered,
      totalDeath,
      country
    } = props

  return (
    <div>
        <div>
          <h1 style={{textAlign: 'center', textTransform: 'capitalize'}}>{country === '' ? 'World Wide Corona Report' : country}</h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px'
          }}>
          <Cards>
            <span>Total Confirmed Case</span><br/>
            <span>{<NumberFormat value={totalConfirmed} displayType={'text'} thousandSeparator={true} />}</span><br/>
            </Cards>
            <Cards>
            <span>Total Recovered </span><br/>
            <span>{<NumberFormat value={totalRecovered} displayType={'text'} thousandSeparator={true}/>}</span><br/>
            </Cards>
            <Cards>
            <span>Total Death </span><br/>
            <span>{<NumberFormat value={totalDeath} displayType={'text'} thousandSeparator={true}/>}</span><br/>
          </Cards>
          </div>
        </div>
      </div>
  )
}
