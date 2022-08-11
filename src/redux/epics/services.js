import { catchError, debounceTime, filter, map, of, mergeMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { setItemsError, setItemsSuccess } from '../slices/services';

export const setItemsEpic = (action$) => action$.pipe(
  ofType('services/setItems'),
  map(x => x.payload),
  mergeMap(x => ajax.getJSON(x).pipe(
    map(x => setItemsSuccess(x)),
    catchError(x => of(setItemsError(x)))
  ))
);
