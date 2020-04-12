import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import translate from '../i18n/translate';
import { LOCALES } from './../i18n/locales';

class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>{translate("projectName")}</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Form>
                                <Form.Check
                                    custom
                                    type={'radio'}
                                    id={'check-turkish'}
                                    name={'check-language'}
                                    label={translate("turkish")}
                                    onChange={() => this.props.changeLanguage(LOCALES.TURKISH)}
                                />
                                <Form.Check
                                    custom
                                    type={'radio'}
                                    id={'check-english'}
                                    name={'check-language'}
                                    label={translate("english")}
                                    onChange={() => this.props.changeLanguage(LOCALES.ENGLISH)}
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;