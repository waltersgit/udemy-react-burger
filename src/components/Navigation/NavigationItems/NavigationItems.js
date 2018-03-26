import React from 'react';

import classes from './NavigationItems.css'
import NaviagtionItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NaviagtionItem link="/" active="true">Burger Builder</NaviagtionItem>
        <NaviagtionItem link="/">Checkout</NaviagtionItem>
    </ul>
);

export default navigationItems;
