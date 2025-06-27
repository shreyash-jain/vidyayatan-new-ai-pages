# Resend Custom Domain Setup for Vidyayatan AI

## 🎯 **Current Configuration**

✅ **Working Now:**
- **From:** Vidyayatan AI Bookings `<onboarding@resend.dev>`
- **Reply-To:** `shreyash@vidyayatan.com`
- **Team Recipients:** 
  - `shreyash@vidyayatan.com`
  - `namita@vidyayatan.com`

## 🔧 **To Use Custom Domain (internal@vidyayatan.com)**

### **Step 1: Add Domain in Resend**

1. Go to: https://resend.com/domains
2. Click "Add Domain"
3. Enter: `vidyayatan.com`
4. Click "Add"

### **Step 2: Configure DNS Records**

Add these DNS records to your domain provider (where you manage vidyayatan.com):

```
Type: MX
Name: vidyayatan.com
Value: feedback-smtp.eu-west-1.amazonses.com
Priority: 10

Type: TXT
Name: vidyayatan.com
Value: "v=spf1 include:amazonses.com ~all"

Type: CNAME
Name: resend._domainkey.vidyayatan.com
Value: resend._domainkey.eu-west-1.amazonses.com

Type: CNAME  
Name: _dmarc.vidyayatan.com
Value: _dmarc.eu-west-1.amazonses.com
```

### **Step 3: Verify Domain**

1. After adding DNS records, wait 24-48 hours for propagation
2. Go back to Resend dashboard
3. Click "Verify" next to your domain
4. Once verified, you'll see a green checkmark

### **Step 4: Update Email Configuration**

Once domain is verified, update the code:

```typescript
// In src/lib/email.ts

// Customer confirmation
from: 'Vidyayatan AI <internal@vidyayatan.com>',

// Team notification  
from: 'Vidyayatan AI Bookings <internal@vidyayatan.com>',
```

## 📧 **Current Email Flow**

### **When Form is Submitted:**

1. **Customer Confirmation Email:**
   - **To:** Form submitter's email
   - **From:** Vidyayatan AI `<onboarding@resend.dev>`
   - **Reply-To:** `shreyash@vidyayatan.com`
   - **Subject:** "Thank you for your interest in Vidyayatan AI!"

2. **Team Notification Email:**
   - **To:** `shreyash@vidyayatan.com`, `namita@vidyayatan.com`
   - **From:** Vidyayatan AI Bookings `<onboarding@resend.dev>`
   - **Reply-To:** `shreyash@vidyayatan.com`
   - **Subject:** "🚀 New Demo Request from [Customer Name]"

## ✅ **Test Results**

- ✅ **Team emails sent successfully!**
- ✅ **Email ID:** `10c0212f-a7a1-476a-8842-4c28defd55b3`
- ✅ **Recipients:** Both team members receive notifications

## 🚀 **Benefits of Custom Domain**

- ✅ **Professional branding** (emails from @vidyayatan.com)
- ✅ **Better deliverability** (reduces spam likelihood)
- ✅ **Trust & credibility** (branded email address)
- ✅ **Reply management** (customers reply to your domain)

## 🔄 **Migration Plan**

1. **Phase 1:** Current setup (working now with resend.dev)
2. **Phase 2:** Add and verify vidyayatan.com domain
3. **Phase 3:** Update email configuration to use custom domain
4. **Phase 4:** Test and deploy

The system works perfectly now and will be even better once the custom domain is set up! 