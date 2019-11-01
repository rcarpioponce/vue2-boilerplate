/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
import axios from "axios";

export default {
  getList({
    commit,
    dispatch,
  }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/brand/list")
        .then(res => {
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
          //}
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  add({
    commit,
    dispatch

  }, brand) {
    return new Promise((resolve, reject) => {
      axios
        .post("/brand/register", brand)
        .then(res => {
          console.log(res.data);
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
          //}
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  edit({
    commit,
    dispatch

  }, brand) {
    return new Promise((resolve, reject) => {
      axios
        .put("/brand/update?cod_brand=" + brand.cod_brand, brand)
        .then(res => {
          console.log(res.data);
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
          //}
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  delete({
    commit,
    dispatch

  }, cod_brand) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/brand/delete?cod_brand=" + cod_brand)
        .then(res => {
          console.log(res.data);
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
          //}
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};