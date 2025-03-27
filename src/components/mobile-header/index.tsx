import Inmoral from '../../assets/images/inmortal-btn.svg'
import Charactor from '../../assets/images/perfil-heder-1.png'
import XStar from '../../assets/images/xstar-icon.svg'
import { AlertRingComponent } from '../alert-ring'
import { GameStatusMetricBarComponent } from '../game-status-metric-bar'
import { LiveBarComponent } from '../live-bar'
import { RoundIndicatorComponent } from '../round-indicator'

export const MobileHeaderComponent = () => {
  return (
    <div>
      <div className="flex gap-1">
        <div className="flex gap-1 md:gap-2">
          <div className="flex flex-col justify-center">
            <div className="rounded-full p-2 bg-[#FF1801] w-[24px] flex justify-center">
              <img src={XStar} alt="" width="33px" height="33px" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold">2,897.908 </p>
          </div>
        </div>
        <div>
          <GameStatusMetricBarComponent />
        </div>
        <AlertRingComponent />
      </div>
      <div className="flex gap-2">
        <div>
          <RoundIndicatorComponent />
        </div>
        <div className="flex flex-col justify-end border border-[#00FFE7] rounded-xl h-[72px]">
          <img src={Charactor} className="h-full" alt="" />
        </div>
        <div className="flex flex-col justify-end flex-1 h-[72px]">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col justify-end">
              <div>
                <p className="text-xs font-bold">Surgical Globim</p>
              </div>
              <div className="h-[32px]">
                <img src={Inmoral} className="h-full" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-base leading-none">RANK</p>
              <p className="text-2xl font-extrabold leading-none">335</p>
            </div>
          </div>
          <div className="px-1">
            <LiveBarComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
