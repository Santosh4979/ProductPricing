import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateData } from '../redux/actions';

const PricingTable = ( props ) => {
  const [editedData, setEditedData] = useState([]);
  const [editableRow, setEditableRow] = useState(null);

  const handleEdit = (rowIndex) => {
    setEditableRow(rowIndex);
  };

  const tableStyles = {
    margin: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const thStyles = {
    backgroundColor: '#841584',
    textAlign: 'left',
    padding: '10px',
    fontWeight: 'bold',
  };

  const tdStyles = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const inputStyles = {
    width: '100%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyles = {
    padding: '5px 10px',
    marginRight: '5px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  };

  useEffect(() => {
    setEditedData(props?.data);
  }, [props]);


  const handleCancel = () => {
    setEditableRow(null);
    setEditedData(props?.data);
  };

  const handleSave = () => {
    // Perform save logic, e.g., send editedData to the backend or update Redux store
    setEditableRow(null);
    // Update the pricingData state or trigger API call to fetch updated data
  };

  const handleInputChange = (event, fieldName, rowIndex) => {
    const { value } = event.target;
    setEditedData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex][fieldName] = value;
      return newData;
    });
  };

  return (
    <>
    { editedData.length > 0 ? <table style={tableStyles}>
      <thead>
        <tr>
          <th style={thStyles} > S.No.</th>
          <th style={thStyles}>SKU</th>
          <th style={thStyles}>Product Name</th>
          <th style={thStyles}>Price(Rs.)</th>
          <th style={thStyles}>Date</th>
          <th style={thStyles}> Actions</th>
        </tr>
      </thead>
      <tbody>
        {editedData && editedData.length > 0 && editedData.map((row, index) => (
          <tr key={index}>
            <td style={tdStyles}>
                {index+1}
              
            </td>
            <td style={tdStyles}>
              {editableRow === index ? (
                <input
                style={inputStyles}
                  type="text"
                  value={row.SKU}
                  onChange={(event) => handleInputChange(event, 'SKU', index)}
                />
              ) : (
                row.SKU
              )}
            </td>
            <td style={tdStyles}>
              {editableRow === index ? (
                <input
                  style={inputStyles}
                  type="text"
                  value={row.ProductName}
                  onChange={(event) => handleInputChange(event, 'ProductName', index)}
                />
              ) : (
                row.ProductName
              )}
            </td>
            <td style={tdStyles}>
              {editableRow === index ? (
                <input
                 style={inputStyles}
                  type="number"
                  value={row.Price}
                  onChange={(event) => handleInputChange(event, 'Price', index)}
                />
              ) : (
                row.Price
              )}
            </td>
            <td style={tdStyles}> 
              {editableRow === index ? (
                <input
                  style={inputStyles}
                  type="text"
                  value={row.Date}
                  onChange={(event) => handleInputChange(event, 'Date', index)}
                />
              ) : (
                row.Date
              )}
            </td>
            <td style={tdStyles}>
              {editableRow === index ? (
                <>
                  <button style={buttonStyles} onClick={handleSave}>Save</button>
                  <button style={buttonStyles} onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button style={buttonStyles} onClick={() => handleEdit(index)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table> : ''
 
 } </>);
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

export default connect(mapStateToProps,mapDispatchToProps)(PricingTable);
