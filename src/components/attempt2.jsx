import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../App.css'


export const ImaKms = (props) => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        ssn: '',
        dob: '',
        phoneNumber: '',
        address: '',
        bankName: '',
        bankAccountNumber: '',
        routingNumber: '',
        occupation: '',
        creditScore: '',
     });

     const [selectedFile, setSelectedFile] = useState(null);

   const onFormSubmit = e => {
      e.preventDefault();
      alert("Please wait");
      // send state to server with e.g. `window.fetch`
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the form submission logic here
      // Send data to your server or a state management store
      console.log(formData);
   };
   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
      // You can also add functionality to display a preview or directly upload the file here.
   };

  // alert("Please wait");
   return (
   <form onSubmit={handleSubmit}>
      <div class = "Header">
         <div class = "logo">
            <h1>hello how do you do like wtf is this why dont you fill the whole page unless i type this to</h1>
            <h1 align> </h1>
         </div>
      </div>
     <h5>Personal Information</h5>
     <div class = "personalInformation">
         <div class = "two-thirds">
            <div class = "row">
               <div class = "half">
                  <div className="form-group name-field">
                     <label htmlFor="firstName">First Name</label>
                     <input 
                        id="firstName"
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
               <div class = "half"> 
                  <div className="form-group name-field">
                     <label htmlFor="lastName">Last Name</label>
                     <input 
                        id="lastName"
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
               <div className="form-row">
            

               </div>
            </div>
            <div class = "row">
               <div class = "half">
                  <div className="form-group name-field">
                     <label htmlFor="ssn">Social Security Number</label>
                     <input 
                        id="ssn"
                        type="text" 
                        name="ssn" 
                        value={formData.ssn} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
               <div class = "half"> 
                  <div className="form-group name-field">
                     <label htmlFor="dob">Date of Birth mm/dd/yy</label>
                     <input 
                        id="dob"
                        type="text" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
            </div>
            <div class = "row">
               <div class = "half">
                  <div className="form-group name-field">
                     <label htmlFor="phoneNumber">Phone Number</label>
                     <input 
                        id="phoneNumber"
                        type="text" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
               <div class = "half"> 
                  <div className="form-group name-field">
                     <label htmlFor="address">Address</label>
                     <input 
                        id="address"
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div class = "one-third">
            <label htmlFor="fileInput">Image</label>
            <input 
               id="fileInput"
               type="file" 
               onChange={handleFileChange}
            />
            {/* Optionally display image preview here if needed */}
            {selectedFile && (
               <img src={URL.createObjectURL(selectedFile)} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            )}
         </div>
         



       
       
       {/* Assuming the photo is handled separately */}
     </div>


      <h5> Bank Details</h5>
     <div class = "bankDetails">

     <div class = "row">
         <div class = "third">
            <div className="form-group name-field">
               <label htmlFor="bankName">Bank Name</label>
               <input 
                  id="bankName"
                  type="text" 
                  name="bankName" 
                  value={formData.bankName} 
                  onChange={handleChange} 
               />
            </div>
         </div>
         <div class = "third"> 
            <div className="form-group name-field">
               <label htmlFor="bankAccountNumber">Bank Account Number</label>
               <input 
                  id="bankAccountNumber"
                  type="text" 
                  name="bankAccountNumber" 
                  value={formData.bankAccountNumber} 
                  onChange={handleChange} 
               />
            </div>
         </div>
         <div class = "third"> 
            <div className="form-group name-field">
               <label htmlFor="creditScore">Credit Score</label>
               <input 
                  id="creditScore"
                  type="text" 
                  name="creditScore" 
                  value={formData.creditScore} 
                  onChange={handleChange} 
               />
            </div>
         </div>
         <div className="form-row">
      

         </div>
      </div>
      <div class = "row">
         <div class = "third">
            <div className="form-group name-field">
            <label htmlFor="routingNumber">Routing Number</label>
               <input 
                  id="routingNumber"
                  type="text" 
                  name="routingNumber" 
                  value={formData.routingNumber} 
                  onChange={handleChange} 
               />
            </div>
         </div>
         <div class = "">
            <div className="form-group name-field">
            <label htmlFor="occupation">Occupation</label>
               <input 
                  id="occupation"
                  type="text" 
                  name="occupation" 
                  value={formData.occupation} 
                  onChange={handleChange} 
               />
            </div>
         </div>
      </div>
     </div>

     <button type="submit">Continue</button>
   </form>
   );
}

