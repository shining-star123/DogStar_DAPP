import MyLabIcon from '../../assets/images/mylab-logo.svg'
import MyLabText from '../../assets/images/mylab-text-logo.png'
import PowerIcon from '../../assets/images/power.svg'
import TerryCoin from '../../assets/images/terry-coin.svg'

import styles from './styles.module.css'

export const GameStatusMetricBarComponent = () => {
  return (
    <div className={`relative ${styles.metricBar}`}>
      <div className="absolute w-full px-4 md:px-8 h-full flex flex-col justify-center z-0">
        <div className={`rounded-full p-1 w-full`}>
          <div className="rounded-full h-[21px] md:h-[40px] w-full"></div>
        </div>
      </div>
      <div className="flex">
        <div className="z-10 flex flex-col justify-center">
          <img src={PowerIcon} alt="" />
        </div>
        <div className="z-10 flex flex-col justify-center">
          <p className="text-[13px] md:text-[20px] font-extrabold">1.000,23</p>
        </div>
        <div className="z-10 flex flex-col justify-center">
          <img src={MyLabIcon} alt="" />
        </div>
        <div className="flex z-10 gap-2">
          <div className="flex flex-col justify-center">
            <img src={MyLabText} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[13px] md:text-[20px] font-extrabold">236,897</p>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-center">
          <img src={TerryCoin} alt="" />
        </div>
      </div>
    </div>
  )
}
