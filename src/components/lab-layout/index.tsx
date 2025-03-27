import { Footer } from '../footer'

export interface LabLayoutProps {
  children: React.ReactNode
}
export const LabLayout: React.FC<LabLayoutProps> = (props) => {
  return (
    <div className="background-color">
      {props.children}
      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  )
}
