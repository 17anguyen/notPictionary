import React from 'react';
import './css/portfolio.css'


export default function Project(props) {
    return (
        <main className='portbg'>
            <div className="row">

                {props.projects.map((project) => (
                    <div className="col-6 mx-auto p-4" key={project.id}>

                        <div className="card">

                            <img src={project.display} className="card-img-top img-fluid" alt="project screenshot" />
                            <div className="card-body border-top">
                                <div>
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>


                                    <button className="btn btn-outline-light mx-auto p-2" href={project.github} target="_blank" rel="noreferrer">Repository </button>

                                    {project.deployed && (
                                        <button className="btn btn-outline-light mx-auto p-2" href={project.deployed} target="_blank" rel="noreferrer">Deployed Link</button>)}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}



            </div>
        </main >
    );
}