import React from 'react';
import Cards from './Cards';
import { Grid, Button, Divider } from 'semantic-ui-react';

const Table = ({ deal, cards, dealHand }) => {

  return(
    <Grid>
      <Grid.Row>
        <Button fluid onClick={dealHand} >Deal Hand</Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { deal > 0 && cards.map( (card, index) => <Cards key={index} value={card} /> )}
      </Grid.Row>
    </Grid>
  )
}

export default Table;
