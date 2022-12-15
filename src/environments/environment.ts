// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  departmentsEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/departments',
  objectsEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/objects',
  searchEndpoint: 'https://collectionapi.metmuseum.org/public/collection/v1/search',
  metadataDate: '2022-11-20',
  departmentsSliceLimit: 2,
  objectsSliceLimit: 5
};
