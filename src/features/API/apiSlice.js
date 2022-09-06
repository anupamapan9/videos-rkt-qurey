import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lws-server-anuapan9.herokuapp.com/',
    }),
    endpoints: (builder) => ({
        getVideos: builder.query(
            { query: () => '/videos' }
        )
    })
})

export const { useGetVideosQuery } = apiSlice