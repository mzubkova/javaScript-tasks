function isCoprime(a, b) {
  var num;

  while (b) {
    num = a % b;
    a = b;
    b = num;
  }

  if (Math.abs(a) == 1) {
    return true;
  }

  return false;
}

console.log(isCoprime(5, 6));

function generateRSA(p, q, e) {
  let n = p * q;
  let eulers = (p - 1) * (q - 1);

  if (e % e === 0 && e < eulers && isCoprime(e, eulers) === true) {
    console.log("true");
  } else {
    console.log("false");
  }

  let openKey = [e, n];

  // secret key
  let d = 17;

  // check secret key => checkD === 1
  if ((d * e) % eulers) {
    let secretKey = [d, n];
    console.log("secretKey", secretKey);
  }

  // encoded
  let c = 19;
  if (c > n) {
    return false;
  }

  let encoded = Math.pow(c, e) % n;

  // decoded
  let decoded = Math.pow(encoded, d) % n;

  console.log("encoded111", encoded);
  console.log("decoded111", decoded);
  console.log("openKey", openKey);
  console.log("eulers", eulers);
  console.log("n", n);
  return decoded;
}

console.log(generateRSA(3, 7, 5));
