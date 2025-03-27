import bg from '@/assets/images/collection/collection-card-buy-button.png'

import type { BaseButtonComponentProps } from './base-button.component'
import { BaseButtonComponent } from './base-button.component'

export interface CollectionCardButtonComponentProps {
  text?: React.ReactNode
  bg?: string
}
export const CollectionCardButtonComponent: React.FC<
  CollectionCardButtonComponentProps & BaseButtonComponentProps
> = (props) => {
  return (
    <BaseButtonComponent
      onClick={props.onClick}
      bg={props?.bg ? props.bg : bg}
      className="min-w-[60px]"
    >
      <div className="py-1 pb-1.5 px-2 text-[16px] font-extrabold text-center leading-none">
        {props.text}
      </div>
    </BaseButtonComponent>
  )
}
