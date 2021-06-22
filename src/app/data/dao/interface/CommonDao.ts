import {Observable} from "rxjs";


// все методы возвращают Observable - для асинхронности и работы в реактивном стиле
export interface CommonDao<T> {

  // получить все значения
  getAll(): Observable<T[]>;

  // получить одно значение по id
  get(id: number): Observable<T>; // получение значения по уникальному id


  update(arg: T): Observable<T>;

  // удалить значение
  delete(id: number): Observable<T>; // удаление по id


  add(arg: T): Observable<T>;
}
