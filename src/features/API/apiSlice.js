import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lws-server-anuapan9.herokuapp.com/',
    }),
    endpoints: (builder) => ({

    })
}) 