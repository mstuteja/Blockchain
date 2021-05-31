const {INIT_BAL} = require('../config');
const ChainUtil = require('../chain-util');

class Wallet{
    constructor(){
        this.balance = INIT_BAL;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString(){
        return `Wallet-
        public_key:  ${this.publicKey.toString()}
        balance   :  ${this.balance}`
    }
}

module.exports = Wallet;