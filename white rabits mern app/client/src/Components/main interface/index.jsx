import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../../utils/requestHandlers';
import { useNavigate, Link } from 'react-router-dom';
import LoaderComp from '../loader/loaderComp';

function MainComponent() {
    const navigate = useNavigate();

    const [usersFound, setUsersFound] = useState(false);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    
    //Fetching the Users after component loaded
    useEffect(() => {
        fetchUsersHandler().then((response) => {
            if (!response.status === false && response?.data?.response.length > 0) {
                //Adding the users to the users hook 
                setUsersFound(true); setUsers([...response.data.response]);
            }
            else {
                setUsersFound(true);
                setUsers([]);
                setMessage('No Users Found');
            }
        }).catch((err) => { //Handling the error
            setUsersFound(true);
            setUsers([]);
            setMessage('something went wrong while fetching users');
        });

    }, []);

    const fetchUsersHandler = async () => {
        //fetching the users
        try {
            let res = await fetchUsers();
            return res;
        }
        catch (e) {
            //Handling the error
            return { status: false };
        }
    };

    const goToFormPage = () => {
        navigate('/add-user');
    }

    return (
        <div className="main-component container">
            {
                usersFound ?
                    <div className="users-table">
                        <div className="add-user-form">
                            <button onClick={goToFormPage} className="btn btn-success mt-5">Create User</button>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((elem, index) => (
                                        <tr key={index}>
                                            <td>{elem.FirstName} {elem.LastName}</td>
                                            <td>{elem.Email}</td>
                                            <td><Link to={"/view-user/" + elem._id}><button className="btn btn-success">View User</button></Link></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div> :
                    <LoaderComp />
            }
            {message && <p><b>{message}</b></p>}
        </div>
    )
}

export default MainComponent
