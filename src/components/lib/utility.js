export default class Utility {

  static getData(url) {
    return fetch(url).then((res) => res.json());
  }
}
