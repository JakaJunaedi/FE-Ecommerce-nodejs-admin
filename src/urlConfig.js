// ---------- condition localhost or heroku ------------------
//const baseUrl = location && location.hostname === "localhost" 
//  ? "http://localhost:2000" 
//  : "https://nodejs-ecommerc.herokuapp.com"
//export const api = `${baseUrl}/api`; 

const baseUrl = process.env.API || "https://nodejs-ecommerc.herokuapp.com"; //integration BE HeroKu
//const baseUrl = "http://localhost:2000"; //integration BE local

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
