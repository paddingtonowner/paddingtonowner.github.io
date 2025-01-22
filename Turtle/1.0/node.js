function downloadFiles() {
    const file1Url = './Turtle_1_point_0.py';

    const file1Name = 'Turtle_1_point_0.py';

    downloadFile(file1Url, file1Name);
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
