
# Travelicious BD Limited 
Overview : Travelicious BD Limited is a full stack travel agency website with dynamic functions and responsive design.Users of two roles can interact with the system by using the web frontend.As data source, NoSQL database is used (MongoDB).
It allows user to create an account, book packages and delete them.Email/password and Google firebase authentication has been added.The backend services are deployed on Heroku.The frontend is deployed on firebase.EmailJs is used in contact us section to get live message of clients.All the services and UI are done using Node Express and React js.
## Live Link
[Travelicious BD Limited](https://travelicious-bd-limited.web.app/)


## API Reference

#### Get all services

```http
  https://murmuring-beyond-96223.herokuapp.com/services
```
#### Get all bookings

```http
  https://murmuring-beyond-96223.herokuapp.com/bookings
```

#### Get booking

```http
  https://murmuring-beyond-96223.herokuapp.com/bookings/${id}
```

## Role Activity

#### User:

- View the tours,after login can see the tour details.   
- Book a tour if she/he is logged in to the site. 
- If a tour is booked by any user,she/he can see her/his bookings. 
- If any user wants to cancel the booking ,she/he can cancel. 



#### Admin:

- View the tours,after login can see the tour details.   
- Book a tour if she/he is logged in to the site.
- Admin can add new tours.  
- Admin can see all the bookings.
- Admin can cancel any booked tour from all bookings.
- Admin can update the booked tour's status of any user.
## Technologies Used

- nodejs
- Express JS
- React Js
- React Router Dom
- React Bootstrap
- Bootstrap 5
- MongoDb
- Heroku
- Firebase Authentication
- Firebase Hosting




## Admin Login Credential

Email : admin123@gmail.com
Password : AdmiN12

