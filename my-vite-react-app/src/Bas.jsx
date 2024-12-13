import React, { useEffect } from 'react';
import { BAS, Offchain, SchemaEncoder, SchemaRegistry } from "@bnb-attestation-service/bas-sdk";
import { ethers } from 'ethers';


const Bas = () => {

    useEffect(() => {
        const init = () => {
            const BASContractAddress = "0x6c2270298b1e6046898a322acB3Cbad6F99f7CBD"; //bnb testnet

            // Initialize the sdk with the address of the BAS Schema contract address
            const bas = new BAS(BASContractAddress);

            // Gets a default provider (in production use something else like infura/alchemy)
            const provider = ethers.providers.getDefaultProvider();

            // Connects an ethers style provider/signingProvider to perform read/write functions.
            // MUST be a signer to do write operations!
            bas.connect(provider);
        }
        init();
    }, [])

    const registerSchema = async () => {
        const schemaRegistryContractAddress = "0x08C8b8417313fF130526862f90cd822B55002D72";
        const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

        schemaRegistry.connect(signer);

        const schema = "string name";
        const resolverAddress = "0x0000000000000000000000000000000000000000";// bnb testnet
        const revocable = true;

        const transaction = await schemaRegistry.register({
            schema,
            resolverAddress,
            revocable,
        });

        // Optional: Wait for transaction to be validated
        await transaction.wait();
    }


    return (
        <div className='Bas'>
            <h1>Bas</h1>
            <button onClick={registerSchema}>click</button>
        </div>
    );
}

export default Bas;