/*
Copyright 2022-present © Care.com, Inc. All rights reserved.
This software is the confidential and proprietary information of Care.com, Inc.
*/

import * as gql from '../__generated__/types'
import {PaymentMethodType} from '../__generated__/types'

export const Query: gql.QueryResolvers = {
    payDetailGet: async function(): Promise<gql.PayDetailGetResponse> {
        return {
            __typename: 'PayDetailGetSuccess',
            customerId: '12345',
            methods: [
                {
                    __typename: 'StripeCreditCardPaymentMethod',
                    id: 'CC_54321',
                    description: 'Credit Card #1',
                    isDefault: false,
                    zip: '3841',
                    givenName: 'Jackson',
                    familyName: 'Harper',
                    cvv: '001',
                    method: PaymentMethodType.CreditCard,
                } as gql.StripePaymentMethod,
                {
                    __typename: 'StripeCreditCardPaymentMethod',
                    id: 'CC_54322',
                    description: 'Credit Card #2',
                    isDefault: true,
                    zip: '3841',
                    givenName: 'Jackson',
                    familyName: 'Harper',
                    cvv: '002',
                    method: PaymentMethodType.CreditCard,
                } as gql.StripePaymentMethod,
                {
                    __typename: 'StripePayPalPaymentMethod',
                    id: 'PP_54323',
                    description: 'PayPal #1',
                    isDefault: false,
                    email: 'jharper+54321@care-test.com',
                    method: PaymentMethodType.Paypal,
                } as gql.StripePaymentMethod,
                {
                    __typename: 'StripeApplePayPaymentMethod',
                    id: 'PP_54324',
                    description: 'ApplePay #1',
                    isDefault: false,
                    appleId: 'jharper+apple',
                    method: PaymentMethodType.ApplePay,
                } as gql.StripePaymentMethod,
            ],
        };
    },
    payDetail2Get: async function(): Promise<gql.PayDetail2GetResponse> {
        return {
            __typename: 'PayDetail2GetSuccess',
            customerId: '12345',
            creditCard: [
                {
                    __typename: 'StripeCreditCardPaymentMethod',
                    id: 'CC_54321',
                    description: 'Credit Card #1',
                    isDefault: false,
                    zip: '3841',
                    givenName: 'Jackson',
                    familyName: 'Harper',
                    cvv: '001',
                    method: PaymentMethodType.CreditCard,
                } as gql.StripeCreditCardPaymentMethod,
                {
                    __typename: 'StripeCreditCardPaymentMethod',
                    id: 'CC_54322',
                    description: 'Credit Card #2',
                    isDefault: true,
                    zip: '3841',
                    givenName: 'Jackson',
                    familyName: 'Harper',
                    cvv: '002',
                    method: PaymentMethodType.CreditCard,
                } as gql.StripeCreditCardPaymentMethod,
            ],
            paypal: [
                {
                    __typename: 'StripePayPalPaymentMethod',
                    id: 'PP_54323',
                    description: 'PayPal #1',
                    isDefault: false,
                    email: 'jharper+54321@care-test.com',
                    method: PaymentMethodType.Paypal,
                } as gql.StripePayPalPaymentMethod,
            ],
            applePay: [
                {
                    __typename: 'StripeApplePayPaymentMethod',
                    id: 'PP_54324',
                    description: 'ApplePay #1',
                    isDefault: false,
                    appleId: 'jharper+apple',
                    method: PaymentMethodType.ApplePay,
                } as gql.StripeApplePayPaymentMethod
            ],
        }
    }
}

export const resolvers = {
    Query,
};
