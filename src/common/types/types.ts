/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */



    export interface CreateUserDto {
  /**
   * @minLength 3
   * @maxLength 10
   */
    name: string,
  /**
   * @minLength 6
   * @maxLength 20
   */
    password: string,
  /**
   * User's email address
   * @pattern /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
   */
    email: string,
}

    export interface UserEntity {
  /** @format binary */
    avatar: File,
    id: string,
    email: string,
    isEmailVerified: boolean,
    name: string,
  /** @format date-time */
    created: string,
  /** @format date-time */
    updated: string,
}

    export interface UpdateUserDataDto {
  /** @format binary */
    avatar?: File,
    name?: string,
}

    export interface LoginDto {
  /**
   * @minLength 3
   * @maxLength 30
   */
    password: string,
    email: string,
    rememberMe: boolean,
}

    export interface LoginResponse {
    accessToken: string,
}

    export interface RegistrationDto {
  /**
   * HTML template to be sent in the email;
   *  ##name## will be replaced with the user's name; 
   *  ##token## will be replaced with the password recovery token
   * @example "<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##"
   */
    html?: string,
  /**
   * @minLength 3
   * @maxLength 30
   */
    name?: string,
  /**
   * @minLength 3
   * @maxLength 30
   */
    password: string,
    email: string,
  /** Email subject */
    subject?: string,
  /**
   * Whether to send a confirmation email or not.
   * Defaults to false
   * @example false
   */
    sendConfirmationEmail?: boolean,
}

    export interface EmailVerificationDto {
    code: string,
}

    export interface ResendVerificationEmailDto {
  /**
   * HTML template to be sent in the email;
   *  ##name## will be replaced with the user's name; 
   *  ##token## will be replaced with the password recovery token
   * @example "<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##"
   */
    html?: string,
    userId: string,
  /** Email subject */
    subject?: string,
}

    export interface RecoverPasswordDto {
  /**
   * HTML template to be sent in the email;
   *  ##name## will be replaced with the user's name; 
   *  ##token## will be replaced with the password recovery token
   * @example "<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>"
   */
    html?: string,
  /** User's email address */
    email: string,
  /** Email subject */
    subject?: string,
}

    export interface ResetPasswordDto {
  /**
   * @minLength 3
   * @maxLength 30
   */
    password: string,
}

    export interface DeckAuthor {
    id: string,
    name: string,
}

    export interface DeckWithAuthor {
    author: DeckAuthor,
    id: string,
    userId: string,
    name: string,
    isPrivate: boolean,
    cover: string | null,
  /** @format date-time */
    created: string,
  /** @format date-time */
    updated: string,
    cardsCount: number,
}

    export interface Pagination {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
}

    export interface PaginatedDecksWithMaxCardsCount {
    items: (DeckWithAuthor)[],
    pagination: Pagination,
    maxCardsCount: number,
}

    export interface PaginatedDecks {
    items: (DeckWithAuthor)[],
    pagination: Pagination,
}

    export interface MinMaxCards {
    max: number,
    min: number,
}

    export interface CreateDeckDto {
  /**
   * Cover image (has to be sent inside FormData, does NOT accept base64)
   * @format binary
   */
    cover?: File,
  /**
   * @minLength 3
   * @maxLength 30
   */
    name: string,
  /** Private decks are not visible to other users */
    isPrivate?: boolean,
}

    export interface UpdateDeckDto {
  /**
   * Cover image (has to be sent inside FormData, does NOT accept base64)
   * @format binary
   */
    cover?: File,
    name?: string,
    isPrivate?: boolean,
}

    export interface Deck {
    id: string,
    userId: string,
    name: string,
    isPrivate: boolean,
    cover: string | null,
  /** @format date-time */
    created: string,
  /** @format date-time */
    updated: string,
    cardsCount: number,
}

    export interface CardWithGrade {
    grade: number,
    id: string,
    deckId: string,
    userId: string,
    question: string,
    answer: string,
    shots: number,
    answerImg: string,
    questionImg: string,
    questionVideo: string,
    answerVideo: string,
  /** @format date-time */
    created: string,
  /** @format date-time */
    updated: string,
}

    export interface PaginatedCardsWithGrade {
    pagination: Pagination,
    items: (CardWithGrade)[],
}

    export interface CreateCardDto {
  /**
   * @minLength 3
   * @maxLength 500
   */
    question: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    answer: string,
  /**
   * @minLength 0
   * @maxLength 0
   */
    questionImg?: string,
  /**
   * @minLength 0
   * @maxLength 0
   */
    answerImg?: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    questionVideo?: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    answerVideo?: string,
}

    export interface Card {
    id: string,
    deckId: string,
    userId: string,
    question: string,
    answer: string,
    shots: number,
    answerImg: string,
    questionImg: string,
    questionVideo: string,
    answerVideo: string,
  /** @format date-time */
    created: string,
  /** @format date-time */
    updated: string,
}

    export interface SaveGradeDto {
    cardId: string,
  /**
   * @min 1
   * @max 5
   */
    grade: number,
}

    export interface UpdateCardDto {
  /**
   * @format binary
   * @minLength 0
   * @maxLength 0
   */
    questionImg?: File,
  /**
   * @format binary
   * @minLength 0
   * @maxLength 0
   */
    answerImg?: File,
  /**
   * @minLength 3
   * @maxLength 500
   */
    question?: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    answer?: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    questionVideo?: string,
  /**
   * @minLength 3
   * @maxLength 500
   */
    answerVideo?: string,
}



