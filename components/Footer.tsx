export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-4 h-4 bg-brand-orange rounded-tl-full" />
              <div className="w-4 h-4 bg-brand-blue rounded-tr-full" />
              <div className="w-4 h-4 bg-brand-green rounded-bl-full" />
              <div className="w-4 h-4 bg-brand-yellow rounded-br-full" />
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