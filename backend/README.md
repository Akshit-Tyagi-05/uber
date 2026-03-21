# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description
Registers a new user in the system. This endpoint creates a user account with the provided details and returns an authentication token upon successful registration.

## Request Body
The request body must be a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### 201 Created
- **Description:** User registered successfully.
- **Body:**
  ```
  {
    "token": "<jwt_token>",
    "user": { ...userObject }
  }
  ```

### 400 Bad Request
- **Description:** Validation failed. The request body is missing required fields or contains invalid data.
- **Body:**
  ```
  {
    "error": [ { "msg": "Error message", ... } ]
  }
  ```

## Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `fullname.lastname`: Optional, minimum 3 characters if provided
- `email`: Required, must be a valid email address
- `password`: Required, minimum 6 characters

## Notes
- On success, a JWT token is returned for authentication in subsequent requests.
- All fields must be sent in the request body as shown above.
