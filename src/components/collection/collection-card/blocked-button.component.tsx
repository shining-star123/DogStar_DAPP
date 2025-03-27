import bg from '@/assets/images/collection/blocked-buy-button-bg.png'
import type { BaseButtonComponentProps } from '@/components/elements/button/base-button.component'
import type { CollectionCardButtonComponentProps } from '@/components/elements/button/collection-card-button.component'
import { CollectionCardButtonComponent } from '@/components/elements/button/collection-card-button.component'

export const BlockedButtonComponent: React.FC<
  CollectionCardButtonComponentProps & BaseButtonComponentProps
> = (props) => <CollectionCardButtonComponent {...props} bg={bg} />
