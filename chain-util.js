const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); //Bitcoin uses the same


class ChainUtil{
    static genKeyPair(){
        return ec.genKeyPair();
    }
}

module.exports = ChainUtil;