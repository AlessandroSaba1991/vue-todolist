/* 
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
const app = new Vue({ 
    el: "#app", 
    data: {
        todos:[
            {
                text:'Cammina',
                done:true
            },
            {
                text:'Corri',
                done:true
            },
            {
                text:'Mangia',
                done:false
            },
            {
                text:'Respira',
                done:true
            },
            {
                text:'Saluta',
                done:false
            },
            {
                text:'Rotola',
                done:false
            },
        ],
        new_todo:{
            text:'',
            done:false
        }
    }, 
    methods: {
        delete_todo(index){
            this.todos.splice(index,1)
        },
        add_todo(){
            this.todos.push(this.new_todo)
            this.new_todo = 
            {
                text:'',
                done:false
            } 

        },
        change_done(index){
            this.todos[index].done === true ? this.todos[index].done = false : this.todos[index].done = true
        }
    } 
});
