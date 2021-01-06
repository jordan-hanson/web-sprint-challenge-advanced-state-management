import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf } from '../actions/index';

const AddForm = (props) => {
    console.log(props)
    const [formValues, setFormValues] = useState({
        name: '',
        nickname: '',
        positionField: ''
    })

    const onSubmit = (e) => {
        console.log(formValues)
        e.preventDefault()
        props.addSmurf(formValues)
    }

    const onChange = (e) => {
        const newSmurfData = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(newSmurfData)
        // console.log(formValues, 'this is the form values being submitted')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Add Smurf to the Village</h2>
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={onChange} />
                </label>
                <br />
                <label>
                    Nickname:
                    <input
                        name="nickname"
                        type="text"
                        value={formValues.nickname}
                        onChange={onChange} />
                </label>
                <br />
                <label>
                    Position:
                    <input
                        name="positionField"
                        type="text"
                        value={formValues.positionField}
                        onChange={onChange} />
                </label>
                <br />
                <button onSubmit={onSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, { getSmurf, addSmurf })(AddForm)



// class AddForm extends React.Component {

//     render() {
//         return(<section>
//             <h2>Add Smurf</h2>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label><br/>
//                     <input onChange={this.handleChange} name="name" id="name" />
//                 </div>

//                 <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
//                 <button>Submit Smurf</button>
//             </form>
//         </section>);
//     }
// }

// export default AddForm;

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.