import './BgLog.css';


function BgLog({COMPONENT}) {
    return (
        <div className="backL">
            <div className="BackgroundB">

                <div className="BackgroundB1">
                    <div className="BackgroundImg">
                        <img
                            src="https://listindiario.com/files/vertical_main_image/uploads/2022/07/31/6430086267163.jpeg"
                            alt="Karol G Blue"/>
                    </div>
                </div>

            </div>
            {COMPONENT && <COMPONENT/>}
        </div>

    );
}

export {BgLog};