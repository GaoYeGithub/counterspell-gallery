import React, { useState, useEffect } from "react";

const App = () => {
  const filePaths = [
    "/TORONTO/IMG_5702.jpg",
    "/TORONTO/IMG_5702.jpg",
    "/TORONTO/IMG_5705.jpg",
    "/TORONTO/IMG_5705.jpg",
    "/TORONTO/IMG_5714.jpg",
    "/TORONTO/IMG_5715.jpg",
    "/TORONTO/IMG_5716.jpg",
    "/TORONTO/IMG_5717.jpg",
    "/TORONTO/IMG_5725.jpg",
    "/TORONTO/IMG_7017.JPG",
    "/TORONTO/IMG_7018.JPG",
    "/TORONTO/IMG_7019.JPG",
    "/TORONTO/IMG_7021.JPG",
    "/TORONTO/IMG_7030.JPG",
    "/TORONTO/IMG_7033.JPG",
    "/TORONTO/IMG_7034.JPG",
    "/TORONTO/IMG_7035.JPG",
    "/TORONTO/IMG_7040.JPG",
    "/TORONTO/IMG_7067.JPG",
    "/TORONTO/IMG_7068.JPG",
    "/TORONTO/IMG_7073.JPG",
    "/TORONTO/IMG_7074.JPG",
    "/TORONTO/IMG_7075.JPG",
    "/TORONTO/IMG_8682.JPG",
    "/TORONTO/IMG_8683.JPG",
    "/TORONTO/IMG_8684.JPG",
    "/TORONTO/IMG_8685.JPG",
    "/TORONTO/IMG_8686.JPG",
    "/TORONTO/IMG_8687.JPG",
    "/TORONTO/IMG_8688.JPG",
    "/TORONTO/IMG_8690.JPG",
    "/TORONTO/IMG_8692.JPG",
    "/TORONTO/IMG_8693.JPG",
    "/TORONTO/IMG_8697.JPG",
    "/TORONTO/IMG_8698.JPG",
    "/TORONTO/IMG_8702.JPG",
    "/TORONTO/IMG_8703.JPG",
    "/TORONTO/IMG_8704.JPG",
    "/TORONTO/IMG_8705.JPG",
    "/TORONTO/IMG_8708.JPG",
    "/TORONTO/IMG_8709.JPG",
    "/TORONTO/IMG_8710.JPG",
    "/TORONTO/IMG_8711.JPG",
    "/TORONTO/IMG_8712.JPG",
    "/TORONTO/IMG_8714.JPG",
    "/TORONTO/IMG_8716.JPG",
    "/TORONTO/IMG_8717.JPG",
    "/TORONTO/IMG_8718 (1).jpg",
    "/TORONTO/IMG_8718.JPG",
    "/TORONTO/IMG_8718(1).jpg",
    "/TORONTO/IMG_8719.JPG",
    "/TORONTO/IMG_8719(1).jpg",
    "/TORONTO/IMG_8721.JPG",
    "/TORONTO/IMG_8724.JPG",
    "/TORONTO/IMG_8725.JPG",
    "/TORONTO/IMG_8726.JPG",
    "/TORONTO/IMG_8727.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filePaths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [filePaths.length]);

  const currentFile = filePaths[currentIndex];

  const renderFile = (file) => {
    const fileExtension = file.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
      return <img src={file} alt="Gallery Item" style={{ width: "100%" }} />;
    } else if (["mp4", "mov"].includes(fileExtension)) {
      return (
        <video controls autoPlay muted style={{ width: "100%" }}>
          <source src={file} type={`video/${fileExtension}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <div>Unsupported file format: {fileExtension}</div>;
    }
  };

  return (
    <div style={{ width: "500px", margin: "auto", textAlign: "center" }}>
      {renderFile(currentFile)}
      <div style={{ marginTop: "10px" }}>
        File {currentIndex + 1} of {filePaths.length}
      </div>
    </div>
  );
};

export default App;
