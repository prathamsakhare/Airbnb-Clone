import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import "./desrt.css";
import { Loader } from "./Loader";
export const Desrt2 = () => {
  const [endPoint, setEndPoint] = useState("");
  const [finalPoint, setfinalPoint] = useState("India");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const options = {
    method: "GET",
    url: "https://airbnb13.p.rapidapi.com/search-location",
    params: {
      location: `${finalPoint}`,
      checkin: "2023-09-16",
      checkout: "2023-09-17",
      adults: "1",
      children: "0",
      infants: "0",
      pets: "0",
      page: "1",
      currency: "USD",
    },
    headers: {
      "X-RapidAPI-Key": "9ec33527cbmshfaf2fd1d87d9a76p18f24ajsnb026150744ca",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.results)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [finalPoint]);
  const changeHandler = (e) => {
    setEndPoint(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault()
    setfinalPoint(endPoint);
    setLoading(true)
  };
  return (
    <div className="desrt">
      <form onSubmit={submitHandler} className="search">
        <input
          type="text"
          placeholder="Search Destinations"
          onChange={changeHandler}
          className="main-input "

        />
        <button type="submit" className="submit-button">Search</button>
      </form>
      <div className="card-section">
        {loading ? <Loader /> : (
            data?.map((room, key) => {
                return <Card type={room.type} name={room.name} city = {room.city} key={key} img={room.images[0]} rating = {room.rating} price={room.price.total} superHost = {room.isSuperhost} />;
              })
        )}
        {/* {
            data?.map((room, key) => {
                return <Card type={room.type} name={room.name} city = {room.city} key={key} img={room.images[0]} rating = {room.rating} price={room.price.total} superHost = {room.isSuperhost} />;
              })
        } */}
        
      </div>
    </div>
  );
};
