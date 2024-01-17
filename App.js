const heading = React.createElement('div',{id:"heading", style:{color:'red'}},React.createElement("p",{style:{padding:"20px"}},"Hello world!!! to React"));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)