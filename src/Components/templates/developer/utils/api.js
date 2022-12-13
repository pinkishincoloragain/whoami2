import config from "../../../config.json";

export const getProjects = async () => {
  const { data } = await fetch(`https://api.github.com/users/${config.social.github}/repos`);
  return data;
};

export const getReadme = async () => {
  const { data } = await fetch(config.readmeUrl);
  return data;
};

export const getWeather = async city => {
  try {
    const { data } = await fetch(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await fetch("https://api.quotable.io/random");
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
