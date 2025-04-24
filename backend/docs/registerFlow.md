frameworks > adapters > app > frameworks > app (userDbRepository.ts) > 

📥 Register User API
├── 📝 userRoutes.ts (/src/frameworks/webserver/routes)
│   └── 🛠️ router.post("/register", controller.registerUser);
├── 📝 userController.ts (/src/adapters)
│   └── ⚙️ registerUser()
├── 📝 userAuth.ts (/src/app/use-cases/user/auth)
│   ├── 📝 userDbRepository.ts (/src/app/interfaces)
│   │   └── ⚙️ getUserbyEmail()
│   ├── 📝 authService.ts (/src/frameworks/services)
│   │   └── ⚙️ encryptPassword()
│   ├── 📝 userDbRepository.ts (/src/app/interfaces)
│   │   ├── ⚙️ addUser()
│   │   └── ⚙️ addWallet()
│   ├── 📝 authService.ts (/src/frameworks/services)
│   │   └── ⚙️ generateOTP()
│   ├── 📝 sendMail.ts (/src/utils)
│   │   └── ⚙️ sentMail()
│   ├── 📝 userDbRepository.ts (/src/app/interfaces)
│   │   └── ⚙️ addOTP()
│   ├── 📝 authService.ts (/src/frameworks/services)
│   │   └── ⚙️ createTokens()
