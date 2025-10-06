import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Brain, MessageSquare, Coffee } from 'lucide-react'

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Brain,
      title: 'コーチング勉強会',
      description:
        'コーチングの実践や最新知見を学び合い、互いの成長につなげる場です。',
      features: [
        '実践事例や気づきの共有',
        '最新情報や学びの提供',
        '多様な視点でディスカッション',
      ],
    },
    {
      icon: MessageSquare,
      title: 'AIやツールの勉強会',
      description:
        '最新のAIツールや各種ツールの活用方法を学び、コーチングに活かす方法を探求します。',
      features: [
        'ChatGPT/Claudeの活用術',
        'プロンプトエンジニアリング',
        'AIツールの比較・選定',
      ],
    },
    {
      icon: Coffee,
      title: '交流会/飲み会',
      description:
        'リラックスした雰囲気でネットワーキングを深め、お互いの悩みを共有します。',
      features: ['カジュアルな情報交換', 'キャリア相談', '仲間づくり'],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            活動内容
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600">
            月に1〜2回、オンラインまたはオフラインで集まり、学びと交流を深めます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-brand-blue/10">
                      <Icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
