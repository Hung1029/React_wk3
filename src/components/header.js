import cafe from '../image/cafe.jpg';

export default function Header() {
    return (
        <div>
            <div className="one">
                <div className="row top">
                    <div className="col-md-6">
                        <a href="./index.html"><i className="fas fa-home fa-1_5x i_color" width='50px'></i></a>
                    </div>
                </div>
                <div className="row">
                    <div id="div" className="col-md-12 img">
                        <img className="cover" src={cafe} />
                        <div className="text0">
                            <h1>Eden Cafe</h1>
                            <h3>- Healing - Relaxing - Comforting - </h3>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="two">
                <div className="row nav">
                    <div className="col-md-3 nav0"><a href="#">PET</a></div>
                    <div className="col-md-3 nav0"><a href="#">MENU</a></div>
                    <div className="col-md-3 nav0"><a href="#">ACTIVE</a></div>
                    <div className="col-md-3 nav0"><a href="#">CONTACT</a></div>
                </div>
            </nav>
        </div>
    );
}