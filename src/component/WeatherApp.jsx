import React, { useEffect, useState } from 'react'

export default function WeatherApp() {
    const [search, setSearch] = useState("Sunshine Coast");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentDidMount = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2c57bd87fa770fda286cc102ebd1710`)
            if (componentDidMount) {
                setData(await response.json())
                console.log(data)
            }
            return () => {
                componentDidMount= false;
            }
        }
        fetchWeather();
    }, [search]);

    //Background Image/Icons
    let icon = null;
    if (typeof data.main != "undefined") {
        if (data.weather[0].main === "Clouds") {
            icon = "fa-cloud"
        } else if (data.weather[0].main === "Thunderstorm") {
            icon = "fa-bolt"
        } else if (data.weather[0].main === "Drizzle") {
            icon = "fa-rain"
        } else if (data.weather[0].main === "Rain") {
            icon = "fa-cloud-shower-heavy"
        } else if (data.weather[0].main === "Snow") {
            icon = "fa-snow-flake"
        } else if (data.weather[0].main === "Clear") {
            icon = "fa-sun"
        } else {
            icon = "fa-smog"
        }
    } else {
        return (
            <div>...Loading</div>
        )
    }

    //Current Date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", { month: 'long' });
    let day = d.toLocaleString("default", { weekday: 'long' });

    //Current Time
    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 class="card text-white bg-dark mb-2 text-center">Weather App</h1>
                        <div class="card text-white text-center border-0">
                            <img src={`https://source.unsplash.com/500x900/?${search}`} class="card-img" alt="random pics" />
                            <div class="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div class="input-group mb-4 w-75 mx-auto">
                                        <input type="search" class="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"
                                            name="search"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            required />
                                        <button type="submit" class="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 py-3">
                                    <h2 class="card-title">{data.name}</h2>
                                    <p class="card-text lead">{day}, {month} {date}, {year}
                                        <br />
                                        {time}
                                    </p>
                                    <hr />
                                    <i className={`fas ${icon} fa-4x`}></i>
                                    <h1 className="fw-bolder mb-5">{data.main.temp}&deg;C</h1>
                                    <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                                    <p className="lead">L:{data.main.temp_min}&deg;C | H:{data.main.temp_max}&deg;C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};