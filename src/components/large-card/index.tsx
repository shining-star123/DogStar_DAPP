import { CardInterface } from "@/common/models"

export interface LargeCardComponentProps {
  card?: CardInterface
}
export  const LargeCardComponent: React.FC<LargeCardComponentProps> = (props) => {
  return (
    <div>
      <div>
        {/* header */}
      </div>
      <div className="relative">
        {/* body */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {/* hero */}
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {/* bg */}
        </div>
        <div className="absolute top-0 left-0">
          {/* category icon */}
        </div>
        <div className="absolute top-0 right-0">
          {/* power */}
        </div>
        <div className="flex flex-col justify-end">
          {props.card?.name}
        </div>
      </div>
    </div>
  )
}