import React, { useEffect, useContext } from "react";
import { getFilteredCities } from "../utils/helper";
import { renderChart } from "../utils/chart";
import { CityPopulationPageContext } from '../context/CityPopulationPageContext';
const PopulationChart = () => {
    const { selectedCities, cityData, populationFilter } =useContext(CityPopulationPageContext);
     
     useEffect(() => {
        const filteredCities = getFilteredCities(selectedCities, cityData, populationFilter);
        console.log('filteredCities', filteredCities)
        renderChart(filteredCities);
     
    }, [selectedCities, cityData, populationFilter]);

    return (
        <div id="chart"></div>
    )
}

export default React.memo(PopulationChart); 