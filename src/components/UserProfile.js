import { useState, useEffect } from 'react'

const UserProfile = () => {

    const [user, setUser] = useState({})

    let x = useEffect(() => {

        const getI = async () => {
            const stats = await getInfo()
            // console.log('click')
            setUser(stats)
        }

        getI()
    }, [])

    const getInfo = async () => {

        const res = await fetch(`http://localhost:5000/api/userinfo/${sessionStorage.getItem("tokenId")}`)
        const data = await res.json()
        // console.log(data)
        return data['uInfo']

    }

    const submit = e => {
        e.preventDefault()

        fetch('http://localhost:5000/api/newuser/', {
            method: 'PUT',
            body: JSON.stringify({ user }),
            headers: { 'Content-Type': 'application/json', 'uToken': sessionStorage.getItem('tokenId') },
        })
            .then(res => res.json())
            .then(json => setUser(json.user))
            .then(x)
    }

    const terminate = () => {

        fetch('http://localhost:5000/api/newuser/', {
            method: 'DELETE',
            body: ' ',
            headers: { 'Content-Type': 'application/json', 'uToken': sessionStorage.getItem('tokenId') },
        })
            .then(res => res.json())
            .then(json => setUser(json.user))
            .then(sessionStorage.clear())
            .then(window.location.href ='http://localhost:3000/' )
    }

    // console.log(user.pic)
    return (

        <div className="container emp-profile">

            <form onSubmit={submit}>
                <div className="row">

                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={user.pic} alt="" name="user[pic]" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" onChange={e => setUser({ ...user, pic: e.target.files })} />

                            </div>

                            <input className='text-center username userInfo form-control' name="user[name]" type="text" onChange={e => setUser({ ...user, name: e.target.value })} value={user.name} id="name"></input>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">

                            <div className="row">

                                <div className="col-md-8">
                                    <div className='text-center mb-5'>
                                        <p> <h3>Body Information</h3></p>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='age'>Age</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[age]" onChange={e => setUser({ ...user, age: e.target.value })} value={user.age} className="form-control userInfo" id="age" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='sex'>Sex</label>
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-control userInfo" name="user[sex]" onChange={e => setUser({ ...user, sex: e.target.value })} value={user.sex} id="sex">
                                                <option >Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='Height'>Height</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[height]" onChange={e => setUser({ ...user, height: e.target.value })} value={user.height} className="form-control userInfo" id="Height" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='Weight'>Weight</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[weight]" onChange={e => setUser({ ...user, weight: e.target.value })} value={user.weight} className="form-control userInfo" id="Weight" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='Waist'>Waist</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[waist]" onChange={e => setUser({ ...user, waist: e.target.value })} value={user.waist} className="form-control userInfo" id="Waist" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='Chest'>Chest</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[chest]" onChange={e => setUser({ ...user, chest: e.target.value })} value={user.chest} className="form-control userInfo" id="Chest" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='Hand'>Hand</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[hand]" onChange={e => setUser({ ...user, hand: e.target.value })} value={user.hand} className="form-control userInfo" id="Hand" placeholder="21"></input>
                                        </div>
                                    </div>

                                    <div className="row form-group ml-4">
                                        <div className="col-md-6">
                                            <label htmlFor='leg'>Leg</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="user[leg]" onChange={e => setUser({ ...user, leg: e.target.value })} value={user.leg} className="form-control userInfo" id="leg" placeholder="21"></input>
                                        </div>
                                    </div>


                                    <div className="row form-group ml-5 mt-5 text-center">
                                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Save" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input className="profile-edit-btn delete" name="delete" onClick={terminate} value="Terminate account" />
                    </div>
                </div>

            </form>

        </div>


    )
}

export default UserProfile



