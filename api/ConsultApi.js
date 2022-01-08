export default async function getConsultApi() {

    const axios = require('axios');

    const Location = await axios.get('https://geolocation-db.com/json/')

    let date = new Date()
    const Hours = date.getHours() + ':' + date.getMinutes()

    var result = []

    const latitude = await Location.data.latitude
    const longitude = await Location.data.longitude

    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=94feab36963245679cb201951220801&q=${latitude},${longitude}&days=1&api=yes`)
        .then(async (res) => {
            const data = await res.data
            const ConditionCode = data.current.condition.icon

            let manha = (data.forecast.forecastday[0].hour[6].temp_c
                + data.forecast.forecastday[0].hour[7].temp_c
                + data.forecast.forecastday[0].hour[8].temp_c
                + data.forecast.forecastday[0].hour[9].temp_c
                + data.forecast.forecastday[0].hour[10].temp_c
                + data.forecast.forecastday[0].hour[11].temp_c
                + data.forecast.forecastday[0].hour[12].temp_c)
                / 7

            let tarde = await (data.forecast.forecastday[0].hour[12].temp_c
                + data.forecast.forecastday[0].hour[13].temp_c
                + data.forecast.forecastday[0].hour[14].temp_c
                + data.forecast.forecastday[0].hour[15].temp_c
                + data.forecast.forecastday[0].hour[16].temp_c
                + data.forecast.forecastday[0].hour[17].temp_c
                + data.forecast.forecastday[0].hour[18].temp_c)
                / 7

            let noite = (data.forecast.forecastday[0].hour[19].temp_c
                + data.forecast.forecastday[0].hour[19].temp_c
                + data.forecast.forecastday[0].hour[20].temp_c
                + data.forecast.forecastday[0].hour[21].temp_c
                + data.forecast.forecastday[0].hour[22].temp_c
                + data.forecast.forecastday[0].hour[23].temp_c
                + data.forecast.forecastday[0].hour[0].temp_c)
                / 7;

            const City = Location.data.city
            const Country = Location.data.country_code
            const Temperature = res.data.current.temp_c
            const TemperatureMorning = Math.floor(manha)
            const TemperatureEvening = Math.floor(tarde)
            const TemperatureNight = Math.floor(noite)
            const TemperatureMin = data.forecast.forecastday[0].day.mintemp_c
            const TemperatureMax = data.forecast.forecastday[0].day.maxtemp_c
            const Rain = data.forecast.forecastday[0].day.daily_chance_of_rain
            const Humidity = data.current.humidity
            const WeatherIcon = ConditionCode

            // Country, City, Hours, Temperature, TemperatureMin, TemperatureMax, TemperatureMorning, TemperatureEvening, TemperatureNight, Rain, Wind
            result = [Country, City, Hours, Temperature, TemperatureMin, TemperatureMax, TemperatureMorning, TemperatureEvening, TemperatureNight, Rain, Humidity, WeatherIcon]
        })

    return result
}
