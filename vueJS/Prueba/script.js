Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});


var app = new Vue({
    el: '#app',
    data: {
        newTodoText: '',
        items: [
            {
                tarea: "Tarea 1",
                prioridad: "ALTA",
                fecha_creacion: new Date().getDate(),
                completada: false
            },
            {
                tarea: "Tarea 2",
                prioridad: "MEDIA",
                fecha_creacion: new Date().getDate(),
                completada: true
            }
        ]
    },
    methods: {
        addNewTodo: function () {
            nuevaTarea = {
                tarea: this.newTodoText,
                prioridad: "BAJA",
                fecha_creacion: new Date().getDate(),
                completada: false
            };
            this.items.push(nuevaTarea);
            this.newTodoText = '';
            localStorage.setItem('todos', JSON.stringify(this.items))
        }
    },
    computed: {
        completadas: function () {
            let list;
            list = this.items.filter(function (item) {
                return item.completada;
            });
            return list.length;
        }
    },
    mounted() {
        var items = JSON.parse(localStorage.getItem('todos'));
        if (items) {
            this.items = items;
        }
    },
});