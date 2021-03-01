import React, { Component } from "react";
import ContactCard from "./ContactCard";
import { Modal, Button } from "react-bootstrap";
import ContactList from "./ContactList";

export class ContactApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-8">
            <ContactList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
