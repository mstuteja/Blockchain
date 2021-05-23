const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data
    }

    toString(){
        return '\nBlock details:\n\nTimeStamp: '+ this.timestamp+ '\nLastHash:' + this.lastHash.substring(0,30)+ '\nHash:' + this.hash.substring(0,30)+ '\nData:' + this.data+"\n";
    }

    static genesis(){
        return new this('hello','yo','he','hahahahahah');
    }
    
    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp,lastHash,data);
        return new this(timestamp,lastHash,hash,data);
    }

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return Block.hash(timestamp,lastHash,data);
    }

}

module.exports= Block;