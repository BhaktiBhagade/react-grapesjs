import React, {useState,useEffect,Component} from 'react';
import grapejs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import './styles/main.scss';
import './css/output.css';
import axios from "axios";
import "grapesjs-preset-newsletter";
import "grapesjs/dist/css/grapes.min.css";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
//import { ThemeProvider } from 'styled-components';


 function App() {
// const html=' <h1> Simple Tailwindo CSS application </h1><button className="btn btn-blue">Submit</button>'
//   const [editor,setEditor]  =useState(null);
//   // const [htmlContent, setHtmlContent]  =useState(html);

//   useEffect(()=>{
// const editor=grapejs.init({
//   container:"#editor",
//   formelement:true,
//   width:"auto",
//   StorageManager:false,
//   plugins:[gjsPresetWebpage],
//   plugins0pts:{
//     gjsPresetWebpage:{},
//   },
//   showOffsets: 1,
//         noticeOnUnload:0,
// });
// setEditor(editor);
//   },[]) ;
//     return (
// <div className='App'>
// <div id='editor'>
//             <h1>Hello World Component!</h1>
//              </div>   
//              <h1> Simple Tailwindo CSS application </h1><button className="btn btn-blue">Submit</button>

//      <form>
//                  <div class="mb-6">
//                    <input
//                      type="text"
//                      placeholder="Email"
//                      class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
//                    />
//                  </div>
//                  <div class="mb-6">
//                    <input
//                      type="password"
//                      placeholder="Password"
//                      class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
//                    />
//                  </div>
//                  <div class="mb-10">
//                    <input
//                      type="submit"
//                      value="Sign In"
//                      class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
//                    />
//                  </div>
//                </form>
//                </div>  
//     );
return (
  <Container fluid>
    <Canvas />
  </Container>
);
   }

 export default App;
 export const generateConfig = (container) => ({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: container,
 fromElement: true,
  // Size of the editor
  height: "800px",
  width: "auto",
  showOffsets: 1,
  styleManager: { clearProperties: 1 },
  canvas: {
    styles: ['output.css'] 
},
  // Avoid any default panel
  storageManager: {
    type: "remote",
    stepsBeforeSave: 10,
    params: {}, // Custom parameters to pass with the remote storage request, eg. CSRF token
    headers: {} // Custom headers for the remote storage request
  },

  //components
  plugins: [ 'grapesjs-tailwind',gjsPresetWebpage,"grapesjs-preset-newsletter"],
  pluginsOpts: {
    gjsPresetWebpage:{},
  }
});
export const initializeGrapeJs = (containerRef) => {
  const config = grapeWrapper.generateConfig(containerRef.current);
  //initialization here
  const editor = grapejs.init(config);

  const rte = editor.RichTextEditor;

  const blockManager = editor.BlockManager;


  editor.on("load", async function () {
    const { data } = await axios.get("/template.html");
    //const { css } = await axios.get("/output.css");

    //const { css } = await axios.get("./css/output.css");
  //   const css = document.createElement('script');
  // script.src = "./css/output.css";
  // script.async = true;
  //document.body.appendChild(script);
    editor.setComponents(data);
   // editor.setStyle('.mb-6{  margin-bottom: 1.5rem;  }');
   // editor.setStyle(css);
   //const { css } =editor.getComponents().add('<link rel="stylesheet" href="./css/output.css">');
  // editor.setComponents(css);


    });
};

const grapeWrapper = {
  generateConfig,
  initializeGrapeJs
};
class Canvas extends Component {
  _containerRef = React.createRef();

  static propTypes = {
    initializeEditorFunc: PropTypes.func.isRequired
  };

  static defaultProps = {
    initializeEditorFunc: initializeGrapeJs
  };

  componentDidMount() {
    //initialize editor
    const { initializeEditorFunc } = this.props;

    initializeEditorFunc(this._containerRef);
  }

  render() {
    return (
      <div className="">
        <div className="editor-canvas">
          <div ref={this._containerRef} className="canvas" />
        </div>
      </div>
    );
  }
}
