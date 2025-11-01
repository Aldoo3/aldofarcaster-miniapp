import App from '@/components/pages/app'
import { APP_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const frame = {
  version: 'next',
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: 'Do you GM?',
    action: {
      type: 'launch_frame',
      name: 'Aldo MiniApp',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: '#f7f7f7',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'GM App',
    openGraph: {
      title: 'GM App',
      description: 'A template for building mini-apps on Farcaster and Base',
    },
    other: {
      'fc:frame': JSON.stringify(frame),
    },
  }
}

export default function Home() {
  return <App />
}
