import SelectCountries from "../components/SelectCountries";
import SelectCities from "../components/SelectCities";
import SelectPopulation from "../components/SelectPopulation";

const LeftPanel = () => {
    return (
        <>
         <SelectPopulation />
         <SelectCities />
         <div><br/></div>
         <SelectCountries />
        </>
 
    )
}
export default LeftPanel;