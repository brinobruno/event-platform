import { ApolloClient, InMemoryCache } from '@apollo/client'

const api = {
  contentApiURI: import.meta.env.VITE_GRAPHCMS_CONTENT_API
}

export const client = new ApolloClient({
  uri: api.contentApiURI,
  cache: new InMemoryCache()
})