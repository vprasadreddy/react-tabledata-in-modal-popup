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
            <Modal.Title>{this.props.selectedContact.gender}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="card-img-top"
              src={this.props.selectedContact.picture["thumbnail"]}
              alt="Card image cap"
              style={{ height: "100px", width: "auto", marginBottom: "10px" }}
            />
            <ListGroup>
              <ListGroup.Item>
                {this.props.selectedContact.name.title}.{" "}
                {this.props.selectedContact.name.first}{" "}
                {this.props.selectedContact.name.last}
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.onHide}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactCard;

{
  /* <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={this.props.selectedContact.picture["medium"]}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.selectedContact.name.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {this.props.selectedContact.email}
            </li>
            <li className="list-group-item">
              {this.props.selectedContact.cell}
            </li>
          </ul>
        </div> */
}