export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">


export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = "https://api.flashcards.andrii.es";
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private abortControllers = new Map<CancelToken, AbortController>();
    private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig);
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    }

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key];
        return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
                .map((key) =>
                    Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key),
                )
                .join("&");
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input:any) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
        [ContentType.Text]: (input:any) => input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(
                    key,
                    property instanceof Blob ?
                        property :
                    typeof property === "object" && property !== null ?
                        JSON.stringify(property) :
                    `${property}`
                );
                return formData;
            }, new FormData()),
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
    }

    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    }

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken)

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    }

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams = ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData)) || {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;

        return this.customFetch(
        `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
        {
            ...requestParams,
            headers: {
            ...(requestParams.headers || {}),
            ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
        }
        ).then(async (response) => {
            const r = response as HttpResponse<T, E>;
            r.data = (null as unknown) as T;
            r.error = (null as unknown) as E;

            const data = !responseFormat ? r : await response[responseFormat]()
                .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    } else {
                        r.error = data;
                    }
                    return r;
                })
                .catch((e) => {
                    r.error = e;
                    return r;
                });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data;
        });
    };
}



/**
* @title Flashcards
* @version 1.0
* @baseUrl https://api.flashcards.andrii.es
* @contact 
*  
* Flashcards API
*/
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType>  {



  
    v1 = {
  
  /**
 * No description
 *
 * @tags Admin
 * @name UsersControllerFindAll
 * @request GET:/v1/users
 */
usersControllerFindAll: (params: RequestParams = {}) =>
    this.request<object, any>({
        path: `/v1/users`,
        method: 'GET',
                                        format: "json",        ...params,
    }),
  
  /**
 * No description
 *
 * @tags Admin
 * @name UsersControllerCreate
 * @request POST:/v1/users
 */
usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<object, any>({
        path: `/v1/users`,
        method: 'POST',
                body: data,                type: ContentType.Json,        format: "json",        ...params,
    }),
  
  /**
 * No description
 *
 * @tags Admin
 * @name UsersControllerRemoveAll
 * @request DELETE:/v1/users
 */
usersControllerRemoveAll: (params: RequestParams = {}) =>
    this.request<void, any>({
        path: `/v1/users`,
        method: 'DELETE',
                                                ...params,
    }),
  
  /**
 * No description
 *
 * @tags Admin
 * @name UsersControllerRemove
 * @request DELETE:/v1/users/{id}
 */
usersControllerRemove: (id: string, params: RequestParams = {}) =>
    this.request<boolean, any>({
        path: `/v1/users/${id}`,
        method: 'DELETE',
                                        format: "json",        ...params,
    }),
  
  /**
 * @description Retrieve current user data.
 *
 * @tags Auth
 * @name AuthControllerGetUserData
 * @summary Current user data
 * @request GET:/v1/auth/me
 */
authControllerGetUserData: (params: RequestParams = {}) =>
    this.request<UserEntity, void>({
        path: `/v1/auth/me`,
        method: 'GET',
                                        format: "json",        ...params,
    }),
  
  /**
 * @description Update current user data.
 *
 * @tags Auth
 * @name AuthControllerUpdateUserData
 * @summary Update user data
 * @request PATCH:/v1/auth/me
 */
authControllerUpdateUserData: (data: UpdateUserDataDto, params: RequestParams = {}) =>
    this.request<UserEntity, void>({
        path: `/v1/auth/me`,
        method: 'PATCH',
                body: data,                type: ContentType.FormData,        format: "json",        ...params,
    }),
  
  /**
 * @description Sign in using email and password. Must have an account to do so.
 *
 * @tags Auth
 * @name AuthControllerLogin
 * @summary Sign in using email and password. Must have an account to do so.
 * @request POST:/v1/auth/login
 */
authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
    this.request<LoginResponse, void>({
        path: `/v1/auth/login`,
        method: 'POST',
                body: data,                type: ContentType.Json,        format: "json",        ...params,
    }),
  
  /**
 * @description Create a new user account
 *
 * @tags Auth
 * @name AuthControllerRegistration
 * @summary Create a new user account
 * @request POST:/v1/auth/sign-up
 */
authControllerRegistration: (data: RegistrationDto, params: RequestParams = {}) =>
    this.request<UserEntity, void>({
        path: `/v1/auth/sign-up`,
        method: 'POST',
                body: data,                type: ContentType.Json,        format: "json",        ...params,
    }),
  
  /**
 * @description Verify user email
 *
 * @tags Auth
 * @name AuthControllerConfirmRegistration
 * @summary Verify user email
 * @request POST:/v1/auth/verify-email
 */
authControllerConfirmRegistration: (data: EmailVerificationDto, params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/verify-email`,
        method: 'POST',
                body: data,                type: ContentType.Json,                ...params,
    }),
  
  /**
 * @description Send verification email again
 *
 * @tags Auth
 * @name AuthControllerResendVerificationEmail
 * @summary Send verification email again
 * @request POST:/v1/auth/resend-verification-email
 */
