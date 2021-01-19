/**
 *
 * ExceptionArea
 *
 */

import React, { useEffect } from "react";
import CardLayout from "../CardLayout";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputField from "../InputField";
import {GrFormClose} from 'react-icons/gr';
import SubmitButton from "../SubmitButton";
import { attendanceService } from "../_services/attendenceService";
import Loader from "../Loader";
import moment from 'moment'

const Label = styled.div`
font-size:21px;
line-height:25px;
font-family:"sfdisplay-regular";
color:var(--FARAH-verify-grey);
`
const HeadLayout = styled.div`

.inputclass{
border:none;
font-family:"sfdisplay-bold";
font-size:27px;
line-height:38px;
:focus{
  outline:none;
}
}
.inputclass2{
  border:none;
  font-size:20px;

}
.inputclass3{
  border:none;
  font-size:17px;

}
.date{
  margin-bottom:10px;
}
`

const Button = styled.button`
border:none;
padding:20px;
font-family:"sfdisplay-regular";
font-size:17px;
line-height:25px;
background:var(--FARAH-white);
border-radius:10px;
box-shadow: 5px 4px 22px 0px rgba(0,0,0,0.15);
color:var(--FARAH-verify-grey);
margin-top:10px;
:focus{
  outline:none;
}
.fileaddtxt{
font-family:"sfdisplay-bold";
font-size:17px;
line-height:21px;
color:var(--FARAH-notify-blue);
}

`

const FileShower = styled.div`
box-shadow: 5px 4px 22px 0px rgba(0,0,0,0.15);
background:var(--FARAH-white);
font-family:"sfdisplay-regular";
padding:10px 20px;
width:20vw;
border-radius:27px;
margin-top:10px;
text-align:center;
align-items:center;
color:var(--FARAH-notify-blue);
display:flex;
justify-content:space-between;
`
let deletedItems = [];
function ExceptionArea({history,id}) {
  const [newDate,setNewDate] = React.useState()
  const [location,setLocation] = React.useState("")
  const [reason,setReason] = React.useState("")
  const [filesToUpload,setFilesToUpload] = React.useState([])
  const fileref = React.createRef()
  const [loading,setLoading] = React.useState(false)
  const [dataLoading,setDataLoading] = React.useState(false)
  const [alreadyPresentFiles,setAlreadyPresentFiles] = React.useState([])
  const paramId  = id;
  


  useEffect(()=>{
      if(paramId > 0){
        _getAttendenceDataById()
        console.log(paramId)
      }
  },[])

  const _getAttendenceDataById= async () =>{
    setDataLoading(true)
    await attendanceService.getExceptionRequestByIdAPI(paramId).then((res)=>{
      console.log("res====",res.data)
        const data = res.data
        let filesPresent = []
        const date = new Date(data.attendance[0].date)
        const loc = data.attendance[0].location 
        const reason = data.attendance[0].reason
        setNewDate(date)
        setLocation(loc)
        setReason(reason)
        data.attachment.map((item)=>{
            filesPresent.push(item)
        })
        setAlreadyPresentFiles([...filesPresent]);
        setDataLoading(false)
        
    }).catch((err)=>console.log(err))
  }

  const handleChange = (date) => {
    setNewDate(date)
  }

  const handleLocation = (event) => {
    setLocation(event.target.value)
  }
  const handleReason = (event) => {
    setReason(event.target.value)
  }
  const fileSelecthandler = (event) => {
    setFilesToUpload([...filesToUpload,event.target.files[0]])
  }

  const handleClose = (index) => {
      let newfiles = filesToUpload;
      newfiles.splice(index,1)
      console.log(newfiles);
      setFilesToUpload([...newfiles])
  }

  const handleEditClose = (index,item) => {
    let newfiles = alreadyPresentFiles;
    newfiles.splice(index,1)
    deletedItems.push(item.id)
    setAlreadyPresentFiles([...newfiles])
  }

  const handleSubmit = async () => {
    let editRequest = paramId > 0 ? true : false 
    if(checkValid()){
        setLoading(true)
        const coordinates = JSON.stringify({
          longitude: 26.554,
          latitude: 72.554,
        })
        let data = new FormData()
        data.append('date',newDate )
        data.append('location', location)
        data.append('location_coordinates', coordinates)
        data.append('reason',reason)

        if(filesToUpload.length > 0 )
        {
          filesToUpload.map((file)=>{
            data.append('attachment_link', file)
          })
        }
        console.log(data)
        if(editRequest){
            data.append('deleteFile',deletedItems.join(','))
            setLoading(false)
            await attendanceService.updateExceptionAPI(data,paramId).then((response)=>{
              console.log("updatedRes",response)
              history.push(`/outgoingattendence`)
            }).catch((err)=>console.log("updateERR",err))
        }else{
          await attendanceService.addExceptionAPI(data).then((response)=>{
            setLoading(false)
            localStorage.setItem("userId",response.data.user_id)
            history.push(`/trackattendence/${response.data.id}`)
          }).catch((err)=>{
            setLoading(false)
            console.log("ERR IN UPLOADING",err)
          })
        }
    }else{
      console.log("ERROR")
    }
  }

  const checkValid = () => {
    if(newDate === null || location === null || reason === null){
      return false
    }
    return true
  }
  
  return <CardLayout>
           {!dataLoading ? <HeadLayout className="ml-5 my-3">
             <Label className="date"onClick={()=>{console.log(filesToUpload)}}>Date</Label>
             <DatePicker selected={newDate}  placeholderText="When" className="inputclass2" onChange={handleChange} minDate={new Date()}/>
             <Label className="mt-3">Location</Label>
             <InputField placeholder="Where" value={location} onChange={handleLocation} className="inputclass2"></InputField>
             <Label className="mt-3">Reason</Label>
             <InputField placeholder="Enter details" value={reason} onChange={handleReason} className="inputclass2"></InputField>
             <Label className="inputclass2 inputclass mt-3">Attachment</Label>
             <input type="file" className="inputclass2" style={{display:"none"}} onChange={fileSelecthandler} ref={fileref}/>
            <Button onClick={()=>fileref.current.click()}>
              <span className="inputclass3 fileaddtxt">Add a file</span>&nbsp;or drop files here 
            </Button>
            {filesToUpload.length > 0 && filesToUpload.map((item,index)=>{
              return (
                  <FileShower key={index}>
                  {item.name}
                  <GrFormClose onClick={()=>handleClose(index)}/>
                  </FileShower>
              )
            })}
            {alreadyPresentFiles.length > 0 && alreadyPresentFiles.map((item,index)=>{
                return (
                  <FileShower key={index}>
                  {item.file_name}
                  <GrFormClose onClick={()=>handleEditClose(index,item)}/>
                  </FileShower>
                )
            })}
            <br/>
            <SubmitButton title="Send Request" callback={handleSubmit} styles="mt-5 mb-2" disabled={loading}/>
           </HeadLayout>:<Loader/>}
         </CardLayout>;
}

ExceptionArea.propTypes = {};

export default ExceptionArea;
