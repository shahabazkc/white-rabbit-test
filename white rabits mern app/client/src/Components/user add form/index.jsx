import React, { useState, useRef } from 'react'
import { addUser } from '../../utils/requestHandlers';
import { useNavigate } from 'react-router-dom';

function UserAddComponent() {
    const navigate = useNavigate();
    const numberRef = useRef('');

    //Input box states and err states
    const [firstName, setFirstName] = useState('');
    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [number, setNumber] = useState();
    const [numberErr, setNumberErr] = useState('');
    const [achievements, setAchievments] = useState('');
    const [achievementErr, setAchievementErr] = useState('');
    const [experience, setExperience] = useState('');
    const [experienceErr, setExperienceErr] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [introductionErr, setIntroductionErr] = useState('');
    const [err, setErr] = useState('');
    
    //form submit button handler
    const formSubmitHandler = () => {

        const data = {
            firstName, lastName, email, number, achievements, experience, introduction
        };

        //if every check function is true
        if (checkForm()) {

            //Adding the user 
            addUser(data).then((response) => {
                if (response?.data?.alreadySameEmailFound) {
                    setErr('Same Email Already Found');
                }
                //This condition will run if there is no error
                else if (response.status !== false) {
                    setErr('');
                    navigate('/');
                }
                else {
                    setErr('Something went wrong');
                }
            })
        }
    };

    //To check every input box validation
    const checkForm = () => {
        if (nameChecker() && emailChecker() && numberChecker() && achievementChecker() && experienceChecker() && introductionChecker()) return true;
        else return false;
    };

    //Name validation checking
    const nameChecker = () => {
        if (firstName.length > 3 && lastName.length > 3) {
            setFirstNameErr("");
            setLastNameErr("");
            return true;
        }
        else if (firstName.length < 3) {
            setLastNameErr("");
            setFirstNameErr("Minimum 3 character needed");
            return false;
        }
        else if (lastName.length < 3) {
            setFirstNameErr("");
            setLastNameErr("Minimum 3 character needed");
            return false;
        }
    };

    //Email Validation check
    const emailChecker = () => {
        const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
        if (regexp.test(email)) {
            setEmailErr('');
            return true;
        } else {
            setEmailErr('Please Enter valid Email');
            return false;
        };
    };

    //Number Validation check
    const numberChecker = () => {
        if (number.length === 10) {
            setNumberErr('');
            return true;
        }
        else {
            setNumberErr('Minimum 10 characters needed');
            return false;
        }
    }

    //Achievement Validation check
    const achievementChecker = () => {
        if (achievements.length >= 12) {
            setAchievementErr('');
            return true;
        }
        else if (firstName.length < 12) {
            setAchievementErr("Minimum 12 character needed");
            return false;
        }
    };

    //Introduction Validation check
    const introductionChecker = () => {
        if (introduction.length >= 12) {
            setIntroductionErr('');
            return true;
        } else {
            setIntroductionErr("Minimum 12 characters needed");
            return false;
        }
    };

    //Experience Validation check
    const experienceChecker = () => {
        if (experience.length >= 12) {
            setExperienceErr('');
            return true;
        }
        else if (firstName.length < 12) {
            setExperienceErr("Minimum 12 character needed");
            return false;
        }
    }


    //Number Validation
    const onNumberInput = () => {
        let tempValue = numberRef.current.value;
        setNumber(tempValue.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
    }

    return (
        <div className="user-add-component">
            <div className="container mt-5">

                {/* If Form submit Error occurs */}
                {err && <p className="text-danger"><b>{err}</b></p>}


                <div className="users-information-form">
                    <div className="row">

                        {/*              Name Section                 */}
                        <div className="col-6">
                            <label htmlFor="fname">First Name</label>
                            {firstNameErr && <p className="text-danger"><b>{firstNameErr}</b></p>}
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="fname" placeholder="Enter the first Name" />
                        </div>

                        <div className="col-6">
                            <label htmlFor="lname">Last Name</label>
                            {lastNameErr && <p className="text-danger"><b>{lastNameErr}</b></p>}
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="lname" placeholder="Enter the last Name" />
                        </div>

                        {/*              Email Section                 */}
                        <div className="col-6">
                            <label htmlFor="email">Email</label>
                            {emailErr && <p className="text-danger"><b>{emailErr}</b></p>}
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" placeholder="Enter the Email" />
                        </div>

                        {/*              Number Section                 */}
                        <div className="col-6">
                            <label htmlFor="number">Number</label>
                            {numberErr && <p className="text-danger"><b>{numberErr}</b></p>}
                            <input type="text" value={number} ref={numberRef}
                                onChange={onNumberInput}
                                className="form-control" id="number" placeholder="Enter the number" />
                        </div>
                        {/*              Introduce Section                 */}
                        <label htmlFor="introduction">Introduce</label>
                        {introductionErr && <p className="text-danger"><b>{introductionErr}</b></p>}
                        <textarea type="text" value={introduction} onChange={(e) => setIntroduction(e.target.value)} className="form-control" id="introduction" placeholder="Introduce yourself" />

                        {/*              Achievement Section                 */}
                        <label htmlFor="Achievements">Describe Achievements</label>
                        {achievementErr && <p className="text-danger"><b>{achievementErr}</b></p>}
                        <textarea type="text" value={achievements} onChange={(e) => setAchievments(e.target.value)} className="form-control" id="achievements" placeholder="Describe about your achievements" />

                        {/*              Experience Section                 */}
                        <label htmlFor="experience">Experience</label>
                        {experienceErr && <p className="text-danger"><b>{experienceErr}</b></p>}
                        <textarea placeholder="Explain about experience" value={experience} onChange={(e) => setExperience(e.target.value)} id="experience" cols="10" rows="5"></textarea>

                        {/*              form Button                 */}
                        <button onClick={formSubmitHandler} className="btn btn-success mt-2">Add User</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserAddComponent
