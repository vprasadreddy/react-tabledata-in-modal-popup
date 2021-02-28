import React, { Component } from "react";
import ContactCard from "./ContactCard";
import { Modal, Button } from "react-bootstrap";
import ContactList from "./ContactList";

export class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContact: {},
      show: false
    };
    this.receiveContact = this.receiveContact.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  receiveContact(contact) {
    this.setState({
      selectedContact: contact,
      show: true
    });
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
