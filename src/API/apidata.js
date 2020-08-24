const apidata = (() => {
  const KEY_API = '90c704a85bddb1baa24fcd3058cc5d3c';

  const fetchData = async () => {
    const endpoint = `https://gateway.marvel.com/v1/public/comics?limit=10&apikey=${KEY_API}`;
    const data = await (await fetch(endpoint)).json();
    return data;
  };

  return {
    fetchData,
  };
})();

export default apidata;
