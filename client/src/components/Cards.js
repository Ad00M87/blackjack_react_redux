import React from 'react';
import { Image } from 'semantic-ui-react';
import c0 from '../images/card.png'
import c1 from '../images/2_of_clubs.png'
import c2 from '../images/2_of_diamonds.png'
import c3 from '../images/2_of_hearts.png'
import c4 from '../images/2_of_spades.png'
import c5 from '../images/3_of_clubs.png'
import c6 from '../images/3_of_diamonds.png'
import c7 from '../images/3_of_hearts.png'
import c8 from '../images/3_of_spades.png'
import c9 from '../images/4_of_clubs.png'
import c10 from '../images/4_of_diamonds.png'
import c11 from '../images/4_of_hearts.png'
import c12 from '../images/4_of_spades.png'
import c13 from '../images/5_of_clubs.png'
import c14 from '../images/5_of_diamonds.png'
import c15 from '../images/5_of_hearts.png'
import c16 from '../images/5_of_spades.png'
import c17 from '../images/6_of_clubs.png'
import c18 from '../images/6_of_diamonds.png'
import c19 from '../images/6_of_hearts.png'
import c20 from '../images/6_of_spades.png'
import c21 from '../images/7_of_clubs.png'
import c22 from '../images/7_of_diamonds.png'
import c23 from '../images/7_of_hearts.png'
import c24 from '../images/7_of_spades.png'
import c25 from '../images/8_of_clubs.png'
import c26 from '../images/8_of_diamonds.png'
import c27 from '../images/8_of_hearts.png'
import c28 from '../images/8_of_spades.png'
import c29 from '../images/9_of_clubs.png'
import c30 from '../images/9_of_diamonds.png'
import c31 from '../images/9_of_hearts.png'
import c32 from '../images/9_of_spades.png'
import c33 from '../images/10_of_clubs.png'
import c34 from '../images/10_of_diamonds.png'
import c35 from '../images/10_of_hearts.png'
import c36 from '../images/10_of_spades.png'
import c37 from '../images/ace_of_clubs.png'
import c38 from '../images/ace_of_diamonds.png'
import c39 from '../images/ace_of_hearts.png'
import c40 from '../images/ace_of_spades.png'
import c41 from '../images/jack_of_clubs.png'
import c42 from '../images/jack_of_diamonds.png'
import c43 from '../images/jack_of_hearts.png'
import c44 from '../images/jack_of_spades.png'
import c45 from '../images/king_of_clubs.png'
import c46 from '../images/king_of_diamonds.png'
import c47 from '../images/king_of_hearts.png'
import c48 from '../images/king_of_spades.png'
import c49 from '../images/queen_of_clubs.png'
import c50 from '../images/queen_of_diamonds.png'
import c51 from '../images/queen_of_hearts.png'
import c52 from '../images/queen_of_spades.png'

const images = {
  c1, c2, c3, c4, c5, c6, c7, c8,
  c9, c10, c11, c12, c13, c14, c15, c16,
  c17, c18, c19, c20, c21, c22, c23, c24,
  c25, c26, c27, c28, c29, c30, c31, c32,
  c33, c34, c35, c36, c37, c38, c39, c40,
  c41, c42, c43, c44, c45, c46, c47, c48,
  c49, c50, c51, c52, c0
}

const styles = {
  card: { height: '300px', width: '200px', marginLeft: '20px'},
}

const Cards = ({ value }) => (
  <Image style={{...styles.card}} src={images[`c${value}`]} />
)

export default Cards;
