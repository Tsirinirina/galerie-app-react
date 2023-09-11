import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Carte from "../components/Carte";
// import img from "../assets/img.jpg";

import BtnSearch from "../components/BtnSearch";
import { useEffect, useState } from "react";
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
      transparent: "#634e4e42",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function Album() {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchClick = () => {
  //   // Vous pouvez effectuer une action de recherche ici avec la valeur de searchQuery
  //   console.log(`Recherche : ${searchQuery}`);
  // };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const API_KEY = "EDV0hhBE5jAQIU3IKHeJ_jGvd1U0z8WjD3Z8YcEOLDA";
    try {
      axios
        .get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setCards(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavBar />
      <main>
        <PageHeader />
        <Container className="mb-3 px-5">
          <BtnSearch />
        </Container>

        <Container sx={{ py: 1 }}>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Carte
                  lien={card.urls.regular}
                  titre={card.alt_description}
                  descri={card.description}
                  down={card.links.self}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
