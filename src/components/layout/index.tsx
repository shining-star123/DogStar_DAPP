import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'

import MobileBrand from '../../assets/images/public-aqua.svg'
import { HeaderComponent } from '../header'
import { MobileHeaderComponent } from '../mobile-header'
import { StatusBarComponent } from '../status-bar'

import styles from './layout.module.css'

const LayoutComponent: React.FC<PropsWithChildren> = memo(
  ({ children, ...rest }) => {
    return (
      <div className={styles.layout} {...rest}>
        <HeaderComponent />
        <div className={styles.container}>{children}</div>
        <div className={styles.grid}></div>
      </div>
    )
  },
)
LayoutComponent.displayName = 'Layout'

export { LayoutComponent }
