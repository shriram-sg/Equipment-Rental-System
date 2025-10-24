### Problem Statement

"I run a small business that rents out equipment—mostly cameras, lights, and audio gear—for local filmmakers. I need a system to help manage reservations, track which items are available when, and handle check-ins and check-outs. Customers often book gear days or weeks in advance, and sometimes they cancel or change their bookings. I also need to keep track of equipment condition, so we can flag anything damaged or under maintenance. I'd like some kind of log or history so I can see who rented what and when, just in case there are any issues later."

### Microservices and Usecases

#### Renting Microservice

1. Equipment - rented by a user - for a certain period of time (booking)
2. Booking - cancelled by a user - Equipment is free
3. Booking - changed by a user - Equipment is booked but duration and dates are different. 

Events Released - 
- BookingCreated
- BookingUpdated
- BookingCancelled

Events Listened - 
- EquipmentCheckedOut
- EquipmentCheckedIn
- EquipmentConditionUpdated
- EquipmentAdded

#### Equipment management Microservice

1. Equipment can be checked out when reaching the start of the renting period. (Not available)
2. Equipment can be checked in when reaching the end of the renting period. (available)
3. Equipment condition is tracked - good, unusable, under maintanence. 
4. Each item has an individual identity.
5. Total number of each item type can be viewed. 

Events Released - 
- EquipmentCheckedOut
- EquipmentCheckedIn
- EquipmentConditionUpdated
- EquipmentAdded

Events Listened - 
- BookingCreated
- BookingUpdated
- BookingCancelled

#### Users Microservice

1. Users can log in and log out
2. Users can view what they have

EventsReleased - 
- UserAdded

#### Equipment History Service

1. Handles CQRS denormalized table of equipment and their bookings with users. 
2. For all queries related to History. 

Events Listened - 
- UserAdded
- BookingCreated
- BookingUpdated
- BookingCancelled
- EquipmentCheckedOut
- EquipmentCheckedIn
- EquipmentConditionUpdated
- EquipmentAdded

#### API Gateway - will try to use Kong

1. Handles Auth
2. Aggregates data to send to frontend.
3. Routes requests to the correct microservice. 

#### Monolith Frontend

Regular frontend that queries the API Gateway. 