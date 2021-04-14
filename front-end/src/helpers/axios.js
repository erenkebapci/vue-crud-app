import axios from "axios";

const api = "http://localhost:3000/";

export const axiosHelper = {
  getAll(endpoint, callback) {
    axios
      .get(api + endpoint)
      .then((r) => {
        callback(r);
      })
      .catch(() => callback("An error occured fetching data."));
  },
  create(endpoint, body, callback) {
    axios
      .post(api + endpoint, body)
      .then((r) => {
        callback(r);
      })
      .catch(() => callback("An error occured when creating user."));
  },
  deleteById(endpoint, id, callback) {
    axios
      .delete(api + endpoint + id)
      .then((r) => {
        callback(r);
      })
      .catch(() => callback("An error occured when deleting user."));
  },
  updateById(endpoint, id, body, callback) {
    axios
      .put(api + endpoint + id, body)
      .then((r) => {
        callback(r);
      })
      .catch(() => callback("An error occured when updating user."));
  },
};
