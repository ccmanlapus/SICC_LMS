import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authApi } from '@/hooks/api/authApi'
import { userApi } from '@/hooks/api/userApi'
import authSlice from '@/hooks/redux/authSlice'

import { activityLogApi } from './api/activityLogApi'
import { categoryApi } from './api/categoryApi'
import { courseApi } from './api/courseApi'
import { scheduleApi } from './api/scheduleApi'
import { storeApi } from './api/storeApi'

export const store = configureStore({
  reducer: {
    authState: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [scheduleApi.reducerPath]: scheduleApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [activityLogApi.reducerPath]: activityLogApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      categoryApi.middleware,
      userApi.middleware,
      scheduleApi.middleware,
      storeApi.middleware,
      courseApi.middleware,
      activityLogApi.middleware,
    ]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
