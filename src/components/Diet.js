import { useState, useEffect } from 'react'

const Diet = () => {

    const [plan, setplan] = useState({})

    useEffect(() => {

        const getplan = async () => {
            const Uplan = await getUserplan()

            setplan(Uplan)
        }

        getplan()

    }, [])

    const [diet, setDiet] = useState({})

    useEffect(() => {

        const getdite = async () => {
            const diet = await getDite()

            setDiet(diet)
        }

        getdite()

    }, [])


    const getUserplan = async () => {
        const response = await fetch(`http://localhost:5000/api/userinfo/${sessionStorage.getItem("tokenId")}`);
        const plan = await response.json()
        return plan

    }

    const getDite = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/diet/');
        const dite = await response.json()
        return dite
    }


    let DITE
    let w
    
    if (diet[0] !== undefined) {

        if (plan['plan'] !== undefined) {

            for (w = 0; w < diet.length; w++) {

                if (diet[w]['plan'] == plan['plan'].exercise_plan)
                    DITE = diet[w]

            }
        }

    }


    if (plan['plan']) {

        return (

            <div className='mr-5 ml-5 plans'>

                <p className='text-center mt-5 date'><b>Monday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{ DITE ? DITE['date']['Monday']['Breakfast']  :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ? DITE['date']['Monday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{ DITE ? DITE['date']['Monday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{ DITE ? DITE['date']['Monday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />


                <p className='text-center mt-5 date'><b>Tuesday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ? DITE['date']['Tuesday']['Breakfast'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ?DITE['date']['Tuesday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ?DITE['date']['Tuesday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ? DITE['date']['Tuesday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />

                <p className='text-center mt-5 date'><b>Wednesday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ?  DITE['date']['Wednesday']['Breakfast'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ?  DITE['date']['Wednesday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ?  DITE['date']['Wednesday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ?  DITE['date']['Wednesday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />

                <p className='text-center mt-5 date'><b>Thursday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ?DITE['date']['Thursday']['Breakfast'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ? DITE['date']['Thursday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ? DITE['date']['Thursday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ? DITE['date']['Thursday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />

                <p className='text-center mt-5 date'><b>Friday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ? DITE['date']['Friday']['Breakfast'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ? DITE['date']['Friday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ? DITE['date']['Friday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ? DITE['date']['Friday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />

                <p className='text-center mt-5 date'><b>Saturday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ? DITE['date']['Saturday']['Breakfast'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ? DITE['date']['Saturday']['Lunch'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ? DITE['date']['Saturday']['Supper'] :'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ? DITE['date']['Saturday']['Dinner'] :'-'}</p></div>
                </div>

                <hr />

                <p className='text-center mt-5 date'><b>Sunday</b></p>

                <div className='day row mt-5'>

                    <div className='col-3 text-center sub'>Breakfast<p className='diet'>{DITE ? DITE['date']['Sunday']['Breakfast']:'-'}</p></div>

                    <div className='col-3 text-center sub'>Lunch<p className='diet'>{DITE ? DITE['date']['Sunday']['Lunch']:'-'}</p></div>

                    <div className='col-3 text-center sub'>Supper<p className='diet'>{DITE ? DITE['date']['Sunday']['Supper']:'-'}</p></div>

                    <div className='col-3 text-center sub'>Dinner<p className='diet'>{DITE ? DITE['date']['Sunday']['Dinner']:'-'}</p></div>
                </div>

                <hr />
            </div>

        )
    }

    else {

        return (

            <div className='noPlan'>
                No plan selected!
            </div>
        )

    }

}

export default Diet
