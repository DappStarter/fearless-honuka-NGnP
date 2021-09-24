require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember assume hover prize success gentle'; 
let testAccounts = [
"0x3113723d6a8d2e6174ef8a9669e8c441156593ed639da4ead26c8096d63a03f6",
"0xd75927e5cc0705a4f63064220ac6b0c0e1dae239b8cb602af1ba665b95d23172",
"0x9e091936e17ccfe3bcc91f2df696956267a58601af4718cb5fab7682779b4c03",
"0x69b1c3585704061720ac629016ef4a74a228d0b8713997ddd87521956b3774fb",
"0x912ab771c50bd35dc061d068df90d476d893fec973b60bdeb2dc48e2cb564505",
"0xda30cc44867ee14869828d1760fb1e02e4f6c3724f08cdb370b1bdd65cdee9f9",
"0x8558f08a5dfbb21a810052655ba4061fcb6bddeb911849023c777355e66da507",
"0x8e128665a03b873b16186e54852e235faae48bb0540b8fe0961602fdb71489f3",
"0xe51f19f23ebba6d514d05adfc86601d8e7a7e0284d96258ad07fbaf8cfaf640c",
"0x3e2c8eb5e0c4c1fc936599677468450e09ae737b452587c9b07b42c1a201cd9a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


