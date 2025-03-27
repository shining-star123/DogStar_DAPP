import bg from '@/assets/images/power-card/card-bg.png'
import adornment from '@/assets/images/power-card/card-adornment.png'
import avatar_1 from '@/assets/images/power-card/power-card-avatar-1.png'
import fightIcon from '@/assets/images/power-card/fight-icon.png'
import stakIcon from '@/assets/images/power-card/stak-icon.png'
import powerRaise from '@/assets/images/power-card/arrow-power.svg'

export interface PowerCardProps {
  name?: string
  power?: number
  type?: 'Fight' | 'Stak'
  bonus?: number
  bg?: string
  avatar?: string
}

export const PowerCard: React.FC<PowerCardProps> = (props) => {
  return (
    <div className="flex">
      <div className="relative h-[90px]">
        <div className="flex">
          <div className="relative">
            <div className="z-30 relative">
              <img src={bg} alt="" />
            </div>
            <div className="z-10 absolute top-0 w-full h-full pb-4 pl-4">
              <div
                className={`w-full h-full bg-[${props.bg}] shadow-[4px_6px_10px_0px_${props.bg}] ${props.bg}`}
              ></div>
            </div>
            <div className="absolute top-0 w-full flex gap-1">
              <div className="z-20 w-[110px] h-[80px] md:h-[86px]">
                <img src={props.avatar} alt="" className="w-full h-full" />
              </div>
              <div className="z-40 text-dark-secondary">
                <p className="text-[38px] tracking-tighter text-dark-secondary leading-none font-['NCL_Robowapix_Mecha']">
                  69
                </p>
                <div className="flex gap-2">
                  <p className="text-[8px] leading-none py-0.5 font-bold">
                    POWER
                  </p>
                  <div className="flex flex-col justify-center">
                    <img src={powerRaise} alt="" />
                  </div>
                </div>
                <div className="text-[22px] md:text-[25px] leading-none font-['NCL_Robowapix_Mecha']">
                  BULLSHIT
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center relative">
            <div className="z-0">
              <img src={adornment} alt="" />
            </div>
            <div className="absolute top-0 text-center w-full h-full flex flex-col justify-center">
              <div className="flex justify-center">
                <img src={fightIcon} alt="" />
              </div>
              <p className="text-[20px] font-bold text-green-500 leading-none py-0.5">
                +58
              </p>
              <p className="text-[18px] font-bold text-gray-100 leading-none">
                Fight
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
