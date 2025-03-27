import { LargeCardComponent } from '@/components/large-card'

import styles from './styles.module.scss'

export const CardsPage = () => {
  return (
    <div>
      <div className="max-w-[500px] relative">
        <div className="absolute top-0 z-10">{/* background image */}</div>
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <div>
                
              </div>
              <div className="flex text-[72px] font-robwapix">
                <div>
                  <span className="text-[#24FF87]">MY</span>DECK:
                  <span className="text-[#24FF87]">1,234.45</span>
                </div>
                <div>{/* power */}</div>
              </div>
            </div>
            <div className="flex">
              <div>{/* mark */}</div>
              <div className="flex text-[72px] font-robwapix">
                <p className="text-[#DEFF14]">BONUS: </p>
                <p className={styles.cards_page_title_gradient}>25%</p>
              </div>
            </div>
          </div>
          <div>
            {/* cards */}
            <LargeCardComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
