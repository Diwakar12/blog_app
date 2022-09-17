import axios from "axios";

export const get = async (url) => {
  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => {
     // trackException(error);
      throw error;
    });
};
export const post = async (url, data, configuration = null) => {
  return axios
    .post(url, data, configuration)
    .then((response) => response)
    .catch((error) => {
     // trackException(error);
      throw error;
    });
};

export const put = async (url, data) => {
  return axios
    .put(url, data)
    .then((response) => response)
    .catch((error) => {
     // trackException(error);
      throw error;
    });
};

export const deleteReq = async (url) => {
  return axios
    .delete(url)
    .then((response) => response)
    .catch((error) => {
      //trackException(error);
      throw error;
    });
};
