# NatureMama Heritage - Complete Deployment Guide

## Overview
This guide will help you deploy your NatureMama Heritage e-commerce website with full AWS backend integration including order processing, email confirmations, and data storage.

## Prerequisites
- AWS Account with administrative access
- Domain name for email (optional but recommended)
- Basic understanding of AWS Console navigation

## Step-by-Step Deployment

### Phase 1: AWS Backend Setup

#### 1. Set Up Amazon SES (Simple Email Service)
**Important: Do this FIRST before deploying CloudFormation**

1. **Go to AWS SES Console**
   - Navigate to: https://console.aws.amazon.com/ses/
   - Make sure you're in the **us-east-1** region (N. Virginia)

2. **Verify Your Email Address**
   - Click "Verified identities" in the left menu
   - Click "Create identity"
   - Choose "Email address"
   - Enter: `orders@naturemamaheritage.com` (or your preferred email)
   - Click "Create identity"
   - **Check your email and click the verification link**

3. **Request Production Access (Important!)**
   - By default, SES is in "Sandbox mode" (can only send to verified emails)
   - Click "Account dashboard" in the left menu
   - If you see "Sandbox" status, click "Request production access"
   - Fill out the form explaining you need to send order confirmations
   - This usually takes 24-48 hours to approve

#### 2. Deploy CloudFormation Template

1. **Go to CloudFormation Console**
   - Navigate to: https://console.aws.amazon.com/cloudformation/
   - Make sure you're in **us-east-1** region

2. **Create New Stack**
   - Click "Create stack" → "With new resources (standard)"
   - Choose "Upload a template file"
   - Click "Choose file" and select `cloudformation-template.yaml`
   - Click "Next"

3. **Configure Stack**
   - **Stack name**: `NatureMama-Backend`
   - **FromEmailAddress**: Enter the email you verified in SES (e.g., `orders@naturemamaheritage.com`)
   - Click "Next"

4. **Configure Stack Options**
   - Leave all defaults
   - Click "Next"

5. **Review and Deploy**
   - Check "I acknowledge that AWS CloudFormation might create IAM resources"
   - Click "Create stack"
   - **Wait 5-10 minutes** for deployment to complete

6. **Get Your API URL**
   - Once stack shows "CREATE_COMPLETE"
   - Click "Outputs" tab
   - Copy the **ApiGatewayUrl** value (looks like: `https://abc123.execute-api.us-east-1.amazonaws.com/prod`)

### Phase 2: Website Configuration

#### 3. Update Environment Configuration

1. **Edit the .env file**
   - Open `.env` file in your project
   - Replace `https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod` with your actual API URL from step 2.6
   - Save the file

   Example:
   ```
   REACT_APP_API_URL=https://abc123def.execute-api.us-east-1.amazonaws.com/prod
   ```

#### 4. Test Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Test Order Process**
   - Go to http://localhost:5173
   - Add products to cart
   - Fill out order form with a real email address
   - Submit order
   - Check if you receive confirmation email

### Phase 3: Production Deployment

#### 5. Deploy to AWS Amplify

1. **Build Your Site**
   ```bash
   npm run build
   ```

2. **Create GitHub Repository**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/naturemama-heritage.git
   git push -u origin main
   ```

3. **Deploy with Amplify**
   - Go to: https://console.aws.amazon.com/amplify/
   - Click "New app" → "Host web app"
   - Choose "GitHub"
   - Select your repository
   - Branch: `main`
   - Build settings: Use default (Amplify will detect Vite automatically)
   - **Important**: Add environment variable:
     - Key: `REACT_APP_API_URL`
     - Value: Your API Gateway URL from step 2.6
   - Click "Save and deploy"

## Verification Checklist

### ✅ Backend Verification
- [ ] SES email address is verified
- [ ] CloudFormation stack deployed successfully
- [ ] API Gateway URL is accessible
- [ ] DynamoDB table "NatureMamaOrders" exists
- [ ] Lambda function "NatureMamaOrderProcessor" exists

### ✅ Website Verification
- [ ] Website loads correctly
- [ ] Products can be added to cart
- [ ] Order form validates properly
- [ ] Orders are submitted successfully
- [ ] Confirmation emails are received
- [ ] Orders appear in DynamoDB table

## Monitoring and Management

### View Orders in AWS Console

1. **DynamoDB Console**
   - Go to: https://console.aws.amazon.com/dynamodb/
   - Click "Tables" → "NatureMamaOrders"
   - Click "Explore table items" to see all orders

2. **Lambda Logs**
   - Go to: https://console.aws.amazon.com/cloudwatch/
   - Click "Log groups" → "/aws/lambda/NatureMamaOrderProcessor"
   - View logs for debugging

### Email Delivery Monitoring

1. **SES Console**
   - Go to: https://console.aws.amazon.com/ses/
   - Click "Reputation" to monitor email delivery
   - Click "Suppression list" to see bounced emails

## Troubleshooting

### Common Issues

**1. "Email not verified" error**
- Solution: Verify your email address in SES console

**2. "Access denied" when placing orders**
- Solution: Check CloudFormation stack deployed successfully
- Check IAM roles were created properly

**3. Orders not appearing in DynamoDB**
- Solution: Check Lambda function logs in CloudWatch
- Verify API Gateway is calling Lambda correctly

**4. No confirmation emails received**
- Solution: Check SES is out of sandbox mode
- Verify email address in SES
- Check spam folder

**5. CORS errors in browser**
- Solution: API Gateway should handle CORS automatically
- Check browser developer tools for specific error

## Cost Estimation

**Monthly costs for moderate usage (100 orders/month):**
- DynamoDB: ~$1-2
- Lambda: ~$0.20
- API Gateway: ~$0.35
- SES: ~$0.10
- **Total: ~$2-3/month**

## Security Notes

- API is public but only accepts POST/GET requests
- No authentication required for placing orders (standard for e-commerce)
- Customer data is stored securely in DynamoDB
- Email addresses are validated before sending
- All AWS resources follow least-privilege access

## Support

If you encounter issues:
1. Check AWS CloudWatch logs for Lambda function
2. Verify all AWS resources are in us-east-1 region
3. Ensure SES is out of sandbox mode
4. Check browser developer tools for frontend errors

Your NatureMama Heritage e-commerce site is now ready for production! 🌿