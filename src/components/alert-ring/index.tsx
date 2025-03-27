import Ring from '../../assets/images/alert-ring.png'

export const AlertRingComponent = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <img src={Ring} alt="" />
      <div className="absolute bg-[#FF1801] rounded-full text-xs w-[20px] h-[20px] md:w-[27px] md:h-[27px] -top-0 md:-top-3 -right-2 text-center flex flex-col justify-center">
        32
      </div>
    </div>
  )
}
