
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshSession
 * 
 */
export type RefreshSession = $Result.DefaultSelection<Prisma.$RefreshSessionPayload>
/**
 * Model TravelOffer
 * 
 */
export type TravelOffer = $Result.DefaultSelection<Prisma.$TravelOfferPayload>
/**
 * Model TravelRequest
 * 
 */
export type TravelRequest = $Result.DefaultSelection<Prisma.$TravelRequestPayload>
/**
 * Model CompanionRequest
 * 
 */
export type CompanionRequest = $Result.DefaultSelection<Prisma.$CompanionRequestPayload>
/**
 * Model Journey
 * 
 */
export type Journey = $Result.DefaultSelection<Prisma.$JourneyPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model TravelDocument
 * 
 */
export type TravelDocument = $Result.DefaultSelection<Prisma.$TravelDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NON_BINARY: 'NON_BINARY',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AuthProvider: {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const TransportMode: {
  CAB: 'CAB',
  BUS: 'BUS',
  TRAIN: 'TRAIN',
  FLIGHT: 'FLIGHT',
  CAR: 'CAR',
  OTHER: 'OTHER'
};

export type TransportMode = (typeof TransportMode)[keyof typeof TransportMode]


export const CompanionRequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type CompanionRequestStatus = (typeof CompanionRequestStatus)[keyof typeof CompanionRequestStatus]


export const JourneyStatus: {
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type JourneyStatus = (typeof JourneyStatus)[keyof typeof JourneyStatus]


export const ReportStatus: {
  OPEN: 'OPEN',
  REVIEWED: 'REVIEWED',
  RESOLVED: 'RESOLVED',
  DISMISSED: 'DISMISSED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const TravelDocumentStatus: {
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CONFIRMED: 'CONFIRMED'
};

export type TravelDocumentStatus = (typeof TravelDocumentStatus)[keyof typeof TravelDocumentStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type TransportMode = $Enums.TransportMode

export const TransportMode: typeof $Enums.TransportMode

export type CompanionRequestStatus = $Enums.CompanionRequestStatus

export const CompanionRequestStatus: typeof $Enums.CompanionRequestStatus

export type JourneyStatus = $Enums.JourneyStatus

export const JourneyStatus: typeof $Enums.JourneyStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type TravelDocumentStatus = $Enums.TravelDocumentStatus

export const TravelDocumentStatus: typeof $Enums.TravelDocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshSession`: Exposes CRUD operations for the **RefreshSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshSessions
    * const refreshSessions = await prisma.refreshSession.findMany()
    * ```
    */
  get refreshSession(): Prisma.RefreshSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelOffer`: Exposes CRUD operations for the **TravelOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelOffers
    * const travelOffers = await prisma.travelOffer.findMany()
    * ```
    */
  get travelOffer(): Prisma.TravelOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelRequest`: Exposes CRUD operations for the **TravelRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelRequests
    * const travelRequests = await prisma.travelRequest.findMany()
    * ```
    */
  get travelRequest(): Prisma.TravelRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companionRequest`: Exposes CRUD operations for the **CompanionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanionRequests
    * const companionRequests = await prisma.companionRequest.findMany()
    * ```
    */
  get companionRequest(): Prisma.CompanionRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journey`: Exposes CRUD operations for the **Journey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journeys
    * const journeys = await prisma.journey.findMany()
    * ```
    */
  get journey(): Prisma.JourneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelDocument`: Exposes CRUD operations for the **TravelDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelDocuments
    * const travelDocuments = await prisma.travelDocument.findMany()
    * ```
    */
  get travelDocument(): Prisma.TravelDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshSession: 'RefreshSession',
    TravelOffer: 'TravelOffer',
    TravelRequest: 'TravelRequest',
    CompanionRequest: 'CompanionRequest',
    Journey: 'Journey',
    Message: 'Message',
    Rating: 'Rating',
    Report: 'Report',
    TravelDocument: 'TravelDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshSession" | "travelOffer" | "travelRequest" | "companionRequest" | "journey" | "message" | "rating" | "report" | "travelDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshSession: {
        payload: Prisma.$RefreshSessionPayload<ExtArgs>
        fields: Prisma.RefreshSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findFirst: {
            args: Prisma.RefreshSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findMany: {
            args: Prisma.RefreshSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          create: {
            args: Prisma.RefreshSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          createMany: {
            args: Prisma.RefreshSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          delete: {
            args: Prisma.RefreshSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          update: {
            args: Prisma.RefreshSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          deleteMany: {
            args: Prisma.RefreshSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          upsert: {
            args: Prisma.RefreshSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          aggregate: {
            args: Prisma.RefreshSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshSession>
          }
          groupBy: {
            args: Prisma.RefreshSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshSessionCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionCountAggregateOutputType> | number
          }
        }
      }
      TravelOffer: {
        payload: Prisma.$TravelOfferPayload<ExtArgs>
        fields: Prisma.TravelOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          findFirst: {
            args: Prisma.TravelOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          findMany: {
            args: Prisma.TravelOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>[]
          }
          create: {
            args: Prisma.TravelOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          createMany: {
            args: Prisma.TravelOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>[]
          }
          delete: {
            args: Prisma.TravelOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          update: {
            args: Prisma.TravelOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          deleteMany: {
            args: Prisma.TravelOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>[]
          }
          upsert: {
            args: Prisma.TravelOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelOfferPayload>
          }
          aggregate: {
            args: Prisma.TravelOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelOffer>
          }
          groupBy: {
            args: Prisma.TravelOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelOfferCountArgs<ExtArgs>
            result: $Utils.Optional<TravelOfferCountAggregateOutputType> | number
          }
        }
      }
      TravelRequest: {
        payload: Prisma.$TravelRequestPayload<ExtArgs>
        fields: Prisma.TravelRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          findFirst: {
            args: Prisma.TravelRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          findMany: {
            args: Prisma.TravelRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>[]
          }
          create: {
            args: Prisma.TravelRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          createMany: {
            args: Prisma.TravelRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>[]
          }
          delete: {
            args: Prisma.TravelRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          update: {
            args: Prisma.TravelRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          deleteMany: {
            args: Prisma.TravelRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>[]
          }
          upsert: {
            args: Prisma.TravelRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRequestPayload>
          }
          aggregate: {
            args: Prisma.TravelRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelRequest>
          }
          groupBy: {
            args: Prisma.TravelRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TravelRequestCountAggregateOutputType> | number
          }
        }
      }
      CompanionRequest: {
        payload: Prisma.$CompanionRequestPayload<ExtArgs>
        fields: Prisma.CompanionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          findFirst: {
            args: Prisma.CompanionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          findMany: {
            args: Prisma.CompanionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>[]
          }
          create: {
            args: Prisma.CompanionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          createMany: {
            args: Prisma.CompanionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanionRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>[]
          }
          delete: {
            args: Prisma.CompanionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          update: {
            args: Prisma.CompanionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          deleteMany: {
            args: Prisma.CompanionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanionRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>[]
          }
          upsert: {
            args: Prisma.CompanionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionRequestPayload>
          }
          aggregate: {
            args: Prisma.CompanionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanionRequest>
          }
          groupBy: {
            args: Prisma.CompanionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionRequestCountAggregateOutputType> | number
          }
        }
      }
      Journey: {
        payload: Prisma.$JourneyPayload<ExtArgs>
        fields: Prisma.JourneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JourneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JourneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findFirst: {
            args: Prisma.JourneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JourneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findMany: {
            args: Prisma.JourneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          create: {
            args: Prisma.JourneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          createMany: {
            args: Prisma.JourneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JourneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          delete: {
            args: Prisma.JourneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          update: {
            args: Prisma.JourneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          deleteMany: {
            args: Prisma.JourneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JourneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JourneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          upsert: {
            args: Prisma.JourneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          aggregate: {
            args: Prisma.JourneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJourney>
          }
          groupBy: {
            args: Prisma.JourneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<JourneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.JourneyCountArgs<ExtArgs>
            result: $Utils.Optional<JourneyCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      TravelDocument: {
        payload: Prisma.$TravelDocumentPayload<ExtArgs>
        fields: Prisma.TravelDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          findFirst: {
            args: Prisma.TravelDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          findMany: {
            args: Prisma.TravelDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>[]
          }
          create: {
            args: Prisma.TravelDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          createMany: {
            args: Prisma.TravelDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>[]
          }
          delete: {
            args: Prisma.TravelDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          update: {
            args: Prisma.TravelDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          deleteMany: {
            args: Prisma.TravelDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>[]
          }
          upsert: {
            args: Prisma.TravelDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelDocumentPayload>
          }
          aggregate: {
            args: Prisma.TravelDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelDocument>
          }
          groupBy: {
            args: Prisma.TravelDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<TravelDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshSession?: RefreshSessionOmit
    travelOffer?: TravelOfferOmit
    travelRequest?: TravelRequestOmit
    companionRequest?: CompanionRequestOmit
    journey?: JourneyOmit
    message?: MessageOmit
    rating?: RatingOmit
    report?: ReportOmit
    travelDocument?: TravelDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshSessions: number
    travelOffers: number
    travelRequests: number
    companionRequestsSent: number
    companionRequestsReceived: number
    messagesSent: number
    ratingsGiven: number
    ratingsReceived: number
    reportsFiled: number
    reportsReceived: number
    travelDocuments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshSessions?: boolean | UserCountOutputTypeCountRefreshSessionsArgs
    travelOffers?: boolean | UserCountOutputTypeCountTravelOffersArgs
    travelRequests?: boolean | UserCountOutputTypeCountTravelRequestsArgs
    companionRequestsSent?: boolean | UserCountOutputTypeCountCompanionRequestsSentArgs
    companionRequestsReceived?: boolean | UserCountOutputTypeCountCompanionRequestsReceivedArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    ratingsGiven?: boolean | UserCountOutputTypeCountRatingsGivenArgs
    ratingsReceived?: boolean | UserCountOutputTypeCountRatingsReceivedArgs
    reportsFiled?: boolean | UserCountOutputTypeCountReportsFiledArgs
    reportsReceived?: boolean | UserCountOutputTypeCountReportsReceivedArgs
    travelDocuments?: boolean | UserCountOutputTypeCountTravelDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelOfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanionRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanionRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsFiledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelDocumentWhereInput
  }


  /**
   * Count Type TravelOfferCountOutputType
   */

  export type TravelOfferCountOutputType = {
    companionRequests: number
  }

  export type TravelOfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionRequests?: boolean | TravelOfferCountOutputTypeCountCompanionRequestsArgs
  }

  // Custom InputTypes
  /**
   * TravelOfferCountOutputType without action
   */
  export type TravelOfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOfferCountOutputType
     */
    select?: TravelOfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelOfferCountOutputType without action
   */
  export type TravelOfferCountOutputTypeCountCompanionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionRequestWhereInput
  }


  /**
   * Count Type TravelRequestCountOutputType
   */

  export type TravelRequestCountOutputType = {
    companionRequests: number
  }

  export type TravelRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionRequests?: boolean | TravelRequestCountOutputTypeCountCompanionRequestsArgs
  }

  // Custom InputTypes
  /**
   * TravelRequestCountOutputType without action
   */
  export type TravelRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequestCountOutputType
     */
    select?: TravelRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelRequestCountOutputType without action
   */
  export type TravelRequestCountOutputTypeCountCompanionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionRequestWhereInput
  }


  /**
   * Count Type CompanionRequestCountOutputType
   */

  export type CompanionRequestCountOutputType = {
    messages: number
  }

  export type CompanionRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | CompanionRequestCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * CompanionRequestCountOutputType without action
   */
  export type CompanionRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequestCountOutputType
     */
    select?: CompanionRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanionRequestCountOutputType without action
   */
  export type CompanionRequestCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type JourneyCountOutputType
   */

  export type JourneyCountOutputType = {
    messages: number
    ratings: number
    reports: number
  }

  export type JourneyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | JourneyCountOutputTypeCountMessagesArgs
    ratings?: boolean | JourneyCountOutputTypeCountRatingsArgs
    reports?: boolean | JourneyCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JourneyCountOutputType
     */
    select?: JourneyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * JourneyCountOutputType without action
   */
  export type JourneyCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phoneNumber: string | null
    gender: $Enums.Gender | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    authProvider: $Enums.AuthProvider | null
    googleId: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    profileCompleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phoneNumber: string | null
    gender: $Enums.Gender | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    authProvider: $Enums.AuthProvider | null
    googleId: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    profileCompleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    phoneNumber: number
    gender: number
    role: number
    status: number
    authProvider: number
    googleId: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    profileCompleted: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    gender?: true
    role?: true
    status?: true
    authProvider?: true
    googleId?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    profileCompleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    gender?: true
    role?: true
    status?: true
    authProvider?: true
    googleId?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    profileCompleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phoneNumber?: true
    gender?: true
    role?: true
    status?: true
    authProvider?: true
    googleId?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    profileCompleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string | null
    phoneNumber: string | null
    gender: $Enums.Gender | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    authProvider: $Enums.AuthProvider
    googleId: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    profileCompleted: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    gender?: boolean
    role?: boolean
    status?: boolean
    authProvider?: boolean
    googleId?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileCompleted?: boolean
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    travelOffers?: boolean | User$travelOffersArgs<ExtArgs>
    travelRequests?: boolean | User$travelRequestsArgs<ExtArgs>
    companionRequestsSent?: boolean | User$companionRequestsSentArgs<ExtArgs>
    companionRequestsReceived?: boolean | User$companionRequestsReceivedArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    reportsFiled?: boolean | User$reportsFiledArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    travelDocuments?: boolean | User$travelDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    gender?: boolean
    role?: boolean
    status?: boolean
    authProvider?: boolean
    googleId?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    gender?: boolean
    role?: boolean
    status?: boolean
    authProvider?: boolean
    googleId?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phoneNumber?: boolean
    gender?: boolean
    role?: boolean
    status?: boolean
    authProvider?: boolean
    googleId?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileCompleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "phoneNumber" | "gender" | "role" | "status" | "authProvider" | "googleId" | "emailVerified" | "createdAt" | "updatedAt" | "profileCompleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    travelOffers?: boolean | User$travelOffersArgs<ExtArgs>
    travelRequests?: boolean | User$travelRequestsArgs<ExtArgs>
    companionRequestsSent?: boolean | User$companionRequestsSentArgs<ExtArgs>
    companionRequestsReceived?: boolean | User$companionRequestsReceivedArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    reportsFiled?: boolean | User$reportsFiledArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    travelDocuments?: boolean | User$travelDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshSessions: Prisma.$RefreshSessionPayload<ExtArgs>[]
      travelOffers: Prisma.$TravelOfferPayload<ExtArgs>[]
      travelRequests: Prisma.$TravelRequestPayload<ExtArgs>[]
      companionRequestsSent: Prisma.$CompanionRequestPayload<ExtArgs>[]
      companionRequestsReceived: Prisma.$CompanionRequestPayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      ratingsGiven: Prisma.$RatingPayload<ExtArgs>[]
      ratingsReceived: Prisma.$RatingPayload<ExtArgs>[]
      reportsFiled: Prisma.$ReportPayload<ExtArgs>[]
      reportsReceived: Prisma.$ReportPayload<ExtArgs>[]
      travelDocuments: Prisma.$TravelDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string | null
      phoneNumber: string | null
      gender: $Enums.Gender | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      authProvider: $Enums.AuthProvider
      googleId: string | null
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
      profileCompleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshSessions<T extends User$refreshSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travelOffers<T extends User$travelOffersArgs<ExtArgs> = {}>(args?: Subset<T, User$travelOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travelRequests<T extends User$travelRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$travelRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companionRequestsSent<T extends User$companionRequestsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$companionRequestsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companionRequestsReceived<T extends User$companionRequestsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$companionRequestsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsGiven<T extends User$ratingsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsReceived<T extends User$ratingsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsFiled<T extends User$reportsFiledArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsFiledArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsReceived<T extends User$reportsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travelDocuments<T extends User$travelDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$travelDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly profileCompleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshSessions
   */
  export type User$refreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    cursor?: RefreshSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * User.travelOffers
   */
  export type User$travelOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    where?: TravelOfferWhereInput
    orderBy?: TravelOfferOrderByWithRelationInput | TravelOfferOrderByWithRelationInput[]
    cursor?: TravelOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelOfferScalarFieldEnum | TravelOfferScalarFieldEnum[]
  }

  /**
   * User.travelRequests
   */
  export type User$travelRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    where?: TravelRequestWhereInput
    orderBy?: TravelRequestOrderByWithRelationInput | TravelRequestOrderByWithRelationInput[]
    cursor?: TravelRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelRequestScalarFieldEnum | TravelRequestScalarFieldEnum[]
  }

  /**
   * User.companionRequestsSent
   */
  export type User$companionRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    where?: CompanionRequestWhereInput
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    cursor?: CompanionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * User.companionRequestsReceived
   */
  export type User$companionRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    where?: CompanionRequestWhereInput
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    cursor?: CompanionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.ratingsGiven
   */
  export type User$ratingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.ratingsReceived
   */
  export type User$ratingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.reportsFiled
   */
  export type User$reportsFiledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reportsReceived
   */
  export type User$reportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.travelDocuments
   */
  export type User$travelDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    where?: TravelDocumentWhereInput
    orderBy?: TravelDocumentOrderByWithRelationInput | TravelDocumentOrderByWithRelationInput[]
    cursor?: TravelDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelDocumentScalarFieldEnum | TravelDocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshSession
   */

  export type AggregateRefreshSession = {
    _count: RefreshSessionCountAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  export type RefreshSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type RefreshSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type RefreshSessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type RefreshSessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type RefreshSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type RefreshSessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSession to aggregate.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshSessions
    **/
    _count?: true | RefreshSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type GetRefreshSessionAggregateType<T extends RefreshSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshSession[P]>
      : GetScalarType<T[P], AggregateRefreshSession[P]>
  }




  export type RefreshSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithAggregationInput | RefreshSessionOrderByWithAggregationInput[]
    by: RefreshSessionScalarFieldEnum[] | RefreshSessionScalarFieldEnum
    having?: RefreshSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshSessionCountAggregateInputType | true
    _min?: RefreshSessionMinAggregateInputType
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type RefreshSessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    revokedAt: Date | null
    createdAt: Date
    _count: RefreshSessionCountAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  type GetRefreshSessionGroupByPayload<T extends RefreshSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
        }
      >
    >


  export type RefreshSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type RefreshSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["refreshSession"]>
  export type RefreshSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["refreshSession"]>
    composites: {}
  }

  type RefreshSessionGetPayload<S extends boolean | null | undefined | RefreshSessionDefaultArgs> = $Result.GetResult<Prisma.$RefreshSessionPayload, S>

  type RefreshSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshSessionCountAggregateInputType | true
    }

  export interface RefreshSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshSession'], meta: { name: 'RefreshSession' } }
    /**
     * Find zero or one RefreshSession that matches the filter.
     * @param {RefreshSessionFindUniqueArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshSessionFindUniqueArgs>(args: SelectSubset<T, RefreshSessionFindUniqueArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshSessionFindUniqueOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshSessionFindFirstArgs>(args?: SelectSubset<T, RefreshSessionFindFirstArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany()
     * 
     * // Get first 10 RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshSessionFindManyArgs>(args?: SelectSubset<T, RefreshSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshSession.
     * @param {RefreshSessionCreateArgs} args - Arguments to create a RefreshSession.
     * @example
     * // Create one RefreshSession
     * const RefreshSession = await prisma.refreshSession.create({
     *   data: {
     *     // ... data to create a RefreshSession
     *   }
     * })
     * 
     */
    create<T extends RefreshSessionCreateArgs>(args: SelectSubset<T, RefreshSessionCreateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshSessions.
     * @param {RefreshSessionCreateManyArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshSessionCreateManyArgs>(args?: SelectSubset<T, RefreshSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshSessions and returns the data saved in the database.
     * @param {RefreshSessionCreateManyAndReturnArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshSessions and only return the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshSession.
     * @param {RefreshSessionDeleteArgs} args - Arguments to delete one RefreshSession.
     * @example
     * // Delete one RefreshSession
     * const RefreshSession = await prisma.refreshSession.delete({
     *   where: {
     *     // ... filter to delete one RefreshSession
     *   }
     * })
     * 
     */
    delete<T extends RefreshSessionDeleteArgs>(args: SelectSubset<T, RefreshSessionDeleteArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshSession.
     * @param {RefreshSessionUpdateArgs} args - Arguments to update one RefreshSession.
     * @example
     * // Update one RefreshSession
     * const refreshSession = await prisma.refreshSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshSessionUpdateArgs>(args: SelectSubset<T, RefreshSessionUpdateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshSessions.
     * @param {RefreshSessionDeleteManyArgs} args - Arguments to filter RefreshSessions to delete.
     * @example
     * // Delete a few RefreshSessions
     * const { count } = await prisma.refreshSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshSessionDeleteManyArgs>(args?: SelectSubset<T, RefreshSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshSessionUpdateManyArgs>(args: SelectSubset<T, RefreshSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions and returns the data updated in the database.
     * @param {RefreshSessionUpdateManyAndReturnArgs} args - Arguments to update many RefreshSessions.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshSessions and only return the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshSession.
     * @param {RefreshSessionUpsertArgs} args - Arguments to update or create a RefreshSession.
     * @example
     * // Update or create a RefreshSession
     * const refreshSession = await prisma.refreshSession.upsert({
     *   create: {
     *     // ... data to create a RefreshSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshSession we want to update
     *   }
     * })
     */
    upsert<T extends RefreshSessionUpsertArgs>(args: SelectSubset<T, RefreshSessionUpsertArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionCountArgs} args - Arguments to filter RefreshSessions to count.
     * @example
     * // Count the number of RefreshSessions
     * const count = await prisma.refreshSession.count({
     *   where: {
     *     // ... the filter for the RefreshSessions we want to count
     *   }
     * })
    **/
    count<T extends RefreshSessionCountArgs>(
      args?: Subset<T, RefreshSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshSessionAggregateArgs>(args: Subset<T, RefreshSessionAggregateArgs>): Prisma.PrismaPromise<GetRefreshSessionAggregateType<T>>

    /**
     * Group by RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshSessionGroupByArgs['orderBy'] }
        : { orderBy?: RefreshSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshSession model
   */
  readonly fields: RefreshSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshSession model
   */
  interface RefreshSessionFieldRefs {
    readonly id: FieldRef<"RefreshSession", 'String'>
    readonly userId: FieldRef<"RefreshSession", 'String'>
    readonly tokenHash: FieldRef<"RefreshSession", 'String'>
    readonly expiresAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshSession findUnique
   */
  export type RefreshSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findUniqueOrThrow
   */
  export type RefreshSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findFirst
   */
  export type RefreshSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findFirstOrThrow
   */
  export type RefreshSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findMany
   */
  export type RefreshSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSessions to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession create
   */
  export type RefreshSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshSession.
     */
    data: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
  }

  /**
   * RefreshSession createMany
   */
  export type RefreshSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshSession createManyAndReturn
   */
  export type RefreshSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession update
   */
  export type RefreshSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshSession.
     */
    data: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
    /**
     * Choose, which RefreshSession to update.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession updateMany
   */
  export type RefreshSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
  }

  /**
   * RefreshSession updateManyAndReturn
   */
  export type RefreshSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession upsert
   */
  export type RefreshSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshSession to update in case it exists.
     */
    where: RefreshSessionWhereUniqueInput
    /**
     * In case the RefreshSession found by the `where` argument doesn't exist, create a new RefreshSession with this data.
     */
    create: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
    /**
     * In case the RefreshSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
  }

  /**
   * RefreshSession delete
   */
  export type RefreshSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter which RefreshSession to delete.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession deleteMany
   */
  export type RefreshSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSessions to delete
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to delete.
     */
    limit?: number
  }

  /**
   * RefreshSession without action
   */
  export type RefreshSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
  }


  /**
   * Model TravelOffer
   */

  export type AggregateTravelOffer = {
    _count: TravelOfferCountAggregateOutputType | null
    _avg: TravelOfferAvgAggregateOutputType | null
    _sum: TravelOfferSumAggregateOutputType | null
    _min: TravelOfferMinAggregateOutputType | null
    _max: TravelOfferMaxAggregateOutputType | null
  }

  export type TravelOfferAvgAggregateOutputType = {
    availableSeats: number | null
  }

  export type TravelOfferSumAggregateOutputType = {
    availableSeats: number | null
  }

  export type TravelOfferMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    expiresAt: Date | null
    transportMode: $Enums.TransportMode | null
    availableSeats: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelOfferMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    expiresAt: Date | null
    transportMode: $Enums.TransportMode | null
    availableSeats: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelOfferCountAggregateOutputType = {
    id: number
    ownerId: number
    source: number
    destination: number
    departureAt: number
    expiresAt: number
    transportMode: number
    availableSeats: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelOfferAvgAggregateInputType = {
    availableSeats?: true
  }

  export type TravelOfferSumAggregateInputType = {
    availableSeats?: true
  }

  export type TravelOfferMinAggregateInputType = {
    id?: true
    ownerId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    availableSeats?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelOfferMaxAggregateInputType = {
    id?: true
    ownerId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    availableSeats?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelOfferCountAggregateInputType = {
    id?: true
    ownerId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    availableSeats?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelOffer to aggregate.
     */
    where?: TravelOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelOffers to fetch.
     */
    orderBy?: TravelOfferOrderByWithRelationInput | TravelOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelOffers
    **/
    _count?: true | TravelOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelOfferMaxAggregateInputType
  }

  export type GetTravelOfferAggregateType<T extends TravelOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelOffer[P]>
      : GetScalarType<T[P], AggregateTravelOffer[P]>
  }




  export type TravelOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelOfferWhereInput
    orderBy?: TravelOfferOrderByWithAggregationInput | TravelOfferOrderByWithAggregationInput[]
    by: TravelOfferScalarFieldEnum[] | TravelOfferScalarFieldEnum
    having?: TravelOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelOfferCountAggregateInputType | true
    _avg?: TravelOfferAvgAggregateInputType
    _sum?: TravelOfferSumAggregateInputType
    _min?: TravelOfferMinAggregateInputType
    _max?: TravelOfferMaxAggregateInputType
  }

  export type TravelOfferGroupByOutputType = {
    id: string
    ownerId: string
    source: string
    destination: string
    departureAt: Date
    expiresAt: Date
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TravelOfferCountAggregateOutputType | null
    _avg: TravelOfferAvgAggregateOutputType | null
    _sum: TravelOfferSumAggregateOutputType | null
    _min: TravelOfferMinAggregateOutputType | null
    _max: TravelOfferMaxAggregateOutputType | null
  }

  type GetTravelOfferGroupByPayload<T extends TravelOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelOfferGroupByOutputType[P]>
            : GetScalarType<T[P], TravelOfferGroupByOutputType[P]>
        }
      >
    >


  export type TravelOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    availableSeats?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    companionRequests?: boolean | TravelOffer$companionRequestsArgs<ExtArgs>
    _count?: boolean | TravelOfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelOffer"]>

  export type TravelOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    availableSeats?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelOffer"]>

  export type TravelOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    availableSeats?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelOffer"]>

  export type TravelOfferSelectScalar = {
    id?: boolean
    ownerId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    availableSeats?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "source" | "destination" | "departureAt" | "expiresAt" | "transportMode" | "availableSeats" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["travelOffer"]>
  export type TravelOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    companionRequests?: boolean | TravelOffer$companionRequestsArgs<ExtArgs>
    _count?: boolean | TravelOfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelOffer"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      companionRequests: Prisma.$CompanionRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      source: string
      destination: string
      departureAt: Date
      expiresAt: Date
      transportMode: $Enums.TransportMode
      availableSeats: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelOffer"]>
    composites: {}
  }

  type TravelOfferGetPayload<S extends boolean | null | undefined | TravelOfferDefaultArgs> = $Result.GetResult<Prisma.$TravelOfferPayload, S>

  type TravelOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelOfferCountAggregateInputType | true
    }

  export interface TravelOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelOffer'], meta: { name: 'TravelOffer' } }
    /**
     * Find zero or one TravelOffer that matches the filter.
     * @param {TravelOfferFindUniqueArgs} args - Arguments to find a TravelOffer
     * @example
     * // Get one TravelOffer
     * const travelOffer = await prisma.travelOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelOfferFindUniqueArgs>(args: SelectSubset<T, TravelOfferFindUniqueArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelOfferFindUniqueOrThrowArgs} args - Arguments to find a TravelOffer
     * @example
     * // Get one TravelOffer
     * const travelOffer = await prisma.travelOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferFindFirstArgs} args - Arguments to find a TravelOffer
     * @example
     * // Get one TravelOffer
     * const travelOffer = await prisma.travelOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelOfferFindFirstArgs>(args?: SelectSubset<T, TravelOfferFindFirstArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferFindFirstOrThrowArgs} args - Arguments to find a TravelOffer
     * @example
     * // Get one TravelOffer
     * const travelOffer = await prisma.travelOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelOffers
     * const travelOffers = await prisma.travelOffer.findMany()
     * 
     * // Get first 10 TravelOffers
     * const travelOffers = await prisma.travelOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelOfferWithIdOnly = await prisma.travelOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelOfferFindManyArgs>(args?: SelectSubset<T, TravelOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelOffer.
     * @param {TravelOfferCreateArgs} args - Arguments to create a TravelOffer.
     * @example
     * // Create one TravelOffer
     * const TravelOffer = await prisma.travelOffer.create({
     *   data: {
     *     // ... data to create a TravelOffer
     *   }
     * })
     * 
     */
    create<T extends TravelOfferCreateArgs>(args: SelectSubset<T, TravelOfferCreateArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelOffers.
     * @param {TravelOfferCreateManyArgs} args - Arguments to create many TravelOffers.
     * @example
     * // Create many TravelOffers
     * const travelOffer = await prisma.travelOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelOfferCreateManyArgs>(args?: SelectSubset<T, TravelOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelOffers and returns the data saved in the database.
     * @param {TravelOfferCreateManyAndReturnArgs} args - Arguments to create many TravelOffers.
     * @example
     * // Create many TravelOffers
     * const travelOffer = await prisma.travelOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelOffers and only return the `id`
     * const travelOfferWithIdOnly = await prisma.travelOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelOffer.
     * @param {TravelOfferDeleteArgs} args - Arguments to delete one TravelOffer.
     * @example
     * // Delete one TravelOffer
     * const TravelOffer = await prisma.travelOffer.delete({
     *   where: {
     *     // ... filter to delete one TravelOffer
     *   }
     * })
     * 
     */
    delete<T extends TravelOfferDeleteArgs>(args: SelectSubset<T, TravelOfferDeleteArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelOffer.
     * @param {TravelOfferUpdateArgs} args - Arguments to update one TravelOffer.
     * @example
     * // Update one TravelOffer
     * const travelOffer = await prisma.travelOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelOfferUpdateArgs>(args: SelectSubset<T, TravelOfferUpdateArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelOffers.
     * @param {TravelOfferDeleteManyArgs} args - Arguments to filter TravelOffers to delete.
     * @example
     * // Delete a few TravelOffers
     * const { count } = await prisma.travelOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelOfferDeleteManyArgs>(args?: SelectSubset<T, TravelOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelOffers
     * const travelOffer = await prisma.travelOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelOfferUpdateManyArgs>(args: SelectSubset<T, TravelOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelOffers and returns the data updated in the database.
     * @param {TravelOfferUpdateManyAndReturnArgs} args - Arguments to update many TravelOffers.
     * @example
     * // Update many TravelOffers
     * const travelOffer = await prisma.travelOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelOffers and only return the `id`
     * const travelOfferWithIdOnly = await prisma.travelOffer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelOffer.
     * @param {TravelOfferUpsertArgs} args - Arguments to update or create a TravelOffer.
     * @example
     * // Update or create a TravelOffer
     * const travelOffer = await prisma.travelOffer.upsert({
     *   create: {
     *     // ... data to create a TravelOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelOffer we want to update
     *   }
     * })
     */
    upsert<T extends TravelOfferUpsertArgs>(args: SelectSubset<T, TravelOfferUpsertArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferCountArgs} args - Arguments to filter TravelOffers to count.
     * @example
     * // Count the number of TravelOffers
     * const count = await prisma.travelOffer.count({
     *   where: {
     *     // ... the filter for the TravelOffers we want to count
     *   }
     * })
    **/
    count<T extends TravelOfferCountArgs>(
      args?: Subset<T, TravelOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelOfferAggregateArgs>(args: Subset<T, TravelOfferAggregateArgs>): Prisma.PrismaPromise<GetTravelOfferAggregateType<T>>

    /**
     * Group by TravelOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelOfferGroupByArgs['orderBy'] }
        : { orderBy?: TravelOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelOffer model
   */
  readonly fields: TravelOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    companionRequests<T extends TravelOffer$companionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, TravelOffer$companionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelOffer model
   */
  interface TravelOfferFieldRefs {
    readonly id: FieldRef<"TravelOffer", 'String'>
    readonly ownerId: FieldRef<"TravelOffer", 'String'>
    readonly source: FieldRef<"TravelOffer", 'String'>
    readonly destination: FieldRef<"TravelOffer", 'String'>
    readonly departureAt: FieldRef<"TravelOffer", 'DateTime'>
    readonly expiresAt: FieldRef<"TravelOffer", 'DateTime'>
    readonly transportMode: FieldRef<"TravelOffer", 'TransportMode'>
    readonly availableSeats: FieldRef<"TravelOffer", 'Int'>
    readonly isActive: FieldRef<"TravelOffer", 'Boolean'>
    readonly createdAt: FieldRef<"TravelOffer", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelOffer findUnique
   */
  export type TravelOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter, which TravelOffer to fetch.
     */
    where: TravelOfferWhereUniqueInput
  }

  /**
   * TravelOffer findUniqueOrThrow
   */
  export type TravelOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter, which TravelOffer to fetch.
     */
    where: TravelOfferWhereUniqueInput
  }

  /**
   * TravelOffer findFirst
   */
  export type TravelOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter, which TravelOffer to fetch.
     */
    where?: TravelOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelOffers to fetch.
     */
    orderBy?: TravelOfferOrderByWithRelationInput | TravelOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelOffers.
     */
    cursor?: TravelOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelOffers.
     */
    distinct?: TravelOfferScalarFieldEnum | TravelOfferScalarFieldEnum[]
  }

  /**
   * TravelOffer findFirstOrThrow
   */
  export type TravelOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter, which TravelOffer to fetch.
     */
    where?: TravelOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelOffers to fetch.
     */
    orderBy?: TravelOfferOrderByWithRelationInput | TravelOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelOffers.
     */
    cursor?: TravelOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelOffers.
     */
    distinct?: TravelOfferScalarFieldEnum | TravelOfferScalarFieldEnum[]
  }

  /**
   * TravelOffer findMany
   */
  export type TravelOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter, which TravelOffers to fetch.
     */
    where?: TravelOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelOffers to fetch.
     */
    orderBy?: TravelOfferOrderByWithRelationInput | TravelOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelOffers.
     */
    cursor?: TravelOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelOffers.
     */
    distinct?: TravelOfferScalarFieldEnum | TravelOfferScalarFieldEnum[]
  }

  /**
   * TravelOffer create
   */
  export type TravelOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelOffer.
     */
    data: XOR<TravelOfferCreateInput, TravelOfferUncheckedCreateInput>
  }

  /**
   * TravelOffer createMany
   */
  export type TravelOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelOffers.
     */
    data: TravelOfferCreateManyInput | TravelOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelOffer createManyAndReturn
   */
  export type TravelOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * The data used to create many TravelOffers.
     */
    data: TravelOfferCreateManyInput | TravelOfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelOffer update
   */
  export type TravelOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelOffer.
     */
    data: XOR<TravelOfferUpdateInput, TravelOfferUncheckedUpdateInput>
    /**
     * Choose, which TravelOffer to update.
     */
    where: TravelOfferWhereUniqueInput
  }

  /**
   * TravelOffer updateMany
   */
  export type TravelOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelOffers.
     */
    data: XOR<TravelOfferUpdateManyMutationInput, TravelOfferUncheckedUpdateManyInput>
    /**
     * Filter which TravelOffers to update
     */
    where?: TravelOfferWhereInput
    /**
     * Limit how many TravelOffers to update.
     */
    limit?: number
  }

  /**
   * TravelOffer updateManyAndReturn
   */
  export type TravelOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * The data used to update TravelOffers.
     */
    data: XOR<TravelOfferUpdateManyMutationInput, TravelOfferUncheckedUpdateManyInput>
    /**
     * Filter which TravelOffers to update
     */
    where?: TravelOfferWhereInput
    /**
     * Limit how many TravelOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelOffer upsert
   */
  export type TravelOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelOffer to update in case it exists.
     */
    where: TravelOfferWhereUniqueInput
    /**
     * In case the TravelOffer found by the `where` argument doesn't exist, create a new TravelOffer with this data.
     */
    create: XOR<TravelOfferCreateInput, TravelOfferUncheckedCreateInput>
    /**
     * In case the TravelOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelOfferUpdateInput, TravelOfferUncheckedUpdateInput>
  }

  /**
   * TravelOffer delete
   */
  export type TravelOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
    /**
     * Filter which TravelOffer to delete.
     */
    where: TravelOfferWhereUniqueInput
  }

  /**
   * TravelOffer deleteMany
   */
  export type TravelOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelOffers to delete
     */
    where?: TravelOfferWhereInput
    /**
     * Limit how many TravelOffers to delete.
     */
    limit?: number
  }

  /**
   * TravelOffer.companionRequests
   */
  export type TravelOffer$companionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    where?: CompanionRequestWhereInput
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    cursor?: CompanionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * TravelOffer without action
   */
  export type TravelOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelOffer
     */
    select?: TravelOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelOffer
     */
    omit?: TravelOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelOfferInclude<ExtArgs> | null
  }


  /**
   * Model TravelRequest
   */

  export type AggregateTravelRequest = {
    _count: TravelRequestCountAggregateOutputType | null
    _avg: TravelRequestAvgAggregateOutputType | null
    _sum: TravelRequestSumAggregateOutputType | null
    _min: TravelRequestMinAggregateOutputType | null
    _max: TravelRequestMaxAggregateOutputType | null
  }

  export type TravelRequestAvgAggregateOutputType = {
    passengersRequired: number | null
  }

  export type TravelRequestSumAggregateOutputType = {
    passengersRequired: number | null
  }

  export type TravelRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    expiresAt: Date | null
    transportMode: $Enums.TransportMode | null
    passengersRequired: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    expiresAt: Date | null
    transportMode: $Enums.TransportMode | null
    passengersRequired: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelRequestCountAggregateOutputType = {
    id: number
    userId: number
    source: number
    destination: number
    departureAt: number
    expiresAt: number
    transportMode: number
    passengersRequired: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelRequestAvgAggregateInputType = {
    passengersRequired?: true
  }

  export type TravelRequestSumAggregateInputType = {
    passengersRequired?: true
  }

  export type TravelRequestMinAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    passengersRequired?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    passengersRequired?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelRequestCountAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    destination?: true
    departureAt?: true
    expiresAt?: true
    transportMode?: true
    passengersRequired?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelRequest to aggregate.
     */
    where?: TravelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRequests to fetch.
     */
    orderBy?: TravelRequestOrderByWithRelationInput | TravelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelRequests
    **/
    _count?: true | TravelRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelRequestMaxAggregateInputType
  }

  export type GetTravelRequestAggregateType<T extends TravelRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelRequest[P]>
      : GetScalarType<T[P], AggregateTravelRequest[P]>
  }




  export type TravelRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelRequestWhereInput
    orderBy?: TravelRequestOrderByWithAggregationInput | TravelRequestOrderByWithAggregationInput[]
    by: TravelRequestScalarFieldEnum[] | TravelRequestScalarFieldEnum
    having?: TravelRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelRequestCountAggregateInputType | true
    _avg?: TravelRequestAvgAggregateInputType
    _sum?: TravelRequestSumAggregateInputType
    _min?: TravelRequestMinAggregateInputType
    _max?: TravelRequestMaxAggregateInputType
  }

  export type TravelRequestGroupByOutputType = {
    id: string
    userId: string
    source: string
    destination: string
    departureAt: Date
    expiresAt: Date
    transportMode: $Enums.TransportMode | null
    passengersRequired: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TravelRequestCountAggregateOutputType | null
    _avg: TravelRequestAvgAggregateOutputType | null
    _sum: TravelRequestSumAggregateOutputType | null
    _min: TravelRequestMinAggregateOutputType | null
    _max: TravelRequestMaxAggregateOutputType | null
  }

  type GetTravelRequestGroupByPayload<T extends TravelRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TravelRequestGroupByOutputType[P]>
        }
      >
    >


  export type TravelRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    passengersRequired?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    companionRequests?: boolean | TravelRequest$companionRequestsArgs<ExtArgs>
    _count?: boolean | TravelRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelRequest"]>

  export type TravelRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    passengersRequired?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelRequest"]>

  export type TravelRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    passengersRequired?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelRequest"]>

  export type TravelRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    expiresAt?: boolean
    transportMode?: boolean
    passengersRequired?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "source" | "destination" | "departureAt" | "expiresAt" | "transportMode" | "passengersRequired" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["travelRequest"]>
  export type TravelRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    companionRequests?: boolean | TravelRequest$companionRequestsArgs<ExtArgs>
    _count?: boolean | TravelRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      companionRequests: Prisma.$CompanionRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      source: string
      destination: string
      departureAt: Date
      expiresAt: Date
      transportMode: $Enums.TransportMode | null
      passengersRequired: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelRequest"]>
    composites: {}
  }

  type TravelRequestGetPayload<S extends boolean | null | undefined | TravelRequestDefaultArgs> = $Result.GetResult<Prisma.$TravelRequestPayload, S>

  type TravelRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelRequestCountAggregateInputType | true
    }

  export interface TravelRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelRequest'], meta: { name: 'TravelRequest' } }
    /**
     * Find zero or one TravelRequest that matches the filter.
     * @param {TravelRequestFindUniqueArgs} args - Arguments to find a TravelRequest
     * @example
     * // Get one TravelRequest
     * const travelRequest = await prisma.travelRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelRequestFindUniqueArgs>(args: SelectSubset<T, TravelRequestFindUniqueArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelRequestFindUniqueOrThrowArgs} args - Arguments to find a TravelRequest
     * @example
     * // Get one TravelRequest
     * const travelRequest = await prisma.travelRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestFindFirstArgs} args - Arguments to find a TravelRequest
     * @example
     * // Get one TravelRequest
     * const travelRequest = await prisma.travelRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelRequestFindFirstArgs>(args?: SelectSubset<T, TravelRequestFindFirstArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestFindFirstOrThrowArgs} args - Arguments to find a TravelRequest
     * @example
     * // Get one TravelRequest
     * const travelRequest = await prisma.travelRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelRequests
     * const travelRequests = await prisma.travelRequest.findMany()
     * 
     * // Get first 10 TravelRequests
     * const travelRequests = await prisma.travelRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelRequestWithIdOnly = await prisma.travelRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelRequestFindManyArgs>(args?: SelectSubset<T, TravelRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelRequest.
     * @param {TravelRequestCreateArgs} args - Arguments to create a TravelRequest.
     * @example
     * // Create one TravelRequest
     * const TravelRequest = await prisma.travelRequest.create({
     *   data: {
     *     // ... data to create a TravelRequest
     *   }
     * })
     * 
     */
    create<T extends TravelRequestCreateArgs>(args: SelectSubset<T, TravelRequestCreateArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelRequests.
     * @param {TravelRequestCreateManyArgs} args - Arguments to create many TravelRequests.
     * @example
     * // Create many TravelRequests
     * const travelRequest = await prisma.travelRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelRequestCreateManyArgs>(args?: SelectSubset<T, TravelRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelRequests and returns the data saved in the database.
     * @param {TravelRequestCreateManyAndReturnArgs} args - Arguments to create many TravelRequests.
     * @example
     * // Create many TravelRequests
     * const travelRequest = await prisma.travelRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelRequests and only return the `id`
     * const travelRequestWithIdOnly = await prisma.travelRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelRequest.
     * @param {TravelRequestDeleteArgs} args - Arguments to delete one TravelRequest.
     * @example
     * // Delete one TravelRequest
     * const TravelRequest = await prisma.travelRequest.delete({
     *   where: {
     *     // ... filter to delete one TravelRequest
     *   }
     * })
     * 
     */
    delete<T extends TravelRequestDeleteArgs>(args: SelectSubset<T, TravelRequestDeleteArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelRequest.
     * @param {TravelRequestUpdateArgs} args - Arguments to update one TravelRequest.
     * @example
     * // Update one TravelRequest
     * const travelRequest = await prisma.travelRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelRequestUpdateArgs>(args: SelectSubset<T, TravelRequestUpdateArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelRequests.
     * @param {TravelRequestDeleteManyArgs} args - Arguments to filter TravelRequests to delete.
     * @example
     * // Delete a few TravelRequests
     * const { count } = await prisma.travelRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelRequestDeleteManyArgs>(args?: SelectSubset<T, TravelRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelRequests
     * const travelRequest = await prisma.travelRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelRequestUpdateManyArgs>(args: SelectSubset<T, TravelRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelRequests and returns the data updated in the database.
     * @param {TravelRequestUpdateManyAndReturnArgs} args - Arguments to update many TravelRequests.
     * @example
     * // Update many TravelRequests
     * const travelRequest = await prisma.travelRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelRequests and only return the `id`
     * const travelRequestWithIdOnly = await prisma.travelRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelRequest.
     * @param {TravelRequestUpsertArgs} args - Arguments to update or create a TravelRequest.
     * @example
     * // Update or create a TravelRequest
     * const travelRequest = await prisma.travelRequest.upsert({
     *   create: {
     *     // ... data to create a TravelRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelRequest we want to update
     *   }
     * })
     */
    upsert<T extends TravelRequestUpsertArgs>(args: SelectSubset<T, TravelRequestUpsertArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestCountArgs} args - Arguments to filter TravelRequests to count.
     * @example
     * // Count the number of TravelRequests
     * const count = await prisma.travelRequest.count({
     *   where: {
     *     // ... the filter for the TravelRequests we want to count
     *   }
     * })
    **/
    count<T extends TravelRequestCountArgs>(
      args?: Subset<T, TravelRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelRequestAggregateArgs>(args: Subset<T, TravelRequestAggregateArgs>): Prisma.PrismaPromise<GetTravelRequestAggregateType<T>>

    /**
     * Group by TravelRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelRequestGroupByArgs['orderBy'] }
        : { orderBy?: TravelRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelRequest model
   */
  readonly fields: TravelRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    companionRequests<T extends TravelRequest$companionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, TravelRequest$companionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelRequest model
   */
  interface TravelRequestFieldRefs {
    readonly id: FieldRef<"TravelRequest", 'String'>
    readonly userId: FieldRef<"TravelRequest", 'String'>
    readonly source: FieldRef<"TravelRequest", 'String'>
    readonly destination: FieldRef<"TravelRequest", 'String'>
    readonly departureAt: FieldRef<"TravelRequest", 'DateTime'>
    readonly expiresAt: FieldRef<"TravelRequest", 'DateTime'>
    readonly transportMode: FieldRef<"TravelRequest", 'TransportMode'>
    readonly passengersRequired: FieldRef<"TravelRequest", 'Int'>
    readonly isActive: FieldRef<"TravelRequest", 'Boolean'>
    readonly createdAt: FieldRef<"TravelRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelRequest findUnique
   */
  export type TravelRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelRequest to fetch.
     */
    where: TravelRequestWhereUniqueInput
  }

  /**
   * TravelRequest findUniqueOrThrow
   */
  export type TravelRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelRequest to fetch.
     */
    where: TravelRequestWhereUniqueInput
  }

  /**
   * TravelRequest findFirst
   */
  export type TravelRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelRequest to fetch.
     */
    where?: TravelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRequests to fetch.
     */
    orderBy?: TravelRequestOrderByWithRelationInput | TravelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelRequests.
     */
    cursor?: TravelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRequests.
     */
    distinct?: TravelRequestScalarFieldEnum | TravelRequestScalarFieldEnum[]
  }

  /**
   * TravelRequest findFirstOrThrow
   */
  export type TravelRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelRequest to fetch.
     */
    where?: TravelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRequests to fetch.
     */
    orderBy?: TravelRequestOrderByWithRelationInput | TravelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelRequests.
     */
    cursor?: TravelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRequests.
     */
    distinct?: TravelRequestScalarFieldEnum | TravelRequestScalarFieldEnum[]
  }

  /**
   * TravelRequest findMany
   */
  export type TravelRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelRequests to fetch.
     */
    where?: TravelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRequests to fetch.
     */
    orderBy?: TravelRequestOrderByWithRelationInput | TravelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelRequests.
     */
    cursor?: TravelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRequests.
     */
    distinct?: TravelRequestScalarFieldEnum | TravelRequestScalarFieldEnum[]
  }

  /**
   * TravelRequest create
   */
  export type TravelRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelRequest.
     */
    data: XOR<TravelRequestCreateInput, TravelRequestUncheckedCreateInput>
  }

  /**
   * TravelRequest createMany
   */
  export type TravelRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelRequests.
     */
    data: TravelRequestCreateManyInput | TravelRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelRequest createManyAndReturn
   */
  export type TravelRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TravelRequests.
     */
    data: TravelRequestCreateManyInput | TravelRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelRequest update
   */
  export type TravelRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelRequest.
     */
    data: XOR<TravelRequestUpdateInput, TravelRequestUncheckedUpdateInput>
    /**
     * Choose, which TravelRequest to update.
     */
    where: TravelRequestWhereUniqueInput
  }

  /**
   * TravelRequest updateMany
   */
  export type TravelRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelRequests.
     */
    data: XOR<TravelRequestUpdateManyMutationInput, TravelRequestUncheckedUpdateManyInput>
    /**
     * Filter which TravelRequests to update
     */
    where?: TravelRequestWhereInput
    /**
     * Limit how many TravelRequests to update.
     */
    limit?: number
  }

  /**
   * TravelRequest updateManyAndReturn
   */
  export type TravelRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * The data used to update TravelRequests.
     */
    data: XOR<TravelRequestUpdateManyMutationInput, TravelRequestUncheckedUpdateManyInput>
    /**
     * Filter which TravelRequests to update
     */
    where?: TravelRequestWhereInput
    /**
     * Limit how many TravelRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelRequest upsert
   */
  export type TravelRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelRequest to update in case it exists.
     */
    where: TravelRequestWhereUniqueInput
    /**
     * In case the TravelRequest found by the `where` argument doesn't exist, create a new TravelRequest with this data.
     */
    create: XOR<TravelRequestCreateInput, TravelRequestUncheckedCreateInput>
    /**
     * In case the TravelRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelRequestUpdateInput, TravelRequestUncheckedUpdateInput>
  }

  /**
   * TravelRequest delete
   */
  export type TravelRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
    /**
     * Filter which TravelRequest to delete.
     */
    where: TravelRequestWhereUniqueInput
  }

  /**
   * TravelRequest deleteMany
   */
  export type TravelRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelRequests to delete
     */
    where?: TravelRequestWhereInput
    /**
     * Limit how many TravelRequests to delete.
     */
    limit?: number
  }

  /**
   * TravelRequest.companionRequests
   */
  export type TravelRequest$companionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    where?: CompanionRequestWhereInput
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    cursor?: CompanionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * TravelRequest without action
   */
  export type TravelRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRequest
     */
    select?: TravelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRequest
     */
    omit?: TravelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRequestInclude<ExtArgs> | null
  }


  /**
   * Model CompanionRequest
   */

  export type AggregateCompanionRequest = {
    _count: CompanionRequestCountAggregateOutputType | null
    _min: CompanionRequestMinAggregateOutputType | null
    _max: CompanionRequestMaxAggregateOutputType | null
  }

  export type CompanionRequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    recipientId: string | null
    travelRequestId: string | null
    offerId: string | null
    status: $Enums.CompanionRequestStatus | null
    expiresAt: Date | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionRequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    recipientId: string | null
    travelRequestId: string | null
    offerId: string | null
    status: $Enums.CompanionRequestStatus | null
    expiresAt: Date | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionRequestCountAggregateOutputType = {
    id: number
    senderId: number
    recipientId: number
    travelRequestId: number
    offerId: number
    status: number
    expiresAt: number
    respondedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanionRequestMinAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    travelRequestId?: true
    offerId?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionRequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    travelRequestId?: true
    offerId?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionRequestCountAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    travelRequestId?: true
    offerId?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionRequest to aggregate.
     */
    where?: CompanionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionRequests to fetch.
     */
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanionRequests
    **/
    _count?: true | CompanionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionRequestMaxAggregateInputType
  }

  export type GetCompanionRequestAggregateType<T extends CompanionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanionRequest[P]>
      : GetScalarType<T[P], AggregateCompanionRequest[P]>
  }




  export type CompanionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionRequestWhereInput
    orderBy?: CompanionRequestOrderByWithAggregationInput | CompanionRequestOrderByWithAggregationInput[]
    by: CompanionRequestScalarFieldEnum[] | CompanionRequestScalarFieldEnum
    having?: CompanionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionRequestCountAggregateInputType | true
    _min?: CompanionRequestMinAggregateInputType
    _max?: CompanionRequestMaxAggregateInputType
  }

  export type CompanionRequestGroupByOutputType = {
    id: string
    senderId: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status: $Enums.CompanionRequestStatus
    expiresAt: Date
    respondedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CompanionRequestCountAggregateOutputType | null
    _min: CompanionRequestMinAggregateOutputType | null
    _max: CompanionRequestMaxAggregateOutputType | null
  }

  type GetCompanionRequestGroupByPayload<T extends CompanionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionRequestGroupByOutputType[P]>
        }
      >
    >


  export type CompanionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    travelRequestId?: boolean
    offerId?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
    journey?: boolean | CompanionRequest$journeyArgs<ExtArgs>
    messages?: boolean | CompanionRequest$messagesArgs<ExtArgs>
    _count?: boolean | CompanionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionRequest"]>

  export type CompanionRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    travelRequestId?: boolean
    offerId?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionRequest"]>

  export type CompanionRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    travelRequestId?: boolean
    offerId?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionRequest"]>

  export type CompanionRequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    recipientId?: boolean
    travelRequestId?: boolean
    offerId?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "recipientId" | "travelRequestId" | "offerId" | "status" | "expiresAt" | "respondedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["companionRequest"]>
  export type CompanionRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
    journey?: boolean | CompanionRequest$journeyArgs<ExtArgs>
    messages?: boolean | CompanionRequest$messagesArgs<ExtArgs>
    _count?: boolean | CompanionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanionRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
  }
  export type CompanionRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    travelRequest?: boolean | TravelRequestDefaultArgs<ExtArgs>
    offer?: boolean | TravelOfferDefaultArgs<ExtArgs>
  }

  export type $CompanionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanionRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
      travelRequest: Prisma.$TravelRequestPayload<ExtArgs>
      offer: Prisma.$TravelOfferPayload<ExtArgs>
      journey: Prisma.$JourneyPayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      recipientId: string
      travelRequestId: string
      offerId: string
      status: $Enums.CompanionRequestStatus
      expiresAt: Date
      respondedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companionRequest"]>
    composites: {}
  }

  type CompanionRequestGetPayload<S extends boolean | null | undefined | CompanionRequestDefaultArgs> = $Result.GetResult<Prisma.$CompanionRequestPayload, S>

  type CompanionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionRequestCountAggregateInputType | true
    }

  export interface CompanionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanionRequest'], meta: { name: 'CompanionRequest' } }
    /**
     * Find zero or one CompanionRequest that matches the filter.
     * @param {CompanionRequestFindUniqueArgs} args - Arguments to find a CompanionRequest
     * @example
     * // Get one CompanionRequest
     * const companionRequest = await prisma.companionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionRequestFindUniqueArgs>(args: SelectSubset<T, CompanionRequestFindUniqueArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionRequestFindUniqueOrThrowArgs} args - Arguments to find a CompanionRequest
     * @example
     * // Get one CompanionRequest
     * const companionRequest = await prisma.companionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestFindFirstArgs} args - Arguments to find a CompanionRequest
     * @example
     * // Get one CompanionRequest
     * const companionRequest = await prisma.companionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionRequestFindFirstArgs>(args?: SelectSubset<T, CompanionRequestFindFirstArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestFindFirstOrThrowArgs} args - Arguments to find a CompanionRequest
     * @example
     * // Get one CompanionRequest
     * const companionRequest = await prisma.companionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanionRequests
     * const companionRequests = await prisma.companionRequest.findMany()
     * 
     * // Get first 10 CompanionRequests
     * const companionRequests = await prisma.companionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionRequestWithIdOnly = await prisma.companionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionRequestFindManyArgs>(args?: SelectSubset<T, CompanionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanionRequest.
     * @param {CompanionRequestCreateArgs} args - Arguments to create a CompanionRequest.
     * @example
     * // Create one CompanionRequest
     * const CompanionRequest = await prisma.companionRequest.create({
     *   data: {
     *     // ... data to create a CompanionRequest
     *   }
     * })
     * 
     */
    create<T extends CompanionRequestCreateArgs>(args: SelectSubset<T, CompanionRequestCreateArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanionRequests.
     * @param {CompanionRequestCreateManyArgs} args - Arguments to create many CompanionRequests.
     * @example
     * // Create many CompanionRequests
     * const companionRequest = await prisma.companionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionRequestCreateManyArgs>(args?: SelectSubset<T, CompanionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanionRequests and returns the data saved in the database.
     * @param {CompanionRequestCreateManyAndReturnArgs} args - Arguments to create many CompanionRequests.
     * @example
     * // Create many CompanionRequests
     * const companionRequest = await prisma.companionRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanionRequests and only return the `id`
     * const companionRequestWithIdOnly = await prisma.companionRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanionRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanionRequest.
     * @param {CompanionRequestDeleteArgs} args - Arguments to delete one CompanionRequest.
     * @example
     * // Delete one CompanionRequest
     * const CompanionRequest = await prisma.companionRequest.delete({
     *   where: {
     *     // ... filter to delete one CompanionRequest
     *   }
     * })
     * 
     */
    delete<T extends CompanionRequestDeleteArgs>(args: SelectSubset<T, CompanionRequestDeleteArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanionRequest.
     * @param {CompanionRequestUpdateArgs} args - Arguments to update one CompanionRequest.
     * @example
     * // Update one CompanionRequest
     * const companionRequest = await prisma.companionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionRequestUpdateArgs>(args: SelectSubset<T, CompanionRequestUpdateArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanionRequests.
     * @param {CompanionRequestDeleteManyArgs} args - Arguments to filter CompanionRequests to delete.
     * @example
     * // Delete a few CompanionRequests
     * const { count } = await prisma.companionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionRequestDeleteManyArgs>(args?: SelectSubset<T, CompanionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanionRequests
     * const companionRequest = await prisma.companionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionRequestUpdateManyArgs>(args: SelectSubset<T, CompanionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionRequests and returns the data updated in the database.
     * @param {CompanionRequestUpdateManyAndReturnArgs} args - Arguments to update many CompanionRequests.
     * @example
     * // Update many CompanionRequests
     * const companionRequest = await prisma.companionRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanionRequests and only return the `id`
     * const companionRequestWithIdOnly = await prisma.companionRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanionRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanionRequest.
     * @param {CompanionRequestUpsertArgs} args - Arguments to update or create a CompanionRequest.
     * @example
     * // Update or create a CompanionRequest
     * const companionRequest = await prisma.companionRequest.upsert({
     *   create: {
     *     // ... data to create a CompanionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanionRequest we want to update
     *   }
     * })
     */
    upsert<T extends CompanionRequestUpsertArgs>(args: SelectSubset<T, CompanionRequestUpsertArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestCountArgs} args - Arguments to filter CompanionRequests to count.
     * @example
     * // Count the number of CompanionRequests
     * const count = await prisma.companionRequest.count({
     *   where: {
     *     // ... the filter for the CompanionRequests we want to count
     *   }
     * })
    **/
    count<T extends CompanionRequestCountArgs>(
      args?: Subset<T, CompanionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanionRequestAggregateArgs>(args: Subset<T, CompanionRequestAggregateArgs>): Prisma.PrismaPromise<GetCompanionRequestAggregateType<T>>

    /**
     * Group by CompanionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionRequestGroupByArgs['orderBy'] }
        : { orderBy?: CompanionRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanionRequest model
   */
  readonly fields: CompanionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travelRequest<T extends TravelRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelRequestDefaultArgs<ExtArgs>>): Prisma__TravelRequestClient<$Result.GetResult<Prisma.$TravelRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offer<T extends TravelOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelOfferDefaultArgs<ExtArgs>>): Prisma__TravelOfferClient<$Result.GetResult<Prisma.$TravelOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    journey<T extends CompanionRequest$journeyArgs<ExtArgs> = {}>(args?: Subset<T, CompanionRequest$journeyArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends CompanionRequest$messagesArgs<ExtArgs> = {}>(args?: Subset<T, CompanionRequest$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanionRequest model
   */
  interface CompanionRequestFieldRefs {
    readonly id: FieldRef<"CompanionRequest", 'String'>
    readonly senderId: FieldRef<"CompanionRequest", 'String'>
    readonly recipientId: FieldRef<"CompanionRequest", 'String'>
    readonly travelRequestId: FieldRef<"CompanionRequest", 'String'>
    readonly offerId: FieldRef<"CompanionRequest", 'String'>
    readonly status: FieldRef<"CompanionRequest", 'CompanionRequestStatus'>
    readonly expiresAt: FieldRef<"CompanionRequest", 'DateTime'>
    readonly respondedAt: FieldRef<"CompanionRequest", 'DateTime'>
    readonly createdAt: FieldRef<"CompanionRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanionRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanionRequest findUnique
   */
  export type CompanionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter, which CompanionRequest to fetch.
     */
    where: CompanionRequestWhereUniqueInput
  }

  /**
   * CompanionRequest findUniqueOrThrow
   */
  export type CompanionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter, which CompanionRequest to fetch.
     */
    where: CompanionRequestWhereUniqueInput
  }

  /**
   * CompanionRequest findFirst
   */
  export type CompanionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter, which CompanionRequest to fetch.
     */
    where?: CompanionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionRequests to fetch.
     */
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionRequests.
     */
    cursor?: CompanionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionRequests.
     */
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * CompanionRequest findFirstOrThrow
   */
  export type CompanionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter, which CompanionRequest to fetch.
     */
    where?: CompanionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionRequests to fetch.
     */
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionRequests.
     */
    cursor?: CompanionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionRequests.
     */
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * CompanionRequest findMany
   */
  export type CompanionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter, which CompanionRequests to fetch.
     */
    where?: CompanionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionRequests to fetch.
     */
    orderBy?: CompanionRequestOrderByWithRelationInput | CompanionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanionRequests.
     */
    cursor?: CompanionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionRequests.
     */
    distinct?: CompanionRequestScalarFieldEnum | CompanionRequestScalarFieldEnum[]
  }

  /**
   * CompanionRequest create
   */
  export type CompanionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanionRequest.
     */
    data: XOR<CompanionRequestCreateInput, CompanionRequestUncheckedCreateInput>
  }

  /**
   * CompanionRequest createMany
   */
  export type CompanionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanionRequests.
     */
    data: CompanionRequestCreateManyInput | CompanionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanionRequest createManyAndReturn
   */
  export type CompanionRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CompanionRequests.
     */
    data: CompanionRequestCreateManyInput | CompanionRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionRequest update
   */
  export type CompanionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanionRequest.
     */
    data: XOR<CompanionRequestUpdateInput, CompanionRequestUncheckedUpdateInput>
    /**
     * Choose, which CompanionRequest to update.
     */
    where: CompanionRequestWhereUniqueInput
  }

  /**
   * CompanionRequest updateMany
   */
  export type CompanionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanionRequests.
     */
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyInput>
    /**
     * Filter which CompanionRequests to update
     */
    where?: CompanionRequestWhereInput
    /**
     * Limit how many CompanionRequests to update.
     */
    limit?: number
  }

  /**
   * CompanionRequest updateManyAndReturn
   */
  export type CompanionRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * The data used to update CompanionRequests.
     */
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyInput>
    /**
     * Filter which CompanionRequests to update
     */
    where?: CompanionRequestWhereInput
    /**
     * Limit how many CompanionRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionRequest upsert
   */
  export type CompanionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanionRequest to update in case it exists.
     */
    where: CompanionRequestWhereUniqueInput
    /**
     * In case the CompanionRequest found by the `where` argument doesn't exist, create a new CompanionRequest with this data.
     */
    create: XOR<CompanionRequestCreateInput, CompanionRequestUncheckedCreateInput>
    /**
     * In case the CompanionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionRequestUpdateInput, CompanionRequestUncheckedUpdateInput>
  }

  /**
   * CompanionRequest delete
   */
  export type CompanionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
    /**
     * Filter which CompanionRequest to delete.
     */
    where: CompanionRequestWhereUniqueInput
  }

  /**
   * CompanionRequest deleteMany
   */
  export type CompanionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionRequests to delete
     */
    where?: CompanionRequestWhereInput
    /**
     * Limit how many CompanionRequests to delete.
     */
    limit?: number
  }

  /**
   * CompanionRequest.journey
   */
  export type CompanionRequest$journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    where?: JourneyWhereInput
  }

  /**
   * CompanionRequest.messages
   */
  export type CompanionRequest$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * CompanionRequest without action
   */
  export type CompanionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionRequest
     */
    select?: CompanionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionRequest
     */
    omit?: CompanionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionRequestInclude<ExtArgs> | null
  }


  /**
   * Model Journey
   */

  export type AggregateJourney = {
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  export type JourneyMinAggregateOutputType = {
    id: string | null
    companionRequestId: string | null
    status: $Enums.JourneyStatus | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JourneyMaxAggregateOutputType = {
    id: string | null
    companionRequestId: string | null
    status: $Enums.JourneyStatus | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JourneyCountAggregateOutputType = {
    id: number
    companionRequestId: number
    status: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JourneyMinAggregateInputType = {
    id?: true
    companionRequestId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JourneyMaxAggregateInputType = {
    id?: true
    companionRequestId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JourneyCountAggregateInputType = {
    id?: true
    companionRequestId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journey to aggregate.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journeys
    **/
    _count?: true | JourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JourneyMaxAggregateInputType
  }

  export type GetJourneyAggregateType<T extends JourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJourney[P]>
      : GetScalarType<T[P], AggregateJourney[P]>
  }




  export type JourneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JourneyWhereInput
    orderBy?: JourneyOrderByWithAggregationInput | JourneyOrderByWithAggregationInput[]
    by: JourneyScalarFieldEnum[] | JourneyScalarFieldEnum
    having?: JourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JourneyCountAggregateInputType | true
    _min?: JourneyMinAggregateInputType
    _max?: JourneyMaxAggregateInputType
  }

  export type JourneyGroupByOutputType = {
    id: string
    companionRequestId: string
    status: $Enums.JourneyStatus
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  type GetJourneyGroupByPayload<T extends JourneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JourneyGroupByOutputType[P]>
            : GetScalarType<T[P], JourneyGroupByOutputType[P]>
        }
      >
    >


  export type JourneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companionRequestId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    messages?: boolean | Journey$messagesArgs<ExtArgs>
    ratings?: boolean | Journey$ratingsArgs<ExtArgs>
    reports?: boolean | Journey$reportsArgs<ExtArgs>
    _count?: boolean | JourneyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companionRequestId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companionRequestId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>

  export type JourneySelectScalar = {
    id?: boolean
    companionRequestId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JourneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companionRequestId" | "status" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["journey"]>
  export type JourneyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    messages?: boolean | Journey$messagesArgs<ExtArgs>
    ratings?: boolean | Journey$ratingsArgs<ExtArgs>
    reports?: boolean | Journey$reportsArgs<ExtArgs>
    _count?: boolean | JourneyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JourneyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
  }
  export type JourneyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionRequest?: boolean | CompanionRequestDefaultArgs<ExtArgs>
  }

  export type $JourneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journey"
    objects: {
      companionRequest: Prisma.$CompanionRequestPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companionRequestId: string
      status: $Enums.JourneyStatus
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journey"]>
    composites: {}
  }

  type JourneyGetPayload<S extends boolean | null | undefined | JourneyDefaultArgs> = $Result.GetResult<Prisma.$JourneyPayload, S>

  type JourneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JourneyCountAggregateInputType | true
    }

  export interface JourneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journey'], meta: { name: 'Journey' } }
    /**
     * Find zero or one Journey that matches the filter.
     * @param {JourneyFindUniqueArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JourneyFindUniqueArgs>(args: SelectSubset<T, JourneyFindUniqueArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JourneyFindUniqueOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JourneyFindUniqueOrThrowArgs>(args: SelectSubset<T, JourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JourneyFindFirstArgs>(args?: SelectSubset<T, JourneyFindFirstArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JourneyFindFirstOrThrowArgs>(args?: SelectSubset<T, JourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journeys
     * const journeys = await prisma.journey.findMany()
     * 
     * // Get first 10 Journeys
     * const journeys = await prisma.journey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journeyWithIdOnly = await prisma.journey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JourneyFindManyArgs>(args?: SelectSubset<T, JourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journey.
     * @param {JourneyCreateArgs} args - Arguments to create a Journey.
     * @example
     * // Create one Journey
     * const Journey = await prisma.journey.create({
     *   data: {
     *     // ... data to create a Journey
     *   }
     * })
     * 
     */
    create<T extends JourneyCreateArgs>(args: SelectSubset<T, JourneyCreateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journeys.
     * @param {JourneyCreateManyArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journey = await prisma.journey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JourneyCreateManyArgs>(args?: SelectSubset<T, JourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journeys and returns the data saved in the database.
     * @param {JourneyCreateManyAndReturnArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journey = await prisma.journey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journeys and only return the `id`
     * const journeyWithIdOnly = await prisma.journey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JourneyCreateManyAndReturnArgs>(args?: SelectSubset<T, JourneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Journey.
     * @param {JourneyDeleteArgs} args - Arguments to delete one Journey.
     * @example
     * // Delete one Journey
     * const Journey = await prisma.journey.delete({
     *   where: {
     *     // ... filter to delete one Journey
     *   }
     * })
     * 
     */
    delete<T extends JourneyDeleteArgs>(args: SelectSubset<T, JourneyDeleteArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journey.
     * @param {JourneyUpdateArgs} args - Arguments to update one Journey.
     * @example
     * // Update one Journey
     * const journey = await prisma.journey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JourneyUpdateArgs>(args: SelectSubset<T, JourneyUpdateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journeys.
     * @param {JourneyDeleteManyArgs} args - Arguments to filter Journeys to delete.
     * @example
     * // Delete a few Journeys
     * const { count } = await prisma.journey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JourneyDeleteManyArgs>(args?: SelectSubset<T, JourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JourneyUpdateManyArgs>(args: SelectSubset<T, JourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys and returns the data updated in the database.
     * @param {JourneyUpdateManyAndReturnArgs} args - Arguments to update many Journeys.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Journeys and only return the `id`
     * const journeyWithIdOnly = await prisma.journey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JourneyUpdateManyAndReturnArgs>(args: SelectSubset<T, JourneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Journey.
     * @param {JourneyUpsertArgs} args - Arguments to update or create a Journey.
     * @example
     * // Update or create a Journey
     * const journey = await prisma.journey.upsert({
     *   create: {
     *     // ... data to create a Journey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journey we want to update
     *   }
     * })
     */
    upsert<T extends JourneyUpsertArgs>(args: SelectSubset<T, JourneyUpsertArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyCountArgs} args - Arguments to filter Journeys to count.
     * @example
     * // Count the number of Journeys
     * const count = await prisma.journey.count({
     *   where: {
     *     // ... the filter for the Journeys we want to count
     *   }
     * })
    **/
    count<T extends JourneyCountArgs>(
      args?: Subset<T, JourneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JourneyAggregateArgs>(args: Subset<T, JourneyAggregateArgs>): Prisma.PrismaPromise<GetJourneyAggregateType<T>>

    /**
     * Group by Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JourneyGroupByArgs['orderBy'] }
        : { orderBy?: JourneyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journey model
   */
  readonly fields: JourneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JourneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companionRequest<T extends CompanionRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanionRequestDefaultArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Journey$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Journey$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Journey$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Journey$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Journey$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Journey$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Journey model
   */
  interface JourneyFieldRefs {
    readonly id: FieldRef<"Journey", 'String'>
    readonly companionRequestId: FieldRef<"Journey", 'String'>
    readonly status: FieldRef<"Journey", 'JourneyStatus'>
    readonly startedAt: FieldRef<"Journey", 'DateTime'>
    readonly completedAt: FieldRef<"Journey", 'DateTime'>
    readonly createdAt: FieldRef<"Journey", 'DateTime'>
    readonly updatedAt: FieldRef<"Journey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Journey findUnique
   */
  export type JourneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findUniqueOrThrow
   */
  export type JourneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findFirst
   */
  export type JourneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findFirstOrThrow
   */
  export type JourneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findMany
   */
  export type JourneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journeys to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey create
   */
  export type JourneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to create a Journey.
     */
    data: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
  }

  /**
   * Journey createMany
   */
  export type JourneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journeys.
     */
    data: JourneyCreateManyInput | JourneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Journey createManyAndReturn
   */
  export type JourneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * The data used to create many Journeys.
     */
    data: JourneyCreateManyInput | JourneyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journey update
   */
  export type JourneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to update a Journey.
     */
    data: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
    /**
     * Choose, which Journey to update.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey updateMany
   */
  export type JourneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journeys.
     */
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyInput>
    /**
     * Filter which Journeys to update
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to update.
     */
    limit?: number
  }

  /**
   * Journey updateManyAndReturn
   */
  export type JourneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * The data used to update Journeys.
     */
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyInput>
    /**
     * Filter which Journeys to update
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journey upsert
   */
  export type JourneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The filter to search for the Journey to update in case it exists.
     */
    where: JourneyWhereUniqueInput
    /**
     * In case the Journey found by the `where` argument doesn't exist, create a new Journey with this data.
     */
    create: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
    /**
     * In case the Journey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
  }

  /**
   * Journey delete
   */
  export type JourneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter which Journey to delete.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey deleteMany
   */
  export type JourneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journeys to delete
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to delete.
     */
    limit?: number
  }

  /**
   * Journey.messages
   */
  export type Journey$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Journey.ratings
   */
  export type Journey$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Journey.reports
   */
  export type Journey$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Journey without action
   */
  export type JourneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    journeyId: string | null
    requestId: string | null
    senderId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    journeyId: string | null
    requestId: string | null
    senderId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    journeyId: number
    requestId: number
    senderId: number
    body: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    journeyId?: true
    requestId?: true
    senderId?: true
    body?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    journeyId?: true
    requestId?: true
    senderId?: true
    body?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    journeyId?: true
    requestId?: true
    senderId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    journeyId: string
    requestId: string
    senderId: string
    body: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    requestId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    requestId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    requestId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    journeyId?: boolean
    requestId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journeyId" | "requestId" | "senderId" | "body" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    request?: boolean | CompanionRequestDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      journey: Prisma.$JourneyPayload<ExtArgs>
      request: Prisma.$CompanionRequestPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journeyId: string
      requestId: string
      senderId: string
      body: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journey<T extends JourneyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JourneyDefaultArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends CompanionRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanionRequestDefaultArgs<ExtArgs>>): Prisma__CompanionRequestClient<$Result.GetResult<Prisma.$CompanionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly journeyId: FieldRef<"Message", 'String'>
    readonly requestId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly body: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    stars: number | null
  }

  export type RatingSumAggregateOutputType = {
    stars: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    journeyId: string | null
    authorId: string | null
    subjectId: string | null
    stars: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    journeyId: string | null
    authorId: string | null
    subjectId: string | null
    stars: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    journeyId: number
    authorId: number
    subjectId: number
    stars: number
    comment: number
    createdAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    stars?: true
  }

  export type RatingSumAggregateInputType = {
    stars?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    stars?: true
    comment?: true
    createdAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    stars?: true
    comment?: true
    createdAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    stars?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    journeyId: string
    authorId: string
    subjectId: string
    stars: number
    comment: string | null
    createdAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    stars?: boolean
    comment?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    stars?: boolean
    comment?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    stars?: boolean
    comment?: boolean
    createdAt?: boolean
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    stars?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journeyId" | "authorId" | "subjectId" | "stars" | "comment" | "createdAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | JourneyDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      journey: Prisma.$JourneyPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journeyId: string
      authorId: string
      subjectId: string
      stars: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journey<T extends JourneyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JourneyDefaultArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly journeyId: FieldRef<"Rating", 'String'>
    readonly authorId: FieldRef<"Rating", 'String'>
    readonly subjectId: FieldRef<"Rating", 'String'>
    readonly stars: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    journeyId: string | null
    authorId: string | null
    subjectId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    journeyId: string | null
    authorId: string | null
    subjectId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    journeyId: number
    authorId: number
    subjectId: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    journeyId?: true
    authorId?: true
    subjectId?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    journeyId: string | null
    authorId: string
    subjectId: string
    reason: string
    status: $Enums.ReportStatus
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    journeyId?: boolean
    authorId?: boolean
    subjectId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journeyId" | "authorId" | "subjectId" | "reason" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | Report$journeyArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      journey: Prisma.$JourneyPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journeyId: string | null
      authorId: string
      subjectId: string
      reason: string
      status: $Enums.ReportStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journey<T extends Report$journeyArgs<ExtArgs> = {}>(args?: Subset<T, Report$journeyArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly journeyId: FieldRef<"Report", 'String'>
    readonly authorId: FieldRef<"Report", 'String'>
    readonly subjectId: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.journey
   */
  export type Report$journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    where?: JourneyWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model TravelDocument
   */

  export type AggregateTravelDocument = {
    _count: TravelDocumentCountAggregateOutputType | null
    _min: TravelDocumentMinAggregateOutputType | null
    _max: TravelDocumentMaxAggregateOutputType | null
  }

  export type TravelDocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    mimeType: string | null
    ocrStatus: $Enums.TravelDocumentStatus | null
    rawText: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    transportMode: $Enums.TransportMode | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelDocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    mimeType: string | null
    ocrStatus: $Enums.TravelDocumentStatus | null
    rawText: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    transportMode: $Enums.TransportMode | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelDocumentCountAggregateOutputType = {
    id: number
    userId: number
    originalName: number
    mimeType: number
    ocrStatus: number
    rawText: number
    source: number
    destination: number
    departureAt: number
    transportMode: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelDocumentMinAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    mimeType?: true
    ocrStatus?: true
    rawText?: true
    source?: true
    destination?: true
    departureAt?: true
    transportMode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelDocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    mimeType?: true
    ocrStatus?: true
    rawText?: true
    source?: true
    destination?: true
    departureAt?: true
    transportMode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelDocumentCountAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    mimeType?: true
    ocrStatus?: true
    rawText?: true
    source?: true
    destination?: true
    departureAt?: true
    transportMode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelDocument to aggregate.
     */
    where?: TravelDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelDocuments to fetch.
     */
    orderBy?: TravelDocumentOrderByWithRelationInput | TravelDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelDocuments
    **/
    _count?: true | TravelDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelDocumentMaxAggregateInputType
  }

  export type GetTravelDocumentAggregateType<T extends TravelDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelDocument[P]>
      : GetScalarType<T[P], AggregateTravelDocument[P]>
  }




  export type TravelDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelDocumentWhereInput
    orderBy?: TravelDocumentOrderByWithAggregationInput | TravelDocumentOrderByWithAggregationInput[]
    by: TravelDocumentScalarFieldEnum[] | TravelDocumentScalarFieldEnum
    having?: TravelDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelDocumentCountAggregateInputType | true
    _min?: TravelDocumentMinAggregateInputType
    _max?: TravelDocumentMaxAggregateInputType
  }

  export type TravelDocumentGroupByOutputType = {
    id: string
    userId: string
    originalName: string
    mimeType: string
    ocrStatus: $Enums.TravelDocumentStatus
    rawText: string | null
    source: string | null
    destination: string | null
    departureAt: Date | null
    transportMode: $Enums.TransportMode | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: TravelDocumentCountAggregateOutputType | null
    _min: TravelDocumentMinAggregateOutputType | null
    _max: TravelDocumentMaxAggregateOutputType | null
  }

  type GetTravelDocumentGroupByPayload<T extends TravelDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], TravelDocumentGroupByOutputType[P]>
        }
      >
    >


  export type TravelDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    mimeType?: boolean
    ocrStatus?: boolean
    rawText?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    transportMode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelDocument"]>

  export type TravelDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    mimeType?: boolean
    ocrStatus?: boolean
    rawText?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    transportMode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelDocument"]>

  export type TravelDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    mimeType?: boolean
    ocrStatus?: boolean
    rawText?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    transportMode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelDocument"]>

  export type TravelDocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    originalName?: boolean
    mimeType?: boolean
    ocrStatus?: boolean
    rawText?: boolean
    source?: boolean
    destination?: boolean
    departureAt?: boolean
    transportMode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "originalName" | "mimeType" | "ocrStatus" | "rawText" | "source" | "destination" | "departureAt" | "transportMode" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["travelDocument"]>
  export type TravelDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelDocument"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      originalName: string
      mimeType: string
      ocrStatus: $Enums.TravelDocumentStatus
      rawText: string | null
      source: string | null
      destination: string | null
      departureAt: Date | null
      transportMode: $Enums.TransportMode | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelDocument"]>
    composites: {}
  }

  type TravelDocumentGetPayload<S extends boolean | null | undefined | TravelDocumentDefaultArgs> = $Result.GetResult<Prisma.$TravelDocumentPayload, S>

  type TravelDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelDocumentCountAggregateInputType | true
    }

  export interface TravelDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelDocument'], meta: { name: 'TravelDocument' } }
    /**
     * Find zero or one TravelDocument that matches the filter.
     * @param {TravelDocumentFindUniqueArgs} args - Arguments to find a TravelDocument
     * @example
     * // Get one TravelDocument
     * const travelDocument = await prisma.travelDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelDocumentFindUniqueArgs>(args: SelectSubset<T, TravelDocumentFindUniqueArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelDocumentFindUniqueOrThrowArgs} args - Arguments to find a TravelDocument
     * @example
     * // Get one TravelDocument
     * const travelDocument = await prisma.travelDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentFindFirstArgs} args - Arguments to find a TravelDocument
     * @example
     * // Get one TravelDocument
     * const travelDocument = await prisma.travelDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelDocumentFindFirstArgs>(args?: SelectSubset<T, TravelDocumentFindFirstArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentFindFirstOrThrowArgs} args - Arguments to find a TravelDocument
     * @example
     * // Get one TravelDocument
     * const travelDocument = await prisma.travelDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelDocuments
     * const travelDocuments = await prisma.travelDocument.findMany()
     * 
     * // Get first 10 TravelDocuments
     * const travelDocuments = await prisma.travelDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelDocumentWithIdOnly = await prisma.travelDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelDocumentFindManyArgs>(args?: SelectSubset<T, TravelDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelDocument.
     * @param {TravelDocumentCreateArgs} args - Arguments to create a TravelDocument.
     * @example
     * // Create one TravelDocument
     * const TravelDocument = await prisma.travelDocument.create({
     *   data: {
     *     // ... data to create a TravelDocument
     *   }
     * })
     * 
     */
    create<T extends TravelDocumentCreateArgs>(args: SelectSubset<T, TravelDocumentCreateArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelDocuments.
     * @param {TravelDocumentCreateManyArgs} args - Arguments to create many TravelDocuments.
     * @example
     * // Create many TravelDocuments
     * const travelDocument = await prisma.travelDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelDocumentCreateManyArgs>(args?: SelectSubset<T, TravelDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelDocuments and returns the data saved in the database.
     * @param {TravelDocumentCreateManyAndReturnArgs} args - Arguments to create many TravelDocuments.
     * @example
     * // Create many TravelDocuments
     * const travelDocument = await prisma.travelDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelDocuments and only return the `id`
     * const travelDocumentWithIdOnly = await prisma.travelDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelDocument.
     * @param {TravelDocumentDeleteArgs} args - Arguments to delete one TravelDocument.
     * @example
     * // Delete one TravelDocument
     * const TravelDocument = await prisma.travelDocument.delete({
     *   where: {
     *     // ... filter to delete one TravelDocument
     *   }
     * })
     * 
     */
    delete<T extends TravelDocumentDeleteArgs>(args: SelectSubset<T, TravelDocumentDeleteArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelDocument.
     * @param {TravelDocumentUpdateArgs} args - Arguments to update one TravelDocument.
     * @example
     * // Update one TravelDocument
     * const travelDocument = await prisma.travelDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelDocumentUpdateArgs>(args: SelectSubset<T, TravelDocumentUpdateArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelDocuments.
     * @param {TravelDocumentDeleteManyArgs} args - Arguments to filter TravelDocuments to delete.
     * @example
     * // Delete a few TravelDocuments
     * const { count } = await prisma.travelDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelDocumentDeleteManyArgs>(args?: SelectSubset<T, TravelDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelDocuments
     * const travelDocument = await prisma.travelDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelDocumentUpdateManyArgs>(args: SelectSubset<T, TravelDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelDocuments and returns the data updated in the database.
     * @param {TravelDocumentUpdateManyAndReturnArgs} args - Arguments to update many TravelDocuments.
     * @example
     * // Update many TravelDocuments
     * const travelDocument = await prisma.travelDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelDocuments and only return the `id`
     * const travelDocumentWithIdOnly = await prisma.travelDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelDocument.
     * @param {TravelDocumentUpsertArgs} args - Arguments to update or create a TravelDocument.
     * @example
     * // Update or create a TravelDocument
     * const travelDocument = await prisma.travelDocument.upsert({
     *   create: {
     *     // ... data to create a TravelDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelDocument we want to update
     *   }
     * })
     */
    upsert<T extends TravelDocumentUpsertArgs>(args: SelectSubset<T, TravelDocumentUpsertArgs<ExtArgs>>): Prisma__TravelDocumentClient<$Result.GetResult<Prisma.$TravelDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentCountArgs} args - Arguments to filter TravelDocuments to count.
     * @example
     * // Count the number of TravelDocuments
     * const count = await prisma.travelDocument.count({
     *   where: {
     *     // ... the filter for the TravelDocuments we want to count
     *   }
     * })
    **/
    count<T extends TravelDocumentCountArgs>(
      args?: Subset<T, TravelDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelDocumentAggregateArgs>(args: Subset<T, TravelDocumentAggregateArgs>): Prisma.PrismaPromise<GetTravelDocumentAggregateType<T>>

    /**
     * Group by TravelDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelDocumentGroupByArgs['orderBy'] }
        : { orderBy?: TravelDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelDocument model
   */
  readonly fields: TravelDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelDocument model
   */
  interface TravelDocumentFieldRefs {
    readonly id: FieldRef<"TravelDocument", 'String'>
    readonly userId: FieldRef<"TravelDocument", 'String'>
    readonly originalName: FieldRef<"TravelDocument", 'String'>
    readonly mimeType: FieldRef<"TravelDocument", 'String'>
    readonly ocrStatus: FieldRef<"TravelDocument", 'TravelDocumentStatus'>
    readonly rawText: FieldRef<"TravelDocument", 'String'>
    readonly source: FieldRef<"TravelDocument", 'String'>
    readonly destination: FieldRef<"TravelDocument", 'String'>
    readonly departureAt: FieldRef<"TravelDocument", 'DateTime'>
    readonly transportMode: FieldRef<"TravelDocument", 'TransportMode'>
    readonly errorMessage: FieldRef<"TravelDocument", 'String'>
    readonly createdAt: FieldRef<"TravelDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelDocument findUnique
   */
  export type TravelDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TravelDocument to fetch.
     */
    where: TravelDocumentWhereUniqueInput
  }

  /**
   * TravelDocument findUniqueOrThrow
   */
  export type TravelDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TravelDocument to fetch.
     */
    where: TravelDocumentWhereUniqueInput
  }

  /**
   * TravelDocument findFirst
   */
  export type TravelDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TravelDocument to fetch.
     */
    where?: TravelDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelDocuments to fetch.
     */
    orderBy?: TravelDocumentOrderByWithRelationInput | TravelDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelDocuments.
     */
    cursor?: TravelDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelDocuments.
     */
    distinct?: TravelDocumentScalarFieldEnum | TravelDocumentScalarFieldEnum[]
  }

  /**
   * TravelDocument findFirstOrThrow
   */
  export type TravelDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TravelDocument to fetch.
     */
    where?: TravelDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelDocuments to fetch.
     */
    orderBy?: TravelDocumentOrderByWithRelationInput | TravelDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelDocuments.
     */
    cursor?: TravelDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelDocuments.
     */
    distinct?: TravelDocumentScalarFieldEnum | TravelDocumentScalarFieldEnum[]
  }

  /**
   * TravelDocument findMany
   */
  export type TravelDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TravelDocuments to fetch.
     */
    where?: TravelDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelDocuments to fetch.
     */
    orderBy?: TravelDocumentOrderByWithRelationInput | TravelDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelDocuments.
     */
    cursor?: TravelDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelDocuments.
     */
    distinct?: TravelDocumentScalarFieldEnum | TravelDocumentScalarFieldEnum[]
  }

  /**
   * TravelDocument create
   */
  export type TravelDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelDocument.
     */
    data: XOR<TravelDocumentCreateInput, TravelDocumentUncheckedCreateInput>
  }

  /**
   * TravelDocument createMany
   */
  export type TravelDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelDocuments.
     */
    data: TravelDocumentCreateManyInput | TravelDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelDocument createManyAndReturn
   */
  export type TravelDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many TravelDocuments.
     */
    data: TravelDocumentCreateManyInput | TravelDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelDocument update
   */
  export type TravelDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelDocument.
     */
    data: XOR<TravelDocumentUpdateInput, TravelDocumentUncheckedUpdateInput>
    /**
     * Choose, which TravelDocument to update.
     */
    where: TravelDocumentWhereUniqueInput
  }

  /**
   * TravelDocument updateMany
   */
  export type TravelDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelDocuments.
     */
    data: XOR<TravelDocumentUpdateManyMutationInput, TravelDocumentUncheckedUpdateManyInput>
    /**
     * Filter which TravelDocuments to update
     */
    where?: TravelDocumentWhereInput
    /**
     * Limit how many TravelDocuments to update.
     */
    limit?: number
  }

  /**
   * TravelDocument updateManyAndReturn
   */
  export type TravelDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * The data used to update TravelDocuments.
     */
    data: XOR<TravelDocumentUpdateManyMutationInput, TravelDocumentUncheckedUpdateManyInput>
    /**
     * Filter which TravelDocuments to update
     */
    where?: TravelDocumentWhereInput
    /**
     * Limit how many TravelDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelDocument upsert
   */
  export type TravelDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelDocument to update in case it exists.
     */
    where: TravelDocumentWhereUniqueInput
    /**
     * In case the TravelDocument found by the `where` argument doesn't exist, create a new TravelDocument with this data.
     */
    create: XOR<TravelDocumentCreateInput, TravelDocumentUncheckedCreateInput>
    /**
     * In case the TravelDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelDocumentUpdateInput, TravelDocumentUncheckedUpdateInput>
  }

  /**
   * TravelDocument delete
   */
  export type TravelDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
    /**
     * Filter which TravelDocument to delete.
     */
    where: TravelDocumentWhereUniqueInput
  }

  /**
   * TravelDocument deleteMany
   */
  export type TravelDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelDocuments to delete
     */
    where?: TravelDocumentWhereInput
    /**
     * Limit how many TravelDocuments to delete.
     */
    limit?: number
  }

  /**
   * TravelDocument without action
   */
  export type TravelDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelDocument
     */
    select?: TravelDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelDocument
     */
    omit?: TravelDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    phoneNumber: 'phoneNumber',
    gender: 'gender',
    role: 'role',
    status: 'status',
    authProvider: 'authProvider',
    googleId: 'googleId',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profileCompleted: 'profileCompleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type RefreshSessionScalarFieldEnum = (typeof RefreshSessionScalarFieldEnum)[keyof typeof RefreshSessionScalarFieldEnum]


  export const TravelOfferScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    source: 'source',
    destination: 'destination',
    departureAt: 'departureAt',
    expiresAt: 'expiresAt',
    transportMode: 'transportMode',
    availableSeats: 'availableSeats',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelOfferScalarFieldEnum = (typeof TravelOfferScalarFieldEnum)[keyof typeof TravelOfferScalarFieldEnum]


  export const TravelRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    source: 'source',
    destination: 'destination',
    departureAt: 'departureAt',
    expiresAt: 'expiresAt',
    transportMode: 'transportMode',
    passengersRequired: 'passengersRequired',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelRequestScalarFieldEnum = (typeof TravelRequestScalarFieldEnum)[keyof typeof TravelRequestScalarFieldEnum]


  export const CompanionRequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    recipientId: 'recipientId',
    travelRequestId: 'travelRequestId',
    offerId: 'offerId',
    status: 'status',
    expiresAt: 'expiresAt',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanionRequestScalarFieldEnum = (typeof CompanionRequestScalarFieldEnum)[keyof typeof CompanionRequestScalarFieldEnum]


  export const JourneyScalarFieldEnum: {
    id: 'id',
    companionRequestId: 'companionRequestId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JourneyScalarFieldEnum = (typeof JourneyScalarFieldEnum)[keyof typeof JourneyScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    journeyId: 'journeyId',
    requestId: 'requestId',
    senderId: 'senderId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    journeyId: 'journeyId',
    authorId: 'authorId',
    subjectId: 'subjectId',
    stars: 'stars',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    journeyId: 'journeyId',
    authorId: 'authorId',
    subjectId: 'subjectId',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const TravelDocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    originalName: 'originalName',
    mimeType: 'mimeType',
    ocrStatus: 'ocrStatus',
    rawText: 'rawText',
    source: 'source',
    destination: 'destination',
    departureAt: 'departureAt',
    transportMode: 'transportMode',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelDocumentScalarFieldEnum = (typeof TravelDocumentScalarFieldEnum)[keyof typeof TravelDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransportMode'
   */
  export type EnumTransportModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportMode'>
    


  /**
   * Reference to a field of type 'TransportMode[]'
   */
  export type ListEnumTransportModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportMode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CompanionRequestStatus'
   */
  export type EnumCompanionRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanionRequestStatus'>
    


  /**
   * Reference to a field of type 'CompanionRequestStatus[]'
   */
  export type ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanionRequestStatus[]'>
    


  /**
   * Reference to a field of type 'JourneyStatus'
   */
  export type EnumJourneyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JourneyStatus'>
    


  /**
   * Reference to a field of type 'JourneyStatus[]'
   */
  export type ListEnumJourneyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JourneyStatus[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'TravelDocumentStatus'
   */
  export type EnumTravelDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelDocumentStatus'>
    


  /**
   * Reference to a field of type 'TravelDocumentStatus[]'
   */
  export type ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelDocumentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    googleId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profileCompleted?: BoolFilter<"User"> | boolean
    refreshSessions?: RefreshSessionListRelationFilter
    travelOffers?: TravelOfferListRelationFilter
    travelRequests?: TravelRequestListRelationFilter
    companionRequestsSent?: CompanionRequestListRelationFilter
    companionRequestsReceived?: CompanionRequestListRelationFilter
    messagesSent?: MessageListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    reportsFiled?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    travelDocuments?: TravelDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileCompleted?: SortOrder
    refreshSessions?: RefreshSessionOrderByRelationAggregateInput
    travelOffers?: TravelOfferOrderByRelationAggregateInput
    travelRequests?: TravelRequestOrderByRelationAggregateInput
    companionRequestsSent?: CompanionRequestOrderByRelationAggregateInput
    companionRequestsReceived?: CompanionRequestOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    ratingsGiven?: RatingOrderByRelationAggregateInput
    ratingsReceived?: RatingOrderByRelationAggregateInput
    reportsFiled?: ReportOrderByRelationAggregateInput
    reportsReceived?: ReportOrderByRelationAggregateInput
    travelDocuments?: TravelDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profileCompleted?: BoolFilter<"User"> | boolean
    refreshSessions?: RefreshSessionListRelationFilter
    travelOffers?: TravelOfferListRelationFilter
    travelRequests?: TravelRequestListRelationFilter
    companionRequestsSent?: CompanionRequestListRelationFilter
    companionRequestsReceived?: CompanionRequestListRelationFilter
    messagesSent?: MessageListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    reportsFiled?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    travelDocuments?: TravelDocumentListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileCompleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profileCompleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type RefreshSessionWhereInput = {
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    id?: StringFilter<"RefreshSession"> | string
    userId?: StringFilter<"RefreshSession"> | string
    tokenHash?: StringFilter<"RefreshSession"> | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RefreshSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    userId?: StringFilter<"RefreshSession"> | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RefreshSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type RefreshSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshSessionCountOrderByAggregateInput
    _max?: RefreshSessionMaxOrderByAggregateInput
    _min?: RefreshSessionMinOrderByAggregateInput
  }

  export type RefreshSessionScalarWhereWithAggregatesInput = {
    AND?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    OR?: RefreshSessionScalarWhereWithAggregatesInput[]
    NOT?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshSession"> | string
    userId?: StringWithAggregatesFilter<"RefreshSession"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshSession"> | Date | string
  }

  export type TravelOfferWhereInput = {
    AND?: TravelOfferWhereInput | TravelOfferWhereInput[]
    OR?: TravelOfferWhereInput[]
    NOT?: TravelOfferWhereInput | TravelOfferWhereInput[]
    id?: StringFilter<"TravelOffer"> | string
    ownerId?: StringFilter<"TravelOffer"> | string
    source?: StringFilter<"TravelOffer"> | string
    destination?: StringFilter<"TravelOffer"> | string
    departureAt?: DateTimeFilter<"TravelOffer"> | Date | string
    expiresAt?: DateTimeFilter<"TravelOffer"> | Date | string
    transportMode?: EnumTransportModeFilter<"TravelOffer"> | $Enums.TransportMode
    availableSeats?: IntFilter<"TravelOffer"> | number
    isActive?: BoolFilter<"TravelOffer"> | boolean
    createdAt?: DateTimeFilter<"TravelOffer"> | Date | string
    updatedAt?: DateTimeFilter<"TravelOffer"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    companionRequests?: CompanionRequestListRelationFilter
  }

  export type TravelOfferOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    availableSeats?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    companionRequests?: CompanionRequestOrderByRelationAggregateInput
  }

  export type TravelOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelOfferWhereInput | TravelOfferWhereInput[]
    OR?: TravelOfferWhereInput[]
    NOT?: TravelOfferWhereInput | TravelOfferWhereInput[]
    ownerId?: StringFilter<"TravelOffer"> | string
    source?: StringFilter<"TravelOffer"> | string
    destination?: StringFilter<"TravelOffer"> | string
    departureAt?: DateTimeFilter<"TravelOffer"> | Date | string
    expiresAt?: DateTimeFilter<"TravelOffer"> | Date | string
    transportMode?: EnumTransportModeFilter<"TravelOffer"> | $Enums.TransportMode
    availableSeats?: IntFilter<"TravelOffer"> | number
    isActive?: BoolFilter<"TravelOffer"> | boolean
    createdAt?: DateTimeFilter<"TravelOffer"> | Date | string
    updatedAt?: DateTimeFilter<"TravelOffer"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    companionRequests?: CompanionRequestListRelationFilter
  }, "id">

  export type TravelOfferOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    availableSeats?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelOfferCountOrderByAggregateInput
    _avg?: TravelOfferAvgOrderByAggregateInput
    _max?: TravelOfferMaxOrderByAggregateInput
    _min?: TravelOfferMinOrderByAggregateInput
    _sum?: TravelOfferSumOrderByAggregateInput
  }

  export type TravelOfferScalarWhereWithAggregatesInput = {
    AND?: TravelOfferScalarWhereWithAggregatesInput | TravelOfferScalarWhereWithAggregatesInput[]
    OR?: TravelOfferScalarWhereWithAggregatesInput[]
    NOT?: TravelOfferScalarWhereWithAggregatesInput | TravelOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelOffer"> | string
    ownerId?: StringWithAggregatesFilter<"TravelOffer"> | string
    source?: StringWithAggregatesFilter<"TravelOffer"> | string
    destination?: StringWithAggregatesFilter<"TravelOffer"> | string
    departureAt?: DateTimeWithAggregatesFilter<"TravelOffer"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"TravelOffer"> | Date | string
    transportMode?: EnumTransportModeWithAggregatesFilter<"TravelOffer"> | $Enums.TransportMode
    availableSeats?: IntWithAggregatesFilter<"TravelOffer"> | number
    isActive?: BoolWithAggregatesFilter<"TravelOffer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TravelOffer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelOffer"> | Date | string
  }

  export type TravelRequestWhereInput = {
    AND?: TravelRequestWhereInput | TravelRequestWhereInput[]
    OR?: TravelRequestWhereInput[]
    NOT?: TravelRequestWhereInput | TravelRequestWhereInput[]
    id?: StringFilter<"TravelRequest"> | string
    userId?: StringFilter<"TravelRequest"> | string
    source?: StringFilter<"TravelRequest"> | string
    destination?: StringFilter<"TravelRequest"> | string
    departureAt?: DateTimeFilter<"TravelRequest"> | Date | string
    expiresAt?: DateTimeFilter<"TravelRequest"> | Date | string
    transportMode?: EnumTransportModeNullableFilter<"TravelRequest"> | $Enums.TransportMode | null
    passengersRequired?: IntFilter<"TravelRequest"> | number
    isActive?: BoolFilter<"TravelRequest"> | boolean
    createdAt?: DateTimeFilter<"TravelRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    companionRequests?: CompanionRequestListRelationFilter
  }

  export type TravelRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrderInput | SortOrder
    passengersRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    companionRequests?: CompanionRequestOrderByRelationAggregateInput
  }

  export type TravelRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelRequestWhereInput | TravelRequestWhereInput[]
    OR?: TravelRequestWhereInput[]
    NOT?: TravelRequestWhereInput | TravelRequestWhereInput[]
    userId?: StringFilter<"TravelRequest"> | string
    source?: StringFilter<"TravelRequest"> | string
    destination?: StringFilter<"TravelRequest"> | string
    departureAt?: DateTimeFilter<"TravelRequest"> | Date | string
    expiresAt?: DateTimeFilter<"TravelRequest"> | Date | string
    transportMode?: EnumTransportModeNullableFilter<"TravelRequest"> | $Enums.TransportMode | null
    passengersRequired?: IntFilter<"TravelRequest"> | number
    isActive?: BoolFilter<"TravelRequest"> | boolean
    createdAt?: DateTimeFilter<"TravelRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    companionRequests?: CompanionRequestListRelationFilter
  }, "id">

  export type TravelRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrderInput | SortOrder
    passengersRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelRequestCountOrderByAggregateInput
    _avg?: TravelRequestAvgOrderByAggregateInput
    _max?: TravelRequestMaxOrderByAggregateInput
    _min?: TravelRequestMinOrderByAggregateInput
    _sum?: TravelRequestSumOrderByAggregateInput
  }

  export type TravelRequestScalarWhereWithAggregatesInput = {
    AND?: TravelRequestScalarWhereWithAggregatesInput | TravelRequestScalarWhereWithAggregatesInput[]
    OR?: TravelRequestScalarWhereWithAggregatesInput[]
    NOT?: TravelRequestScalarWhereWithAggregatesInput | TravelRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelRequest"> | string
    userId?: StringWithAggregatesFilter<"TravelRequest"> | string
    source?: StringWithAggregatesFilter<"TravelRequest"> | string
    destination?: StringWithAggregatesFilter<"TravelRequest"> | string
    departureAt?: DateTimeWithAggregatesFilter<"TravelRequest"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"TravelRequest"> | Date | string
    transportMode?: EnumTransportModeNullableWithAggregatesFilter<"TravelRequest"> | $Enums.TransportMode | null
    passengersRequired?: IntWithAggregatesFilter<"TravelRequest"> | number
    isActive?: BoolWithAggregatesFilter<"TravelRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TravelRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelRequest"> | Date | string
  }

  export type CompanionRequestWhereInput = {
    AND?: CompanionRequestWhereInput | CompanionRequestWhereInput[]
    OR?: CompanionRequestWhereInput[]
    NOT?: CompanionRequestWhereInput | CompanionRequestWhereInput[]
    id?: StringFilter<"CompanionRequest"> | string
    senderId?: StringFilter<"CompanionRequest"> | string
    recipientId?: StringFilter<"CompanionRequest"> | string
    travelRequestId?: StringFilter<"CompanionRequest"> | string
    offerId?: StringFilter<"CompanionRequest"> | string
    status?: EnumCompanionRequestStatusFilter<"CompanionRequest"> | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"CompanionRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    travelRequest?: XOR<TravelRequestScalarRelationFilter, TravelRequestWhereInput>
    offer?: XOR<TravelOfferScalarRelationFilter, TravelOfferWhereInput>
    journey?: XOR<JourneyNullableScalarRelationFilter, JourneyWhereInput> | null
    messages?: MessageListRelationFilter
  }

  export type CompanionRequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    travelRequestId?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    travelRequest?: TravelRequestOrderByWithRelationInput
    offer?: TravelOfferOrderByWithRelationInput
    journey?: JourneyOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type CompanionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanionRequestWhereInput | CompanionRequestWhereInput[]
    OR?: CompanionRequestWhereInput[]
    NOT?: CompanionRequestWhereInput | CompanionRequestWhereInput[]
    senderId?: StringFilter<"CompanionRequest"> | string
    recipientId?: StringFilter<"CompanionRequest"> | string
    travelRequestId?: StringFilter<"CompanionRequest"> | string
    offerId?: StringFilter<"CompanionRequest"> | string
    status?: EnumCompanionRequestStatusFilter<"CompanionRequest"> | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"CompanionRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    travelRequest?: XOR<TravelRequestScalarRelationFilter, TravelRequestWhereInput>
    offer?: XOR<TravelOfferScalarRelationFilter, TravelOfferWhereInput>
    journey?: XOR<JourneyNullableScalarRelationFilter, JourneyWhereInput> | null
    messages?: MessageListRelationFilter
  }, "id">

  export type CompanionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    travelRequestId?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanionRequestCountOrderByAggregateInput
    _max?: CompanionRequestMaxOrderByAggregateInput
    _min?: CompanionRequestMinOrderByAggregateInput
  }

  export type CompanionRequestScalarWhereWithAggregatesInput = {
    AND?: CompanionRequestScalarWhereWithAggregatesInput | CompanionRequestScalarWhereWithAggregatesInput[]
    OR?: CompanionRequestScalarWhereWithAggregatesInput[]
    NOT?: CompanionRequestScalarWhereWithAggregatesInput | CompanionRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanionRequest"> | string
    senderId?: StringWithAggregatesFilter<"CompanionRequest"> | string
    recipientId?: StringWithAggregatesFilter<"CompanionRequest"> | string
    travelRequestId?: StringWithAggregatesFilter<"CompanionRequest"> | string
    offerId?: StringWithAggregatesFilter<"CompanionRequest"> | string
    status?: EnumCompanionRequestStatusWithAggregatesFilter<"CompanionRequest"> | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeWithAggregatesFilter<"CompanionRequest"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"CompanionRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanionRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanionRequest"> | Date | string
  }

  export type JourneyWhereInput = {
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    id?: StringFilter<"Journey"> | string
    companionRequestId?: StringFilter<"Journey"> | string
    status?: EnumJourneyStatusFilter<"Journey"> | $Enums.JourneyStatus
    startedAt?: DateTimeNullableFilter<"Journey"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Journey"> | Date | string | null
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    updatedAt?: DateTimeFilter<"Journey"> | Date | string
    companionRequest?: XOR<CompanionRequestScalarRelationFilter, CompanionRequestWhereInput>
    messages?: MessageListRelationFilter
    ratings?: RatingListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type JourneyOrderByWithRelationInput = {
    id?: SortOrder
    companionRequestId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companionRequest?: CompanionRequestOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type JourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companionRequestId?: string
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    status?: EnumJourneyStatusFilter<"Journey"> | $Enums.JourneyStatus
    startedAt?: DateTimeNullableFilter<"Journey"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Journey"> | Date | string | null
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    updatedAt?: DateTimeFilter<"Journey"> | Date | string
    companionRequest?: XOR<CompanionRequestScalarRelationFilter, CompanionRequestWhereInput>
    messages?: MessageListRelationFilter
    ratings?: RatingListRelationFilter
    reports?: ReportListRelationFilter
  }, "id" | "companionRequestId">

  export type JourneyOrderByWithAggregationInput = {
    id?: SortOrder
    companionRequestId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JourneyCountOrderByAggregateInput
    _max?: JourneyMaxOrderByAggregateInput
    _min?: JourneyMinOrderByAggregateInput
  }

  export type JourneyScalarWhereWithAggregatesInput = {
    AND?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    OR?: JourneyScalarWhereWithAggregatesInput[]
    NOT?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Journey"> | string
    companionRequestId?: StringWithAggregatesFilter<"Journey"> | string
    status?: EnumJourneyStatusWithAggregatesFilter<"Journey"> | $Enums.JourneyStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Journey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journey"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    journeyId?: StringFilter<"Message"> | string
    requestId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    request?: XOR<CompanionRequestScalarRelationFilter, CompanionRequestWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    requestId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    journey?: JourneyOrderByWithRelationInput
    request?: CompanionRequestOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    journeyId?: StringFilter<"Message"> | string
    requestId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    request?: XOR<CompanionRequestScalarRelationFilter, CompanionRequestWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    requestId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    journeyId?: StringWithAggregatesFilter<"Message"> | string
    requestId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    body?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    journeyId?: StringFilter<"Rating"> | string
    authorId?: StringFilter<"Rating"> | string
    subjectId?: StringFilter<"Rating"> | string
    stars?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    stars?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    journey?: JourneyOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    subject?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    journeyId_authorId?: RatingJourneyIdAuthorIdCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    journeyId?: StringFilter<"Rating"> | string
    authorId?: StringFilter<"Rating"> | string
    subjectId?: StringFilter<"Rating"> | string
    stars?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    journey?: XOR<JourneyScalarRelationFilter, JourneyWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "journeyId_authorId">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    stars?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    journeyId?: StringWithAggregatesFilter<"Rating"> | string
    authorId?: StringWithAggregatesFilter<"Rating"> | string
    subjectId?: StringWithAggregatesFilter<"Rating"> | string
    stars?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    journeyId?: StringNullableFilter<"Report"> | string | null
    authorId?: StringFilter<"Report"> | string
    subjectId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    journey?: XOR<JourneyNullableScalarRelationFilter, JourneyWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    journeyId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    journey?: JourneyOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    subject?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    journeyId?: StringNullableFilter<"Report"> | string | null
    authorId?: StringFilter<"Report"> | string
    subjectId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    journey?: XOR<JourneyNullableScalarRelationFilter, JourneyWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    journeyId?: SortOrderInput | SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    journeyId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    authorId?: StringWithAggregatesFilter<"Report"> | string
    subjectId?: StringWithAggregatesFilter<"Report"> | string
    reason?: StringWithAggregatesFilter<"Report"> | string
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type TravelDocumentWhereInput = {
    AND?: TravelDocumentWhereInput | TravelDocumentWhereInput[]
    OR?: TravelDocumentWhereInput[]
    NOT?: TravelDocumentWhereInput | TravelDocumentWhereInput[]
    id?: StringFilter<"TravelDocument"> | string
    userId?: StringFilter<"TravelDocument"> | string
    originalName?: StringFilter<"TravelDocument"> | string
    mimeType?: StringFilter<"TravelDocument"> | string
    ocrStatus?: EnumTravelDocumentStatusFilter<"TravelDocument"> | $Enums.TravelDocumentStatus
    rawText?: StringNullableFilter<"TravelDocument"> | string | null
    source?: StringNullableFilter<"TravelDocument"> | string | null
    destination?: StringNullableFilter<"TravelDocument"> | string | null
    departureAt?: DateTimeNullableFilter<"TravelDocument"> | Date | string | null
    transportMode?: EnumTransportModeNullableFilter<"TravelDocument"> | $Enums.TransportMode | null
    errorMessage?: StringNullableFilter<"TravelDocument"> | string | null
    createdAt?: DateTimeFilter<"TravelDocument"> | Date | string
    updatedAt?: DateTimeFilter<"TravelDocument"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TravelDocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    ocrStatus?: SortOrder
    rawText?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    departureAt?: SortOrderInput | SortOrder
    transportMode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TravelDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelDocumentWhereInput | TravelDocumentWhereInput[]
    OR?: TravelDocumentWhereInput[]
    NOT?: TravelDocumentWhereInput | TravelDocumentWhereInput[]
    userId?: StringFilter<"TravelDocument"> | string
    originalName?: StringFilter<"TravelDocument"> | string
    mimeType?: StringFilter<"TravelDocument"> | string
    ocrStatus?: EnumTravelDocumentStatusFilter<"TravelDocument"> | $Enums.TravelDocumentStatus
    rawText?: StringNullableFilter<"TravelDocument"> | string | null
    source?: StringNullableFilter<"TravelDocument"> | string | null
    destination?: StringNullableFilter<"TravelDocument"> | string | null
    departureAt?: DateTimeNullableFilter<"TravelDocument"> | Date | string | null
    transportMode?: EnumTransportModeNullableFilter<"TravelDocument"> | $Enums.TransportMode | null
    errorMessage?: StringNullableFilter<"TravelDocument"> | string | null
    createdAt?: DateTimeFilter<"TravelDocument"> | Date | string
    updatedAt?: DateTimeFilter<"TravelDocument"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TravelDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    ocrStatus?: SortOrder
    rawText?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    departureAt?: SortOrderInput | SortOrder
    transportMode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelDocumentCountOrderByAggregateInput
    _max?: TravelDocumentMaxOrderByAggregateInput
    _min?: TravelDocumentMinOrderByAggregateInput
  }

  export type TravelDocumentScalarWhereWithAggregatesInput = {
    AND?: TravelDocumentScalarWhereWithAggregatesInput | TravelDocumentScalarWhereWithAggregatesInput[]
    OR?: TravelDocumentScalarWhereWithAggregatesInput[]
    NOT?: TravelDocumentScalarWhereWithAggregatesInput | TravelDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelDocument"> | string
    userId?: StringWithAggregatesFilter<"TravelDocument"> | string
    originalName?: StringWithAggregatesFilter<"TravelDocument"> | string
    mimeType?: StringWithAggregatesFilter<"TravelDocument"> | string
    ocrStatus?: EnumTravelDocumentStatusWithAggregatesFilter<"TravelDocument"> | $Enums.TravelDocumentStatus
    rawText?: StringNullableWithAggregatesFilter<"TravelDocument"> | string | null
    source?: StringNullableWithAggregatesFilter<"TravelDocument"> | string | null
    destination?: StringNullableWithAggregatesFilter<"TravelDocument"> | string | null
    departureAt?: DateTimeNullableWithAggregatesFilter<"TravelDocument"> | Date | string | null
    transportMode?: EnumTransportModeNullableWithAggregatesFilter<"TravelDocument"> | $Enums.TransportMode | null
    errorMessage?: StringNullableWithAggregatesFilter<"TravelDocument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TravelDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelDocument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshSessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshSessionsInput
  }

  export type RefreshSessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshSessionsNestedInput
  }

  export type RefreshSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelOfferCreateInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTravelOffersInput
    companionRequests?: CompanionRequestCreateNestedManyWithoutOfferInput
  }

  export type TravelOfferUncheckedCreateInput = {
    id?: string
    ownerId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestUncheckedCreateNestedManyWithoutOfferInput
  }

  export type TravelOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTravelOffersNestedInput
    companionRequests?: CompanionRequestUpdateManyWithoutOfferNestedInput
  }

  export type TravelOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type TravelOfferCreateManyInput = {
    id?: string
    ownerId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRequestCreateInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelRequestsInput
    companionRequests?: CompanionRequestCreateNestedManyWithoutTravelRequestInput
  }

  export type TravelRequestUncheckedCreateInput = {
    id?: string
    userId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestUncheckedCreateNestedManyWithoutTravelRequestInput
  }

  export type TravelRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelRequestsNestedInput
    companionRequests?: CompanionRequestUpdateManyWithoutTravelRequestNestedInput
  }

  export type TravelRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUncheckedUpdateManyWithoutTravelRequestNestedInput
  }

  export type TravelRequestCreateManyInput = {
    id?: string
    userId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestCreateInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestCreateManyInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyCreateInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequest: CompanionRequestCreateNestedOneWithoutJourneyInput
    messages?: MessageCreateNestedManyWithoutJourneyInput
    ratings?: RatingCreateNestedManyWithoutJourneyInput
    reports?: ReportCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateInput = {
    id?: string
    companionRequestId: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutJourneyInput
    ratings?: RatingUncheckedCreateNestedManyWithoutJourneyInput
    reports?: ReportUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequest?: CompanionRequestUpdateOneRequiredWithoutJourneyNestedInput
    messages?: MessageUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUpdateManyWithoutJourneyNestedInput
    reports?: ReportUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutJourneyNestedInput
    reports?: ReportUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyCreateManyInput = {
    id?: string
    companionRequestId: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMessagesInput
    request: CompanionRequestCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    journeyId: string
    requestId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMessagesNestedInput
    request?: CompanionRequestUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    journeyId: string
    requestId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutRatingsInput
    author: UserCreateNestedOneWithoutRatingsGivenInput
    subject: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    journeyId: string
    authorId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutRatingsNestedInput
    author?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
    subject?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    journeyId: string
    authorId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyCreateNestedOneWithoutReportsInput
    author: UserCreateNestedOneWithoutReportsFiledInput
    subject: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    journeyId?: string | null
    authorId: string
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneWithoutReportsNestedInput
    author?: UserUpdateOneRequiredWithoutReportsFiledNestedInput
    subject?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    journeyId?: string | null
    authorId: string
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentCreateInput = {
    id?: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelDocumentsInput
  }

  export type TravelDocumentUncheckedCreateInput = {
    id?: string
    userId: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelDocumentsNestedInput
  }

  export type TravelDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentCreateManyInput = {
    id?: string
    userId: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshSessionListRelationFilter = {
    every?: RefreshSessionWhereInput
    some?: RefreshSessionWhereInput
    none?: RefreshSessionWhereInput
  }

  export type TravelOfferListRelationFilter = {
    every?: TravelOfferWhereInput
    some?: TravelOfferWhereInput
    none?: TravelOfferWhereInput
  }

  export type TravelRequestListRelationFilter = {
    every?: TravelRequestWhereInput
    some?: TravelRequestWhereInput
    none?: TravelRequestWhereInput
  }

  export type CompanionRequestListRelationFilter = {
    every?: CompanionRequestWhereInput
    some?: CompanionRequestWhereInput
    none?: CompanionRequestWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type TravelDocumentListRelationFilter = {
    every?: TravelDocumentWhereInput
    some?: TravelDocumentWhereInput
    none?: TravelDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanionRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    status?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileCompleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    status?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileCompleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phoneNumber?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    status?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileCompleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTransportModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportModeFilter<$PrismaModel> | $Enums.TransportMode
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TravelOfferCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    availableSeats?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelOfferAvgOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type TravelOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    availableSeats?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelOfferMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    availableSeats?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelOfferSumOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type EnumTransportModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportModeWithAggregatesFilter<$PrismaModel> | $Enums.TransportMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportModeFilter<$PrismaModel>
    _max?: NestedEnumTransportModeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTransportModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransportModeNullableFilter<$PrismaModel> | $Enums.TransportMode | null
  }

  export type TravelRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    passengersRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRequestAvgOrderByAggregateInput = {
    passengersRequired?: SortOrder
  }

  export type TravelRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    passengersRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    expiresAt?: SortOrder
    transportMode?: SortOrder
    passengersRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRequestSumOrderByAggregateInput = {
    passengersRequired?: SortOrder
  }

  export type EnumTransportModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransportModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransportMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransportModeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransportModeNullableFilter<$PrismaModel>
  }

  export type EnumCompanionRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanionRequestStatus | EnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanionRequestStatusFilter<$PrismaModel> | $Enums.CompanionRequestStatus
  }

  export type TravelRequestScalarRelationFilter = {
    is?: TravelRequestWhereInput
    isNot?: TravelRequestWhereInput
  }

  export type TravelOfferScalarRelationFilter = {
    is?: TravelOfferWhereInput
    isNot?: TravelOfferWhereInput
  }

  export type JourneyNullableScalarRelationFilter = {
    is?: JourneyWhereInput | null
    isNot?: JourneyWhereInput | null
  }

  export type CompanionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    travelRequestId?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    travelRequestId?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    travelRequestId?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCompanionRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanionRequestStatus | EnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanionRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanionRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanionRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumCompanionRequestStatusFilter<$PrismaModel>
  }

  export type EnumJourneyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JourneyStatus | EnumJourneyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJourneyStatusFilter<$PrismaModel> | $Enums.JourneyStatus
  }

  export type CompanionRequestScalarRelationFilter = {
    is?: CompanionRequestWhereInput
    isNot?: CompanionRequestWhereInput
  }

  export type JourneyCountOrderByAggregateInput = {
    id?: SortOrder
    companionRequestId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    companionRequestId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JourneyMinOrderByAggregateInput = {
    id?: SortOrder
    companionRequestId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJourneyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JourneyStatus | EnumJourneyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJourneyStatusWithAggregatesFilter<$PrismaModel> | $Enums.JourneyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJourneyStatusFilter<$PrismaModel>
    _max?: NestedEnumJourneyStatusFilter<$PrismaModel>
  }

  export type JourneyScalarRelationFilter = {
    is?: JourneyWhereInput
    isNot?: JourneyWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    requestId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    requestId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    requestId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingJourneyIdAuthorIdCompoundUniqueInput = {
    journeyId: string
    authorId: string
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    stars?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    journeyId?: SortOrder
    authorId?: SortOrder
    subjectId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumTravelDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelDocumentStatus | EnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelDocumentStatusFilter<$PrismaModel> | $Enums.TravelDocumentStatus
  }

  export type TravelDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    ocrStatus?: SortOrder
    rawText?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    transportMode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    ocrStatus?: SortOrder
    rawText?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    transportMode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    ocrStatus?: SortOrder
    rawText?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    departureAt?: SortOrder
    transportMode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTravelDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelDocumentStatus | EnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TravelDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumTravelDocumentStatusFilter<$PrismaModel>
  }

  export type RefreshSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type TravelOfferCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput> | TravelOfferCreateWithoutOwnerInput[] | TravelOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TravelOfferCreateOrConnectWithoutOwnerInput | TravelOfferCreateOrConnectWithoutOwnerInput[]
    createMany?: TravelOfferCreateManyOwnerInputEnvelope
    connect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
  }

  export type TravelRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput> | TravelRequestCreateWithoutUserInput[] | TravelRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelRequestCreateOrConnectWithoutUserInput | TravelRequestCreateOrConnectWithoutUserInput[]
    createMany?: TravelRequestCreateManyUserInputEnvelope
    connect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
  }

  export type CompanionRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput> | CompanionRequestCreateWithoutSenderInput[] | CompanionRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutSenderInput | CompanionRequestCreateOrConnectWithoutSenderInput[]
    createMany?: CompanionRequestCreateManySenderInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type CompanionRequestCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput> | CompanionRequestCreateWithoutRecipientInput[] | CompanionRequestUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutRecipientInput | CompanionRequestCreateOrConnectWithoutRecipientInput[]
    createMany?: CompanionRequestCreateManyRecipientInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutSubjectInput = {
    create?: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput> | RatingCreateWithoutSubjectInput[] | RatingUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutSubjectInput | RatingCreateOrConnectWithoutSubjectInput[]
    createMany?: RatingCreateManySubjectInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput> | ReportCreateWithoutSubjectInput[] | ReportUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSubjectInput | ReportCreateOrConnectWithoutSubjectInput[]
    createMany?: ReportCreateManySubjectInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TravelDocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput> | TravelDocumentCreateWithoutUserInput[] | TravelDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelDocumentCreateOrConnectWithoutUserInput | TravelDocumentCreateOrConnectWithoutUserInput[]
    createMany?: TravelDocumentCreateManyUserInputEnvelope
    connect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
  }

  export type RefreshSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type TravelOfferUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput> | TravelOfferCreateWithoutOwnerInput[] | TravelOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TravelOfferCreateOrConnectWithoutOwnerInput | TravelOfferCreateOrConnectWithoutOwnerInput[]
    createMany?: TravelOfferCreateManyOwnerInputEnvelope
    connect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
  }

  export type TravelRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput> | TravelRequestCreateWithoutUserInput[] | TravelRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelRequestCreateOrConnectWithoutUserInput | TravelRequestCreateOrConnectWithoutUserInput[]
    createMany?: TravelRequestCreateManyUserInputEnvelope
    connect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
  }

  export type CompanionRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput> | CompanionRequestCreateWithoutSenderInput[] | CompanionRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutSenderInput | CompanionRequestCreateOrConnectWithoutSenderInput[]
    createMany?: CompanionRequestCreateManySenderInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput> | CompanionRequestCreateWithoutRecipientInput[] | CompanionRequestUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutRecipientInput | CompanionRequestCreateOrConnectWithoutRecipientInput[]
    createMany?: CompanionRequestCreateManyRecipientInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput> | RatingCreateWithoutSubjectInput[] | RatingUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutSubjectInput | RatingCreateOrConnectWithoutSubjectInput[]
    createMany?: RatingCreateManySubjectInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput> | ReportCreateWithoutSubjectInput[] | ReportUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSubjectInput | ReportCreateOrConnectWithoutSubjectInput[]
    createMany?: ReportCreateManySubjectInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TravelDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput> | TravelDocumentCreateWithoutUserInput[] | TravelDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelDocumentCreateOrConnectWithoutUserInput | TravelDocumentCreateOrConnectWithoutUserInput[]
    createMany?: TravelDocumentCreateManyUserInputEnvelope
    connect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type TravelOfferUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput> | TravelOfferCreateWithoutOwnerInput[] | TravelOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TravelOfferCreateOrConnectWithoutOwnerInput | TravelOfferCreateOrConnectWithoutOwnerInput[]
    upsert?: TravelOfferUpsertWithWhereUniqueWithoutOwnerInput | TravelOfferUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TravelOfferCreateManyOwnerInputEnvelope
    set?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    disconnect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    delete?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    connect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    update?: TravelOfferUpdateWithWhereUniqueWithoutOwnerInput | TravelOfferUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TravelOfferUpdateManyWithWhereWithoutOwnerInput | TravelOfferUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TravelOfferScalarWhereInput | TravelOfferScalarWhereInput[]
  }

  export type TravelRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput> | TravelRequestCreateWithoutUserInput[] | TravelRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelRequestCreateOrConnectWithoutUserInput | TravelRequestCreateOrConnectWithoutUserInput[]
    upsert?: TravelRequestUpsertWithWhereUniqueWithoutUserInput | TravelRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelRequestCreateManyUserInputEnvelope
    set?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    disconnect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    delete?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    connect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    update?: TravelRequestUpdateWithWhereUniqueWithoutUserInput | TravelRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelRequestUpdateManyWithWhereWithoutUserInput | TravelRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelRequestScalarWhereInput | TravelRequestScalarWhereInput[]
  }

  export type CompanionRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput> | CompanionRequestCreateWithoutSenderInput[] | CompanionRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutSenderInput | CompanionRequestCreateOrConnectWithoutSenderInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutSenderInput | CompanionRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CompanionRequestCreateManySenderInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutSenderInput | CompanionRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutSenderInput | CompanionRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type CompanionRequestUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput> | CompanionRequestCreateWithoutRecipientInput[] | CompanionRequestUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutRecipientInput | CompanionRequestCreateOrConnectWithoutRecipientInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutRecipientInput | CompanionRequestUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CompanionRequestCreateManyRecipientInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutRecipientInput | CompanionRequestUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutRecipientInput | CompanionRequestUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAuthorInput | RatingUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAuthorInput | RatingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAuthorInput | RatingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput> | RatingCreateWithoutSubjectInput[] | RatingUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutSubjectInput | RatingCreateOrConnectWithoutSubjectInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutSubjectInput | RatingUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: RatingCreateManySubjectInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutSubjectInput | RatingUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutSubjectInput | RatingUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAuthorInput | ReportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAuthorInput | ReportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAuthorInput | ReportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput> | ReportCreateWithoutSubjectInput[] | ReportUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSubjectInput | ReportCreateOrConnectWithoutSubjectInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSubjectInput | ReportUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ReportCreateManySubjectInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSubjectInput | ReportUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSubjectInput | ReportUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TravelDocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput> | TravelDocumentCreateWithoutUserInput[] | TravelDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelDocumentCreateOrConnectWithoutUserInput | TravelDocumentCreateOrConnectWithoutUserInput[]
    upsert?: TravelDocumentUpsertWithWhereUniqueWithoutUserInput | TravelDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelDocumentCreateManyUserInputEnvelope
    set?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    disconnect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    delete?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    connect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    update?: TravelDocumentUpdateWithWhereUniqueWithoutUserInput | TravelDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelDocumentUpdateManyWithWhereWithoutUserInput | TravelDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelDocumentScalarWhereInput | TravelDocumentScalarWhereInput[]
  }

  export type RefreshSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput> | TravelOfferCreateWithoutOwnerInput[] | TravelOfferUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TravelOfferCreateOrConnectWithoutOwnerInput | TravelOfferCreateOrConnectWithoutOwnerInput[]
    upsert?: TravelOfferUpsertWithWhereUniqueWithoutOwnerInput | TravelOfferUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TravelOfferCreateManyOwnerInputEnvelope
    set?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    disconnect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    delete?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    connect?: TravelOfferWhereUniqueInput | TravelOfferWhereUniqueInput[]
    update?: TravelOfferUpdateWithWhereUniqueWithoutOwnerInput | TravelOfferUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TravelOfferUpdateManyWithWhereWithoutOwnerInput | TravelOfferUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TravelOfferScalarWhereInput | TravelOfferScalarWhereInput[]
  }

  export type TravelRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput> | TravelRequestCreateWithoutUserInput[] | TravelRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelRequestCreateOrConnectWithoutUserInput | TravelRequestCreateOrConnectWithoutUserInput[]
    upsert?: TravelRequestUpsertWithWhereUniqueWithoutUserInput | TravelRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelRequestCreateManyUserInputEnvelope
    set?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    disconnect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    delete?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    connect?: TravelRequestWhereUniqueInput | TravelRequestWhereUniqueInput[]
    update?: TravelRequestUpdateWithWhereUniqueWithoutUserInput | TravelRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelRequestUpdateManyWithWhereWithoutUserInput | TravelRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelRequestScalarWhereInput | TravelRequestScalarWhereInput[]
  }

  export type CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput> | CompanionRequestCreateWithoutSenderInput[] | CompanionRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutSenderInput | CompanionRequestCreateOrConnectWithoutSenderInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutSenderInput | CompanionRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CompanionRequestCreateManySenderInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutSenderInput | CompanionRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutSenderInput | CompanionRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput> | CompanionRequestCreateWithoutRecipientInput[] | CompanionRequestUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutRecipientInput | CompanionRequestCreateOrConnectWithoutRecipientInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutRecipientInput | CompanionRequestUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CompanionRequestCreateManyRecipientInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutRecipientInput | CompanionRequestUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutRecipientInput | CompanionRequestUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput> | RatingCreateWithoutAuthorInput[] | RatingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAuthorInput | RatingCreateOrConnectWithoutAuthorInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAuthorInput | RatingUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RatingCreateManyAuthorInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAuthorInput | RatingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAuthorInput | RatingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput> | RatingCreateWithoutSubjectInput[] | RatingUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutSubjectInput | RatingCreateOrConnectWithoutSubjectInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutSubjectInput | RatingUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: RatingCreateManySubjectInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutSubjectInput | RatingUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutSubjectInput | RatingUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput> | ReportCreateWithoutAuthorInput[] | ReportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAuthorInput | ReportCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAuthorInput | ReportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportCreateManyAuthorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAuthorInput | ReportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAuthorInput | ReportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput> | ReportCreateWithoutSubjectInput[] | ReportUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSubjectInput | ReportCreateOrConnectWithoutSubjectInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSubjectInput | ReportUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ReportCreateManySubjectInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSubjectInput | ReportUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSubjectInput | ReportUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TravelDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput> | TravelDocumentCreateWithoutUserInput[] | TravelDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelDocumentCreateOrConnectWithoutUserInput | TravelDocumentCreateOrConnectWithoutUserInput[]
    upsert?: TravelDocumentUpsertWithWhereUniqueWithoutUserInput | TravelDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelDocumentCreateManyUserInputEnvelope
    set?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    disconnect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    delete?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    connect?: TravelDocumentWhereUniqueInput | TravelDocumentWhereUniqueInput[]
    update?: TravelDocumentUpdateWithWhereUniqueWithoutUserInput | TravelDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelDocumentUpdateManyWithWhereWithoutUserInput | TravelDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelDocumentScalarWhereInput | TravelDocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshSessionsInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshSessionsNestedInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    upsert?: UserUpsertWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshSessionsInput, UserUpdateWithoutRefreshSessionsInput>, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserCreateNestedOneWithoutTravelOffersInput = {
    create?: XOR<UserCreateWithoutTravelOffersInput, UserUncheckedCreateWithoutTravelOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelOffersInput
    connect?: UserWhereUniqueInput
  }

  export type CompanionRequestCreateNestedManyWithoutOfferInput = {
    create?: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput> | CompanionRequestCreateWithoutOfferInput[] | CompanionRequestUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutOfferInput | CompanionRequestCreateOrConnectWithoutOfferInput[]
    createMany?: CompanionRequestCreateManyOfferInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type CompanionRequestUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput> | CompanionRequestCreateWithoutOfferInput[] | CompanionRequestUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutOfferInput | CompanionRequestCreateOrConnectWithoutOfferInput[]
    createMany?: CompanionRequestCreateManyOfferInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type EnumTransportModeFieldUpdateOperationsInput = {
    set?: $Enums.TransportMode
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTravelOffersNestedInput = {
    create?: XOR<UserCreateWithoutTravelOffersInput, UserUncheckedCreateWithoutTravelOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelOffersInput
    upsert?: UserUpsertWithoutTravelOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelOffersInput, UserUpdateWithoutTravelOffersInput>, UserUncheckedUpdateWithoutTravelOffersInput>
  }

  export type CompanionRequestUpdateManyWithoutOfferNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput> | CompanionRequestCreateWithoutOfferInput[] | CompanionRequestUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutOfferInput | CompanionRequestCreateOrConnectWithoutOfferInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutOfferInput | CompanionRequestUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: CompanionRequestCreateManyOfferInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutOfferInput | CompanionRequestUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutOfferInput | CompanionRequestUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type CompanionRequestUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput> | CompanionRequestCreateWithoutOfferInput[] | CompanionRequestUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutOfferInput | CompanionRequestCreateOrConnectWithoutOfferInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutOfferInput | CompanionRequestUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: CompanionRequestCreateManyOfferInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutOfferInput | CompanionRequestUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutOfferInput | CompanionRequestUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTravelRequestsInput = {
    create?: XOR<UserCreateWithoutTravelRequestsInput, UserUncheckedCreateWithoutTravelRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type CompanionRequestCreateNestedManyWithoutTravelRequestInput = {
    create?: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput> | CompanionRequestCreateWithoutTravelRequestInput[] | CompanionRequestUncheckedCreateWithoutTravelRequestInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutTravelRequestInput | CompanionRequestCreateOrConnectWithoutTravelRequestInput[]
    createMany?: CompanionRequestCreateManyTravelRequestInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type CompanionRequestUncheckedCreateNestedManyWithoutTravelRequestInput = {
    create?: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput> | CompanionRequestCreateWithoutTravelRequestInput[] | CompanionRequestUncheckedCreateWithoutTravelRequestInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutTravelRequestInput | CompanionRequestCreateOrConnectWithoutTravelRequestInput[]
    createMany?: CompanionRequestCreateManyTravelRequestInputEnvelope
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
  }

  export type NullableEnumTransportModeFieldUpdateOperationsInput = {
    set?: $Enums.TransportMode | null
  }

  export type UserUpdateOneRequiredWithoutTravelRequestsNestedInput = {
    create?: XOR<UserCreateWithoutTravelRequestsInput, UserUncheckedCreateWithoutTravelRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelRequestsInput
    upsert?: UserUpsertWithoutTravelRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelRequestsInput, UserUpdateWithoutTravelRequestsInput>, UserUncheckedUpdateWithoutTravelRequestsInput>
  }

  export type CompanionRequestUpdateManyWithoutTravelRequestNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput> | CompanionRequestCreateWithoutTravelRequestInput[] | CompanionRequestUncheckedCreateWithoutTravelRequestInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutTravelRequestInput | CompanionRequestCreateOrConnectWithoutTravelRequestInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutTravelRequestInput | CompanionRequestUpsertWithWhereUniqueWithoutTravelRequestInput[]
    createMany?: CompanionRequestCreateManyTravelRequestInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutTravelRequestInput | CompanionRequestUpdateWithWhereUniqueWithoutTravelRequestInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutTravelRequestInput | CompanionRequestUpdateManyWithWhereWithoutTravelRequestInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type CompanionRequestUncheckedUpdateManyWithoutTravelRequestNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput> | CompanionRequestCreateWithoutTravelRequestInput[] | CompanionRequestUncheckedCreateWithoutTravelRequestInput[]
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutTravelRequestInput | CompanionRequestCreateOrConnectWithoutTravelRequestInput[]
    upsert?: CompanionRequestUpsertWithWhereUniqueWithoutTravelRequestInput | CompanionRequestUpsertWithWhereUniqueWithoutTravelRequestInput[]
    createMany?: CompanionRequestCreateManyTravelRequestInputEnvelope
    set?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    disconnect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    delete?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    connect?: CompanionRequestWhereUniqueInput | CompanionRequestWhereUniqueInput[]
    update?: CompanionRequestUpdateWithWhereUniqueWithoutTravelRequestInput | CompanionRequestUpdateWithWhereUniqueWithoutTravelRequestInput[]
    updateMany?: CompanionRequestUpdateManyWithWhereWithoutTravelRequestInput | CompanionRequestUpdateManyWithWhereWithoutTravelRequestInput[]
    deleteMany?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompanionRequestsSentInput = {
    create?: XOR<UserCreateWithoutCompanionRequestsSentInput, UserUncheckedCreateWithoutCompanionRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanionRequestsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompanionRequestsReceivedInput = {
    create?: XOR<UserCreateWithoutCompanionRequestsReceivedInput, UserUncheckedCreateWithoutCompanionRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanionRequestsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type TravelRequestCreateNestedOneWithoutCompanionRequestsInput = {
    create?: XOR<TravelRequestCreateWithoutCompanionRequestsInput, TravelRequestUncheckedCreateWithoutCompanionRequestsInput>
    connectOrCreate?: TravelRequestCreateOrConnectWithoutCompanionRequestsInput
    connect?: TravelRequestWhereUniqueInput
  }

  export type TravelOfferCreateNestedOneWithoutCompanionRequestsInput = {
    create?: XOR<TravelOfferCreateWithoutCompanionRequestsInput, TravelOfferUncheckedCreateWithoutCompanionRequestsInput>
    connectOrCreate?: TravelOfferCreateOrConnectWithoutCompanionRequestsInput
    connect?: TravelOfferWhereUniqueInput
  }

  export type JourneyCreateNestedOneWithoutCompanionRequestInput = {
    create?: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutCompanionRequestInput
    connect?: JourneyWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutRequestInput = {
    create?: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput> | MessageCreateWithoutRequestInput[] | MessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRequestInput | MessageCreateOrConnectWithoutRequestInput[]
    createMany?: MessageCreateManyRequestInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput = {
    create?: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutCompanionRequestInput
    connect?: JourneyWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput> | MessageCreateWithoutRequestInput[] | MessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRequestInput | MessageCreateOrConnectWithoutRequestInput[]
    createMany?: MessageCreateManyRequestInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumCompanionRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.CompanionRequestStatus
  }

  export type UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput = {
    create?: XOR<UserCreateWithoutCompanionRequestsSentInput, UserUncheckedCreateWithoutCompanionRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanionRequestsSentInput
    upsert?: UserUpsertWithoutCompanionRequestsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanionRequestsSentInput, UserUpdateWithoutCompanionRequestsSentInput>, UserUncheckedUpdateWithoutCompanionRequestsSentInput>
  }

  export type UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutCompanionRequestsReceivedInput, UserUncheckedCreateWithoutCompanionRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanionRequestsReceivedInput
    upsert?: UserUpsertWithoutCompanionRequestsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanionRequestsReceivedInput, UserUpdateWithoutCompanionRequestsReceivedInput>, UserUncheckedUpdateWithoutCompanionRequestsReceivedInput>
  }

  export type TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput = {
    create?: XOR<TravelRequestCreateWithoutCompanionRequestsInput, TravelRequestUncheckedCreateWithoutCompanionRequestsInput>
    connectOrCreate?: TravelRequestCreateOrConnectWithoutCompanionRequestsInput
    upsert?: TravelRequestUpsertWithoutCompanionRequestsInput
    connect?: TravelRequestWhereUniqueInput
    update?: XOR<XOR<TravelRequestUpdateToOneWithWhereWithoutCompanionRequestsInput, TravelRequestUpdateWithoutCompanionRequestsInput>, TravelRequestUncheckedUpdateWithoutCompanionRequestsInput>
  }

  export type TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput = {
    create?: XOR<TravelOfferCreateWithoutCompanionRequestsInput, TravelOfferUncheckedCreateWithoutCompanionRequestsInput>
    connectOrCreate?: TravelOfferCreateOrConnectWithoutCompanionRequestsInput
    upsert?: TravelOfferUpsertWithoutCompanionRequestsInput
    connect?: TravelOfferWhereUniqueInput
    update?: XOR<XOR<TravelOfferUpdateToOneWithWhereWithoutCompanionRequestsInput, TravelOfferUpdateWithoutCompanionRequestsInput>, TravelOfferUncheckedUpdateWithoutCompanionRequestsInput>
  }

  export type JourneyUpdateOneWithoutCompanionRequestNestedInput = {
    create?: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutCompanionRequestInput
    upsert?: JourneyUpsertWithoutCompanionRequestInput
    disconnect?: JourneyWhereInput | boolean
    delete?: JourneyWhereInput | boolean
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutCompanionRequestInput, JourneyUpdateWithoutCompanionRequestInput>, JourneyUncheckedUpdateWithoutCompanionRequestInput>
  }

  export type MessageUpdateManyWithoutRequestNestedInput = {
    create?: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput> | MessageCreateWithoutRequestInput[] | MessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRequestInput | MessageCreateOrConnectWithoutRequestInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRequestInput | MessageUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: MessageCreateManyRequestInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRequestInput | MessageUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRequestInput | MessageUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput = {
    create?: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutCompanionRequestInput
    upsert?: JourneyUpsertWithoutCompanionRequestInput
    disconnect?: JourneyWhereInput | boolean
    delete?: JourneyWhereInput | boolean
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutCompanionRequestInput, JourneyUpdateWithoutCompanionRequestInput>, JourneyUncheckedUpdateWithoutCompanionRequestInput>
  }

  export type MessageUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput> | MessageCreateWithoutRequestInput[] | MessageUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRequestInput | MessageCreateOrConnectWithoutRequestInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRequestInput | MessageUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: MessageCreateManyRequestInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRequestInput | MessageUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRequestInput | MessageUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CompanionRequestCreateNestedOneWithoutJourneyInput = {
    create?: XOR<CompanionRequestCreateWithoutJourneyInput, CompanionRequestUncheckedCreateWithoutJourneyInput>
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutJourneyInput
    connect?: CompanionRequestWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutJourneyInput = {
    create?: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput> | MessageCreateWithoutJourneyInput[] | MessageUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutJourneyInput | MessageCreateOrConnectWithoutJourneyInput[]
    createMany?: MessageCreateManyJourneyInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutJourneyInput = {
    create?: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput> | RatingCreateWithoutJourneyInput[] | RatingUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutJourneyInput | RatingCreateOrConnectWithoutJourneyInput[]
    createMany?: RatingCreateManyJourneyInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutJourneyInput = {
    create?: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput> | ReportCreateWithoutJourneyInput[] | ReportUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutJourneyInput | ReportCreateOrConnectWithoutJourneyInput[]
    createMany?: ReportCreateManyJourneyInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput> | MessageCreateWithoutJourneyInput[] | MessageUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutJourneyInput | MessageCreateOrConnectWithoutJourneyInput[]
    createMany?: MessageCreateManyJourneyInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput> | RatingCreateWithoutJourneyInput[] | RatingUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutJourneyInput | RatingCreateOrConnectWithoutJourneyInput[]
    createMany?: RatingCreateManyJourneyInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput> | ReportCreateWithoutJourneyInput[] | ReportUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutJourneyInput | ReportCreateOrConnectWithoutJourneyInput[]
    createMany?: ReportCreateManyJourneyInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type EnumJourneyStatusFieldUpdateOperationsInput = {
    set?: $Enums.JourneyStatus
  }

  export type CompanionRequestUpdateOneRequiredWithoutJourneyNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutJourneyInput, CompanionRequestUncheckedCreateWithoutJourneyInput>
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutJourneyInput
    upsert?: CompanionRequestUpsertWithoutJourneyInput
    connect?: CompanionRequestWhereUniqueInput
    update?: XOR<XOR<CompanionRequestUpdateToOneWithWhereWithoutJourneyInput, CompanionRequestUpdateWithoutJourneyInput>, CompanionRequestUncheckedUpdateWithoutJourneyInput>
  }

  export type MessageUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput> | MessageCreateWithoutJourneyInput[] | MessageUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutJourneyInput | MessageCreateOrConnectWithoutJourneyInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutJourneyInput | MessageUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: MessageCreateManyJourneyInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutJourneyInput | MessageUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutJourneyInput | MessageUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput> | RatingCreateWithoutJourneyInput[] | RatingUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutJourneyInput | RatingCreateOrConnectWithoutJourneyInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutJourneyInput | RatingUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: RatingCreateManyJourneyInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutJourneyInput | RatingUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutJourneyInput | RatingUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput> | ReportCreateWithoutJourneyInput[] | ReportUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutJourneyInput | ReportCreateOrConnectWithoutJourneyInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutJourneyInput | ReportUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: ReportCreateManyJourneyInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutJourneyInput | ReportUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutJourneyInput | ReportUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput> | MessageCreateWithoutJourneyInput[] | MessageUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutJourneyInput | MessageCreateOrConnectWithoutJourneyInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutJourneyInput | MessageUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: MessageCreateManyJourneyInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutJourneyInput | MessageUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutJourneyInput | MessageUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput> | RatingCreateWithoutJourneyInput[] | RatingUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutJourneyInput | RatingCreateOrConnectWithoutJourneyInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutJourneyInput | RatingUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: RatingCreateManyJourneyInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutJourneyInput | RatingUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutJourneyInput | RatingUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput> | ReportCreateWithoutJourneyInput[] | ReportUncheckedCreateWithoutJourneyInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutJourneyInput | ReportCreateOrConnectWithoutJourneyInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutJourneyInput | ReportUpsertWithWhereUniqueWithoutJourneyInput[]
    createMany?: ReportCreateManyJourneyInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutJourneyInput | ReportUpdateWithWhereUniqueWithoutJourneyInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutJourneyInput | ReportUpdateManyWithWhereWithoutJourneyInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type JourneyCreateNestedOneWithoutMessagesInput = {
    create?: XOR<JourneyCreateWithoutMessagesInput, JourneyUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutMessagesInput
    connect?: JourneyWhereUniqueInput
  }

  export type CompanionRequestCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CompanionRequestCreateWithoutMessagesInput, CompanionRequestUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutMessagesInput
    connect?: CompanionRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type JourneyUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<JourneyCreateWithoutMessagesInput, JourneyUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutMessagesInput
    upsert?: JourneyUpsertWithoutMessagesInput
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutMessagesInput, JourneyUpdateWithoutMessagesInput>, JourneyUncheckedUpdateWithoutMessagesInput>
  }

  export type CompanionRequestUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<CompanionRequestCreateWithoutMessagesInput, CompanionRequestUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CompanionRequestCreateOrConnectWithoutMessagesInput
    upsert?: CompanionRequestUpsertWithoutMessagesInput
    connect?: CompanionRequestWhereUniqueInput
    update?: XOR<XOR<CompanionRequestUpdateToOneWithWhereWithoutMessagesInput, CompanionRequestUpdateWithoutMessagesInput>, CompanionRequestUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type JourneyCreateNestedOneWithoutRatingsInput = {
    create?: XOR<JourneyCreateWithoutRatingsInput, JourneyUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutRatingsInput
    connect?: JourneyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsGivenInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsReceivedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type JourneyUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<JourneyCreateWithoutRatingsInput, JourneyUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutRatingsInput
    upsert?: JourneyUpsertWithoutRatingsInput
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutRatingsInput, JourneyUpdateWithoutRatingsInput>, JourneyUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsGivenNestedInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    upsert?: UserUpsertWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsGivenInput, UserUpdateWithoutRatingsGivenInput>, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    upsert?: UserUpsertWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsReceivedInput, UserUpdateWithoutRatingsReceivedInput>, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type JourneyCreateNestedOneWithoutReportsInput = {
    create?: XOR<JourneyCreateWithoutReportsInput, JourneyUncheckedCreateWithoutReportsInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutReportsInput
    connect?: JourneyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsFiledInput = {
    create?: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsFiledInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsReceivedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type JourneyUpdateOneWithoutReportsNestedInput = {
    create?: XOR<JourneyCreateWithoutReportsInput, JourneyUncheckedCreateWithoutReportsInput>
    connectOrCreate?: JourneyCreateOrConnectWithoutReportsInput
    upsert?: JourneyUpsertWithoutReportsInput
    disconnect?: JourneyWhereInput | boolean
    delete?: JourneyWhereInput | boolean
    connect?: JourneyWhereUniqueInput
    update?: XOR<XOR<JourneyUpdateToOneWithWhereWithoutReportsInput, JourneyUpdateWithoutReportsInput>, JourneyUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateOneRequiredWithoutReportsFiledNestedInput = {
    create?: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsFiledInput
    upsert?: UserUpsertWithoutReportsFiledInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsFiledInput, UserUpdateWithoutReportsFiledInput>, UserUncheckedUpdateWithoutReportsFiledInput>
  }

  export type UserUpdateOneRequiredWithoutReportsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    upsert?: UserUpsertWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsReceivedInput, UserUpdateWithoutReportsReceivedInput>, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type UserCreateNestedOneWithoutTravelDocumentsInput = {
    create?: XOR<UserCreateWithoutTravelDocumentsInput, UserUncheckedCreateWithoutTravelDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTravelDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TravelDocumentStatus
  }

  export type UserUpdateOneRequiredWithoutTravelDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutTravelDocumentsInput, UserUncheckedCreateWithoutTravelDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelDocumentsInput
    upsert?: UserUpsertWithoutTravelDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelDocumentsInput, UserUpdateWithoutTravelDocumentsInput>, UserUncheckedUpdateWithoutTravelDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransportModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportModeFilter<$PrismaModel> | $Enums.TransportMode
  }

  export type NestedEnumTransportModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportModeWithAggregatesFilter<$PrismaModel> | $Enums.TransportMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportModeFilter<$PrismaModel>
    _max?: NestedEnumTransportModeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTransportModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransportModeNullableFilter<$PrismaModel> | $Enums.TransportMode | null
  }

  export type NestedEnumTransportModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMode | EnumTransportModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransportMode[] | ListEnumTransportModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransportModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransportMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransportModeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransportModeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCompanionRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanionRequestStatus | EnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanionRequestStatusFilter<$PrismaModel> | $Enums.CompanionRequestStatus
  }

  export type NestedEnumCompanionRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanionRequestStatus | EnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanionRequestStatus[] | ListEnumCompanionRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanionRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanionRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanionRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumCompanionRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumJourneyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JourneyStatus | EnumJourneyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJourneyStatusFilter<$PrismaModel> | $Enums.JourneyStatus
  }

  export type NestedEnumJourneyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JourneyStatus | EnumJourneyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JourneyStatus[] | ListEnumJourneyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJourneyStatusWithAggregatesFilter<$PrismaModel> | $Enums.JourneyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJourneyStatusFilter<$PrismaModel>
    _max?: NestedEnumJourneyStatusFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumTravelDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelDocumentStatus | EnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelDocumentStatusFilter<$PrismaModel> | $Enums.TravelDocumentStatus
  }

  export type NestedEnumTravelDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelDocumentStatus | EnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelDocumentStatus[] | ListEnumTravelDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TravelDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumTravelDocumentStatusFilter<$PrismaModel>
  }

  export type RefreshSessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshSessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshSessionCreateOrConnectWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionCreateManyUserInputEnvelope = {
    data: RefreshSessionCreateManyUserInput | RefreshSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelOfferCreateWithoutOwnerInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestCreateNestedManyWithoutOfferInput
  }

  export type TravelOfferUncheckedCreateWithoutOwnerInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestUncheckedCreateNestedManyWithoutOfferInput
  }

  export type TravelOfferCreateOrConnectWithoutOwnerInput = {
    where: TravelOfferWhereUniqueInput
    create: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput>
  }

  export type TravelOfferCreateManyOwnerInputEnvelope = {
    data: TravelOfferCreateManyOwnerInput | TravelOfferCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TravelRequestCreateWithoutUserInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestCreateNestedManyWithoutTravelRequestInput
  }

  export type TravelRequestUncheckedCreateWithoutUserInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequests?: CompanionRequestUncheckedCreateNestedManyWithoutTravelRequestInput
  }

  export type TravelRequestCreateOrConnectWithoutUserInput = {
    where: TravelRequestWhereUniqueInput
    create: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput>
  }

  export type TravelRequestCreateManyUserInputEnvelope = {
    data: TravelRequestCreateManyUserInput | TravelRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanionRequestCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutSenderInput = {
    id?: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutSenderInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput>
  }

  export type CompanionRequestCreateManySenderInputEnvelope = {
    data: CompanionRequestCreateManySenderInput | CompanionRequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type CompanionRequestCreateWithoutRecipientInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutRecipientInput = {
    id?: string
    senderId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutRecipientInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput>
  }

  export type CompanionRequestCreateManyRecipientInputEnvelope = {
    data: CompanionRequestCreateManyRecipientInput | CompanionRequestCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    body: string
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMessagesInput
    request: CompanionRequestCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    journeyId: string
    requestId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutAuthorInput = {
    id?: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutRatingsInput
    subject: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateWithoutAuthorInput = {
    id?: string
    journeyId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput>
  }

  export type RatingCreateManyAuthorInputEnvelope = {
    data: RatingCreateManyAuthorInput | RatingCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutSubjectInput = {
    id?: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutRatingsInput
    author: UserCreateNestedOneWithoutRatingsGivenInput
  }

  export type RatingUncheckedCreateWithoutSubjectInput = {
    id?: string
    journeyId: string
    authorId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutSubjectInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput>
  }

  export type RatingCreateManySubjectInputEnvelope = {
    data: RatingCreateManySubjectInput | RatingCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutAuthorInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyCreateNestedOneWithoutReportsInput
    subject: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateWithoutAuthorInput = {
    id?: string
    journeyId?: string | null
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput>
  }

  export type ReportCreateManyAuthorInputEnvelope = {
    data: ReportCreateManyAuthorInput | ReportCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutSubjectInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyCreateNestedOneWithoutReportsInput
    author: UserCreateNestedOneWithoutReportsFiledInput
  }

  export type ReportUncheckedCreateWithoutSubjectInput = {
    id?: string
    journeyId?: string | null
    authorId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutSubjectInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput>
  }

  export type ReportCreateManySubjectInputEnvelope = {
    data: ReportCreateManySubjectInput | ReportCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TravelDocumentCreateWithoutUserInput = {
    id?: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelDocumentUncheckedCreateWithoutUserInput = {
    id?: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelDocumentCreateOrConnectWithoutUserInput = {
    where: TravelDocumentWhereUniqueInput
    create: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput>
  }

  export type TravelDocumentCreateManyUserInputEnvelope = {
    data: TravelDocumentCreateManyUserInput | TravelDocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    update: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    data: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
  }

  export type RefreshSessionUpdateManyWithWhereWithoutUserInput = {
    where: RefreshSessionScalarWhereInput
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshSessionScalarWhereInput = {
    AND?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    OR?: RefreshSessionScalarWhereInput[]
    NOT?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    id?: StringFilter<"RefreshSession"> | string
    userId?: StringFilter<"RefreshSession"> | string
    tokenHash?: StringFilter<"RefreshSession"> | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RefreshSession"> | Date | string
  }

  export type TravelOfferUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TravelOfferWhereUniqueInput
    update: XOR<TravelOfferUpdateWithoutOwnerInput, TravelOfferUncheckedUpdateWithoutOwnerInput>
    create: XOR<TravelOfferCreateWithoutOwnerInput, TravelOfferUncheckedCreateWithoutOwnerInput>
  }

  export type TravelOfferUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TravelOfferWhereUniqueInput
    data: XOR<TravelOfferUpdateWithoutOwnerInput, TravelOfferUncheckedUpdateWithoutOwnerInput>
  }

  export type TravelOfferUpdateManyWithWhereWithoutOwnerInput = {
    where: TravelOfferScalarWhereInput
    data: XOR<TravelOfferUpdateManyMutationInput, TravelOfferUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TravelOfferScalarWhereInput = {
    AND?: TravelOfferScalarWhereInput | TravelOfferScalarWhereInput[]
    OR?: TravelOfferScalarWhereInput[]
    NOT?: TravelOfferScalarWhereInput | TravelOfferScalarWhereInput[]
    id?: StringFilter<"TravelOffer"> | string
    ownerId?: StringFilter<"TravelOffer"> | string
    source?: StringFilter<"TravelOffer"> | string
    destination?: StringFilter<"TravelOffer"> | string
    departureAt?: DateTimeFilter<"TravelOffer"> | Date | string
    expiresAt?: DateTimeFilter<"TravelOffer"> | Date | string
    transportMode?: EnumTransportModeFilter<"TravelOffer"> | $Enums.TransportMode
    availableSeats?: IntFilter<"TravelOffer"> | number
    isActive?: BoolFilter<"TravelOffer"> | boolean
    createdAt?: DateTimeFilter<"TravelOffer"> | Date | string
    updatedAt?: DateTimeFilter<"TravelOffer"> | Date | string
  }

  export type TravelRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelRequestWhereUniqueInput
    update: XOR<TravelRequestUpdateWithoutUserInput, TravelRequestUncheckedUpdateWithoutUserInput>
    create: XOR<TravelRequestCreateWithoutUserInput, TravelRequestUncheckedCreateWithoutUserInput>
  }

  export type TravelRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelRequestWhereUniqueInput
    data: XOR<TravelRequestUpdateWithoutUserInput, TravelRequestUncheckedUpdateWithoutUserInput>
  }

  export type TravelRequestUpdateManyWithWhereWithoutUserInput = {
    where: TravelRequestScalarWhereInput
    data: XOR<TravelRequestUpdateManyMutationInput, TravelRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelRequestScalarWhereInput = {
    AND?: TravelRequestScalarWhereInput | TravelRequestScalarWhereInput[]
    OR?: TravelRequestScalarWhereInput[]
    NOT?: TravelRequestScalarWhereInput | TravelRequestScalarWhereInput[]
    id?: StringFilter<"TravelRequest"> | string
    userId?: StringFilter<"TravelRequest"> | string
    source?: StringFilter<"TravelRequest"> | string
    destination?: StringFilter<"TravelRequest"> | string
    departureAt?: DateTimeFilter<"TravelRequest"> | Date | string
    expiresAt?: DateTimeFilter<"TravelRequest"> | Date | string
    transportMode?: EnumTransportModeNullableFilter<"TravelRequest"> | $Enums.TransportMode | null
    passengersRequired?: IntFilter<"TravelRequest"> | number
    isActive?: BoolFilter<"TravelRequest"> | boolean
    createdAt?: DateTimeFilter<"TravelRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelRequest"> | Date | string
  }

  export type CompanionRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: CompanionRequestWhereUniqueInput
    update: XOR<CompanionRequestUpdateWithoutSenderInput, CompanionRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<CompanionRequestCreateWithoutSenderInput, CompanionRequestUncheckedCreateWithoutSenderInput>
  }

  export type CompanionRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: CompanionRequestWhereUniqueInput
    data: XOR<CompanionRequestUpdateWithoutSenderInput, CompanionRequestUncheckedUpdateWithoutSenderInput>
  }

  export type CompanionRequestUpdateManyWithWhereWithoutSenderInput = {
    where: CompanionRequestScalarWhereInput
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type CompanionRequestScalarWhereInput = {
    AND?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
    OR?: CompanionRequestScalarWhereInput[]
    NOT?: CompanionRequestScalarWhereInput | CompanionRequestScalarWhereInput[]
    id?: StringFilter<"CompanionRequest"> | string
    senderId?: StringFilter<"CompanionRequest"> | string
    recipientId?: StringFilter<"CompanionRequest"> | string
    travelRequestId?: StringFilter<"CompanionRequest"> | string
    offerId?: StringFilter<"CompanionRequest"> | string
    status?: EnumCompanionRequestStatusFilter<"CompanionRequest"> | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"CompanionRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionRequest"> | Date | string
  }

  export type CompanionRequestUpsertWithWhereUniqueWithoutRecipientInput = {
    where: CompanionRequestWhereUniqueInput
    update: XOR<CompanionRequestUpdateWithoutRecipientInput, CompanionRequestUncheckedUpdateWithoutRecipientInput>
    create: XOR<CompanionRequestCreateWithoutRecipientInput, CompanionRequestUncheckedCreateWithoutRecipientInput>
  }

  export type CompanionRequestUpdateWithWhereUniqueWithoutRecipientInput = {
    where: CompanionRequestWhereUniqueInput
    data: XOR<CompanionRequestUpdateWithoutRecipientInput, CompanionRequestUncheckedUpdateWithoutRecipientInput>
  }

  export type CompanionRequestUpdateManyWithWhereWithoutRecipientInput = {
    where: CompanionRequestScalarWhereInput
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyWithoutRecipientInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    journeyId?: StringFilter<"Message"> | string
    requestId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutAuthorInput, RatingUncheckedUpdateWithoutAuthorInput>
    create: XOR<RatingCreateWithoutAuthorInput, RatingUncheckedCreateWithoutAuthorInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutAuthorInput, RatingUncheckedUpdateWithoutAuthorInput>
  }

  export type RatingUpdateManyWithWhereWithoutAuthorInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    journeyId?: StringFilter<"Rating"> | string
    authorId?: StringFilter<"Rating"> | string
    subjectId?: StringFilter<"Rating"> | string
    stars?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutSubjectInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutSubjectInput, RatingUncheckedUpdateWithoutSubjectInput>
    create: XOR<RatingCreateWithoutSubjectInput, RatingUncheckedCreateWithoutSubjectInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutSubjectInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutSubjectInput, RatingUncheckedUpdateWithoutSubjectInput>
  }

  export type RatingUpdateManyWithWhereWithoutSubjectInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutAuthorInput, ReportUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReportCreateWithoutAuthorInput, ReportUncheckedCreateWithoutAuthorInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutAuthorInput, ReportUncheckedUpdateWithoutAuthorInput>
  }

  export type ReportUpdateManyWithWhereWithoutAuthorInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    journeyId?: StringNullableFilter<"Report"> | string | null
    authorId?: StringFilter<"Report"> | string
    subjectId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutSubjectInput, ReportUncheckedUpdateWithoutSubjectInput>
    create: XOR<ReportCreateWithoutSubjectInput, ReportUncheckedCreateWithoutSubjectInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutSubjectInput, ReportUncheckedUpdateWithoutSubjectInput>
  }

  export type ReportUpdateManyWithWhereWithoutSubjectInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TravelDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelDocumentWhereUniqueInput
    update: XOR<TravelDocumentUpdateWithoutUserInput, TravelDocumentUncheckedUpdateWithoutUserInput>
    create: XOR<TravelDocumentCreateWithoutUserInput, TravelDocumentUncheckedCreateWithoutUserInput>
  }

  export type TravelDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelDocumentWhereUniqueInput
    data: XOR<TravelDocumentUpdateWithoutUserInput, TravelDocumentUncheckedUpdateWithoutUserInput>
  }

  export type TravelDocumentUpdateManyWithWhereWithoutUserInput = {
    where: TravelDocumentScalarWhereInput
    data: XOR<TravelDocumentUpdateManyMutationInput, TravelDocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelDocumentScalarWhereInput = {
    AND?: TravelDocumentScalarWhereInput | TravelDocumentScalarWhereInput[]
    OR?: TravelDocumentScalarWhereInput[]
    NOT?: TravelDocumentScalarWhereInput | TravelDocumentScalarWhereInput[]
    id?: StringFilter<"TravelDocument"> | string
    userId?: StringFilter<"TravelDocument"> | string
    originalName?: StringFilter<"TravelDocument"> | string
    mimeType?: StringFilter<"TravelDocument"> | string
    ocrStatus?: EnumTravelDocumentStatusFilter<"TravelDocument"> | $Enums.TravelDocumentStatus
    rawText?: StringNullableFilter<"TravelDocument"> | string | null
    source?: StringNullableFilter<"TravelDocument"> | string | null
    destination?: StringNullableFilter<"TravelDocument"> | string | null
    departureAt?: DateTimeNullableFilter<"TravelDocument"> | Date | string | null
    transportMode?: EnumTransportModeNullableFilter<"TravelDocument"> | $Enums.TransportMode | null
    errorMessage?: StringNullableFilter<"TravelDocument"> | string | null
    createdAt?: DateTimeFilter<"TravelDocument"> | Date | string
    updatedAt?: DateTimeFilter<"TravelDocument"> | Date | string
  }

  export type UserCreateWithoutRefreshSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
  }

  export type UserUpsertWithoutRefreshSessionsInput = {
    update: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserUpdateWithoutRefreshSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTravelOffersInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTravelOffersInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTravelOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelOffersInput, UserUncheckedCreateWithoutTravelOffersInput>
  }

  export type CompanionRequestCreateWithoutOfferInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutOfferInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutOfferInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput>
  }

  export type CompanionRequestCreateManyOfferInputEnvelope = {
    data: CompanionRequestCreateManyOfferInput | CompanionRequestCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTravelOffersInput = {
    update: XOR<UserUpdateWithoutTravelOffersInput, UserUncheckedUpdateWithoutTravelOffersInput>
    create: XOR<UserCreateWithoutTravelOffersInput, UserUncheckedCreateWithoutTravelOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelOffersInput, UserUncheckedUpdateWithoutTravelOffersInput>
  }

  export type UserUpdateWithoutTravelOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanionRequestUpsertWithWhereUniqueWithoutOfferInput = {
    where: CompanionRequestWhereUniqueInput
    update: XOR<CompanionRequestUpdateWithoutOfferInput, CompanionRequestUncheckedUpdateWithoutOfferInput>
    create: XOR<CompanionRequestCreateWithoutOfferInput, CompanionRequestUncheckedCreateWithoutOfferInput>
  }

  export type CompanionRequestUpdateWithWhereUniqueWithoutOfferInput = {
    where: CompanionRequestWhereUniqueInput
    data: XOR<CompanionRequestUpdateWithoutOfferInput, CompanionRequestUncheckedUpdateWithoutOfferInput>
  }

  export type CompanionRequestUpdateManyWithWhereWithoutOfferInput = {
    where: CompanionRequestScalarWhereInput
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyWithoutOfferInput>
  }

  export type UserCreateWithoutTravelRequestsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTravelRequestsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTravelRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelRequestsInput, UserUncheckedCreateWithoutTravelRequestsInput>
  }

  export type CompanionRequestCreateWithoutTravelRequestInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutTravelRequestInput = {
    id?: string
    senderId: string
    recipientId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutTravelRequestInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput>
  }

  export type CompanionRequestCreateManyTravelRequestInputEnvelope = {
    data: CompanionRequestCreateManyTravelRequestInput | CompanionRequestCreateManyTravelRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTravelRequestsInput = {
    update: XOR<UserUpdateWithoutTravelRequestsInput, UserUncheckedUpdateWithoutTravelRequestsInput>
    create: XOR<UserCreateWithoutTravelRequestsInput, UserUncheckedCreateWithoutTravelRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelRequestsInput, UserUncheckedUpdateWithoutTravelRequestsInput>
  }

  export type UserUpdateWithoutTravelRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanionRequestUpsertWithWhereUniqueWithoutTravelRequestInput = {
    where: CompanionRequestWhereUniqueInput
    update: XOR<CompanionRequestUpdateWithoutTravelRequestInput, CompanionRequestUncheckedUpdateWithoutTravelRequestInput>
    create: XOR<CompanionRequestCreateWithoutTravelRequestInput, CompanionRequestUncheckedCreateWithoutTravelRequestInput>
  }

  export type CompanionRequestUpdateWithWhereUniqueWithoutTravelRequestInput = {
    where: CompanionRequestWhereUniqueInput
    data: XOR<CompanionRequestUpdateWithoutTravelRequestInput, CompanionRequestUncheckedUpdateWithoutTravelRequestInput>
  }

  export type CompanionRequestUpdateManyWithWhereWithoutTravelRequestInput = {
    where: CompanionRequestScalarWhereInput
    data: XOR<CompanionRequestUpdateManyMutationInput, CompanionRequestUncheckedUpdateManyWithoutTravelRequestInput>
  }

  export type UserCreateWithoutCompanionRequestsSentInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanionRequestsSentInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanionRequestsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanionRequestsSentInput, UserUncheckedCreateWithoutCompanionRequestsSentInput>
  }

  export type UserCreateWithoutCompanionRequestsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanionRequestsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanionRequestsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanionRequestsReceivedInput, UserUncheckedCreateWithoutCompanionRequestsReceivedInput>
  }

  export type TravelRequestCreateWithoutCompanionRequestsInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelRequestsInput
  }

  export type TravelRequestUncheckedCreateWithoutCompanionRequestsInput = {
    id?: string
    userId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRequestCreateOrConnectWithoutCompanionRequestsInput = {
    where: TravelRequestWhereUniqueInput
    create: XOR<TravelRequestCreateWithoutCompanionRequestsInput, TravelRequestUncheckedCreateWithoutCompanionRequestsInput>
  }

  export type TravelOfferCreateWithoutCompanionRequestsInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTravelOffersInput
  }

  export type TravelOfferUncheckedCreateWithoutCompanionRequestsInput = {
    id?: string
    ownerId: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelOfferCreateOrConnectWithoutCompanionRequestsInput = {
    where: TravelOfferWhereUniqueInput
    create: XOR<TravelOfferCreateWithoutCompanionRequestsInput, TravelOfferUncheckedCreateWithoutCompanionRequestsInput>
  }

  export type JourneyCreateWithoutCompanionRequestInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutJourneyInput
    ratings?: RatingCreateNestedManyWithoutJourneyInput
    reports?: ReportCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateWithoutCompanionRequestInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutJourneyInput
    ratings?: RatingUncheckedCreateNestedManyWithoutJourneyInput
    reports?: ReportUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyCreateOrConnectWithoutCompanionRequestInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
  }

  export type MessageCreateWithoutRequestInput = {
    id?: string
    body: string
    createdAt?: Date | string
    journey: JourneyCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutRequestInput = {
    id?: string
    journeyId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutRequestInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput>
  }

  export type MessageCreateManyRequestInputEnvelope = {
    data: MessageCreateManyRequestInput | MessageCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanionRequestsSentInput = {
    update: XOR<UserUpdateWithoutCompanionRequestsSentInput, UserUncheckedUpdateWithoutCompanionRequestsSentInput>
    create: XOR<UserCreateWithoutCompanionRequestsSentInput, UserUncheckedCreateWithoutCompanionRequestsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanionRequestsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanionRequestsSentInput, UserUncheckedUpdateWithoutCompanionRequestsSentInput>
  }

  export type UserUpdateWithoutCompanionRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanionRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutCompanionRequestsReceivedInput = {
    update: XOR<UserUpdateWithoutCompanionRequestsReceivedInput, UserUncheckedUpdateWithoutCompanionRequestsReceivedInput>
    create: XOR<UserCreateWithoutCompanionRequestsReceivedInput, UserUncheckedCreateWithoutCompanionRequestsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanionRequestsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanionRequestsReceivedInput, UserUncheckedUpdateWithoutCompanionRequestsReceivedInput>
  }

  export type UserUpdateWithoutCompanionRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanionRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelRequestUpsertWithoutCompanionRequestsInput = {
    update: XOR<TravelRequestUpdateWithoutCompanionRequestsInput, TravelRequestUncheckedUpdateWithoutCompanionRequestsInput>
    create: XOR<TravelRequestCreateWithoutCompanionRequestsInput, TravelRequestUncheckedCreateWithoutCompanionRequestsInput>
    where?: TravelRequestWhereInput
  }

  export type TravelRequestUpdateToOneWithWhereWithoutCompanionRequestsInput = {
    where?: TravelRequestWhereInput
    data: XOR<TravelRequestUpdateWithoutCompanionRequestsInput, TravelRequestUncheckedUpdateWithoutCompanionRequestsInput>
  }

  export type TravelRequestUpdateWithoutCompanionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelRequestsNestedInput
  }

  export type TravelRequestUncheckedUpdateWithoutCompanionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelOfferUpsertWithoutCompanionRequestsInput = {
    update: XOR<TravelOfferUpdateWithoutCompanionRequestsInput, TravelOfferUncheckedUpdateWithoutCompanionRequestsInput>
    create: XOR<TravelOfferCreateWithoutCompanionRequestsInput, TravelOfferUncheckedCreateWithoutCompanionRequestsInput>
    where?: TravelOfferWhereInput
  }

  export type TravelOfferUpdateToOneWithWhereWithoutCompanionRequestsInput = {
    where?: TravelOfferWhereInput
    data: XOR<TravelOfferUpdateWithoutCompanionRequestsInput, TravelOfferUncheckedUpdateWithoutCompanionRequestsInput>
  }

  export type TravelOfferUpdateWithoutCompanionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTravelOffersNestedInput
  }

  export type TravelOfferUncheckedUpdateWithoutCompanionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUpsertWithoutCompanionRequestInput = {
    update: XOR<JourneyUpdateWithoutCompanionRequestInput, JourneyUncheckedUpdateWithoutCompanionRequestInput>
    create: XOR<JourneyCreateWithoutCompanionRequestInput, JourneyUncheckedCreateWithoutCompanionRequestInput>
    where?: JourneyWhereInput
  }

  export type JourneyUpdateToOneWithWhereWithoutCompanionRequestInput = {
    where?: JourneyWhereInput
    data: XOR<JourneyUpdateWithoutCompanionRequestInput, JourneyUncheckedUpdateWithoutCompanionRequestInput>
  }

  export type JourneyUpdateWithoutCompanionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUpdateManyWithoutJourneyNestedInput
    reports?: ReportUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateWithoutCompanionRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutJourneyNestedInput
    reports?: ReportUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutRequestInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRequestInput, MessageUncheckedUpdateWithoutRequestInput>
    create: XOR<MessageCreateWithoutRequestInput, MessageUncheckedCreateWithoutRequestInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRequestInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRequestInput, MessageUncheckedUpdateWithoutRequestInput>
  }

  export type MessageUpdateManyWithWhereWithoutRequestInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRequestInput>
  }

  export type CompanionRequestCreateWithoutJourneyInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    messages?: MessageCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutJourneyInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutJourneyInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutJourneyInput, CompanionRequestUncheckedCreateWithoutJourneyInput>
  }

  export type MessageCreateWithoutJourneyInput = {
    id?: string
    body: string
    createdAt?: Date | string
    request: CompanionRequestCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutJourneyInput = {
    id?: string
    requestId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutJourneyInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput>
  }

  export type MessageCreateManyJourneyInputEnvelope = {
    data: MessageCreateManyJourneyInput | MessageCreateManyJourneyInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutJourneyInput = {
    id?: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRatingsGivenInput
    subject: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateWithoutJourneyInput = {
    id?: string
    authorId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutJourneyInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput>
  }

  export type RatingCreateManyJourneyInputEnvelope = {
    data: RatingCreateManyJourneyInput | RatingCreateManyJourneyInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutJourneyInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutReportsFiledInput
    subject: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateWithoutJourneyInput = {
    id?: string
    authorId: string
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutJourneyInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput>
  }

  export type ReportCreateManyJourneyInputEnvelope = {
    data: ReportCreateManyJourneyInput | ReportCreateManyJourneyInput[]
    skipDuplicates?: boolean
  }

  export type CompanionRequestUpsertWithoutJourneyInput = {
    update: XOR<CompanionRequestUpdateWithoutJourneyInput, CompanionRequestUncheckedUpdateWithoutJourneyInput>
    create: XOR<CompanionRequestCreateWithoutJourneyInput, CompanionRequestUncheckedCreateWithoutJourneyInput>
    where?: CompanionRequestWhereInput
  }

  export type CompanionRequestUpdateToOneWithWhereWithoutJourneyInput = {
    where?: CompanionRequestWhereInput
    data: XOR<CompanionRequestUpdateWithoutJourneyInput, CompanionRequestUncheckedUpdateWithoutJourneyInput>
  }

  export type CompanionRequestUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutJourneyInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutJourneyInput, MessageUncheckedUpdateWithoutJourneyInput>
    create: XOR<MessageCreateWithoutJourneyInput, MessageUncheckedCreateWithoutJourneyInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutJourneyInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutJourneyInput, MessageUncheckedUpdateWithoutJourneyInput>
  }

  export type MessageUpdateManyWithWhereWithoutJourneyInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutJourneyInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutJourneyInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutJourneyInput, RatingUncheckedUpdateWithoutJourneyInput>
    create: XOR<RatingCreateWithoutJourneyInput, RatingUncheckedCreateWithoutJourneyInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutJourneyInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutJourneyInput, RatingUncheckedUpdateWithoutJourneyInput>
  }

  export type RatingUpdateManyWithWhereWithoutJourneyInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutJourneyInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutJourneyInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutJourneyInput, ReportUncheckedUpdateWithoutJourneyInput>
    create: XOR<ReportCreateWithoutJourneyInput, ReportUncheckedCreateWithoutJourneyInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutJourneyInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutJourneyInput, ReportUncheckedUpdateWithoutJourneyInput>
  }

  export type ReportUpdateManyWithWhereWithoutJourneyInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutJourneyInput>
  }

  export type JourneyCreateWithoutMessagesInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequest: CompanionRequestCreateNestedOneWithoutJourneyInput
    ratings?: RatingCreateNestedManyWithoutJourneyInput
    reports?: ReportCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateWithoutMessagesInput = {
    id?: string
    companionRequestId: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RatingUncheckedCreateNestedManyWithoutJourneyInput
    reports?: ReportUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyCreateOrConnectWithoutMessagesInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutMessagesInput, JourneyUncheckedCreateWithoutMessagesInput>
  }

  export type CompanionRequestCreateWithoutMessagesInput = {
    id?: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCompanionRequestsSentInput
    recipient: UserCreateNestedOneWithoutCompanionRequestsReceivedInput
    travelRequest: TravelRequestCreateNestedOneWithoutCompanionRequestsInput
    offer: TravelOfferCreateNestedOneWithoutCompanionRequestsInput
    journey?: JourneyCreateNestedOneWithoutCompanionRequestInput
  }

  export type CompanionRequestUncheckedCreateWithoutMessagesInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journey?: JourneyUncheckedCreateNestedOneWithoutCompanionRequestInput
  }

  export type CompanionRequestCreateOrConnectWithoutMessagesInput = {
    where: CompanionRequestWhereUniqueInput
    create: XOR<CompanionRequestCreateWithoutMessagesInput, CompanionRequestUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesSentInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type JourneyUpsertWithoutMessagesInput = {
    update: XOR<JourneyUpdateWithoutMessagesInput, JourneyUncheckedUpdateWithoutMessagesInput>
    create: XOR<JourneyCreateWithoutMessagesInput, JourneyUncheckedCreateWithoutMessagesInput>
    where?: JourneyWhereInput
  }

  export type JourneyUpdateToOneWithWhereWithoutMessagesInput = {
    where?: JourneyWhereInput
    data: XOR<JourneyUpdateWithoutMessagesInput, JourneyUncheckedUpdateWithoutMessagesInput>
  }

  export type JourneyUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequest?: CompanionRequestUpdateOneRequiredWithoutJourneyNestedInput
    ratings?: RatingUpdateManyWithoutJourneyNestedInput
    reports?: ReportUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RatingUncheckedUpdateManyWithoutJourneyNestedInput
    reports?: ReportUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type CompanionRequestUpsertWithoutMessagesInput = {
    update: XOR<CompanionRequestUpdateWithoutMessagesInput, CompanionRequestUncheckedUpdateWithoutMessagesInput>
    create: XOR<CompanionRequestCreateWithoutMessagesInput, CompanionRequestUncheckedCreateWithoutMessagesInput>
    where?: CompanionRequestWhereInput
  }

  export type CompanionRequestUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CompanionRequestWhereInput
    data: XOR<CompanionRequestUpdateWithoutMessagesInput, CompanionRequestUncheckedUpdateWithoutMessagesInput>
  }

  export type CompanionRequestUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JourneyCreateWithoutRatingsInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequest: CompanionRequestCreateNestedOneWithoutJourneyInput
    messages?: MessageCreateNestedManyWithoutJourneyInput
    reports?: ReportCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateWithoutRatingsInput = {
    id?: string
    companionRequestId: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutJourneyInput
    reports?: ReportUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyCreateOrConnectWithoutRatingsInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutRatingsInput, JourneyUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRatingsGivenInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsGivenInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
  }

  export type UserCreateWithoutRatingsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
  }

  export type JourneyUpsertWithoutRatingsInput = {
    update: XOR<JourneyUpdateWithoutRatingsInput, JourneyUncheckedUpdateWithoutRatingsInput>
    create: XOR<JourneyCreateWithoutRatingsInput, JourneyUncheckedCreateWithoutRatingsInput>
    where?: JourneyWhereInput
  }

  export type JourneyUpdateToOneWithWhereWithoutRatingsInput = {
    where?: JourneyWhereInput
    data: XOR<JourneyUpdateWithoutRatingsInput, JourneyUncheckedUpdateWithoutRatingsInput>
  }

  export type JourneyUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequest?: CompanionRequestUpdateOneRequiredWithoutJourneyNestedInput
    messages?: MessageUpdateManyWithoutJourneyNestedInput
    reports?: ReportUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutJourneyNestedInput
    reports?: ReportUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type UserUpsertWithoutRatingsGivenInput = {
    update: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutRatingsReceivedInput = {
    update: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JourneyCreateWithoutReportsInput = {
    id?: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionRequest: CompanionRequestCreateNestedOneWithoutJourneyInput
    messages?: MessageCreateNestedManyWithoutJourneyInput
    ratings?: RatingCreateNestedManyWithoutJourneyInput
  }

  export type JourneyUncheckedCreateWithoutReportsInput = {
    id?: string
    companionRequestId: string
    status?: $Enums.JourneyStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutJourneyInput
    ratings?: RatingUncheckedCreateNestedManyWithoutJourneyInput
  }

  export type JourneyCreateOrConnectWithoutReportsInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutReportsInput, JourneyUncheckedCreateWithoutReportsInput>
  }

  export type UserCreateWithoutReportsFiledInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsFiledInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsFiledInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
  }

  export type UserCreateWithoutReportsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    travelDocuments?: TravelDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsReceivedInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    travelDocuments?: TravelDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
  }

  export type JourneyUpsertWithoutReportsInput = {
    update: XOR<JourneyUpdateWithoutReportsInput, JourneyUncheckedUpdateWithoutReportsInput>
    create: XOR<JourneyCreateWithoutReportsInput, JourneyUncheckedCreateWithoutReportsInput>
    where?: JourneyWhereInput
  }

  export type JourneyUpdateToOneWithWhereWithoutReportsInput = {
    where?: JourneyWhereInput
    data: XOR<JourneyUpdateWithoutReportsInput, JourneyUncheckedUpdateWithoutReportsInput>
  }

  export type JourneyUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequest?: CompanionRequestUpdateOneRequiredWithoutJourneyNestedInput
    messages?: MessageUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUpdateManyWithoutJourneyNestedInput
  }

  export type JourneyUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumJourneyStatusFieldUpdateOperationsInput | $Enums.JourneyStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutJourneyNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutJourneyNestedInput
  }

  export type UserUpsertWithoutReportsFiledInput = {
    update: XOR<UserUpdateWithoutReportsFiledInput, UserUncheckedUpdateWithoutReportsFiledInput>
    create: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsFiledInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsFiledInput, UserUncheckedUpdateWithoutReportsFiledInput>
  }

  export type UserUpdateWithoutReportsFiledInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsFiledInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReportsReceivedInput = {
    update: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type UserUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    travelDocuments?: TravelDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    travelDocuments?: TravelDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTravelDocumentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportCreateNestedManyWithoutSubjectInput
  }

  export type UserUncheckedCreateWithoutTravelDocumentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    phoneNumber?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profileCompleted?: boolean
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    travelOffers?: TravelOfferUncheckedCreateNestedManyWithoutOwnerInput
    travelRequests?: TravelRequestUncheckedCreateNestedManyWithoutUserInput
    companionRequestsSent?: CompanionRequestUncheckedCreateNestedManyWithoutSenderInput
    companionRequestsReceived?: CompanionRequestUncheckedCreateNestedManyWithoutRecipientInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutAuthorInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutSubjectInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutAuthorInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type UserCreateOrConnectWithoutTravelDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelDocumentsInput, UserUncheckedCreateWithoutTravelDocumentsInput>
  }

  export type UserUpsertWithoutTravelDocumentsInput = {
    update: XOR<UserUpdateWithoutTravelDocumentsInput, UserUncheckedUpdateWithoutTravelDocumentsInput>
    create: XOR<UserCreateWithoutTravelDocumentsInput, UserUncheckedCreateWithoutTravelDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelDocumentsInput, UserUncheckedUpdateWithoutTravelDocumentsInput>
  }

  export type UserUpdateWithoutTravelDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUpdateManyWithoutSubjectNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    travelOffers?: TravelOfferUncheckedUpdateManyWithoutOwnerNestedInput
    travelRequests?: TravelRequestUncheckedUpdateManyWithoutUserNestedInput
    companionRequestsSent?: CompanionRequestUncheckedUpdateManyWithoutSenderNestedInput
    companionRequestsReceived?: CompanionRequestUncheckedUpdateManyWithoutRecipientNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutAuthorNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutSubjectNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutAuthorNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type RefreshSessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelOfferCreateManyOwnerInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode: $Enums.TransportMode
    availableSeats: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRequestCreateManyUserInput = {
    id?: string
    source: string
    destination: string
    departureAt: Date | string
    expiresAt: Date | string
    transportMode?: $Enums.TransportMode | null
    passengersRequired?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionRequestCreateManySenderInput = {
    id?: string
    recipientId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionRequestCreateManyRecipientInput = {
    id?: string
    senderId: string
    travelRequestId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    journeyId: string
    requestId: string
    body: string
    createdAt?: Date | string
  }

  export type RatingCreateManyAuthorInput = {
    id?: string
    journeyId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateManySubjectInput = {
    id?: string
    journeyId: string
    authorId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyAuthorInput = {
    id?: string
    journeyId?: string | null
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManySubjectInput = {
    id?: string
    journeyId?: string | null
    authorId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelDocumentCreateManyUserInput = {
    id?: string
    originalName: string
    mimeType: string
    ocrStatus?: $Enums.TravelDocumentStatus
    rawText?: string | null
    source?: string | null
    destination?: string | null
    departureAt?: Date | string | null
    transportMode?: $Enums.TransportMode | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelOfferUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUpdateManyWithoutOfferNestedInput
  }

  export type TravelOfferUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type TravelOfferUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: EnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode
    availableSeats?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUpdateManyWithoutTravelRequestNestedInput
  }

  export type TravelRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionRequests?: CompanionRequestUncheckedUpdateManyWithoutTravelRequestNestedInput
  }

  export type TravelRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    passengersRequired?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMessagesNestedInput
    request?: CompanionRequestUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutRatingsNestedInput
    subject?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutRatingsNestedInput
    author?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
  }

  export type RatingUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneWithoutReportsNestedInput
    subject?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneWithoutReportsNestedInput
    author?: UserUpdateOneRequiredWithoutReportsFiledNestedInput
  }

  export type ReportUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelDocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    ocrStatus?: EnumTravelDocumentStatusFieldUpdateOperationsInput | $Enums.TravelDocumentStatus
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    departureAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transportMode?: NullableEnumTransportModeFieldUpdateOperationsInput | $Enums.TransportMode | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestCreateManyOfferInput = {
    id?: string
    senderId: string
    recipientId: string
    travelRequestId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionRequestUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    travelRequest?: TravelRequestUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    travelRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionRequestCreateManyTravelRequestInput = {
    id?: string
    senderId: string
    recipientId: string
    offerId: string
    status?: $Enums.CompanionRequestStatus
    expiresAt: Date | string
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionRequestUpdateWithoutTravelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCompanionRequestsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutCompanionRequestsReceivedNestedInput
    offer?: TravelOfferUpdateOneRequiredWithoutCompanionRequestsNestedInput
    journey?: JourneyUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateWithoutTravelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUncheckedUpdateOneWithoutCompanionRequestNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CompanionRequestUncheckedUpdateManyWithoutTravelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: EnumCompanionRequestStatusFieldUpdateOperationsInput | $Enums.CompanionRequestStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyRequestInput = {
    id?: string
    journeyId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journey?: JourneyUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    journeyId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyJourneyInput = {
    id?: string
    requestId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type RatingCreateManyJourneyInput = {
    id?: string
    authorId: string
    subjectId: string
    stars: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyJourneyInput = {
    id?: string
    authorId: string
    subjectId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CompanionRequestUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
    subject?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportsFiledNestedInput
    subject?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}