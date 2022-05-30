import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function MainTheme({ children }) {
    return (
        <div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
