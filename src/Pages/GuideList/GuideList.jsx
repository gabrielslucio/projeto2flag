import React from "react";
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsEyeFill, BsChatDotsFill} from "react-icons/bs"
import images from "../../Constants/images";
import './GuideList.css';


const GuideList = () => {
    return (
       <section className="app__guide-list">
        
        <div className="app__guide-container">

            <div className="app__guides-header">
                <h1>Ver todos os <span>guias</span></h1>
            </div>

            <div className="app__guides-filter">
                <form>
                    <label>
                        Campeões:
                    </label>
                    <input></input>
                </form>
            </div>


            <div className="app__guides">



                <div className="app__votes">
                    <BsFillArrowUpCircleFill className="arrowup" />
                    <span className="upvote">22</span>
                    <p>Votos</p>
                    <span className="downvote">8</span>
                    <BsFillArrowDownCircleFill className="arrowdown" />
                </div>

                <div className="app__champion-icon">
                    <img src={images.aatrox} alt="" />
                </div>

                <div className="app__guide-info">
                    <h2>Aatrox Top - "O melhor guia de todos"</h2>
                    <p>Guia criado por <span>Gabriel</span> - updated a Abril 26, 2023</p>
                </div>

                


            </div>
        </div>
       </section>
    )
}

export default GuideList;