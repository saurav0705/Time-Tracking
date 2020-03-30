import React, { useEffect, useState } from 'react';
import './Users.css';
import { Modal, ModalHeader,ModalBody } from 'reactstrap';
import Loading from '../Loading/Loading';
import TimeDetail from '../TimeDetail/TimeDetail';
const API = "https://chatroom98.herokuapp.com/mock-data/"; 
const Users = () => {
    const [members,setMembers] = useState([]);
    const [modal,setModal] = useState(false);
    const [user,setUser] = useState([]);
    const toggle = () => setModal(!modal)

    useEffect(()=>{
      fetch(API)
      .then(resp => resp.json())
      .then(resp => {console.log(resp['members']);setMembers(resp['members'])})
    },[])

    return (<>
    <div  className="container-name">
        <h1 className="name-heading">Users</h1>
        {
          members.length != 0 ?
          members.map(mem => <div className="name" key={mem.id} onClick={()=>{toggle();setUser(mem)}}>{mem['real_name']}</div>): <Loading/>
        }
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>USER DETAILS</ModalHeader>
        <ModalBody>
        <TimeDetail user={user}/>
        </ModalBody>
            
        </Modal>
        </div>

        
        </>
      )
};

export default Users;