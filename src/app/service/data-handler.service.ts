import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.filTask();
  }


  filTask(){
    this.taskSubject.next(TestData.tasks);
  }
  filTaskByCategory(categori: Category) {
    const tasks = TestData.tasks.filter(task => task.category === categori);
    this.taskSubject.next(tasks);
  }
}
