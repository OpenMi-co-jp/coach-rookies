import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/coach_rookies.png"
                alt="コーチルーキーズ ロゴ"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold">コーチルーキーズ</span>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} コーチルーキーズ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}