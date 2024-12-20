 
import { Box, Typography,   ListItem, ListItemText, ListItemIcon } from '@mui/material';
  import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
  import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Flag from 'react-world-flags';

const CountriesItem = ({ country }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Flag
          code={country.countryCode}
          style={{
            width: 30,
            height: 20,
            borderRadius: "50%",
            objectFit: "contain",
          }}
        />
      </ListItemIcon>
      <ListItemText primary={country.name} />
      <Box display="flex" alignItems="center">
        <Typography variant="body2" mr={1}>
          {country?.sales?.toLocaleString() ||
            country?.visits?.toLocaleString()}
        </Typography>
        {country.trend === "up" ? (
          <ArrowUpwardIcon fontSize="small" color="success" />
        ) : (
          <ArrowDownwardIcon fontSize="small" color="error" />
        )}
      </Box>
    </ListItem>
  );
}

export default CountriesItem