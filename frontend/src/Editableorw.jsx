// import React from "react";

const Editablerow = ({
//   editFormData,
//   handleEditFormChange,
//   handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          // eslint-disable-next-line no-undef
          value={editFormData.fullName}
          // eslint-disable-next-line no-undef
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          // eslint-disable-next-line no-undef
          value={editFormData.address}
          // eslint-disable-next-line no-undef
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          // eslint-disable-next-line no-undef
          value={editFormData.phoneNumber}
          // eslint-disable-next-line no-undef
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          // eslint-disable-next-line no-undef
          value={editFormData.email}
          // eslint-disable-next-line no-undef
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Editablerow;