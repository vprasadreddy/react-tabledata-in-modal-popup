import React, { Component } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

export class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              {this.props.selectedContact.name.title}.{" "}
              {this.props.selectedContact.name.first}{" "}
              {this.props.selectedContact.name.last}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="card-img-top img-thumbnail mx-auto d-block"
              src={this.props.selectedContact.picture["thumbnail"]}
              alt="Card image cap"
              style={{ height: "100px", width: "auto", marginBottom: "10px" }}
            />
            <ListGroup>
              <ListGroup.Item>
                <h5>Mobile: </h5>
                {this.props.selectedContact.phone}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Address:</h5>
                {this.props.selectedContact.location.city},{" "}
                {this.props.selectedContact.location.state}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Gender: </h5>
                {this.props.selectedContact.gender}
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Submit
            </Button>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactCard;
