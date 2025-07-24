import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>

                <div className="hero-btn">
                    <button className='shop-now'>Shop Now</button>
                    <button className='category'>Category</button>
                </div>
                <div className="links">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="hero-img" />
            </div>

        </main>
    )
}

export default Hero