import axios from 'axios';

module.exports = {
  getLast30Days: () => {
    const last30DaysURL = window.encodeURI(
      `https://fcctop100.herokuapp.com/api/fccusers/top/recent`
    );

    return axios
      .get(last30DaysURL)
      .then(response => response)
      .catch(err => console.error(err));
  },
  getAllTime: () => {
    const allTimeURL = window.encodeURI(
      `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`
    );
    return axios
      .get(allTimeURL)
      .then(response => response)
      .catch(err => console.error(err));
  }
};
