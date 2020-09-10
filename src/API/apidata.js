const apidata = (() => {
  const KEY_API = '90c704a85bddb1baa24fcd3058cc5d3c';

  const fetchData = async () => {
    const right = `limit=10&offset=3&apikey=${KEY_API}`;
    const format = ['hardcover&', 'comic&', 'magazine&', 'graphic%20novel&'];
    const endpoint = 'https://gateway.marvel.com/v1/public/comics?format=';
    let i = 0;
    let answ = [];
    while (i < 4) {
      const aux = endpoint.concat(format[i]).concat(right);
      /* eslint-disable no-await-in-loop */
      answ = answ.concat(await (await fetch(aux).then(res => res.json())
        .catch(error => 'Error:'.concat(error))));
      i += 1;
    }
    const data = answ;
    return data;
  };

  return {
    fetchData,
  };
})();

export default apidata;