authControllerResendVerificationEmail: (data: ResendVerificationEmailDto, params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/resend-verification-email`,
        method: 'POST',
                body: data,                type: ContentType.Json,                ...params,
    }),
  
  /**
 * @description Sign current user out
 *
 * @tags Auth
 * @name AuthControllerLogout
 * @summary Sign current user out
 * @request POST:/v1/auth/logout
 */
authControllerLogout: (params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/logout`,
        method: 'POST',
                                                ...params,
    }),
  
  /**
 * @description Get new access token using refresh token
 *
 * @tags Auth
 * @name AuthControllerRefreshToken
 * @summary Get new access token using refresh token
 * @request POST:/v1/auth/refresh-token
 */
authControllerRefreshToken: (params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/refresh-token`,
        method: 'POST',
                                                ...params,
    }),
  
  /**
 * @description Send password recovery email
 *
 * @tags Auth
 * @name AuthControllerRecoverPassword
 * @summary Send password recovery email
 * @request POST:/v1/auth/recover-password
 */
authControllerRecoverPassword: (data: RecoverPasswordDto, params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/recover-password`,
        method: 'POST',
                body: data,                type: ContentType.Json,                ...params,
    }),
  
  /**
 * @description Reset password
 *
 * @tags Auth
 * @name AuthControllerResetPassword
 * @summary Reset password
 * @request POST:/v1/auth/reset-password/{token}
 */
