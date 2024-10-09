    import React, { useState } from "react";
    import "./RegisterComponent.css";
    function RegisterComponent() {
        const [formData, setFormData] = useState({
            id:"",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            phoneNumber: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            // Check if passwords match
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const response = await fetch("http://localhost:8080/api/clients/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        password: formData.password,
                        address: formData.address,
                        id: formData.id,
                        phoneNumber: formData.phoneNumber,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Client created successfully", data);
                    // Handle success (redirect or show message)
                } else {
                    console.error("Error creating client");
                    // Handle error (show error message)
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        return (
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Registrate</p>
                <p className="message">Registrate en UniEventos para que puedas disfrutar de nuestros beneficios.</p>

                <label>
                    <input
                        required
                        placeholder=""
                        type="number"
                        className="input"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                    <span>Numero de documento</span>
                </label>


                <div className="flex">
                    <label>
                        <input
                            required
                            placeholder=""
                            type="text"
                            className="input"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input
                            required
                            placeholder=""
                            type="text"
                            className="input"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input
                        required
                        placeholder=""
                        type="email"
                        className="input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <span>Email Address</span>
                </label>

                <div className="flex">
                    <label>
                        <input
                            required
                            placeholder=""
                            type="password"
                            className="input"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span>Password</span>
                    </label>

                    <label>
                        <input
                            required
                            placeholder=""
                            type="password"
                            className="input"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <span>Confirm password</span>
                    </label>
                </div>


                <label>
                    <input
                        required
                        placeholder=""
                        type="number"
                        className="input"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <span>Phone Number</span>
                </label>

                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <span> Home Address</span>
                </label>

                <button className="submit">Submit</button>
                <p className="signin">
                    ? <a href="#">Signin</a>
                </p>
            </form>
        );
    };

    export {RegisterComponent};
