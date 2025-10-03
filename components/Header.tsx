import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/coach_rookies_透過.png"
                alt="コーチルーキーズ ロゴ"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg hidden sm:block">
              コーチルーキーズ
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#concept"
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              コンセプト
            </a>
            <a
              href="#activities"
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              活動内容
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              参加メリット
            </a>
            <a
              href="#members"
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              運営メンバー
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green/10 hidden sm:flex"
            >
              Slack参加
            </Button>
            <Button
              size="sm"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white"
            >
              参加申込
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
