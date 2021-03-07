// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const Verifier = artifacts.require("./Verifier.sol");
const fs = require('fs');
const proofTree = JSON.parse(fs.readFileSync("../zokrates/code/square/proof.json"));

contract('TestSquareVerifier', accounts => {

    before('setup contract', async () => {
        proof = proofTree["proof"];
        verifier = await Verifier.new();
    });

    // Test verification with correct proof
    // - use the contents from proof.json generated from zokrates steps
    it('verifies the proof correctly', async () => {
        let result = await verifier.verifyTx.call(proof.a, proof.b, proof.c, proofTree["inputs"]);
        assert(result == true);
    });

    // Test verification with incorrect proof
    it('verifies the proof incorrectly', async () => {
        let result = await verifier.verifyTx.call(proof.a, proof.b, proof.a, proofTree["inputs"]);
        assert(result == false);
    });
});
