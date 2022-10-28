<template>
    <Hero />
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
    <AddTask @add-task="addTask"/> 
    
</template>

<script>
import Hero from '../components/Hero.vue';
import Tasks from '../components/Tasks.vue';
import AddTask from '../views/Add'

export default {
    name: 'Home',
    components: {
        Hero,
        Tasks,
        AddTask 
    },
    data() {
        return {
            tasks: []
        }
    },

    methods: {
        addTask(task) {
            this.tasks = [task, ...this.tasks]
        },
        
        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id)
        }
    },
    created() {
        this.tasks = [
            {
                id: "1",
                name: "Patricia Lebsack",
                Email: "Julianne.OConner@kory.org",
                Phone: "493-170-9623 x156"
            },
            {
                id: "2",
                name: "Chelsey Dietrich",
                Email: "Lucio_Hettinger@annie.ca",
                phone: "(254)954-1289"
            },
            {
                id: "3",
                name: "Mrs. Dennis Schulist",
                Email: "Karley_Dach@jasper.info",
                Phone: "1-477-935-8478 x6430"
            },
            {
                id: "4",
                name: "Kurtis Weissnat",
                Email: "Telly.Hoeger@billy.biz",
                Phone: "210.067.6132"
            },
            {
                id: "5",
                name: "Nicholas Runolfsdottir V",
                Email: "Sherwood@rosamond.me",
                Phone: " 586.493.6943 x140"
            },
            {
                id: "6",
                name: "Glenna Reichert",
                Email: "Chaim_McDermott@dana.io",
                Phone: "493-170-9623 x156"
            },
            {
                id: "7",
                name: "Clementina DuBuque",
                Email: "Rey.Padberg@karina.biz",
                Phone: "024-648-3804"
            },

        ]
    }
    
}
</script>