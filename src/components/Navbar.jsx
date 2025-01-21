import React from 'react'

import {useLocation, useNavigate} from 'react-router'

const Navbar = ({setSearch}) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <>
            <div className="nav mt-3">
                <div className="button btn btn-outline-warning mx-3"
                onClick={()=>{setSearch("Natute")
                    navigate('/')
                }
                   
                }
                >Nature</div>
                <div className="button btn btn-outline-primary mx-3"
                onClick={()=>{setSearch("Travel")
                    navigate('/')
                }}
                >Travel</div>
                <div className="button btn btn-outline-info mx-3"
                onClick={()=>{setSearch("City")
            navigate('/')
        }
    }
                >City</div>
                <div className="button btn btn-outline-secondary mx-3"
                onClick={()=>{setSearch("Car")
                    navigate('/')
                }}
                >Car</div>
                <div className="button btn btn-outline-warning mx-3"
                onClick={()=>{setSearch("Fashion")
                    navigate('/')
                }}
                >Fashion</div>
                <div className="button btn btn-outline-info mx-3" 
                onClick={()=>{setSearch("Animal")
                    navigate('/')
                }}
                >Animal</div>
                <div className="button btn btn-outline-dark text-light mx-3" 
                onClick={()=>{setSearch("Technology")
                    navigate('/')
                }}
                >Technology</div>
                <div className="button btn btn-outline-info mx-3" 
                onClick={()=>{setSearch("Bussiness & Finance")
                    navigate('/')
                }}
                >Bussiness & Finance</div>
                <div className="button btn btn-outline-primary mx-3" 
                onClick={()=>{setSearch("Tokyo")
                    navigate('/')
                }}
                >Tokyo</div>
                <div className="button btn btn-outline-info mx-3" 
                onClick={()=>{setSearch("Dubai")
                    navigate('/')
                }}
                >Dubai</div>

{location.pathname == '/Saved'?(
     <div className="button btn btn-warning mx-3"  onClick={() => navigate('/')}>Home</div>

):(
<div className="button btn btn-warning mx-3"  onClick={() => navigate('/Saved')}>Saved</div>
)}

                
 </div>

            <div className="container my-4" style={{
                width:'780px'
            }}>
                <div className="mb-3">
                    
                    <input type="email"
                     className="form-control bg-dark text-light" 
                     id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e)=>setSearch(e.target.value)} />

                </div>
            </div>

        </>
    )
}

export default Navbar
