import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  plugins: [
    '~/plugin/service-worker.client.ts'
  ],
  nitro: {
    preset: 'cloudflare-pages'
  },
  
  runtimeConfig: {
    apiBase: process.env.API_BASE,
    userUid: process.env.USER_UID,
    vapidKey: process.env.VAPID_KEY,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    logoUrl: process.env.LOGO_URL,
    
    // Public (client-side accessible) - only non-sensitive data
    public: {
      cloudflareUrl: process.env.CLOUDFLARE_URL,
      serviceWorker: process.env.SERVICEWORKER
    }
  }
})


