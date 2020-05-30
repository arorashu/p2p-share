import React from 'react';
import './App.css';
// import SDK from "dat-sdk";

function DatApp() {

    return (
        <div className="App">
            <h2> P2P file share </h2>

            <div>Select file to share: </div>
            <input type="file" name="file-upload" id="file-upload"
                // accept="image/png, image/jpeg, pdf"
            />
            <br />

            {/* <div>Enter message to share: </div>
            <input type="text" name="send-message" id="send-message" /> */}

            <button onClick={createDat} style={{ margin: "5px" }}> Start Sharing </button>
            <div> sharing link: <div id="share-link"></div> </div>

            <br />
            <input type="text" name="receive-link" id="receive-text" />
            <button onClick={receiveDat} style={{ margin: "5px" }}> Receive files </button>
            <div> received value: <div id="received-val"></div> </div>
            <div> received image: <img alt="received-img"></img> </div>

            <p>File receievd: {window.receivedFilename}</p>
            <a href="data..." target="_blank">
                <button> Download </button>
            </a>
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
    try {
        const fileName = selectedFile.name;
        const encodedFile = await toBase64(selectedFile);
        const encodedFileData = encodedFile.split(',');
        await archive.writeFile('/metadata', encodedFileData[0], { encoding: 'utf-8' });
        await archive.writeFile('/name', fileName, { encoding: 'utf-8' });
        await archive.writeFile('/file', encodedFileData[1], { encoding: 'base64' });
        // await archive.writeFile('/img.png', encodedFile, {encoding: 'base64'});

        console.log(encodedFile);
    } catch (err) {
        console.error("error in encoding: " + err);
    } finally {
        console.log('LAST');
    }

    // const sendMessage = document.getElementById('send-message').value;
    // await archive.writeFile('/message', sendMessage);

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

    // const receivedImage = await archive.readFile('/file', 'base64');
    // const receivedMessage = await archive.readFile('/message');
    const metadata = await archive.readFile('/metadata', 'utf-8');
    const filename = await archive.readFile('/name', 'utf-8');
    var file = await archive.readFile('/file', 'base64');
    alert("receive complete");
    window.receivedFilename = filename;
    document.querySelector('a').href = metadata + ',' + file;


    // document.querySelector('img').src = 'data:image/png;base64,'+str;

    // document.getElementById("received-val").innerHTML = datJSON;
    // document.getElementById("received-val").innerHTML = receivedMessage;
    // document.getElementById("received-val").innerHTML = receivedImage;
    // const decodedFile = dataURLtoFile(metadata + ',' + file, filename);


    console.log("received image: " + file);
    console.log("metadata: " + metadata);
    // console.log("received file: " + decodedFile);
    // console.log(decodedFile);
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

// function dataURLtoFile(dataurl, filename) {

//     var arr = dataurl.split(','),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]), 
//         n = bstr.length, 
//         u8arr = new Uint8Array(n);

//     while(n--){
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     return new File([u8arr], filename, {type:mime});
// }

// function triggerFileDownload() {


// }

export default DatApp;
