/**
 *
 * @apiDefine GenericHeaders
 * @apiHeader {String} Content-Type=application/json
 * @apiHeader {String} Accept=application/json
 * @apiHeader {String} Authorization firebase jwt token
 */

/**
 * @apiDefine GenericError
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 4XX/5XX
 *     {
 *       "error": {
 *         "code": XX,
 *         "message": "This is the error message"
 *       }
 *     }
 *
 */

/**
 *
 * @api {get} /me Get Current User
 * @apiVersion 1.0.0
 * @apiName GetCurrentUser
 * @apiGroup Me
 *
 * @apiUse GenericHeaders
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "abcd1234567",
 *       "email": "johndoe@gmail.com",
 *       "firstname": "John",
 *       "lastname": "Doe",
 *     }
 *
 * @apiUse GenericError
 */

/**
 *
 * @api {put} /me Update Current User
 * @apiVersion 1.0.0
 * @apiName UpdateCurrentUser
 * @apiGroup Me
 *
 * @apiUse GenericHeaders
 *
 * @apiParam {String} email `Body` Email of the User.
 * @apiParam {String} [firstName] `Body` First name of the User.
 * @apiParam {String} [lastName] `Body` Last name of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "abcd1234567",
 *       "email": "johndoe@gmail.com",
 *       "firstname": "John",
 *       "lastname": "Doe",
 *     }
 *
 * @apiUse GenericError
 */

/**
 * @api {post} /users Create User
 * @apiVersion 1.0.0
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiUse GenericHeaders
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "shops": [
 *          {
 *            "id": "91da025b-8fb7-4fd7-9c37-6d52af488663",
 *            "email": "johndoe@gmail.com",
 *            "firstname": "John",
 *            "lastname": "Doe",
 *          }
 *       ]
 *     }
 *
 * @apiUse GenericError
 */
