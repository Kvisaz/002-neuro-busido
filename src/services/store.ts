import {Action, ActionCreator, applyMiddleware, compose, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {DataAction} from "./actions/";
import {rootReducer} from "./reducers";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

type AppAction = DataAction;


export const AppStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk
        ),
    ));


export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch;


export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, AppAction>>;

export interface IGetState {
    (): RootState;
}