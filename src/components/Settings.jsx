import React from 'react'
import SettingsPic from '../Images/SettingsPic.jpg'

export default function Settings() {
  return (
    <div className="card text-white text-center border-0">
    <img src={SettingsPic} className="card-img opacity-100" alt="Author picture" height={681} width={523} />
    <div className="card-img-overlay">
        <div className="bg-dark bg-opacity-75 py-3">
            <h1>Settings!
                <hr />
                <hr />
            </h1>
            <p>1. Designed as a mobile app, attempting to emulate iPhone Weather App</p>
            <hr />
            <p>2. Fetches data from Open Weather Map API.</p>
            <hr />
            <p>3. User inputs city name and submit via search button.</p>
            <hr />
            <p>4. Moment displays current date and time...</p>
            <hr />
            <p>5. App displays city inputted...</p>
            <hr />
            <p>6. Weather icon forecast...</p>
            <hr />
            <p>7. Current temperature...</p>
            <hr />
            <p>8. Lows and highs for current day...</p>
            <hr />
            <p>9. Footer provides links to connect with author...</p>
            <hr />
        </div>
    </div>
</div>
  )
}
