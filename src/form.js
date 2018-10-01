import React from 'react';
class Form extends React.Component{
    constructor(){
        super();
        this.state={
            title: "",
            responsible: "",
            descripcion: "",
            priority: ""
        }
        this.handlerInput= this.handlerInput.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);



    }
handlerInput(e) {
    console.log(e.target.value, e.target.name)
    const {value,name }=e.target;
this.setState({
    [name]:value
})
};
handlerSubmit(e){
    e.preventDefault();
    { this.props.sumarTarea (this.state)}
};


    render(){
        return(
            <div className='col-md-3'>
            <div className='card'>
            <form className='card-body' onSubmit={this.handlerSubmit}>
            <div className='form-group'>
            <input type='text' name='title' onChange={this.handlerInput} className='form-control' placeholder='titulo'/>
            </div>
            <div className='form-group'>
            <input type='text' name='priority' onChange={this.handlerInput} className='form-control' placeholder='priority'/>
            </div>
            <div className='form-group'>
            <input type='text' name='responsible' onChange={this.handlerInput} className='form-control' placeholder='responsible'/>
            </div>
            <div className='form-group'>
            <input type='text' name='descripcion' onChange={this.handlerInput}  className='form-control' placeholder='descripcion'/>
            </div>
            <button>Save</button>

            </form>
                </div>
                </div>
        )
    }
}
export default Form 