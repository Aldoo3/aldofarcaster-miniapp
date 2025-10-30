const appUrl = process.env.NEXT_PUBLIC_SITE_URL;

const farcasterConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjkxNTYyNywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZkNhRmI4OTY4YmJmYTM0NjRhYzM1RTdDMTY2NjdhNGQ1N2MxZDkifQ",
    payload: "eyJkb21haW4iOiJhbGRvZmFyY2FzdGVyLW1pbmlhcHAtdnplby52ZXJjZWwuYXBwIn0=",
    signature: "Jiz8lPjMFye5TlKkT85Icy7jQo9+hvrn7J2aWAkB/Zt7ej1ARXr7s0ioug6xwy0yrYz6cYP/EXs5dPNcRol8ZBw="
  },
  frame: {
    version: "1",
    name: "Aldo Farcaster Mini App",
    iconUrl: `${appUrl}/images/icon.png`,
    homeUrl: `${appUrl}`,
    imageUrl: `${appUrl}/images/feed.png`,
    screenshotUrls: [],
    tags: ["farcaster", "miniapp", "template"],
    primaryCategory: "developer-tools",
    buttonTitle: "Launch App",
    splashImageUrl: `${appUrl}/images/splash.png`,
    splashBackgroundColor: "#ffffff",
    webhookUrl: `${appUrl}/api/webhook`
  }
};

export async function GET() {
  return Response.json(farcasterConfig);
}
