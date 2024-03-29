/* eslint-disable no-unused-vars */
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Kashmir',
    // price: '0',
    description: [
     'In Srinagar, Kashmir, Dal Lake is dotted with colorful shikaras, which are traditional wooden boats often converted into floating accommodations'
    ],
    buttonText: 'Book Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'Kerala Backwaters',
    subheader: 'Most popular',
    // price: '15',
    description: [
     'Kerala is famous for its picturesque backwaters, particularly in places like Alleppey (Alappuzha) and Kumarakom.'
    ],
    buttonText: 'Book Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'Goa',
    // price: '30',
    description: [
      'In Goa, you can find houseboats and boathouses offering a relaxing way to explore the scenic beauty of the state.'
    ],
    buttonText: 'Book Now',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'PACKAGES',
    description: ['Rental Packages', 'Family Packages', 'Couple Packages', 'Activity Packages'],
  },
  {
    title: 'FACILITIES',
    description: [
      'Pick Up & Drop',
      'Parking Space',
      'Speed Launch ',
      'Shikara Cruise',
    ],
  },
  {
    title: 'LIVING SPACE',
    description: ['Bedrooms', 'Living Area', 'Bathrooms', 'Kitchen'],
  },
  {
    title: 'RESERVATIONS',
    description: ['+91 90807 90807', 'aquavoyagebookings@gmail.com'],
  },
];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Pricing() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//       <CssBaseline />
      
        
//       {/* Hero unit */}
//       <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
//         <Typography
//           component="h1"
//           variant="h2"
//           align="center"
//           color="text.primary"
//           gutterBottom
//         >
//           Aqua Voyage
//         </Typography>
//         <Typography variant="h5" align="center" color="text.secondary" component="p">
//           Experience The Safe and Serene Boat Houses <br></br>
//           Book Your House Boat Vacation Today!
//         </Typography>
//       </Container>
//       {/* End hero unit */}
//       <Container maxWidth="md" component="main">
//         <Grid container spacing={5} alignItems="flex-end">
//           {tiers.map((tier) => (
//             // Enterprise card is full width at sm breakpoint
//             <Grid
//               item
//               key={tier.title}
//               xs={12}
//               sm={tier.title === 'Enterprise' ? 12 : 6}
//               md={4}
//             >
//               <Card>
//                 <CardHeader
//                   title={tier.title}
//                   subheader={tier.subheader}
//                   titleTypographyProps={{ align: 'center' }}
//                   action={tier.title === 'Pro' ? <StarIcon /> : null}
//                   subheaderTypographyProps={{
//                     align: 'center',
//                   }}
//                   sx={{
//                     backgroundColor: (theme) =>
//                       theme.palette.mode === 'light'
//                         ? theme.palette.grey[200]
//                         : theme.palette.grey[700],
//                   }}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'baseline',
//                       mb: 2,
//                     }}
//                   >
//                     <Typography component="h2" variant="h3" color="text.primary">
//                       {/* ${tier.price} */}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       {/* /mo */}
//                     </Typography>
//                   </Box>
//                   <ul>
//                     {tier.description.map((line) => (
//                       <Typography
//                         component="li"
//                         variant="subtitle1"
//                         align="center"
//                         key={line}
//                       >
//                         {line}
//                       </Typography>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <CardActions>
//                   <Button fullWidth variant={tier.buttonVariant}>
//                     {tier.buttonText}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
      
    