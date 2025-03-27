import Gamebit from '../../assets/images/quantum-gambit-1.png'

import styles from './index.module.css'

export const RoundIndicatorComponent = () => {
  return (
    <div className={`${styles.round} w-[158px] md:w-[320px] relative`}>
      <div className="flex p-1 md:p-2 top-0">
        <div>
          <p className="text-[6px] md:text-base pl-[12px] text-[#121212] pt-1">
            ROUND
          </p>
          <div className="pl-1 md:pt-1">
            <h2 className="rotate-180 text-vertical text-[36px] md:text-[64px] font-bold leading-none">
              02
            </h2>
          </div>
        </div>
        <div className="">
          <div className="w-[106px] md:w-auto mb-2 md:mb-0">
            <img src={Gamebit} alt="" />
          </div>
          <div className="pl-1 -translate-y-1">
            <div className="flex">
              {['Day', 'Hour', 'Miute', 'Seconds'].map(
                (item: string, index: number) => (
                  <div key={index}>
                    <div className="text-base md:text-3xl font-semibold leading-none">
                      00
                      {index !== 3 && <span className="md:px-1">:</span>}
                    </div>
                    <div className="hidden md:block text-[10px] font-semibold pl-1">
                      {item}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
