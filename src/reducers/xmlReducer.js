import { SET_XML, SET_XML_FILE_NAME } from "../actions/xmlTypes";

const initialXmlState = {
  document: new Document(),
  fileName: ''
};

function xmlReducer(state = initialXmlState, action) {
  switch (action.type) {
    case SET_XML:
      return {...state, document: action.xml}
    case SET_XML_FILE_NAME:
      return {...state, fileName: action.fileName}
    default:
      return state;
  }
}

export default xmlReducer;