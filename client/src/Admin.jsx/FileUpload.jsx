import React, { useState } from "react";
import "./Upload.css";

const FileUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadData, setUploadData] = useState(null);

  const handleUpload = async (upload) => {
    try {
      let res = await fetch("http://localhost:3636/api/v1/media", {
        method: "POST",
        body: upload,
      });
      let data = await res.json();
      // Swal.fire("Success", data.message, "success").then(() => {
      //   setMedia((prev) => [...prev, ...data.uploadedData]);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    const uploadFiles = event.target.files;
    let data = new FormData();
    if (uploadFiles.length != 0) {
      for (const single_file of uploadFiles) {
        data.append("images", single_file);
      }
    }
    setUploadData(() => data);
    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section className="Upload">
      <label>
        + Add Photos
        <br />
        <span>up to 10 photos</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      <input type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="btn btn-dark upload-btn"
            onClick={() => {
              handleUpload(uploadData);
              setSelectedImages(() => []);
            }}
          >
            <i class="bi bi-upload"></i> Upload {selectedImages.length} photo
            {selectedImages.length === 1 ? "" : "s"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(image)}
                >
                  <i class="bi bi-trash3"></i>
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default FileUpload;
