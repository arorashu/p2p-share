import React from 'react';
import './App.css';
// import SDK from "dat-sdk";

function App() {

    return (
        <div className="App">
            <h2> P2P file share </h2>
            <input type="file" name="file-upload" id="file-upload" accept="image/png, image/jpeg"/>
            <button onClick={createDat} style={{margin: "5px"}}> Start Sharing </button>

            <br/>
            <input type="text" name="receive-link" id="receive-text"/>
            <button onClick={receiveDat} style={{margin: "5px"}}> Receive files </button>
            <div id="received-val"></div>
        </div>
    );
}

async function createDat() {
    const datSdk = window.datSdk;

    const { DatArchive } = datSdk;

    const archive = await DatArchive.create({
        title: 'magic-dat'
    });

    const selectedFile = document.getElementById('file-upload').files[0];

    await archive.writeFile('/upload1', selectedFile);

    // Open this in Beaker
    window.datUrl = archive.url;
    console.log(archive.url);
}

async function receiveDat() {
    const { DatArchive } = window.datSdk;
    // Load the archive for the dat foundation website
    const datUrl = document.getElementById("receive-text").value;
    console.log("reading: " + datUrl);
    const archive = await DatArchive.load(datUrl);

    // Read a file and parse it as JSON
    const datJSON = await archive.readFile('/upload1');
    document.getElementById("received-val").innerHTML = datJSON;

    console.log(datJSON);
}

export default App;
