import { combineReducers } from 'redux'

const historical = (state = [], action) => {
  switch (action.type) {
    case 'MINER_DATA':
      return action.data.historical
    default:
      return state
  }
}

const totalSharesSubmitted = (state = 0, action) => {
  switch (action.type) {
    case 'MINER_TOAL_VALID_SHARES':
      return action.data.totalSharesSubmitted
    default:
      return state
  }
}

const paymentData = (state = {}, action) => {
  switch (action.type) {
    case 'MINER_PAYMENT_DATA':
      return action.data
    default:
      return state
  }
}

const isPaymentSettingProcessing = (state = false, action) => {
  switch (action.type) {
    case 'IS_PAYMENT_SETTING_PROCESSING':
      return action.data
    case 'UPDATE_PAYMENT_METHOD_SETTING':
      return false
    default:
      return state
  }
}

const minerPaymentTxSlate = (state = '', action) => {
  switch (action.type) {
    case 'MINER_PAYMENT_TX_SLATE':
      return action.data
    default:
      return state
  }
}

const isPayoutScriptLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_PAYOUT_SCRIPT_LOADING':
      return action.data
    default:
      return state
  }
}

const paymentFormFeedback = (state = null, action) => {
  switch (action.type) {
    case 'PAYMENT_FORM_FEEDBACK':
      return action.data
    case 'IS_PAYMENT_SETTING_PROCESSING':
      if (action.data) {
        return null
      } else {
        return {
          message: 'There has been an issue with your submission. Please try again later.',
          color: 'danger'
        }
      }
    case 'UPDATE_PAYMENT_METHOD_SETTING':
      return {
        message: 'Form successfully submitted!',
        color: 'success'
      }
    default:
      return state
  }
}

export const minerData = combineReducers({
  historical,
  totalSharesSubmitted,
  paymentData,
  minerPaymentTxSlate,
  isPaymentSettingProcessing,
  isPayoutScriptLoading,
  paymentFormFeedback
})
