import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function WeatherApp() {
    const [search, setSearch] = useState("Sunshine Coast");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    //fetch openweathermap
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2c57bd87fa770fda286cc102ebd1710`)
        .then(resp => resp.json())
        .then(json => setData(json))
        // console.log(data)
    },[search])

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }
    //Background Image/Icons
    let icon = null;
    if (typeof data.main != "undefined") {
        if (data.weather[0].main === "Clouds") {
            icon = "fa-cloud"
        } else if (data.weather[0].main === "Thunderstorm") {
            icon = "fa-bolt"
        } else if (data.weather[0].main === "Drizzle") {
            icon = "fa-cloud-rain"
        } else if (data.weather[0].main === "Rain") {
            icon = "fa-cloud-showers-heavy"
        } else if (data.weather[0].main === "Snow") {
            icon = "fa-snowflake"
        } else if (data.weather[0].main === "Clear") {
            icon = "fa-sun"
        } else {
            icon = "fa-smog"
        }
    } else {
        return (
            <div>Unknown city...please refresh browser!</div>
        )
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-heather text-white bg-dark text-center p-1">
                            <h1>Weather App</h1>
                        </div>
                        <div className="card text-white text-center border-0">
                            <img src={`https://source.unsplash.com/600x900/?${search}`} className="card-img" alt="City pics from search input" />
                            <div class="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"
                                            name="search"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            required />
                                        <button type="submit" className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 py-3">
                                    <h2 class="card-title">{data.name}</h2>
                                    <p class="card-text lead">{moment().format('LLLL')}
                                        <br />
                                    </p>
                                    <hr />
                                    <i className={`fas ${icon} mb-3 fa-4x`}></i>
                                    <h1 className="fw-bolder mb-3">{data.main.temp}&deg;C</h1>
                                    <p className="lead fw-bolder mb-1">{data.weather[0].main}</p>
                                    <p className="lead">L: {data.main.temp_min}&deg;C | H: {data.main.temp_max}&deg;C</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted bg-dark">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com/niltonroese"><i className="fab fa-github"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/niltonmarmittroese/"><i className="fab fa-linkedin"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://medium.com/@niltonroese"><i className="fab fa-medium"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:niltonroese@gmail.com"><i className="fas fa-mail-bulk"></i></a>
                                </li>
                            </ul>
                            <h6 className="small text-center">Copyright © 2022 Nilton Roese</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
