import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Project.css'
import { UseColorContext } from '../../Context/Context';


// box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 12px
export default function MediaCard(props) {
  let {handleColor}=UseColorContext();
  return (
    <div className='box8' style={{ boxShadow: `${handleColor === 'black' ? 'gray' : '#551a8b'} 0px 0px 10px`,width:'25%',borderRadius:'4px' ,height:"40vh"}}>
    <Card  data-aos="zoom-out">
      <CardMedia
       
        image={props.img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a className='anchor3' target='_blank' href={props.code}>View Code</a></Button>
        <Button size="small"><a className='anchor3' target='_blank' href={props.livelink}>Go live</a></Button>
      </CardActions>
    </Card>
    </div>
  );
}