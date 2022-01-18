import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';

function Footer() {
    return (
        <BottomNavigation showLabels sx={{p:"2px", mt:"20px"}}>
        <BottomNavigationAction
          label="What is Vigenere Cipher?"
        />
      </BottomNavigation>
    )
}

export default Footer
