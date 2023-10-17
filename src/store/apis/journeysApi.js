import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const journeysApi = createApi({
    reducerPath: 'journeys',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.navitia.io/v1/coverage/fr-idf'
    }),
    endpoints(builder){
        return{
            fetchJourneys: builder.query({
                query: (journeyParams) => {
                    return{
                        url: '/journeys',
                        method: 'GET',
                        headers: {
                            Authorization : 'XXXXXX'

                        },
                        params: {
                            from : journeyParams.departurePlace.id,
                            to: journeyParams.arrivalPlace.id,
                            datetime : journeyParams.datetime,
                            datetime_represents: journeyParams.represents

                
                        }
                    }


                }
            })
        }

    }
});

export const {useLazyFetchJourneysQuery} = journeysApi;
export {journeysApi};
