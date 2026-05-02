# CarScout Project Data Dictionary

This document provides a detailed overview of the database schema (MongoDB/Mongoose) used in the CarScout application.

---

## 1. Users Collection (`users`)
Stores information about Buyers, Sellers, and Admins.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `_id` | ObjectId | Unique identifier for the user | Auto-generated |
| `firstName` | String | User's first name | Required |
| `lastName` | String | User's last name | Required |
| `email` | String | User's email address | Unique, Lowercase, Required |
| `password` | String | Hashed password | Required |
| `role` | String | User role (buyer/seller/admin) | Enum: `["user", "admin", "seller"]`, Default: `"user"` |
| `profilePic` | String | URL of the profile picture | Default: `""` |
| `status` | String | Account status | Enum: `["active", "inactive", "deleted", "blocked"]`, Default: `"active"` |
| `isVerified` | Boolean | Account email verification status | Default: `false` |
| `otp` | String | 6-digit verification code | |
| `createdAt` | Date | Timestamp of account creation | Default: `Date.now` |

---

## 2. Cars Collection (`cars`)
Stores car listings added by Sellers.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `brand` | String | Car brand (e.g., Toyota) | |
| `model` | String | Car model (e.g., Camry) | |
| `year` | Number | Manufacturing year | |
| `price` | Number | Listing price | |
| `mileage` | Number | Distance traveled (km) | |
| `fuelType` | String | Engine fuel type | |
| `description` | String | Detailed car description | |
| `location` | String | Car location/city | |
| `condition` | String | Physical state of the car | Enum: `["Excellent", "Good", "Fair"]`, Default: `"Excellent"` |
| `images` | Array[String] | URLs of car images | |
| `sellerId` | ObjectId | Reference to the seller | Ref: `users` |
| `buyerId` | ObjectId | Reference to the buyer (if sold) | Ref: `users`, Default: `null` |
| `status` | String | Listing availability | Enum: `["available", "sold"]`, Default: `"available"` |
| `soldAt` | Date | Timestamp when car was sold | |
| `createdAt` | Date | Listing creation date | Default: `Date.now` |

---

## 3. Offers Collection (`offers`)
Stores pricing offers made by Buyers on specific Cars.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `buyerId` | ObjectId | User making the offer | Ref: `users` |
| `sellerId` | ObjectId | Owner of the car | Ref: `users` |
| `carId` | ObjectId | Car being offered on | Ref: `cars` |
| `offerPrice` | Number | Price offered by buyer | |
| `counterOffer` | Number | Counter price by seller | |
| `message` | String | Optional message with offer | |
| `status` | String | Offer progress status | Enum: `["pending", "accepted", "rejected"]`, Default: `"pending"` |
| `createdAt` | Date | Offer creation date | Default: `Date.now` |
| `updatedAt` | Date | Last update timestamp | Default: `Date.now` |

---

## 4. Test Drives Collection (`testdrives`)
Stores test drive requests made by Buyers.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `buyerId` | ObjectId | Requesting buyer | Ref: `users`, Required |
| `sellerId` | ObjectId | Receiving seller | Ref: `users`, Required |
| `carId` | ObjectId | Interested car | Ref: `cars`, Required |
| `requestedDate`| String | Proposed date | Required |
| `requestedTime`| String | Proposed time | Required |
| `location` | String | Meeting point | Required |
| `message` | String | Note to seller | Default: `""` |
| `status` | String | Request status | Enum: `["pending", "accepted", "rejected", "completed"]`, Default: `"pending"` |
| `createdAt` | Date | Request date | Default: `Date.now` |

---

## 5. Messages Collection (`messages`)
Stores real-time chat history between users.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `senderId` | ObjectId | User sending message | Ref: `users` |
| `receiverId` | ObjectId | User receiving message | Ref: `users` |
| `carId` | ObjectId | Context car (the interest) | Ref: `cars` |
| `message` | String | Content of message | |
| `isRead` | Boolean | Read/Unread status | Default: `false` |
| `createdAt` | Date | Sent timestamp | Default: `Date.now` |

---

## 6. Notifications Collection (`notifications`)
Stores app-wide activity updates for users.

| Field | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `userId` | ObjectId | Recipient of notification | Ref: `users`, Required |
| `senderId` | ObjectId | Triggering user | Ref: `users` |
| `carId` | ObjectId | Related car | Ref: `cars` |
| `offerId` | ObjectId | Related offer | Ref: `offers` |
| `type` | String | Event category | Enum: `["new_offer", "offer_accepted", "offer_rejected", "counter_offer", "counter_response", ...]` |
| `title` | String | Display title | Required |
| `message` | String | Notification content | Required |
| `isRead` | Boolean | Visibility status | Default: `false` |
| `createdAt` | Date | Trigger timestamp | Default: `Date.now` |
