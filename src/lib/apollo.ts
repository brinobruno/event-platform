import { ApolloClient, InMemoryCache } from '@apollo/client'

const api = {
  contentApiURI: import.meta.env.VITE_GRAPHCMS_CONTENT_API,
  contentApiAuthToken: import.meta.env.VITE_GRAPHCMS_AUTH_TOKEN
}

export const client = new ApolloClient({
  uri: api.contentApiURI,
  headers: {
    'Authorization': `Bearer ${ api.contentApiAuthToken }`
  },
  cache: new InMemoryCache()
})