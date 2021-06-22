import {PriorityDAO} from "../interface/PriorityDao";
import {Observable} from "rxjs";
import {Priority} from "../../../model/Priority";

export class PriorityDAOArray implements PriorityDAO {
  add(arg: Priority): Observable<Priority> {
    return undefined!;
  }

  delete(id: number): Observable<Priority> {
    return undefined!;
  }

  get(id: number): Observable<Priority> {
    return undefined!;
  }

  getAll(): Observable<Priority[]> {
    return undefined!;
  }

  update(arg: Priority): Observable<Priority> {
    return undefined!;
  }


}
