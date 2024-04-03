import './css/App.css'
import WeatherApp from './components/weather-app'
import WeatherInfo from './components/weather-info'

function App() {
  return (
    <section className="app">
      <div id="title">
        <WeatherApp />
        <WeatherInfo />
      </div>
    </section>
  )
}

export default App
