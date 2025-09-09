export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // Return only the configuration needed for the SDK
  // All sensitive data stays server-side
  return {
    apiBase: config.apiBase,
    userUid: config.userUid,
    firebaseConfig: {
      apiKey: config.firebaseApiKey,
      authDomain: config.firebaseAuthDomain,
      projectId: config.firebaseProjectId,
      storageBucket: config.firebaseStorageBucket,
      messagingSenderId: config.firebaseMessagingSenderId,
      appId: config.firebaseAppId,
      measurementId: config.firebaseMeasurementId
    },
    vapidKey: config.vapidKey,
    logoUrl: config.logoUrl
  }
})
