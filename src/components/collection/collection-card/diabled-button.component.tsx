import bg from '@/assets/images/collection/disabled-buy-button-bg.png'
import type { BaseButtonComponentProps } from '@/components/elements/button/base-button.component'
import type { CollectionCardButtonComponentProps } from '@/components/elements/button/collection-card-button.component'
import { CollectionCardButtonComponent } from '@/components/elements/button/collection-card-button.component'

export const DisabledButtonComponent: React.FC<
  CollectionCardButtonComponentProps & BaseButtonComponentProps
> = (props) => {
  return <CollectionCardButtonComponent {...props} bg={bg} />
}
