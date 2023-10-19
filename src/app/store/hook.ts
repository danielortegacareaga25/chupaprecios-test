import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from ".";

/**
 * Hook to access to useDispatch from react-redux
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/**
 * Hook to access to useSelector from react-redux
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
