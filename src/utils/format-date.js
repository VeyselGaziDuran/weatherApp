const formatDate = dateString => {
  const date = new Date(dateString)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat('en-US', options)
  return formatter.format(date)
}

const removeTime = datetimeString => {
  const parts = datetimeString.split(' ')
  return parts[0]
}

const formatDateTime = datetimeString => {
  const formattedDate = formatDate(removeTime(datetimeString))
  return formattedDate
}

export const getDay = dateString => {
  const date = new Date(dateString);
  const options = {
    weekday: 'short'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}



export default formatDateTime
