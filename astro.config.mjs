import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    // 1. Astro-specific server config (for 'npm run dev')
    server: {
        allowedHosts: ['devserver-preview--vinefall.netlify.app']
    },
    vite: {
        plugins: [tailwindcss()],
        // 2. Vite-specific preview config (for 'npm run preview')
        preview: {
            allowedHosts: ['devserver-preview--vinefall.netlify.app']
        },
        // 3. Fallback for some internal Vite dev processes
        server: {
            allowedHosts: ['devserver-preview--vinefall.netlify.app']
        }
    },
    integrations: [react()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
