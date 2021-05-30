// const Block = require('./block');

// const temp = Block.mineBlock(Block.genesis(),"bruhhh");
// console.log(temp.toString());

const Blockchain = require('./blockchain');
const bc = new Blockchain();
for(let i=0;i<10;i++){
    console.log(bc.addBlock(`hello ${i}`).toString());
}
