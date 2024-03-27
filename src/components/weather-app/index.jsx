

const WatherApp = () => {
    return (
        <main className="home-container">
            <figure className="img-container">
                <img src="/assets/logo/logo-lg.png" alt="Weather Logo" className="logo"></img>
            </figure>
            <div className="content">
                <div className="text-bold text-lg text-gray-100 text-center-wrap">Welcome To <span className="text-blue-light">TypeWeather</span></div>
                <div className="text-gray-200 text-sm text-center-wrap">Choose a location to see the weather forecast</div>
                <div className="city-input background-gray-600">
                    <input type="text" className="text-md text-gray-400" id="city-input" placeholder='Search location' />
                    <label htmlFor="city-input" className="sr-only">City</label>
                </div>
            </div>
        </main>
    )
}
export default WatherApp