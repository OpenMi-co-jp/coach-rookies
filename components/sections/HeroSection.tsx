import { Button } from '@/components/ui/button'
import { Calendar, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg p-4">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-12 h-12 bg-brand-orange rounded-tl-full" />
              <div className="w-12 h-12 bg-brand-blue rounded-tr-full" />
              <div className="w-12 h-12 bg-brand-green rounded-bl-full" />
              <div className="w-12 h-12 bg-brand-yellow rounded-br-full" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              コーチルーキーズ
            </h1>
            <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-gray-600">
              AI時代を勝ち抜く若手コーチの徒党。
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">次回イベント情報</h2>
            <div className="flex flex-col sm:flex-row gap-4 text-left">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">2025年2月XX日(土) 14:00-17:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <span className="font-medium">東京都内 or オンライン</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-6">
            次回のイベントに参加する
          </Button>
        </div>
      </div>
    </section>
  )
}