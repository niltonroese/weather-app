import React from 'react'
import ProfilePic from '../Images/ProfilePic.png'

export default function Credits() {
    return (
        <div className="card text-white text-center border-0">
            <img src={ProfilePic} className="card-img opacity-100" alt="Author picture" height={681} width={523} />
            <div className="card-img-overlay">
                <div className="bg-dark bg-opacity-50 py-1">
                    <h1>Credits!
                        <hr />
                        <hr />
                    </h1>
                    <p>1. Myself...juggling fatherhood, work, friends, and getting stressed out as f#*!</p>
                    <hr />
                    <p>2. Google...</p>
                    <hr />
                    <p>3. YouTube...</p>
                    <hr />
                    <p>4. Stack Overflow...</p>
                    <hr />
                    <p>5. WDS...</p>
                    <hr />
                    <p>6. Software Engineer friends.</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}
