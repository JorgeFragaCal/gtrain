import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    firebaseAdminInitConfig: {
      credential: {
        projectId: "gtrain-a06c6",
        clientEmail:
          "firebase-adminsdk-9oamj@gtrain-a06c6.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
      authDomain: "gtrain-a06c6.firebaseapp.com",
      projectId: "gtrain-a06c6",
    },
    cookies: {
      name: "gtrain-coockie-app",

      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000,
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true,
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
