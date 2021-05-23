const { it, expect } = require('@jest/globals');
const { default: expectationResultFactory } = require('jest-jasmine2/build/expectationResultFactory');
const Block = require('./block');

const Blockchain = require('./index');

describe('blockchain',()=>{
    let bc,bc2;
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts with genesis block',()=> {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block',()=>{
        const data = 'bruhh';
        bc.addBlock(data);
        
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

    it('validates a valid chain',()=>{
        bc2.addBlock('bhh');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('invalidayes a chain with a bad genesis block',()=>{
        bc2.chain[0].data = 'Bad data';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('onvalidates a corrupt chain',()=>{
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false); 
    });

    it('replace the chain with a valid chain',()=>{
        bc2.addBlock("manu");
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    });

    it('does not replace the chain with one of less tha/equal to length',()=>{
        bc.addBlock('foo');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).not.toEqual(bc2.chain);
    });

});