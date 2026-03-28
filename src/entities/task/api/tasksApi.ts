import type { Task } from '../model/types';
import { baseApi } from 'shared/api/baseApi';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTasks: builder.query<Task[], void>({
      query: () => '/todos',
      transformResponse: (response: Task[]) => response,
      providesTags: ['Tasks'],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
