import { useState } from "react";
import NavLayout from "../elements/NavLayout";
import { useMediaQuery } from "react-responsive";
import { breackpoints } from "../../config";
import cls from "classnames";
import {
  FiHome,
  FiHelpCircle,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBox,
} from "react-icons/fi";
import HamburgerButton from "../elements/HamburgerButton";
import axios from 'axios';

export default function Navbar() {

  const [state, setState] = useState()

  const isSmall = useMediaQuery({ query: `(max-width: ${breackpoints.md}px)` });
  const isMedium = useMediaQuery({
    query: `(min-width: ${breackpoints.md + 1}px)`,
  });
  const [isActive, setActive] = useState(false);
  const toggle = () => setActive(!isActive);

  const sendPdf = () =>{
      console.log("send pdf");
  }


  //*********************************** */

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    // axios.post('http://127.0.0.1:5000/upload-pdf', formData, {
      http://10.144.121.29:5000/testGet


    axios.post('http://10.144.121.29:5000/upload-pdf', formData, {

      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('File uploaded successfully:', response.data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };


  return (
    <NavLayout
      aria-label="Menu de navegación"
      className={cls({ "is-active": isActive })}
    >
      <NavLayout.Header>
        <NavLayout.Logo>
          {isMedium && (
            <>
              <FiBox /> <NavLayout.Title>Code-Stellar</NavLayout.Title>
            </>
          )}
          {isSmall && <HamburgerButton isActive={isActive} toggle={toggle} />}
        </NavLayout.Logo>
      </NavLayout.Header>
      <NavLayout.Menu>
        <NavLayout.Item text="Home" icon={FiHome} to="/" />
        <NavLayout.Item text="About" icon={FiHelpCircle} to="/" />
        <NavLayout.Item text="Account" icon={FiUser} to="/" />
        <NavLayout.Item text="Settings" icon={FiSettings} to="/" />
        <NavLayout.Item text="Logout" icon={FiLogOut} to="/" />

       
         

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button>
        
      </NavLayout.Menu>
     
    </NavLayout>
  );
}
