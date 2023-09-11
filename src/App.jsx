import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Accueil from "./Pages/Accueil";


function App() {
  return (
    <>
      <NavBar />

      <Container className="mt-3 bg-light rounded pt-4 pb-2 px-4">
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
        </Routes>
      </Container>
      
    </>
  );
}

export default App;
