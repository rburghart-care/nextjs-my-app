/*
Copyright 2022-present © Care.com, Inc. All rights reserved.
This software is the confidential and proprietary information of Care.com, Inc.
*/

export const TypeNameResolver = {
    // eslint-disable-next-line
    __resolveType(obj: { __typename: string }, context: any, info: any) {
        const { __typename: kind } = obj;

        if (kind) {
            return kind;
        }
    },
};

export const resolvers = {
    PayDetailGetResponse: TypeNameResolver,
    StripePaymentMethod: TypeNameResolver,
};

export default resolvers;
