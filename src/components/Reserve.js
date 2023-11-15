import React, { useState } from 'react'
const Reserve = () => {
    const[count, setCount] = useState(0)
    const[form, setForm] = useState({name:"",email:"",month:"", year:" ",day:" ",hour:" ", minute:"",time:""})
    
    function handleForm(e){
        let newForm = {
            ...form,
            [e.target.id]: e.target.value
        };
       
        setForm(newForm)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(e.target["name"].value === ""){
            e.target["name"].parentElement.classList.add("err")
            e.target["name"].classList.add("err")
        }else{
            e.target["name"].parentElement.classList.remove("err")
            e.target["name"].classList.remove("err")   
        }
        if(e.target["email"].value === ""){
            e.target["email"].parentElement.classList.add("err")
            e.target["email"].classList.add("err")
        }else{
            e.target["email"].parentElement.classList.remove("err")
            e.target["email"].classList.remove("err")   
        }
        if(e.target["day"].value === ""){
            e.target["day"].parentElement.parentElement.classList.add("err")
            e.target["day"].classList.add("err")
            
        }else{
            e.target["day"].parentElement.parentElement.classList.remove("err")
            e.target["day"].classList.remove("err")   
        }
        if(e.target["month"].value === ""){
            e.target["month"].parentElement.parentElement.classList.add("err")
            e.target["month"].classList.add("err")
        }else{
            e.target["month"].parentElement.parentElement.classList.remove("err")
            e.target["month"].classList.remove("err")   
        }
        if(e.target["year"].value === ""){
            e.target["year"].parentElement.parentElement.classList.add("err")
            e.target["year"].classList.add("err")
        }else{
            e.target["year"].parentElement.parentElement.classList.remove("err")
            e.target["year"].classList.remove("err")   
        }
        if(e.target["hour"].value === ""){
            e.target["hour"].parentElement.parentElement.classList.add("err")
            e.target["hour"].classList.add("err")
        }else{
            e.target["hour"].parentElement.parentElement.classList.remove("err")
            e.target["hour"].classList.remove("err")   
        }
        if(e.target["minute"].value === ""){
            e.target["minute"].parentElement.parentElement.classList.add("err")
            e.target["minute"].classList.add("err")
        }else{
            e.target["minute"].parentElement.parentElement.classList.remove("err")
            e.target["minute"].classList.remove("err")   
        }
    }
  return (
    <div className='reservePlace'>
        <div className='first'>
            <div className='inner'>
            <h2>dine</h2>
            <h3>Reservations</h3>
            <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
            <a href="#" className='btn'>Reserve place</a>
            </div>
        </div>
        <div className='second'>
            <form onSubmit={handleSubmit}>
                <div><input id='name' onChange={(e)=>{handleForm(e)}} type="text" placeholder="Name"/></div>
                <div> <input id='email'  onChange={(e)=>{handleForm(e)}} type="text" placeholder="Email"/></div>
                 
                
                 <div className='labels'>
                     <label>Pick a date</label>
                     <div className="pick">
                        <input  onChange={(e)=>{handleForm(e)}}  id="month" type='text' placeholder='MM'/>
                        <input  onChange={(e)=>{handleForm(e)}}  id="day"  type='text' placeholder='DD'/>
                        <input   onChange={(e)=>{handleForm(e)}}  id="year" type='text' placeholder='YYYY'/>
                     </div>
                 </div>
                 <div className='labels'>
                     <label>Pick a time</label>
                     <div className="pick">
                        <input id="hour" type='text' placeholder='09'/>
                        <input id="minute" type='text' placeholder='00'/>
                        <select>
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                     </div>
                 </div>
                 <div className='add'>
                 <div className='btns' id='people' onClick={(e)=>{setCount((value)=> value - 1); handleForm(e)}} > - </div>
                 <div> {count} people </div>
                 <div className='btns'id='people' onClick={(e)=>{setCount((value)=> value + 1); handleForm(e)}}> + </div>
                 </div>
                 <div className='btn-container'><button type='submit' className='btn' href="#">Make Reservation</button></div>
            </form>
        </div>
    </div>
  )
}

export default Reserve