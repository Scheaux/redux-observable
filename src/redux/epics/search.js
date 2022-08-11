import { catchError, debounceTime, filter, map, of, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { searchSkillsFailure, searchSkillsRequest, searchSkillsSuccess } from '../slices/search';

export const changeSearchEpic = (action$) => action$.pipe(
  ofType('search/changeSearch'),
  map(x => x.payload.trim()),
  filter(x => x !== ''),
  debounceTime(300),
  map(x => searchSkillsRequest(x))
);

export const searchSkillsEpic = (action$) => action$.pipe(
  ofType('search/searchSkillsRequest'),
  map(x => x.payload.trim()),
  filter(x => x !== ''),
  switchMap(x => ajax.getJSON(`https://expressendpoint.herokuapp.com/api/search?q=${x}`)
    .pipe(
      map(x => searchSkillsSuccess(x)),
      catchError(e => of(searchSkillsFailure(e)))
    ))
);
