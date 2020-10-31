import React from 'react';

//Functional Component for Main Landing Page 

const MainComponent = () => {
    return (
        <div>
            <header className="py-2 bg-image-full" style={{backgroundImage : "url('https://unsplash.it/1900/1080?image=1076')", opacity : 0.8}}  >
                <div className="row" style={{height : 250}}>
                    <div className="col-12 mx-auto my-auto text-center">
                        <h2 className="display-4 font-italic text-light border">
                            Make Attractive Resume For Your Next Venture 
                        </h2>
                    </div>
                </div>
            </header>
            {/* style={{ background-image :  `url('https://unsplash.it/1900/1080?image=1076')`}} */}
            <section className="py-5 mt-5 mb-5">
                <div className="container">
                <h1 className="display-2">Resume-Maker</h1>
                <p className="lead text-weight-bolder">Create, Store, Retrieve, Parse Your Resume Files</p>
                <p></p>
                </div>
            </section>

            <div className="py-5 bg-image-full" style={{backgroundImage : "url('https://unsplash.it/1900/1080?image=1081')", opacity : 0.9}} >
                <div className="row" style={{height:250}}>
                    <div className="col-12 mx-auto my-auto text-center">
                        <h2 className="display-4 font-italic text-dark border border-dark">
                            Making New Resume With Us Is As Easy As Cake Walk
                        </h2>
                    </div>
                </div>
            </div>
            {/* style="background-image: url('https://unsplash.it/1900/1080?image=1081');" */}

            <section className="py-5">
                <div className="container">
                <h1>Different Categories Of Template To Choose</h1>
                <p className="lead">Professionals</p>
                <p>Professionals A | Professionals B | Professionals C</p>
                <p className="lead">Beginners</p>
                <p>Beginners A </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                <h3>Paid Templates Coming Soon...</h3>
                </div>
            </section>

            <footer className="py-5 bg-light border border-dark">
                <div className="container text-center">
                <p className="m-0 text-center text-primary">Copyright &copy; Resume-Maker Team</p>
                </div>
            </footer>
        </div>
    )
}

export default MainComponent;