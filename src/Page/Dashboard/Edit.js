import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.FirstName);
  const [lastName, setLastName] = useState(selectedEmployee.LastName);
  const [email, setEmail] = useState(selectedEmployee.Email);
  const [phoneNumber, setPhoneNumber] = useState(selectedEmployee.PhoneNumber);
  const [address, setAddress] = useState(selectedEmployee.Address);
  const [city, setCity] = useState(selectedEmployee.City);
  const [state, setState] = useState(selectedEmployee.State);
  const [country, setCountry] = useState(selectedEmployee.Country);
  const [postalCode, setPostalCode] = useState(selectedEmployee.PostalCode);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !city ||
      !state ||
      !country ||
      !postalCode
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
      postalCode,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1 style={{ textAlign: "center" }}>Edit List</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          type="text"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
