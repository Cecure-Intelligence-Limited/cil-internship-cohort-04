<template>
<header>
<h1>{{title}}</h1>
<ButtonComponent @toggle-add-contact="$emit('toggle-add-contact')" text="Add a Contact" />
</header>
</template>

<script>
import ButtonComponent from "./Button";

export default{
name: 'Header-component',
components: {
ButtonComponent
},
props: {
title: String,
}
}
</script>

<style scoped>
header{
padding: 5rem;
background-color: #03dffc;
display: flex;
justify-content: space-between;
margin-bottom: 8rem;
align-items: center;
}
header h1{
letter-spacing: 1rem;
}
header button{
background-color: #eee;
border: none;
color: #035afc;
margin-right: 10rem;
border-radius: 5px;
padding: 1rem;
}
header button:hover{
box-shadow: 3px 3px 5px rgba(0,0,0, .5);
}
</style>
