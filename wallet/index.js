const {INIT_BAL} = require('../config');

class Wallet{
    constructor(){
        this.balance = INIT_BAL;
        this.keyPair = null;
        this.publicKey = null;
    }

    toString(){
        return `Wallet-
        public_key:  ${this.publicKey.toString()}
        balance   :  ${this.balance}`
    }
}

module.exports = Wallet;