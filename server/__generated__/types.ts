import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  message: Scalars['String'];
};

export type PayDetail2GetResponse = ErrorResponse | PayDetail2GetSuccess;

export type PayDetail2GetSuccess = {
  __typename?: 'PayDetail2GetSuccess';
  applePay?: Maybe<Array<StripeApplePayPaymentMethod>>;
  creditCard?: Maybe<Array<StripeCreditCardPaymentMethod>>;
  customerId: Scalars['ID'];
  paypal?: Maybe<Array<StripePayPalPaymentMethod>>;
};

export type PayDetailGetResponse = ErrorResponse | PayDetailGetSuccess;

export type PayDetailGetSuccess = {
  __typename?: 'PayDetailGetSuccess';
  customerId: Scalars['ID'];
  methods?: Maybe<Array<StripePaymentMethod>>;
};

export enum PaymentMethodType {
  ApplePay = 'APPLE_PAY',
  CreditCard = 'CREDIT_CARD',
  Paypal = 'PAYPAL'
}

export type Query = {
  __typename?: 'Query';
  payDetail2Get: PayDetail2GetResponse;
  payDetailGet: PayDetailGetResponse;
};

export type StripeApplePayPaymentMethod = StripePaymentMethod & {
  __typename?: 'StripeApplePayPaymentMethod';
  appleId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  method: PaymentMethodType;
};

export type StripeCreditCardPaymentMethod = StripePaymentMethod & {
  __typename?: 'StripeCreditCardPaymentMethod';
  cvv: Scalars['String'];
  description: Scalars['String'];
  familyName: Scalars['String'];
  givenName: Scalars['String'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  method: PaymentMethodType;
  zip: Scalars['String'];
};

export type StripePayPalPaymentMethod = StripePaymentMethod & {
  __typename?: 'StripePayPalPaymentMethod';
  description: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  method: PaymentMethodType;
};

export type StripePaymentMethod = {
  description: Scalars['String'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  method: PaymentMethodType;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PayDetail2GetResponse: ResolversTypes['ErrorResponse'] | ResolversTypes['PayDetail2GetSuccess'];
  PayDetail2GetSuccess: ResolverTypeWrapper<PayDetail2GetSuccess>;
  PayDetailGetResponse: ResolversTypes['ErrorResponse'] | ResolversTypes['PayDetailGetSuccess'];
  PayDetailGetSuccess: ResolverTypeWrapper<PayDetailGetSuccess>;
  PaymentMethodType: PaymentMethodType;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StripeApplePayPaymentMethod: ResolverTypeWrapper<StripeApplePayPaymentMethod>;
  StripeCreditCardPaymentMethod: ResolverTypeWrapper<StripeCreditCardPaymentMethod>;
  StripePayPalPaymentMethod: ResolverTypeWrapper<StripePayPalPaymentMethod>;
  StripePaymentMethod: ResolversTypes['StripeApplePayPaymentMethod'] | ResolversTypes['StripeCreditCardPaymentMethod'] | ResolversTypes['StripePayPalPaymentMethod'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ErrorResponse: ErrorResponse;
  ID: Scalars['ID'];
  PayDetail2GetResponse: ResolversParentTypes['ErrorResponse'] | ResolversParentTypes['PayDetail2GetSuccess'];
  PayDetail2GetSuccess: PayDetail2GetSuccess;
  PayDetailGetResponse: ResolversParentTypes['ErrorResponse'] | ResolversParentTypes['PayDetailGetSuccess'];
  PayDetailGetSuccess: PayDetailGetSuccess;
  Query: {};
  String: Scalars['String'];
  StripeApplePayPaymentMethod: StripeApplePayPaymentMethod;
  StripeCreditCardPaymentMethod: StripeCreditCardPaymentMethod;
  StripePayPalPaymentMethod: StripePayPalPaymentMethod;
  StripePaymentMethod: ResolversParentTypes['StripeApplePayPaymentMethod'] | ResolversParentTypes['StripeCreditCardPaymentMethod'] | ResolversParentTypes['StripePayPalPaymentMethod'];
};

export type ErrorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayDetail2GetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayDetail2GetResponse'] = ResolversParentTypes['PayDetail2GetResponse']> = {
  __resolveType: TypeResolveFn<'ErrorResponse' | 'PayDetail2GetSuccess', ParentType, ContextType>;
};

export type PayDetail2GetSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayDetail2GetSuccess'] = ResolversParentTypes['PayDetail2GetSuccess']> = {
  applePay?: Resolver<Maybe<Array<ResolversTypes['StripeApplePayPaymentMethod']>>, ParentType, ContextType>;
  creditCard?: Resolver<Maybe<Array<ResolversTypes['StripeCreditCardPaymentMethod']>>, ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paypal?: Resolver<Maybe<Array<ResolversTypes['StripePayPalPaymentMethod']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayDetailGetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayDetailGetResponse'] = ResolversParentTypes['PayDetailGetResponse']> = {
  __resolveType: TypeResolveFn<'ErrorResponse' | 'PayDetailGetSuccess', ParentType, ContextType>;
};

export type PayDetailGetSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayDetailGetSuccess'] = ResolversParentTypes['PayDetailGetSuccess']> = {
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  methods?: Resolver<Maybe<Array<ResolversTypes['StripePaymentMethod']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  payDetail2Get?: Resolver<ResolversTypes['PayDetail2GetResponse'], ParentType, ContextType>;
  payDetailGet?: Resolver<ResolversTypes['PayDetailGetResponse'], ParentType, ContextType>;
};

export type StripeApplePayPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeApplePayPaymentMethod'] = ResolversParentTypes['StripeApplePayPaymentMethod']> = {
  appleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['PaymentMethodType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeCreditCardPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeCreditCardPaymentMethod'] = ResolversParentTypes['StripeCreditCardPaymentMethod']> = {
  cvv?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['PaymentMethodType'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripePayPalPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripePayPalPaymentMethod'] = ResolversParentTypes['StripePayPalPaymentMethod']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['PaymentMethodType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripePaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripePaymentMethod'] = ResolversParentTypes['StripePaymentMethod']> = {
  __resolveType: TypeResolveFn<'StripeApplePayPaymentMethod' | 'StripeCreditCardPaymentMethod' | 'StripePayPalPaymentMethod', ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['PaymentMethodType'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  PayDetail2GetResponse?: PayDetail2GetResponseResolvers<ContextType>;
  PayDetail2GetSuccess?: PayDetail2GetSuccessResolvers<ContextType>;
  PayDetailGetResponse?: PayDetailGetResponseResolvers<ContextType>;
  PayDetailGetSuccess?: PayDetailGetSuccessResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StripeApplePayPaymentMethod?: StripeApplePayPaymentMethodResolvers<ContextType>;
  StripeCreditCardPaymentMethod?: StripeCreditCardPaymentMethodResolvers<ContextType>;
  StripePayPalPaymentMethod?: StripePayPalPaymentMethodResolvers<ContextType>;
  StripePaymentMethod?: StripePaymentMethodResolvers<ContextType>;
};

