

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


export default function ProductItem({id, image, name, price}) {
    const {currency}=useContext(ShopContext);
  return (
    <div>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ objectFit: "cover", height:300, width: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {currency}{price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
