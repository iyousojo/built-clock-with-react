import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/built-clock-with-react.git/', // Replace <your-repo-name> with your actual repository name
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

