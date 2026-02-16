
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
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Breeding
 * 
 */
export type Breeding = $Result.DefaultSelection<Prisma.$BreedingPayload>
/**
 * Model Breeding_Rec
 * 
 */
export type Breeding_Rec = $Result.DefaultSelection<Prisma.$Breeding_RecPayload>
/**
 * Model RelatedNess_Estimates
 * 
 */
export type RelatedNess_Estimates = $Result.DefaultSelection<Prisma.$RelatedNess_EstimatesPayload>
/**
 * Model Perfomance_Records
 * 
 */
export type Perfomance_Records = $Result.DefaultSelection<Prisma.$Perfomance_RecordsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AnimalSpecies: {
  HOLSTEIN_COW: 'HOLSTEIN_COW',
  FREISIAN_COW: 'FREISIAN_COW',
  ANKOLE_COW: 'ANKOLE_COW',
  BROWN_SWISS_COW: 'BROWN_SWISS_COW',
  GIROLANDO_COW: 'GIROLANDO_COW',
  JERSEY_COW: 'JERSEY_COW',
  LARGE_WHITE_PIG: 'LARGE_WHITE_PIG',
  DUROC_PIG: 'DUROC_PIG',
  MERINO_SHEEP: 'MERINO_SHEEP',
  LOCAL_GOAT: 'LOCAL_GOAT'
};

export type AnimalSpecies = (typeof AnimalSpecies)[keyof typeof AnimalSpecies]


export const AnimalType: {
  COW: 'COW',
  GOAT: 'GOAT',
  PIG: 'PIG',
  SHEEP: 'SHEEP'
};

export type AnimalType = (typeof AnimalType)[keyof typeof AnimalType]


export const BreedingMethod: {
  NATURAL: 'NATURAL',
  ARTIFICIAL_INSEMINATION: 'ARTIFICIAL_INSEMINATION',
  EMBRYO_TRANSFER: 'EMBRYO_TRANSFER',
  OTHER: 'OTHER'
};

export type BreedingMethod = (typeof BreedingMethod)[keyof typeof BreedingMethod]


export const AnimalHealth: {
  HEALTHY: 'HEALTHY',
  SICK: 'SICK',
  RECOVERING: 'RECOVERING'
};

export type AnimalHealth = (typeof AnimalHealth)[keyof typeof AnimalHealth]


export const AnimalStatus: {
  ALIVE: 'ALIVE',
  DECEASED: 'DECEASED',
  SOLD: 'SOLD',
  PREGNANT: 'PREGNANT',
  OTHER: 'OTHER'
};

