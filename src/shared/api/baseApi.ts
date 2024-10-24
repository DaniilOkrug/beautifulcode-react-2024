import { baseQuery } from '@/shared/api/baseQuery.ts';
import { CATEGORY_TAG } from '@/shared/api/tags.ts';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  tagTypes: [CATEGORY_TAG],
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});
