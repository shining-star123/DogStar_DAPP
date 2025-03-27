export interface BaseButtonComponentProps {
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  bg?: string
}
export const BaseButtonComponent: React.FC<BaseButtonComponentProps> = (
  props,
) => {
  return (
    <button
      className={`relative button min-w-[120px] ${props.className}`}
      onClick={props.onClick}
    >
      {props.bg && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
          <img src={props.bg} alt="" className="w-full h-full" />
        </div>
      )}
      <div className="relative z-20 w-full flex justify-center">
        {props.children}
      </div>
    </button>
  )
}
