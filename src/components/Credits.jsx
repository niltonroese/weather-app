import React from 'react'
import ProfilePic from '../Images/ProfilePic.png'

export default function Credits() {
    return (
        <div className="card text-white text-center border-0">
            <img src={ProfilePic} className="card-img opacity-75" alt="Author picture" height={681} width={523} />
            <div className="card-img-overlay">
                <div className="bg-dark bg-opacity-75 py-3">
                    <h1>Credits!
                        <hr />
                        <hr />
                    </h1>
                    <p>1. Myself...juggling fatherhood, work, friends, and getting stressed out as f#*!</p>
                    <hr />
                    <p>2. Google, YouTube, Stack Overflow...</p>
                    <hr />
                    <p>3. Software Engineer friends.</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}
