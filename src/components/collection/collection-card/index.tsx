import avatar from '@/assets/images/collection/avatar-1.png'
import bg from '@/assets/images/collection/collection-card-bg.png'
import type { CardInterface } from '@/common/models'
import { CollectionCardButtonComponent } from '@/components/elements/button/collection-card-button.component'

import { BlockedButtonComponent } from './blocked-button.component'
import { CollectionDeckButtonComponent } from './deck-button.component'
import { DisabledButtonComponent } from './diabled-button.component'
import styles from './styles.module.css'

export interface CollectionCardProps {
  card?: CardInterface
}

export const CollectionCardComponent: React.FC<CollectionCardProps> = (
  props,
) => {
  const status = props.card?.attr?.status
  return (
    <div className="relative h-[116px]">
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-0 ${styles.collection_card_clip_bg}`}
      >
        {(status === 'available' ||
          (status === 'deck' && status === 'staked')) && (
          <div className={`w-full h-full bg-[#00FF00]`}></div>
        )}
        {status === 'disabled' && (
          <div className="w-full h-full bg-[#706F6F]" />
        )}
        {status === 'blocked' && <div className="w-full h-full bg-[#CCCCCC]" />}
      </div>
      <div className="h-full w-full absolute top-0 z-10 flex">
        <img className="h-full w-full" src={bg} alt="" />
      </div>
      <div
        className={`absolute top-0 right-0 ${styles.collection_card_power} z-30 px-1.5 py-1`}
      >
        <p className="text-[16px] tracking-tight leading-none text-[#1A1A1A] font-robwapix drop-shadow-[2px_2px_2px_#000000]">
          28
        </p>
        <div className="font-bold text-[4px] text-[#CCCCCC] text-center bg-[#000000]">
          POWER
        </div>
      </div>
      <div className="h-[92px] absolute bottom-[34px] z-20">
        <img
          className="h-full w-[85%] m-auto"
          src={props?.card?.image || avatar}
          alt=""
        />
      </div>
      <div className="relative z-30 h-full flex flex-col justify-end pb-2 px-3">
        {status === 'available' && (
          <CollectionCardButtonComponent text={`Buy`} />
        )}
        {status === 'staked' && (
          <div className="bg-[#000000] text-[16px] leading-none text-[#24FF87] py-0.5 text-center px-2 mb-1 font-extrabold">
            Staked
          </div>
        )}
        {status === 'deck' && <CollectionDeckButtonComponent text="Deck" />}
        {status === 'disabled' && <DisabledButtonComponent text="Buy" />}
        {status === 'blocked' && <BlockedButtonComponent text="&nbsp;" />}
      </div>
    </div>
  )
}
