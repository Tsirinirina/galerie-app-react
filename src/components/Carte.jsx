import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import { Download, ExpandMore } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
function Carte({ lien, titre, descri ,down}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = down;
    link.download = titre; // Vous pouvez utiliser le titre de l'image comme nom de fichier
    link.click();
  };
  return (
    <div>
      <Card
        sx={{
          pt: 0,
          pb: 0,
        }}
        variant="outlined"
      >
       
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={lien}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="Ajouter au favorite">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Publier">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Télécharger">
            <Download onClick={handleDownloadClick}/>
          </IconButton>
          
            <ExpandMore
              expand="true"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Voir plus"
            >
              <ExpandMoreIcon />
            </ExpandMore>
       
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Image:</Typography>
            <Typography paragraph>{titre}</Typography>
            <Typography paragraph>{descri}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Carte;
