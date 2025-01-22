function downloadFiles() {
    const file1Url = 'https://./file1.py';
    //const file2Url = 'https://./file2.py';

    const file1Name = 'file1.py';
    //const file2Name = 'file2.py';

    downloadFile(file1Url, file1Name);
    //downloadFile(file2Url, file2Name);
}

function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadFiles();
