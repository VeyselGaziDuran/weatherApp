import './WatherApp.css'

const WatherApp = () => {
    return (
        <div className='container'>
            <img src="/src/Assets/Logo/logo-lg.png" alt="Weather Logo" className="logo"></img>
            <div className="content">
                <div className="text1">Welcome To <span className='text1-2'>TypeWeather</span></div>
                <div className="text2">Choose a location to see the weather forecast</div>
                <input type="text" className='cityInput' placeholder='Search location' />
            </div>
        </div>
    )
}
export default WatherApp