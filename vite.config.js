import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        watch: {
            usePolling: true // Try this if using WSL or a VM
        }
    }
})
