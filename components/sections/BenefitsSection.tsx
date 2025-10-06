import { CheckCircle } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      title: '最新情報へのアクセス',
      description:
        'AIツールやコーチング手法の最前線情報をいち早くキャッチアップし、キャリアの選択肢を広げる',
    },
    {
      title: '実践的なフィードバック',
      description:
        '他のメンバーの経験から学び、自分のコーチングにすぐに活かせる',
    },
    {
      title: '切磋琢磨できる仲間',
      description: '同じ悩みを持つ若手コーチとのつながりでモチベーションUP',
    },
    {
      title: 'コーチングスキルの向上',
      description: 'ロールプレイや相互コーチングで実践的なスキルを磨く',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            参加メリット
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600">
            コーチルーキーズに参加することで得られる具体的なメリット
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
