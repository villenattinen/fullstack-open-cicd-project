import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    createNotification(_, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    },
  }
})

export const { createNotification, clearNotification } = notificationSlice.actions

export const setNotification = (notification, timeShownInSeconds) => {
  return async dispatch => {
    dispatch(createNotification(notification))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeShownInSeconds * 1000)
  }
}

export default notificationSlice.reducer