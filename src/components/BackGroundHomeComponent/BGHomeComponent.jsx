import "./BGHomeComponent.css"


function BGHomeComponent({COMPONENT}) {
    return (
        <div className="backL">

            {COMPONENT && <COMPONENT/> }
        </div>

    );
}

export {BGHomeComponent};