import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ConfirmationMessage = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;

const ReScan = props => {
	const apiKey = 'keyehEHqol0lqaHF2';
  	const baseId = 'apptQkP0WMD6DrYo1';
  	const table = 'tblVdppLxEOhNWMuH';
  	const recordId = props.id;

	const handleUpdate = async () => {
	    try {
	     	const updateData = {
	        	fields: {
	        		// Update the fields you want to change
	        		FName: 'Dishantss',
	        	},
	      	};

    	 	const response = await axios.patch(
    	    	`https://api.airtable.com/v0/${baseId}/${table}/${recordId}`,
    	    	updateData,
    	    	{
    	     		headers: {
    	        		Authorization: `Bearer ${apiKey}`,
    	        		'Content-Type': 'application/json',
    	      		},
    	    	}
    	  	);

	    	console.log('Record updated:', response.data);
	    } catch (error) {
	      	console.error('Error updating record:', error);
	    }
	};  	

	if (props.className==='success')
		handleUpdate();
	
	return(
		<ConfirmationMessage className = {props.className}>{props.children}</ConfirmationMessage>
	);
};

export default ReScan;