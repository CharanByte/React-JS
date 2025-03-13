import { useState } from "react";

function OnLogin() {
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [error, setError] = useState({ nameError: "", emailError: "" });
  const handelChange = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handelOnSubmit = (e: any) => {
    console.log("onsubmit");
    e.preventDefault();
    console.log(customer);
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    if (customer.name.trim() === "") {
      setError((error) => ({ ...error, nameError: "Enter valid Name" }));
    } else if (customer.name.length < 2) {
      setError((error) => ({
        ...error,
        nameError: "Name must contain more than 2 Character",
      }));
    } else {
      setError((error) => ({ ...error, nameError: "" }));
    }

    if (customer.email.trim() === "") {
      setError((error) => ({ ...error, emailError: "Enter valid Email " }));
    } else if (customer.email.length < 6) {
      setError((error) => ({
        ...error,
        emailError: "Email must contain more than 2 Character",
      }));
    } else if (!customer.email.includes("@")) {
      setError((error) => ({ ...error, emailError: "Email must contain @" }));
    } else {
      setError((error) => ({ ...error, emailError: "" }));
    }
  };

  return (
    <>
      <form onSubmit={handelOnSubmit}>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            name="name"
            onChange={handelChange}
          />
          {error.nameError && (
            <span style={{ color: "red" }}>{error.nameError}</span>
          )}
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Last name"
            name="email"
            onChange={handelChange}
          />
          {error.emailError && (
            <span style={{ color: "red" }}>{error.emailError}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default OnLogin;
