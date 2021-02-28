import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import ContactApp from "./ContactApp";
import ContactCard from "./ContactCard";
export class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
      show: false
    };
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

  async getData() {
    const contactsList = await Axios.get(
      "https://gist.githubusercontent.com/vprasadreddy/b5b9dc8244bcff9501158c66e1f599cd/raw/7f55a0f849d4ee63a61e9132d8fde545603ed79f/users.json"
    );
    console.log(contactsList.data);
    this.setState({
      contacts: contactsList.data
    });
  }

  componentDidMount() {
    this.getData();
  }

  viewDetails(contact) {
    //alert(JSON.stringify(contact));
    this.props.receiveContact(contact);
  }

  render() {
    return (
      <>
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Cell</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.length > 0 ? (
              <>
                {this.state.contacts.map((contact, index) => {
                  return (
                    <tr key={contact.login.uuid}>
                      <th scope="row">{index + 1}</th>
                      <td>{contact.name.first + " " + contact.name.last}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            this.setState({
                              selectedContact: contact,
                              show: true
                            })
                          }
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : null}
          </tbody>
        </table>
        {Object.keys(this.state.selectedContact).length > 0 && (
          <ContactCard
            selectedContact={this.state.selectedContact}
            show={this.state.show}
            onHide={this.hideModal}
          />
        )}
      </>
    );
  }
}

export default ContactList;
