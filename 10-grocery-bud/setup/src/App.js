import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]= useState({show:false,msg:'',type:''});
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true,'danger','please enter value');
    }
    else if(name && isEditing){
      setList(list.map((item)=>{
        if(item.id === editId){
          return {...item,title:name}
        }
        return item;
      }))
      setName('');
      setEditId(null)
      setIsEditing(false)
      showAlert(true,'success','value changed');
    }
    else{
      showAlert(true,'success','Item addeds successfully');
      const newItem={id: new Date().getTime().toString(),
      title:name};
      setList([...list,newItem]);
      setName('');
    }
  }

  const showAlert = (show=false,type="",msg="")=>{
    setAlert({show,type,msg});
  }

  const clearItems = ()=>{
    setList([]);
  }

  const removeItem = (id)=>{
    showAlert(true,'danger','item removed');
    setList(list.filter((item)=>item.id!== id))
  }

  const editItem = (id) => {
   console.log('here');
    const sitem = list.find((item)=>item.id ===id);
    setIsEditing(true);
    setEditId(id);
    setName(sitem.title);
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert list={list}{...alert} removeAlert={showAlert}/>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="cheese"
         value={name}
         onChange={(e)=>setName(e.target.value)}/>
        <button type="submit" className="submit-btn">
          {isEditing? 'edit':'submit'}
        </button>
      </div>
      </form>
      {
        list.length > 0 && (
          <div className="grocery-container">
          <List items={list} 
          removeItem={removeItem}
          editItem={editItem}/>
          <button 
          className="clear-btn"
          onClick={clearItems}>
            clear items
          </button>
        </div>
        )
      }
    </section>
  );
}

export default App
