# CampusRent

CampusRent is a campus-based item rental marketplace designed for university students.

The platform allows students to rent useful items from other students and also list their own items for rent.

## Main Concept

Every user can act as both:

- Renter
- Item Owner

A student can rent an item from another student and also list their own items for other students to rent.

## Main Features

- User registration and login
- Browse rental items
- Search items
- Item categories
- Item details
- Rental requests
- Rental dates
- Owner approval
- Rental history
- User profile
- List items for rent
- Notifications
- Ratings and reviews
- Owner pickup
- Campus pickup point
- Payment
- Secure payment verification
- Biometric / Passkey authentication

## Rental Flow

Browse Item
→ Select Item
→ Select Rental Date
→ Request Rental
→ Owner Approves
→ Payment
→ Pickup
→ Rental Period
→ Return Item
→ Complete Rental
→ Rating

## User Roles

### Renter

A renter can:

- Search for items
- View item details
- Request a rental
- Select rental dates
- Make payment
- Choose pickup method
- View rental history
- Return items
- Give ratings and reviews

### Item Owner

An owner can:

- List items
- Set rental prices
- Set item availability
- Accept or reject rental requests
- Manage active rentals
- View rental history
- Receive rental payments
- Receive ratings

A single account can be both a renter and an item owner.

## Pickup Options

CampusRent supports:

1. Direct pickup from the item owner
2. Pickup at an approved campus pickup point

## Security

The future production version will use secure authentication and WebAuthn / Passkeys where supported.

Biometric authentication may use the device's supported authentication method such as Face ID, fingerprint, or device passkey.

The application must never store fingerprint or facial biometric data.

## Technology

Initial frontend:

- HTML
- JavaScript
- JavaScript-based styling
- Browser APIs

Future technologies may include:

- Backend API
- Database
- Authentication
- Payment gateway
- WebAuthn / Passkeys
- Notifications
- Location services
- Admin dashboard

## Development

Clone or download the repository and open `index.html` in a modern browser.

For development, a local development server is recommended.

## Future Development

Future versions will include:

- Student authentication
- University verification
- Database
- Rental management
- Payment gateway
- Biometric security
- Notifications
- Chat between renter and owner
- Campus pickup management
- Rating system
- Admin dashboard
- Rental penalty system
- Item availability management

## Project Status

Current version:

Frontend prototype.

Backend, database, payment gateway and production authentication will be implemented in later stages.
