export function hasCreatePermission(state) {
  return state.includes('CREATE')
}

export function hasReadPermission(state) {
  return state.includes('READ')
}

export function hasUpdatePermission(state) {
  return state.includes('UPDATE')
}

export function hasDeletePermission(state) {
  return state.includes('DELETE')
}
