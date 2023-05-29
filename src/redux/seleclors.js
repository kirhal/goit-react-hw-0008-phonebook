export const getContactsList = state => state.contacts.data;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getLogging = state => state.auth.isLoggedIn;
export const getRefreshingCurrentUser = state =>
  state.auth.isRefreshingCurrentUser;

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts;

export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;
