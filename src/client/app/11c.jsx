import React from 'react';
import DisplayLabel from './11a.jsx';
import DisplayArea from './11b.jsx';
let phoneRegex = /^[0-9]{9}$/;
let emailRegex = /^\S+@\S+\.\S+$/;
let validEmail = false;
let validPhone = false;
let validText = false;
class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            text: '',
            emailMessage: '',
            phoneNumberMessage: '',
            textMessage: '',
            wholeMessage:''
        }
    }
    emailChange(event) {
        this.setState({ email: event.target.value });
        let emailAnswer = emailRegex.test(event.target.value);
        if (emailAnswer) {
            this.setState({ emailMessage: 'Valid Email' });
            validEmail = true;
        } else {
            this.setState({ emailMessage: 'Enter Valid Email' });
            validEmail = false;
        }
        this.mainMethod();

    }

    phoneNumberChange(event) {
        this.setState({ phoneNumber: event.target.value });
        let phoneAnswer = phoneRegex.test(event.target.value);
        if (phoneAnswer) {
            this.setState({phoneNumberMessage: 'Valid Phone Number'});         
            validPhone = true;
        }else{
            this.setState({phoneNumberMessage: 'Enter Valid Phone Number (without "+" sign)'});
            validPhone = false;
        }
        
        this.mainMethod();
    }
    textChange(event) {
        this.setState({ text: event.target.value })
        if(event.target.value != ''){
            this.setState({textMessage: 'Valid Text'});
            validText = true;
        }else{
            this.setState({textMessage:'Enter Something in Text Area'});
            validText = false;
        }
        
        this.mainMethod();
    }
    mainMethod(){
        if(validEmail == true && validPhone==true && validText== true){
            this.setState({wholeMessage: 'Valid input'});
        }else{
            this.setState({wholeMessage:'Invald input'});
        }
    }
    render() {
        return <form>
            <DisplayLabel idDiv = "div1" idLabel="label1" idInput="input1" labelName='Email' inputName={this.state.email} change={this.emailChange.bind(this)} /> <span id = "span1">{this.state.emailMessage} </span>
            <DisplayLabel idDiv = "div2" idLabel="label2" idInput="input2" labelName='Phone Number' inputName={this.state.phoneNumber} change={this.phoneNumberChange.bind(this)} /> <span id = "span2">{this.state.phoneNumberMessage}</span>
            <DisplayArea idArea = "area" textArea={this.state.text} change={this.textChange.bind(this)} /><span id = "span3"> {this.state.textMessage}</span>
            <p >{this.state.wholeMessage}</p>
        </form>
    }

}
export default MainForm;
