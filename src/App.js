import React, { Component } from 'react';





import Person from './Person/Person';

import './App.css';



class App extends Component  {
  state={
        persons:[
            {id:'dsdff',name:"Maxx", age:28},
            {id:'hjghh',name:"Manu", age:29},
            {id:'tytuy',name:"Stephanie", age:26}
            
        ],
        oherState:'some other value',
      showPersons:false
    }
    
 deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
     const persons=[...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons:persons})
 }
    nameChangedHandler=(event,id)=>{
        
        const personIndex= this.state.persons.findIndex(p=>{
            return p.id===id
        })
        
        const person={
            ...this.state.persons[personIndex]
        }
        
        person.name=event.target.value;
        //const person=Objecect.assign({},this.state.persons[personIndex])
        
        const persons=[...this.state.persons];
        persons[personIndex]=person;
        
         this.setState({persons:persons})
        
    }
    
    togglePersonsHandler=()=>{
        const doesShow=this.state.showPersons;
        this.setState({showPersons:!doesShow});
    }
    
render(){
    const style={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
            backgroundColor:'lightgreen',
            color:'black'
        }
    }
    
    let persons=null;
    
    if(this.state.showPersons){
        persons=(
             <div>
            {this.state.persons.map((person,index)=>{
             return <Person 
               click={()=>this.deletePersonHandler(index)}
             name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}
            />
            })}
     
      </div>
        );
/*style.backgroundColor='red';
style[':hover']={
     backgroundColor:'salmon',
            color:'black'
}*/
    }
    const classes=[];

if(this.state.persons.length<=2){
    classes.push('red');//classes=['red']
}

if(this.state.persons.length<=1){
    classes.push('bold');//classes=['red','bold']
}
    
  return (
    
    <div className="App">
     <h1>Hi , Iam a React App </h1>
      <p className={classes.join(' ')}>This is really working</p>
     <button className="button" onClick={this.togglePersonsHandler}>Toggle Persons</button> 
   {persons}
      
    </div>
    
  );
}
   /* return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a react app!!!'))*/
}

export default App;

/* state={
        persons:[
            {name:"Maxx", age:28},
            {name:"Manu", age:29},
            {name:"Stephanie", age:26}
            
        ],
        oherState:'some other value'
    }
    
    switchNameHandler=()=>{
      //  console.log('was clicked');
       //Dint do this this.state.persons[0].name='Maxmillian';
        this.setState({persons:[
            {name:"Maxxmillian", age:28},
            {name:"Manu", age:29},
            {name:"Stephanie", age:27}
            
        ]})
    }*/
