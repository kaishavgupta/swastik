import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-contact-info-dev',
        configureServer(server) {
          server.middlewares.use('/api/contact-info', (_req, res) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                phone: env.CONTACT_NUMBER || env.VITE_CONTACT_NUMBER || '919219616304',
                email: env.CONTACT_EMAIL || env.VITE_CONTACT_EMAIL || 'sales@swastikmixtures.com',
                facebook: env.FACEBOOK_URL || env.VITE_FACEBOOK_URL || 'https://www.facebook.com/share/19W93nerbE/',
                linkedin: env.LINKEDIN_URL || env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/nikhil-mittal-01ab94426?utm_source=share_via&utm_content=profile&utm_medium=member_android',
                instagram: env.INSTAGRAM_URL || env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/swastikmixtures?igsi=NXB3emMyc2xiMzEw',
                youtube: env.YOUTUBE_URL || env.VITE_YOUTUBE_URL || 'https://youtube.com/@swastikmixtures?si=4EmJHFhEllvBXcl2',
              })
            )
          })
        },
      },
    ],
  }
})

