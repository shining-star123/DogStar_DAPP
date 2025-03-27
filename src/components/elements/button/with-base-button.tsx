import { BaseButtonComponent } from './base-button.component'

export const withBaseButton = (Layout: React.ComponentType) => () => {
  return (
    <BaseButtonComponent>
      <Layout></Layout>
    </BaseButtonComponent>
  )
}
