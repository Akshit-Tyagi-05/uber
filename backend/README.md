
# User Registration and Login Endpoints

## Registration Endpoint

`POST /users/register`

### Description
Registers a new user in the system. This endpoint creates a user account with the provided details and returns an authentication token upon successful registration.

### Request Body
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

#### Example
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

### Responses

#### 201 Created
- **Description:** User registered successfully.
- **Body:**
  ```
  {
    "token": "<jwt_token>",
    "user": { ...userObject }
  }
  ```

#### 400 Bad Request
- **Description:** Validation failed. The request body is missing required fields or contains invalid data.
- **Body:**
  ```
  {
    "error": [ { "msg": "Error message", ... } ]
  }
  ```

### Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `fullname.lastname`: Optional, minimum 3 characters if provided
- `email`: Required, must be a valid email address
- `password`: Required, minimum 6 characters

---

## Login Endpoint

`POST /users/login`

### Description
Authenticates a user with email and password. Returns a JWT token and user object if credentials are valid.

### Request Body
The request body must be a JSON object with the following structure:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

#### Example
```
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

#### 201 Created
- **Description:** Login successful.
- **Body:**
  ```
  {
    "token": "<jwt_token>",
    "user": { ...userObject }
  }
  ```

#### 400 Bad Request
- **Description:** Validation failed. The request body is missing required fields or contains invalid data.
- **Body:**
  ```
  {
    "error": [ { "msg": "Error message", ... } ]
  }
  ```

#### 401 Unauthorized
- **Description:** Invalid email or password.
- **Body:**
  ```
  {
    "message": "Invalid email or password"
  }
  ```

### Validation Rules
- `email`: Required, must be a valid email address
- `password`: Required, minimum 6 characters

---

## Notes
- On success, a JWT token is returned for authentication in subsequent requests.
- All fields must be sent in the request body as shown above.
