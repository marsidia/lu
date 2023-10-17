import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const suggApi = createApi({
    reducerPath: 'suggestions',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.navitia.io/v1/coverage/fr-idf'
    }),
    endpoints(builder){
        return{
            fetchSuggs: builder.query({
                query: (userEntry) => {
                    return{
                        url: '/places',
                        method: 'GET',
                        headers: {
                            Authorization : 'XXXXXX'

                        },
                        params: {
                            q : userEntry,
                
                        }
                    }


                }
            })
        }

    }
});

export const {useLazyFetchSuggsQuery} = suggApi;
export {suggApi};
