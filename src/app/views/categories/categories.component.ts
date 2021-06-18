import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;
  selectedCategory: Category | undefined;

// когда загружается приложение ангуляр сам создает объекты классов(экземпляры)
// для того что бы получить доступ(ссылку) на объекты создаем в конструкторе переменную с типом необходимого класса
  constructor(private dataHandler: DataHandlerService) { }


// после того как создали ссылку на сервис DataHandler теперь можем обращаться к методам этого класса
// метод вызывается автоматически после инициализации компонента
  ngOnInit(): void {
   // использованный метод положили в переменную, которую создали выше, там хранятся данные в виде массива
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);


  }

  showByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.filTaskByCategory(category);
  }
}
