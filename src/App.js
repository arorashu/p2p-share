import React from 'react';
import './App.css';
// import SDK from "dat-sdk";

function App() {

    return (
        <div className="App">
            <h2> P2P file share </h2>
            
            {/* <div>Select file to share: </div>
            <input type="file" name="file-upload" id="file-upload" accept="image/png, image/jpeg"/> */}
            <br/>

            <div>Enter message to share: </div>
            <input type="text" name="send-message" id="send-message"/>
            
            <button onClick={createDat} style={{margin: "5px"}}> Start Sharing </button>
            <div> sharing link: <div id="share-link"></div> </div>
            
            <br/>
            <input type="text" name="receive-link" id="receive-text"/>
            <button onClick={receiveDat} style={{margin: "5px"}}> Receive files </button>
            <div> received value: <div id="received-val"></div> </div>
            {/* <div> received image: <div id="received-img"></div> </div> */}
        </div>
    );
}

async function createDat() {
    const datSdk = window.datSdk;

    const { DatArchive } = datSdk;

    const archive = await DatArchive.create({
        title: 'magic-dat'
    });

    // const selectedFile = document.getElementById('file-upload').files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile)
    const sendMessage = document.getElementById('send-message').value;
    // await archive.writeFile('/img.png', selectedFile, 'base64');
    await archive.writeFile('/message', sendMessage);

    // Open this in Beaker
    // window.datUrl = archive.url;
    document.getElementById("share-link").innerHTML = archive.url;
    console.log(archive.url);
}

async function receiveDat() {
    const { DatArchive } = window.datSdk;
    // Load the archive for the dat foundation website
    const datUrl = document.getElementById("receive-text").value;
    console.log("reading: " + datUrl);
    const archive = await DatArchive.load(datUrl);

    // Read a file and parse it as JSON
    var filenames = await archive.readdir('/')
    console.log("filenames: " + filenames);
    // const datJSON = await archive.readFile('/dat.json');
    // const receivedImage = await archive.readFile('/img.png', 'base64');
    const receivedMessage = await archive.readFile('/message');

    // document.getElementById("received-val").innerHTML = datJSON;
    document.getElementById("received-val").innerHTML = receivedMessage;


    console.log("received: " + receivedMessage);
    // console.log("received image: " + receivedImage);
}

export default App;
