## Packages Used :

"@react-native-async-storage/async-storage": "^1.21.0",
"@react-native-firebase/app": "^18.8.0",
"@react-native-firebase/auth": "^18.8.0",
"@react-navigation/drawer": "^6.6.7",
"@react-navigation/native": "^6.1.10",
"@react-navigation/native-stack": "^6.9.18",
"react": "18.2.0",
"react-native": "0.73.4",
"react-native-bootsplash": "^5.4.0",
"react-native-fast-image": "^8.6.3",
"react-native-gesture-handler": "^2.15.0",
"react-native-keyboard-aware-scroll-view": "^0.9.5",
"react-native-linear-gradient": "^2.8.3",
"react-native-reanimated": "^3.7.0",
"react-native-safe-area-context": "^4.9.0",
"react-native-screens": "^3.29.0",
"react-native-size-matters": "^0.4.2",
"react-native-snackbar": "^2.6.2",
"react-native-vector-icons": "^10.0.3",
"react-redux": "^9.1.0",
"redux": "^5.0.1",
"redux-thunk": "^3.1.0"

## Works:

1. Native splash screen used using react native bootSplash
2. For login and signup purposes i used the react native firebase
3. For left menu i used the react navigation drawer in Home page.
4. For staying in home page once loggedin , async storege is used
5. For updating the used name throughout app, redux is used.

## Flow:

1. Register for new user after splash scree.
2. once regisered with valid mail ID you will redirected to product list page
3. If the registering email Id is already exists you have to login
4. Once login there is a product list page will land
5. In the side menu bar , you can navigate to profile page
6. In profile page you can change the name which will reflect in menu bar also
7. Once done, there is a signout option in menu
8. Once signout done, the page will navigate to Login page along Async store, redux data will clear and firebase auth will signout

## Thank you
