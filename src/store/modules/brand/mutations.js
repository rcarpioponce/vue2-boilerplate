/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

export default {
  changeShowBrandModal(state) {
    state.showBrandModal = !state.showBrandModal;
  },
  changeShowConfirmModal(state) {
    state.showConfirmModal = !state.showConfirmModal;
  },
  emptyBrand(state) {
    state.brand = {
      cod_brand: '',
      name: '',
      icon: '',
      code: '',
      date_register: ''
    };
  },
  setBrand(state, payload) {
    state.brand = payload;
  }
};