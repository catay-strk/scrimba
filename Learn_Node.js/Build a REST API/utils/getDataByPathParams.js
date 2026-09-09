export const filterData = (data, filterType, filterValue) => {
    return data.filter((entry) => {
        return entry[filterType].toLowerCase() === filterValue.toLowerCase()
    })
}