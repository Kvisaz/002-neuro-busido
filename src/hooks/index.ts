import {TypedUseSelectorHook, useDispatch as useCommonDispatch, useSelector} from "react-redux";
import {AppDispatch, AppThunk, RootState} from "../services/store";
import {IDataState} from "../services/reducers/data";

export const useDispatch = ()  => useCommonDispatch<AppDispatch | AppThunk>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useDataState(): IDataState {
    return useAppSelector((state: RootState) => ({ ...state.data }));
}

