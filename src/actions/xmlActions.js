import { SET_XML, SET_XML_FILE_NAME } from "./xmlTypes";

 export function setXml(xml) {
   return {
     type: SET_XML,
     xml: xml
   }
 }

 export function setXmlFileName(fileName) {
   return {
     type: SET_XML_FILE_NAME,
     fileName: fileName
   }
 }