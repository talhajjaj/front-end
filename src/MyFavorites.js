import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyFavorites.css";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";
import FormData from "./component/FormData";
class MyFavorites extends React.Component {
  render() {
    return this.state.AllDataApi.map((user) => {
      return (
        <div>
          <h1>All Data from the API</h1>
          <h3>Select your favorites :)</h3>

          {/* this.state.AllDataAPI.map()=>{ */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.imageUrl} alt="image" />
            <Card.Body>
              <Card.Title>{this.userName}</Card.Title>

              <Button variant="primary">Delete</Button>
              <Button variant="primary">Update </Button>
            </Card.Body>
          </Card>
          <FormData/>
        </div>
      );
    });
  }
}

export default withAuth0(MyFavorites);
