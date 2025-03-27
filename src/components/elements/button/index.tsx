import PrimaryBg from '@/assets/images/primary-button-bg.png'
import SecondaryBg from '@/assets/images/secondary-button-bg.png'
import PrimaryRoundedBg from '@/assets/images/primary-rounded-button-bg.png'
import SecondaryRoundedBg from '@/assets/images/secondary-rounded-button-bg.png'

import './button.css'

export interface ButtonComponentProps {
  variant?: 'primary' | 'secondary' | 'transparent'
  rounded?: 'lg' | 'md'
  text?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  return (
    <button
      className={`relative button ${
        props.variant === 'transparent' ? 'py-1' : ''
      } min-w-[120px]`}
      onClick={props.onClick}
    >
      <div className="absolute w-full h-full">
        {props.variant !== 'transparent' && (
          <img
            src={
              props.variant === 'primary'
                ? props.rounded === 'lg'
                  ? PrimaryRoundedBg
                  : PrimaryBg
                : props.rounded === 'lg'
                  ? SecondaryRoundedBg
                  : SecondaryBg
            }
            className="w-full h-full"
            alt=""
          />
        )}
      </div>
      <div
        className={`${
          props.variant === 'transparent'
            ? 'static rounded-full bg-transparent border border-[#00FFFF]'
            : ''
        } ${
          props.variant === 'transparent'
            ? 'text-[#00FFFF]'
            : props.variant === 'primary'
              ? 'text-white'
              : 'text-[#1C1D22]'
        } text-center w-full flex flex-col justify-center`}
      >
        <div className="flex justify-center px-2 md:px-6">
          <div
            className={`flex gap-1 md:gap-2 text-base md:text-base leading-none font-extrabold text-center button-text px-1 md:px-2 font-core-sans-c z-10`}
          >
            <p className="py-3">{props.text}</p>
            <div className="flex flex-col justify-center">{props.icon}</div>
          </div>
        </div>
      </div>
    </button>
  )
}
