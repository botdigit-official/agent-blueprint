# API Specification Template

**API Name:** [e.g., Core REST API / Public V1 API]
**Base URL:** `https://api.example.com/v1`
**Authentication:** [Bearer Token (JWT) / API Key / Session Cookie]
**Protocol:** [REST / GraphQL / gRPC]
**Last Updated:** [YYYY-MM-DD]
**Status:** [Draft / Stable / Deprecated]

---

## 1. Authentication & Security

- **Scheme:** `Authorization: Bearer <token>`
- **Token Expiry:** [e.g., Access 15m, Refresh 7d]
- **Rate Limits:**
  - Standard tier: `100 req / minute`
  - Authenticated tier: `1000 req / minute`
  - Rate limit response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`

---

## 2. Standard Response Envelopes

### Success Envelope (200 OK / 201 Created)
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 150
  }
}
```

### Error Envelope (4xx / 5xx)
```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Human-readable error explanation",
    "details": []
  },
  "request_id": "req_01hz8..."
}
```

---

## 3. Endpoints

### 3.1 [Resource Name] Collection

#### `GET /v1/[resources]`
*List resources with pagination and filters.*

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `page` | integer | No | `1` | Current page number |
| `limit` | integer | No | `20` | Items per page (max: 100) |
| `sort` | string | No | `created_at:desc` | Sort field and direction |
| `filter` | string | No | - | Query filter |

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "res_12345",
      "created_at": "2026-09-09T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 1
  }
}
```

---

#### `POST /v1/[resources]`
*Create a new resource.*

**Request Body:**
```json
{
  "name": "string (required, max: 120)",
  "status": "ACTIVE | INACTIVE"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "res_12345",
    "status": "ACTIVE"
  }
}
```

---

### 3.2 Individual Resource Operations

#### `GET /v1/[resources]/:id`
*Fetch single resource by ID.*

#### `PUT /v1/[resources]/:id`
*Replace or full update.*

#### `PATCH /v1/[resources]/:id`
*Partial update of fields.*

#### `DELETE /v1/[resources]/:id`
*Delete or soft-delete resource.*

---

## 4. Error Code Reference

| HTTP Status | Error Code | Description |
|---|---|---|
| `400 Bad Request` | `VALIDATION_FAILED` | Request payload failed schema validation |
| `401 Unauthorized` | `UNAUTHENTICATED` | Missing or invalid auth credentials |
| `403 Forbidden` | `PERMISSION_DENIED` | Insufficient role or scope |
| `404 Not Found` | `NOT_FOUND` | Target entity does not exist |
| `429 Too Many Requests` | `RATE_LIMIT_EXCEEDED` | Request quota exhausted |
| `500 Internal Server Error` | `INTERNAL_ERROR` | Unexpected server fault |
