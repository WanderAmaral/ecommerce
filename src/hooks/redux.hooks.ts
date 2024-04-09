
import { RootState } from '@/app/store/store'
import {TypedUseSelectorHook, useSelector} from 'react-redux'

export const useAppleSelector: TypedUseSelectorHook<RootState> = useSelector