import bg from '@/assets/images/collection/collection-deck-button.png'
import { BaseButtonComponentProps } from '@/components/elements/button/base-button.component'
import {
  CollectionCardButtonComponent,
  CollectionCardButtonComponentProps,
} from '@/components/elements/button/collection-card-button.component'

export const CollectionDeckButtonComponent: React.FC<
  BaseButtonComponentProps & CollectionCardButtonComponentProps
> = (props) => {
  return <CollectionCardButtonComponent bg={bg} {...props} />
}
