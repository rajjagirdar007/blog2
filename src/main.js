import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import './index.css'

// Load fonts
const loadFonts = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500&family=Playfair+Display&display=swap';
    document.head.appendChild(link);
};

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJtaj_uLY0BBZO1mQGScgPH1PoffeWFBY",
    authDomain: "blog-peakmind.firebaseapp.com",
    projectId: "blog-peakmind",
    storageBucket: "blog-peakmind.firebasestorage.app",
    messagingSenderId: "324663637798",
    appId: "1:324663637798:web:9bf00dcf76187ef0f633e7",
    measurementId: "G-ED8PWGEP3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Remove the persistence initialization
// Instead, initialize Firestore with memory-only persistence
const auth = getAuth(app);
const storage = getStorage(app);

// Export for use in other files
export { db, auth, storage };

let vueApp;

// Initialize the application
const initializeApp2 = async() => {
    // Load fonts
    loadFonts();

    // Create Pinia instance
    const pinia = createPinia()

    // Wait for Firebase Auth to initialize before creating the app
    onAuthStateChanged(auth, async(user) => {
        if (!vueApp) {
            await store.dispatch('initializeAuth');
            if (user) {
                console.log('User is logged in:', user.email);
            } else {
                console.log('No user logged in');
            }

            vueApp = createApp(App)
                .use(pinia) // Use Pinia before other plugins
                .use(router)
                .use(store)
                .mount('#app');
        }
    });
};

initializeApp2();