authControllerResetPassword: (token: string, data: ResetPasswordDto, params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/auth/reset-password/${token}`,
        method: 'POST',
                body: data,                type: ContentType.Json,                ...params,
    }),
  
  /**
 * @description Deprecated. Use v2 in combination with /min-max-cards request
 *
 * @tags Decks
 * @name DecksControllerFindAllV1
 * @summary Paginated decks list
 * @request GET:/v1/decks
 * @deprecated
 */
decksControllerFindAllV1: (query?: {
  /**
   * A string that represents the name of the field to order by and the order direction.
   * The format is: "field_name-order_direction".
   * Available directions: "asc" and "desc".
   * @example "name-desc"
   */
    orderBy?: "null" | "cardsCount-asc" | "updated-asc" | "name-asc" | "author.name-asc" | "created-asc" | "cardsCount-desc" | "updated-desc" | "name-desc" | "author.name-desc" | "created-desc",
    minCardsCount?: number,
    maxCardsCount?: number,
  /** Search by deck name */
    name?: string,
  /** Filter by deck authorId */
    authorId?: string,
    currentPage?: number,
    itemsPerPage?: number,

}, params: RequestParams = {}) =>
    this.request<PaginatedDecksWithMaxCardsCount, void>({
        path: `/v1/decks`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    }),
  
  /**
 * @description Create a deck
 *
 * @tags Decks
 * @name DecksControllerCreate
 * @summary Create a deck
 * @request POST:/v1/decks
 */
decksControllerCreate: (data: CreateDeckDto, params: RequestParams = {}) =>
    this.request<DeckWithAuthor, void>({
        path: `/v1/decks`,
        method: 'POST',
                body: data,                type: ContentType.FormData,        format: "json",        ...params,
    }),
  
  /**
 * @description Retrieve a deck by id
 *
 * @tags Decks
 * @name DecksControllerFindOne
 * @summary Retrieve a deck by id
 * @request GET:/v1/decks/{id}
 */
decksControllerFindOne: (id: string, params: RequestParams = {}) =>
    this.request<DeckWithAuthor, void>({
        path: `/v1/decks/${id}`,
        method: 'GET',
                                        format: "json",        ...params,
    }),
  
  /**
 * @description Update a deck
 *
 * @tags Decks
 * @name DecksControllerUpdate
 * @summary Update a deck
 * @request PATCH:/v1/decks/{id}
 */
decksControllerUpdate: (id: string, data: UpdateDeckDto, params: RequestParams = {}) =>
    this.request<DeckWithAuthor, void>({
        path: `/v1/decks/${id}`,
        method: 'PATCH',
                body: data,                type: ContentType.FormData,        format: "json",        ...params,
    }),
  
  /**
 * @description Delete a deck
 *
 * @tags Decks
 * @name DecksControllerRemove
 * @summary Delete a deck
 * @request DELETE:/v1/decks/{id}
 */
decksControllerRemove: (id: string, params: RequestParams = {}) =>
    this.request<Deck, void>({
        path: `/v1/decks/${id}`,
        method: 'DELETE',
                                        format: "json",        ...params,
    }),
  
  /**
 * @description Retrieve paginated cards in a deck
 *
 * @tags Decks
 * @name DecksControllerFindCardsInDeck
 * @summary Retrieve cards in a deck
 * @request GET:/v1/decks/{id}/cards
 */
decksControllerFindCardsInDeck: (id: string, query?: {
  /**
   * @minLength 1
   * @maxLength 30
   */
    question?: string,
  /**
   * @minLength 1
   * @maxLength 30
   */
    answer?: string,
    orderBy?: string | null,
    currentPage?: number,
    itemsPerPage?: number,

}, params: RequestParams = {}) =>
    this.request<PaginatedCardsWithGrade, any>({
        path: `/v1/decks/${id}/cards`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    }),
  
  /**
 * @description Create card in a deck
 *
 * @tags Decks
 * @name DecksControllerCreateCardInDeck
 * @summary Create a card
 * @request POST:/v1/decks/{id}/cards
 */
decksControllerCreateCardInDeck: (id: string, data: CreateCardDto, params: RequestParams = {}) =>
    this.request<Card, void>({
        path: `/v1/decks/${id}/cards`,
        method: 'POST',
                body: data,                type: ContentType.FormData,        format: "json",        ...params,
    }),
  
  /**
 * @description Retrieve a random card in a deck. The cards priority is based on the grade
 *
 * @tags Decks
 * @name DecksControllerFindRandomCardInDeck
 * @summary Retrieve a random card
 * @request GET:/v1/decks/{id}/learn
 */
decksControllerFindRandomCardInDeck: (id: string, query?: {
    previousCardId?: string,

}, params: RequestParams = {}) =>
    this.request<CardWithGrade, void>({
        path: `/v1/decks/${id}/learn`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    }),
  
  /**
 * @description Save the grade of a card
 *
 * @tags Decks
 * @name DecksControllerSaveGrade
 * @summary Save the grade of a card
 * @request POST:/v1/decks/{id}/learn
 */
decksControllerSaveGrade: (id: string, data: SaveGradeDto, params: RequestParams = {}) =>
    this.request<CardWithGrade, void>({
        path: `/v1/decks/${id}/learn`,
        method: 'POST',
                body: data,                type: ContentType.Json,        format: "json",        ...params,
    }),
  
  /**
 * @description Get card by id
 *
 * @tags Cards
 * @name CardsControllerFindOne
 * @summary Get card by id
 * @request GET:/v1/cards/{id}
 */
cardsControllerFindOne: (id: string, params: RequestParams = {}) =>
    this.request<CardWithGrade, void>({
        path: `/v1/cards/${id}`,
        method: 'GET',
                                        format: "json",        ...params,
    }),
  
  /**
 * @description Update partial card data
 *
 * @tags Cards
 * @name CardsControllerUpdate
 * @summary Update card
 * @request PATCH:/v1/cards/{id}
 */
cardsControllerUpdate: (id: string, data: UpdateCardDto, params: RequestParams = {}) =>
    this.request<Card, void>({
        path: `/v1/cards/${id}`,
        method: 'PATCH',
                body: data,                type: ContentType.FormData,        format: "json",        ...params,
    }),
  
  /**
 * @description Delete card by id
 *
 * @tags Cards
 * @name CardsControllerRemove
 * @summary Delete card by id
 * @request DELETE:/v1/cards/{id}
 */
cardsControllerRemove: (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
        path: `/v1/cards/${id}`,
        method: 'DELETE',
                                                ...params,
    }),
    }
    v2 = {
  
  /**
 * @description Retrieve paginated decks list.
 *
 * @tags Decks
 * @name DecksControllerFindAllV2
 * @summary Paginated decks list
 * @request GET:/v2/decks
 */
decksControllerFindAllV2: (query?: {
  /**
   * A string that represents the name of the field to order by and the order direction.
   * The format is: "field_name-order_direction".
   * Available directions: "asc" and "desc".
   * @example "name-desc"
   */
    orderBy?: "null" | "cardsCount-asc" | "updated-asc" | "name-asc" | "author.name-asc" | "created-asc" | "cardsCount-desc" | "updated-desc" | "name-desc" | "author.name-desc" | "created-desc",
    minCardsCount?: number,
    maxCardsCount?: number,
  /** Search by deck name */
    name?: string,
  /** Filter by deck authorId */
    authorId?: string,
    currentPage?: number,
    itemsPerPage?: number,

}, params: RequestParams = {}) =>
    this.request<PaginatedDecks, void>({
        path: `/v2/decks`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    }),
  
  /**
 * @description Retrieve the minimum and maximum amount of cards in a deck.
 *
 * @tags Decks
 * @name DecksControllerFindMinMaxCards
 * @summary Minimum and maximum amount of cards in a deck
 * @request GET:/v2/decks/min-max-cards
 */
decksControllerFindMinMaxCards: (params: RequestParams = {}) =>
    this.request<MinMaxCards, void>({
        path: `/v2/decks/min-max-cards`,
        method: 'GET',
                                        format: "json",        ...params,
    }),
    }
  }
