

import React, {useEffect} from 'react';
import Head from 'next/head';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import  FilterByProvider  from '../components/vehicleTable/FilterByProvider';
import  FilterByGenericVehicleAttribute  from '../components/vehicleTable/FilterByGenericVehicleAttribute';
import  ResultsComponent  from '../components/vehicleTable/ResultsComponent';
import { DashboardLayout } from '../components/dashboard-layout';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import axios, {AxiosResponse} from 'axios';

const App = () => {

  const dispatch = useDispatch();
  const {setData } = bindActionCreators(actionCreators,dispatch);

    const fetchData = async () =>{
        const response  = await axios
        .get<string[]>("data/jsonTab.json")
        setData(response.data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);


return(
  <>
    <Head>
      <title>
        Vehicle Table | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    <Container maxWidth={false}>
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Vehicle Table
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Card>
          <CardContent sx={{display: 'flex',  justifyContent: 'space-around'}}>
              <FilterByProvider/>
              <FilterByGenericVehicleAttribute/>
            </CardContent>
          </Card>
        </Box>
         <ResultsComponent/> 
      </Container>
      </Box>
  </>
)
};

App.getLayout = (page:any) => (
      <DashboardLayout>
        {page}
      </DashboardLayout>
);

export default App;

