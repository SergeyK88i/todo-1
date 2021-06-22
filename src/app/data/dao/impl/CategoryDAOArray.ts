import {CategoryDAO} from "../interface/CategoryDao";
import {Observable, of} from "rxjs";
import {Category} from "../../../model/Category";
import {TestData} from "../../TestData";

export class CategoryDAOArray implements CategoryDAO {
  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }
  add(arg: Category): Observable<Category> {
    return undefined!;
  }

  delete(id: number): Observable<Category> {
    return undefined!;
  }

  get(id: number): Observable<Category> {
    return undefined!;
  }



  search(title: string): Observable<Category[]> {
    return undefined!;
  }

  update(arg: Category): Observable<Category> {
    return undefined!;
  }



}
