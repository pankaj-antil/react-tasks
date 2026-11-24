import React from "react"

export function TeamCard({name,role,avatar,isAvailable})
{
    return(
        <>
        <section className="container-fluid mt-3">
            <div className="row">
                <div className="col-5 m-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center">
                            <h3>PROFILE CARD</h3>
                        </div>
                        <div className="card-body">
                            <h5>Name : {name}</h5>
                            <h5>Role : {role}</h5>
                            <h5>Avatar :</h5>
                            <img 
                            src= {avatar} 
                            alt={`${name}'s avatar`} 
                            style={{width:100 ,height:100}}
                            />
                            <h5>Is Available : {String(isAvailable)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}