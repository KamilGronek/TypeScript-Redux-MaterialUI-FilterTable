import React,{useState} from 'react';
import { useSelector } from "react-redux";
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import {Box,Table,TableBody,TableCell,TableHead,TableRow,TablePagination} from '@mui/material';
import {useDispatch } from "react-redux";
import {setElementId } from '../../redux/action-creators';



const ResultsComponent=(props:any)=> {
  const obj = useSelector((state: any) => state.vehicles.data.items); 
  const valueForProvider = useSelector((state: any) => state.vehicles.valueForProvider); 
  const valueForVehicleAttribute = useSelector((state: any) => state.vehicles.valueForVehicleAttribute); 
  let pageSize = useSelector((state: any) => state.vehicles.pageSize); 
  const dispatch = useDispatch();


    const renderTable =() =>{
      return(
          <>
            {obj?(
                    obj
                      .filter((tab:any) => valueForProvider === "" ? true :valueForProvider === tab.provider)
                      .map((tab :any) => (
                          tab.specificAttributeConfigurations 
                          .filter((tab:any ) => valueForVehicleAttribute === "" ? true :valueForVehicleAttribute === tab.specificAirPlaneAttribute)
                          .map((item: any) => 
                                <>
                                <TableRow >
                                  <TableCell  key={item.id}> {item.specificAttributeName}</TableCell >
                                  <TableCell >{item.specificAirPlaneAttribute}</TableCell >
                                  <TableCell > {item.options.map((option:any) => (
                                      <div key={option}> 
                                        Name:{option.name}  Value:{option.value}
                                      </div>
                                    ))}
                                  </TableCell >
                                  <TableCell sx={{display: 'flex',  justifyContent: 'space-around'}}  >
                                      {item.priority}
                                    <Button  
                                      key={item.id}
                                      name="edit"
                                       onClick ={() => {
                                         dispatch(setElementId(item.id))}}
                                          variant="contained"
                                          color="primary"
                                          size="small"
                                      >
                                        EDIT
                                    </Button>    
                                  </TableCell >
                                </TableRow >
                                </>
                              )
                      ))
                  ):(
                    ""
                  )
            } 
          </>
      )
    } 
  return (
  <Table  aria-label="caption table">
    <TableHead>
      <TableRow>
        <TableCell><b>Provider Attribute Name</b></TableCell>
        <TableCell><b>Generic Vehicle Attribute</b></TableCell>
        <TableCell><b>Options</b></TableCell>
        <TableCell><b>Priority</b></TableCell>
      </TableRow>
    </TableHead>
      <TableBody>
          {renderTable()}
      </TableBody>
    </Table>
  )
}

export default ResultsComponent;



