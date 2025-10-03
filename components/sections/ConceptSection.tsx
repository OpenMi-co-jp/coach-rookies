import { Users, Network, TrendingUp } from 'lucide-react'

export default function ConceptSection() {
  const goals = [
    {
      icon: Users,
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
      title: '情報交換',
      description: 'AIツールやコーチング手法の最新情報を共有',
    },
    {
      icon: Network,
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      title: 'ネットワーク',
      description: '同世代のコーチとのつながりを構築',
    },
    {
      icon: TrendingUp,
      color: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
      title: 'スキル向上',
      description: '実践的なフィードバックで成長を加速',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            コンセプト
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            「助け合い、徒党を組んで攻める」
          </p>
          <p className="mx-auto max-w-[800px] text-gray-600">
            AI時代に危機感を持つ若手・ルーキーコーチが集まり、
            お互いの経験や知識を共有しながら、共に成長していくコミュニティです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-4 rounded-full ${goal.bgColor}`}>
                  <Icon className={`h-8 w-8 ${goal.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
