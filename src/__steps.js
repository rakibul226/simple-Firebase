/*----------------------------Initial Installatio--------------------------

1. Visit: console.firebase.google.com
2. Create project (skip google analytics)
3. Register app(Create config)
4. Install firebase : npm install firebase
5. Add config file to project
6. DANGER: DO NOT PUBLISH OR MAKE FIREBASE CONFIG TO PUBLIC BY PUSHING TO GITHUB


-----------------------------Integration-----------------------------------
7. Visit: Go to Docs > Build > Authentication > Web > Get Started
8. Export app from the firebase.config.js file: export default app
9. At Login.jsx: import getAuth from firebase/auth
10.Create const auth = getAuth(app)


-----------------------------Provider Setup-------------------------------
11. Import googleAuthProvider and create a new provider
12. Use SignInWithPopUp and pass auth and provider
13. Active sign-in method (google,facebook,github,etc)
14. [vite]: change 127.0.0.1 to localhost





-----------------------------------Github Login-------------------------------------

my-profile -> settings -> Developer settings -> New Github App



