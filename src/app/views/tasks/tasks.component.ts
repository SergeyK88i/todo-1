import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from 'src/app/model/Task';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
   displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
   dataSource!: MatTableDataSource<Task>; // контейнер - источник данных для таблицы

  //ссылки на компоненты таблицы( данные из задачи должны совпадать с названиями переменных класа
  @ViewChild(MatPaginator,{static: false}) private paginator!: MatPaginator;
  @ViewChild(MatSort, {static:false}) private sort!: MatSort;

  @Input()
  tasks!: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    //берем данные напрямую
    //this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);


    // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
    this.dataSource = new MatTableDataSource();

    this.fillTable(); // заполняем таблицу данными
  }



  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  // в зависимости от статуса задачи - вернуть цвет названия
  getPriorityColor(task: Task) {
    if (task.completed) {
      return 'grey';
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';

  }

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  fillTable() {


    this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)

    this.addTableObjects();

      // @ts-ignore
    this.dataSource.sortingDataAccessor = (task,colName) => {

        switch (colName) {

          case 'priority': {
            return task.priority ? task.priority.id: null;
          }

          case 'category': {
            return task.category ? task.category.title: null;
          }

          case 'date': {
            return task.date ? task.date: null;
          }

          case 'title': {
            return task.title;
          }
        }
      };
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
