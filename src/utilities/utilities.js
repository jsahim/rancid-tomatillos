const cleanMovieData = (movieObject) => {
  const movieKeys = Object.keys(movieObject)
  const cleanData = movieKeys.reduce((acc, key) => {
    if(movieObject[key]){
      acc[key] = movieObject[key]
    } else {
      acc[key] = "unavailable"
    }
    return acc
  }, {})
  cleanData.genres = cleanData.genres.join(", ")
  cleanData.release_date = cleanReleaseDate(cleanData.release_date)
  if (cleanData.budget !== "unavailable") {
    cleanData.budget = `$${cleanData.budget.toLocaleString("en-US")}`;
  }
  if (cleanData.revenue !== "unavailable") {
    cleanData.revenue = `$${cleanData.revenue.toLocaleString("en-US")}`;
  }
  return cleanData
}

const cleanReleaseDate = (date) => {
  let monthList = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  let day, month, year, initialDate, formattedDate
  initialDate = date.split("-")
  day = +(initialDate[2])
  month = monthList[(+(initialDate[1])-1)]
  year = initialDate[0]
  formattedDate = `${month} ${day}, ${year}`
  return formattedDate
}

export default cleanMovieData;