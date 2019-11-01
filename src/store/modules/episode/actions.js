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
  }, cod_podcast) {
    return new Promise((resolve, reject) => {
      axios
        .get("/episode/list?cod_brand=COD&cod_podcast=" + cod_podcast)
        .then(res => {
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
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
        .post("/episode/register", episode)
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

  }, episode) {
    return new Promise((resolve, reject) => {
      axios
        .put("/episode/update?cod_episode=" + brand.cod_episode, episode)
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

  }, cod_episode) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/brand/delete?cod_episode=" + cod_episode)
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