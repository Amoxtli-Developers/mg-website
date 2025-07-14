import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Property } from '../types/property';

export const propertiesApi = createApi({
    reducerPath: 'propertiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getProperties: builder.query<Property[], void>({
            query: () => 'properties'
        })
    })
});
export const { useGetPropertiesQuery } = propertiesApi;
