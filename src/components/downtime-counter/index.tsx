import Join from '../../assets/images/join-button.svg'

export interface DownTimeCounterComponentProps {
  time?: string[]
}
export const DownTimeCounterComponent: React.FC<
  DownTimeCounterComponentProps
> = (props) => {
  const { time = ['00', '00', '00', '00'] } = props

  return (
    <div className="flex gap-1">
      <div className="w-[67px]">
        <img src={Join} alt="" />
      </div>
      <div className="text-[#00FFE7]">
        <div>
          <p className="text-base">NEXT ROUND</p>
        </div>
        <div className="flex">
          {['Day', 'Hour', 'Miute', 'Seconds'].map(
            (item: string, index: number) => (
              <div key={index}>
                <div className="text-[27px] font-semibold leading-none">
                  {time[index]}
                  {index !== 3 && <span>:</span>}
                </div>
                <div className="text-[9px] font-medium">{item}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
