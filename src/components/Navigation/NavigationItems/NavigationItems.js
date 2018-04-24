import React from 'react';

import classes from './NavigationItems.css'
import NaviagtionItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NaviagtionItem link="/" exact>Burger Builder</NaviagtionItem>
        {props.isAuthenticated ? <NaviagtionItem link="/orders">orders</NaviagtionItem> : null}
        { !props.isAuthenticated 
            ? <NaviagtionItem link="/auth">Authenticate</NaviagtionItem>
            : <NaviagtionItem link="/logout">Logout</NaviagtionItem> }
    </ul>
);

export default navigationItems;
