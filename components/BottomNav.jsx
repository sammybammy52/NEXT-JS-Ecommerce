import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';


const BottomNav = () => {
    const [value, setValue] = React.useState(0);

    const home = () => {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            }
            }
    }
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '60px', height: '70px' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ height: '70px' }}
      >

        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={home}/>
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}

export default BottomNav