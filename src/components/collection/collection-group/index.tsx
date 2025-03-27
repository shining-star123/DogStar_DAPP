import bg from '@/assets/images/collection/collection-group-bg.png'
import mobileBg from '@/assets/images/collection/collection-group-mobile-bg.png'
import leaderIcon from '@/assets/images/collection/icons/leader-category-icon.png'
import type { CardInterface } from '@/common/models'

import { formatDigit } from '../../../utils/format-digit'
import { CollectionCardComponent } from '../collection-card'

import styles from './styles.module.css'

export interface CollectionGroupComponentProps {
  level?: number
  theme?: string
  cards?: CardInterface[]
}
export const CollectionGroupComponent: React.FC<
  CollectionGroupComponentProps
> = (props) => {
  const bgColor = `bg-[${props.theme}]`
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 z-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full drop-shadow-[3px_2px_2px_#1A1A1A]"
        />
      </div>
      <div className="hidden md:block absolute top-0 left-0 right-0 z-10 py-5 px-5 pb-5 bottom-0">
        <div
          className={`w-full h-full ${bgColor}`}
          style={{ boxShadow: `0px 2px 8px 10px ${props.theme}` }}
        ></div>
      </div>
      <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 z-20">
        <img src={bg} alt="" className="w-full h-full" />
      </div>
      <div className="block md:hidden absolute top-2 left-2 right-2 z-20">
        <div className="w-[45%] h-[160px] relative">
          <div
            className="absolute top-5 left-4 right-6 bottom-4 p-2 -z-10"
            style={{
              background: props.theme,
              boxShadow: `0px 2px 8px 10px ${props.theme}`,
            }}
          />
          <img src={mobileBg} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="relative z-50 flex flex-col md:flex-row px-2 md:px-4">
        <div className="px-4 py-3 pt-6 md:py-6 w-[152px] flex gap-1 md:gap-2">
          <div
            className={`${styles.collection_group_level_border} md:border-l border-[#CCCCCC] relative mr-1 md:mr-0`}
          ></div>
          <div className="flex md:block gap-1 md:gap-2">
            <p className="font-extrabold text-base leading-none hidden md:block">
              My <br /> collection cards
            </p>
            <p
              className={`text-[30px] md:text-[82px] leading leading-none font-robwapix font-normal drop-shadow-[2px_2px_2px_#000000] md:drop-shadow-none`}
              style={{ color: props.theme }}
            >
              {formatDigit(props.level)}
            </p>
            <div className="flex flex-col justify-end pb-1">
              <div
                className={`text-xs px-4 py-0.5 text-center text-[#343432]`}
                style={{ background: props.theme }}
              >
                LEVELS
              </div>
            </div>
            <div className="block md:hidden w-[22px] flex flex-col justify-center">
              <img src={leaderIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden md:grid w-full grid gap-1 grid-cols-4 sm:grid-cols-6 md:grid-cols-8">
          {props?.cards?.map((card: CardInterface, index: number) => (
            <div key={index}>
              <CollectionCardComponent card={card} />
            </div>
          ))}
        </div>
        <div className="block md:hidden w-full grid gap-1 grid-cols-4 sm:grid-cols-6 md:grid-cols-8">
          {props?.cards
            ?.slice(0, 4)
            .map((card: CardInterface, index: number) => (
              <div key={index}>
                <CollectionCardComponent card={card} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
