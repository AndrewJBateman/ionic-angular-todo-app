import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('todos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  // return observable array of todos
  getTodos() {
    return this.todos;
  }
  // return a todo from database collection by id to view
  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }
  // return updated todo, using inputs of updated todo and id
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }
  // add a todo (using add not push)
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }
  // delete a todo by id
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
