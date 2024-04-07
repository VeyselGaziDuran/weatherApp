export const weeklyData = data => {
  const dailyData = {}

  data.forEach(item => {
    const day = item.dt_txt.split(' ')[0]
    if (!dailyData[day]) {
      dailyData[day] = []
    }
    dailyData[day].push(item)
  })

  const result = []
  for (const day in dailyData) {
    const items = dailyData[day]
    const minTemp = Math.min(...items.map(item => item.main.temp_min))
    const maxTemp = Math.max(...items.map(item => item.main.temp_max))
    const icon = items[0].weather[0].icon

    result.push({
      date: day,
      icon: icon,
      min: minTemp.toFixed(0),
      max: maxTemp.toFixed(0),
    })
  }

  return result
}
