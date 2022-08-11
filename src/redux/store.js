import { applyMiddleware, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import searchReducer from './slices/search';
import serviceReducer from './slices/services';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic, searchSkillsEpic } from './epics/search';
import { setItemsEpic } from './epics/services';

const epic = combineEpics(
  changeSearchEpic,
  searchSkillsEpic,
  setItemsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
    services: serviceReducer
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);

export default store;
