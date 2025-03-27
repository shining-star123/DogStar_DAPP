import Mark from '../../assets/images/mark.png'
import XStar from '../../assets/images/xstar-icon.svg'
import { DownTimeCounterComponent } from '../downtime-counter'
import { ButtonComponent } from '../elements/button'
import { GameStatusMetricBarComponent } from '../game-status-metric-bar'

export const StatusBarComponent = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex gap-2">
        <div className="flex flex-col justify-center -translate-y-1.5 pl-4">
          <img src={Mark} className="h-[42px]" alt="" />
        </div>
        <div className="flex gap-1">
          <ButtonComponent variant="secondary" text="COLLECTION" />
          <ButtonComponent variant="secondary" text="DECK" />
          <ButtonComponent variant="primary" text="HAW-AI POT" />
        </div>
        <DownTimeCounterComponent time={['00', '13', '35', '26']} />
      </div>
      <div className="flex gap-2">
        <GameStatusMetricBarComponent />
        <div className="flex gap-2">
          <div className="flex flex-col justify-center">
            <div className="rounded-full p-2 bg-[#FF1801] w-[60px] flex justify-center">
              <img src={XStar} alt="" width="33px" height="33px" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-extrabold text-[#00FFE7]">XSTAR</p>
            <p className="text-base font-bold text-[#00FFE7]">2,897.908.345 </p>
          </div>
        </div>
      </div>
    </div>
  )
}
