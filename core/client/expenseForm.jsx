import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {HashRouter, Route, Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
import request from 'superagent';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
const styles={
    appbar:{
        backgroundColor: "#1b1d21",
        marginTop: "0px",
        height: "80px",
        textAlign: "center"
   }
}
class expenseForm extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
        typeoflog:'',
        modalOpen: false

    }
   
    this.handleChangetype=this.handleChangetype.bind(this);
    this.handleSave=this.handleSave.bind(this);
    
  }
   handleChangetype(event){
     this.setState({
       typeoflog:event.target.value
     })
   }
   

  handleSave(){
 request.post('/loadconf').query({typeoflog:this.state.typeoflog
  }).end((err, res) => {
           if(err)
           {
             console.log(err);
           }
           console.log(res)
         });

  this.setState({
    modalOpen: false
  })
}

  render()
  {
    

    return(

      <div>
         <AppBar position="static" style={styles.appbar}>
          <Toolbar>
             <Typography variant="title" color="inherit" >
               Triag Dashboard
             </Typography>
          </Toolbar>
         </AppBar>
         <center>
         <Paper style={{marginTop:"5px",width:"80%",height:"200px", backgroundColor:'#d7d9dd'}}>

         <InputLabel style={{color:"black",marginLeft:"50px"}}> choose the type of log</InputLabel>
         <Select value={this.state.typeoflog}
                  onChange={this.handleChangetype}
                  style={{width:"55%",margiBottom:'20px'}}
                 >
                 <MenuItem value="SQL">SQL</MenuItem>
                 <MenuItem value="unixsyslog">unixsyslog</MenuItem>
                 <MenuItem value="csv">csv</MenuItem>
                </Select>
            <Button onClick={()=>{this.setState({
              modalOpen: true
            })}}
             name="button" style={{marginLeft:"700px",marginBottom:'-30px',color:"black",backgroundColor:"#67696d"}}>
              Submit
            </Button>
       
         </Paper>
         </center>
         <Modal
            open={this.state.modalOpen}
            onClose={()=>{this.setState({
              modalOpen: false
            })}}
            basic
            size='small'
          >
            <Modal.Content>
              <h3>Your log file has been submitted successfully </h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleSave.bind(this)} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
         
</div>


    );
  }
}
export default expenseForm;
