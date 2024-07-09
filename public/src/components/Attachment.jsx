import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CancelIcon from '@mui/icons-material/Cancel';

const Attachment = () => {
  const [files, setFiles] = useState([]);
  const [showFileInput, setShowFileInput] = useState(false);
  const fileInputRef = React.createRef();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };
  return (
    <div>
      <AttachFileIcon onClick={handleIconClick} />
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Attachment;