import { useContext } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { CityPopulationPageContext } from '../context/CityPopulationPageContext';

const SelectCities = () => {
    const { selectedCountries, selectedCities, handleCityChange, cityData } = useContext(CityPopulationPageContext);
    return (selectedCountries.map((country) => (
        <FormControl fullWidth key={country} margin="normal">
            <InputLabel>{country} Cities</InputLabel>
            <Select multiple value={selectedCities[country] || []} onChange={(e) => handleCityChange(country, e.target.value)}>
                {(cityData && cityData[country] || []).map((el, index) => (
                    <MenuItem key={index} value={el.city}>{el.city}</MenuItem>
                ))}

            </Select>
        </FormControl>
    )))
}

export default SelectCities