import { baseQuery } from '@/shared/api/baseQuery.ts';
import { createApi } from '@reduxjs/toolkit/query';

export const baseApi = createApi({
  tagTypes: [],
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});
