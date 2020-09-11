import { ApiCall } from "./apicall";
import qs from 'qs'

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/";

class LabelService {
  getAllLists() {
    const token = localStorage.getItem("token");
    return ApiCall(
      "",
      `${baseURL}notes/getNotesList?access_token=${token}`,
      "GET",'application/json'
    );
  }
  getLabelLists() {
    const token = localStorage.getItem("token");
    return ApiCall(
      "",
      `${baseURL}noteLabels/getNoteLabelList?access_token=${token}`,
      "GET",'application/json'
    );
  }

  getUserID(data) {
    const token = localStorage.getItem("token");
    return ApiCall(data, `${baseURL}user?access_token=${token}`, "GET",'application/json');
  }

  addLabel(data) {
    const token = localStorage.getItem("token");
    return ApiCall(data, `${baseURL}noteLabels?access_token=${token}`, "POST",'application/json');
  }

  updateLabel(id, data) {
    const token = localStorage.getItem("token");
    return ApiCall(
      data,
      `${baseURL}noteLabels/${id}/updateNoteLabel?access_token=${token}`,
      "POST",'application/json'
    );
  }

  deleteLabel(id) {
    const token = localStorage.getItem("token");
    return ApiCall(
      "",
      `${baseURL}noteLabels/${id}/deleteNoteLabel?access_token=${token}`,
      "DELETE",'application/json'
    );
  }

  updateIsPined(data){
    const token = localStorage.getItem("token");
    return ApiCall(
      data,
      `${baseURL}notes/pinUnpinNotes?access_token=${token}`,
      "POST",'application/json'
    );
  }

  addNote(data){
    const token = localStorage.getItem("token");
    return ApiCall(
      data,
      `${baseURL}notes/addNotes?access_token=${token}`,
      "POST",'application/json'
    );
  }
  updateNote(data){
    const token = localStorage.getItem("token");
    return ApiCall(
      data,
      `${baseURL}notes/updateNotes?access_token=${token}`,
      "POST",'application/json'
    );
  }
  

  addUpdateReminderNotes(data){
    const token = localStorage.getItem("token");
    return ApiCall(
      data,
      `${baseURL}notes/addUpdateReminderNotes?access_token=${token}`,
      "POST",'application/json'
    );
  }

  removeReminderNotes(data){
    const token = localStorage.getItem("token");
    return ApiCall(
      qs.stringify(data),
      `${baseURL}notes/removeReminderNotes?access_token=${token}`,
      "POST",'application/x-www-form-urlencoded'
    );
  }

}

export default new LabelService();
