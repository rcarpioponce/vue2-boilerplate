/* ============
 * Getters for the user module
 * ============
 *
 * The getters that are available on the
 * user module.
 */

export default {
  showBrandModal: state => {
    return state.showBrandModal;
  },
  showConfirmModal: state => {
    return state.showConfirmModal;
  },
  getBrand: state => {
    return state.brand;
  }
};