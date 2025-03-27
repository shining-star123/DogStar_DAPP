import styles from './styles.module.css'

export interface LiveBarComponentProps {
  value: number
}

export const LiveBarComponent = () => {
  return (
    <div className={`${styles.container} rounded-3xl p-1`}>
      <div className="rounded-3xl relative">
        <p className="text-[8px] md:text-xs text-[#24FF87] px-2">
          DLM LIVE BAR
        </p>
        <div className="flex justify-end absolute top-0 h-3 md:h-4 w-full">
          <div className={`w-[70%] relative ${styles.livebar}`}>
            <div className="absolute top-0"></div>
            <div className="absolute top-0"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
