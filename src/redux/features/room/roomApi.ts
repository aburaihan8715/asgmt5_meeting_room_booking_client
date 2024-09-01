import { baseApi } from '@/redux/api/baseApi';

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: ({
        searchQuery,
        filterByMinCapacity,
        filterByMaxPrice,
        sortByPrice,
        page,
        limit,
      }) => {
        let queryString = `/api/rooms`;

        const params = new URLSearchParams();

        if (searchQuery) params.append('searchTerm', searchQuery);
        if (filterByMinCapacity)
          params.append('capacity[gte]', filterByMinCapacity);
        if (filterByMaxPrice)
          params.append('pricePerSlot[lte]', filterByMaxPrice);
        if (sortByPrice) params.append('sort', sortByPrice);

        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAllRoomsQuery } = roomApi;
