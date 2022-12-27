const useIP = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  const city = data.city;
  const ip = data.ip;

  return { ip, city };
};

export default useIP;
