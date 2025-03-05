
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   server: {
    allowedHosts: [
      '5173-spikedyew-bartoszchmiel-fst5coldqaf.ws-eu118.gitpod.io',
    ],
  },
})