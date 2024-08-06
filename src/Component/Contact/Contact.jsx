import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ws0t3yc',
            'template_ax66ntb', // replace with your EmailJS template ID
            form.current,
            '6eLA_rGQxaza-XYfL' // replace with your EmailJS public key
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        companyName: '',
        phone: '',
        role: '',
        service: '',
        projectDescription: '',
        projectBudget: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    
    };

    return (
        <>
            <div className='p-5' style={{ backgroundColor: "#0A2540", backgroundSize: "cover", color: "white", backgroundImage: "url(./2.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="p-5 mt-5 justify-content-center text-center">
                                <h1>Contact</h1>
                                <h3>Home/Contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="container">
                    <h1><span className='text-primary'>01.</span> Tell us about yourself</h1>
                    <Container className="p-5">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formFname">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Your First Name"
                                            name="fname"
                                            value={formData.fname}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formLname">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Your Last Name"
                                            name="lname"
                                            value={formData.lname}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formCompanyName">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter company name"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formPhone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formRole">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="mb-3">
                                <h1><span className='text-primary'>02.</span> What can we help you with?</h1>

                                    <Form.Group controlId="formService">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select the Service</option>
                                            <option value="Service 1">Service 1</option>
                                            <option value="Service 2">Service 2</option>
                                            <option value="Service 3">Service 3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12} className="mb-3">
                                <h1><span className='text-primary'>03.</span> Tell us about your project</h1>

                                    <Form.Group controlId="formProjectDescription">
                                        <Form.Label>Project Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={12} className="mb-3">
                                    <Form.Group controlId="formProjectBudget">
                                        <Form.Label>Project Budget</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter project budget"
                                            name="projectBudget"
                                            value={formData.projectBudget}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit" onClick={() => console.log("ok")}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Contact;
