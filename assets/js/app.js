/* 
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
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

        }
    } 
});
