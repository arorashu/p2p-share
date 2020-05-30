import React from 'react';
import './App.css';
import IPFS from "ipfs";

function IPFSApp() {

    return (
        <div className="App">
            <h2> P2P file share </h2>

            {/* <div>Select file to share: </div>
            <input type="file" name="file-upload" id="file-upload"
            // accept="image/png, image/jpeg, pdf"
            /> */}
            <br />

            <div>Enter message to share: </div>
            <input type="text" name="send-message" id="send-message" />

            <button onClick={createShare} style={{ margin: "5px" }}> Start Sharing </button>
            <div> sharing link: <div id="share-link"></div> </div>

            <br />
            <input type="text" name="receive-link" id="receive-text" />
            <button onClick={receiveFile} style={{ margin: "5px" }}> Receive files </button>
            <div> received value: <div id="received-val"></div> </div>
            <div> received image: <img alt="received-img"></img> </div>

            <p>File receievd: {window.receivedFilename}</p>
            <a href="data..." target="_blank">
                <button> Download </button>
            </a>
        </div>
    );
}

async function createShare() {
    const node = await IPFS.create();
    // const data = 'Hello, BORG';
    const data = document.getElementById("send-message").value;
    const results = node.add(data);
    for await (const { cid } of results) {
        // CID (Content IDentifier) uniquely addresses the data
        // and can be used to get it again.
        console.log(cid.toString())
    }


    console.log("IPFS share started");
}

async function receiveFile() {
    const node = await IPFS.create()

    const ipfsHash = document.getElementById("receive-text").value;
    const stream = node.cat(ipfsHash);
    let data = '';
    
    for await (const chunk of stream) {
      // chunks of data are returned as a Buffer, convert it back to a string
      data += chunk.toString();
    }
    
    console.log(data);


    console.log("IPFS receive file");
}

export default IPFSApp;
