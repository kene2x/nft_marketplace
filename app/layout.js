import './globals.css'

export const metadata = {
  title: 'NFT Marketplace',
  description: 'Decentralized NFT Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
