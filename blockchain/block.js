const SHA256 = require('crypto-js/sha256');
const DIFFICULTY = 4;

class Block{
    constructor(timestamp, lastHash, hash, data, nonce){
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;
        this.nonce=nonce;
    }

    toString(){
        return '\nBlock details:\n\nTimeStamp: '+ this.timestamp+ '\nLastHash:' + this.lastHash.substring(0,30)+ '\nHash:' + this.hash.substring(0,30)+ '\nData:' + this.data+"\n"+ '\Nonce:' + this.nonce+"\n";
    }

    static genesis(){
        return new this('Gensis Start','---','anythingrandom','random',0);
    }
    
    static mineBlock(lastBlock, data){
        let timestamp;
        const lastHash = lastBlock.hash;
        let nonce,hash;
        nonce=0;
        do{
            timestamp = Date.now();
            nonce++;
            hash = Block.hash(timestamp,lastHash,data);
        }while(hash.substring(o,DIFFICULTY)!== '0'.repeat(DIFFICULTY));
    
        return new this(timestamp,lastHash,hash,data,nonce);
    }

    static hash(timestamp,lastHash,data,nonce){
        return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
    }

    static blockHash(block){
        const {timestamp, lastHash, data, nonce} = block;
        return Block.hash(timestamp,lastHash,data, nonce);
    }

}

module.exports= Block;