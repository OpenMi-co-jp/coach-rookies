import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'コーチルーキーズ - AI時代を勝ち抜く若手コーチの徒党',
  description: '助け合い、徒党を組んで攻める若手コーチのコミュニティ。AI時代に危機感を持つルーキーコーチが集まり、情報交換やスキル向上を目指します。',
  icons: {
    icon: '/coach_rookies_透過.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}