import React ,{useState} from 'react'

const Form = () => {
    const [stateA ,setStateA] = useState({
        studentName:"",
        gender:"",
        hobbies:"",
        state:"",
        city:"",
    });

    const [userDetails, setUserDetails] = useState({});
    
    const userInfo = (event) => {
    const {name, value} = event.target;
    setStateA({
        ...stateA,
        [name]:value,
    })
    }

    const userDet = (e) => {
        const {name, value} = e.target;
        setStateA({
            ...stateA,
            [name]:value,
        })
    };

    const formSubmit = (e) => {
    e.preventDefault();
    setUserDetails({...stateA});
    }

    const {studentName, hobbies, state, city} = stateA;

    return (
        <div>
        <form onSubmit={(e)=>formSubmit(e)}>
        <label>Student Name</label>
        <input type="text" name="studentName" value={studentName} onChange={(e)=>userInfo(e)}/>
        <br/>
        <label>Gender: </label>
        <label htmlFor="male">Male</label>
        <input id="male" type="radio" name="gender" value="Male" onChange={(e)=>userDet(e)}/>
        <label htmlFor="female">Female</label>
        <input id="female" type="radio" name="gender" value="Female" onChange={(e)=>userDet(e)}/>
        <br/>
        <label>Hobbies</label>
        <input type="text" name="hobbies" value={hobbies} onChange={(e)=>userInfo(e)}/>
        <br/>
        <label>State</label>
        <input type="text" name="state" value={state} onChange={(e)=>userInfo(e)}/>
        <br/>
        <label>City</label>
        <input type="text" name="city" value={city} onChange={(e)=>userInfo(e)}/>
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        <ul>
            <li style={{listStyleType:"none"}}>{userDetails.studentName}</li>
            <li style={{listStyleType:"none"}}>{userDetails.gender}</li>
            <li style={{listStyleType:"none"}}>{userDetails.hobbies}</li>
            <li style={{listStyleType:"none"}}>{userDetails.state}</li>
            <li style={{listStyleType:"none"}}>{userDetails.city}</li>
            </ul>
        </div>
  )
}

export default Form;