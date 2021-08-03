import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class AllDataAPI extends Component {
    constructor(props){
        super(props)
        this.state=
        AllDataAPI=[]

        
    }
    render() {
        return(
        this.state.AllDataApi.map(user=>{
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

              {/* this.state.AllDataAPI.map()=>{ */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.imageUrl} alt="image" />
                <Card.Body>
                  <Card.Title>{this.userName}</Card.Title>
                 
                  <Button variant="primary">pick it</Button>
                </Card.Body>
              </Card>
    
            </div>
        )
        })
    )}
}

export default withAuth0(AllDataAPI);
