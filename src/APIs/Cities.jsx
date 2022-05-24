import React from 'react'

export function getCityAPI() {
    return fetch(`https://localhost:3000/cities`)
        .then(resp => resp.json())
        .then(data => data);
}

export function addCityAPI(city) {
    return fetch(`https://localhost:3000/cities`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(city)
    })
        .then(resp => resp.json())
        .then(data => data);
}

export function updateCityAPI(city) {
    return fetch(`https://localhost:3000/${city.id}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(city)
    })
        .then(resp => resp.json())
        .then(data => data);
}

export function deleteCityAPI(id) {
    return fetch(`https://localhost:3000/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(resp => resp.json())
        .then(data => data);
}
