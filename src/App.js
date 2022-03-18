import React, {useState,useEffect} from 'react';
import grapejs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import './styles/main.scss';
function App() {

  const [editor,setEditor]  =useState(null);
  useEffect(()=>{
const editor=grapejs.init({
  container:"#editor",
  plugins:[gjsPresetWebpage],
  plugins0pts:{
    gjsPresetWebpage:{},
  }
});
setEditor(editor);
  },[]) ;
    return (

    <div className="App">
<div id='editor'></div>
       
          </div>
  );
}

export default App;
