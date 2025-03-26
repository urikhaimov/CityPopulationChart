import { useContext } from "react";
import { MenuItem, Select, FormControl, InputLabel, Chip, Box } from "@mui/material";
import {CityPopulationPageContext} from '../context/CityPopulationPageContext';

const SelectCountries = () => { 
   const {selectedCountries, handleCountryChange, countries} = useContext(CityPopulationPageContext);
   return ( <FormControl fullWidth>
        <InputLabel>Countries</InputLabel>
        <Select multiple value={selectedCountries} onChange={handleCountryChange} renderValue={(selected) => (
            <Box>{selected && selected.length && selected.map((value) => (<Chip key={value} label={value} />))}</Box>
        )}>
            {

                countries && countries.length && countries.map((country, index) => (
                    <MenuItem key={index} value={country}>{country}</MenuItem>
                ))
            }
        </Select>
    </FormControl>)
}

export default SelectCountries