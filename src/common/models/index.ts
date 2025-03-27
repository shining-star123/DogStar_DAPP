export interface CardInterface {
  id?: string | number
  name?: string
  description?: string
  category?: string
  level?: number
  image?: string
  initial_power?: number
  max_power?: number
  price_in_terry?: number
  price_in_xstar?: number
  attr?: any // status = staked, blocked, disabled, available, deck
}
