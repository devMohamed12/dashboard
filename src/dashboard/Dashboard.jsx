  import { Grid } from "@mui/material";

import { OrdersOverview, TopCountriesSales, FinancialIInfo, TopSelling, VisitsOverview } from "../components/index";
import TopCountriesVisits from "./TopCountriesVisits";
 
const Dashboard = () => (
  <Grid container spacing={10} columnSpacing={3}>
    {/* row 1 */}

    <FinancialIInfo />
    {/* row 2 */}

    <OrdersOverview />
    {/* row 3  */}

    <TopSelling />

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



 
    
    