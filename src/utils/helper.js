
const getAvaragePopulation = (populationCounts) => {
    return Math.floor(populationCounts.reduce((sum, li) => sum + Number(li.value), 0) / populationCounts.length);
}


export const getFilteredCities = (cities, cityData, populationFilter) => {

    return Object.entries(cities).flatMap(([country, cities]) =>
        cities.map((city) => {
            const cityInfo = cityData[country]?.find((c) => c.city === city);
            const population = getAvaragePopulation(cityInfo.populationCounts);
            return population && population >= populationFilter ? { ...cityInfo,population,  country } : null;
        }).filter(Boolean)
    );

}

export const getGroupedCitiesByCountry = (cities) => {
    return Object.groupBy(cities, ({ country }) => country);
}

export const getCountryList = (groupedCitiesByCountry) => {
    const keys = []
    for (const key in groupedCitiesByCountry) {
        key !== '13' && keys.push(key);
    }
    return keys;
}

export const getUpdatedSelectedCities = (countries, cities) => Object.fromEntries(
    Object.entries(cities).filter(([country]) => countries.includes(country))
)




