import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { Dispatch, State } from "./store";

type DispatchFunc = () => Dispatch;

export const useDispatch: DispatchFunc = useAppDispatch;
export const useSelector: TypedUseSelectorHook<State> = useAppSelector;
