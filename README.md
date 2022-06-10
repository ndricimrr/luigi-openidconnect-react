# luigi-openidconnect-react
An example application configuring a luigi web app with OpenID connect

## SETUP LUIGI WITH OPENID-CONNECT AND REACT

## First run the OpenID server mock

```
cd oidc-mockserver
docker-compose up
```

## Next build and start the Luigi application

```
cd react-auth-openid
npm install
npm run build
npm run start
```

Your app should now be configured with OpenID Connect. 
You should be able to login and logout with this minimal configuration.