import React from "react";

 function SkillsBar () {
    return (
        <div className="container">

            <div className="skill-box">
                <span className="title">Ingles</span>

                <div className="oidifg">
                    <div className="skill-bar">
                        <span className="skill-per ingles">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>

                    <span className="">Fluente</span>
                </div>
                
            </div>


            <div className="skill-box">
                <span className="title">Português</span>

                <div className="oidifg">
                    <div className="skill-bar">
                        <span className="skill-per portugues">
                            <span className="tooltip">100%</span>
                        </span>
                    </div>

                    <span className="">Nativo</span>
                </div>
                
            </div>


            <div className="skill-box">
                <span className="title">Espanhol</span>

                <div className="oidifg">
                    <div className="skill-bar">
                        <span className="skill-per espanhol">
                            <span className="tooltip">50%</span>
                        </span>
                    </div>

                    <span className="">Intermediário</span>
                </div>
                
            </div>   
        </div>
    )
 }

 export default SkillsBar;