import { useState, useEffect } from 'react'

const ExercisePlan = () => {

    const [plan, setplan] = useState({})

    useEffect(() => {

        const getplan = async () => {
            const Uplan = await getUserplan()

            setplan(Uplan)
        }

        getplan()
    }, [])

    const [exercise, setExercise] = useState([])

    useEffect(() => {
        const getexercises = async () => {
            const exe = await getExercise()

            setExercise(exe)
        }

        getexercises()
    }, [])


    const getExercise = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/Exercises/');
        const exercise = await response.json()
        return exercise
    }

    const getUserplan = async () => {
        const response = await fetch(`http://localhost:5000/api/userinfo/${sessionStorage.getItem("tokenId")}`);
        const plan = await response.json()
        return plan

    }

    const quite = () => {

        fetch('http://localhost:5000/api/setPlan/', {
            method: 'DELETE',
            body: ' ',
            headers: { 'Content-Type': 'application/json', 'uToken': sessionStorage.getItem('tokenId') },
        })
    window.location.reload()
    }

    const submit = e => {
        e.preventDefault()
        let info = e.target['selected'].value
        fetch('http://localhost:5000/api/setPlan/', {
            method: 'POST',
            body: JSON.stringify({ info }) ,
            headers: { 'Content-Type': 'application/json', 'uToken': sessionStorage.getItem('tokenId') },
        })
            .then(setplan(res => res.json()))
            .then(window.location.reload())
          
    }

    let PLAN
    let w
    
    if (exercise[0] !== undefined) {

        if (plan['plan'] !== undefined) {

            for (w = 0; w < exercise.length; w++) {

                if (exercise[w]['name'] == plan['plan'].exercise_plan)
                PLAN = exercise[w]['Level'+plan['plan'].level]

            }
        }

    }


    if (plan['plan']) {

        return (

            <div className='mr-5 ml-5 plans'>
                        <div className="col-md-2">
                        <input className="profile-edit-btn quite" name="delete" onClick={quite} value="Quite" />
                    </div>
                <p className='text-center mt-5 date'><b>Monday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Monday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Monday']['Ex1']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Monday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Monday']['Ex2']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Monday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Monday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Monday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Monday']['Ex4']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>

                <hr />

                <p className='text-center  mt-5 date'><b>Tuesday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Tuesday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Tuesday']['Ex1']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Tuesday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Tuesday']['Ex2']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Tuesday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Tuesday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Tuesday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Tuesday']['Ex4']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>

                <hr />

                <p className='text-center  mt-5 date'><b>Wednesday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Wednesday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Wednesday']['Ex1']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Wednesday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Wednesday']['Ex2']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Wednesday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Wednesday']['Ex3']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Wednesday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Wednesday']['Ex4']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>

                <hr />

                <p className='text-center  mt-5 date'><b>Thursday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Thursday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Thursday']['Ex1']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Thursday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Thursday']['Ex2']['url']  :'-'}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Thursday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Thursday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Thursday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Thursday']['Ex4']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                <hr />

                <p className='text-center  mt-5 date'><b>Friday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Friday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Friday']['Ex1']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Friday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Friday']['Ex2']['url']  :'-'}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Friday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Friday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Friday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Friday']['Ex4']['url']  :'-'}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                <hr />

                <p className='text-center  mt-5 date'><b>Saturday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Saturday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Saturday']['Ex1']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Saturday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Saturday']['Ex2']['url']  :'-'}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Saturday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Saturday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Saturday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Saturday']['Ex4']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>

                <hr />

                <p className='text-center  mt-5 date'><b>Sunday</b></p>

                <div className='day row mt-5 mb-5'>

                    <div className='col-3 text-center'>{ PLAN ? PLAN['Sunday']['Ex1']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Sunday']['Ex1']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Sunday']['Ex2']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Sunday']['Ex2']['url']  :'-'}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Sunday']['Ex3']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Sunday']['Ex3']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='col-3 text-center'>{ PLAN ? PLAN['Sunday']['Ex4']['name']  :'-'}<br />
                        <iframe className='mt-2' width="300" height="200" src={ PLAN ? PLAN['Sunday']['Ex4']['url']  :'-'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </div>
        )

    }

    else {

        return (
            <div className="noPlan">
                No plan selected!
                <form onSubmit={submit}>
                    <div className="text-center">
                        <select className="selcteE" name='selected' >
                            {exercise.map(exes => (
                                <option key={exes['name']} className='option' value={exes['name']}>
                                    {exes['name']}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4 text-center">
                                        <input type="submit"  className="exeplanBtn" value="Select" />
                                    </div>
                </form>
            </div>
        )

    }


}

export default ExercisePlan
