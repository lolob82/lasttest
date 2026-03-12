# NatureMama Heritage - Architecture Diagram

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           NatureMama Heritage E-commerce                        │
│                                Architecture                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐
│                 │    │                 │    │                                 │
│   Customer      │    │   AWS Amplify   │    │         AWS Cloud               │
│   Browser       │◄──►│   Hosting       │    │         (us-east-1)             │
│                 │    │                 │    │                                 │
│ • React App     │    │ • Static Files  │    │                                 │
│ • Shopping Cart │    │ • CDN           │    │                                 │
│ • Order Form    │    │ • SSL/HTTPS     │    │                                 │
└─────────────────┘    └─────────────────┘    │                                 │
                                              │                                 │
                                              │  ┌─────────────────────────────┐ │
                                              │  │      API Gateway            │ │
                                              │  │                             │ │
                                              │  │ • REST API                  │ │
                                              │  │ • CORS Enabled              │ │
                                              │  │ • /orders endpoint          │ │
                                              │  │ • POST/GET methods          │ │
                                              │  └─────────────┬───────────────┘ │
                                              │                │                 │
                                              │                ▼                 │
                                              │  ┌─────────────────────────────┐ │
                                              │  │      Lambda Function        │ │
                                              │  │   (NatureMamaOrderProcessor)│ │
                                              │  │                             │ │
                                              │  │ • Node.js 20.x Runtime      │ │
                                              │  │ • Order Processing Logic    │ │
                                              │  │ • Email Generation          │ │
                                              │  │ • Data Validation           │ │
                                              │  └─────────┬───────────────────┘ │
                                              │            │                     │
                                              │            ▼                     │
                                              │  ┌─────────────────────────────┐ │
                                              │  │       DynamoDB              │ │
                                              │  │   (NatureMamaOrders)        │ │
                                              │  │                             │ │
                                              │  │ • Order Storage             │ │
                                              │  │ • Customer Information      │ │
                                              │  │ • Order History             │ │
                                              │  │ • Pay-per-request billing   │ │
                                              │  └─────────────────────────────┘ │
                                              │                                 │
                                              │  ┌─────────────────────────────┐ │
                                              │  │      Amazon SES             │ │
                                              │  │                             │ │
                                              │  │ • Email Delivery Service    │ │
                                              │  │ • Order Confirmations       │ │
                                              │  │ • HTML Email Templates      │ │
                                              │  │ • Delivery Tracking         │ │
                                              │  └─────────────────────────────┘ │
                                              │                                 │
                                              └─────────────────────────────────┘
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              Order Processing Flow                              │
└─────────────────────────────────────────────────────────────────────────────────┘

1. Customer adds products to cart
   │
   ▼
2. Customer fills order form
   │ • Full Name
   │ • Email Address  
   │ • Street & House Number
   │ • Postal Code & City
   │ • Phone Number
   │
   ▼
3. Form validation (client-side)
   │ • Email format validation
   │ • French phone number validation
   │ • Required field validation
   │
   ▼
4. POST request to API Gateway
   │ https://[api-id].execute-api.us-east-1.amazonaws.com/prod/orders
   │
   ▼
5. Lambda function processes order
   │ • Generates unique order number (NMH-timestamp-random)
   │ • Validates data
   │ • Calculates totals
   │
   ▼
6. Store order in DynamoDB
   │ Table: NatureMamaOrders
   │ Key: orderNumber
   │ Data: customer info, items, totals, timestamp
   │
   ▼
7. Generate & send confirmation email
   │ • HTML email with order details
   │ • Branded template matching website
   │ • Sent via Amazon SES
   │
   ▼
8. Return success response
   │ • Order number
   │ • Confirmation message
   │
   ▼
9. Customer receives confirmation
   │ • Browser success message
   │ • Email confirmation
