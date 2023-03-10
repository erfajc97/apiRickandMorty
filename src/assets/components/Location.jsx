import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import banner from "../img/1.png";
import imgRnM from "../img/Rick-and-Morty.png";
import Loading from "./Loading";
import Pagination from "./Pagination";

const Location = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(true);
  const [localsuggest, setLocalsuggest] = useState([]);
  const [backg, setBackg] = useState(true)

  const url = `https://rickandmortyapi.com/api/location/`;

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;

    const url = `https://rickandmortyapi.com/api/location/${randomId}/`;

    axios.get(url).then((res) => {
      setGeneralInfo(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  useEffect(() => {
    if (searchId) {
      axios
        .get(`https://rickandmortyapi.com/api/location?name=${searchId}`)
        .then((res) => setLocalsuggest(res.data.results));
    } else {
      setLocalsuggest([]);
      setBackg(true);
    }
  }, [searchId]);

  console.log(localsuggest);

  //   console.log(generalInfo);

  const searchType = () => {
    const url = `https://rickandmortyapi.com/api/location/${searchId}/`;

    axios.get(url).then((res) => setGeneralInfo(res.data));
  };

  const selectSuggest = (suggest) => {
    setGeneralInfo(suggest);
    setSearchId("");
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <img className="banner" src={banner} alt="" />
            <img className="imgrickb" src={imgRnM} alt="" />
            <div className="search">
              <input
                className="inputSearch"
                type="text"
                placeholder="Write a number ( 1 - 126 )"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />

              <button className="button__Search" onClick={searchType}>
                Search
              </button>
            </div>
            <div className="container_suggest">
              <ul
                style={{ display: backg? "block" :"none" }}
                className="container_suggestion_list">
                {localsuggest.map((suggest, index) => (
                  <li
                    className="suggestion_list"
                    key={index}
                    onClick={() => selectSuggest(suggest)}>
                    {suggest.name}
                  </li>
                ))}
              </ul>
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

            <Pagination residents={generalInfo.residents} />
          </main>
        </>
      )}
    </div>
  );
};

export default Location;
