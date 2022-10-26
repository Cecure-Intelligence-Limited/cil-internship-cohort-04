import React, {useState} from "react";
import "./Add.css";

const Add = (props) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const nameChangeHandler = (e) =>{
    setName(e.target.value);
  }
  const emailChangeHandler = (e) =>{
    setEmail(e.target.value);
  }
  const phoneChangeHandler = (e) =>{
    setPhone(e.target.value);
  }

const submitHandler = (e) =>{
  e.preventDefault();
  if(name && email && phone){
    const contactData = {
      name: name,
      email: email,
      phone: phone,
    }
  props.onSaveContact(contactData);
  setName("");
  setEmail("");
  setPhone("");
}else{alert("Please fill all the required fields!")}

}

  return <div className="add">
  <div className="add-box">
  <h2>ADD CONTACT</h2>
  <hr />
  <form onSubmit={submitHandler}>
  <p><label>Name</label></p>
  <input value={name} type="text" className="add-input" placeholder="Enter your name..."  onChange={nameChangeHandler}/>

  <p><label>Email</label></p>
  <input value={email} type="text" className="add-input" placeholder="Enter your email address..." onChange={emailChangeHandler} />

  <p><label>Phone</label></p>
  <input value={phone} type="text" className="add-input" placeholder="Enter your phone number..." onChange={phoneChangeHandler} />

  <button class="add-button" type="submit" >Add Contact</button>

  </form>
  </div>

  </div>
}

export default Add;
