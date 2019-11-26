// Source : https://medium.com/biffures/part-5-hashing-with-sha-256-4c2afc191c40

'use strict';


const H0 = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
];

const K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

/**
 * Rotate to right
 * @param {number} x - An integer to be shifted right
 * @param {number} n - The number of bits by which to shift
 * @param {string} [w] - The bit notation width. Defaults to x.toString(2).length
 * @return {number} The shifted number
 */
function rotr(x, n, w) {
  if (!w) { var w = x.toString(2).length; }
  n = n % w;
  return ((x >>> n) | (x << w - n)) >>> 0 % Math.pow(2, w);
};

/**
 * Rotate to left
 * @param {number} x - An integer to be shifted right
 * @param {number} n - The number of bits by which to shift
 * @return {number} The shifted number
 */
function rotl(x, n) {
  let w = x.toString(2).length;
  n = n % w;
  return ((x << n) | (x >>> w - n)) >>> 0 % Math.pow(2, w);
};

/**
 * SHA-256 logical functions
 */
function Ch(x, y, z) { return (x & y) ^ (~x & z); };

function Maj(x, y, z) {return (x & y) ^ (x & z) ^ (y & z); };

function Σ0(x) { return rotr(x, 2, 32) ^ rotr(x, 13, 32) ^ rotr(x, 22, 32); };

function Σ1(x) { return rotr(x, 6, 32) ^ rotr(x, 11, 32) ^ rotr(x, 25, 32); };

function σ0(x) { return rotr(x, 7, 32) ^ rotr(x, 18, 32) ^ (x >>> 3); };

function σ1(x) { return rotr(x, 17, 32) ^ rotr(x, 19, 32) ^ (x >>> 10); };

/**
 * Padding
 * @param {string} m - The message, a binary string (e.g., 011010)
 * @return {string} A padded message
 */
function pad(m) {
  if (m.length > Math.pow(2, 64)) {
    return console.error('Message out of range.');
  }

  let padding1 = '0'.repeat(512 - ((m.length + 1 + 64) % 512));
  let padding2 = '0'.repeat(64 - m.length.toString(2).length);
  return `${m}1${padding1}${padding2}${m.length.toString(2)}`;
}

/**
 * Parse
 * @param {string} paddedMessage - A padded message of length N x 512
 * @return {array} An array containing 512 segments, further split in 32-bit segments
 * expressed as numbers
 */
function parse(m) {
  //console.log(m)
  let M = m.match(/[0-1]{512}/g);

  return M.map((x) => {
    let arr = x.match(/[0-1]{32}/g);
    return arr.map((x) => {
      return parseInt(x, 2);
    });
  });
};

/**
 * Hash
 * @param {string} m - A binary string to be hashed
 * @return {string} A SHA-256 digest
 */
