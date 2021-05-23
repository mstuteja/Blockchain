const Block = require('./block');

const temp = Block.mineBlock(Block.genesis(),"bruhhh");
console.log(temp.toString());