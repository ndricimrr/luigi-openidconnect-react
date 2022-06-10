import oidcProvider from '@luigi-project/plugin-auth-oidc';

Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2'
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'React.js',
            externalLink: {
              url: 'https://reactjs.org/'
            }
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  },
  auth: {
    use: 'openIdConnect',
    openIdConnect: {
      idpProvider: oidcProvider,
      authority: 'http://localhost:4011/',
      client_id: 'authorisation-code-pkce-mock-client', // example oidc-mockserver client id
      response_type: "code", // for PKCE
      response_mode: "fragment", // change between `query` and `fragment`
      scope: 'openid profile email',
      post_logout_redirect_uri: '/logout.html',
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 60,
    },
    disableAutoLogin: false
  }
});
