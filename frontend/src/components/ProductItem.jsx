

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


export default function ProductItem({id, image, name, price}) {
    const {currency}=useContext(ShopContext);
  return (
    <Link to={`/product/${id}`}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            className="hover:scale-110 transition ease-in-out"
            component="img"
            image={image[0]}
            alt={name}
            sx={{ objectFit: "cover", height: 300, width: "100%", }}
            loading= "lazy"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {currency}
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

// export default function ProductItem({ id, image, name, price }) {
//   const { currency } = useContext(ShopContext);
//   return (
//     <Link to={`/product/${id}`} className="cursor-pointer">
//       <div>
//         <img
//           className="overflow-hidden hover:scale-110 transition ease-in-out"
//           src={image[0]}
//           alt={name}
//         />
//         <p className="pt-3 pb-1 text-sm">{name}</p>
//         <p className='text-sm font-medium'>
//           {currency}
//           {price}
//         </p>
//       </div>
//     </Link>
//   );
// }
