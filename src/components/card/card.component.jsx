import React from 'react';

import './card.styles.scss';

import CardItem from '../card-item/card-item.component';
import CustomButton from '../custom-button/custom-buttom.component';

const Card = () => {
  return (
    <main>
      <CardItem />
      <section id="primary">
        <h1>Your Personal Assistant</h1>
        <p>Get help with your daily life stuff.</p>
        <CustomButton />
      </section>
    </main>
  );
};

export default Card;
