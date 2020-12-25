import { provideApolloClient, useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import client from '../../plugins/graphClient'

export function useBookGraph() {

  provideApolloClient(client)

    const getBooks = () => {
        const query = gql`
        query {
            books {
              edges {
                node {
                  title
                }
              }
            }
          }
        `
    const { result } = useQuery(query)

    return useResult(result, null, data => data)

  }
     

    return {
        getBooks
    }

    
} 