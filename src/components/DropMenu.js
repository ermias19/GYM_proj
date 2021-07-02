const DropMenu = () => {

    return (

        <div className="dropMenu dropleft">

            <a id="menuDropdown" role="button" data-toggle="dropdown" className='dropMenuBtn' href="#">
                <i className='fas fa-bars'></i>
            </a>

            <div className="dropdown-menu mt-4" aria-labelledby="menuDropdown">

                <a className="dropdown-item" href="#">About Us</a>
                <a className="dropdown-item" href="#">Services</a>
                <a className="dropdown-item" href="#">Contact</a>

            </div>

        </div>
    )
}

export default DropMenu
