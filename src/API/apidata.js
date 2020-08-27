const apidata = (() => {
  const KEY_API = '90c704a85bddb1baa24fcd3058cc5d3c';

  const fetchData = async () => {
    const right = `limit=5&offset=3&apikey=${KEY_API}`;
    const format = ["comic&", "magazine&", "graphic%20novel&", "hardcover&"]
    const endpoint = `https://gateway.marvel.com/v1/public/comics?format=`
    let i = 0
    let answ = [];
    while (i < 4) {
      let aux = endpoint.concat(format[i]).concat(right);
      answ = answ.concat(await(await fetch(aux)).json());
      i += 1;
    }
    const data = answ;
    return await data;
  };

  return {
    fetchData,
  };
})();

export default apidata;