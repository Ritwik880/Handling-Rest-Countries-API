import React from 'react'
import '../App.css'

function Country({name,flag,population,region,capital,area}) {
    return (
        <div className='country'>
            <div className='image'>
                <img src={flag} alt="flage"/>
            </div>
            <div className='country-details'>
                <h2>{name}</h2>
                <p>Capital : {capital}</p>
                <p>Region : {region}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
            </div>
        </div>
    )
}

export default Country