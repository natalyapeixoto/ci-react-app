import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import rocket from './rocket.jpeg'


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
  buttons: {
    display: 'flex', 
    justifyContent: 'space-between',
  } 
})

const Product = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5">
          Nome do Produto 
        </Typography>
        <CardMedia
          component="g"
          className={classes.media}
          image={rocket}
          title="Contemplative Reptile"
        />
        <Typography variant="h4">
          9.99 R$
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button >Learn More</Button>
        <Button > Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  )
}

export default Product