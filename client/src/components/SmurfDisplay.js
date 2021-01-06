import React from 'react';

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
    return (<div className="smurfDisplay">
        {props.smurfs.map((smurf) => (
            <div key={smurf.id}>
                name: {smurf.name} <br />
                    Nickname: {smurf.age} <br />
                    PositionField: {smurf.height} <br />
            </div>
        ))
        }
    </div>
    )
};
export default SmurfDisplay

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.