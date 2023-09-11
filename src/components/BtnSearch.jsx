import Container from "@mui/material/Container";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function BtnSearch() {
  return (
    <Container className="mb-3 px-5">
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          variant="filled"
          size="small"
          placeholder="Exemple: Fleure, Voiture, Horizon, Ciel, ..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => {
                  console.log("OK ok");
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
    </Container>
  );
}

export default BtnSearch;
