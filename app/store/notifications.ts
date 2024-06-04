import { create } from 'zustand'
import { Notification } from '../utils/types';

type State = {
  notifications: Notification[]
}

type Actions = {
  addNotification: (description: string) => void
}

export const useNotificationsStore = create<State & Actions>((set) => ({
  notifications: [],
  addNotification(description: string) {
    const model = { id: Math.random().toString(36).substr(2, 9), description }
    set((state) => ({ notifications: [...state.notifications, model] }))

    setTimeout(() => {
      set((state) => ({ notifications: state.notifications.filter(i => i.id != model.id) }))
    }, 1500)    
  }
}));