import React, { useState, useRef } from "react";
import TemplateA from "../Common/Templates/TemplateA";
import TemplateB from "../Common/Templates/TemplateB";
import TemplateC from "../Common/Templates/TemplateC";
import './Templates/style.css';


const Landingpage = () => {
    const [selected, setSelected] = useState();
    const inputRef = useRef(null);
    const copyingTextRef = useRef(null);
    const elementRef = useRef(null);
    

    const handleChange = (e) => {
        // console.log(e.target.value);
        setSelected(e.target.value);
    };
    const copyToClipboard = async () => {
        const text = inputRef.current.outerHTML;
        copyingTextRef.current.value = text;

        copyingTextRef.current.select();

        try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
        } catch (error) {
            console.error("Failed to copy text to clipboard", error);
        }
    };
    const copyHtmlToClipboard = async () => {
        const element = elementRef.current;
        
        if (!element) {
          console.error("Element not found.");
          return;
        }
    
        const html = element.outerHTML;
    
        try {
          await navigator.clipboard.writeText(html);
          console.log("HTML copied to clipboard");
        } catch (error) {
          console.error("Failed to copy HTML to clipboard", error);
        }
      };
    return (
        <div>
<TemplateB Landingpage={Landingpage} />

            <div className="task-manager">
                <div className="left-bar">
                    <div className="upper-part">
                        <div className="actions">
                            <div className="circle"></div>
                            <div className="circle-2"></div>
                        </div>
                    </div>
                    <div className="left-content">
                        <ul className="action-list">
                            <li className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-inbox"
                                    viewBox="0 0 24 24">
                                    <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                </svg>
                                <span>Templates</span>
                            </li>

                        </ul>
                        <ul className="category-list">
                            <li className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="feather feather-users">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                <span>Another task</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-content">
                    <div className="header">Select from the dropdown for the templetes</div>
                    <select value={selected} onChange={(e) => handleChange(e)}>
                        <option> Please Select</option>
                        <option value="1">First Templete</option>
                        <option value="2">Eli Lilly Templete</option>
                        <option value="3">ASTRA ZENICA</option>
                    </select>


                    <div className="">
                        {selected === "1" ? <TemplateA /> : ""}
                        {selected === "2" ? <TemplateB /> : ""}
                        {selected === "3" ? <TemplateC /> : ""}
                    </div>

                    <div>
                        <input id="myInput" type="text" ref={inputRef} />
                        <textarea id="copyingText" ref={copyingTextRef}></textarea>
                        <button onClick={copyToClipboard}>Copy Text</button>
                    </div>

                    <button onClick={copyHtmlToClipboard}>Copy HTML</button>

                    
                </div>
                <div className="right-bar">
                    <div className="header">Schedule</div>
                    <div className="right-content">
                        <div className="task-box yellow">
                            <div className="description-task">
                                <div className="time">08:00 - 09:00 AM</div>
                                <div className="task-name">Product Review</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage