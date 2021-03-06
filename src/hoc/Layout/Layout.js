import React, {Component} from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    drawerToggleHandler = () => {
        // 不直接改變狀態 !this.state.showSideDrawer，避免產生不可預期的錯誤
        // this.setState({showSideDrawer: !this.state.showSideDrawer});

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.drawerToggleHandler}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);