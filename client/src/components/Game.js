import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Table from './Table';
import ScoreCard from './ScoreCard';

const styles = {
  fullHeight: { height: '100vh' },
  board: { backgroundColor: '#15935e' },
  scores: { backgroundColor: '#490d0b'},
}

class Game extends Component {
  state = { deal: 0, cards: [...new Array(2)] };

  dealHand = () => {
    let cards = this.state.cards.map( (card, index) => {
      return Math.floor(Math.random() * 52) + 1
    });

    this.setState( state => {
      return { cards, deal: state.deal + 1 }
    })
  }

  render() {
    const { deal, cards } = this.state;
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={12} style={{ ...styles.fullHeight, ...styles.board }}>
            <Table deal={deal} cards={cards} dealHand={this.dealHand} />
          </Grid.Column>
          <Grid.Column width={4} style={{ ...styles.fullHeight, ...styles.scores }}>
            <ScoreCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Game;
