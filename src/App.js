import React, {useState,useEffect} from 'react';
import grapejs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import './styles/main.scss';
import './css/output.css'
function App() {
const html=' <h1> Simple Tailwindo CSS application </h1><button className="btn btn-blue">Submit</button>'
  const [editor,setEditor]  =useState(null);
  // const [htmlContent, setHtmlContent]  =useState(html);

  useEffect(()=>{
const editor=grapejs.init({
  container:"#editor",
  formelement:true,
  width:"auto",
  StorageManager:false,
  plugins:[gjsPresetWebpage],
  plugins0pts:{
    gjsPresetWebpage:{},
  },
  showOffsets: 1,
        noticeOnUnload:0,
});
setEditor(editor);
  },[]) ;
    return (
<div className='App'>
<div id='editor'>
            <h1>Hello World Component!</h1>
             </div>   
             <h1> Simple Tailwindo CSS application </h1><button className="btn btn-blue">Submit</button>

     <form>
                 <div class="mb-6">
                   <input
                     type="text"
                     placeholder="Email"
                     class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                   />
                 </div>
                 <div class="mb-6">
                   <input
                     type="password"
                     placeholder="Password"
                     class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                   />
                 </div>
                 <div class="mb-10">
                   <input
                     type="submit"
                     value="Sign In"
                     class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                   />
                 </div>
               </form>
               </div>  
    );
  }

export default App;
