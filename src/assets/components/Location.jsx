import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import banner from "../img/image 3.png";
import Loading from "./Loading";

const Location = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `https://rickandmortyapi.com/api/location/`;

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;

    const url = `https://rickandmortyapi.com/api/location/${randomId}/`;

    axios.get(url).then((res) => {

        setGeneralInfo(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    })
        
  }, []);

  //   console.log(generalInfo);

  const searchType = () => {
    const url = `https://rickandmortyapi.com/api/location/${searchId}/`;

    axios.get(url).then((res) => setGeneralInfo(res.data));

    return generalInfo.residents;
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <img className="banner" src={banner} alt="" />

            <div className="search">
              <input
                className="inputSearch"
                type="text"
                placeholder="Escriba el Id"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />

              <button className="button__Search" onClick={searchType}>
                Search
              </button>
            </div>
          </header>
          <main>
            <div className="container__dimensioninfo">
              <h3 className="general_info">
                
                <b>Name: </b> <span>{generalInfo.name} </span>
              </h3>
               <h3 className="general_info">
                <b> Planet:</b> <span>{generalInfo.type}</span>
              </h3>
              <h3 className="general_info">
                <b>Dimension:</b>
                <span>{generalInfo.dimension}</span>
              </h3>
              <h3 className="general_info">
                <b>Poblation:</b> <span>{generalInfo.residents?.length}</span>
              </h3>
            </div>
            <div className="container__characters">
              {generalInfo.residents?.map((resident) => (
                <ResidentInfo characterUrl={resident} key={resident} />
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Location;
