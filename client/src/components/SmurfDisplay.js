import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';


// export class SmurfDisplay extends React.Component {
//     render() {
//         return (<div className="smurfDisplay">
//             {props.smurfs.map((smurf) => (
//                 <div key={smurf.id}>
//                     Name: {smurf.name} <br />
//                     Age: {smurf.age} <br />
//                     Height: {smurf.height} <br />
//                 </div>
//             ))
//             }
//         </div>
//         )

//     }
const SmurfDisplay = (props) => {
    console.log(props, 'props')
    useEffect(() => {
        getSmurf();
        console.log("test");
    }, []);

    return (<div className="smurfDisplay">
        {props.smurfs.map((smurf) => (
            <div key={smurf.id}>
                name: {smurf.name} <br />
                    nickname: {smurf.age} <br />
                    positionField: {smurf.height} <br />
            </div>
        ))
        }
    </div>
    )
};
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, { getSmurf })(SmurfDisplay)

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.