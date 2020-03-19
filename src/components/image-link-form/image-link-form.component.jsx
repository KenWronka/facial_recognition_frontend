import React from "react";
import "./image-link-form.styles.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {" This Magic Brain will detect faces in your pictures; give it a try!"}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            type="text"
            className="f4 pa4 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
