import {DateTime} from "luxon"

export const getFormattedWeatherData = weatherData => {
  const formattedWeather = formatForecastWeather(weatherData)

  return formattedWeather
}

const formatForecastWeather = data => {
  const {
    location: {
      name: loc_name,
      country: loc_country,
      localtime_epoch: loc_epoch,
      tz_id: loc_tz,
    },
    forecast: {forecastday},
    current: {
      condition: {icon: condition_icon, text: condition_text},
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      wind_mph,
      is_day,
    },
  } = data

  const locDateTime = formatToLocalTime(loc_epoch, loc_tz)

  return {
    loc_name,
    loc_country,
    locDateTime,
    condition_text,
    condition_icon: formatIconUrl(condition_icon),
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    is_day,
    ...formatAstroData(forecastday),
    dailyForecast: formatDailyForecast(forecastday, loc_tz),
    hourlyForecast: formatHourlyForecast(forecastday, loc_epoch, loc_tz),
  }
}

const formatIconUrl = iconUrl => {
  return "https:" + iconUrl
}

const formatHourlyForecast = (forecast, loc_epoch, timezone) => {
  let hourlyForecast = forecast.slice(0, 2).map(({hour}) => hour)
  hourlyForecast = [...hourlyForecast[0], ...hourlyForecast[1]]
  hourlyForecast = hourlyForecast.filter(
    forecast => forecast.time_epoch > loc_epoch
  )
  hourlyForecast = hourlyForecast
    .slice(1, 6)
    .map(({temp_c, temp_f, time_epoch, condition: {icon}}) => {
      return {
        temp_c,
        temp_f,
        icon: formatIconUrl(icon),
        title: formatToLocalTime(time_epoch, timezone, "hh:mm a"),
      }
    })

  return hourlyForecast
}

const formatDailyForecast = (forecast, timezone) => {
  console.log(forecast, "forecast in format")
  const dailyForecast = forecast.map(({date_epoch, day}) => {
    return {
      title: formatToLocalTime(date_epoch, timezone, "ccc"),
      sub_title: formatToLocalTime(date_epoch, timezone, "dd/LLL"),
      temp_c: day.avgtemp_c,
      temp_f: day.avgtemp_f,
      low_temp_c: day.mintemp_c,
      low_temp_f: day.mintemp_f,
      high_temp_c: day.maxtemp_c,
      high_temp_f: day.maxtemp_f,
      wind_kph: day.maxwind_kph,
      wind_mph: day.maxwind_mph,
      humidity:day.avghumidity,
      icon: formatIconUrl(day.condition.icon),
    }
  })

  return dailyForecast
}

const formatAstroData = forecast => {
  const {
    astro: {sunrise, sunset, moonrise, moonset},
  } = forecast[0]

  return {sunrise, sunset, moonrise, moonset}
}

const formatToLocalTime = (
  epoch,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(epoch).setZone(timezone).toFormat(format)
}
