import { Dispatch, RootState } from "@/store";
import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from "react-redux";

export const useDispatch = rawUseDispatch.withTypes<Dispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
