import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Two Pasta</title>
        <meta name="description" content="Two Pasta" />
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to Two Pasta</h1>
        <p className="mt-4 text-gray-600">A minimal Next.js + TypeScript + Tailwind scaffold</p>
      </main>
    </div>
  )
}
