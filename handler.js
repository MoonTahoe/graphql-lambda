import { graphqlLambda } from 'apollo-server-lambda'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './graphql/resolvers'
import { typeDefs, mocks } from '@highfivesfoundation/schema-provider'

const schema = makeExecutableSchema({ 
  typeDefs, 
  resolvers
})

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true })

exports.graphqlHandler = (e, ctx, cb) =>  
  graphqlLambda({ schema })(e, ctx, (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*'
    output.headers['Access-Control-Allow-Credentials'] = true
    cb(error, output)
  })