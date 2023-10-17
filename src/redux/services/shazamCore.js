import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '73ac50ecc2msheb58bf651ce514bp18509djsn1af60e371a02',
//       'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath : 'shazamCoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam-core7.p.rapidapi.com',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key','73ac50ecc2msheb58bf651ce514bp18509djsn1af60e371a02');
                return headers;
            }
        }),
        endpoints:(builder)=>({
            getTopCharts:builder.query({query: ()=> '/charts/get-top-songs-in-world'}),
        })
    });

    export const{
        useGetTopChartsQuery,
    } = shazamCoreApi;