```

## Component Breakdown

### Frontend (React/Vite)
```
src/
├── components/
│   ├── Hero.jsx              # Landing page hero section
│   ├── History.jsx           # Company history timeline
│   ├── Products.jsx          # Product catalog with add-to-cart
│   ├── Commitments.jsx       # Sustainability commitments
│   └── ShoppingCart.jsx      # Cart & checkout functionality
├── App.jsx                   # Main application component
├── App.css                   # Styling with CSS variables
└── main.jsx                  # Application entry point
```

### Backend (AWS Lambda)
```javascript
// Order Processing Logic
exports.handler = async (event) => {
  // 1. Handle CORS preflight requests
  // 2. Parse order data from request body
  // 3. Store order in DynamoDB
  // 4. Generate HTML email template
  // 5. Send confirmation email via SES
  // 6. Return success/error response
}
```

### Database Schema (DynamoDB)
```json
{
  "orderNumber": "NMH-1703123456789-ABC12",  // Primary Key
  "customerInfo": {
    "fullName": "Jean Dupont",
    "email": "jean.dupont@email.com",
    "address": "123 Rue de la Paix",
    "city": "Paris",
    "postalCode": "75001",
    "phoneNumber": "+33 1 23 45 67 89",
    "country": "France"
  },
  "items": [
    {
      "id": 1,
      "name": "Vitality Line",
      "subtitle": "Natural Energy Boosters",
      "price": "€29.90",
      "quantity": 2,
      "total": "59.80"
    }
  ],
  "subtotal": "59.80",
  "shipping": "0.00",
  "total": "59.80",
  "orderDate": "2024-12-21T10:30:45.123Z",
  "status": "confirmed"
}
```

## Security & Permissions

### IAM Role Permissions
```yaml
LambdaExecutionRole:
  Policies:
    - AWSLambdaBasicExecutionRole    # CloudWatch Logs
    - DynamoDBAccess:                # Read/Write orders table
        - dynamodb:PutItem
        - dynamodb:GetItem
        - dynamodb:Scan
        - dynamodb:Query
    - SESAccess:                     # Send emails
        - ses:SendEmail
        - ses:SendRawEmail
```

### API Gateway Security
- **CORS**: Enabled for cross-origin requests
- **Rate Limiting**: AWS default throttling
- **No Authentication**: Public API for e-commerce orders
- **HTTPS Only**: SSL/TLS encryption

## Scalability & Performance

### Auto-Scaling Components
- **Lambda**: Automatic scaling (0-1000 concurrent executions)
- **DynamoDB**: On-demand billing scales automatically
- **API Gateway**: Handles up to 10,000 requests/second
- **SES**: Scales to send millions of emails

### Performance Optimizations
- **CDN**: Amplify provides global CDN for static assets
- **Caching**: Browser caching for CSS/JS files
- **Compression**: Gzip compression enabled
- **Lazy Loading**: Components load on demand

## Monitoring & Logging

### CloudWatch Integration
- **Lambda Logs**: Function execution logs
- **API Gateway Logs**: Request/response logging
- **DynamoDB Metrics**: Read/write capacity metrics
- **SES Metrics**: Email delivery statistics

### Key Metrics to Monitor
- Order success rate
- Email delivery rate
- API response times
- Error rates
- Customer conversion funnel

## Cost Optimization

### Pay-per-Use Services
- **Lambda**: Only pay for execution time
- **DynamoDB**: On-demand billing for actual usage
- **API Gateway**: Per-request pricing
- **SES**: Per-email pricing

### Estimated Monthly Costs (100 orders)
```
Service          | Usage           | Cost
-----------------|-----------------|--------
Lambda           | 100 executions  | $0.20
DynamoDB         | 100 writes      | $1.25
API Gateway      | 100 requests    | $0.35
SES              | 100 emails      | $0.10
Amplify Hosting  | Static site     | $0.00*
-----------------|-----------------|--------
Total            |                 | ~$2.00

* Free tier: 1GB storage, 15GB data transfer
```

## Disaster Recovery

### Data Backup
- **DynamoDB**: Point-in-time recovery enabled
- **Code**: Version controlled in Git
- **Infrastructure**: CloudFormation template for recreation

### High Availability
- **Multi-AZ**: All AWS services are multi-AZ by default
- **Global CDN**: Amplify CDN provides global availability
- **Automatic Failover**: AWS handles service failover

This architecture provides a robust, scalable, and cost-effective e-commerce solution for NatureMama Heritage! 🌿