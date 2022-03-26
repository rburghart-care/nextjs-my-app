
/*
Copyright 2022-present © Care.com, Inc. All rights reserved.
This software is the confidential and proprietary information of Care.com, Inc.
*/

import {gql, InMemoryCache, ApolloClient} from "@apollo/client";
import * as types from '../server/__generated__/types';

export interface StripeGenericPaymentMethod {
    kind: 'StripeGenericPaymentMethod';

    id: string;

    description: string;

    isDefault: boolean;
}

export interface StripePaymentMethodCreditCard {
    kind: 'StripePaymentMethodCreditCard';

    id: string;

    description: string;

    isDefault: boolean;

    zip: string;

    familyName: string;

    givenName: string;

    cvv: string;
}

export type StripePaymentMethod = StripePaymentMethodCreditCard | StripeGenericPaymentMethod;

export interface StripePaymentDetails {
    kind: 'StripePaymentDetails';

    customerId: string;

    methods: StripePaymentMethod[];
}

export interface StripePaymentDetails2 {
    kind: 'StripePaymentDetails2';

    customerId: string;

    creditCard: StripePaymentMethodCreditCard[]
}

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    uri: 'http://localhost:8081/api/graphql',
});

const payDetailGetQuery = gql`
    query PayDetailGet {
        payDetailGet {
            __typename
            ...on PayDetailGetSuccess {
                customerId
                methods {
                    __typename
                    id
                    description
                    isDefault
                    method
                    ...on StripeCreditCardPaymentMethod {
                        zip
                        givenName
                        familyName
                        cvv
                    }
                }
            }
        }
    }
`;

const payDetail2GetQuery = gql`
    query PayDetail2Get {
        payDetail2Get {
            __typename
            ...on PayDetail2GetSuccess {
                customerId
                creditCard {
                    id
                    description
                    isDefault
                    method
                    zip
                    givenName
                    familyName
                    cvv
                }
            }
        }
    }
`;

function convertCreditCardMethod(method: types.StripeCreditCardPaymentMethod): StripePaymentMethodCreditCard {
    return {
        ...method,
        kind: 'StripePaymentMethodCreditCard',
    }
}

function convertGenericMethod(method: types.StripePaymentMethod): StripeGenericPaymentMethod {
    return {
        ...method,
        kind: 'StripeGenericPaymentMethod',
    }
}

function convertPaymentMethod(method: types.StripePaymentMethod): StripePaymentMethod {
    const { method: kind } = method;

    if (kind === types.PaymentMethodType.CreditCard) {
        return convertCreditCardMethod(method as types.StripeCreditCardPaymentMethod);
    }

    return convertGenericMethod(method as types.StripePaymentMethod);
}

function convertPaymentMethodList(methods?: types.StripePaymentMethod[] | null): StripePaymentMethod[] {
    if (!methods) {
        return [];
    }

    return methods.map(convertPaymentMethod);
}

function convertPaymentDetails(details: types.PayDetailGetSuccess): StripePaymentDetails {
    return {
        kind: 'StripePaymentDetails',
        customerId: details.customerId,
        methods: convertPaymentMethodList(details.methods),
    }
}

function convertCreditCardList(methods?: types.StripeCreditCardPaymentMethod[] | null): StripePaymentMethodCreditCard[] {
    if (!methods) {
        return [];
    }

    return methods.map(convertCreditCardMethod);
}

function convertPaymentDetails2(details: types.PayDetailGet2Success): StripePaymentDetails2 {
    return {
        kind: 'StripePaymentDetails2',
        customerId: details.customerId,
        creditCard: convertCreditCardList(details.creditCard),
    }
}

export async function PaymentDetails(): Promise<StripePaymentMethod[]> {
    const raw = await client.query({ query: payDetailGetQuery });
    const { data: { payDetailGet } } = raw;

    const result = convertPaymentDetails(payDetailGet);

    return result.methods;
}

export async function PaymentDetails2(): Promise<StripePaymentMethodCreditCard[]> {
    const raw = await client.query({ query: payDetail2GetQuery });
    const { data: { payDetail2Get } } = raw;

    const result = convertPaymentDetails2(payDetail2Get);

    return result.creditCard;
}