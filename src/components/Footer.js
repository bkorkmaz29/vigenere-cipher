import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom'
function Footer() {
    return (
      <BottomNavigation showLabels sx={{ p: "2px", mt: "20px"}}>
        <BottomNavigationAction
          component={Link}
          to="/About"
          label="What is Vigenere Cipher?"
          sx={{fontSize: "30px"}}
        />
      </BottomNavigation>
    );
}

export default Footer
