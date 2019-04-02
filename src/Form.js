import React, { Component } from "react";
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// Note that the fields of the form need to match with the fields specified on the hidden form of index.html

class Form extends Component {
  state = { name: "", email: "", message: "" };

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Thank you!");
        //Redirecting to home page.
        document.location.href = "/";
      })
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    // Note that the fields of the form need to match with the fields specified on the hidden form of index.html

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" value="name" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="email" value="email" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="message" value="message" />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
export default Form;
