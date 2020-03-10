require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rescue machine unusual gesture lock fog success'; 
let testAccounts = [
"0x14644872c5125aefcf18fdfcb1636dae17329c9b9b04d1cd4f527c6186ad228a",
"0x4709585ddd8fde659375d7f7b4fc539f874f9fbcfb424f22b6ce60000efa3432",
"0xb25a2da56255b7e949021f22b812eb94859da047325746066b3873e3037cf33c",
"0xda2a3e04679a930c3efbd2516d5b5424766e66efc9acb4a103986e9e80b0ca56",
"0x7b13bfd29e05cc5f1a34e52f0741d62e317de94ec524e64270ace4a2f523e71b",
"0x4f44d17f8e05550498377ea38dbf329e6edd2880e09ecd16975ca0070787b176",
"0x4b6dd11b894a5dda04f975a07b817c851bb731ac881aec3dfcc152420f8fb74c",
"0x20c9dc698cddec62321fbd2d00b497fc2ef15b24508fc03a6b8bfa8cbda28644",
"0x4a295f6d7d01200d1c2c0ea6f455cb38c5710bbdd3f1ddf4be1e5a22f934354c",
"0x382fdc3f3d34a99985b17276cd6aaba5392fa60e3edc9d03d7a002b6d639fd4a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
