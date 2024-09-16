import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://dariomejia.github.io/WEB-FE-REACT-HW4-DARIO-MEJIA/",
})
