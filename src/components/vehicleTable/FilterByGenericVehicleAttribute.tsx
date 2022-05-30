import { useDispatch, useSelector } from "react-redux";
import {InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';


const FilterByGenetricVehicleAttribute =()=> {
    const dispatch = useDispatch();
    const {filterValueByVehicleAttribute } = bindActionCreators(actionCreators,dispatch);

    const tab = useSelector((state:any) => state.vehicles.data.items);

  return (
     tab? (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
         <InputLabel id="demo-simple-select-standard-label">Choose Generic Vehicle</InputLabel>
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="" 
          onChange={(e:any) => filterValueByVehicleAttribute(e.target.value)}
        >
          <MenuItem key="" 
            value="">
              <br></br>
          </MenuItem>     
            {tab.map((filter:any)=>(
            filter.specificAttributeConfigurations.map((filter:any)=> (
            <MenuItem 
                  key={filter.id} 
                  value={filter.specificAirPlaneAttribute}>
                    {filter.specificAirPlaneAttribute}
            </MenuItem>      
            ))
        ))}
        </Select>
        </FormControl>
         ):(
          ""
         )
  )
}
export default FilterByGenetricVehicleAttribute;




