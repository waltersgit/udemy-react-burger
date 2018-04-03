import React from 'react';

import classes from './NavigationItems.css'
import NaviagtionItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NaviagtionItem link="/" exact>Burger Builder</NaviagtionItem>
        <NaviagtionItem link="/orders">orders</NaviagtionItem>
    </ul>
);

export default navigationItems;
