/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

export default {
  setJWT(state, payload) {
    state.jwt = payload;
  },
  clear(state) {
    state.jwt = null;
  },
  changeViewHamburgerMenu(state) {
    state.viewHamburgerMenu = !state.viewHamburgerMenu;
  },
  changeShowBrandModal(state) {
    state.showBrandModal = !state.showBrandModal;
  },
  changeLoader(state) {
    state.loading = !state.loading;
  }
};