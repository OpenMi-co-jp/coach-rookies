import { User } from 'lucide-react'

export default function MembersSection() {
  const members = [
    {
      name: 'なるさん',
      role: '発起人・運営',
      description: 'AIツールを活用したコーチングの先駆者',
      color: 'bg-brand-orange',
    },
    {
      name: 'ゆうたさん',
      role: '共同運営',
      description: 'コミュニティ運営とイベント企画担当',
      color: 'bg-brand-blue',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            メンバー
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600">
            運営メンバーと現在のコミュニティ規模
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center shadow-lg`}
              >
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-green/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">募集対象</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-brand-blue">
                こんな方を歓迎
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2" />
                  <span>コーチング経験1〜5年の若手コーチ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2" />
                  <span>AI時代の変化に危機感を持つ方</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2" />
                  <span>積極的に学び、成長したい方</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-brand-green">
                参加条件
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2" />
                  <span>月1〜2回のイベント参加可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2" />
                  <span>他メンバーとの情報共有を歓迎</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2" />
                  <span>建設的なフィードバック精神</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
