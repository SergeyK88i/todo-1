import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task[]>();

  constructor() { }

  getCategories():Category[] {
    return TestData.categories;
  }
  filTask(){
    this.taskSubject.next(TestData.tasks);
  }
  filTaskByCategory(categori: Category) {
    const tasks = TestData.tasks.filter(task => task.category === categori);
    this.taskSubject.next(tasks);
  }
}
