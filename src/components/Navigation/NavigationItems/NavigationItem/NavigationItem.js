/**
 * Created by peter on 2018/3/26.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>
                {props.children}
        </NavLink>
    </li>
);

export default navigationItem;