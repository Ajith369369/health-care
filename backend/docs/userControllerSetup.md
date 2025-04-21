# **userControllerSetup.ts**


```ts

/**
 * Initializes the user controller with all required services and repositories.
 *
 * This setup follows the Dependency Injection pattern, where both interfaces and their
 * concrete implementations are injected into the controller to promote decoupling,
 * testability, and scalability.
 *
 * @param authServiceInterface - Interface for authentication service logic
 * @param authService - Concrete implementation of authentication service
 * @param userDbRepository - Interface for user DB operations
 * @param userRepositoryMongodb - MongoDB-specific implementation of user DB operations
 * @param doctorDbRepository - Interface for doctor-related DB operations
 * @param doctorRepositoryMongodb - MongoDB implementation for doctor data
 * @param timeSlotDbRepository - Interface for timeslot-related DB operations
 * @param timeSlotRepositoryMongodb - MongoDB implementation for timeslot management
 * @param prescriptionDbRepository - Interface for prescription-related DB operations
 * @param prescriptionRepositoryMongodb - MongoDB implementation for prescriptions
 * @param departmentDbRepository - Interface for department-related DB operations
 * @param departmentRepositoryMongodb - MongoDB implementation for departments
 *
 * @returns {object} userController instance with all route handlers (register, login, etc.)
 */
const controller: any = userController(
  authServiceInterface,
  authService,
  userDbRepository,
  userRepositoryMongodb,
  doctorDbRepository,
  doctorRepositoryMongodb,
  timeSlotDbRepository,
  timeSlotRepositoryMongodb,
  prescriptionDbRepository,
  prescriptionRepositoryMongodb,
  departmentDbRepository,
  departmentRepositoryMongodb
);

```

