<template>
  <div>
    
  </div>
</template>
<script setup>
  const config = useRuntimeConfig()

  onMounted(async () => {
    const sdkConfig = await $fetch('/api/config')

    // If the SDK requires a global, set it only on the client (won't show in view-source)
    // You may remove this if the SDK supports fetching config internally
    window.JAOSUA_CONFIG = {
      apiBase: sdkConfig.apiBase,
      userUid: sdkConfig.userUid,
      firebaseConfig: sdkConfig.firebaseConfig,
      vapidKey: sdkConfig.vapidKey,
      logoUrl: sdkConfig.logoUrl
    }

    // Dynamically load SDK script after config is set
    const script = document.createElement('script')
    script.src = config.public.cloudflareUrl
    script.defer = true
    document.head.appendChild(script)
  })
</script>
