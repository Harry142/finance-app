import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path module from the Node.js
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // configures an alias for the @ symbol used to reference the src
    alias: [{ find: "@", replacement: path.resolve(__dirname,"src")}],
  },
});
