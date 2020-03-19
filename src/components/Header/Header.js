import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../Header/Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon'
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Search from '../Search/Search';



class Header extends React.Component {

    static defaultProps ={
        logoIcon: settings.navMenu.logoIcon,
        homeHeader: settings.navMenu.homeHeader,
        infoHeader: settings.navMenu.infoHeader,
        FAQHeader: settings.navMenu.FAQHeader,
    }

    render() {
        const {logoIcon, homeHeader, infoHeader, FAQHeader} = this.props;
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to='/' className={styles.logo}>
                            <Icon name={logoIcon} />                         
                        </Link>
                        <Search />
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>{ReactHtmlParser(homeHeader)}</NavLink>
                            <NavLink exact to='/info' activeClassName='active'>{ReactHtmlParser(infoHeader)}</NavLink>
                            <NavLink exact to='/faq' activeClassName='active'>{ReactHtmlParser(FAQHeader)}</NavLink>
                        </nav>

                    </div>
                </Container>
            </header>
        );
    }
}
export default Header;