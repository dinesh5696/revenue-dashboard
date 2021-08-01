import React, {useEffect, useState} from 'react';
import { Card, Button, Alert, Navbar, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/authContext';
import {Link, useHistory} from 'react-router-dom';
import {db} from '../firebase';
import Grid from './grid';
// const dummyData=[];
export default function Dashboard(){
    // const addDocWithId=async(row)=>{
    //     await db.collection('revenue-data').doc(row.Company).set(row)
    //     .then(()=>{
    //         console.log("doc added with ",row.Company);
    //     })
    //     .catch((error)=>{
    //         console.log("error",error);
    //     })
    // };
    // const handleDataUpload=()=>{
    //     dummyData.forEach(item=>{
    //         addDocWithId(item);
    //     })
    //   }
    
    const [error,setError]=useState("");
    const {currentUser, logout} = useAuth();
    const history = useHistory();
    async function handleLogOut(){
        setError("");
        try{
            await logout();
            history.push("/login");
        } catch{
            setError("Failed to log out")
        }
    }
    const [gridData,setGridData]=useState([])
    const fetchGridData=async()=>{
    const response=db.collection('revenue-data');
    const data=await response.get();
    let tempGridData=[];
    data.docs.forEach(item=>{
        tempGridData.push(item.data());
    })
    setGridData(tempGridData);
  }
  useEffect(() => {
    fetchGridData();
  }, [])
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#dashboard">Revenue-Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" variant="dark">
                    <Navbar.Text>
                        Signed in as :<Link to="/profile" className="btn btn-primary">{currentUser.email}</Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    {/* <Button onClick={handleDataUpload} variant="link" style={{"color":"white"}}>Upload Data</Button> */}
                    <Button onClick={handleLogOut} variant="link" style={{"color":"white"}}>Log Out</Button>
                </Container>
            </Navbar>
            <Card>
                <Card.Body>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {gridData && <Grid data={gridData}/>}
                </Card.Body>
            </Card>
        </>
    )
}