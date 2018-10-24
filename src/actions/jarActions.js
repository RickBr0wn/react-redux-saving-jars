export const UPDATE_JAR = 'UPDATE_JAR'

export const updateJar = newJar => {
  return {
    type: UPDATE_JAR,
    payload: {
      jar: newJar
    }
  }
}