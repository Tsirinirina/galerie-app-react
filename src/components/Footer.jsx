import { Box, Typography } from '@mui/material'
import Copyright from './Copyright'

function Footer() {
  return (
    <Box sx={{ backgroundColor: "primary.dark", p: 1 }} component="footer">
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Une site web pour trouver des images
    </Typography>
    <Copyright />
  </Box>
  )
}

export default Footer