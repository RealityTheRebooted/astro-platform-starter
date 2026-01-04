import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    server: {
        // This is the Astro-native way to allow hosts in 2026
        allowedHosts: ['.netlify.app'] 
    },
    vite: {
        plugins: [tailwindcss()],
        // Some setups may still require it specifically here
        server: {
            allowedHosts: ['.netlify.app']
        }
    },
    integrations: [react()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
