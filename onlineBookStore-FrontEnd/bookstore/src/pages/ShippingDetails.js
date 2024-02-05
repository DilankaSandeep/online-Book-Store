import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const usernameformstorage = localStorage.getItem('username');

const ShippingDetails = () => {
    const [username, setUsername] = useState(usernameformstorage);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const countries = ["Sri Lanka", "India", "Pakistan"]; 

    useEffect(() => {
        setUsername(usernameformstorage);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = "/";
        localStorage.removeItem('username');
    };

    return (
        <>
        <div className='mb-4'><h3>Enter Your Delivery Address</h3></div>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Customer Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Street Address"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Province</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select a country</option>
                    {countries.map((countryOption, index) => (
                        <option key={index} value={countryOption}>
                            {countryOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
};

export default ShippingDetails;
