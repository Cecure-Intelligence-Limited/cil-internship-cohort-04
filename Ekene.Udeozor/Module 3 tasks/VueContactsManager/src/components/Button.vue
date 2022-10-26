<template>
<button @click="onClick()">{{text}}</button>
</template>

<script>
export default{
name: 'Button-component',
props: {
text: String,
},
methods: {
onClick(){
this.$emit("toggle-add-contact");
}
}
}
</script>
