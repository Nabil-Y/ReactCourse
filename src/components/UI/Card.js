import React from 'react';
import classes from './Card.module.css';

const Card = ({ children, className }) => {
  const styles = `${className} ${classes.card}`;
  return <div className={styles}>{children} </div>;
};

export default Card;
