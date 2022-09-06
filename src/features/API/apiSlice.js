import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lws-server-anuapan9.herokuapp.com/',
    }),
    endpoints: (builder) => ({
        getVideos: builder.query(
            { query: () => '/videos' }
        ),
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`
        })
    })
})

export const { useGetVideosQuery, useGetVideoQuery } = apiSlice