<template>
    <div class='flex justify-center'>
        <div class='flex flex-col justify-center items-center mt-4 border w-[300px] sm:w-[400px] md:w-[800px] '>
            <div class='flex  justify-between items-center w-5/6   py-8 px-4'>
                <div class='flex items-center space-x-2'>
                    <h3>{{task.name}}</h3>
                    <i class="fas fa-angles-down" @click="toggleDetails"></i>

                </div>
                <div class='flex items-center space-x-4'>
                    <i class="fas fa-pen-to-square"></i>
                    <i class="fas fa-times" @click="$emit('delete-task',task.id)"></i>
                </div>
            </div>

            <div v-if="showDetails" >
                <div class='py-4 px-4 text-left divide-y'>
                    <p class='pb-4'>Email: <span>{{task.Email}}</span></p>
                    <p class='pt-4'>Phone: <span>{{task.Phone}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    data() {
        return {
            showDetails: false
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
    
}
</script>