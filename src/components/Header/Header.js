import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../Header/Header';
import Container from '../Container/Container';
import Icon from '../Icon/Icon'
import { settings } from '../../data/dataStore';


class Header extends React.Component {


    render() {
        const { icon } = settings.header;
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to='/' className={StyleSheetList.logo}>
                            <Icon name={icon} />
                        </Link>
                        <nav>
                            <NavLink exact to='/'>Home</NavLink>
                            <NavLink exact to='/info'>Info</NavLink>
                            <NavLink exact to='/faq'>FAQ</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}
export default Header;