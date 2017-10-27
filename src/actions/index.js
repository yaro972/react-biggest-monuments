export const SELECTED_MONUMENT = 'SELECTED_MONUMENT';

export default function selectMonument(monument) {
  return {
    type: SELECTED_MONUMENT,
    selected: monument
  }
}
