import config from '../config';

const BabyBookApiService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {});
  },
  postEvents() {
    return fetch(`${config.API_ENDPOINT}/events`);
  },
};
