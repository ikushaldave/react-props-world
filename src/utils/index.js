let validUserInfo = { email: "admin@admin.com", passwrod: "qwerty" };

function verifyLogin(email, password) {
  return new Promise((res, rej) => {
    if (validUserInfo.email === email && validUserInfo.passwrod === password) {
      setTimeout(() => {
        res({
          name: "Arya Stark",
          avatarURL: "./arya.jpeg",
          description:
            "Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.",
          allegiance: "House Stark"
        });
      }, 2000);
    } else {
      rej("User info is not valid!");
    }
  });
}

export default verifyLogin;
