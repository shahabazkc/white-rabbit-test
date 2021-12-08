import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../utils/requestHandlers';
function ViewUser() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then((response) => {
            if (response.data?.response) {
                setUser(response.data.response);
            } else {
                setUser({})
            }
        }).catch((err) => {
            setUser({});
        })
    }, [id])
    return (
        <div className="container  text-dark">
            {

                user ?
                    <div className="form-control mt-5">
                        <h1>User Details</h1>
                        <p><b>First Name: {user.FirstName}</b></p>
                        <p><b>Last Name: {user.LastName}</b></p>
                        <p><b>Number: {user.Phone}</b></p>
                        <p><b>Email: {user.Email}</b></p>
                        <p><b>Acievements: {user.Achievements}</b></p>
                        <p><b>Introduction: {user.Indroduction}</b></p>
                        <p><b>Experience: {user.Experience}</b></p>
                    </div>
                    : <p>No Such User</p>
            }
        </div>
    )
}

export default ViewUser
