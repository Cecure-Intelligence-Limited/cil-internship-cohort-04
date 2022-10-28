<template>
    <nav class='px-8 py-6 bg-gray-800 md:flex md:justify-between md:items-center md:px-24'>
        <div class="logo pl-4 flex justify-between text-gray-50 font-bold text-lg">
            <h1>Contact Manager</h1>
            <div class='border py-2 px-4 border-gray-600 md:hidden' @click="toggleNav">
                <i class="fas fa-bars"></i>
    
            </div>
        </div>
        <div class= "hidden md:flex md:space-x-6" >
            <div class='flex  text-gray-500'>
                <Link to="/" class='flex items-center space-x-2'>
                <p>Home</p>
                </Link>
    
            </div>
    
            <div class='flex items-center space-x-2 text-gray-500'>
                <router-link to="/Add" class='flex items-center space-x-2'>
                <p>Add</p>
                </router-link>
    
            </div>
    
            <div class='flex items-center space-x-2 text-gray-500'>
                <Link to="/About" class='flex items-center space-x-2'>
                <p>About</p>
                </Link>
            </div>
    
        </div>

        <div class=" md:hidden md:space-x-6" v-if="showNav">
            <div class='flex  text-gray-500'>
                <Link to="/" class='flex items-center space-x-2'>
                <p>Home</p>
                </Link>
        
            </div>
        
            <div class='flex items-center space-x-2 text-gray-500'>
                <router-link to="/Add" class='flex items-center space-x-2'>
                    <p>Add</p>
                </router-link>
        
            </div>
        
            <div class='flex items-center space-x-2 text-gray-500'>
                <Link to="/About" class='flex items-center space-x-2'>
                <p>About</p>
                </Link>
            </div>
        
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav
        }
    }
}

</script>