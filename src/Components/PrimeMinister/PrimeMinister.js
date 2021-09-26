import React from 'react';
import './PrimeMinister.css';

const PrimeMinister = (props) => {
    // console.log(props.primeMinister)
    const {image,name,age,gender,headOfGovt,country,Salary} =props.primeMinister
    return (
        <div className="col-md-4 p-2 text-center">
            <div className="card h-100 ms-auto card-border">
                <div className="text-center">
                    <img src={image} height="200" className="rounded p-2" />
                </div>
                <div className="card-body">
                    <h6>Name : {name}</h6>
                    <p>Age : {age}</p>
                    <p>Gender : {gender}</p>
                    <h6>Head of the Govt. : {headOfGovt}</h6>
                    <h6>Country : {country}</h6>
                    <h6>Salary : <small>${Salary}</small></h6>
                </div>
                <div className=" border-0 mb-2">
                    <button onClick={()=>props.handleInvitation(props.primeMinister)}><i class="fas fa-paper-plane"></i> Send invitation</button>
                </div>    
            </div>        
        </div>
    );
};

export default PrimeMinister;