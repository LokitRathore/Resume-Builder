function encryption(password) {
  let final = "";
  for (let i in password) {
    const val = String.fromCharCode(password.charCodeAt(i) + 10);
    final += val;
  }
  return final;
}

function decryption(fin) {
  let final = "";
  for (let i in fin) {
    const val = String.fromCharCode(fin.charCodeAt(i) - 10);
    // const val = password.charCodeAt(i)
    final += val;
    // console.log(password.charCodeAt(i))
  }
  return final;
}

export { encryption, decryption };
