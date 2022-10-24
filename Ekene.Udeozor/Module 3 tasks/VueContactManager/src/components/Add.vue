<template>

<div class="add">
<div class="add-box">
<h2>ADD CONTACT</h2>
<hr />
<form @submit="onSubmit">
<p><label>Name</label></p>
<input type="text" name="name" v-model="name" class="add-input" placeholder="Enter your name..."/>

<p><label>Email</label></p>
<input type="text" name="email" v-model="email" class="add-input" placeholder="Enter your email address..." />

<p><label>Phone</label></p>
<input type="text" name="phone" v-model="phone" class="add-input" placeholder="Enter your phone number..." />

<button class="add-button" type="submit" >Add Contact</button>
</form>
</div>
</div>
</template>

<script>
export default {
name: "Add-component",
 data() {
  return { name: "",
         email: "",
         phone: ""
       }
      },
methods: {
 onSubmit(e){
   e.preventDefault();

   if(this.name && this.email && this.phone){
   const newContact = {
    id: String(Math.random()),
    name: this.name,
    email: this.email,
    phone: this.phone,
   }
   this.$emit('add-contact', newContact);
   console.log(newContact);

   this.name= "";
   this.email = "";
   this.phone = "";
   }else{
    alert("Please fill all required fields!");
   }

 }
}
}
</script>

<style>
.add{
  padding: 10rem;
}
.add-box{
  margin: 0 auto;
  width: 70%;
  border: 2px solid #96c2e3;
  text-align:center;
  padding: 5rem;
  border-radius: 3px;
}
.add-box h2{
  color: #454545;
  font-weight: bold;
}
.add-input{
  width: 80%;
  height: 4rem;
  padding: .6rem;
  border-radius: 3px;
}
.add-input:focus{
  outline: none;
  border-bottom: 2px solid #003af5;
}
.add-button{
  display: block;
  margin: 3rem auto;
  width: 10rem;
  border-radius: 10px;
  background-color: #003af5;
  color: #fff;
}
</style>
