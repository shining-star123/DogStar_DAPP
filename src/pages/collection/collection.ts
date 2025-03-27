import avatar_1 from '@/assets/images/collection/avatar-1.png'
import avatar_2 from '@/assets/images/collection/avatar-2.png'
import avatar_3 from '@/assets/images/collection/avatar-3.png'
import avatar_4 from '@/assets/images/collection/avatar-4.png'

import avatar_gray from '@/assets/images/collection/avatar-gray-1.png'
import avatar_black from '@/assets/images/collection/avatar-black-1.png'

import type { CardInterface } from '@/common/models'

export const card = {
  initial_power: 14,
  image: avatar_2,
  attr: {
    status: 'available',
  },
}
export const cards: CardInterface[] = [
  {
    id: 1,
    initial_power: 28,
    image: avatar_1,
    attr: {
      status: 'available',
    },
  },
  {
    id: 2,
    initial_power: 28,
    image: avatar_2,
    attr: {
      status: 'available',
    },
  },
  {
    id: 3,
    initial_power: 28,
    image: avatar_3,
    attr: {
      status: 'staked',
    },
  },
  {
    id: 1,
    initial_power: 28,
    image: avatar_4,
    attr: {
      status: 'deck',
    },
  },
  ...new Array(12).fill(card),
]

export const disabledCards: CardInterface[] = new Array(16).fill({
  initial_power: 28,
  image: avatar_gray,
  attr: {
    status: 'disabled',
  },
})

export const blockedCards: CardInterface[] = new Array(16).fill({
  initial_power: 28,
  image: avatar_black,
  attr: {
    status: 'blocked',
  },
})
