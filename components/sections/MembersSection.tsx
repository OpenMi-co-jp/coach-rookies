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
    {
      name: '山田さん',
      role: '共同運営',
      description: 'AI勉強会のファシリテーター',
      color: 'bg-brand-green',
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center shadow-lg`}>
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-blue/20 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-4">
            コミュニティ規模
          </h3>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-brand-blue">
              8〜20人
            </p>
            <p className="text-gray-600">
              少人数で濃密なコミュニティを目指しています
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}