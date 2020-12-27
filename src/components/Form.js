import React, { Component } from 'react';
import { TextField, Checked } from '../components/index';
import { Legend, Logo, Error, SelectStyled, CheckText } from '../styles/components'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../media/logo.svg';
import '../styles/App.css';

export default class App extends Component {
    state = {
        businessname: '',
        website: '',
        ticketType: '',
        options: [
            { value: 'Zendesk', label: 'Zendesk' },
            { value: 'Intercom', label: 'Intercom' },
            { value: 'Gorgias', label: 'Gorgias' },
        ],
        email: '',
        password: '',
        termsCheck: false,
        errors: {},
        done: false
    };

    // event handlers
    onChange = (e, field) => {
        e.preventDefault();
        this.setState({ [field]: e.target.value });
    };

    // checkbox
    setCheckBox = box => {
        if (this.state[box]) {
            this.setState({ [box]: false });
        } else {
            this.setState({ [box]: true });
        }
    };

    // select
    setTicketType = target => {
        if (target) {
            this.setState({ ticketType: target.value });
        } else {
            this.setState({ ticketType: '' });
        }
    };

    // field validation
    validate = (e) => {
        e.preventDefault()

        const errors = {};
        this.setState({ errors: {} });
        // business name
        if (this.state.businessname.length === 0) {
            errors.businessname = 'Business Name Required';
        }
        // website
        if (this.state.website.length === 0) {
            errors.website = 'Business Website Required'
        }
        // ticketing system
        if (this.state.ticketType.length === 0) {
            errors.ticketType = 'Ticketing System Required';
        }
        // email
        const reg = /\S+@\S+\.\S+/;
        if (!reg.test(this.state.email)) {
            errors.email = 'Email required';
        }
        // password
        if (this.state.password.length === 0) {
            errors.password = 'Password is required'
        }
        // checkbox
        if (!this.state.termsCheck) {
            errors.termsCheck = '*'; // outline red if error
        }

        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            this.setState({ done: true });
            // send to server
            console.log(this.state)
            //confirmation message
            alert('Thank you for registering! We will contact you soon!')
        }
    };

    render() {
        return (
            <Container>
                <form onSubmit={this.validate}>
                    <Row>
                        <Col xs={12} md={12}>
                            <Logo src={logo} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-4" xs={12} md={12}>
                            <Legend>Tell us about yourself</Legend>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="field" xs={12} md={8}>
                            <TextField
                                type="text"
                                field="businessname"
                                placeholder="What is the name of your business?"
                                onChange={this.onChange}
                                value={this.state.businessname}
                                error={this.state.errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="field" xs={12} md={8}>
                            <TextField
                                error={this.state.errors}
                                onChange={this.onChange}
                                field="website"
                                value={this.state.website}
                                placeholder="Business website"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="selectField" xs={12} md={8}>
                            <SelectStyled
                                field="ticketType"
                                placeholder="Select your ticketing system"
                                onChange={this.setTicketType}
                                value={this.state.value}
                                options={this.state.options}
                                error={this.state.errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="selectField" xs={12} md={8}>
                            <Error>
                                {this.state.errors.ticketType ? this.state.errors.ticketType : <div>&nbsp;</div>}
                            </Error>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="field" xs={12} md={8}>
                            <TextField
                                type="email"
                                field="email"
                                placeholder="Your email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={this.state.errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="field" xs={12} md={8}>
                            <TextField
                                type="password"
                                field="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={this.state.errors}
                            />
                        </Col>
                    </Row>
                    <Row className="check">
                        <Col className="pr-0" id="terms" xs={1} md={1}>
                            <Checked
                                checked={this.state.termsCheck}
                                setCheckBox={this.setCheckBox}
                                box="termsCheck"
                                error={this.state.errors}
                            />
                        </Col>
                        <Col className="p-0" xs={5} md={5}>
                            <CheckText>
                                <p>I accept to the <a href="https://www.simplr.ai/terms-of-service">Terms and Services</a></p>
                            </CheckText>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <button>Sign-up</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}