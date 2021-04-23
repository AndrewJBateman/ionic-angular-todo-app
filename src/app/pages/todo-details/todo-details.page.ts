import { Todo, TodoService } from "src/app/services/todo.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  LoadingController,
  MenuController,
  NavController,
} from "@ionic/angular";

@Component({
  selector: "app-todo-details",
  templateUrl: "./todo-details.page.html",
  styleUrls: ["./todo-details.page.scss"],
})
export class TodoDetailsPage implements OnInit {
  todo: Todo = {
    task: "",
    createdAt: new Date().getTime(),
    priority: 1,
  };

  todoId = null;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params["id"];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo(): Promise<any> {
    const loading = await this.loadingController.create({
      message: "Loading Todo..",
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe((res) => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo(): Promise<any> {
    const loading = await this.loadingController.create({
      message: "Saving Todo..",
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack("home");
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack("home");
      });
    }
  }
}
