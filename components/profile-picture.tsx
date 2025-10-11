'use client'

export function ProfilePicture() {
  return (
    <div className="relative">
      {/* Simple decorative gradient background */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>

      {/* Profile picture container */}
      <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-slate-800 md:h-80 md:w-80">
        <img src="/profile.jpeg" alt="Profile" className="h-full w-full object-cover" />

        {/* Simple overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>

        {/* Online status indicator */}
        <div className="absolute bottom-4 right-4 h-5 w-5 animate-pulse rounded-full border-2 border-white bg-green-500 dark:border-slate-800"></div>
      </div>
    </div>
  )
}