export type AnimalStatus = (typeof AnimalStatus)[keyof typeof AnimalStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AnimalSpecies = $Enums.AnimalSpecies

export const AnimalSpecies: typeof $Enums.AnimalSpecies

export type AnimalType = $Enums.AnimalType

export const AnimalType: typeof $Enums.AnimalType

export type BreedingMethod = $Enums.BreedingMethod

export const BreedingMethod: typeof $Enums.BreedingMethod

export type AnimalHealth = $Enums.AnimalHealth

export const AnimalHealth: typeof $Enums.AnimalHealth

export type AnimalStatus = $Enums.AnimalStatus

export const AnimalStatus: typeof $Enums.AnimalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breeding`: Exposes CRUD operations for the **Breeding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breedings
    * const breedings = await prisma.breeding.findMany()
    * ```
    */
  get breeding(): Prisma.BreedingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breeding_Rec`: Exposes CRUD operations for the **Breeding_Rec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breeding_Recs
    * const breeding_Recs = await prisma.breeding_Rec.findMany()
    * ```
    */
  get breeding_Rec(): Prisma.Breeding_RecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatedNess_Estimates`: Exposes CRUD operations for the **RelatedNess_Estimates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatedNess_Estimates
    * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findMany()
    * ```
    */
  get relatedNess_Estimates(): Prisma.RelatedNess_EstimatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfomance_Records`: Exposes CRUD operations for the **Perfomance_Records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfomance_Records
    * const perfomance_Records = await prisma.perfomance_Records.findMany()
    * ```
    */
  get perfomance_Records(): Prisma.Perfomance_RecordsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Animal: 'Animal',
    Breeding: 'Breeding',
    Breeding_Rec: 'Breeding_Rec',
    RelatedNess_Estimates: 'RelatedNess_Estimates',
    Perfomance_Records: 'Perfomance_Records'
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
      modelProps: "user" | "animal" | "breeding" | "breeding_Rec" | "relatedNess_Estimates" | "perfomance_Records"
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
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Breeding: {
        payload: Prisma.$BreedingPayload<ExtArgs>
        fields: Prisma.BreedingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreedingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreedingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          findFirst: {
            args: Prisma.BreedingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreedingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          findMany: {
            args: Prisma.BreedingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>[]
          }
          create: {
            args: Prisma.BreedingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          createMany: {
            args: Prisma.BreedingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreedingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>[]
          }
          delete: {
            args: Prisma.BreedingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          update: {
            args: Prisma.BreedingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          deleteMany: {
            args: Prisma.BreedingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreedingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreedingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>[]
          }
          upsert: {
            args: Prisma.BreedingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedingPayload>
          }
          aggregate: {
            args: Prisma.BreedingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreeding>
          }
          groupBy: {
            args: Prisma.BreedingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreedingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreedingCountArgs<ExtArgs>
            result: $Utils.Optional<BreedingCountAggregateOutputType> | number
          }
        }
      }
      Breeding_Rec: {
        payload: Prisma.$Breeding_RecPayload<ExtArgs>
        fields: Prisma.Breeding_RecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Breeding_RecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Breeding_RecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          findFirst: {
            args: Prisma.Breeding_RecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Breeding_RecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          findMany: {
            args: Prisma.Breeding_RecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>[]
          }
          create: {
            args: Prisma.Breeding_RecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          createMany: {
            args: Prisma.Breeding_RecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Breeding_RecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>[]
          }
          delete: {
            args: Prisma.Breeding_RecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          update: {
            args: Prisma.Breeding_RecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          deleteMany: {
            args: Prisma.Breeding_RecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Breeding_RecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Breeding_RecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>[]
          }
          upsert: {
            args: Prisma.Breeding_RecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Breeding_RecPayload>
          }
          aggregate: {
            args: Prisma.Breeding_RecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreeding_Rec>
          }
          groupBy: {
            args: Prisma.Breeding_RecGroupByArgs<ExtArgs>
            result: $Utils.Optional<Breeding_RecGroupByOutputType>[]
          }
          count: {
            args: Prisma.Breeding_RecCountArgs<ExtArgs>
            result: $Utils.Optional<Breeding_RecCountAggregateOutputType> | number
          }
        }
      }
      RelatedNess_Estimates: {
        payload: Prisma.$RelatedNess_EstimatesPayload<ExtArgs>
        fields: Prisma.RelatedNess_EstimatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatedNess_EstimatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatedNess_EstimatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          findFirst: {
            args: Prisma.RelatedNess_EstimatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatedNess_EstimatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          findMany: {
            args: Prisma.RelatedNess_EstimatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>[]
          }
          create: {
            args: Prisma.RelatedNess_EstimatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          createMany: {
            args: Prisma.RelatedNess_EstimatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatedNess_EstimatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>[]
          }
          delete: {
            args: Prisma.RelatedNess_EstimatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          update: {
            args: Prisma.RelatedNess_EstimatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          deleteMany: {
            args: Prisma.RelatedNess_EstimatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatedNess_EstimatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatedNess_EstimatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>[]
          }
          upsert: {
            args: Prisma.RelatedNess_EstimatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedNess_EstimatesPayload>
          }
          aggregate: {
            args: Prisma.RelatedNess_EstimatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatedNess_Estimates>
          }
          groupBy: {
            args: Prisma.RelatedNess_EstimatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatedNess_EstimatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatedNess_EstimatesCountArgs<ExtArgs>
            result: $Utils.Optional<RelatedNess_EstimatesCountAggregateOutputType> | number
          }
        }
      }
      Perfomance_Records: {
        payload: Prisma.$Perfomance_RecordsPayload<ExtArgs>
        fields: Prisma.Perfomance_RecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Perfomance_RecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Perfomance_RecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          findFirst: {
            args: Prisma.Perfomance_RecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Perfomance_RecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          findMany: {
            args: Prisma.Perfomance_RecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>[]
          }
          create: {
            args: Prisma.Perfomance_RecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          createMany: {
            args: Prisma.Perfomance_RecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Perfomance_RecordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>[]
          }
          delete: {
            args: Prisma.Perfomance_RecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          update: {
            args: Prisma.Perfomance_RecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          deleteMany: {
            args: Prisma.Perfomance_RecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Perfomance_RecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Perfomance_RecordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>[]
          }
          upsert: {
            args: Prisma.Perfomance_RecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Perfomance_RecordsPayload>
          }
          aggregate: {
            args: Prisma.Perfomance_RecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfomance_Records>
          }
          groupBy: {
            args: Prisma.Perfomance_RecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Perfomance_RecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Perfomance_RecordsCountArgs<ExtArgs>
            result: $Utils.Optional<Perfomance_RecordsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    animal?: AnimalOmit
    breeding?: BreedingOmit
    breeding_Rec?: Breeding_RecOmit
    relatedNess_Estimates?: RelatedNess_EstimatesOmit
    perfomance_Records?: Perfomance_RecordsOmit
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
    animals: number
    breedingsInvolved: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | UserCountOutputTypeCountAnimalsArgs
    breedingsInvolved?: boolean | UserCountOutputTypeCountBreedingsInvolvedArgs
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
  export type UserCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBreedingsInvolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedingWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    offspringsAsFather: number
    offspringAsMother: number
    breedingAsMother: number
    breedingAsFather: number
    originalBreedingRecs: number
    recommendedBreedingRecs: number
    relatednessAsAnimal1: number
    relatednessAsAnimal2: number
    performanceRecords: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offspringsAsFather?: boolean | AnimalCountOutputTypeCountOffspringsAsFatherArgs
    offspringAsMother?: boolean | AnimalCountOutputTypeCountOffspringAsMotherArgs
    breedingAsMother?: boolean | AnimalCountOutputTypeCountBreedingAsMotherArgs
    breedingAsFather?: boolean | AnimalCountOutputTypeCountBreedingAsFatherArgs
    originalBreedingRecs?: boolean | AnimalCountOutputTypeCountOriginalBreedingRecsArgs
    recommendedBreedingRecs?: boolean | AnimalCountOutputTypeCountRecommendedBreedingRecsArgs
    relatednessAsAnimal1?: boolean | AnimalCountOutputTypeCountRelatednessAsAnimal1Args
    relatednessAsAnimal2?: boolean | AnimalCountOutputTypeCountRelatednessAsAnimal2Args
    performanceRecords?: boolean | AnimalCountOutputTypeCountPerformanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountOffspringsAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountOffspringAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountBreedingAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedingWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountBreedingAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedingWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountOriginalBreedingRecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Breeding_RecWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountRecommendedBreedingRecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Breeding_RecWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountRelatednessAsAnimal1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedNess_EstimatesWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountRelatednessAsAnimal2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedNess_EstimatesWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountPerformanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Perfomance_RecordsWhereInput
  }


  /**
   * Count Type BreedingCountOutputType
   */

  export type BreedingCountOutputType = {
    offspring: number
    farmers: number
  }

  export type BreedingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offspring?: boolean | BreedingCountOutputTypeCountOffspringArgs
    farmers?: boolean | BreedingCountOutputTypeCountFarmersArgs
  }

  // Custom InputTypes
  /**
   * BreedingCountOutputType without action
   */
  export type BreedingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedingCountOutputType
     */
    select?: BreedingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BreedingCountOutputType without action
   */
  export type BreedingCountOutputTypeCountOffspringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * BreedingCountOutputType without action
   */
  export type BreedingCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    userId: string | null
    name: string | null
    sex: $Enums.Gender | null
    password: string | null
    phone_number: string | null
    email: string | null
    createdAt: Date | null
    lastActive: Date | null
    farmingSystem: string | null
    district: string | null
    sector: string | null
    village: string | null
    cell: string | null
    latitude: string | null
    longitude: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    sex: $Enums.Gender | null
    password: string | null
    phone_number: string | null
    email: string | null
    createdAt: Date | null
    lastActive: Date | null
    farmingSystem: string | null
    district: string | null
    sector: string | null
    village: string | null
    cell: string | null
    latitude: string | null
    longitude: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    name: number
    sex: number
    password: number
    phone_number: number
    email: number
    createdAt: number
    lastActive: number
    farmingSystem: number
    district: number
    sector: number
    village: number
    cell: number
    latitude: number
    longitude: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    name?: true
    sex?: true
    password?: true
    phone_number?: true
    email?: true
    createdAt?: true
    lastActive?: true
    farmingSystem?: true
    district?: true
    sector?: true
    village?: true
    cell?: true
    latitude?: true
    longitude?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    name?: true
    sex?: true
    password?: true
    phone_number?: true
    email?: true
    createdAt?: true
    lastActive?: true
    farmingSystem?: true
    district?: true
    sector?: true
    village?: true
    cell?: true
    latitude?: true
    longitude?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    name?: true
    sex?: true
    password?: true
    phone_number?: true
    email?: true
    createdAt?: true
    lastActive?: true
    farmingSystem?: true
    district?: true
    sector?: true
    village?: true
    cell?: true
    latitude?: true
    longitude?: true
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
    userId: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email: string | null
    createdAt: Date
    lastActive: Date
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
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
    userId?: boolean
    name?: boolean
    sex?: boolean
    password?: boolean
    phone_number?: boolean
    email?: boolean
    createdAt?: boolean
    lastActive?: boolean
    farmingSystem?: boolean
    district?: boolean
    sector?: boolean
    village?: boolean
    cell?: boolean
    latitude?: boolean
    longitude?: boolean
    animals?: boolean | User$animalsArgs<ExtArgs>
    breedingsInvolved?: boolean | User$breedingsInvolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    sex?: boolean
    password?: boolean
    phone_number?: boolean
    email?: boolean
    createdAt?: boolean
    lastActive?: boolean
    farmingSystem?: boolean
    district?: boolean
    sector?: boolean
    village?: boolean
    cell?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    sex?: boolean
    password?: boolean
    phone_number?: boolean
    email?: boolean
    createdAt?: boolean
    lastActive?: boolean
    farmingSystem?: boolean
    district?: boolean
    sector?: boolean
    village?: boolean
    cell?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    name?: boolean
    sex?: boolean
    password?: boolean
    phone_number?: boolean
    email?: boolean
    createdAt?: boolean
    lastActive?: boolean
    farmingSystem?: boolean
    district?: boolean
    sector?: boolean
    village?: boolean
    cell?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "sex" | "password" | "phone_number" | "email" | "createdAt" | "lastActive" | "farmingSystem" | "district" | "sector" | "village" | "cell" | "latitude" | "longitude", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | User$animalsArgs<ExtArgs>
    breedingsInvolved?: boolean | User$breedingsInvolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      animals: Prisma.$AnimalPayload<ExtArgs>[]
      breedingsInvolved: Prisma.$BreedingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      sex: $Enums.Gender
      password: string
      phone_number: string
      email: string | null
      createdAt: Date
      lastActive: Date
      farmingSystem: string
      district: string
      sector: string
      village: string
      cell: string
      latitude: string
      longitude: string
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    animals<T extends User$animalsArgs<ExtArgs> = {}>(args?: Subset<T, User$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    breedingsInvolved<T extends User$breedingsInvolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$breedingsInvolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'Gender'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly farmingSystem: FieldRef<"User", 'String'>
    readonly district: FieldRef<"User", 'String'>
    readonly sector: FieldRef<"User", 'String'>
    readonly village: FieldRef<"User", 'String'>
    readonly cell: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'String'>
    readonly longitude: FieldRef<"User", 'String'>
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
   * User.animals
   */
  export type User$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * User.breedingsInvolved
   */
  export type User$breedingsInvolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    where?: BreedingWhereInput
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    cursor?: BreedingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
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
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    breed_confidence: number | null
  }

  export type AnimalSumAggregateOutputType = {
    breed_confidence: number | null
  }

  export type AnimalMinAggregateOutputType = {
    animalId: string | null
    name: string | null
    sex: $Enums.Gender | null
    birthDate: Date | null
    type: $Enums.AnimalType | null
    registrationDate: Date | null
    profilePhoto: string | null
    updatedAt: Date | null
    status: $Enums.AnimalStatus | null
    motherId: string | null
    fatherId: string | null
    ownerId: string | null
    specie: $Enums.AnimalSpecies | null
    breed_confidence: number | null
    breedingEventId: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    animalId: string | null
    name: string | null
    sex: $Enums.Gender | null
    birthDate: Date | null
    type: $Enums.AnimalType | null
    registrationDate: Date | null
    profilePhoto: string | null
    updatedAt: Date | null
    status: $Enums.AnimalStatus | null
    motherId: string | null
    fatherId: string | null
    ownerId: string | null
    specie: $Enums.AnimalSpecies | null
    breed_confidence: number | null
    breedingEventId: string | null
  }

  export type AnimalCountAggregateOutputType = {
    animalId: number
    name: number
    sex: number
    birthDate: number
    type: number
    registrationDate: number
    profilePhoto: number
    additionalPhotos: number
    updatedAt: number
    status: number
    motherId: number
    fatherId: number
    ownerId: number
    specie: number
    breed_confidence: number
    breedingEventId: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    breed_confidence?: true
  }

  export type AnimalSumAggregateInputType = {
    breed_confidence?: true
  }

  export type AnimalMinAggregateInputType = {
    animalId?: true
    name?: true
    sex?: true
    birthDate?: true
    type?: true
    registrationDate?: true
    profilePhoto?: true
    updatedAt?: true
    status?: true
    motherId?: true
    fatherId?: true
    ownerId?: true
    specie?: true
    breed_confidence?: true
    breedingEventId?: true
  }

  export type AnimalMaxAggregateInputType = {
    animalId?: true
    name?: true
    sex?: true
    birthDate?: true
    type?: true
    registrationDate?: true
    profilePhoto?: true
    updatedAt?: true
    status?: true
    motherId?: true
    fatherId?: true
    ownerId?: true
    specie?: true
    breed_confidence?: true
    breedingEventId?: true
  }

  export type AnimalCountAggregateInputType = {
    animalId?: true
    name?: true
    sex?: true
    birthDate?: true
    type?: true
    registrationDate?: true
    profilePhoto?: true
    additionalPhotos?: true
    updatedAt?: true
    status?: true
    motherId?: true
    fatherId?: true
    ownerId?: true
    specie?: true
    breed_confidence?: true
    breedingEventId?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    animalId: string
    name: string | null
    sex: $Enums.Gender
    birthDate: Date
    type: $Enums.AnimalType
    registrationDate: Date
    profilePhoto: string
    additionalPhotos: JsonValue[]
    updatedAt: Date
    status: $Enums.AnimalStatus
    motherId: string | null
    fatherId: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    sex?: boolean
    birthDate?: boolean
    type?: boolean
    registrationDate?: boolean
    profilePhoto?: boolean
    additionalPhotos?: boolean
    updatedAt?: boolean
    status?: boolean
    motherId?: boolean
    fatherId?: boolean
    ownerId?: boolean
    specie?: boolean
    breed_confidence?: boolean
    breedingEventId?: boolean
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    offspringsAsFather?: boolean | Animal$offspringsAsFatherArgs<ExtArgs>
    offspringAsMother?: boolean | Animal$offspringAsMotherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingAsMother?: boolean | Animal$breedingAsMotherArgs<ExtArgs>
    breedingAsFather?: boolean | Animal$breedingAsFatherArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
    originalBreedingRecs?: boolean | Animal$originalBreedingRecsArgs<ExtArgs>
    recommendedBreedingRecs?: boolean | Animal$recommendedBreedingRecsArgs<ExtArgs>
    relatednessAsAnimal1?: boolean | Animal$relatednessAsAnimal1Args<ExtArgs>
    relatednessAsAnimal2?: boolean | Animal$relatednessAsAnimal2Args<ExtArgs>
    performanceRecords?: boolean | Animal$performanceRecordsArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    sex?: boolean
    birthDate?: boolean
    type?: boolean
    registrationDate?: boolean
    profilePhoto?: boolean
    additionalPhotos?: boolean
    updatedAt?: boolean
    status?: boolean
    motherId?: boolean
    fatherId?: boolean
    ownerId?: boolean
    specie?: boolean
    breed_confidence?: boolean
    breedingEventId?: boolean
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    sex?: boolean
    birthDate?: boolean
    type?: boolean
    registrationDate?: boolean
    profilePhoto?: boolean
    additionalPhotos?: boolean
    updatedAt?: boolean
    status?: boolean
    motherId?: boolean
    fatherId?: boolean
    ownerId?: boolean
    specie?: boolean
    breed_confidence?: boolean
    breedingEventId?: boolean
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    animalId?: boolean
    name?: boolean
    sex?: boolean
    birthDate?: boolean
    type?: boolean
    registrationDate?: boolean
    profilePhoto?: boolean
    additionalPhotos?: boolean
    updatedAt?: boolean
    status?: boolean
    motherId?: boolean
    fatherId?: boolean
    ownerId?: boolean
    specie?: boolean
    breed_confidence?: boolean
    breedingEventId?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"animalId" | "name" | "sex" | "birthDate" | "type" | "registrationDate" | "profilePhoto" | "additionalPhotos" | "updatedAt" | "status" | "motherId" | "fatherId" | "ownerId" | "specie" | "breed_confidence" | "breedingEventId", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    offspringsAsFather?: boolean | Animal$offspringsAsFatherArgs<ExtArgs>
    offspringAsMother?: boolean | Animal$offspringAsMotherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingAsMother?: boolean | Animal$breedingAsMotherArgs<ExtArgs>
    breedingAsFather?: boolean | Animal$breedingAsFatherArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
    originalBreedingRecs?: boolean | Animal$originalBreedingRecsArgs<ExtArgs>
    recommendedBreedingRecs?: boolean | Animal$recommendedBreedingRecsArgs<ExtArgs>
    relatednessAsAnimal1?: boolean | Animal$relatednessAsAnimal1Args<ExtArgs>
    relatednessAsAnimal2?: boolean | Animal$relatednessAsAnimal2Args<ExtArgs>
    performanceRecords?: boolean | Animal$performanceRecordsArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mother?: boolean | Animal$motherArgs<ExtArgs>
    father?: boolean | Animal$fatherArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    breedingEvent?: boolean | BreedingDefaultArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      mother: Prisma.$AnimalPayload<ExtArgs> | null
      father: Prisma.$AnimalPayload<ExtArgs> | null
      offspringsAsFather: Prisma.$AnimalPayload<ExtArgs>[]
      offspringAsMother: Prisma.$AnimalPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      breedingAsMother: Prisma.$BreedingPayload<ExtArgs>[]
      breedingAsFather: Prisma.$BreedingPayload<ExtArgs>[]
      breedingEvent: Prisma.$BreedingPayload<ExtArgs>
      originalBreedingRecs: Prisma.$Breeding_RecPayload<ExtArgs>[]
      recommendedBreedingRecs: Prisma.$Breeding_RecPayload<ExtArgs>[]
      relatednessAsAnimal1: Prisma.$RelatedNess_EstimatesPayload<ExtArgs>[]
      relatednessAsAnimal2: Prisma.$RelatedNess_EstimatesPayload<ExtArgs>[]
      performanceRecords: Prisma.$Perfomance_RecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      animalId: string
      name: string | null
      sex: $Enums.Gender
      birthDate: Date
      type: $Enums.AnimalType
      registrationDate: Date
      profilePhoto: string
      additionalPhotos: Prisma.JsonValue[]
      updatedAt: Date
      status: $Enums.AnimalStatus
      motherId: string | null
      fatherId: string | null
      ownerId: string
      specie: $Enums.AnimalSpecies
      breed_confidence: number
      breedingEventId: string
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.findMany({ select: { animalId: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { animalId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.updateManyAndReturn({
     *   select: { animalId: true },
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mother<T extends Animal$motherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$motherArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    father<T extends Animal$fatherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$fatherArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    offspringsAsFather<T extends Animal$offspringsAsFatherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$offspringsAsFatherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offspringAsMother<T extends Animal$offspringAsMotherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$offspringAsMotherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    breedingAsMother<T extends Animal$breedingAsMotherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$breedingAsMotherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    breedingAsFather<T extends Animal$breedingAsFatherArgs<ExtArgs> = {}>(args?: Subset<T, Animal$breedingAsFatherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    breedingEvent<T extends BreedingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BreedingDefaultArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    originalBreedingRecs<T extends Animal$originalBreedingRecsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$originalBreedingRecsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendedBreedingRecs<T extends Animal$recommendedBreedingRecsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$recommendedBreedingRecsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatednessAsAnimal1<T extends Animal$relatednessAsAnimal1Args<ExtArgs> = {}>(args?: Subset<T, Animal$relatednessAsAnimal1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatednessAsAnimal2<T extends Animal$relatednessAsAnimal2Args<ExtArgs> = {}>(args?: Subset<T, Animal$relatednessAsAnimal2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performanceRecords<T extends Animal$performanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$performanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly animalId: FieldRef<"Animal", 'String'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly sex: FieldRef<"Animal", 'Gender'>
    readonly birthDate: FieldRef<"Animal", 'DateTime'>
    readonly type: FieldRef<"Animal", 'AnimalType'>
    readonly registrationDate: FieldRef<"Animal", 'DateTime'>
    readonly profilePhoto: FieldRef<"Animal", 'String'>
    readonly additionalPhotos: FieldRef<"Animal", 'Json[]'>
    readonly updatedAt: FieldRef<"Animal", 'DateTime'>
    readonly status: FieldRef<"Animal", 'AnimalStatus'>
    readonly motherId: FieldRef<"Animal", 'String'>
    readonly fatherId: FieldRef<"Animal", 'String'>
    readonly ownerId: FieldRef<"Animal", 'String'>
    readonly specie: FieldRef<"Animal", 'AnimalSpecies'>
    readonly breed_confidence: FieldRef<"Animal", 'Float'>
    readonly breedingEventId: FieldRef<"Animal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.mother
   */
  export type Animal$motherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Animal.father
   */
  export type Animal$fatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Animal.offspringsAsFather
   */
  export type Animal$offspringsAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal.offspringAsMother
   */
  export type Animal$offspringAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal.breedingAsMother
   */
  export type Animal$breedingAsMotherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    where?: BreedingWhereInput
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    cursor?: BreedingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
  }

  /**
   * Animal.breedingAsFather
   */
  export type Animal$breedingAsFatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    where?: BreedingWhereInput
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    cursor?: BreedingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
  }

  /**
   * Animal.originalBreedingRecs
   */
  export type Animal$originalBreedingRecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    where?: Breeding_RecWhereInput
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    cursor?: Breeding_RecWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Breeding_RecScalarFieldEnum | Breeding_RecScalarFieldEnum[]
  }

  /**
   * Animal.recommendedBreedingRecs
   */
  export type Animal$recommendedBreedingRecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    where?: Breeding_RecWhereInput
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    cursor?: Breeding_RecWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Breeding_RecScalarFieldEnum | Breeding_RecScalarFieldEnum[]
  }

  /**
   * Animal.relatednessAsAnimal1
   */
  export type Animal$relatednessAsAnimal1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    where?: RelatedNess_EstimatesWhereInput
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedNess_EstimatesScalarFieldEnum | RelatedNess_EstimatesScalarFieldEnum[]
  }

  /**
   * Animal.relatednessAsAnimal2
   */
  export type Animal$relatednessAsAnimal2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    where?: RelatedNess_EstimatesWhereInput
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedNess_EstimatesScalarFieldEnum | RelatedNess_EstimatesScalarFieldEnum[]
  }

  /**
   * Animal.performanceRecords
   */
  export type Animal$performanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    where?: Perfomance_RecordsWhereInput
    orderBy?: Perfomance_RecordsOrderByWithRelationInput | Perfomance_RecordsOrderByWithRelationInput[]
    cursor?: Perfomance_RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Perfomance_RecordsScalarFieldEnum | Perfomance_RecordsScalarFieldEnum[]
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Breeding
   */

  export type AggregateBreeding = {
    _count: BreedingCountAggregateOutputType | null
    _avg: BreedingAvgAggregateOutputType | null
    _sum: BreedingSumAggregateOutputType | null
    _min: BreedingMinAggregateOutputType | null
    _max: BreedingMaxAggregateOutputType | null
  }

  export type BreedingAvgAggregateOutputType = {
    userRating: number | null
  }

  export type BreedingSumAggregateOutputType = {
    userRating: number | null
  }

  export type BreedingMinAggregateOutputType = {
    breedingId: string | null
    motherId: string | null
    fatherId: string | null
    breedingDate: Date | null
    method: $Enums.BreedingMethod | null
    expectedCalvingDate: Date | null
    calving_date: Date | null
    userRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreedingMaxAggregateOutputType = {
    breedingId: string | null
    motherId: string | null
    fatherId: string | null
    breedingDate: Date | null
    method: $Enums.BreedingMethod | null
    expectedCalvingDate: Date | null
    calving_date: Date | null
    userRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreedingCountAggregateOutputType = {
    breedingId: number
    motherId: number
    fatherId: number
    breedingDate: number
    method: number
    expectedCalvingDate: number
    calving_date: number
    userRating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BreedingAvgAggregateInputType = {
    userRating?: true
  }

  export type BreedingSumAggregateInputType = {
    userRating?: true
  }

  export type BreedingMinAggregateInputType = {
    breedingId?: true
    motherId?: true
    fatherId?: true
    breedingDate?: true
    method?: true
    expectedCalvingDate?: true
    calving_date?: true
    userRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreedingMaxAggregateInputType = {
    breedingId?: true
    motherId?: true
    fatherId?: true
    breedingDate?: true
    method?: true
    expectedCalvingDate?: true
    calving_date?: true
    userRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreedingCountAggregateInputType = {
    breedingId?: true
    motherId?: true
    fatherId?: true
    breedingDate?: true
    method?: true
    expectedCalvingDate?: true
    calving_date?: true
    userRating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BreedingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeding to aggregate.
     */
    where?: BreedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breedings to fetch.
     */
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breedings
    **/
    _count?: true | BreedingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreedingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreedingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreedingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreedingMaxAggregateInputType
  }

  export type GetBreedingAggregateType<T extends BreedingAggregateArgs> = {
        [P in keyof T & keyof AggregateBreeding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreeding[P]>
      : GetScalarType<T[P], AggregateBreeding[P]>
  }




  export type BreedingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedingWhereInput
    orderBy?: BreedingOrderByWithAggregationInput | BreedingOrderByWithAggregationInput[]
    by: BreedingScalarFieldEnum[] | BreedingScalarFieldEnum
    having?: BreedingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreedingCountAggregateInputType | true
    _avg?: BreedingAvgAggregateInputType
    _sum?: BreedingSumAggregateInputType
    _min?: BreedingMinAggregateInputType
    _max?: BreedingMaxAggregateInputType
  }

  export type BreedingGroupByOutputType = {
    breedingId: string
    motherId: string
    fatherId: string
    breedingDate: Date
    method: $Enums.BreedingMethod
    expectedCalvingDate: Date | null
    calving_date: Date | null
    userRating: number | null
    createdAt: Date
    updatedAt: Date
    _count: BreedingCountAggregateOutputType | null
    _avg: BreedingAvgAggregateOutputType | null
    _sum: BreedingSumAggregateOutputType | null
    _min: BreedingMinAggregateOutputType | null
    _max: BreedingMaxAggregateOutputType | null
  }

  type GetBreedingGroupByPayload<T extends BreedingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreedingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreedingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreedingGroupByOutputType[P]>
            : GetScalarType<T[P], BreedingGroupByOutputType[P]>
        }
      >
    >


  export type BreedingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingId?: boolean
    motherId?: boolean
    fatherId?: boolean
    breedingDate?: boolean
    method?: boolean
    expectedCalvingDate?: boolean
    calving_date?: boolean
    userRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    offspring?: boolean | Breeding$offspringArgs<ExtArgs>
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
    farmers?: boolean | Breeding$farmersArgs<ExtArgs>
    _count?: boolean | BreedingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breeding"]>

  export type BreedingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingId?: boolean
    motherId?: boolean
    fatherId?: boolean
    breedingDate?: boolean
    method?: boolean
    expectedCalvingDate?: boolean
    calving_date?: boolean
    userRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
  }, ExtArgs["result"]["breeding"]>

  export type BreedingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingId?: boolean
    motherId?: boolean
    fatherId?: boolean
    breedingDate?: boolean
    method?: boolean
    expectedCalvingDate?: boolean
    calving_date?: boolean
    userRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
  }, ExtArgs["result"]["breeding"]>

  export type BreedingSelectScalar = {
    breedingId?: boolean
    motherId?: boolean
    fatherId?: boolean
    breedingDate?: boolean
    method?: boolean
    expectedCalvingDate?: boolean
    calving_date?: boolean
    userRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BreedingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"breedingId" | "motherId" | "fatherId" | "breedingDate" | "method" | "expectedCalvingDate" | "calving_date" | "userRating" | "createdAt" | "updatedAt", ExtArgs["result"]["breeding"]>
  export type BreedingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offspring?: boolean | Breeding$offspringArgs<ExtArgs>
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
    farmers?: boolean | Breeding$farmersArgs<ExtArgs>
    _count?: boolean | BreedingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BreedingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
  }
  export type BreedingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mother?: boolean | Breeding$motherArgs<ExtArgs>
    father?: boolean | Breeding$fatherArgs<ExtArgs>
  }

  export type $BreedingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breeding"
    objects: {
      offspring: Prisma.$AnimalPayload<ExtArgs>[]
      mother: Prisma.$AnimalPayload<ExtArgs> | null
      father: Prisma.$AnimalPayload<ExtArgs> | null
      farmers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      breedingId: string
      motherId: string
      fatherId: string
      breedingDate: Date
      method: $Enums.BreedingMethod
      expectedCalvingDate: Date | null
      calving_date: Date | null
      userRating: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["breeding"]>
    composites: {}
  }

  type BreedingGetPayload<S extends boolean | null | undefined | BreedingDefaultArgs> = $Result.GetResult<Prisma.$BreedingPayload, S>

  type BreedingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreedingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreedingCountAggregateInputType | true
    }

  export interface BreedingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breeding'], meta: { name: 'Breeding' } }
    /**
     * Find zero or one Breeding that matches the filter.
     * @param {BreedingFindUniqueArgs} args - Arguments to find a Breeding
     * @example
     * // Get one Breeding
     * const breeding = await prisma.breeding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreedingFindUniqueArgs>(args: SelectSubset<T, BreedingFindUniqueArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Breeding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreedingFindUniqueOrThrowArgs} args - Arguments to find a Breeding
     * @example
     * // Get one Breeding
     * const breeding = await prisma.breeding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreedingFindUniqueOrThrowArgs>(args: SelectSubset<T, BreedingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingFindFirstArgs} args - Arguments to find a Breeding
     * @example
     * // Get one Breeding
     * const breeding = await prisma.breeding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreedingFindFirstArgs>(args?: SelectSubset<T, BreedingFindFirstArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingFindFirstOrThrowArgs} args - Arguments to find a Breeding
     * @example
     * // Get one Breeding
     * const breeding = await prisma.breeding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreedingFindFirstOrThrowArgs>(args?: SelectSubset<T, BreedingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breedings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breedings
     * const breedings = await prisma.breeding.findMany()
     * 
     * // Get first 10 Breedings
     * const breedings = await prisma.breeding.findMany({ take: 10 })
     * 
     * // Only select the `breedingId`
     * const breedingWithBreedingIdOnly = await prisma.breeding.findMany({ select: { breedingId: true } })
     * 
     */
    findMany<T extends BreedingFindManyArgs>(args?: SelectSubset<T, BreedingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Breeding.
     * @param {BreedingCreateArgs} args - Arguments to create a Breeding.
     * @example
     * // Create one Breeding
     * const Breeding = await prisma.breeding.create({
     *   data: {
     *     // ... data to create a Breeding
     *   }
     * })
     * 
     */
    create<T extends BreedingCreateArgs>(args: SelectSubset<T, BreedingCreateArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breedings.
     * @param {BreedingCreateManyArgs} args - Arguments to create many Breedings.
     * @example
     * // Create many Breedings
     * const breeding = await prisma.breeding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreedingCreateManyArgs>(args?: SelectSubset<T, BreedingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breedings and returns the data saved in the database.
     * @param {BreedingCreateManyAndReturnArgs} args - Arguments to create many Breedings.
     * @example
     * // Create many Breedings
     * const breeding = await prisma.breeding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breedings and only return the `breedingId`
     * const breedingWithBreedingIdOnly = await prisma.breeding.createManyAndReturn({
     *   select: { breedingId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreedingCreateManyAndReturnArgs>(args?: SelectSubset<T, BreedingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Breeding.
     * @param {BreedingDeleteArgs} args - Arguments to delete one Breeding.
     * @example
     * // Delete one Breeding
     * const Breeding = await prisma.breeding.delete({
     *   where: {
     *     // ... filter to delete one Breeding
     *   }
     * })
     * 
     */
    delete<T extends BreedingDeleteArgs>(args: SelectSubset<T, BreedingDeleteArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Breeding.
     * @param {BreedingUpdateArgs} args - Arguments to update one Breeding.
     * @example
     * // Update one Breeding
     * const breeding = await prisma.breeding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreedingUpdateArgs>(args: SelectSubset<T, BreedingUpdateArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breedings.
     * @param {BreedingDeleteManyArgs} args - Arguments to filter Breedings to delete.
     * @example
     * // Delete a few Breedings
     * const { count } = await prisma.breeding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreedingDeleteManyArgs>(args?: SelectSubset<T, BreedingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breedings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breedings
     * const breeding = await prisma.breeding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreedingUpdateManyArgs>(args: SelectSubset<T, BreedingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breedings and returns the data updated in the database.
     * @param {BreedingUpdateManyAndReturnArgs} args - Arguments to update many Breedings.
     * @example
     * // Update many Breedings
     * const breeding = await prisma.breeding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Breedings and only return the `breedingId`
     * const breedingWithBreedingIdOnly = await prisma.breeding.updateManyAndReturn({
     *   select: { breedingId: true },
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
    updateManyAndReturn<T extends BreedingUpdateManyAndReturnArgs>(args: SelectSubset<T, BreedingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Breeding.
     * @param {BreedingUpsertArgs} args - Arguments to update or create a Breeding.
     * @example
     * // Update or create a Breeding
     * const breeding = await prisma.breeding.upsert({
     *   create: {
     *     // ... data to create a Breeding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breeding we want to update
     *   }
     * })
     */
    upsert<T extends BreedingUpsertArgs>(args: SelectSubset<T, BreedingUpsertArgs<ExtArgs>>): Prisma__BreedingClient<$Result.GetResult<Prisma.$BreedingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breedings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingCountArgs} args - Arguments to filter Breedings to count.
     * @example
     * // Count the number of Breedings
     * const count = await prisma.breeding.count({
     *   where: {
     *     // ... the filter for the Breedings we want to count
     *   }
     * })
    **/
    count<T extends BreedingCountArgs>(
      args?: Subset<T, BreedingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreedingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breeding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreedingAggregateArgs>(args: Subset<T, BreedingAggregateArgs>): Prisma.PrismaPromise<GetBreedingAggregateType<T>>

    /**
     * Group by Breeding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedingGroupByArgs} args - Group by arguments.
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
      T extends BreedingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreedingGroupByArgs['orderBy'] }
        : { orderBy?: BreedingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BreedingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreedingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breeding model
   */
  readonly fields: BreedingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breeding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreedingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offspring<T extends Breeding$offspringArgs<ExtArgs> = {}>(args?: Subset<T, Breeding$offspringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mother<T extends Breeding$motherArgs<ExtArgs> = {}>(args?: Subset<T, Breeding$motherArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    father<T extends Breeding$fatherArgs<ExtArgs> = {}>(args?: Subset<T, Breeding$fatherArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    farmers<T extends Breeding$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Breeding$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Breeding model
   */
  interface BreedingFieldRefs {
    readonly breedingId: FieldRef<"Breeding", 'String'>
    readonly motherId: FieldRef<"Breeding", 'String'>
    readonly fatherId: FieldRef<"Breeding", 'String'>
    readonly breedingDate: FieldRef<"Breeding", 'DateTime'>
    readonly method: FieldRef<"Breeding", 'BreedingMethod'>
    readonly expectedCalvingDate: FieldRef<"Breeding", 'DateTime'>
    readonly calving_date: FieldRef<"Breeding", 'DateTime'>
    readonly userRating: FieldRef<"Breeding", 'Int'>
    readonly createdAt: FieldRef<"Breeding", 'DateTime'>
    readonly updatedAt: FieldRef<"Breeding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Breeding findUnique
   */
  export type BreedingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter, which Breeding to fetch.
     */
    where: BreedingWhereUniqueInput
  }

  /**
   * Breeding findUniqueOrThrow
   */
  export type BreedingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter, which Breeding to fetch.
     */
    where: BreedingWhereUniqueInput
  }

  /**
   * Breeding findFirst
   */
  export type BreedingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter, which Breeding to fetch.
     */
    where?: BreedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breedings to fetch.
     */
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breedings.
     */
    cursor?: BreedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breedings.
     */
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
  }

  /**
   * Breeding findFirstOrThrow
   */
  export type BreedingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter, which Breeding to fetch.
     */
    where?: BreedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breedings to fetch.
     */
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breedings.
     */
    cursor?: BreedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breedings.
     */
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
  }

  /**
   * Breeding findMany
   */
  export type BreedingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter, which Breedings to fetch.
     */
    where?: BreedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breedings to fetch.
     */
    orderBy?: BreedingOrderByWithRelationInput | BreedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breedings.
     */
    cursor?: BreedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breedings.
     */
    skip?: number
    distinct?: BreedingScalarFieldEnum | BreedingScalarFieldEnum[]
  }

  /**
   * Breeding create
   */
  export type BreedingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * The data needed to create a Breeding.
     */
    data: XOR<BreedingCreateInput, BreedingUncheckedCreateInput>
  }

  /**
   * Breeding createMany
   */
  export type BreedingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breedings.
     */
    data: BreedingCreateManyInput | BreedingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Breeding createManyAndReturn
   */
  export type BreedingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * The data used to create many Breedings.
     */
    data: BreedingCreateManyInput | BreedingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breeding update
   */
  export type BreedingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * The data needed to update a Breeding.
     */
    data: XOR<BreedingUpdateInput, BreedingUncheckedUpdateInput>
    /**
     * Choose, which Breeding to update.
     */
    where: BreedingWhereUniqueInput
  }

  /**
   * Breeding updateMany
   */
  export type BreedingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breedings.
     */
    data: XOR<BreedingUpdateManyMutationInput, BreedingUncheckedUpdateManyInput>
    /**
     * Filter which Breedings to update
     */
    where?: BreedingWhereInput
    /**
     * Limit how many Breedings to update.
     */
    limit?: number
  }

  /**
   * Breeding updateManyAndReturn
   */
  export type BreedingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * The data used to update Breedings.
     */
    data: XOR<BreedingUpdateManyMutationInput, BreedingUncheckedUpdateManyInput>
    /**
     * Filter which Breedings to update
     */
    where?: BreedingWhereInput
    /**
     * Limit how many Breedings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breeding upsert
   */
  export type BreedingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * The filter to search for the Breeding to update in case it exists.
     */
    where: BreedingWhereUniqueInput
    /**
     * In case the Breeding found by the `where` argument doesn't exist, create a new Breeding with this data.
     */
    create: XOR<BreedingCreateInput, BreedingUncheckedCreateInput>
    /**
     * In case the Breeding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreedingUpdateInput, BreedingUncheckedUpdateInput>
  }

  /**
   * Breeding delete
   */
  export type BreedingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
    /**
     * Filter which Breeding to delete.
     */
    where: BreedingWhereUniqueInput
  }

  /**
   * Breeding deleteMany
   */
  export type BreedingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breedings to delete
     */
    where?: BreedingWhereInput
    /**
     * Limit how many Breedings to delete.
     */
    limit?: number
  }

  /**
   * Breeding.offspring
   */
  export type Breeding$offspringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Breeding.mother
   */
  export type Breeding$motherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Breeding.father
   */
  export type Breeding$fatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Breeding.farmers
   */
  export type Breeding$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Breeding without action
   */
  export type BreedingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding
     */
    select?: BreedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding
     */
    omit?: BreedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedingInclude<ExtArgs> | null
  }


  /**
   * Model Breeding_Rec
   */

  export type AggregateBreeding_Rec = {
    _count: Breeding_RecCountAggregateOutputType | null
    _avg: Breeding_RecAvgAggregateOutputType | null
    _sum: Breeding_RecSumAggregateOutputType | null
    _min: Breeding_RecMinAggregateOutputType | null
    _max: Breeding_RecMaxAggregateOutputType | null
  }

  export type Breeding_RecAvgAggregateOutputType = {
    overall_score: number | null
    genetic_diversity_score: number | null
    inbreeding_risk_score: number | null
    breed_composition_match_score: number | null
  }

  export type Breeding_RecSumAggregateOutputType = {
    overall_score: number | null
    genetic_diversity_score: number | null
    inbreeding_risk_score: number | null
    breed_composition_match_score: number | null
  }

  export type Breeding_RecMinAggregateOutputType = {
    breedingRecId: string | null
    animalInitial: string | null
    recommendedAnimalId: string | null
    overall_score: number | null
    user_accepted: boolean | null
    generatedAt: Date | null
    userFeedback: string | null
    genetic_diversity_score: number | null
    inbreeding_risk_score: number | null
    breed_composition_match_score: number | null
  }

  export type Breeding_RecMaxAggregateOutputType = {
    breedingRecId: string | null
    animalInitial: string | null
    recommendedAnimalId: string | null
    overall_score: number | null
    user_accepted: boolean | null
    generatedAt: Date | null
    userFeedback: string | null
    genetic_diversity_score: number | null
    inbreeding_risk_score: number | null
    breed_composition_match_score: number | null
  }

  export type Breeding_RecCountAggregateOutputType = {
    breedingRecId: number
    animalInitial: number
    recommendedAnimalId: number
    overall_score: number
    user_accepted: number
    generatedAt: number
    userFeedback: number
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
    _all: number
  }


  export type Breeding_RecAvgAggregateInputType = {
    overall_score?: true
    genetic_diversity_score?: true
    inbreeding_risk_score?: true
    breed_composition_match_score?: true
  }

  export type Breeding_RecSumAggregateInputType = {
    overall_score?: true
    genetic_diversity_score?: true
    inbreeding_risk_score?: true
    breed_composition_match_score?: true
  }

  export type Breeding_RecMinAggregateInputType = {
    breedingRecId?: true
    animalInitial?: true
    recommendedAnimalId?: true
    overall_score?: true
    user_accepted?: true
    generatedAt?: true
    userFeedback?: true
    genetic_diversity_score?: true
    inbreeding_risk_score?: true
    breed_composition_match_score?: true
  }

  export type Breeding_RecMaxAggregateInputType = {
    breedingRecId?: true
    animalInitial?: true
    recommendedAnimalId?: true
    overall_score?: true
    user_accepted?: true
    generatedAt?: true
    userFeedback?: true
    genetic_diversity_score?: true
    inbreeding_risk_score?: true
    breed_composition_match_score?: true
  }

  export type Breeding_RecCountAggregateInputType = {
    breedingRecId?: true
    animalInitial?: true
    recommendedAnimalId?: true
    overall_score?: true
    user_accepted?: true
    generatedAt?: true
    userFeedback?: true
    genetic_diversity_score?: true
    inbreeding_risk_score?: true
    breed_composition_match_score?: true
    _all?: true
  }

  export type Breeding_RecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeding_Rec to aggregate.
     */
    where?: Breeding_RecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeding_Recs to fetch.
     */
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Breeding_RecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeding_Recs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeding_Recs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breeding_Recs
    **/
    _count?: true | Breeding_RecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Breeding_RecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Breeding_RecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Breeding_RecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Breeding_RecMaxAggregateInputType
  }

  export type GetBreeding_RecAggregateType<T extends Breeding_RecAggregateArgs> = {
        [P in keyof T & keyof AggregateBreeding_Rec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreeding_Rec[P]>
      : GetScalarType<T[P], AggregateBreeding_Rec[P]>
  }




  export type Breeding_RecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Breeding_RecWhereInput
    orderBy?: Breeding_RecOrderByWithAggregationInput | Breeding_RecOrderByWithAggregationInput[]
    by: Breeding_RecScalarFieldEnum[] | Breeding_RecScalarFieldEnum
    having?: Breeding_RecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Breeding_RecCountAggregateInputType | true
    _avg?: Breeding_RecAvgAggregateInputType
    _sum?: Breeding_RecSumAggregateInputType
    _min?: Breeding_RecMinAggregateInputType
    _max?: Breeding_RecMaxAggregateInputType
  }

  export type Breeding_RecGroupByOutputType = {
    breedingRecId: string
    animalInitial: string
    recommendedAnimalId: string
    overall_score: number
    user_accepted: boolean
    generatedAt: Date
    userFeedback: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
    _count: Breeding_RecCountAggregateOutputType | null
    _avg: Breeding_RecAvgAggregateOutputType | null
    _sum: Breeding_RecSumAggregateOutputType | null
    _min: Breeding_RecMinAggregateOutputType | null
    _max: Breeding_RecMaxAggregateOutputType | null
  }

  type GetBreeding_RecGroupByPayload<T extends Breeding_RecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Breeding_RecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Breeding_RecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Breeding_RecGroupByOutputType[P]>
            : GetScalarType<T[P], Breeding_RecGroupByOutputType[P]>
        }
      >
    >


  export type Breeding_RecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingRecId?: boolean
    animalInitial?: boolean
    recommendedAnimalId?: boolean
    overall_score?: boolean
    user_accepted?: boolean
    generatedAt?: boolean
    userFeedback?: boolean
    genetic_diversity_score?: boolean
    inbreeding_risk_score?: boolean
    breed_composition_match_score?: boolean
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breeding_Rec"]>

  export type Breeding_RecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingRecId?: boolean
    animalInitial?: boolean
    recommendedAnimalId?: boolean
    overall_score?: boolean
    user_accepted?: boolean
    generatedAt?: boolean
    userFeedback?: boolean
    genetic_diversity_score?: boolean
    inbreeding_risk_score?: boolean
    breed_composition_match_score?: boolean
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breeding_Rec"]>

  export type Breeding_RecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    breedingRecId?: boolean
    animalInitial?: boolean
    recommendedAnimalId?: boolean
    overall_score?: boolean
    user_accepted?: boolean
    generatedAt?: boolean
    userFeedback?: boolean
    genetic_diversity_score?: boolean
    inbreeding_risk_score?: boolean
    breed_composition_match_score?: boolean
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breeding_Rec"]>

  export type Breeding_RecSelectScalar = {
    breedingRecId?: boolean
    animalInitial?: boolean
    recommendedAnimalId?: boolean
    overall_score?: boolean
    user_accepted?: boolean
    generatedAt?: boolean
    userFeedback?: boolean
    genetic_diversity_score?: boolean
    inbreeding_risk_score?: boolean
    breed_composition_match_score?: boolean
  }

  export type Breeding_RecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"breedingRecId" | "animalInitial" | "recommendedAnimalId" | "overall_score" | "user_accepted" | "generatedAt" | "userFeedback" | "genetic_diversity_score" | "inbreeding_risk_score" | "breed_composition_match_score", ExtArgs["result"]["breeding_Rec"]>
  export type Breeding_RecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type Breeding_RecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type Breeding_RecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
    recommendedAnimal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $Breeding_RecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breeding_Rec"
    objects: {
      originalAnimal: Prisma.$AnimalPayload<ExtArgs>
      recommendedAnimal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      breedingRecId: string
      animalInitial: string
      recommendedAnimalId: string
      overall_score: number
      user_accepted: boolean
      generatedAt: Date
      userFeedback: string | null
      genetic_diversity_score: number
      inbreeding_risk_score: number
      breed_composition_match_score: number
    }, ExtArgs["result"]["breeding_Rec"]>
    composites: {}
  }

  type Breeding_RecGetPayload<S extends boolean | null | undefined | Breeding_RecDefaultArgs> = $Result.GetResult<Prisma.$Breeding_RecPayload, S>

  type Breeding_RecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Breeding_RecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Breeding_RecCountAggregateInputType | true
    }

  export interface Breeding_RecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breeding_Rec'], meta: { name: 'Breeding_Rec' } }
    /**
     * Find zero or one Breeding_Rec that matches the filter.
     * @param {Breeding_RecFindUniqueArgs} args - Arguments to find a Breeding_Rec
     * @example
     * // Get one Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Breeding_RecFindUniqueArgs>(args: SelectSubset<T, Breeding_RecFindUniqueArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Breeding_Rec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Breeding_RecFindUniqueOrThrowArgs} args - Arguments to find a Breeding_Rec
     * @example
     * // Get one Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Breeding_RecFindUniqueOrThrowArgs>(args: SelectSubset<T, Breeding_RecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeding_Rec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecFindFirstArgs} args - Arguments to find a Breeding_Rec
     * @example
     * // Get one Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Breeding_RecFindFirstArgs>(args?: SelectSubset<T, Breeding_RecFindFirstArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breeding_Rec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecFindFirstOrThrowArgs} args - Arguments to find a Breeding_Rec
     * @example
     * // Get one Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Breeding_RecFindFirstOrThrowArgs>(args?: SelectSubset<T, Breeding_RecFindFirstOrThrowArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breeding_Recs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breeding_Recs
     * const breeding_Recs = await prisma.breeding_Rec.findMany()
     * 
     * // Get first 10 Breeding_Recs
     * const breeding_Recs = await prisma.breeding_Rec.findMany({ take: 10 })
     * 
     * // Only select the `breedingRecId`
     * const breeding_RecWithBreedingRecIdOnly = await prisma.breeding_Rec.findMany({ select: { breedingRecId: true } })
     * 
     */
    findMany<T extends Breeding_RecFindManyArgs>(args?: SelectSubset<T, Breeding_RecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Breeding_Rec.
     * @param {Breeding_RecCreateArgs} args - Arguments to create a Breeding_Rec.
     * @example
     * // Create one Breeding_Rec
     * const Breeding_Rec = await prisma.breeding_Rec.create({
     *   data: {
     *     // ... data to create a Breeding_Rec
     *   }
     * })
     * 
     */
    create<T extends Breeding_RecCreateArgs>(args: SelectSubset<T, Breeding_RecCreateArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breeding_Recs.
     * @param {Breeding_RecCreateManyArgs} args - Arguments to create many Breeding_Recs.
     * @example
     * // Create many Breeding_Recs
     * const breeding_Rec = await prisma.breeding_Rec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Breeding_RecCreateManyArgs>(args?: SelectSubset<T, Breeding_RecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breeding_Recs and returns the data saved in the database.
     * @param {Breeding_RecCreateManyAndReturnArgs} args - Arguments to create many Breeding_Recs.
     * @example
     * // Create many Breeding_Recs
     * const breeding_Rec = await prisma.breeding_Rec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breeding_Recs and only return the `breedingRecId`
     * const breeding_RecWithBreedingRecIdOnly = await prisma.breeding_Rec.createManyAndReturn({
     *   select: { breedingRecId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Breeding_RecCreateManyAndReturnArgs>(args?: SelectSubset<T, Breeding_RecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Breeding_Rec.
     * @param {Breeding_RecDeleteArgs} args - Arguments to delete one Breeding_Rec.
     * @example
     * // Delete one Breeding_Rec
     * const Breeding_Rec = await prisma.breeding_Rec.delete({
     *   where: {
     *     // ... filter to delete one Breeding_Rec
     *   }
     * })
     * 
     */
    delete<T extends Breeding_RecDeleteArgs>(args: SelectSubset<T, Breeding_RecDeleteArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Breeding_Rec.
     * @param {Breeding_RecUpdateArgs} args - Arguments to update one Breeding_Rec.
     * @example
     * // Update one Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Breeding_RecUpdateArgs>(args: SelectSubset<T, Breeding_RecUpdateArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breeding_Recs.
     * @param {Breeding_RecDeleteManyArgs} args - Arguments to filter Breeding_Recs to delete.
     * @example
     * // Delete a few Breeding_Recs
     * const { count } = await prisma.breeding_Rec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Breeding_RecDeleteManyArgs>(args?: SelectSubset<T, Breeding_RecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breeding_Recs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breeding_Recs
     * const breeding_Rec = await prisma.breeding_Rec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Breeding_RecUpdateManyArgs>(args: SelectSubset<T, Breeding_RecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breeding_Recs and returns the data updated in the database.
     * @param {Breeding_RecUpdateManyAndReturnArgs} args - Arguments to update many Breeding_Recs.
     * @example
     * // Update many Breeding_Recs
     * const breeding_Rec = await prisma.breeding_Rec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Breeding_Recs and only return the `breedingRecId`
     * const breeding_RecWithBreedingRecIdOnly = await prisma.breeding_Rec.updateManyAndReturn({
     *   select: { breedingRecId: true },
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
    updateManyAndReturn<T extends Breeding_RecUpdateManyAndReturnArgs>(args: SelectSubset<T, Breeding_RecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Breeding_Rec.
     * @param {Breeding_RecUpsertArgs} args - Arguments to update or create a Breeding_Rec.
     * @example
     * // Update or create a Breeding_Rec
     * const breeding_Rec = await prisma.breeding_Rec.upsert({
     *   create: {
     *     // ... data to create a Breeding_Rec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breeding_Rec we want to update
     *   }
     * })
     */
    upsert<T extends Breeding_RecUpsertArgs>(args: SelectSubset<T, Breeding_RecUpsertArgs<ExtArgs>>): Prisma__Breeding_RecClient<$Result.GetResult<Prisma.$Breeding_RecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breeding_Recs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecCountArgs} args - Arguments to filter Breeding_Recs to count.
     * @example
     * // Count the number of Breeding_Recs
     * const count = await prisma.breeding_Rec.count({
     *   where: {
     *     // ... the filter for the Breeding_Recs we want to count
     *   }
     * })
    **/
    count<T extends Breeding_RecCountArgs>(
      args?: Subset<T, Breeding_RecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Breeding_RecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breeding_Rec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Breeding_RecAggregateArgs>(args: Subset<T, Breeding_RecAggregateArgs>): Prisma.PrismaPromise<GetBreeding_RecAggregateType<T>>

    /**
     * Group by Breeding_Rec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Breeding_RecGroupByArgs} args - Group by arguments.
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
      T extends Breeding_RecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Breeding_RecGroupByArgs['orderBy'] }
        : { orderBy?: Breeding_RecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Breeding_RecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreeding_RecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breeding_Rec model
   */
  readonly fields: Breeding_RecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breeding_Rec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Breeding_RecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalAnimal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recommendedAnimal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Breeding_Rec model
   */
  interface Breeding_RecFieldRefs {
    readonly breedingRecId: FieldRef<"Breeding_Rec", 'String'>
    readonly animalInitial: FieldRef<"Breeding_Rec", 'String'>
    readonly recommendedAnimalId: FieldRef<"Breeding_Rec", 'String'>
    readonly overall_score: FieldRef<"Breeding_Rec", 'Float'>
    readonly user_accepted: FieldRef<"Breeding_Rec", 'Boolean'>
    readonly generatedAt: FieldRef<"Breeding_Rec", 'DateTime'>
    readonly userFeedback: FieldRef<"Breeding_Rec", 'String'>
    readonly genetic_diversity_score: FieldRef<"Breeding_Rec", 'Float'>
    readonly inbreeding_risk_score: FieldRef<"Breeding_Rec", 'Float'>
    readonly breed_composition_match_score: FieldRef<"Breeding_Rec", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Breeding_Rec findUnique
   */
  export type Breeding_RecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter, which Breeding_Rec to fetch.
     */
    where: Breeding_RecWhereUniqueInput
  }

  /**
   * Breeding_Rec findUniqueOrThrow
   */
  export type Breeding_RecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter, which Breeding_Rec to fetch.
     */
    where: Breeding_RecWhereUniqueInput
  }

  /**
   * Breeding_Rec findFirst
   */
  export type Breeding_RecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter, which Breeding_Rec to fetch.
     */
    where?: Breeding_RecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeding_Recs to fetch.
     */
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeding_Recs.
     */
    cursor?: Breeding_RecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeding_Recs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeding_Recs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeding_Recs.
     */
    distinct?: Breeding_RecScalarFieldEnum | Breeding_RecScalarFieldEnum[]
  }

  /**
   * Breeding_Rec findFirstOrThrow
   */
  export type Breeding_RecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter, which Breeding_Rec to fetch.
     */
    where?: Breeding_RecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeding_Recs to fetch.
     */
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeding_Recs.
     */
    cursor?: Breeding_RecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeding_Recs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeding_Recs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeding_Recs.
     */
    distinct?: Breeding_RecScalarFieldEnum | Breeding_RecScalarFieldEnum[]
  }

  /**
   * Breeding_Rec findMany
   */
  export type Breeding_RecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter, which Breeding_Recs to fetch.
     */
    where?: Breeding_RecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeding_Recs to fetch.
     */
    orderBy?: Breeding_RecOrderByWithRelationInput | Breeding_RecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breeding_Recs.
     */
    cursor?: Breeding_RecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeding_Recs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeding_Recs.
     */
    skip?: number
    distinct?: Breeding_RecScalarFieldEnum | Breeding_RecScalarFieldEnum[]
  }

  /**
   * Breeding_Rec create
   */
  export type Breeding_RecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * The data needed to create a Breeding_Rec.
     */
    data: XOR<Breeding_RecCreateInput, Breeding_RecUncheckedCreateInput>
  }

  /**
   * Breeding_Rec createMany
   */
  export type Breeding_RecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breeding_Recs.
     */
    data: Breeding_RecCreateManyInput | Breeding_RecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Breeding_Rec createManyAndReturn
   */
  export type Breeding_RecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * The data used to create many Breeding_Recs.
     */
    data: Breeding_RecCreateManyInput | Breeding_RecCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breeding_Rec update
   */
  export type Breeding_RecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * The data needed to update a Breeding_Rec.
     */
    data: XOR<Breeding_RecUpdateInput, Breeding_RecUncheckedUpdateInput>
    /**
     * Choose, which Breeding_Rec to update.
     */
    where: Breeding_RecWhereUniqueInput
  }

  /**
   * Breeding_Rec updateMany
   */
  export type Breeding_RecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breeding_Recs.
     */
    data: XOR<Breeding_RecUpdateManyMutationInput, Breeding_RecUncheckedUpdateManyInput>
    /**
     * Filter which Breeding_Recs to update
     */
    where?: Breeding_RecWhereInput
    /**
     * Limit how many Breeding_Recs to update.
     */
    limit?: number
  }

  /**
   * Breeding_Rec updateManyAndReturn
   */
  export type Breeding_RecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * The data used to update Breeding_Recs.
     */
    data: XOR<Breeding_RecUpdateManyMutationInput, Breeding_RecUncheckedUpdateManyInput>
    /**
     * Filter which Breeding_Recs to update
     */
    where?: Breeding_RecWhereInput
    /**
     * Limit how many Breeding_Recs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breeding_Rec upsert
   */
  export type Breeding_RecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * The filter to search for the Breeding_Rec to update in case it exists.
     */
    where: Breeding_RecWhereUniqueInput
    /**
     * In case the Breeding_Rec found by the `where` argument doesn't exist, create a new Breeding_Rec with this data.
     */
    create: XOR<Breeding_RecCreateInput, Breeding_RecUncheckedCreateInput>
    /**
     * In case the Breeding_Rec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Breeding_RecUpdateInput, Breeding_RecUncheckedUpdateInput>
  }

  /**
   * Breeding_Rec delete
   */
  export type Breeding_RecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
    /**
     * Filter which Breeding_Rec to delete.
     */
    where: Breeding_RecWhereUniqueInput
  }

  /**
   * Breeding_Rec deleteMany
   */
  export type Breeding_RecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeding_Recs to delete
     */
    where?: Breeding_RecWhereInput
    /**
     * Limit how many Breeding_Recs to delete.
     */
    limit?: number
  }

  /**
   * Breeding_Rec without action
   */
  export type Breeding_RecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breeding_Rec
     */
    select?: Breeding_RecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breeding_Rec
     */
    omit?: Breeding_RecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Breeding_RecInclude<ExtArgs> | null
  }


  /**
   * Model RelatedNess_Estimates
   */

  export type AggregateRelatedNess_Estimates = {
    _count: RelatedNess_EstimatesCountAggregateOutputType | null
    _avg: RelatedNess_EstimatesAvgAggregateOutputType | null
    _sum: RelatedNess_EstimatesSumAggregateOutputType | null
    _min: RelatedNess_EstimatesMinAggregateOutputType | null
    _max: RelatedNess_EstimatesMaxAggregateOutputType | null
  }

  export type RelatedNess_EstimatesAvgAggregateOutputType = {
    confidence: number | null
    relatedness_prob: number | null
    pedigree_coeff: number | null
  }

  export type RelatedNess_EstimatesSumAggregateOutputType = {
    confidence: number | null
    relatedness_prob: number | null
    pedigree_coeff: number | null
  }

  export type RelatedNess_EstimatesMinAggregateOutputType = {
    id: string | null
    animal1: string | null
    animal2: string | null
    confidence: number | null
    relatedness_prob: number | null
    pedigree_coeff: number | null
  }

  export type RelatedNess_EstimatesMaxAggregateOutputType = {
    id: string | null
    animal1: string | null
    animal2: string | null
    confidence: number | null
    relatedness_prob: number | null
    pedigree_coeff: number | null
  }

  export type RelatedNess_EstimatesCountAggregateOutputType = {
    id: number
    animal1: number
    animal2: number
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
    _all: number
  }


  export type RelatedNess_EstimatesAvgAggregateInputType = {
    confidence?: true
    relatedness_prob?: true
    pedigree_coeff?: true
  }

  export type RelatedNess_EstimatesSumAggregateInputType = {
    confidence?: true
    relatedness_prob?: true
    pedigree_coeff?: true
  }

  export type RelatedNess_EstimatesMinAggregateInputType = {
    id?: true
    animal1?: true
    animal2?: true
    confidence?: true
    relatedness_prob?: true
    pedigree_coeff?: true
  }

  export type RelatedNess_EstimatesMaxAggregateInputType = {
    id?: true
    animal1?: true
    animal2?: true
    confidence?: true
    relatedness_prob?: true
    pedigree_coeff?: true
  }

  export type RelatedNess_EstimatesCountAggregateInputType = {
    id?: true
    animal1?: true
    animal2?: true
    confidence?: true
    relatedness_prob?: true
    pedigree_coeff?: true
    _all?: true
  }

  export type RelatedNess_EstimatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedNess_Estimates to aggregate.
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedNess_Estimates to fetch.
     */
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedNess_Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedNess_Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatedNess_Estimates
    **/
    _count?: true | RelatedNess_EstimatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatedNess_EstimatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatedNess_EstimatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatedNess_EstimatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatedNess_EstimatesMaxAggregateInputType
  }

  export type GetRelatedNess_EstimatesAggregateType<T extends RelatedNess_EstimatesAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatedNess_Estimates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatedNess_Estimates[P]>
      : GetScalarType<T[P], AggregateRelatedNess_Estimates[P]>
  }




  export type RelatedNess_EstimatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedNess_EstimatesWhereInput
    orderBy?: RelatedNess_EstimatesOrderByWithAggregationInput | RelatedNess_EstimatesOrderByWithAggregationInput[]
    by: RelatedNess_EstimatesScalarFieldEnum[] | RelatedNess_EstimatesScalarFieldEnum
    having?: RelatedNess_EstimatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatedNess_EstimatesCountAggregateInputType | true
    _avg?: RelatedNess_EstimatesAvgAggregateInputType
    _sum?: RelatedNess_EstimatesSumAggregateInputType
    _min?: RelatedNess_EstimatesMinAggregateInputType
    _max?: RelatedNess_EstimatesMaxAggregateInputType
  }

  export type RelatedNess_EstimatesGroupByOutputType = {
    id: string
    animal1: string
    animal2: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
    _count: RelatedNess_EstimatesCountAggregateOutputType | null
    _avg: RelatedNess_EstimatesAvgAggregateOutputType | null
    _sum: RelatedNess_EstimatesSumAggregateOutputType | null
    _min: RelatedNess_EstimatesMinAggregateOutputType | null
    _max: RelatedNess_EstimatesMaxAggregateOutputType | null
  }

  type GetRelatedNess_EstimatesGroupByPayload<T extends RelatedNess_EstimatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatedNess_EstimatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatedNess_EstimatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatedNess_EstimatesGroupByOutputType[P]>
            : GetScalarType<T[P], RelatedNess_EstimatesGroupByOutputType[P]>
        }
      >
    >


  export type RelatedNess_EstimatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animal1?: boolean
    animal2?: boolean
    confidence?: boolean
    relatedness_prob?: boolean
    pedigree_coeff?: boolean
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedNess_Estimates"]>

  export type RelatedNess_EstimatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animal1?: boolean
    animal2?: boolean
    confidence?: boolean
    relatedness_prob?: boolean
    pedigree_coeff?: boolean
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedNess_Estimates"]>

  export type RelatedNess_EstimatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animal1?: boolean
    animal2?: boolean
    confidence?: boolean
    relatedness_prob?: boolean
    pedigree_coeff?: boolean
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedNess_Estimates"]>

  export type RelatedNess_EstimatesSelectScalar = {
    id?: boolean
    animal1?: boolean
    animal2?: boolean
    confidence?: boolean
    relatedness_prob?: boolean
    pedigree_coeff?: boolean
  }

  export type RelatedNess_EstimatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animal1" | "animal2" | "confidence" | "relatedness_prob" | "pedigree_coeff", ExtArgs["result"]["relatedNess_Estimates"]>
  export type RelatedNess_EstimatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type RelatedNess_EstimatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type RelatedNess_EstimatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal1Relation?: boolean | AnimalDefaultArgs<ExtArgs>
    animal2Relation?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $RelatedNess_EstimatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatedNess_Estimates"
    objects: {
      animal1Relation: Prisma.$AnimalPayload<ExtArgs>
      animal2Relation: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animal1: string
      animal2: string
      confidence: number
      relatedness_prob: number
      pedigree_coeff: number
    }, ExtArgs["result"]["relatedNess_Estimates"]>
    composites: {}
  }

  type RelatedNess_EstimatesGetPayload<S extends boolean | null | undefined | RelatedNess_EstimatesDefaultArgs> = $Result.GetResult<Prisma.$RelatedNess_EstimatesPayload, S>

  type RelatedNess_EstimatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatedNess_EstimatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatedNess_EstimatesCountAggregateInputType | true
    }

  export interface RelatedNess_EstimatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatedNess_Estimates'], meta: { name: 'RelatedNess_Estimates' } }
    /**
     * Find zero or one RelatedNess_Estimates that matches the filter.
     * @param {RelatedNess_EstimatesFindUniqueArgs} args - Arguments to find a RelatedNess_Estimates
     * @example
     * // Get one RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatedNess_EstimatesFindUniqueArgs>(args: SelectSubset<T, RelatedNess_EstimatesFindUniqueArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelatedNess_Estimates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatedNess_EstimatesFindUniqueOrThrowArgs} args - Arguments to find a RelatedNess_Estimates
     * @example
     * // Get one RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatedNess_EstimatesFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatedNess_EstimatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatedNess_Estimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesFindFirstArgs} args - Arguments to find a RelatedNess_Estimates
     * @example
     * // Get one RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatedNess_EstimatesFindFirstArgs>(args?: SelectSubset<T, RelatedNess_EstimatesFindFirstArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatedNess_Estimates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesFindFirstOrThrowArgs} args - Arguments to find a RelatedNess_Estimates
     * @example
     * // Get one RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatedNess_EstimatesFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatedNess_EstimatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelatedNess_Estimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findMany()
     * 
     * // Get first 10 RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatedNess_EstimatesWithIdOnly = await prisma.relatedNess_Estimates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatedNess_EstimatesFindManyArgs>(args?: SelectSubset<T, RelatedNess_EstimatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesCreateArgs} args - Arguments to create a RelatedNess_Estimates.
     * @example
     * // Create one RelatedNess_Estimates
     * const RelatedNess_Estimates = await prisma.relatedNess_Estimates.create({
     *   data: {
     *     // ... data to create a RelatedNess_Estimates
     *   }
     * })
     * 
     */
    create<T extends RelatedNess_EstimatesCreateArgs>(args: SelectSubset<T, RelatedNess_EstimatesCreateArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesCreateManyArgs} args - Arguments to create many RelatedNess_Estimates.
     * @example
     * // Create many RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatedNess_EstimatesCreateManyArgs>(args?: SelectSubset<T, RelatedNess_EstimatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatedNess_Estimates and returns the data saved in the database.
     * @param {RelatedNess_EstimatesCreateManyAndReturnArgs} args - Arguments to create many RelatedNess_Estimates.
     * @example
     * // Create many RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatedNess_Estimates and only return the `id`
     * const relatedNess_EstimatesWithIdOnly = await prisma.relatedNess_Estimates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatedNess_EstimatesCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatedNess_EstimatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesDeleteArgs} args - Arguments to delete one RelatedNess_Estimates.
     * @example
     * // Delete one RelatedNess_Estimates
     * const RelatedNess_Estimates = await prisma.relatedNess_Estimates.delete({
     *   where: {
     *     // ... filter to delete one RelatedNess_Estimates
     *   }
     * })
     * 
     */
    delete<T extends RelatedNess_EstimatesDeleteArgs>(args: SelectSubset<T, RelatedNess_EstimatesDeleteArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesUpdateArgs} args - Arguments to update one RelatedNess_Estimates.
     * @example
     * // Update one RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatedNess_EstimatesUpdateArgs>(args: SelectSubset<T, RelatedNess_EstimatesUpdateArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesDeleteManyArgs} args - Arguments to filter RelatedNess_Estimates to delete.
     * @example
     * // Delete a few RelatedNess_Estimates
     * const { count } = await prisma.relatedNess_Estimates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatedNess_EstimatesDeleteManyArgs>(args?: SelectSubset<T, RelatedNess_EstimatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedNess_Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatedNess_EstimatesUpdateManyArgs>(args: SelectSubset<T, RelatedNess_EstimatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedNess_Estimates and returns the data updated in the database.
     * @param {RelatedNess_EstimatesUpdateManyAndReturnArgs} args - Arguments to update many RelatedNess_Estimates.
     * @example
     * // Update many RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatedNess_Estimates and only return the `id`
     * const relatedNess_EstimatesWithIdOnly = await prisma.relatedNess_Estimates.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelatedNess_EstimatesUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatedNess_EstimatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelatedNess_Estimates.
     * @param {RelatedNess_EstimatesUpsertArgs} args - Arguments to update or create a RelatedNess_Estimates.
     * @example
     * // Update or create a RelatedNess_Estimates
     * const relatedNess_Estimates = await prisma.relatedNess_Estimates.upsert({
     *   create: {
     *     // ... data to create a RelatedNess_Estimates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatedNess_Estimates we want to update
     *   }
     * })
     */
    upsert<T extends RelatedNess_EstimatesUpsertArgs>(args: SelectSubset<T, RelatedNess_EstimatesUpsertArgs<ExtArgs>>): Prisma__RelatedNess_EstimatesClient<$Result.GetResult<Prisma.$RelatedNess_EstimatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelatedNess_Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesCountArgs} args - Arguments to filter RelatedNess_Estimates to count.
     * @example
     * // Count the number of RelatedNess_Estimates
     * const count = await prisma.relatedNess_Estimates.count({
     *   where: {
     *     // ... the filter for the RelatedNess_Estimates we want to count
     *   }
     * })
    **/
    count<T extends RelatedNess_EstimatesCountArgs>(
      args?: Subset<T, RelatedNess_EstimatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatedNess_EstimatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatedNess_Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatedNess_EstimatesAggregateArgs>(args: Subset<T, RelatedNess_EstimatesAggregateArgs>): Prisma.PrismaPromise<GetRelatedNess_EstimatesAggregateType<T>>

    /**
     * Group by RelatedNess_Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedNess_EstimatesGroupByArgs} args - Group by arguments.
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
      T extends RelatedNess_EstimatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatedNess_EstimatesGroupByArgs['orderBy'] }
        : { orderBy?: RelatedNess_EstimatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatedNess_EstimatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatedNess_EstimatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatedNess_Estimates model
   */
  readonly fields: RelatedNess_EstimatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatedNess_Estimates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatedNess_EstimatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal1Relation<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animal2Relation<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelatedNess_Estimates model
   */
  interface RelatedNess_EstimatesFieldRefs {
    readonly id: FieldRef<"RelatedNess_Estimates", 'String'>
    readonly animal1: FieldRef<"RelatedNess_Estimates", 'String'>
    readonly animal2: FieldRef<"RelatedNess_Estimates", 'String'>
    readonly confidence: FieldRef<"RelatedNess_Estimates", 'Float'>
    readonly relatedness_prob: FieldRef<"RelatedNess_Estimates", 'Float'>
    readonly pedigree_coeff: FieldRef<"RelatedNess_Estimates", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * RelatedNess_Estimates findUnique
   */
  export type RelatedNess_EstimatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter, which RelatedNess_Estimates to fetch.
     */
    where: RelatedNess_EstimatesWhereUniqueInput
  }

  /**
   * RelatedNess_Estimates findUniqueOrThrow
   */
  export type RelatedNess_EstimatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter, which RelatedNess_Estimates to fetch.
     */
    where: RelatedNess_EstimatesWhereUniqueInput
  }

  /**
   * RelatedNess_Estimates findFirst
   */
  export type RelatedNess_EstimatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter, which RelatedNess_Estimates to fetch.
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedNess_Estimates to fetch.
     */
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedNess_Estimates.
     */
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedNess_Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedNess_Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedNess_Estimates.
     */
    distinct?: RelatedNess_EstimatesScalarFieldEnum | RelatedNess_EstimatesScalarFieldEnum[]
  }

  /**
   * RelatedNess_Estimates findFirstOrThrow
   */
  export type RelatedNess_EstimatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter, which RelatedNess_Estimates to fetch.
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedNess_Estimates to fetch.
     */
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedNess_Estimates.
     */
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedNess_Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedNess_Estimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedNess_Estimates.
     */
    distinct?: RelatedNess_EstimatesScalarFieldEnum | RelatedNess_EstimatesScalarFieldEnum[]
  }

  /**
   * RelatedNess_Estimates findMany
   */
  export type RelatedNess_EstimatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter, which RelatedNess_Estimates to fetch.
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedNess_Estimates to fetch.
     */
    orderBy?: RelatedNess_EstimatesOrderByWithRelationInput | RelatedNess_EstimatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatedNess_Estimates.
     */
    cursor?: RelatedNess_EstimatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedNess_Estimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedNess_Estimates.
     */
    skip?: number
    distinct?: RelatedNess_EstimatesScalarFieldEnum | RelatedNess_EstimatesScalarFieldEnum[]
  }

  /**
   * RelatedNess_Estimates create
   */
  export type RelatedNess_EstimatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatedNess_Estimates.
     */
    data: XOR<RelatedNess_EstimatesCreateInput, RelatedNess_EstimatesUncheckedCreateInput>
  }

  /**
   * RelatedNess_Estimates createMany
   */
  export type RelatedNess_EstimatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatedNess_Estimates.
     */
    data: RelatedNess_EstimatesCreateManyInput | RelatedNess_EstimatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatedNess_Estimates createManyAndReturn
   */
  export type RelatedNess_EstimatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * The data used to create many RelatedNess_Estimates.
     */
    data: RelatedNess_EstimatesCreateManyInput | RelatedNess_EstimatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedNess_Estimates update
   */
  export type RelatedNess_EstimatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatedNess_Estimates.
     */
    data: XOR<RelatedNess_EstimatesUpdateInput, RelatedNess_EstimatesUncheckedUpdateInput>
    /**
     * Choose, which RelatedNess_Estimates to update.
     */
    where: RelatedNess_EstimatesWhereUniqueInput
  }

  /**
   * RelatedNess_Estimates updateMany
   */
  export type RelatedNess_EstimatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatedNess_Estimates.
     */
    data: XOR<RelatedNess_EstimatesUpdateManyMutationInput, RelatedNess_EstimatesUncheckedUpdateManyInput>
    /**
     * Filter which RelatedNess_Estimates to update
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * Limit how many RelatedNess_Estimates to update.
     */
    limit?: number
  }

  /**
   * RelatedNess_Estimates updateManyAndReturn
   */
  export type RelatedNess_EstimatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * The data used to update RelatedNess_Estimates.
     */
    data: XOR<RelatedNess_EstimatesUpdateManyMutationInput, RelatedNess_EstimatesUncheckedUpdateManyInput>
    /**
     * Filter which RelatedNess_Estimates to update
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * Limit how many RelatedNess_Estimates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedNess_Estimates upsert
   */
  export type RelatedNess_EstimatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatedNess_Estimates to update in case it exists.
     */
    where: RelatedNess_EstimatesWhereUniqueInput
    /**
     * In case the RelatedNess_Estimates found by the `where` argument doesn't exist, create a new RelatedNess_Estimates with this data.
     */
    create: XOR<RelatedNess_EstimatesCreateInput, RelatedNess_EstimatesUncheckedCreateInput>
    /**
     * In case the RelatedNess_Estimates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatedNess_EstimatesUpdateInput, RelatedNess_EstimatesUncheckedUpdateInput>
  }

  /**
   * RelatedNess_Estimates delete
   */
  export type RelatedNess_EstimatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
    /**
     * Filter which RelatedNess_Estimates to delete.
     */
    where: RelatedNess_EstimatesWhereUniqueInput
  }

  /**
   * RelatedNess_Estimates deleteMany
   */
  export type RelatedNess_EstimatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedNess_Estimates to delete
     */
    where?: RelatedNess_EstimatesWhereInput
    /**
     * Limit how many RelatedNess_Estimates to delete.
     */
    limit?: number
  }

  /**
   * RelatedNess_Estimates without action
   */
  export type RelatedNess_EstimatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedNess_Estimates
     */
    select?: RelatedNess_EstimatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedNess_Estimates
     */
    omit?: RelatedNess_EstimatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedNess_EstimatesInclude<ExtArgs> | null
  }


  /**
   * Model Perfomance_Records
   */

  export type AggregatePerfomance_Records = {
    _count: Perfomance_RecordsCountAggregateOutputType | null
    _avg: Perfomance_RecordsAvgAggregateOutputType | null
    _sum: Perfomance_RecordsSumAggregateOutputType | null
    _min: Perfomance_RecordsMinAggregateOutputType | null
    _max: Perfomance_RecordsMaxAggregateOutputType | null
  }

  export type Perfomance_RecordsAvgAggregateOutputType = {
    milk_yield: number | null
    weight: number | null
  }

  export type Perfomance_RecordsSumAggregateOutputType = {
    milk_yield: number | null
    weight: number | null
  }

  export type Perfomance_RecordsMinAggregateOutputType = {
    id: string | null
    animalId: string | null
    milk_yield: number | null
    weight: number | null
    health_status: $Enums.AnimalHealth | null
    recordedAt: Date | null
  }

  export type Perfomance_RecordsMaxAggregateOutputType = {
    id: string | null
    animalId: string | null
    milk_yield: number | null
    weight: number | null
    health_status: $Enums.AnimalHealth | null
    recordedAt: Date | null
  }

  export type Perfomance_RecordsCountAggregateOutputType = {
    id: number
    animalId: number
    milk_yield: number
    weight: number
    health_status: number
    recordedAt: number
    _all: number
  }


  export type Perfomance_RecordsAvgAggregateInputType = {
    milk_yield?: true
    weight?: true
  }

  export type Perfomance_RecordsSumAggregateInputType = {
    milk_yield?: true
    weight?: true
  }

  export type Perfomance_RecordsMinAggregateInputType = {
    id?: true
    animalId?: true
    milk_yield?: true
    weight?: true
    health_status?: true
    recordedAt?: true
  }

  export type Perfomance_RecordsMaxAggregateInputType = {
    id?: true
    animalId?: true
    milk_yield?: true
    weight?: true
    health_status?: true
    recordedAt?: true
  }

  export type Perfomance_RecordsCountAggregateInputType = {
    id?: true
    animalId?: true
    milk_yield?: true
    weight?: true
    health_status?: true
    recordedAt?: true
    _all?: true
  }

  export type Perfomance_RecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfomance_Records to aggregate.
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfomance_Records to fetch.
     */
    orderBy?: Perfomance_RecordsOrderByWithRelationInput | Perfomance_RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Perfomance_RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfomance_Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfomance_Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfomance_Records
    **/
    _count?: true | Perfomance_RecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Perfomance_RecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Perfomance_RecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Perfomance_RecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Perfomance_RecordsMaxAggregateInputType
  }

  export type GetPerfomance_RecordsAggregateType<T extends Perfomance_RecordsAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfomance_Records]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfomance_Records[P]>
      : GetScalarType<T[P], AggregatePerfomance_Records[P]>
  }




  export type Perfomance_RecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Perfomance_RecordsWhereInput
    orderBy?: Perfomance_RecordsOrderByWithAggregationInput | Perfomance_RecordsOrderByWithAggregationInput[]
    by: Perfomance_RecordsScalarFieldEnum[] | Perfomance_RecordsScalarFieldEnum
    having?: Perfomance_RecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Perfomance_RecordsCountAggregateInputType | true
    _avg?: Perfomance_RecordsAvgAggregateInputType
    _sum?: Perfomance_RecordsSumAggregateInputType
    _min?: Perfomance_RecordsMinAggregateInputType
    _max?: Perfomance_RecordsMaxAggregateInputType
  }

  export type Perfomance_RecordsGroupByOutputType = {
    id: string
    animalId: string
    milk_yield: number
    weight: number
    health_status: $Enums.AnimalHealth
    recordedAt: Date
    _count: Perfomance_RecordsCountAggregateOutputType | null
    _avg: Perfomance_RecordsAvgAggregateOutputType | null
    _sum: Perfomance_RecordsSumAggregateOutputType | null
    _min: Perfomance_RecordsMinAggregateOutputType | null
    _max: Perfomance_RecordsMaxAggregateOutputType | null
  }

  type GetPerfomance_RecordsGroupByPayload<T extends Perfomance_RecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Perfomance_RecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Perfomance_RecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Perfomance_RecordsGroupByOutputType[P]>
            : GetScalarType<T[P], Perfomance_RecordsGroupByOutputType[P]>
        }
      >
    >


  export type Perfomance_RecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    milk_yield?: boolean
    weight?: boolean
    health_status?: boolean
    recordedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfomance_Records"]>

  export type Perfomance_RecordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    milk_yield?: boolean
    weight?: boolean
    health_status?: boolean
    recordedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfomance_Records"]>

  export type Perfomance_RecordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    milk_yield?: boolean
    weight?: boolean
    health_status?: boolean
    recordedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfomance_Records"]>

  export type Perfomance_RecordsSelectScalar = {
    id?: boolean
    animalId?: boolean
    milk_yield?: boolean
    weight?: boolean
    health_status?: boolean
    recordedAt?: boolean
  }

  export type Perfomance_RecordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animalId" | "milk_yield" | "weight" | "health_status" | "recordedAt", ExtArgs["result"]["perfomance_Records"]>
  export type Perfomance_RecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type Perfomance_RecordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type Perfomance_RecordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $Perfomance_RecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfomance_Records"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animalId: string
      milk_yield: number
      weight: number
      health_status: $Enums.AnimalHealth
      recordedAt: Date
    }, ExtArgs["result"]["perfomance_Records"]>
    composites: {}
  }

  type Perfomance_RecordsGetPayload<S extends boolean | null | undefined | Perfomance_RecordsDefaultArgs> = $Result.GetResult<Prisma.$Perfomance_RecordsPayload, S>

  type Perfomance_RecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Perfomance_RecordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Perfomance_RecordsCountAggregateInputType | true
    }

  export interface Perfomance_RecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfomance_Records'], meta: { name: 'Perfomance_Records' } }
    /**
     * Find zero or one Perfomance_Records that matches the filter.
     * @param {Perfomance_RecordsFindUniqueArgs} args - Arguments to find a Perfomance_Records
     * @example
     * // Get one Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Perfomance_RecordsFindUniqueArgs>(args: SelectSubset<T, Perfomance_RecordsFindUniqueArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfomance_Records that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Perfomance_RecordsFindUniqueOrThrowArgs} args - Arguments to find a Perfomance_Records
     * @example
     * // Get one Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Perfomance_RecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, Perfomance_RecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfomance_Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsFindFirstArgs} args - Arguments to find a Perfomance_Records
     * @example
     * // Get one Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Perfomance_RecordsFindFirstArgs>(args?: SelectSubset<T, Perfomance_RecordsFindFirstArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfomance_Records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsFindFirstOrThrowArgs} args - Arguments to find a Perfomance_Records
     * @example
     * // Get one Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Perfomance_RecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, Perfomance_RecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfomance_Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findMany()
     * 
     * // Get first 10 Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfomance_RecordsWithIdOnly = await prisma.perfomance_Records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Perfomance_RecordsFindManyArgs>(args?: SelectSubset<T, Perfomance_RecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfomance_Records.
     * @param {Perfomance_RecordsCreateArgs} args - Arguments to create a Perfomance_Records.
     * @example
     * // Create one Perfomance_Records
     * const Perfomance_Records = await prisma.perfomance_Records.create({
     *   data: {
     *     // ... data to create a Perfomance_Records
     *   }
     * })
     * 
     */
    create<T extends Perfomance_RecordsCreateArgs>(args: SelectSubset<T, Perfomance_RecordsCreateArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfomance_Records.
     * @param {Perfomance_RecordsCreateManyArgs} args - Arguments to create many Perfomance_Records.
     * @example
     * // Create many Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Perfomance_RecordsCreateManyArgs>(args?: SelectSubset<T, Perfomance_RecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfomance_Records and returns the data saved in the database.
     * @param {Perfomance_RecordsCreateManyAndReturnArgs} args - Arguments to create many Perfomance_Records.
     * @example
     * // Create many Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfomance_Records and only return the `id`
     * const perfomance_RecordsWithIdOnly = await prisma.perfomance_Records.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Perfomance_RecordsCreateManyAndReturnArgs>(args?: SelectSubset<T, Perfomance_RecordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perfomance_Records.
     * @param {Perfomance_RecordsDeleteArgs} args - Arguments to delete one Perfomance_Records.
     * @example
     * // Delete one Perfomance_Records
     * const Perfomance_Records = await prisma.perfomance_Records.delete({
     *   where: {
     *     // ... filter to delete one Perfomance_Records
     *   }
     * })
     * 
     */
    delete<T extends Perfomance_RecordsDeleteArgs>(args: SelectSubset<T, Perfomance_RecordsDeleteArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfomance_Records.
     * @param {Perfomance_RecordsUpdateArgs} args - Arguments to update one Perfomance_Records.
     * @example
     * // Update one Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Perfomance_RecordsUpdateArgs>(args: SelectSubset<T, Perfomance_RecordsUpdateArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfomance_Records.
     * @param {Perfomance_RecordsDeleteManyArgs} args - Arguments to filter Perfomance_Records to delete.
     * @example
     * // Delete a few Perfomance_Records
     * const { count } = await prisma.perfomance_Records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Perfomance_RecordsDeleteManyArgs>(args?: SelectSubset<T, Perfomance_RecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfomance_Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Perfomance_RecordsUpdateManyArgs>(args: SelectSubset<T, Perfomance_RecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfomance_Records and returns the data updated in the database.
     * @param {Perfomance_RecordsUpdateManyAndReturnArgs} args - Arguments to update many Perfomance_Records.
     * @example
     * // Update many Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perfomance_Records and only return the `id`
     * const perfomance_RecordsWithIdOnly = await prisma.perfomance_Records.updateManyAndReturn({
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
    updateManyAndReturn<T extends Perfomance_RecordsUpdateManyAndReturnArgs>(args: SelectSubset<T, Perfomance_RecordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perfomance_Records.
     * @param {Perfomance_RecordsUpsertArgs} args - Arguments to update or create a Perfomance_Records.
     * @example
     * // Update or create a Perfomance_Records
     * const perfomance_Records = await prisma.perfomance_Records.upsert({
     *   create: {
     *     // ... data to create a Perfomance_Records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfomance_Records we want to update
     *   }
     * })
     */
    upsert<T extends Perfomance_RecordsUpsertArgs>(args: SelectSubset<T, Perfomance_RecordsUpsertArgs<ExtArgs>>): Prisma__Perfomance_RecordsClient<$Result.GetResult<Prisma.$Perfomance_RecordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfomance_Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsCountArgs} args - Arguments to filter Perfomance_Records to count.
     * @example
     * // Count the number of Perfomance_Records
     * const count = await prisma.perfomance_Records.count({
     *   where: {
     *     // ... the filter for the Perfomance_Records we want to count
     *   }
     * })
    **/
    count<T extends Perfomance_RecordsCountArgs>(
      args?: Subset<T, Perfomance_RecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Perfomance_RecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfomance_Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Perfomance_RecordsAggregateArgs>(args: Subset<T, Perfomance_RecordsAggregateArgs>): Prisma.PrismaPromise<GetPerfomance_RecordsAggregateType<T>>

    /**
     * Group by Perfomance_Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Perfomance_RecordsGroupByArgs} args - Group by arguments.
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
      T extends Perfomance_RecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Perfomance_RecordsGroupByArgs['orderBy'] }
        : { orderBy?: Perfomance_RecordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Perfomance_RecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfomance_RecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfomance_Records model
   */
  readonly fields: Perfomance_RecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfomance_Records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Perfomance_RecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Perfomance_Records model
   */
  interface Perfomance_RecordsFieldRefs {
    readonly id: FieldRef<"Perfomance_Records", 'String'>
    readonly animalId: FieldRef<"Perfomance_Records", 'String'>
    readonly milk_yield: FieldRef<"Perfomance_Records", 'Float'>
    readonly weight: FieldRef<"Perfomance_Records", 'Float'>
    readonly health_status: FieldRef<"Perfomance_Records", 'AnimalHealth'>
    readonly recordedAt: FieldRef<"Perfomance_Records", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Perfomance_Records findUnique
   */
  export type Perfomance_RecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Perfomance_Records to fetch.
     */
    where: Perfomance_RecordsWhereUniqueInput
  }

  /**
   * Perfomance_Records findUniqueOrThrow
   */
  export type Perfomance_RecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Perfomance_Records to fetch.
     */
    where: Perfomance_RecordsWhereUniqueInput
  }

  /**
   * Perfomance_Records findFirst
   */
  export type Perfomance_RecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Perfomance_Records to fetch.
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfomance_Records to fetch.
     */
    orderBy?: Perfomance_RecordsOrderByWithRelationInput | Perfomance_RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfomance_Records.
     */
    cursor?: Perfomance_RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfomance_Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfomance_Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfomance_Records.
     */
    distinct?: Perfomance_RecordsScalarFieldEnum | Perfomance_RecordsScalarFieldEnum[]
  }

  /**
   * Perfomance_Records findFirstOrThrow
   */
  export type Perfomance_RecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Perfomance_Records to fetch.
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfomance_Records to fetch.
     */
    orderBy?: Perfomance_RecordsOrderByWithRelationInput | Perfomance_RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfomance_Records.
     */
    cursor?: Perfomance_RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfomance_Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfomance_Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfomance_Records.
     */
    distinct?: Perfomance_RecordsScalarFieldEnum | Perfomance_RecordsScalarFieldEnum[]
  }

  /**
   * Perfomance_Records findMany
   */
  export type Perfomance_RecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Perfomance_Records to fetch.
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfomance_Records to fetch.
     */
    orderBy?: Perfomance_RecordsOrderByWithRelationInput | Perfomance_RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfomance_Records.
     */
    cursor?: Perfomance_RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfomance_Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfomance_Records.
     */
    skip?: number
    distinct?: Perfomance_RecordsScalarFieldEnum | Perfomance_RecordsScalarFieldEnum[]
  }

  /**
   * Perfomance_Records create
   */
  export type Perfomance_RecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfomance_Records.
     */
    data: XOR<Perfomance_RecordsCreateInput, Perfomance_RecordsUncheckedCreateInput>
  }

  /**
   * Perfomance_Records createMany
   */
  export type Perfomance_RecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfomance_Records.
     */
    data: Perfomance_RecordsCreateManyInput | Perfomance_RecordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfomance_Records createManyAndReturn
   */
  export type Perfomance_RecordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * The data used to create many Perfomance_Records.
     */
    data: Perfomance_RecordsCreateManyInput | Perfomance_RecordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfomance_Records update
   */
  export type Perfomance_RecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfomance_Records.
     */
    data: XOR<Perfomance_RecordsUpdateInput, Perfomance_RecordsUncheckedUpdateInput>
    /**
     * Choose, which Perfomance_Records to update.
     */
    where: Perfomance_RecordsWhereUniqueInput
  }

  /**
   * Perfomance_Records updateMany
   */
  export type Perfomance_RecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfomance_Records.
     */
    data: XOR<Perfomance_RecordsUpdateManyMutationInput, Perfomance_RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Perfomance_Records to update
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * Limit how many Perfomance_Records to update.
     */
    limit?: number
  }

  /**
   * Perfomance_Records updateManyAndReturn
   */
  export type Perfomance_RecordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * The data used to update Perfomance_Records.
     */
    data: XOR<Perfomance_RecordsUpdateManyMutationInput, Perfomance_RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Perfomance_Records to update
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * Limit how many Perfomance_Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfomance_Records upsert
   */
  export type Perfomance_RecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfomance_Records to update in case it exists.
     */
    where: Perfomance_RecordsWhereUniqueInput
    /**
     * In case the Perfomance_Records found by the `where` argument doesn't exist, create a new Perfomance_Records with this data.
     */
    create: XOR<Perfomance_RecordsCreateInput, Perfomance_RecordsUncheckedCreateInput>
    /**
     * In case the Perfomance_Records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Perfomance_RecordsUpdateInput, Perfomance_RecordsUncheckedUpdateInput>
  }

  /**
   * Perfomance_Records delete
   */
  export type Perfomance_RecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
    /**
     * Filter which Perfomance_Records to delete.
     */
    where: Perfomance_RecordsWhereUniqueInput
  }

  /**
   * Perfomance_Records deleteMany
   */
  export type Perfomance_RecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfomance_Records to delete
     */
    where?: Perfomance_RecordsWhereInput
    /**
     * Limit how many Perfomance_Records to delete.
     */
    limit?: number
  }

  /**
   * Perfomance_Records without action
   */
  export type Perfomance_RecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfomance_Records
     */
    select?: Perfomance_RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfomance_Records
     */
    omit?: Perfomance_RecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Perfomance_RecordsInclude<ExtArgs> | null
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
    userId: 'userId',
    name: 'name',
    sex: 'sex',
    password: 'password',
    phone_number: 'phone_number',
    email: 'email',
    createdAt: 'createdAt',
    lastActive: 'lastActive',
    farmingSystem: 'farmingSystem',
    district: 'district',
    sector: 'sector',
    village: 'village',
    cell: 'cell',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    animalId: 'animalId',
    name: 'name',
    sex: 'sex',
    birthDate: 'birthDate',
    type: 'type',
    registrationDate: 'registrationDate',
    profilePhoto: 'profilePhoto',
    additionalPhotos: 'additionalPhotos',
    updatedAt: 'updatedAt',
    status: 'status',
    motherId: 'motherId',
    fatherId: 'fatherId',
    ownerId: 'ownerId',
    specie: 'specie',
    breed_confidence: 'breed_confidence',
    breedingEventId: 'breedingEventId'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const BreedingScalarFieldEnum: {
    breedingId: 'breedingId',
    motherId: 'motherId',
    fatherId: 'fatherId',
    breedingDate: 'breedingDate',
    method: 'method',
    expectedCalvingDate: 'expectedCalvingDate',
    calving_date: 'calving_date',
    userRating: 'userRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BreedingScalarFieldEnum = (typeof BreedingScalarFieldEnum)[keyof typeof BreedingScalarFieldEnum]


  export const Breeding_RecScalarFieldEnum: {
    breedingRecId: 'breedingRecId',
    animalInitial: 'animalInitial',
    recommendedAnimalId: 'recommendedAnimalId',
    overall_score: 'overall_score',
    user_accepted: 'user_accepted',
    generatedAt: 'generatedAt',
    userFeedback: 'userFeedback',
    genetic_diversity_score: 'genetic_diversity_score',
    inbreeding_risk_score: 'inbreeding_risk_score',
    breed_composition_match_score: 'breed_composition_match_score'
  };

  export type Breeding_RecScalarFieldEnum = (typeof Breeding_RecScalarFieldEnum)[keyof typeof Breeding_RecScalarFieldEnum]


  export const RelatedNess_EstimatesScalarFieldEnum: {
    id: 'id',
    animal1: 'animal1',
    animal2: 'animal2',
    confidence: 'confidence',
    relatedness_prob: 'relatedness_prob',
    pedigree_coeff: 'pedigree_coeff'
  };

  export type RelatedNess_EstimatesScalarFieldEnum = (typeof RelatedNess_EstimatesScalarFieldEnum)[keyof typeof RelatedNess_EstimatesScalarFieldEnum]


  export const Perfomance_RecordsScalarFieldEnum: {
    id: 'id',
    animalId: 'animalId',
    milk_yield: 'milk_yield',
    weight: 'weight',
    health_status: 'health_status',
    recordedAt: 'recordedAt'
  };

  export type Perfomance_RecordsScalarFieldEnum = (typeof Perfomance_RecordsScalarFieldEnum)[keyof typeof Perfomance_RecordsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnimalType'
   */
  export type EnumAnimalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalType'>
    


  /**
   * Reference to a field of type 'AnimalType[]'
   */
  export type ListEnumAnimalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalType[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'AnimalStatus'
   */
  export type EnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus'>
    


  /**
   * Reference to a field of type 'AnimalStatus[]'
   */
  export type ListEnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus[]'>
    


  /**
   * Reference to a field of type 'AnimalSpecies'
   */
  export type EnumAnimalSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalSpecies'>
    


  /**
   * Reference to a field of type 'AnimalSpecies[]'
   */
  export type ListEnumAnimalSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalSpecies[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BreedingMethod'
   */
  export type EnumBreedingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BreedingMethod'>
    


  /**
   * Reference to a field of type 'BreedingMethod[]'
   */
  export type ListEnumBreedingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BreedingMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AnimalHealth'
   */
  export type EnumAnimalHealthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalHealth'>
    


  /**
   * Reference to a field of type 'AnimalHealth[]'
   */
  export type ListEnumAnimalHealthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalHealth[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    sex?: EnumGenderFilter<"User"> | $Enums.Gender
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    farmingSystem?: StringFilter<"User"> | string
    district?: StringFilter<"User"> | string
    sector?: StringFilter<"User"> | string
    village?: StringFilter<"User"> | string
    cell?: StringFilter<"User"> | string
    latitude?: StringFilter<"User"> | string
    longitude?: StringFilter<"User"> | string
    animals?: AnimalListRelationFilter
    breedingsInvolved?: BreedingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    farmingSystem?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    village?: SortOrder
    cell?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    animals?: AnimalOrderByRelationAggregateInput
    breedingsInvolved?: BreedingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    phone_number?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    sex?: EnumGenderFilter<"User"> | $Enums.Gender
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    farmingSystem?: StringFilter<"User"> | string
    district?: StringFilter<"User"> | string
    sector?: StringFilter<"User"> | string
    village?: StringFilter<"User"> | string
    cell?: StringFilter<"User"> | string
    latitude?: StringFilter<"User"> | string
    longitude?: StringFilter<"User"> | string
    animals?: AnimalListRelationFilter
    breedingsInvolved?: BreedingListRelationFilter
  }, "userId" | "phone_number" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    farmingSystem?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    village?: SortOrder
    cell?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    sex?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    password?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"User"> | Date | string
    farmingSystem?: StringWithAggregatesFilter<"User"> | string
    district?: StringWithAggregatesFilter<"User"> | string
    sector?: StringWithAggregatesFilter<"User"> | string
    village?: StringWithAggregatesFilter<"User"> | string
    cell?: StringWithAggregatesFilter<"User"> | string
    latitude?: StringWithAggregatesFilter<"User"> | string
    longitude?: StringWithAggregatesFilter<"User"> | string
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    animalId?: StringFilter<"Animal"> | string
    name?: StringNullableFilter<"Animal"> | string | null
    sex?: EnumGenderFilter<"Animal"> | $Enums.Gender
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    type?: EnumAnimalTypeFilter<"Animal"> | $Enums.AnimalType
    registrationDate?: DateTimeFilter<"Animal"> | Date | string
    profilePhoto?: StringFilter<"Animal"> | string
    additionalPhotos?: JsonNullableListFilter<"Animal">
    updatedAt?: DateTimeFilter<"Animal"> | Date | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    motherId?: StringNullableFilter<"Animal"> | string | null
    fatherId?: StringNullableFilter<"Animal"> | string | null
    ownerId?: StringFilter<"Animal"> | string
    specie?: EnumAnimalSpeciesFilter<"Animal"> | $Enums.AnimalSpecies
    breed_confidence?: FloatFilter<"Animal"> | number
    breedingEventId?: StringFilter<"Animal"> | string
    mother?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    father?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    offspringsAsFather?: AnimalListRelationFilter
    offspringAsMother?: AnimalListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    breedingAsMother?: BreedingListRelationFilter
    breedingAsFather?: BreedingListRelationFilter
    breedingEvent?: XOR<BreedingScalarRelationFilter, BreedingWhereInput>
    originalBreedingRecs?: Breeding_RecListRelationFilter
    recommendedBreedingRecs?: Breeding_RecListRelationFilter
    relatednessAsAnimal1?: RelatedNess_EstimatesListRelationFilter
    relatednessAsAnimal2?: RelatedNess_EstimatesListRelationFilter
    performanceRecords?: Perfomance_RecordsListRelationFilter
  }

  export type AnimalOrderByWithRelationInput = {
    animalId?: SortOrder
    name?: SortOrderInput | SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    type?: SortOrder
    registrationDate?: SortOrder
    profilePhoto?: SortOrder
    additionalPhotos?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    motherId?: SortOrderInput | SortOrder
    fatherId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    specie?: SortOrder
    breed_confidence?: SortOrder
    breedingEventId?: SortOrder
    mother?: AnimalOrderByWithRelationInput
    father?: AnimalOrderByWithRelationInput
    offspringsAsFather?: AnimalOrderByRelationAggregateInput
    offspringAsMother?: AnimalOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    breedingAsMother?: BreedingOrderByRelationAggregateInput
    breedingAsFather?: BreedingOrderByRelationAggregateInput
    breedingEvent?: BreedingOrderByWithRelationInput
    originalBreedingRecs?: Breeding_RecOrderByRelationAggregateInput
    recommendedBreedingRecs?: Breeding_RecOrderByRelationAggregateInput
    relatednessAsAnimal1?: RelatedNess_EstimatesOrderByRelationAggregateInput
    relatednessAsAnimal2?: RelatedNess_EstimatesOrderByRelationAggregateInput
    performanceRecords?: Perfomance_RecordsOrderByRelationAggregateInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    animalId?: string
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    name?: StringNullableFilter<"Animal"> | string | null
    sex?: EnumGenderFilter<"Animal"> | $Enums.Gender
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    type?: EnumAnimalTypeFilter<"Animal"> | $Enums.AnimalType
    registrationDate?: DateTimeFilter<"Animal"> | Date | string
    profilePhoto?: StringFilter<"Animal"> | string
    additionalPhotos?: JsonNullableListFilter<"Animal">
    updatedAt?: DateTimeFilter<"Animal"> | Date | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    motherId?: StringNullableFilter<"Animal"> | string | null
    fatherId?: StringNullableFilter<"Animal"> | string | null
    ownerId?: StringFilter<"Animal"> | string
    specie?: EnumAnimalSpeciesFilter<"Animal"> | $Enums.AnimalSpecies
    breed_confidence?: FloatFilter<"Animal"> | number
    breedingEventId?: StringFilter<"Animal"> | string
    mother?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    father?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    offspringsAsFather?: AnimalListRelationFilter
    offspringAsMother?: AnimalListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    breedingAsMother?: BreedingListRelationFilter
    breedingAsFather?: BreedingListRelationFilter
    breedingEvent?: XOR<BreedingScalarRelationFilter, BreedingWhereInput>
    originalBreedingRecs?: Breeding_RecListRelationFilter
    recommendedBreedingRecs?: Breeding_RecListRelationFilter
    relatednessAsAnimal1?: RelatedNess_EstimatesListRelationFilter
    relatednessAsAnimal2?: RelatedNess_EstimatesListRelationFilter
    performanceRecords?: Perfomance_RecordsListRelationFilter
  }, "animalId">

  export type AnimalOrderByWithAggregationInput = {
    animalId?: SortOrder
    name?: SortOrderInput | SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    type?: SortOrder
    registrationDate?: SortOrder
    profilePhoto?: SortOrder
    additionalPhotos?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    motherId?: SortOrderInput | SortOrder
    fatherId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    specie?: SortOrder
    breed_confidence?: SortOrder
    breedingEventId?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    animalId?: StringWithAggregatesFilter<"Animal"> | string
    name?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    sex?: EnumGenderWithAggregatesFilter<"Animal"> | $Enums.Gender
    birthDate?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    type?: EnumAnimalTypeWithAggregatesFilter<"Animal"> | $Enums.AnimalType
    registrationDate?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    profilePhoto?: StringWithAggregatesFilter<"Animal"> | string
    additionalPhotos?: JsonNullableListFilter<"Animal">
    updatedAt?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    status?: EnumAnimalStatusWithAggregatesFilter<"Animal"> | $Enums.AnimalStatus
    motherId?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    fatherId?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    ownerId?: StringWithAggregatesFilter<"Animal"> | string
    specie?: EnumAnimalSpeciesWithAggregatesFilter<"Animal"> | $Enums.AnimalSpecies
    breed_confidence?: FloatWithAggregatesFilter<"Animal"> | number
    breedingEventId?: StringWithAggregatesFilter<"Animal"> | string
  }

  export type BreedingWhereInput = {
    AND?: BreedingWhereInput | BreedingWhereInput[]
    OR?: BreedingWhereInput[]
    NOT?: BreedingWhereInput | BreedingWhereInput[]
    breedingId?: StringFilter<"Breeding"> | string
    motherId?: StringFilter<"Breeding"> | string
    fatherId?: StringFilter<"Breeding"> | string
    breedingDate?: DateTimeFilter<"Breeding"> | Date | string
    method?: EnumBreedingMethodFilter<"Breeding"> | $Enums.BreedingMethod
    expectedCalvingDate?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    calving_date?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    userRating?: IntNullableFilter<"Breeding"> | number | null
    createdAt?: DateTimeFilter<"Breeding"> | Date | string
    updatedAt?: DateTimeFilter<"Breeding"> | Date | string
    offspring?: AnimalListRelationFilter
    mother?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    father?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    farmers?: UserListRelationFilter
  }

  export type BreedingOrderByWithRelationInput = {
    breedingId?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    breedingDate?: SortOrder
    method?: SortOrder
    expectedCalvingDate?: SortOrderInput | SortOrder
    calving_date?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    offspring?: AnimalOrderByRelationAggregateInput
    mother?: AnimalOrderByWithRelationInput
    father?: AnimalOrderByWithRelationInput
    farmers?: UserOrderByRelationAggregateInput
  }

  export type BreedingWhereUniqueInput = Prisma.AtLeast<{
    breedingId?: string
    AND?: BreedingWhereInput | BreedingWhereInput[]
    OR?: BreedingWhereInput[]
    NOT?: BreedingWhereInput | BreedingWhereInput[]
    motherId?: StringFilter<"Breeding"> | string
    fatherId?: StringFilter<"Breeding"> | string
    breedingDate?: DateTimeFilter<"Breeding"> | Date | string
    method?: EnumBreedingMethodFilter<"Breeding"> | $Enums.BreedingMethod
    expectedCalvingDate?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    calving_date?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    userRating?: IntNullableFilter<"Breeding"> | number | null
    createdAt?: DateTimeFilter<"Breeding"> | Date | string
    updatedAt?: DateTimeFilter<"Breeding"> | Date | string
    offspring?: AnimalListRelationFilter
    mother?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    father?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    farmers?: UserListRelationFilter
  }, "breedingId">

  export type BreedingOrderByWithAggregationInput = {
    breedingId?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    breedingDate?: SortOrder
    method?: SortOrder
    expectedCalvingDate?: SortOrderInput | SortOrder
    calving_date?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BreedingCountOrderByAggregateInput
    _avg?: BreedingAvgOrderByAggregateInput
    _max?: BreedingMaxOrderByAggregateInput
    _min?: BreedingMinOrderByAggregateInput
    _sum?: BreedingSumOrderByAggregateInput
  }

  export type BreedingScalarWhereWithAggregatesInput = {
    AND?: BreedingScalarWhereWithAggregatesInput | BreedingScalarWhereWithAggregatesInput[]
    OR?: BreedingScalarWhereWithAggregatesInput[]
    NOT?: BreedingScalarWhereWithAggregatesInput | BreedingScalarWhereWithAggregatesInput[]
    breedingId?: StringWithAggregatesFilter<"Breeding"> | string
    motherId?: StringWithAggregatesFilter<"Breeding"> | string
    fatherId?: StringWithAggregatesFilter<"Breeding"> | string
    breedingDate?: DateTimeWithAggregatesFilter<"Breeding"> | Date | string
    method?: EnumBreedingMethodWithAggregatesFilter<"Breeding"> | $Enums.BreedingMethod
    expectedCalvingDate?: DateTimeNullableWithAggregatesFilter<"Breeding"> | Date | string | null
    calving_date?: DateTimeNullableWithAggregatesFilter<"Breeding"> | Date | string | null
    userRating?: IntNullableWithAggregatesFilter<"Breeding"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Breeding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Breeding"> | Date | string
  }

  export type Breeding_RecWhereInput = {
    AND?: Breeding_RecWhereInput | Breeding_RecWhereInput[]
    OR?: Breeding_RecWhereInput[]
    NOT?: Breeding_RecWhereInput | Breeding_RecWhereInput[]
    breedingRecId?: StringFilter<"Breeding_Rec"> | string
    animalInitial?: StringFilter<"Breeding_Rec"> | string
    recommendedAnimalId?: StringFilter<"Breeding_Rec"> | string
    overall_score?: FloatFilter<"Breeding_Rec"> | number
    user_accepted?: BoolFilter<"Breeding_Rec"> | boolean
    generatedAt?: DateTimeFilter<"Breeding_Rec"> | Date | string
    userFeedback?: StringNullableFilter<"Breeding_Rec"> | string | null
    genetic_diversity_score?: FloatFilter<"Breeding_Rec"> | number
    inbreeding_risk_score?: FloatFilter<"Breeding_Rec"> | number
    breed_composition_match_score?: FloatFilter<"Breeding_Rec"> | number
    originalAnimal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    recommendedAnimal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type Breeding_RecOrderByWithRelationInput = {
    breedingRecId?: SortOrder
    animalInitial?: SortOrder
    recommendedAnimalId?: SortOrder
    overall_score?: SortOrder
    user_accepted?: SortOrder
    generatedAt?: SortOrder
    userFeedback?: SortOrderInput | SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
    originalAnimal?: AnimalOrderByWithRelationInput
    recommendedAnimal?: AnimalOrderByWithRelationInput
  }

  export type Breeding_RecWhereUniqueInput = Prisma.AtLeast<{
    breedingRecId?: string
    AND?: Breeding_RecWhereInput | Breeding_RecWhereInput[]
    OR?: Breeding_RecWhereInput[]
    NOT?: Breeding_RecWhereInput | Breeding_RecWhereInput[]
    animalInitial?: StringFilter<"Breeding_Rec"> | string
    recommendedAnimalId?: StringFilter<"Breeding_Rec"> | string
    overall_score?: FloatFilter<"Breeding_Rec"> | number
    user_accepted?: BoolFilter<"Breeding_Rec"> | boolean
    generatedAt?: DateTimeFilter<"Breeding_Rec"> | Date | string
    userFeedback?: StringNullableFilter<"Breeding_Rec"> | string | null
    genetic_diversity_score?: FloatFilter<"Breeding_Rec"> | number
    inbreeding_risk_score?: FloatFilter<"Breeding_Rec"> | number
    breed_composition_match_score?: FloatFilter<"Breeding_Rec"> | number
    originalAnimal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    recommendedAnimal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "breedingRecId">

  export type Breeding_RecOrderByWithAggregationInput = {
    breedingRecId?: SortOrder
    animalInitial?: SortOrder
    recommendedAnimalId?: SortOrder
    overall_score?: SortOrder
    user_accepted?: SortOrder
    generatedAt?: SortOrder
    userFeedback?: SortOrderInput | SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
    _count?: Breeding_RecCountOrderByAggregateInput
    _avg?: Breeding_RecAvgOrderByAggregateInput
    _max?: Breeding_RecMaxOrderByAggregateInput
    _min?: Breeding_RecMinOrderByAggregateInput
    _sum?: Breeding_RecSumOrderByAggregateInput
  }

  export type Breeding_RecScalarWhereWithAggregatesInput = {
    AND?: Breeding_RecScalarWhereWithAggregatesInput | Breeding_RecScalarWhereWithAggregatesInput[]
    OR?: Breeding_RecScalarWhereWithAggregatesInput[]
    NOT?: Breeding_RecScalarWhereWithAggregatesInput | Breeding_RecScalarWhereWithAggregatesInput[]
    breedingRecId?: StringWithAggregatesFilter<"Breeding_Rec"> | string
    animalInitial?: StringWithAggregatesFilter<"Breeding_Rec"> | string
    recommendedAnimalId?: StringWithAggregatesFilter<"Breeding_Rec"> | string
    overall_score?: FloatWithAggregatesFilter<"Breeding_Rec"> | number
    user_accepted?: BoolWithAggregatesFilter<"Breeding_Rec"> | boolean
    generatedAt?: DateTimeWithAggregatesFilter<"Breeding_Rec"> | Date | string
    userFeedback?: StringNullableWithAggregatesFilter<"Breeding_Rec"> | string | null
    genetic_diversity_score?: FloatWithAggregatesFilter<"Breeding_Rec"> | number
    inbreeding_risk_score?: FloatWithAggregatesFilter<"Breeding_Rec"> | number
    breed_composition_match_score?: FloatWithAggregatesFilter<"Breeding_Rec"> | number
  }

  export type RelatedNess_EstimatesWhereInput = {
    AND?: RelatedNess_EstimatesWhereInput | RelatedNess_EstimatesWhereInput[]
    OR?: RelatedNess_EstimatesWhereInput[]
    NOT?: RelatedNess_EstimatesWhereInput | RelatedNess_EstimatesWhereInput[]
    id?: StringFilter<"RelatedNess_Estimates"> | string
    animal1?: StringFilter<"RelatedNess_Estimates"> | string
    animal2?: StringFilter<"RelatedNess_Estimates"> | string
    confidence?: FloatFilter<"RelatedNess_Estimates"> | number
    relatedness_prob?: FloatFilter<"RelatedNess_Estimates"> | number
    pedigree_coeff?: FloatFilter<"RelatedNess_Estimates"> | number
    animal1Relation?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    animal2Relation?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type RelatedNess_EstimatesOrderByWithRelationInput = {
    id?: SortOrder
    animal1?: SortOrder
    animal2?: SortOrder
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
    animal1Relation?: AnimalOrderByWithRelationInput
    animal2Relation?: AnimalOrderByWithRelationInput
  }

  export type RelatedNess_EstimatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelatedNess_EstimatesWhereInput | RelatedNess_EstimatesWhereInput[]
    OR?: RelatedNess_EstimatesWhereInput[]
    NOT?: RelatedNess_EstimatesWhereInput | RelatedNess_EstimatesWhereInput[]
    animal1?: StringFilter<"RelatedNess_Estimates"> | string
    animal2?: StringFilter<"RelatedNess_Estimates"> | string
    confidence?: FloatFilter<"RelatedNess_Estimates"> | number
    relatedness_prob?: FloatFilter<"RelatedNess_Estimates"> | number
    pedigree_coeff?: FloatFilter<"RelatedNess_Estimates"> | number
    animal1Relation?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    animal2Relation?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type RelatedNess_EstimatesOrderByWithAggregationInput = {
    id?: SortOrder
    animal1?: SortOrder
    animal2?: SortOrder
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
    _count?: RelatedNess_EstimatesCountOrderByAggregateInput
    _avg?: RelatedNess_EstimatesAvgOrderByAggregateInput
    _max?: RelatedNess_EstimatesMaxOrderByAggregateInput
    _min?: RelatedNess_EstimatesMinOrderByAggregateInput
    _sum?: RelatedNess_EstimatesSumOrderByAggregateInput
  }

  export type RelatedNess_EstimatesScalarWhereWithAggregatesInput = {
    AND?: RelatedNess_EstimatesScalarWhereWithAggregatesInput | RelatedNess_EstimatesScalarWhereWithAggregatesInput[]
    OR?: RelatedNess_EstimatesScalarWhereWithAggregatesInput[]
    NOT?: RelatedNess_EstimatesScalarWhereWithAggregatesInput | RelatedNess_EstimatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelatedNess_Estimates"> | string
    animal1?: StringWithAggregatesFilter<"RelatedNess_Estimates"> | string
    animal2?: StringWithAggregatesFilter<"RelatedNess_Estimates"> | string
    confidence?: FloatWithAggregatesFilter<"RelatedNess_Estimates"> | number
    relatedness_prob?: FloatWithAggregatesFilter<"RelatedNess_Estimates"> | number
    pedigree_coeff?: FloatWithAggregatesFilter<"RelatedNess_Estimates"> | number
  }

  export type Perfomance_RecordsWhereInput = {
    AND?: Perfomance_RecordsWhereInput | Perfomance_RecordsWhereInput[]
    OR?: Perfomance_RecordsWhereInput[]
    NOT?: Perfomance_RecordsWhereInput | Perfomance_RecordsWhereInput[]
    id?: StringFilter<"Perfomance_Records"> | string
    animalId?: StringFilter<"Perfomance_Records"> | string
    milk_yield?: FloatFilter<"Perfomance_Records"> | number
    weight?: FloatFilter<"Perfomance_Records"> | number
    health_status?: EnumAnimalHealthFilter<"Perfomance_Records"> | $Enums.AnimalHealth
    recordedAt?: DateTimeFilter<"Perfomance_Records"> | Date | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type Perfomance_RecordsOrderByWithRelationInput = {
    id?: SortOrder
    animalId?: SortOrder
    milk_yield?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    recordedAt?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type Perfomance_RecordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Perfomance_RecordsWhereInput | Perfomance_RecordsWhereInput[]
    OR?: Perfomance_RecordsWhereInput[]
    NOT?: Perfomance_RecordsWhereInput | Perfomance_RecordsWhereInput[]
    animalId?: StringFilter<"Perfomance_Records"> | string
    milk_yield?: FloatFilter<"Perfomance_Records"> | number
    weight?: FloatFilter<"Perfomance_Records"> | number
    health_status?: EnumAnimalHealthFilter<"Perfomance_Records"> | $Enums.AnimalHealth
    recordedAt?: DateTimeFilter<"Perfomance_Records"> | Date | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type Perfomance_RecordsOrderByWithAggregationInput = {
    id?: SortOrder
    animalId?: SortOrder
    milk_yield?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    recordedAt?: SortOrder
    _count?: Perfomance_RecordsCountOrderByAggregateInput
    _avg?: Perfomance_RecordsAvgOrderByAggregateInput
    _max?: Perfomance_RecordsMaxOrderByAggregateInput
    _min?: Perfomance_RecordsMinOrderByAggregateInput
    _sum?: Perfomance_RecordsSumOrderByAggregateInput
  }

  export type Perfomance_RecordsScalarWhereWithAggregatesInput = {
    AND?: Perfomance_RecordsScalarWhereWithAggregatesInput | Perfomance_RecordsScalarWhereWithAggregatesInput[]
    OR?: Perfomance_RecordsScalarWhereWithAggregatesInput[]
    NOT?: Perfomance_RecordsScalarWhereWithAggregatesInput | Perfomance_RecordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Perfomance_Records"> | string
    animalId?: StringWithAggregatesFilter<"Perfomance_Records"> | string
    milk_yield?: FloatWithAggregatesFilter<"Perfomance_Records"> | number
    weight?: FloatWithAggregatesFilter<"Perfomance_Records"> | number
    health_status?: EnumAnimalHealthWithAggregatesFilter<"Perfomance_Records"> | $Enums.AnimalHealth
    recordedAt?: DateTimeWithAggregatesFilter<"Perfomance_Records"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    animals?: AnimalCreateNestedManyWithoutOwnerInput
    breedingsInvolved?: BreedingCreateNestedManyWithoutFarmersInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    animals?: AnimalUncheckedCreateNestedManyWithoutOwnerInput
    breedingsInvolved?: BreedingUncheckedCreateNestedManyWithoutFarmersInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutOwnerNestedInput
    breedingsInvolved?: BreedingUpdateManyWithoutFarmersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutOwnerNestedInput
    breedingsInvolved?: BreedingUncheckedUpdateManyWithoutFarmersNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
  }

  export type AnimalUpdateManyMutationInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type AnimalUncheckedUpdateManyInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type BreedingCreateInput = {
    breedingId?: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalCreateNestedManyWithoutBreedingEventInput
    mother?: AnimalCreateNestedOneWithoutBreedingAsMotherInput
    father?: AnimalCreateNestedOneWithoutBreedingAsFatherInput
    farmers?: UserCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingUncheckedCreateInput = {
    breedingId?: string
    motherId: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalUncheckedCreateNestedManyWithoutBreedingEventInput
    farmers?: UserUncheckedCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingUpdateInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUpdateManyWithoutBreedingEventNestedInput
    mother?: AnimalUpdateOneWithoutBreedingAsMotherNestedInput
    father?: AnimalUpdateOneWithoutBreedingAsFatherNestedInput
    farmers?: UserUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUncheckedUpdateManyWithoutBreedingEventNestedInput
    farmers?: UserUncheckedUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingCreateManyInput = {
    breedingId?: string
    motherId: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreedingUpdateManyMutationInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedingUncheckedUpdateManyInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Breeding_RecCreateInput = {
    breedingRecId?: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
    originalAnimal: AnimalCreateNestedOneWithoutOriginalBreedingRecsInput
    recommendedAnimal: AnimalCreateNestedOneWithoutRecommendedBreedingRecsInput
  }

  export type Breeding_RecUncheckedCreateInput = {
    breedingRecId?: string
    animalInitial: string
    recommendedAnimalId: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type Breeding_RecUpdateInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
    originalAnimal?: AnimalUpdateOneRequiredWithoutOriginalBreedingRecsNestedInput
    recommendedAnimal?: AnimalUpdateOneRequiredWithoutRecommendedBreedingRecsNestedInput
  }

  export type Breeding_RecUncheckedUpdateInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    animalInitial?: StringFieldUpdateOperationsInput | string
    recommendedAnimalId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type Breeding_RecCreateManyInput = {
    breedingRecId?: string
    animalInitial: string
    recommendedAnimalId: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type Breeding_RecUpdateManyMutationInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type Breeding_RecUncheckedUpdateManyInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    animalInitial?: StringFieldUpdateOperationsInput | string
    recommendedAnimalId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesCreateInput = {
    id?: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
    animal1Relation: AnimalCreateNestedOneWithoutRelatednessAsAnimal1Input
    animal2Relation: AnimalCreateNestedOneWithoutRelatednessAsAnimal2Input
  }

  export type RelatedNess_EstimatesUncheckedCreateInput = {
    id?: string
    animal1: string
    animal2: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type RelatedNess_EstimatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
    animal1Relation?: AnimalUpdateOneRequiredWithoutRelatednessAsAnimal1NestedInput
    animal2Relation?: AnimalUpdateOneRequiredWithoutRelatednessAsAnimal2NestedInput
  }

  export type RelatedNess_EstimatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal1?: StringFieldUpdateOperationsInput | string
    animal2?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesCreateManyInput = {
    id?: string
    animal1: string
    animal2: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type RelatedNess_EstimatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal1?: StringFieldUpdateOperationsInput | string
    animal2?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type Perfomance_RecordsCreateInput = {
    id?: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
    animal: AnimalCreateNestedOneWithoutPerformanceRecordsInput
  }

  export type Perfomance_RecordsUncheckedCreateInput = {
    id?: string
    animalId: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
  }

  export type Perfomance_RecordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalUpdateOneRequiredWithoutPerformanceRecordsNestedInput
  }

  export type Perfomance_RecordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animalId?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Perfomance_RecordsCreateManyInput = {
    id?: string
    animalId: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
  }

  export type Perfomance_RecordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Perfomance_RecordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animalId?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type BreedingListRelationFilter = {
    every?: BreedingWhereInput
    some?: BreedingWhereInput
    none?: BreedingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BreedingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    farmingSystem?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    village?: SortOrder
    cell?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    farmingSystem?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    village?: SortOrder
    cell?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    farmingSystem?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    village?: SortOrder
    cell?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type EnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAnimalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusFilter<$PrismaModel> | $Enums.AnimalStatus
  }

  export type EnumAnimalSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSpeciesFilter<$PrismaModel> | $Enums.AnimalSpecies
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnimalNullableScalarRelationFilter = {
    is?: AnimalWhereInput | null
    isNot?: AnimalWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BreedingScalarRelationFilter = {
    is?: BreedingWhereInput
    isNot?: BreedingWhereInput
  }

  export type Breeding_RecListRelationFilter = {
    every?: Breeding_RecWhereInput
    some?: Breeding_RecWhereInput
    none?: Breeding_RecWhereInput
  }

  export type RelatedNess_EstimatesListRelationFilter = {
    every?: RelatedNess_EstimatesWhereInput
    some?: RelatedNess_EstimatesWhereInput
    none?: RelatedNess_EstimatesWhereInput
  }

  export type Perfomance_RecordsListRelationFilter = {
    every?: Perfomance_RecordsWhereInput
    some?: Perfomance_RecordsWhereInput
    none?: Perfomance_RecordsWhereInput
  }

  export type Breeding_RecOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatedNess_EstimatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Perfomance_RecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalCountOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    type?: SortOrder
    registrationDate?: SortOrder
    profilePhoto?: SortOrder
    additionalPhotos?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    ownerId?: SortOrder
    specie?: SortOrder
    breed_confidence?: SortOrder
    breedingEventId?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    breed_confidence?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    type?: SortOrder
    registrationDate?: SortOrder
    profilePhoto?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    ownerId?: SortOrder
    specie?: SortOrder
    breed_confidence?: SortOrder
    breedingEventId?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    type?: SortOrder
    registrationDate?: SortOrder
    profilePhoto?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    ownerId?: SortOrder
    specie?: SortOrder
    breed_confidence?: SortOrder
    breedingEventId?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    breed_confidence?: SortOrder
  }

  export type EnumAnimalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalTypeFilter<$PrismaModel>
    _max?: NestedEnumAnimalTypeFilter<$PrismaModel>
  }

  export type EnumAnimalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalStatusFilter<$PrismaModel>
  }

  export type EnumAnimalSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
    _max?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBreedingMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.BreedingMethod | EnumBreedingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumBreedingMethodFilter<$PrismaModel> | $Enums.BreedingMethod
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BreedingCountOrderByAggregateInput = {
    breedingId?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    breedingDate?: SortOrder
    method?: SortOrder
    expectedCalvingDate?: SortOrder
    calving_date?: SortOrder
    userRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreedingAvgOrderByAggregateInput = {
    userRating?: SortOrder
  }

  export type BreedingMaxOrderByAggregateInput = {
    breedingId?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    breedingDate?: SortOrder
    method?: SortOrder
    expectedCalvingDate?: SortOrder
    calving_date?: SortOrder
    userRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreedingMinOrderByAggregateInput = {
    breedingId?: SortOrder
    motherId?: SortOrder
    fatherId?: SortOrder
    breedingDate?: SortOrder
    method?: SortOrder
    expectedCalvingDate?: SortOrder
    calving_date?: SortOrder
    userRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreedingSumOrderByAggregateInput = {
    userRating?: SortOrder
  }

  export type EnumBreedingMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BreedingMethod | EnumBreedingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumBreedingMethodWithAggregatesFilter<$PrismaModel> | $Enums.BreedingMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBreedingMethodFilter<$PrismaModel>
    _max?: NestedEnumBreedingMethodFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type Breeding_RecCountOrderByAggregateInput = {
    breedingRecId?: SortOrder
    animalInitial?: SortOrder
    recommendedAnimalId?: SortOrder
    overall_score?: SortOrder
    user_accepted?: SortOrder
    generatedAt?: SortOrder
    userFeedback?: SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
  }

  export type Breeding_RecAvgOrderByAggregateInput = {
    overall_score?: SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
  }

  export type Breeding_RecMaxOrderByAggregateInput = {
    breedingRecId?: SortOrder
    animalInitial?: SortOrder
    recommendedAnimalId?: SortOrder
    overall_score?: SortOrder
    user_accepted?: SortOrder
    generatedAt?: SortOrder
    userFeedback?: SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
  }

  export type Breeding_RecMinOrderByAggregateInput = {
    breedingRecId?: SortOrder
    animalInitial?: SortOrder
    recommendedAnimalId?: SortOrder
    overall_score?: SortOrder
    user_accepted?: SortOrder
    generatedAt?: SortOrder
    userFeedback?: SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
  }

  export type Breeding_RecSumOrderByAggregateInput = {
    overall_score?: SortOrder
    genetic_diversity_score?: SortOrder
    inbreeding_risk_score?: SortOrder
    breed_composition_match_score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RelatedNess_EstimatesCountOrderByAggregateInput = {
    id?: SortOrder
    animal1?: SortOrder
    animal2?: SortOrder
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
  }

  export type RelatedNess_EstimatesAvgOrderByAggregateInput = {
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
  }

  export type RelatedNess_EstimatesMaxOrderByAggregateInput = {
    id?: SortOrder
    animal1?: SortOrder
    animal2?: SortOrder
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
  }

  export type RelatedNess_EstimatesMinOrderByAggregateInput = {
    id?: SortOrder
    animal1?: SortOrder
    animal2?: SortOrder
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
  }

  export type RelatedNess_EstimatesSumOrderByAggregateInput = {
    confidence?: SortOrder
    relatedness_prob?: SortOrder
    pedigree_coeff?: SortOrder
  }

  export type EnumAnimalHealthFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalHealth | EnumAnimalHealthFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalHealthFilter<$PrismaModel> | $Enums.AnimalHealth
  }

  export type Perfomance_RecordsCountOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    milk_yield?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    recordedAt?: SortOrder
  }

  export type Perfomance_RecordsAvgOrderByAggregateInput = {
    milk_yield?: SortOrder
    weight?: SortOrder
  }

  export type Perfomance_RecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    milk_yield?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    recordedAt?: SortOrder
  }

  export type Perfomance_RecordsMinOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    milk_yield?: SortOrder
    weight?: SortOrder
    health_status?: SortOrder
    recordedAt?: SortOrder
  }

  export type Perfomance_RecordsSumOrderByAggregateInput = {
    milk_yield?: SortOrder
    weight?: SortOrder
  }

  export type EnumAnimalHealthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalHealth | EnumAnimalHealthFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalHealthWithAggregatesFilter<$PrismaModel> | $Enums.AnimalHealth
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalHealthFilter<$PrismaModel>
    _max?: NestedEnumAnimalHealthFilter<$PrismaModel>
  }

  export type AnimalCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type BreedingCreateNestedManyWithoutFarmersInput = {
    create?: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput> | BreedingCreateWithoutFarmersInput[] | BreedingUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFarmersInput | BreedingCreateOrConnectWithoutFarmersInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type BreedingUncheckedCreateNestedManyWithoutFarmersInput = {
    create?: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput> | BreedingCreateWithoutFarmersInput[] | BreedingUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFarmersInput | BreedingCreateOrConnectWithoutFarmersInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimalUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOwnerInput | AnimalUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOwnerInput | AnimalUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOwnerInput | AnimalUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type BreedingUpdateManyWithoutFarmersNestedInput = {
    create?: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput> | BreedingCreateWithoutFarmersInput[] | BreedingUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFarmersInput | BreedingCreateOrConnectWithoutFarmersInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutFarmersInput | BreedingUpsertWithWhereUniqueWithoutFarmersInput[]
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutFarmersInput | BreedingUpdateWithWhereUniqueWithoutFarmersInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutFarmersInput | BreedingUpdateManyWithWhereWithoutFarmersInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOwnerInput | AnimalUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOwnerInput | AnimalUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOwnerInput | AnimalUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type BreedingUncheckedUpdateManyWithoutFarmersNestedInput = {
    create?: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput> | BreedingCreateWithoutFarmersInput[] | BreedingUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFarmersInput | BreedingCreateOrConnectWithoutFarmersInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutFarmersInput | BreedingUpsertWithWhereUniqueWithoutFarmersInput[]
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutFarmersInput | BreedingUpdateWithWhereUniqueWithoutFarmersInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutFarmersInput | BreedingUpdateManyWithWhereWithoutFarmersInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type AnimalCreateadditionalPhotosInput = {
    set: InputJsonValue[]
  }

  export type AnimalCreateNestedOneWithoutOffspringAsMotherInput = {
    create?: XOR<AnimalCreateWithoutOffspringAsMotherInput, AnimalUncheckedCreateWithoutOffspringAsMotherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffspringAsMotherInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutOffspringsAsFatherInput = {
    create?: XOR<AnimalCreateWithoutOffspringsAsFatherInput, AnimalUncheckedCreateWithoutOffspringsAsFatherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffspringsAsFatherInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalCreateNestedManyWithoutFatherInput = {
    create?: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput> | AnimalCreateWithoutFatherInput[] | AnimalUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutFatherInput | AnimalCreateOrConnectWithoutFatherInput[]
    createMany?: AnimalCreateManyFatherInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalCreateNestedManyWithoutMotherInput = {
    create?: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput> | AnimalCreateWithoutMotherInput[] | AnimalUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutMotherInput | AnimalCreateOrConnectWithoutMotherInput[]
    createMany?: AnimalCreateManyMotherInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<UserCreateWithoutAnimalsInput, UserUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimalsInput
    connect?: UserWhereUniqueInput
  }

  export type BreedingCreateNestedManyWithoutMotherInput = {
    create?: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput> | BreedingCreateWithoutMotherInput[] | BreedingUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutMotherInput | BreedingCreateOrConnectWithoutMotherInput[]
    createMany?: BreedingCreateManyMotherInputEnvelope
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type BreedingCreateNestedManyWithoutFatherInput = {
    create?: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput> | BreedingCreateWithoutFatherInput[] | BreedingUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFatherInput | BreedingCreateOrConnectWithoutFatherInput[]
    createMany?: BreedingCreateManyFatherInputEnvelope
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type BreedingCreateNestedOneWithoutOffspringInput = {
    create?: XOR<BreedingCreateWithoutOffspringInput, BreedingUncheckedCreateWithoutOffspringInput>
    connectOrCreate?: BreedingCreateOrConnectWithoutOffspringInput
    connect?: BreedingWhereUniqueInput
  }

  export type Breeding_RecCreateNestedManyWithoutOriginalAnimalInput = {
    create?: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput> | Breeding_RecCreateWithoutOriginalAnimalInput[] | Breeding_RecUncheckedCreateWithoutOriginalAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutOriginalAnimalInput | Breeding_RecCreateOrConnectWithoutOriginalAnimalInput[]
    createMany?: Breeding_RecCreateManyOriginalAnimalInputEnvelope
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
  }

  export type Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput = {
    create?: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput> | Breeding_RecCreateWithoutRecommendedAnimalInput[] | Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput | Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput[]
    createMany?: Breeding_RecCreateManyRecommendedAnimalInputEnvelope
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
  }

  export type RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal1RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal1RelationInputEnvelope
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
  }

  export type RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal2RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal2RelationInputEnvelope
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
  }

  export type Perfomance_RecordsCreateNestedManyWithoutAnimalInput = {
    create?: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput> | Perfomance_RecordsCreateWithoutAnimalInput[] | Perfomance_RecordsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: Perfomance_RecordsCreateOrConnectWithoutAnimalInput | Perfomance_RecordsCreateOrConnectWithoutAnimalInput[]
    createMany?: Perfomance_RecordsCreateManyAnimalInputEnvelope
    connect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutFatherInput = {
    create?: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput> | AnimalCreateWithoutFatherInput[] | AnimalUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutFatherInput | AnimalCreateOrConnectWithoutFatherInput[]
    createMany?: AnimalCreateManyFatherInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutMotherInput = {
    create?: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput> | AnimalCreateWithoutMotherInput[] | AnimalUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutMotherInput | AnimalCreateOrConnectWithoutMotherInput[]
    createMany?: AnimalCreateManyMotherInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type BreedingUncheckedCreateNestedManyWithoutMotherInput = {
    create?: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput> | BreedingCreateWithoutMotherInput[] | BreedingUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutMotherInput | BreedingCreateOrConnectWithoutMotherInput[]
    createMany?: BreedingCreateManyMotherInputEnvelope
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type BreedingUncheckedCreateNestedManyWithoutFatherInput = {
    create?: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput> | BreedingCreateWithoutFatherInput[] | BreedingUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFatherInput | BreedingCreateOrConnectWithoutFatherInput[]
    createMany?: BreedingCreateManyFatherInputEnvelope
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
  }

  export type Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput = {
    create?: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput> | Breeding_RecCreateWithoutOriginalAnimalInput[] | Breeding_RecUncheckedCreateWithoutOriginalAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutOriginalAnimalInput | Breeding_RecCreateOrConnectWithoutOriginalAnimalInput[]
    createMany?: Breeding_RecCreateManyOriginalAnimalInputEnvelope
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
  }

  export type Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput = {
    create?: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput> | Breeding_RecCreateWithoutRecommendedAnimalInput[] | Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput | Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput[]
    createMany?: Breeding_RecCreateManyRecommendedAnimalInputEnvelope
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
  }

  export type RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal1RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal1RelationInputEnvelope
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
  }

  export type RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal2RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal2RelationInputEnvelope
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
  }

  export type Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput> | Perfomance_RecordsCreateWithoutAnimalInput[] | Perfomance_RecordsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: Perfomance_RecordsCreateOrConnectWithoutAnimalInput | Perfomance_RecordsCreateOrConnectWithoutAnimalInput[]
    createMany?: Perfomance_RecordsCreateManyAnimalInputEnvelope
    connect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
  }

  export type EnumAnimalTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnimalType
  }

  export type AnimalUpdateadditionalPhotosInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type EnumAnimalStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimalStatus
  }

  export type EnumAnimalSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.AnimalSpecies
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimalUpdateOneWithoutOffspringAsMotherNestedInput = {
    create?: XOR<AnimalCreateWithoutOffspringAsMotherInput, AnimalUncheckedCreateWithoutOffspringAsMotherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffspringAsMotherInput
    upsert?: AnimalUpsertWithoutOffspringAsMotherInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutOffspringAsMotherInput, AnimalUpdateWithoutOffspringAsMotherInput>, AnimalUncheckedUpdateWithoutOffspringAsMotherInput>
  }

  export type AnimalUpdateOneWithoutOffspringsAsFatherNestedInput = {
    create?: XOR<AnimalCreateWithoutOffspringsAsFatherInput, AnimalUncheckedCreateWithoutOffspringsAsFatherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOffspringsAsFatherInput
    upsert?: AnimalUpsertWithoutOffspringsAsFatherInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutOffspringsAsFatherInput, AnimalUpdateWithoutOffspringsAsFatherInput>, AnimalUncheckedUpdateWithoutOffspringsAsFatherInput>
  }

  export type AnimalUpdateManyWithoutFatherNestedInput = {
    create?: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput> | AnimalCreateWithoutFatherInput[] | AnimalUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutFatherInput | AnimalCreateOrConnectWithoutFatherInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutFatherInput | AnimalUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: AnimalCreateManyFatherInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutFatherInput | AnimalUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutFatherInput | AnimalUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AnimalUpdateManyWithoutMotherNestedInput = {
    create?: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput> | AnimalCreateWithoutMotherInput[] | AnimalUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutMotherInput | AnimalCreateOrConnectWithoutMotherInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutMotherInput | AnimalUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: AnimalCreateManyMotherInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutMotherInput | AnimalUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutMotherInput | AnimalUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<UserCreateWithoutAnimalsInput, UserUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimalsInput
    upsert?: UserUpsertWithoutAnimalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimalsInput, UserUpdateWithoutAnimalsInput>, UserUncheckedUpdateWithoutAnimalsInput>
  }

  export type BreedingUpdateManyWithoutMotherNestedInput = {
    create?: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput> | BreedingCreateWithoutMotherInput[] | BreedingUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutMotherInput | BreedingCreateOrConnectWithoutMotherInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutMotherInput | BreedingUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: BreedingCreateManyMotherInputEnvelope
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutMotherInput | BreedingUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutMotherInput | BreedingUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type BreedingUpdateManyWithoutFatherNestedInput = {
    create?: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput> | BreedingCreateWithoutFatherInput[] | BreedingUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFatherInput | BreedingCreateOrConnectWithoutFatherInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutFatherInput | BreedingUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: BreedingCreateManyFatherInputEnvelope
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutFatherInput | BreedingUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutFatherInput | BreedingUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type BreedingUpdateOneRequiredWithoutOffspringNestedInput = {
    create?: XOR<BreedingCreateWithoutOffspringInput, BreedingUncheckedCreateWithoutOffspringInput>
    connectOrCreate?: BreedingCreateOrConnectWithoutOffspringInput
    upsert?: BreedingUpsertWithoutOffspringInput
    connect?: BreedingWhereUniqueInput
    update?: XOR<XOR<BreedingUpdateToOneWithWhereWithoutOffspringInput, BreedingUpdateWithoutOffspringInput>, BreedingUncheckedUpdateWithoutOffspringInput>
  }

  export type Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput = {
    create?: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput> | Breeding_RecCreateWithoutOriginalAnimalInput[] | Breeding_RecUncheckedCreateWithoutOriginalAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutOriginalAnimalInput | Breeding_RecCreateOrConnectWithoutOriginalAnimalInput[]
    upsert?: Breeding_RecUpsertWithWhereUniqueWithoutOriginalAnimalInput | Breeding_RecUpsertWithWhereUniqueWithoutOriginalAnimalInput[]
    createMany?: Breeding_RecCreateManyOriginalAnimalInputEnvelope
    set?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    disconnect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    delete?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    update?: Breeding_RecUpdateWithWhereUniqueWithoutOriginalAnimalInput | Breeding_RecUpdateWithWhereUniqueWithoutOriginalAnimalInput[]
    updateMany?: Breeding_RecUpdateManyWithWhereWithoutOriginalAnimalInput | Breeding_RecUpdateManyWithWhereWithoutOriginalAnimalInput[]
    deleteMany?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
  }

  export type Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput = {
    create?: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput> | Breeding_RecCreateWithoutRecommendedAnimalInput[] | Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput | Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput[]
    upsert?: Breeding_RecUpsertWithWhereUniqueWithoutRecommendedAnimalInput | Breeding_RecUpsertWithWhereUniqueWithoutRecommendedAnimalInput[]
    createMany?: Breeding_RecCreateManyRecommendedAnimalInputEnvelope
    set?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    disconnect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    delete?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    update?: Breeding_RecUpdateWithWhereUniqueWithoutRecommendedAnimalInput | Breeding_RecUpdateWithWhereUniqueWithoutRecommendedAnimalInput[]
    updateMany?: Breeding_RecUpdateManyWithWhereWithoutRecommendedAnimalInput | Breeding_RecUpdateManyWithWhereWithoutRecommendedAnimalInput[]
    deleteMany?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
  }

  export type RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal1RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput[]
    upsert?: RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal1RelationInput | RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal1RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal1RelationInputEnvelope
    set?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    disconnect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    delete?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    update?: RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal1RelationInput | RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal1RelationInput[]
    updateMany?: RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal1RelationInput | RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal1RelationInput[]
    deleteMany?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
  }

  export type RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal2RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput[]
    upsert?: RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal2RelationInput | RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal2RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal2RelationInputEnvelope
    set?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    disconnect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    delete?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    update?: RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal2RelationInput | RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal2RelationInput[]
    updateMany?: RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal2RelationInput | RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal2RelationInput[]
    deleteMany?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
  }

  export type Perfomance_RecordsUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput> | Perfomance_RecordsCreateWithoutAnimalInput[] | Perfomance_RecordsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: Perfomance_RecordsCreateOrConnectWithoutAnimalInput | Perfomance_RecordsCreateOrConnectWithoutAnimalInput[]
    upsert?: Perfomance_RecordsUpsertWithWhereUniqueWithoutAnimalInput | Perfomance_RecordsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: Perfomance_RecordsCreateManyAnimalInputEnvelope
    set?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    disconnect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    delete?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    connect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    update?: Perfomance_RecordsUpdateWithWhereUniqueWithoutAnimalInput | Perfomance_RecordsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: Perfomance_RecordsUpdateManyWithWhereWithoutAnimalInput | Perfomance_RecordsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: Perfomance_RecordsScalarWhereInput | Perfomance_RecordsScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutFatherNestedInput = {
    create?: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput> | AnimalCreateWithoutFatherInput[] | AnimalUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutFatherInput | AnimalCreateOrConnectWithoutFatherInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutFatherInput | AnimalUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: AnimalCreateManyFatherInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutFatherInput | AnimalUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutFatherInput | AnimalUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutMotherNestedInput = {
    create?: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput> | AnimalCreateWithoutMotherInput[] | AnimalUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutMotherInput | AnimalCreateOrConnectWithoutMotherInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutMotherInput | AnimalUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: AnimalCreateManyMotherInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutMotherInput | AnimalUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutMotherInput | AnimalUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type BreedingUncheckedUpdateManyWithoutMotherNestedInput = {
    create?: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput> | BreedingCreateWithoutMotherInput[] | BreedingUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutMotherInput | BreedingCreateOrConnectWithoutMotherInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutMotherInput | BreedingUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: BreedingCreateManyMotherInputEnvelope
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutMotherInput | BreedingUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutMotherInput | BreedingUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type BreedingUncheckedUpdateManyWithoutFatherNestedInput = {
    create?: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput> | BreedingCreateWithoutFatherInput[] | BreedingUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: BreedingCreateOrConnectWithoutFatherInput | BreedingCreateOrConnectWithoutFatherInput[]
    upsert?: BreedingUpsertWithWhereUniqueWithoutFatherInput | BreedingUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: BreedingCreateManyFatherInputEnvelope
    set?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    disconnect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    delete?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    connect?: BreedingWhereUniqueInput | BreedingWhereUniqueInput[]
    update?: BreedingUpdateWithWhereUniqueWithoutFatherInput | BreedingUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: BreedingUpdateManyWithWhereWithoutFatherInput | BreedingUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
  }

  export type Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput = {
    create?: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput> | Breeding_RecCreateWithoutOriginalAnimalInput[] | Breeding_RecUncheckedCreateWithoutOriginalAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutOriginalAnimalInput | Breeding_RecCreateOrConnectWithoutOriginalAnimalInput[]
    upsert?: Breeding_RecUpsertWithWhereUniqueWithoutOriginalAnimalInput | Breeding_RecUpsertWithWhereUniqueWithoutOriginalAnimalInput[]
    createMany?: Breeding_RecCreateManyOriginalAnimalInputEnvelope
    set?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    disconnect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    delete?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    update?: Breeding_RecUpdateWithWhereUniqueWithoutOriginalAnimalInput | Breeding_RecUpdateWithWhereUniqueWithoutOriginalAnimalInput[]
    updateMany?: Breeding_RecUpdateManyWithWhereWithoutOriginalAnimalInput | Breeding_RecUpdateManyWithWhereWithoutOriginalAnimalInput[]
    deleteMany?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
  }

  export type Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput = {
    create?: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput> | Breeding_RecCreateWithoutRecommendedAnimalInput[] | Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput[]
    connectOrCreate?: Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput | Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput[]
    upsert?: Breeding_RecUpsertWithWhereUniqueWithoutRecommendedAnimalInput | Breeding_RecUpsertWithWhereUniqueWithoutRecommendedAnimalInput[]
    createMany?: Breeding_RecCreateManyRecommendedAnimalInputEnvelope
    set?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    disconnect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    delete?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    connect?: Breeding_RecWhereUniqueInput | Breeding_RecWhereUniqueInput[]
    update?: Breeding_RecUpdateWithWhereUniqueWithoutRecommendedAnimalInput | Breeding_RecUpdateWithWhereUniqueWithoutRecommendedAnimalInput[]
    updateMany?: Breeding_RecUpdateManyWithWhereWithoutRecommendedAnimalInput | Breeding_RecUpdateManyWithWhereWithoutRecommendedAnimalInput[]
    deleteMany?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
  }

  export type RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal1RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput[]
    upsert?: RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal1RelationInput | RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal1RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal1RelationInputEnvelope
    set?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    disconnect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    delete?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    update?: RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal1RelationInput | RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal1RelationInput[]
    updateMany?: RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal1RelationInput | RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal1RelationInput[]
    deleteMany?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
  }

  export type RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput = {
    create?: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput> | RelatedNess_EstimatesCreateWithoutAnimal2RelationInput[] | RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput[]
    connectOrCreate?: RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput | RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput[]
    upsert?: RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal2RelationInput | RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal2RelationInput[]
    createMany?: RelatedNess_EstimatesCreateManyAnimal2RelationInputEnvelope
    set?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    disconnect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    delete?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    connect?: RelatedNess_EstimatesWhereUniqueInput | RelatedNess_EstimatesWhereUniqueInput[]
    update?: RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal2RelationInput | RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal2RelationInput[]
    updateMany?: RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal2RelationInput | RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal2RelationInput[]
    deleteMany?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
  }

  export type Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput> | Perfomance_RecordsCreateWithoutAnimalInput[] | Perfomance_RecordsUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: Perfomance_RecordsCreateOrConnectWithoutAnimalInput | Perfomance_RecordsCreateOrConnectWithoutAnimalInput[]
    upsert?: Perfomance_RecordsUpsertWithWhereUniqueWithoutAnimalInput | Perfomance_RecordsUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: Perfomance_RecordsCreateManyAnimalInputEnvelope
    set?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    disconnect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    delete?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    connect?: Perfomance_RecordsWhereUniqueInput | Perfomance_RecordsWhereUniqueInput[]
    update?: Perfomance_RecordsUpdateWithWhereUniqueWithoutAnimalInput | Perfomance_RecordsUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: Perfomance_RecordsUpdateManyWithWhereWithoutAnimalInput | Perfomance_RecordsUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: Perfomance_RecordsScalarWhereInput | Perfomance_RecordsScalarWhereInput[]
  }

  export type AnimalCreateNestedManyWithoutBreedingEventInput = {
    create?: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput> | AnimalCreateWithoutBreedingEventInput[] | AnimalUncheckedCreateWithoutBreedingEventInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingEventInput | AnimalCreateOrConnectWithoutBreedingEventInput[]
    createMany?: AnimalCreateManyBreedingEventInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalCreateNestedOneWithoutBreedingAsMotherInput = {
    create?: XOR<AnimalCreateWithoutBreedingAsMotherInput, AnimalUncheckedCreateWithoutBreedingAsMotherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingAsMotherInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutBreedingAsFatherInput = {
    create?: XOR<AnimalCreateWithoutBreedingAsFatherInput, AnimalUncheckedCreateWithoutBreedingAsFatherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingAsFatherInput
    connect?: AnimalWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBreedingsInvolvedInput = {
    create?: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput> | UserCreateWithoutBreedingsInvolvedInput[] | UserUncheckedCreateWithoutBreedingsInvolvedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBreedingsInvolvedInput | UserCreateOrConnectWithoutBreedingsInvolvedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutBreedingEventInput = {
    create?: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput> | AnimalCreateWithoutBreedingEventInput[] | AnimalUncheckedCreateWithoutBreedingEventInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingEventInput | AnimalCreateOrConnectWithoutBreedingEventInput[]
    createMany?: AnimalCreateManyBreedingEventInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBreedingsInvolvedInput = {
    create?: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput> | UserCreateWithoutBreedingsInvolvedInput[] | UserUncheckedCreateWithoutBreedingsInvolvedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBreedingsInvolvedInput | UserCreateOrConnectWithoutBreedingsInvolvedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumBreedingMethodFieldUpdateOperationsInput = {
    set?: $Enums.BreedingMethod
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimalUpdateManyWithoutBreedingEventNestedInput = {
    create?: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput> | AnimalCreateWithoutBreedingEventInput[] | AnimalUncheckedCreateWithoutBreedingEventInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingEventInput | AnimalCreateOrConnectWithoutBreedingEventInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutBreedingEventInput | AnimalUpsertWithWhereUniqueWithoutBreedingEventInput[]
    createMany?: AnimalCreateManyBreedingEventInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutBreedingEventInput | AnimalUpdateWithWhereUniqueWithoutBreedingEventInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutBreedingEventInput | AnimalUpdateManyWithWhereWithoutBreedingEventInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AnimalUpdateOneWithoutBreedingAsMotherNestedInput = {
    create?: XOR<AnimalCreateWithoutBreedingAsMotherInput, AnimalUncheckedCreateWithoutBreedingAsMotherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingAsMotherInput
    upsert?: AnimalUpsertWithoutBreedingAsMotherInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutBreedingAsMotherInput, AnimalUpdateWithoutBreedingAsMotherInput>, AnimalUncheckedUpdateWithoutBreedingAsMotherInput>
  }

  export type AnimalUpdateOneWithoutBreedingAsFatherNestedInput = {
    create?: XOR<AnimalCreateWithoutBreedingAsFatherInput, AnimalUncheckedCreateWithoutBreedingAsFatherInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingAsFatherInput
    upsert?: AnimalUpsertWithoutBreedingAsFatherInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutBreedingAsFatherInput, AnimalUpdateWithoutBreedingAsFatherInput>, AnimalUncheckedUpdateWithoutBreedingAsFatherInput>
  }

  export type UserUpdateManyWithoutBreedingsInvolvedNestedInput = {
    create?: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput> | UserCreateWithoutBreedingsInvolvedInput[] | UserUncheckedCreateWithoutBreedingsInvolvedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBreedingsInvolvedInput | UserCreateOrConnectWithoutBreedingsInvolvedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBreedingsInvolvedInput | UserUpsertWithWhereUniqueWithoutBreedingsInvolvedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBreedingsInvolvedInput | UserUpdateWithWhereUniqueWithoutBreedingsInvolvedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBreedingsInvolvedInput | UserUpdateManyWithWhereWithoutBreedingsInvolvedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutBreedingEventNestedInput = {
    create?: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput> | AnimalCreateWithoutBreedingEventInput[] | AnimalUncheckedCreateWithoutBreedingEventInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutBreedingEventInput | AnimalCreateOrConnectWithoutBreedingEventInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutBreedingEventInput | AnimalUpsertWithWhereUniqueWithoutBreedingEventInput[]
    createMany?: AnimalCreateManyBreedingEventInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutBreedingEventInput | AnimalUpdateWithWhereUniqueWithoutBreedingEventInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutBreedingEventInput | AnimalUpdateManyWithWhereWithoutBreedingEventInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBreedingsInvolvedNestedInput = {
    create?: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput> | UserCreateWithoutBreedingsInvolvedInput[] | UserUncheckedCreateWithoutBreedingsInvolvedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBreedingsInvolvedInput | UserCreateOrConnectWithoutBreedingsInvolvedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBreedingsInvolvedInput | UserUpsertWithWhereUniqueWithoutBreedingsInvolvedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBreedingsInvolvedInput | UserUpdateWithWhereUniqueWithoutBreedingsInvolvedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBreedingsInvolvedInput | UserUpdateManyWithWhereWithoutBreedingsInvolvedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutOriginalBreedingRecsInput = {
    create?: XOR<AnimalCreateWithoutOriginalBreedingRecsInput, AnimalUncheckedCreateWithoutOriginalBreedingRecsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOriginalBreedingRecsInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutRecommendedBreedingRecsInput = {
    create?: XOR<AnimalCreateWithoutRecommendedBreedingRecsInput, AnimalUncheckedCreateWithoutRecommendedBreedingRecsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutRecommendedBreedingRecsInput
    connect?: AnimalWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnimalUpdateOneRequiredWithoutOriginalBreedingRecsNestedInput = {
    create?: XOR<AnimalCreateWithoutOriginalBreedingRecsInput, AnimalUncheckedCreateWithoutOriginalBreedingRecsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutOriginalBreedingRecsInput
    upsert?: AnimalUpsertWithoutOriginalBreedingRecsInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutOriginalBreedingRecsInput, AnimalUpdateWithoutOriginalBreedingRecsInput>, AnimalUncheckedUpdateWithoutOriginalBreedingRecsInput>
  }

  export type AnimalUpdateOneRequiredWithoutRecommendedBreedingRecsNestedInput = {
    create?: XOR<AnimalCreateWithoutRecommendedBreedingRecsInput, AnimalUncheckedCreateWithoutRecommendedBreedingRecsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutRecommendedBreedingRecsInput
    upsert?: AnimalUpsertWithoutRecommendedBreedingRecsInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutRecommendedBreedingRecsInput, AnimalUpdateWithoutRecommendedBreedingRecsInput>, AnimalUncheckedUpdateWithoutRecommendedBreedingRecsInput>
  }

  export type AnimalCreateNestedOneWithoutRelatednessAsAnimal1Input = {
    create?: XOR<AnimalCreateWithoutRelatednessAsAnimal1Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal1Input>
    connectOrCreate?: AnimalCreateOrConnectWithoutRelatednessAsAnimal1Input
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutRelatednessAsAnimal2Input = {
    create?: XOR<AnimalCreateWithoutRelatednessAsAnimal2Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal2Input>
    connectOrCreate?: AnimalCreateOrConnectWithoutRelatednessAsAnimal2Input
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutRelatednessAsAnimal1NestedInput = {
    create?: XOR<AnimalCreateWithoutRelatednessAsAnimal1Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal1Input>
    connectOrCreate?: AnimalCreateOrConnectWithoutRelatednessAsAnimal1Input
    upsert?: AnimalUpsertWithoutRelatednessAsAnimal1Input
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutRelatednessAsAnimal1Input, AnimalUpdateWithoutRelatednessAsAnimal1Input>, AnimalUncheckedUpdateWithoutRelatednessAsAnimal1Input>
  }

  export type AnimalUpdateOneRequiredWithoutRelatednessAsAnimal2NestedInput = {
    create?: XOR<AnimalCreateWithoutRelatednessAsAnimal2Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal2Input>
    connectOrCreate?: AnimalCreateOrConnectWithoutRelatednessAsAnimal2Input
    upsert?: AnimalUpsertWithoutRelatednessAsAnimal2Input
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutRelatednessAsAnimal2Input, AnimalUpdateWithoutRelatednessAsAnimal2Input>, AnimalUncheckedUpdateWithoutRelatednessAsAnimal2Input>
  }

  export type AnimalCreateNestedOneWithoutPerformanceRecordsInput = {
    create?: XOR<AnimalCreateWithoutPerformanceRecordsInput, AnimalUncheckedCreateWithoutPerformanceRecordsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutPerformanceRecordsInput
    connect?: AnimalWhereUniqueInput
  }

  export type EnumAnimalHealthFieldUpdateOperationsInput = {
    set?: $Enums.AnimalHealth
  }

  export type AnimalUpdateOneRequiredWithoutPerformanceRecordsNestedInput = {
    create?: XOR<AnimalCreateWithoutPerformanceRecordsInput, AnimalUncheckedCreateWithoutPerformanceRecordsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutPerformanceRecordsInput
    upsert?: AnimalUpsertWithoutPerformanceRecordsInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutPerformanceRecordsInput, AnimalUpdateWithoutPerformanceRecordsInput>, AnimalUncheckedUpdateWithoutPerformanceRecordsInput>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
  }

  export type NestedEnumAnimalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusFilter<$PrismaModel> | $Enums.AnimalStatus
  }

  export type NestedEnumAnimalSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSpeciesFilter<$PrismaModel> | $Enums.AnimalSpecies
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

  export type NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalTypeFilter<$PrismaModel>
    _max?: NestedEnumAnimalTypeFilter<$PrismaModel>
  }

  export type NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalStatus | EnumAnimalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalStatus[] | ListEnumAnimalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSpecies[] | ListEnumAnimalSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
    _max?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBreedingMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.BreedingMethod | EnumBreedingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumBreedingMethodFilter<$PrismaModel> | $Enums.BreedingMethod
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

  export type NestedEnumBreedingMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BreedingMethod | EnumBreedingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.BreedingMethod[] | ListEnumBreedingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumBreedingMethodWithAggregatesFilter<$PrismaModel> | $Enums.BreedingMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBreedingMethodFilter<$PrismaModel>
    _max?: NestedEnumBreedingMethodFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAnimalHealthFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalHealth | EnumAnimalHealthFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalHealthFilter<$PrismaModel> | $Enums.AnimalHealth
  }

  export type NestedEnumAnimalHealthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalHealth | EnumAnimalHealthFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalHealth[] | ListEnumAnimalHealthFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalHealthWithAggregatesFilter<$PrismaModel> | $Enums.AnimalHealth
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalHealthFilter<$PrismaModel>
    _max?: NestedEnumAnimalHealthFilter<$PrismaModel>
  }

  export type AnimalCreateWithoutOwnerInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOwnerInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput>
  }

  export type AnimalCreateManyOwnerInputEnvelope = {
    data: AnimalCreateManyOwnerInput | AnimalCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BreedingCreateWithoutFarmersInput = {
    breedingId?: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalCreateNestedManyWithoutBreedingEventInput
    mother?: AnimalCreateNestedOneWithoutBreedingAsMotherInput
    father?: AnimalCreateNestedOneWithoutBreedingAsFatherInput
  }

  export type BreedingUncheckedCreateWithoutFarmersInput = {
    breedingId?: string
    motherId: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalUncheckedCreateNestedManyWithoutBreedingEventInput
  }

  export type BreedingCreateOrConnectWithoutFarmersInput = {
    where: BreedingWhereUniqueInput
    create: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput>
  }

  export type AnimalUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutOwnerInput, AnimalUncheckedUpdateWithoutOwnerInput>
    create: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutOwnerInput, AnimalUncheckedUpdateWithoutOwnerInput>
  }

  export type AnimalUpdateManyWithWhereWithoutOwnerInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    animalId?: StringFilter<"Animal"> | string
    name?: StringNullableFilter<"Animal"> | string | null
    sex?: EnumGenderFilter<"Animal"> | $Enums.Gender
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    type?: EnumAnimalTypeFilter<"Animal"> | $Enums.AnimalType
    registrationDate?: DateTimeFilter<"Animal"> | Date | string
    profilePhoto?: StringFilter<"Animal"> | string
    additionalPhotos?: JsonNullableListFilter<"Animal">
    updatedAt?: DateTimeFilter<"Animal"> | Date | string
    status?: EnumAnimalStatusFilter<"Animal"> | $Enums.AnimalStatus
    motherId?: StringNullableFilter<"Animal"> | string | null
    fatherId?: StringNullableFilter<"Animal"> | string | null
    ownerId?: StringFilter<"Animal"> | string
    specie?: EnumAnimalSpeciesFilter<"Animal"> | $Enums.AnimalSpecies
    breed_confidence?: FloatFilter<"Animal"> | number
    breedingEventId?: StringFilter<"Animal"> | string
  }

  export type BreedingUpsertWithWhereUniqueWithoutFarmersInput = {
    where: BreedingWhereUniqueInput
    update: XOR<BreedingUpdateWithoutFarmersInput, BreedingUncheckedUpdateWithoutFarmersInput>
    create: XOR<BreedingCreateWithoutFarmersInput, BreedingUncheckedCreateWithoutFarmersInput>
  }

  export type BreedingUpdateWithWhereUniqueWithoutFarmersInput = {
    where: BreedingWhereUniqueInput
    data: XOR<BreedingUpdateWithoutFarmersInput, BreedingUncheckedUpdateWithoutFarmersInput>
  }

  export type BreedingUpdateManyWithWhereWithoutFarmersInput = {
    where: BreedingScalarWhereInput
    data: XOR<BreedingUpdateManyMutationInput, BreedingUncheckedUpdateManyWithoutFarmersInput>
  }

  export type BreedingScalarWhereInput = {
    AND?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
    OR?: BreedingScalarWhereInput[]
    NOT?: BreedingScalarWhereInput | BreedingScalarWhereInput[]
    breedingId?: StringFilter<"Breeding"> | string
    motherId?: StringFilter<"Breeding"> | string
    fatherId?: StringFilter<"Breeding"> | string
    breedingDate?: DateTimeFilter<"Breeding"> | Date | string
    method?: EnumBreedingMethodFilter<"Breeding"> | $Enums.BreedingMethod
    expectedCalvingDate?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    calving_date?: DateTimeNullableFilter<"Breeding"> | Date | string | null
    userRating?: IntNullableFilter<"Breeding"> | number | null
    createdAt?: DateTimeFilter<"Breeding"> | Date | string
    updatedAt?: DateTimeFilter<"Breeding"> | Date | string
  }

  export type AnimalCreateWithoutOffspringAsMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOffspringAsMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOffspringAsMotherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOffspringAsMotherInput, AnimalUncheckedCreateWithoutOffspringAsMotherInput>
  }

  export type AnimalCreateWithoutOffspringsAsFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOffspringsAsFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOffspringsAsFatherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOffspringsAsFatherInput, AnimalUncheckedCreateWithoutOffspringsAsFatherInput>
  }

  export type AnimalCreateWithoutFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutFatherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput>
  }

  export type AnimalCreateManyFatherInputEnvelope = {
    data: AnimalCreateManyFatherInput | AnimalCreateManyFatherInput[]
    skipDuplicates?: boolean
  }

  export type AnimalCreateWithoutMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutMotherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput>
  }

  export type AnimalCreateManyMotherInputEnvelope = {
    data: AnimalCreateManyMotherInput | AnimalCreateManyMotherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAnimalsInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    breedingsInvolved?: BreedingCreateNestedManyWithoutFarmersInput
  }

  export type UserUncheckedCreateWithoutAnimalsInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    breedingsInvolved?: BreedingUncheckedCreateNestedManyWithoutFarmersInput
  }

  export type UserCreateOrConnectWithoutAnimalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimalsInput, UserUncheckedCreateWithoutAnimalsInput>
  }

  export type BreedingCreateWithoutMotherInput = {
    breedingId?: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalCreateNestedManyWithoutBreedingEventInput
    father?: AnimalCreateNestedOneWithoutBreedingAsFatherInput
    farmers?: UserCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingUncheckedCreateWithoutMotherInput = {
    breedingId?: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalUncheckedCreateNestedManyWithoutBreedingEventInput
    farmers?: UserUncheckedCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingCreateOrConnectWithoutMotherInput = {
    where: BreedingWhereUniqueInput
    create: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput>
  }

  export type BreedingCreateManyMotherInputEnvelope = {
    data: BreedingCreateManyMotherInput | BreedingCreateManyMotherInput[]
    skipDuplicates?: boolean
  }

  export type BreedingCreateWithoutFatherInput = {
    breedingId?: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalCreateNestedManyWithoutBreedingEventInput
    mother?: AnimalCreateNestedOneWithoutBreedingAsMotherInput
    farmers?: UserCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingUncheckedCreateWithoutFatherInput = {
    breedingId?: string
    motherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offspring?: AnimalUncheckedCreateNestedManyWithoutBreedingEventInput
    farmers?: UserUncheckedCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingCreateOrConnectWithoutFatherInput = {
    where: BreedingWhereUniqueInput
    create: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput>
  }

  export type BreedingCreateManyFatherInputEnvelope = {
    data: BreedingCreateManyFatherInput | BreedingCreateManyFatherInput[]
    skipDuplicates?: boolean
  }

  export type BreedingCreateWithoutOffspringInput = {
    breedingId?: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mother?: AnimalCreateNestedOneWithoutBreedingAsMotherInput
    father?: AnimalCreateNestedOneWithoutBreedingAsFatherInput
    farmers?: UserCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingUncheckedCreateWithoutOffspringInput = {
    breedingId?: string
    motherId: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutBreedingsInvolvedInput
  }

  export type BreedingCreateOrConnectWithoutOffspringInput = {
    where: BreedingWhereUniqueInput
    create: XOR<BreedingCreateWithoutOffspringInput, BreedingUncheckedCreateWithoutOffspringInput>
  }

  export type Breeding_RecCreateWithoutOriginalAnimalInput = {
    breedingRecId?: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
    recommendedAnimal: AnimalCreateNestedOneWithoutRecommendedBreedingRecsInput
  }

  export type Breeding_RecUncheckedCreateWithoutOriginalAnimalInput = {
    breedingRecId?: string
    recommendedAnimalId: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type Breeding_RecCreateOrConnectWithoutOriginalAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    create: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput>
  }

  export type Breeding_RecCreateManyOriginalAnimalInputEnvelope = {
    data: Breeding_RecCreateManyOriginalAnimalInput | Breeding_RecCreateManyOriginalAnimalInput[]
    skipDuplicates?: boolean
  }

  export type Breeding_RecCreateWithoutRecommendedAnimalInput = {
    breedingRecId?: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
    originalAnimal: AnimalCreateNestedOneWithoutOriginalBreedingRecsInput
  }

  export type Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput = {
    breedingRecId?: string
    animalInitial: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type Breeding_RecCreateOrConnectWithoutRecommendedAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    create: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput>
  }

  export type Breeding_RecCreateManyRecommendedAnimalInputEnvelope = {
    data: Breeding_RecCreateManyRecommendedAnimalInput | Breeding_RecCreateManyRecommendedAnimalInput[]
    skipDuplicates?: boolean
  }

  export type RelatedNess_EstimatesCreateWithoutAnimal1RelationInput = {
    id?: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
    animal2Relation: AnimalCreateNestedOneWithoutRelatednessAsAnimal2Input
  }

  export type RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput = {
    id?: string
    animal2: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type RelatedNess_EstimatesCreateOrConnectWithoutAnimal1RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    create: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput>
  }

  export type RelatedNess_EstimatesCreateManyAnimal1RelationInputEnvelope = {
    data: RelatedNess_EstimatesCreateManyAnimal1RelationInput | RelatedNess_EstimatesCreateManyAnimal1RelationInput[]
    skipDuplicates?: boolean
  }

  export type RelatedNess_EstimatesCreateWithoutAnimal2RelationInput = {
    id?: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
    animal1Relation: AnimalCreateNestedOneWithoutRelatednessAsAnimal1Input
  }

  export type RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput = {
    id?: string
    animal1: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type RelatedNess_EstimatesCreateOrConnectWithoutAnimal2RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    create: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput>
  }

  export type RelatedNess_EstimatesCreateManyAnimal2RelationInputEnvelope = {
    data: RelatedNess_EstimatesCreateManyAnimal2RelationInput | RelatedNess_EstimatesCreateManyAnimal2RelationInput[]
    skipDuplicates?: boolean
  }

  export type Perfomance_RecordsCreateWithoutAnimalInput = {
    id?: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
  }

  export type Perfomance_RecordsUncheckedCreateWithoutAnimalInput = {
    id?: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
  }

  export type Perfomance_RecordsCreateOrConnectWithoutAnimalInput = {
    where: Perfomance_RecordsWhereUniqueInput
    create: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput>
  }

  export type Perfomance_RecordsCreateManyAnimalInputEnvelope = {
    data: Perfomance_RecordsCreateManyAnimalInput | Perfomance_RecordsCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type AnimalUpsertWithoutOffspringAsMotherInput = {
    update: XOR<AnimalUpdateWithoutOffspringAsMotherInput, AnimalUncheckedUpdateWithoutOffspringAsMotherInput>
    create: XOR<AnimalCreateWithoutOffspringAsMotherInput, AnimalUncheckedCreateWithoutOffspringAsMotherInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutOffspringAsMotherInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutOffspringAsMotherInput, AnimalUncheckedUpdateWithoutOffspringAsMotherInput>
  }

  export type AnimalUpdateWithoutOffspringAsMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOffspringAsMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUpsertWithoutOffspringsAsFatherInput = {
    update: XOR<AnimalUpdateWithoutOffspringsAsFatherInput, AnimalUncheckedUpdateWithoutOffspringsAsFatherInput>
    create: XOR<AnimalCreateWithoutOffspringsAsFatherInput, AnimalUncheckedCreateWithoutOffspringsAsFatherInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutOffspringsAsFatherInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutOffspringsAsFatherInput, AnimalUncheckedUpdateWithoutOffspringsAsFatherInput>
  }

  export type AnimalUpdateWithoutOffspringsAsFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOffspringsAsFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUpsertWithWhereUniqueWithoutFatherInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutFatherInput, AnimalUncheckedUpdateWithoutFatherInput>
    create: XOR<AnimalCreateWithoutFatherInput, AnimalUncheckedCreateWithoutFatherInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutFatherInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutFatherInput, AnimalUncheckedUpdateWithoutFatherInput>
  }

  export type AnimalUpdateManyWithWhereWithoutFatherInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutFatherInput>
  }

  export type AnimalUpsertWithWhereUniqueWithoutMotherInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutMotherInput, AnimalUncheckedUpdateWithoutMotherInput>
    create: XOR<AnimalCreateWithoutMotherInput, AnimalUncheckedCreateWithoutMotherInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutMotherInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutMotherInput, AnimalUncheckedUpdateWithoutMotherInput>
  }

  export type AnimalUpdateManyWithWhereWithoutMotherInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutMotherInput>
  }

  export type UserUpsertWithoutAnimalsInput = {
    update: XOR<UserUpdateWithoutAnimalsInput, UserUncheckedUpdateWithoutAnimalsInput>
    create: XOR<UserCreateWithoutAnimalsInput, UserUncheckedCreateWithoutAnimalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimalsInput, UserUncheckedUpdateWithoutAnimalsInput>
  }

  export type UserUpdateWithoutAnimalsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    breedingsInvolved?: BreedingUpdateManyWithoutFarmersNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimalsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    breedingsInvolved?: BreedingUncheckedUpdateManyWithoutFarmersNestedInput
  }

  export type BreedingUpsertWithWhereUniqueWithoutMotherInput = {
    where: BreedingWhereUniqueInput
    update: XOR<BreedingUpdateWithoutMotherInput, BreedingUncheckedUpdateWithoutMotherInput>
    create: XOR<BreedingCreateWithoutMotherInput, BreedingUncheckedCreateWithoutMotherInput>
  }

  export type BreedingUpdateWithWhereUniqueWithoutMotherInput = {
    where: BreedingWhereUniqueInput
    data: XOR<BreedingUpdateWithoutMotherInput, BreedingUncheckedUpdateWithoutMotherInput>
  }

  export type BreedingUpdateManyWithWhereWithoutMotherInput = {
    where: BreedingScalarWhereInput
    data: XOR<BreedingUpdateManyMutationInput, BreedingUncheckedUpdateManyWithoutMotherInput>
  }

  export type BreedingUpsertWithWhereUniqueWithoutFatherInput = {
    where: BreedingWhereUniqueInput
    update: XOR<BreedingUpdateWithoutFatherInput, BreedingUncheckedUpdateWithoutFatherInput>
    create: XOR<BreedingCreateWithoutFatherInput, BreedingUncheckedCreateWithoutFatherInput>
  }

  export type BreedingUpdateWithWhereUniqueWithoutFatherInput = {
    where: BreedingWhereUniqueInput
    data: XOR<BreedingUpdateWithoutFatherInput, BreedingUncheckedUpdateWithoutFatherInput>
  }

  export type BreedingUpdateManyWithWhereWithoutFatherInput = {
    where: BreedingScalarWhereInput
    data: XOR<BreedingUpdateManyMutationInput, BreedingUncheckedUpdateManyWithoutFatherInput>
  }

  export type BreedingUpsertWithoutOffspringInput = {
    update: XOR<BreedingUpdateWithoutOffspringInput, BreedingUncheckedUpdateWithoutOffspringInput>
    create: XOR<BreedingCreateWithoutOffspringInput, BreedingUncheckedCreateWithoutOffspringInput>
    where?: BreedingWhereInput
  }

  export type BreedingUpdateToOneWithWhereWithoutOffspringInput = {
    where?: BreedingWhereInput
    data: XOR<BreedingUpdateWithoutOffspringInput, BreedingUncheckedUpdateWithoutOffspringInput>
  }

  export type BreedingUpdateWithoutOffspringInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mother?: AnimalUpdateOneWithoutBreedingAsMotherNestedInput
    father?: AnimalUpdateOneWithoutBreedingAsFatherNestedInput
    farmers?: UserUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateWithoutOffspringInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type Breeding_RecUpsertWithWhereUniqueWithoutOriginalAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    update: XOR<Breeding_RecUpdateWithoutOriginalAnimalInput, Breeding_RecUncheckedUpdateWithoutOriginalAnimalInput>
    create: XOR<Breeding_RecCreateWithoutOriginalAnimalInput, Breeding_RecUncheckedCreateWithoutOriginalAnimalInput>
  }

  export type Breeding_RecUpdateWithWhereUniqueWithoutOriginalAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    data: XOR<Breeding_RecUpdateWithoutOriginalAnimalInput, Breeding_RecUncheckedUpdateWithoutOriginalAnimalInput>
  }

  export type Breeding_RecUpdateManyWithWhereWithoutOriginalAnimalInput = {
    where: Breeding_RecScalarWhereInput
    data: XOR<Breeding_RecUpdateManyMutationInput, Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalInput>
  }

  export type Breeding_RecScalarWhereInput = {
    AND?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
    OR?: Breeding_RecScalarWhereInput[]
    NOT?: Breeding_RecScalarWhereInput | Breeding_RecScalarWhereInput[]
    breedingRecId?: StringFilter<"Breeding_Rec"> | string
    animalInitial?: StringFilter<"Breeding_Rec"> | string
    recommendedAnimalId?: StringFilter<"Breeding_Rec"> | string
    overall_score?: FloatFilter<"Breeding_Rec"> | number
    user_accepted?: BoolFilter<"Breeding_Rec"> | boolean
    generatedAt?: DateTimeFilter<"Breeding_Rec"> | Date | string
    userFeedback?: StringNullableFilter<"Breeding_Rec"> | string | null
    genetic_diversity_score?: FloatFilter<"Breeding_Rec"> | number
    inbreeding_risk_score?: FloatFilter<"Breeding_Rec"> | number
    breed_composition_match_score?: FloatFilter<"Breeding_Rec"> | number
  }

  export type Breeding_RecUpsertWithWhereUniqueWithoutRecommendedAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    update: XOR<Breeding_RecUpdateWithoutRecommendedAnimalInput, Breeding_RecUncheckedUpdateWithoutRecommendedAnimalInput>
    create: XOR<Breeding_RecCreateWithoutRecommendedAnimalInput, Breeding_RecUncheckedCreateWithoutRecommendedAnimalInput>
  }

  export type Breeding_RecUpdateWithWhereUniqueWithoutRecommendedAnimalInput = {
    where: Breeding_RecWhereUniqueInput
    data: XOR<Breeding_RecUpdateWithoutRecommendedAnimalInput, Breeding_RecUncheckedUpdateWithoutRecommendedAnimalInput>
  }

  export type Breeding_RecUpdateManyWithWhereWithoutRecommendedAnimalInput = {
    where: Breeding_RecScalarWhereInput
    data: XOR<Breeding_RecUpdateManyMutationInput, Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalInput>
  }

  export type RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal1RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    update: XOR<RelatedNess_EstimatesUpdateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedUpdateWithoutAnimal1RelationInput>
    create: XOR<RelatedNess_EstimatesCreateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal1RelationInput>
  }

  export type RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal1RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    data: XOR<RelatedNess_EstimatesUpdateWithoutAnimal1RelationInput, RelatedNess_EstimatesUncheckedUpdateWithoutAnimal1RelationInput>
  }

  export type RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal1RelationInput = {
    where: RelatedNess_EstimatesScalarWhereInput
    data: XOR<RelatedNess_EstimatesUpdateManyMutationInput, RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationInput>
  }

  export type RelatedNess_EstimatesScalarWhereInput = {
    AND?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
    OR?: RelatedNess_EstimatesScalarWhereInput[]
    NOT?: RelatedNess_EstimatesScalarWhereInput | RelatedNess_EstimatesScalarWhereInput[]
    id?: StringFilter<"RelatedNess_Estimates"> | string
    animal1?: StringFilter<"RelatedNess_Estimates"> | string
    animal2?: StringFilter<"RelatedNess_Estimates"> | string
    confidence?: FloatFilter<"RelatedNess_Estimates"> | number
    relatedness_prob?: FloatFilter<"RelatedNess_Estimates"> | number
    pedigree_coeff?: FloatFilter<"RelatedNess_Estimates"> | number
  }

  export type RelatedNess_EstimatesUpsertWithWhereUniqueWithoutAnimal2RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    update: XOR<RelatedNess_EstimatesUpdateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedUpdateWithoutAnimal2RelationInput>
    create: XOR<RelatedNess_EstimatesCreateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedCreateWithoutAnimal2RelationInput>
  }

  export type RelatedNess_EstimatesUpdateWithWhereUniqueWithoutAnimal2RelationInput = {
    where: RelatedNess_EstimatesWhereUniqueInput
    data: XOR<RelatedNess_EstimatesUpdateWithoutAnimal2RelationInput, RelatedNess_EstimatesUncheckedUpdateWithoutAnimal2RelationInput>
  }

  export type RelatedNess_EstimatesUpdateManyWithWhereWithoutAnimal2RelationInput = {
    where: RelatedNess_EstimatesScalarWhereInput
    data: XOR<RelatedNess_EstimatesUpdateManyMutationInput, RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationInput>
  }

  export type Perfomance_RecordsUpsertWithWhereUniqueWithoutAnimalInput = {
    where: Perfomance_RecordsWhereUniqueInput
    update: XOR<Perfomance_RecordsUpdateWithoutAnimalInput, Perfomance_RecordsUncheckedUpdateWithoutAnimalInput>
    create: XOR<Perfomance_RecordsCreateWithoutAnimalInput, Perfomance_RecordsUncheckedCreateWithoutAnimalInput>
  }

  export type Perfomance_RecordsUpdateWithWhereUniqueWithoutAnimalInput = {
    where: Perfomance_RecordsWhereUniqueInput
    data: XOR<Perfomance_RecordsUpdateWithoutAnimalInput, Perfomance_RecordsUncheckedUpdateWithoutAnimalInput>
  }

  export type Perfomance_RecordsUpdateManyWithWhereWithoutAnimalInput = {
    where: Perfomance_RecordsScalarWhereInput
    data: XOR<Perfomance_RecordsUpdateManyMutationInput, Perfomance_RecordsUncheckedUpdateManyWithoutAnimalInput>
  }

  export type Perfomance_RecordsScalarWhereInput = {
    AND?: Perfomance_RecordsScalarWhereInput | Perfomance_RecordsScalarWhereInput[]
    OR?: Perfomance_RecordsScalarWhereInput[]
    NOT?: Perfomance_RecordsScalarWhereInput | Perfomance_RecordsScalarWhereInput[]
    id?: StringFilter<"Perfomance_Records"> | string
    animalId?: StringFilter<"Perfomance_Records"> | string
    milk_yield?: FloatFilter<"Perfomance_Records"> | number
    weight?: FloatFilter<"Perfomance_Records"> | number
    health_status?: EnumAnimalHealthFilter<"Perfomance_Records"> | $Enums.AnimalHealth
    recordedAt?: DateTimeFilter<"Perfomance_Records"> | Date | string
  }

  export type AnimalCreateWithoutBreedingEventInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutBreedingEventInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutBreedingEventInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput>
  }

  export type AnimalCreateManyBreedingEventInputEnvelope = {
    data: AnimalCreateManyBreedingEventInput | AnimalCreateManyBreedingEventInput[]
    skipDuplicates?: boolean
  }

  export type AnimalCreateWithoutBreedingAsMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutBreedingAsMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutBreedingAsMotherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutBreedingAsMotherInput, AnimalUncheckedCreateWithoutBreedingAsMotherInput>
  }

  export type AnimalCreateWithoutBreedingAsFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutBreedingAsFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutBreedingAsFatherInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutBreedingAsFatherInput, AnimalUncheckedCreateWithoutBreedingAsFatherInput>
  }

  export type UserCreateWithoutBreedingsInvolvedInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    animals?: AnimalCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBreedingsInvolvedInput = {
    userId?: string
    name: string
    sex: $Enums.Gender
    password: string
    phone_number: string
    email?: string | null
    createdAt?: Date | string
    lastActive: Date | string
    farmingSystem: string
    district: string
    sector: string
    village: string
    cell: string
    latitude: string
    longitude: string
    animals?: AnimalUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBreedingsInvolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput>
  }

  export type AnimalUpsertWithWhereUniqueWithoutBreedingEventInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutBreedingEventInput, AnimalUncheckedUpdateWithoutBreedingEventInput>
    create: XOR<AnimalCreateWithoutBreedingEventInput, AnimalUncheckedCreateWithoutBreedingEventInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutBreedingEventInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutBreedingEventInput, AnimalUncheckedUpdateWithoutBreedingEventInput>
  }

  export type AnimalUpdateManyWithWhereWithoutBreedingEventInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutBreedingEventInput>
  }

  export type AnimalUpsertWithoutBreedingAsMotherInput = {
    update: XOR<AnimalUpdateWithoutBreedingAsMotherInput, AnimalUncheckedUpdateWithoutBreedingAsMotherInput>
    create: XOR<AnimalCreateWithoutBreedingAsMotherInput, AnimalUncheckedCreateWithoutBreedingAsMotherInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutBreedingAsMotherInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutBreedingAsMotherInput, AnimalUncheckedUpdateWithoutBreedingAsMotherInput>
  }

  export type AnimalUpdateWithoutBreedingAsMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutBreedingAsMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUpsertWithoutBreedingAsFatherInput = {
    update: XOR<AnimalUpdateWithoutBreedingAsFatherInput, AnimalUncheckedUpdateWithoutBreedingAsFatherInput>
    create: XOR<AnimalCreateWithoutBreedingAsFatherInput, AnimalUncheckedCreateWithoutBreedingAsFatherInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutBreedingAsFatherInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutBreedingAsFatherInput, AnimalUncheckedUpdateWithoutBreedingAsFatherInput>
  }

  export type AnimalUpdateWithoutBreedingAsFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutBreedingAsFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBreedingsInvolvedInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBreedingsInvolvedInput, UserUncheckedUpdateWithoutBreedingsInvolvedInput>
    create: XOR<UserCreateWithoutBreedingsInvolvedInput, UserUncheckedCreateWithoutBreedingsInvolvedInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBreedingsInvolvedInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBreedingsInvolvedInput, UserUncheckedUpdateWithoutBreedingsInvolvedInput>
  }

  export type UserUpdateManyWithWhereWithoutBreedingsInvolvedInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBreedingsInvolvedInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    sex?: EnumGenderFilter<"User"> | $Enums.Gender
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    farmingSystem?: StringFilter<"User"> | string
    district?: StringFilter<"User"> | string
    sector?: StringFilter<"User"> | string
    village?: StringFilter<"User"> | string
    cell?: StringFilter<"User"> | string
    latitude?: StringFilter<"User"> | string
    longitude?: StringFilter<"User"> | string
  }

  export type AnimalCreateWithoutOriginalBreedingRecsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOriginalBreedingRecsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOriginalBreedingRecsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOriginalBreedingRecsInput, AnimalUncheckedCreateWithoutOriginalBreedingRecsInput>
  }

  export type AnimalCreateWithoutRecommendedBreedingRecsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutRecommendedBreedingRecsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutRecommendedBreedingRecsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutRecommendedBreedingRecsInput, AnimalUncheckedCreateWithoutRecommendedBreedingRecsInput>
  }

  export type AnimalUpsertWithoutOriginalBreedingRecsInput = {
    update: XOR<AnimalUpdateWithoutOriginalBreedingRecsInput, AnimalUncheckedUpdateWithoutOriginalBreedingRecsInput>
    create: XOR<AnimalCreateWithoutOriginalBreedingRecsInput, AnimalUncheckedCreateWithoutOriginalBreedingRecsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutOriginalBreedingRecsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutOriginalBreedingRecsInput, AnimalUncheckedUpdateWithoutOriginalBreedingRecsInput>
  }

  export type AnimalUpdateWithoutOriginalBreedingRecsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOriginalBreedingRecsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUpsertWithoutRecommendedBreedingRecsInput = {
    update: XOR<AnimalUpdateWithoutRecommendedBreedingRecsInput, AnimalUncheckedUpdateWithoutRecommendedBreedingRecsInput>
    create: XOR<AnimalCreateWithoutRecommendedBreedingRecsInput, AnimalUncheckedCreateWithoutRecommendedBreedingRecsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutRecommendedBreedingRecsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutRecommendedBreedingRecsInput, AnimalUncheckedUpdateWithoutRecommendedBreedingRecsInput>
  }

  export type AnimalUpdateWithoutRecommendedBreedingRecsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutRecommendedBreedingRecsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateWithoutRelatednessAsAnimal1Input = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutRelatednessAsAnimal1Input = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutRelatednessAsAnimal1Input = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutRelatednessAsAnimal1Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal1Input>
  }

  export type AnimalCreateWithoutRelatednessAsAnimal2Input = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    performanceRecords?: Perfomance_RecordsCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutRelatednessAsAnimal2Input = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    performanceRecords?: Perfomance_RecordsUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutRelatednessAsAnimal2Input = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutRelatednessAsAnimal2Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal2Input>
  }

  export type AnimalUpsertWithoutRelatednessAsAnimal1Input = {
    update: XOR<AnimalUpdateWithoutRelatednessAsAnimal1Input, AnimalUncheckedUpdateWithoutRelatednessAsAnimal1Input>
    create: XOR<AnimalCreateWithoutRelatednessAsAnimal1Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal1Input>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutRelatednessAsAnimal1Input = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutRelatednessAsAnimal1Input, AnimalUncheckedUpdateWithoutRelatednessAsAnimal1Input>
  }

  export type AnimalUpdateWithoutRelatednessAsAnimal1Input = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutRelatednessAsAnimal1Input = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUpsertWithoutRelatednessAsAnimal2Input = {
    update: XOR<AnimalUpdateWithoutRelatednessAsAnimal2Input, AnimalUncheckedUpdateWithoutRelatednessAsAnimal2Input>
    create: XOR<AnimalCreateWithoutRelatednessAsAnimal2Input, AnimalUncheckedCreateWithoutRelatednessAsAnimal2Input>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutRelatednessAsAnimal2Input = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutRelatednessAsAnimal2Input, AnimalUncheckedUpdateWithoutRelatednessAsAnimal2Input>
  }

  export type AnimalUpdateWithoutRelatednessAsAnimal2Input = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutRelatednessAsAnimal2Input = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateWithoutPerformanceRecordsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    mother?: AnimalCreateNestedOneWithoutOffspringAsMotherInput
    father?: AnimalCreateNestedOneWithoutOffspringsAsFatherInput
    offspringsAsFather?: AnimalCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalCreateNestedManyWithoutMotherInput
    owner: UserCreateNestedOneWithoutAnimalsInput
    breedingAsMother?: BreedingCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingCreateNestedManyWithoutFatherInput
    breedingEvent: BreedingCreateNestedOneWithoutOffspringInput
    originalBreedingRecs?: Breeding_RecCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesCreateNestedManyWithoutAnimal2RelationInput
  }

  export type AnimalUncheckedCreateWithoutPerformanceRecordsInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
    offspringsAsFather?: AnimalUncheckedCreateNestedManyWithoutFatherInput
    offspringAsMother?: AnimalUncheckedCreateNestedManyWithoutMotherInput
    breedingAsMother?: BreedingUncheckedCreateNestedManyWithoutMotherInput
    breedingAsFather?: BreedingUncheckedCreateNestedManyWithoutFatherInput
    originalBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutOriginalAnimalInput
    recommendedBreedingRecs?: Breeding_RecUncheckedCreateNestedManyWithoutRecommendedAnimalInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal1RelationInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedCreateNestedManyWithoutAnimal2RelationInput
  }

  export type AnimalCreateOrConnectWithoutPerformanceRecordsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutPerformanceRecordsInput, AnimalUncheckedCreateWithoutPerformanceRecordsInput>
  }

  export type AnimalUpsertWithoutPerformanceRecordsInput = {
    update: XOR<AnimalUpdateWithoutPerformanceRecordsInput, AnimalUncheckedUpdateWithoutPerformanceRecordsInput>
    create: XOR<AnimalCreateWithoutPerformanceRecordsInput, AnimalUncheckedCreateWithoutPerformanceRecordsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutPerformanceRecordsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutPerformanceRecordsInput, AnimalUncheckedUpdateWithoutPerformanceRecordsInput>
  }

  export type AnimalUpdateWithoutPerformanceRecordsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
  }

  export type AnimalUncheckedUpdateWithoutPerformanceRecordsInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
  }

  export type AnimalCreateManyOwnerInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
  }

  export type AnimalUpdateWithoutOwnerInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOwnerInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutOwnerInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type BreedingUpdateWithoutFarmersInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUpdateManyWithoutBreedingEventNestedInput
    mother?: AnimalUpdateOneWithoutBreedingAsMotherNestedInput
    father?: AnimalUpdateOneWithoutBreedingAsFatherNestedInput
  }

  export type BreedingUncheckedUpdateWithoutFarmersInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUncheckedUpdateManyWithoutBreedingEventNestedInput
  }

  export type BreedingUncheckedUpdateManyWithoutFarmersInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalCreateManyFatherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
  }

  export type AnimalCreateManyMotherInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
    breedingEventId: string
  }

  export type BreedingCreateManyMotherInput = {
    breedingId?: string
    fatherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreedingCreateManyFatherInput = {
    breedingId?: string
    motherId: string
    breedingDate: Date | string
    method: $Enums.BreedingMethod
    expectedCalvingDate?: Date | string | null
    calving_date?: Date | string | null
    userRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Breeding_RecCreateManyOriginalAnimalInput = {
    breedingRecId?: string
    recommendedAnimalId: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type Breeding_RecCreateManyRecommendedAnimalInput = {
    breedingRecId?: string
    animalInitial: string
    overall_score: number
    user_accepted: boolean
    generatedAt?: Date | string
    userFeedback?: string | null
    genetic_diversity_score: number
    inbreeding_risk_score: number
    breed_composition_match_score: number
  }

  export type RelatedNess_EstimatesCreateManyAnimal1RelationInput = {
    id?: string
    animal2: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type RelatedNess_EstimatesCreateManyAnimal2RelationInput = {
    id?: string
    animal1: string
    confidence: number
    relatedness_prob: number
    pedigree_coeff: number
  }

  export type Perfomance_RecordsCreateManyAnimalInput = {
    id?: string
    milk_yield: number
    weight: number
    health_status?: $Enums.AnimalHealth
    recordedAt?: Date | string
  }

  export type AnimalUpdateWithoutFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutFatherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUpdateWithoutMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    breedingEvent?: BreedingUpdateOneRequiredWithoutOffspringNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutMotherInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    breedingEventId?: StringFieldUpdateOperationsInput | string
  }

  export type BreedingUpdateWithoutMotherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUpdateManyWithoutBreedingEventNestedInput
    father?: AnimalUpdateOneWithoutBreedingAsFatherNestedInput
    farmers?: UserUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateWithoutMotherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUncheckedUpdateManyWithoutBreedingEventNestedInput
    farmers?: UserUncheckedUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateManyWithoutMotherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    fatherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedingUpdateWithoutFatherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUpdateManyWithoutBreedingEventNestedInput
    mother?: AnimalUpdateOneWithoutBreedingAsMotherNestedInput
    farmers?: UserUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateWithoutFatherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offspring?: AnimalUncheckedUpdateManyWithoutBreedingEventNestedInput
    farmers?: UserUncheckedUpdateManyWithoutBreedingsInvolvedNestedInput
  }

  export type BreedingUncheckedUpdateManyWithoutFatherInput = {
    breedingId?: StringFieldUpdateOperationsInput | string
    motherId?: StringFieldUpdateOperationsInput | string
    breedingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumBreedingMethodFieldUpdateOperationsInput | $Enums.BreedingMethod
    expectedCalvingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calving_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Breeding_RecUpdateWithoutOriginalAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
    recommendedAnimal?: AnimalUpdateOneRequiredWithoutRecommendedBreedingRecsNestedInput
  }

  export type Breeding_RecUncheckedUpdateWithoutOriginalAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    recommendedAnimalId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    recommendedAnimalId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type Breeding_RecUpdateWithoutRecommendedAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
    originalAnimal?: AnimalUpdateOneRequiredWithoutOriginalBreedingRecsNestedInput
  }

  export type Breeding_RecUncheckedUpdateWithoutRecommendedAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    animalInitial?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalInput = {
    breedingRecId?: StringFieldUpdateOperationsInput | string
    animalInitial?: StringFieldUpdateOperationsInput | string
    overall_score?: FloatFieldUpdateOperationsInput | number
    user_accepted?: BoolFieldUpdateOperationsInput | boolean
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    genetic_diversity_score?: FloatFieldUpdateOperationsInput | number
    inbreeding_risk_score?: FloatFieldUpdateOperationsInput | number
    breed_composition_match_score?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesUpdateWithoutAnimal1RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
    animal2Relation?: AnimalUpdateOneRequiredWithoutRelatednessAsAnimal2NestedInput
  }

  export type RelatedNess_EstimatesUncheckedUpdateWithoutAnimal1RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal2?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal2?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesUpdateWithoutAnimal2RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
    animal1Relation?: AnimalUpdateOneRequiredWithoutRelatednessAsAnimal1NestedInput
  }

  export type RelatedNess_EstimatesUncheckedUpdateWithoutAnimal2RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal1?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    animal1?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    relatedness_prob?: FloatFieldUpdateOperationsInput | number
    pedigree_coeff?: FloatFieldUpdateOperationsInput | number
  }

  export type Perfomance_RecordsUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Perfomance_RecordsUncheckedUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Perfomance_RecordsUncheckedUpdateManyWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    milk_yield?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    health_status?: EnumAnimalHealthFieldUpdateOperationsInput | $Enums.AnimalHealth
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalCreateManyBreedingEventInput = {
    animalId?: string
    name?: string | null
    sex: $Enums.Gender
    birthDate: Date | string
    type: $Enums.AnimalType
    registrationDate?: Date | string
    profilePhoto?: string
    additionalPhotos?: AnimalCreateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: Date | string
    status?: $Enums.AnimalStatus
    motherId?: string | null
    fatherId?: string | null
    ownerId: string
    specie: $Enums.AnimalSpecies
    breed_confidence: number
  }

  export type AnimalUpdateWithoutBreedingEventInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    mother?: AnimalUpdateOneWithoutOffspringAsMotherNestedInput
    father?: AnimalUpdateOneWithoutOffspringsAsFatherNestedInput
    offspringsAsFather?: AnimalUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUpdateManyWithoutMotherNestedInput
    owner?: UserUpdateOneRequiredWithoutAnimalsNestedInput
    breedingAsMother?: BreedingUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutBreedingEventInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
    offspringsAsFather?: AnimalUncheckedUpdateManyWithoutFatherNestedInput
    offspringAsMother?: AnimalUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsMother?: BreedingUncheckedUpdateManyWithoutMotherNestedInput
    breedingAsFather?: BreedingUncheckedUpdateManyWithoutFatherNestedInput
    originalBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutOriginalAnimalNestedInput
    recommendedBreedingRecs?: Breeding_RecUncheckedUpdateManyWithoutRecommendedAnimalNestedInput
    relatednessAsAnimal1?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal1RelationNestedInput
    relatednessAsAnimal2?: RelatedNess_EstimatesUncheckedUpdateManyWithoutAnimal2RelationNestedInput
    performanceRecords?: Perfomance_RecordsUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutBreedingEventInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    additionalPhotos?: AnimalUpdateadditionalPhotosInput | InputJsonValue[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnimalStatusFieldUpdateOperationsInput | $Enums.AnimalStatus
    motherId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    specie?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed_confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutBreedingsInvolvedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBreedingsInvolvedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBreedingsInvolvedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    farmingSystem?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
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