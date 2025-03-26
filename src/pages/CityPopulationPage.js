import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchCities } from "../api/fetchCities";
import { CityPopulationPageContext } from '../context/CityPopulationPageContext'
import LeftPanel from "../containers/LeftPanel";
import RightPanel from "../containers/RightPanel";
import { getGroupedCitiesByCountry, getCountryList, getUpdatedSelectedCities } from '../utils/helper'

const CityPopulationPage = () => {

    const [cityData, setCityData] = useState({});
    const [countries, setCountries] = useState([]);
    const [selectedCities, setSelectedCities] = useState({});
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [populationFilter, setPopulationFilter] = useState(0);

    useEffect(() => {

        fetchCities().then((response) => {
            const groupedCitiesByCountry = getGroupedCitiesByCountry(response.data.data);
            setCityData(groupedCitiesByCountry);
            const countryList = getCountryList(groupedCitiesByCountry)
            setCountries(countryList)

        }).catch((error) => {
            console.error("Error fetching city data", error);
        });


    }, []);

    useEffect(() => {
        const updatedSelectedCities = getUpdatedSelectedCities(selectedCountries, selectedCities)
         setSelectedCities(updatedSelectedCities);
    }, [ selectedCountries]);
   

    const handleCountryChange = (event) => {
        const selected = event.target.value;
        setSelectedCountries(selected);
    };

    const handleCityChange = (country, cities) => {
        setSelectedCities((prev) => ({ ...prev, [country]: cities }));
    };

    const handlePopulationFilterChange = (event) => {
        setPopulationFilter(Number(event.target.value));
      };

    const contextValue = {
        selectedCountries,
        selectedCities,
        handleCountryChange,
        handleCityChange,
        countries,
        cityData,
        populationFilter,
        handlePopulationFilterChange
    }

    return (
        <CityPopulationPageContext.Provider value={contextValue}>
            <h1>City Population Chart</h1>
            <Box display="flex">
                <Box width="30%" padding={2}>
                    <LeftPanel />
                </Box>
                <Box width="70%">
                    <RightPanel />
                </Box>
            </Box>
        </CityPopulationPageContext.Provider>
    );
}

export default CityPopulationPage;

