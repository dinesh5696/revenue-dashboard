import React from 'react';
import {Card,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/authContext';
export default function Profile(){
    const {currentUser} = useAuth();
    return(
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
        <div className='w-100' style={{maxWidth:'400px'}}>
        <Card>
                <Card.Body>
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
        </div>
      
    </Container>
    );
}