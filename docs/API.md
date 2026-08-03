# API

Mock endpoints: `GET /api/classes`, `/api/schedule`, `/api/instructors`, `/api/packages`; `POST /api/bookings`, `/api/contact`, `/api/waitlist`, `/api/consent`; and `GET /api/calendar/[id]`. POST handlers validate, use a honeypot where applicable, apply a memory rate-limit adapter, and return sanitized JSON. Memory rate limiting must be replaced for multi-instance production.
