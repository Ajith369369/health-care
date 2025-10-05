const resetApp = () => {

  const cookies = document.cookie
    .split('; ')
    .reduce((acc, currentCookie) => {
      const [name, ...valParts] = currentCookie.split('=');
      const value = valParts.join('=');
      acc[name] = decodeURIComponent(value);
      return acc;
    }, {});

  console.log(cookies);

  // Remove cookies
  /* document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }); */

  // Optional: clear localStorage/sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  // Redirect to home
  window.location.href = "/";

  console.log("App has been reset");
};

export default resetApp;
