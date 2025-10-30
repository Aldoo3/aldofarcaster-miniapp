const appUrl = process.env.NEXT_PUBLIC_SITE_URL;

const farcasterConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjkxNTYyNywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZkNhRmI4OTY4YmJmYTM0NjRhYzM1RTdDMTY2NjdhNGQ1N2MxZDkifQ",
    "payload": "eyJkb21haW4iOiJhbGRvZmFyY2FzdGVyLW1pbmlhcHAtdnplby52ZXJjZWwuYXBwIn0",
    "signature": "Jiz8lPjMFye5TlKkT85Icy7jQo9+hvrn7J2aWAkB/Zt7ej1ARXr7s0ioug6xwy0yrYz6cYP/EXs5dPNcRol8ZBw="
  },
  "frame": {
    "version": "1",
    "name": "Example Frame",
    "iconUrl": "https://aldofarcaster-miniapp-vzeo.vercel.app/icon.png",
    "homeUrl": "https://aldofarcaster-miniapp-vzeo.vercel.app",
    "imageUrl": "https://aldofarcaster-miniapp-vzeo.vercel.app/image.png",
    "buttonTitle": "Check this out",
    "splashImageUrl": "https://aldofarcaster-miniapp-vzeo.vercel.app/splash.png",
    "splashBackgroundColor": "#eeccff",
    "webhookUrl": "https://aldofarcaster-miniapp-vzeo.vercel.app/api/webhook"
  }
};

export async function GET() {
  return Response.json(farcasterConfig);
}
