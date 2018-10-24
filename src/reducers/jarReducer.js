import { UPDATE_JAR } from '../actions/jarActions'

export const jarReducer = (state = [], { type, payload }) => {
  switch(type) {
    case UPDATE_JAR:
      return payload.jar
    default:
      return state
  }
}