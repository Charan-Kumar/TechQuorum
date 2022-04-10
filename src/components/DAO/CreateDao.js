import React, { useState } from 'react'
import { gql } from "@apollo/client";
import { authenticatedApolloClient } from "../Lens/ApolloClient";
import { createProfile } from '../Lens/Api';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 14,
  },
};



export default function CreateDao(){
  let [daoNameState,setDAONameState] = useState("");
  let [aboutDAOState,setAboutDAOState] = useState("");
  let [feesState,setFeesState] = useState("");
  let [walletState,setWalletState] = useState("");
  let [languageState,setLanguageState] = useState("");
  const feeStructure = {
      feeFollowModule: {
      amount: {
          currency: "0x3C68CE8504087f89c640D02d133646d98e64ddd9", //WETH address
          value: feesState,
          //  decimals: parseInt(6)
      },
      recipient: "0x3aa821cEE6194C4aD7e3F3d6E393F646D1Cd65Db" // Protocol Owned Account
}

};
  const createProfileRequest = 
  { 
      handle: daoNameState, 
      
      followModule: feeStructure
  }

const handleAboutDAO =(e)=>{
  setAboutDAOState(e.target.value);
}
  const handleDAOname=(e) => {
setDAONameState(e.target.value);
    }
  const handleOtherData=(e) => {
      setLanguageState(e.target.value);
         }
         const showOtherField = () =>{
             document.getElementById('insertinputs').style.display ="block";
         
      }
      const hideOtherField = () => {
          document.getElementById('insertinputs').style.display ="none"
          document.getElementById('otherdata').value ="";
      }
      
  const handleLanguageChange=(e) => {
      if(e.target.value === 'Other'){
      showOtherField()
      }
       else{
          hideOtherField()
       setLanguageState(e.target.value);
      }
         }
  const handleFees=(e) => {
  setFeesState(e.target.value);
  if(e.target.value){
      handleWallet()
  }
  }

  const handleWallet = async()=>{
      var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletState(accounts[0])
  }    

  return(
      <>
      <div className="container h-100 mt-3">
      <div className="row align-items-center h-100">
      <div className="col-6 mx-auto">
              <div className="card text-white justify-content-center bg-dark" id='cardcontainer'>
                  <div className='card-body'>
                  <h3 className="card-title text-center">Create DAO</h3>
      <form>
  <div className="mb-3">
      <label className="form-label" htmlFor="inputDAOName">DAO Name*</label>
      <input type="text" onChange={handleDAOname} className="form-control" id="inputDAOName" placeholder="Name" required/>
      
  </div>
  <div className='mb-3'>
      <label className="form-label" htmlFor="inputAboutDAO">Language</label>
      <select className="form-select form-select-sm w-50" style={{ border:"none"}} 
      onChange={e => handleLanguageChange(e)}>
      <option>Select one language</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Reactjs</option>
          <option>Solidity</option>
          <option>C++</option>
          <option>Python</option>
          <option>Other</option>
      </select>
  </div>
  <div  id="insertinputs">
              <input className="input" type="text" onChange={handleOtherData} 
              name='other' placeholder="Enter Language" id='otherdata'></input>
          </div>
  <div className="mb-3">
      <label className="form-label" htmlFor="inputAboutDAO">About the DAO (optional)</label>
      <input type="text" onChange={handleAboutDAO} className="form-control" id="inputAboutDAO" placeholder="Write about DAO" required/>   
  </div>

  <div className="mb-3" id='feesfield'>
      <label className="form-label" htmlFor="inputFees">Fees (in WETH)</label>
      <input type="text" onChange={handleFees} className="form-control" id="inputFees" placeholder="Enter amount"/>
      <small id="inputFees" className="form-text text-muted">
Want to add fees for users who want to follow you?
</small>
  </div>
  <div className='justify-content-center'>
  <button className="btn btn-primary" 
  onClick={(e)=>{
    e.preventDefault(); 
    createProfile(createProfileRequest);

    }
  }>Create</button>
  </div>
</form>
</div>
</div>
</div>
</div>
</div>
      </>
  )
}