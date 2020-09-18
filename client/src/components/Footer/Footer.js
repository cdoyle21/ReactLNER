import React from 'react';
import './Footer.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <hr />
                <p>Footer</p>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Footer;