var sha = function (m) {

  console.log("->", m);
  // console.log("->" ,pad(m))
  // process.exit()
  // Pre-processing
  let M = parse(pad(m));

  // process.exit()
  // Initialize the hash
  let H = [H0];

  // Hash computation
  for (let i = 0, N = M.length; i < N; i++) {

    // Prepare the message schedule
    let W = [];
    for (let t = 0; t < 64; t++) {

      if (t <= 15) {
        W[t] = M[i][t];
      } else {
        W[t] = (σ1(W[t - 2]) + W[t - 7] + σ0(W[t - 15]) + W[t - 16]) % Math.pow(2, 32);
      }
      // console.log(t, '0x' + W[t].toString(16).padStart(8,'0'))
    }

    // Initialize the working variables
    let a = H[i][0];
    let b = H[i][1];
    let c = H[i][2];
    let d = H[i][3];
    let e = H[i][4];
    let f = H[i][5];
    let g = H[i][6];
    let h = H[i][7];
    let T1;
    let T2;

//     console.log(`0x${a.toString(16)}\n0x${b.toString(16)}\n0x${c.toString(16)}
// 0x${d.toString(16)}\n0x${e.toString(16)}\n0x${f.toString(16)}
// 0x${g.toString(16)}\n0x${h.toString(16)}`)
    // Do stuff
    for (let t = 0; t < 64; t++) {
      T2 = (Σ0(a) + Maj(a, b, c)) % Math.pow(2, 32); //Variables temporaires
      T1 = (h + Σ1(e) + Ch(e, f, g) + K[t] + W[t]) % Math.pow(2, 32);
      h = g;
      g = f;
      f = e;
      e = (d + T1) % Math.pow(2, 32);
      d = c;
      c = b;
      b = a;
      a = (T1 + T2) % Math.pow(2, 32);
  //     console.log(`0x${a.toString(16)}\n0x${b.toString(16)}\n0x${c.toString(16)}
  // 0x${d.toString(16)}\n0x${e.toString(16)}\n0x${f.toString(16)}
  // 0x${g.toString(16)}\n0x${h.toString(16)}`)

    }
//     console.log(`0x${a.toString(16)}\n0x${b.toString(16)}\n0x${c.toString(16)}
// 0x${d.toString(16)}\n0x${e.toString(16)}\n0x${f.toString(16)}
// 0x${g.toString(16)}\n0x${h.toString(16)}`)
    // Compute the i-th intermediate hash
    H[i + 1] = [];
    H[i + 1][0] = (a + H[i][0]) % Math.pow(2, 32);
    H[i + 1][1] = (b + H[i][1]) % Math.pow(2, 32);
    H[i + 1][2] = (c + H[i][2]) % Math.pow(2, 32);
    H[i + 1][3] = (d + H[i][3]) % Math.pow(2, 32);
    H[i + 1][4] = (e + H[i][4]) % Math.pow(2, 32);
    H[i + 1][5] = (f + H[i][5]) % Math.pow(2, 32);
    H[i + 1][6] = (g + H[i][6]) % Math.pow(2, 32);
    H[i + 1][7] = (h + H[i][7]) % Math.pow(2, 32);

//     console.log(`0x${H[1][0].toString(16)}\n0x${H[1][1].toString(16)}\n0x${H[1][2].toString(16)}
// 0x${H[1][3].toString(16)}\n0x${H[1][4].toString(16)}\n0x${H[1][5].toString(16)}
// 0x${H[1][6].toString(16)}\n0x${H[1][7].toString(16)}`)
//     process.exit()
  }

  function output(hashes) {
    return hashes.map((x) => {
      let hex = (x >>> 0).toString(16);
      return `${hex.padStart(8, '0')}`;
    }).join('');
  }

  return output(H[M.length]);
};

function codePointToUtf8BinaryNotation(codePoint) {

  const str = codePoint.toString(2);
  const len = str.length;

  // 0xxxxxxx
  if (len <= 7) {
    let padding = '0'.repeat(7 - len);
    return `0${padding}${str}`;
  }

  // 110xxxxx 10xxxxxx
  else if (len <= 11) {
    let padding = '0'.repeat(11 - len);
    return `110${padding}${str.slice(0, -6)} 10${str.slice(-6)}`;
  }

  // 1110xxxx 10xxxxxx 10xxxxxx
  else if (len <= 16) {
    let padding = '0'.repeat(16 - len);
    return `1110${padding}${str.slice(0, -12)} 10${str.slice(-12, -6)} 10${str.slice(-6)}`;
  }

  // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
  else if (len <= 21) {

    // Special case where bits can still fit in the last 3 octets
    if (len == 17) {
      return `11110000 100${str.slice(0, -12)} 10${str.slice(-12, -6)} 10${str.slice(-6)}`;
    }

    let padding = '0'.repeat(21 - len);
    return `11110${padding}${str.slice(0, -18)} 10${str.slice(-18, -12)} 10${str.slice(-12, -6)} 10${str.slice(-6)}`;
  }

  // Error
  else {
    console.error('Did not receive a valid Unicode binaryNotation');
  }

};

var toUTF8OctetString = function (str) {
  let octetStringArray = [];

  // Use for..of to avoid counting of surrogate pairs
  // see: https://mathiasbynens.be/notes/javascript-unicode
  for (let symbol of str) {
    let codePoint = symbol.codePointAt(0);
    let utf8BinaryNotation = codePointToUtf8BinaryNotation(codePoint);
    octetStringArray.push(utf8BinaryNotation);
  };

  return octetStringArray.join(' ');

};

/**
 * Hash a UTF-8 string
 * @param {string} string - A string, encoded using UTF-8
 * @return {string} A SHA-256 digest
 */
var hashString = function (str) {
  return sha(toUTF8OctetString(str).replace(/ /g, '')); // remove whitespqces
}


//echo -n ' ' | shasum -a 256
console.log(hashString(" "))
