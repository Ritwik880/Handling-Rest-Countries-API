import React, { useState, useEffect } from 'react'
import './App.css'
const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);


  // Handling with conditional statements
  const searchItems = (searchValue) => {
    setInput(searchValue)
    if (input !== '') {
      const filteredData = items.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(items)
    }
  }

  // getting the list of countries
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/region/asia/`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);



  return (
    <>
      <div className="container my-4">
        <h1 className='text-center'>Country list in Asia</h1>

        <div className="input">
          <input type="text" placeholder="Search.." onChange={(e) => searchItems(e.target.value)} />
        </div>
        <div className="row m-2">
          {input.length > 1 ? (
            filteredResults.map((item) => {
              // items.map((item) => {
              return (
                <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                  <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                    <div className="card-body">
                      <div className='image'>
                        <img src={item.flag} alt="flage" />
                      </div>
                      <br />
                      <h5 className="card-title text-center h2">Name :{item.name} </h5>

                      <br />
                      <h6 className="card-title text-left">Capital :{item.capital} </h6>
                      <br />
                      <h6 className="card-title text-left">Region:{item.region} </h6>
                      <br />
                      <h6 className="card-title text-left">SubRegion:{item.subregion} </h6>
                      <br />
                      <h6 className="card-title text-left">Population:{item.population} </h6>
                      <br />
                      <h6 className="card-title text-left">Language:{item.languages.map(language => language.name).join(', ')} </h6>
                      <br />
                      <h6 className="card-title text-left">Area:{item.area} </h6>
                      <br />
                      <h6 className="card-title text-left">Borders:{item.borders} </h6>



                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            items.map((item) => {
              return (
                <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                  <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                    <div className="card-body">
                      <div className='image'>
                        <img src={item.flag} alt="flage" />
                      </div>
                      <br />
                      <h5 className="card-title text-center h2">Name :{item.name} </h5>
                      <br />

                      <h6 className="card-title text-left">Capital :{item.capital} </h6>
                      <br />
                      <h6 className="card-title text-left">Region:{item.region} </h6>
                      <br />
                      <h6 className="card-title text-left">SubRegion:{item.subregion} </h6>
                      <br />
                      <h6 className="card-title text-left">Population:{item.population} </h6>
                      <br />
                      <h6 className="card-title text-left">Language:{item.languages.map(language => language.name).join(', ')} </h6>
                      <br />
                      <h6 className="card-title text-left">Area:{item.area} </h6>
                      <br />
                      <h6 className="card-title text-left">Borders:{item.borders} </h6>

                    </div>
                  </div>
                </div>
              );
            })

          )}
        </div>


      </div>


    </>
  )
}

export default App