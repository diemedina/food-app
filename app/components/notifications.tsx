"use client"

import { useNotificationsStore } from '../store/notifications'
import style from './components.module.css'

export default function Notifications() {
  const { notifications } = useNotificationsStore()

  return (
    <div className={style.notifications}>
      {
        notifications.map((notification) => (
          <div key={notification.id} className={style.notification}>
            <i className='material-symbols-outlined'>check</i>
            {notification.description}
          </div>
        ))
      }
    </div>
  )
}