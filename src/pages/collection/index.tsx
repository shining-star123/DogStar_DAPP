import mobileBg from '@/assets/images/collection/collection-mobile-bg.png'
import banner from '@/assets/images/collection/collection-page-banner.png'
import mark from '@/assets/images/collection/collection-page-mark.png'

import leaderCategoryButton from '@/assets/images/collection/leader-button.png'
import humanCategoryButton from '@/assets/images/collection/human-button.png'
import weaponCategoryButton from '@/assets/images/collection/weapon-button.png'
import skillCategoryButton from '@/assets/images/collection/skill-button.png'


import { CollectionGroupComponent } from '@/components/collection/collection-group'

import { blockedCards, cards, disabledCards } from './collection'
import styles from './styles.module.css'

export const CollectionPage = () => {
  return (
    <div>
      <div className="max-w-[1124px] p-1.5 m-auto relative py-4">
        <div className="absolute top-0 w-full h-[100px">
          <div className="w-full h-full bg-[#FF00000] shadow-[3px_2px_2px_#FF0000]"></div>
        </div>
        <div className="absolute md:hidden top-0 left-1 right-1">
          <img src={mobileBg} alt="" className="w-full" />
        </div>
        <div className="px-2 md:py-6 md:px-10 ">
          <div className="relative mb-4">
            <div className="absolute top-0 bottom-0 hidden md:flex w-full mb-5 flex gap-3 mb-2 h-full">
              <div className="flex-1 h-full">
                <img src={banner} className="w-full h-full" alt="" />
              </div>
              <div className="w-9">
                <img src={mark} className="w-full h-9" alt="" />
              </div>
            </div>
            <div className="block md:hidden w-full absolute top-0 bottom-0 left-0 right-0"> 
              <div className={styles.collection_banner_border} />
              <div className="p-4 w-full h-full absolute top-0">
                <img src={banner} alt="" className="h-full" />
              </div>
            </div>
            <div className="relative  top-0 p-6">
              <div className="flex gap-2">
                <div className="flex flex-col md:flex-row md:gap-3 text-[#CCCCCC] font-bold text-5xl font-robwapix font-normal mb-1">
                  <div className="text-[#24FF87]">TERRY'S </div>
                  <div>SQUAD.</div>
                </div>
                <div className="border-[#E72815] text-[#E72815] border-4 w-8 h-8 flex text-[22px] mt-2 rounded-2xl justify-center leading-none py-0.5 font-extrabold">
                  i
                </div>
              </div>
              <p className="text-[#24FF87] font-extrabold">Collection</p>
            </div>
          </div>
          <div className="relative flex md:hidden gap-1 w-full justify-between mb-2">
            <button>
              <img src={leaderCategoryButton} alt="" />
            </button>
            <button>
              <img src={humanCategoryButton} alt="" />
            </button>
            <button>
              <img src={leaderCategoryButton} alt="" />
            </button>
            <button>
              <img src={skillCategoryButton} alt="" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute z-10"></div>
            <div className="md:pr-8 md:max-h-[496px] md:overflow-y-scroll custom-scroll-bar bg-[#0F0F0F] rounded md:rounded-none md:bg-inherit custom-scroll-bar">
              <div className="mb-4">
                <CollectionGroupComponent
                  level={1}
                  theme="#00FF00"
                  cards={cards}
                />
              </div>
              <div className="mb-4">
                <CollectionGroupComponent
                  level={1}
                  theme="#FF0000"
                  cards={disabledCards}
                />
              </div>
              <div className="mb-4">
                <CollectionGroupComponent
                  level={1}
                  theme="#FC7766"
                  cards={blockedCards}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
