import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Info } from './info-rounded.svg'
import { ReactComponent as InfoBorder } from './info_black_24dp.svg'
import { ReactComponent as Copy } from './content_copy_black_24dp.svg'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as ArrowDown } from './arrow-down.svg'
import { ReactComponent as MagGlass } from './mag-glass.svg'
import { ReactComponent as Back } from './arrow-back.svg'
import { ReactComponent as Reload } from './reload.svg'
import { ReactComponent as Checkmark } from './checkmark.svg'

const ArrowLeft = () => <Arrow className="rotate-180 scale-50" />
const ArrowRight = () => <Arrow className="scale-50" />
const ArrowUp = () => <ArrowDown className="rotate-180" />
const ArrowLeftGray = () => <Arrow className="rotate-180 scale-50 grayscale" />
const ArrowRightGray = () => <Arrow className="scale-50 grayscale" />

const object = {
  Close,
  Info,
  InfoBorder,
  Copy,
  Reload,
  Checkmark,
  Back,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  MagGlass,
  ArrowLeftGray,
  ArrowRightGray,
}

export default object
