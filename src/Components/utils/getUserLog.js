//creating function to load ip address from the API

const getUserLog = async () => {
  const res = await fetch("http://www.geoplugin.net/json.gp");
  const data = await res.json();

  return {
    ip: data.geoplugin_request,
    city: data.geoplugin_region,
  };
};

export { getUserLog };
