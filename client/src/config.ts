// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'p6ya337320'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-i6k34h3r.us.auth0.com',            // Auth0 domain
  clientId: 'bPmS3vxx4uEqj4th6nkLBgbtzxCPsSr0',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
