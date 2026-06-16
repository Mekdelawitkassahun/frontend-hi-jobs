import { Sparkles } from 'lucide-react'

export function NextGenFeatures() {
  return (
    <div 
      className="bg-white rounded-[18px] border border-[#BCC5E0] p-8 flex flex-col items-center text-center"
      style={{ width: '391px' }}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-[#2688FA] to-[#02DEDD] rounded-2xl flex items-center justify-center mb-6">
        <Sparkles size={40} className="text-white" />
      </div>
      <h2 className="text-[#242121] text-3xl font-bold font-[venera] mb-3">
        NEXT-GEN FEATURES
      </h2>
      <span className="px-4 py-1 bg-[#2688FA]/10 text-[#2688FA] rounded-full text-sm font-medium font-[venera] mb-6">
        COMING SOON
      </span>A
      <div className="space-y-4 text-left w-full mt-4">
        <p className="text-[#4D5A68] text-sm font-[Inter]">✨ AI-powered job matching</p>
        <p className="text-[#4D5A68] text-sm font-[Inter]">📊 Advanced analytics dashboard</p>
        <p className="text-[#4D5A68] text-sm font-[Inter]">🤝 Video interview integration</p>
        <p className="text-[#4D5A68] text-sm font-[Inter]">📱 Mobile app coming</p>
        <p className="text-[#4D5A68] text-sm font-[Inter]">🔒 Blockchain verification</p>
      </div>
    </div>
  )
}