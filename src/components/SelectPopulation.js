
import { useContext } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import {CityPopulationPageContext} from '../context/CityPopulationPageContext';

const SelectPopulation = () => {
    const {handlePopulationFilterChange, populationFilter} = useContext(CityPopulationPageContext);
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel>Population Filter</InputLabel>
            <Select value={populationFilter} onChange={handlePopulationFilterChange}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1000}>1K+</MenuItem>
                <MenuItem value={10000}>10K+</MenuItem>
                <MenuItem value={100000}>100K+</MenuItem>
                <MenuItem value={500000}>500K+</MenuItem>
                <MenuItem value={1000000}>1M+</MenuItem>
            </Select>
        </FormControl>
    )
}
export default SelectPopulation;