import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

function PageHeader() {
  return (
    <Box
    sx={{
      bgcolor: "background.dark",
      pt: 7,
      pb: 1,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Trouver des images
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Une site web pour trouver des images gratuits.
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      ></Stack>
    </Container>
  </Box>
  )
}

export default PageHeader


