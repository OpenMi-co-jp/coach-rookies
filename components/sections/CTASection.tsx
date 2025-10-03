import { Button } from '@/components/ui/button'
import { ArrowRight, Users, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-orange/10 to-brand-blue/10">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/coach_rookies_透過.png"
                alt="コーチルーキーズ ロゴ"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            一緒にAI時代を勝ち抜きましょう
          </h2>
          <p className="text-lg text-gray-600">
            若手コーチのためのコミュニティ。<br />
            一人で悩むのではなく、仲間と一緒に成長しませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              イベントに申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              Slackに参加する
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
              詳しい情報を見る
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-md mx-auto">
            <div className="flex items-center gap-3 text-left">
              <MessageCircle className="h-8 w-8 text-brand-green flex-shrink-0" />
              <div>
                <p className="font-semibold">Slackで交流</p>
                <p className="text-sm text-gray-600">日常的な情報交換</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <Users className="h-8 w-8 text-brand-yellow flex-shrink-0" />
              <div>
                <p className="font-semibold">Notionで共有</p>
                <p className="text-sm text-gray-600">ナレッジや資料の蓄積</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}