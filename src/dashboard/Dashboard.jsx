  import { Grid } from "@mui/material";

import { OrdersOverview, TopCountriesSales, FinancialIInfo, VisitsOverview } from "../components/index";
import TopCountriesVisits from "./TopCountriesVisits";
import TopSellingg from "./topSelling/TopSellingg";
 
const Dashboard = () => (
  <Grid container spacing={10} columnSpacing={3}>
    {/* row 1 */}

    <FinancialIInfo />
    {/* row 2 */}

    <OrdersOverview />
    {/* row 3  */}

    <TopSellingg />

    {/* row 4  */}

    <VisitsOverview />
    {/* row 5  */}

    <Grid item xs={12} md={6}>
      <TopCountriesSales />
    </Grid>
    <Grid item xs={12} md={6}>
      <TopCountriesVisits />
    </Grid>
  </Grid>
);

export default Dashboard;



 
    
    