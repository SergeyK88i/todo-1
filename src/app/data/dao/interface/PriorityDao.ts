import {Priority} from '../../../model/Priority';
import {CommonDao} from './CommonDao';

// специфичные методы для работы приоритетами (которые не входят в обычный CRUD)
export interface PriorityDAO extends CommonDao<Priority> {

  // здесь будут специфичные методы для работы с категориями (на будущее)

}
