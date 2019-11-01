/* ============
 * Getters for the user module
 * ============
 *
 * The getters that are available on the
 * user module.
 */

export default {
  jwt: state => {
    return state.jwt;
  },
  viewHamburgerMenu: state => {
    return state.viewHamburgerMenu;
  },
  showBrandModal: state => {
    return state.showBrandModal;
  },
  showLoading: state => {
    return state.loading;
  }
};