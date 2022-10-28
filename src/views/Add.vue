<template>
    <div class='grid justify-center'>
        <div class=' mt-4 grid justify-center items-center  rounded-lg bg-gray-100 mx-8 md:w-[640px] md:mx-32'>
            <div class='  justify-center items-center '>
                <div
                    class=' md:w-[640px]  px-6  py-3 border border-gray-400 bg-gray-200  text-left font-bold text-gray-800 rounded-t-md'>
                    <p>Add Contact</p>
                </div>
    
                <form action="" class='w-[400px] md:w-[640px]  text-left  px-4  pt-4' @submit="onSubmit">
                    <div class='flex flex-col justify-center space-y-2 '>
                        <label class='text-gray-700'>Name</label>
                        <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your name...'
                        v-model="name"
                            
                        />
                    </div>
                    <div class='flex flex-col justify-center space-y-2 mt-4'>
                        <label class='text-gray-700'>Email</label>
                        <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your email...'
                        v-model="email"
                        />
                    </div>
                    <div class='flex flex-col justify-center space-y-2 mt-4'>
                        <label class='text-gray-700'>phone</label>
                        <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your phone...'
                        v-model="phone"
                        />
                    </div>
    
                    <button class='bg-gray-800 text-center w-full text-gray-50 py-2 rounded-md my-4'>Submit</button>
    
    
                </form>
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            name: '',
            email: '',
            phone: ''

        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                name: this.name,
                email: this.email,
                phone: this.phone
            }
            this.$emit('add-task',newTask)

            this.name = ""
            this.email = ""
            this.phone = ""

        }
    }
}
</script>