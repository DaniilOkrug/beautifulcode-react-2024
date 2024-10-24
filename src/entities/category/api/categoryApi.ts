import { baseApi, CATEGORY_TAG } from '@/shared/api';
import type { Category, CreateCategoryRequest } from '../model/types';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: `/categories`,
      }),
      providesTags: [CATEGORY_TAG],
    }),
    createCategory: build.mutation<Category, CreateCategoryRequest>({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [CATEGORY_TAG],
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;
