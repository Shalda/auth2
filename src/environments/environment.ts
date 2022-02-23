// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  azureADConfig: {
    tenantId: 'https://login.microsoftonline.com/common',
    // clientId: '87e8dac9-510d-4444-992d-65cf33cdcf65',
    clientId: '64eab84c-a6f2-42d2-b194-48ca2a06544c',
    redirectUri: 'http://localhost:4201',
    logoutPath: '' // value must be a valid absolute URI.
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


