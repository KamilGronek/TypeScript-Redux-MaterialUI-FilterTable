import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';


const FilterByProvider =()=> {
    const dispatch = useDispatch();
    const {filterValueByProvider} = bindActionCreators(actionCreators,dispatch);

    const obj = useSelector((state:any) => state.vehicles.data.items);
    console.log(obj)


  return (
       obj? (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
           <InputLabel id="demo-simple-select-standard-label">Choose by provider</InputLabel>
          <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name=""
             onChange={(e:any) => filterValueByProvider(e.target.value)}>
     
             <MenuItem key="" 
              value="">
               <br></br>
             </MenuItem>    
              {obj.map((provider:any)=>(
                <MenuItem 
                 key={provider} 
                 value={provider.provider}>
                    {provider.provider}
                </MenuItem>
              ))}
          </Select>
          </FormControl>
       ):(
         ""
       )
    
  )
}

export default FilterByProvider;





  