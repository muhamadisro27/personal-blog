type AmbientBackgroundProps = {
  children: React.ReactNode
}

const AmbientBackground = ({ children }: AmbientBackgroundProps) => {
  return (
    <div className="relative min-h-screen bg-gray-450 overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-600/10 rounded-full top-20 left-10 blur-3xl animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-pink-600/10 rounded-full bottom-20 right-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AmbientBackground
