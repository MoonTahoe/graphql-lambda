import { graphqlLambda } from 'apollo-server-lambda'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs.graphql'

const schema = makeExecutableSchema({ typeDefs, resolvers })

exports.graphqlHandler = (e, ctx, cb) =>  
  graphqlLambda({ schema })(e, ctx, (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*'
    output.headers['Access-Control-Allow-Credentials'] = true
    cb(error, output)
  })