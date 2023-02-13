// eslint-disable-next-line
export const candidatesListSelector = (state) => state.CVData.candidates.users;
export const nextPageSelector = (state) => state.CVData.candidates.links;
export const isFetchingSelector = (state) => state.CVData.isFetching;
