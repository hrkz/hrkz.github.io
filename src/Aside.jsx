export function Avatar() {
  return (
    <div className="flex flex-col mx-auto h-full w-72 items-center"
    >
      <img className="
        w-32 h-32 
        mb-3 
        rounded-full shadow-lg" 
        src="assets/avatar.jpg" 
        alt="avatar" 
      />
      <h5 className="mb-1 font-bold text-lg">hrkz</h5>
      <span className="italic text-sm text-center">Applied mathematics and computational physics</span>
    </div>
  )
}

export function Photo() {
  return (
    <div className="flex flex-col mx-auto h-full w-72 items-center"
    >
      <img className="
        w-auto h-32
        mb-3 
        rounded-full shadow-lg" 
        src="assets/photo.png" 
        alt="photo" 
      />
      <h5 className="mb-1 font-bold text-lg">Hugo Frezat</h5>
      <span className="italic text-sm text-center">Researcher @inc and climber</span>
    </div>
  )
}
