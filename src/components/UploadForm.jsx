import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateData } from '../redux/actions';
import csv from 'csvtojson';

const UploadForm = (props) => {
  const [data, setData] = useState([]);
  
  const handleFileChange = (e) => {
    e.preventDefault();
   console.log('eeee',e);

    var files = e.target.files, f = files[0];

    
        const fileReader = new FileReader();
    
        fileReader.onload = async (e) => {
          const fileContent = e.target.result;
          const jsonData = await csv().fromString(fileContent);
          console.log("jsonData",jsonData);
          setData(jsonData);
        }
        fileReader.readAsText(f);
};

  const handleUpload = (e) => {
    props.actions.updateData(data);
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

const ActionCreators = Object.assign(
    {},
    {updateData},
  );
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });


const mapStateToProps = state => (
    {
    
    data: state.data.data,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
