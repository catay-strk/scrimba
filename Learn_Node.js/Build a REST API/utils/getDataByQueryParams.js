export const getDataByQueryParams = (data, searchParams) => {
    let filteredData = data

    for (let filter in searchParams) {
        if (filter.toLowerCase() === 'country' || 
            filter.toLowerCase() === 'continent' ) {
            
            filteredData = filteredData.filter((entry) => {
                return entry[filter].toLowerCase() === searchParams[filter].toLowerCase()
            })

        } else if (filter.toLowerCase() === 'is_open_to_public') {

            filteredData = filteredData.filter((entry) => {
                return entry[filter] === JSON.parse(searchParams[filter].toLowerCase()) 
            })
        }
        console.log(filteredData)
    }

    return filteredData
}

/* scrimba solution:
export const getDataByQueryParams = (data, queryObj) => {

  const { continent, country, is_open_to_public } = queryObj

  if (continent) {
    data = data.filter(destination =>
      destination.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (country) {
    data = data.filter(destination =>
      destination.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (is_open_to_public) {
    data = data.filter(destination =>
      destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
    )
  }

  return data
} 
  */