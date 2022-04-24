/* 
DESCRIZIONE:
## Istruzioni
Create una todo list usando VueJS.
Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
- La nostra todo list avrá alcune tasks di default predefinite
- L'utente puó inserire nuove tasks
- Cliccando sulla "X" l'utente puó cancellare una task
- Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
- L'utente vuole poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari.
Consultate la documentazione e se siete bloccati, aprite un ticket.
## Bonus-extra (opzionale)
- Quando una task é stata completa allora l'utente vuole che venga inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio...
*/
const app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        text: "Cammina",
        done: true,
      },
      {
        text: "Corri",
        done: true,
      },
      {
        text: "Mangia",
        done: false,
      },
      {
        text: "Respira",
        done: true,
      },
      {
        text: "Saluta",
        done: false,
      },
      {
        text: "Rotola",
        done: false,
      },
    ],
    todos_complete: [],
    todos_remove: [],
    todos_invisible: [],
    new_todo: {
      text: "",
      done: false,
    },
    answer: "",
  },
  methods: {
    add_todo() {
      this.todos.push(this.new_todo);
      this.new_todo = {
        text: "",
        done: false,
      };
    },
    delete_todo(index) {
      this.todos_remove.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    delete_todo_complete(index) {
      this.todos_remove.push(this.todos_complete[index]);
      this.todos_complete.splice(index, 1);
    },
    change_done(index) {
      this.todos[index].done = true;
      this.todos_complete.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    todo_return(index) {
      this.todos_complete[index].done = false;
      this.todos.push(this.todos_complete[index]);
      this.todos_complete.splice(index, 1);
    },
    delete_return(todo_delete, index) {
      this.todos.push(todo_delete);
      this.todos_remove.splice(index, 1);
    },
    delete_all() {
      answer = prompt("Sei sicuro di voler eliminare tutto? y/n");
      if (answer === "y") {
        this.todos_invisible = this.todos_remove;
        this.todos_remove = [];
      }
    },
    recupera() {
      this.todos_remove = this.todos_invisible;
      this.todos_invisible = [];
    },
    text_modified(todo) {
      alert(`Task Update! the new task is "${todo.text}"`);
    },
    true_false() {
      this.todos.forEach((todo) => {
        if (todo.done === true) {
          this.todos_complete.push(todo);
          this.todos = this.todos.filter((element) => element.done !== true);
        }
      });
    },
  },
  mounted() {
    this.true_false();
  },
});
