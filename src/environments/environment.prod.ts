export const environment = {
  production: true,
  departmentsEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/departments',
  objectsEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/objects',
  searchEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/search',
  metadataDate: '2022-11-20',
  departmentsSliceLimit: 4,
  objectsSliceLimit: 8,
  searchSliceLimit: 10,
  searchDebounceTime: 500
};
