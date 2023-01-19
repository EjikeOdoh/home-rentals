import React from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ open }) => {
  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p className="dropzone-content">
          Drag your images here, or <span className="required">browse</span>
        </p>
        <small>Supported: JPG, JPEG, PNG</small>
      </div>
    </div>
  );
};

export default DropZone;
