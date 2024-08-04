import React, { useContext, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Auth2Context from "../components/Store/auth2-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Profile = () => {
  const newPasswordRef=useRef()
  const ctx=useContext(Auth2Context)

  const history=useHistory()
  const submitHandler=(event)=>{
  event.preventDefault()

  const enterdPassword=newPasswordRef.current.value;

  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAOaGZ8RtZ-DpwnDfDxK9287ChrpR8B5FM',{
    method:'POST',
    body:JSON.stringify({
      idToken:ctx.token,
      password:enterdPassword,
      returnSecureToken:false
    }),
    headers:{
      'Content-type':'apllication/json'
    }
  }).then((res)=>{
    if(res.ok){
   history.replace('/home')
    }else{
      return res.json().then(data=>{
        console.log('Error',data.error.message)
      })
    }
  })
  }
  return (
   <Container>
    <Row >
        <Col md={4} lg={12}>
        <div style={{textAlign:'center' }}>
        <h1 className="mt-3" style={{color:'blue'}}>Your User Profile</h1>
       
            <form onSubmit={submitHandler} className="mt-5">
                <h4 style={{color:'black'}}>New Password</h4>
                <input type="text" ref={newPasswordRef} style={{
                  width: '50%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  
                }} /><br /><br />
                <Button variant="success" type="submit">Change Password</Button>
            </form>
            </div>
       
        </Col>
    </Row>
   </Container>
  );
}

export default Profile;
