import {Category} from '../../../model/Category';
import {CommonDao} from './CommonDao';
import {Observable} from 'rxjs';

// специфичные методы для работы с категориями (которые не входят в обычный CRUD)
export interface CategoryDAO extends CommonDao<Category> {

  // поиск категорий по названию
  search(title: string): Observable<Category[]>;

}
