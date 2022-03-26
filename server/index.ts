/*
Copyright 2022-present © Care.com, Inc. All rights reserved.
This software is the confidential and proprietary information of Care.com, Inc.
*/

import fs from "fs";
import path from "path";
import {ApolloServer, gql} from 'apollo-server-fastify';
import {makeExecutableSchema} from "@graphql-tools/schema";
import fastify from 'fastify';
import {resolvers} from './resolvers';
import * as common from './common/resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

function graph() {
    return makeExecutableSchema({
        typeDefs: gql(typeDefs),
        resolvers: [ resolvers, common.resolvers ],
    });
}

async function start() {
    const apolloServer = new ApolloServer({
        schema: graph(),
        introspection: true,
    });

    const fastifyServer = fastify();
    await apolloServer.start();
    await fastifyServer.register(apolloServer.createHandler({ path: '/api/graphql' }));

    const port = 8081;

    await fastifyServer.listen({port}, (err: Error | null, address: string) => {
        console.log('Server started');
        console.log(`Server listening on ${address} on port ${port}`)
    });
}

(async function () {
    await start();
})();
