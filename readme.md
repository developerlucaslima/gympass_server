## RFs (Functional Requirements)
 - [ ] User registration must be possible;
 - [ ] User authentication must be possible;
 - [ ] Retrieving the profile of a logged-in user must be possible;
 - [ ] Retrieving the number of check-ins performed by the logged-in user must be possible;
 - [ ] The user must be able to retrieve their check-in history;
 - [ ] The user must be able to search for nearby gyms;
 - [ ] The user must be able to search for gyms by name;
 - [ ] The user must be able to check in at a gym;
 - [ ] Validating a user's check-in must be possible;
 - [ ] Registering a gym must be possible.
## RNs (Business Rules)
 - [ ] The user must not be able to register with a duplicate email;
 - [ ] The user cannot perform 2 check-ins on the same day;
 - [ ] The user cannot check in if not within proximity (100m) of the gym;
 - [ ] Check-in can only be validated within 20 minutes of creation;
 - [ ] Check-in validation can only be performed by administrators;
 - [ ] Gyms can only be registered by administrators.
## RNFs (Non-Functional Requirements)
 - [ ] User passwords need to be encrypted;
 - [ ] Application data needs to be persisted in a PostgreSQL database;
 - [ ] All data lists need to be paginated with 20 items per page;
 - [ ] Users should be identified by a JSON Web Token (JWT).