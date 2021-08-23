import React from 'react';
import big2 from "./images/big2.jpg";
import multi from "./images/multi.jpg"
import protin from "./images/protin.jpg";
import prag from "./images/prag.jpg";
import bundle from "./images/bundle2.jpg";
const Sec1=()=>{
    return(<>
        <div className="big_portion container-fluid">
            <div className="head_img container-fluid">
                <img src={big2} alt="img_err"/>
            </div>
            <div className="head_text">
                <h1 className="future">The future</h1>
                <h1 className="health">of health</h1>
                <h3 className="clear">is clear</h3> 
                <button className="btn_me">Shop All</button>
            </div>
        </div>
        <section className="sec1 container-fluid">
            <div className="all_cards container">
                <div className="box box1">
                    <img src={multi} alt="img_errr"/>
                    <h5>shop Mulivitamin</h5>
                </div>
                <div className="box box2">
                    <img src={protin} alt="img_errr"/>
                    <h5>shop Protin</h5>
                </div>
                <div className="box box3">
                    <img src={prag} alt="img_errr"/>
                    <h5>shop Pregnancy</h5>
                </div>
                <div className="box box4">
                    <img src={bundle} alt="img_errr"/>
                    <h5>shop Bundles</h5>
                </div>
            </div>

            <div className="essentials">
                <div className="heading">
                    <h4 className="text-center">Daily essentials with good intentions</h4>
                    <h4 className="text-center for px-4"> for living life or creating it.</h4>
                </div>
                
                <div className="logs container">
                    <div className="text-center arrow width">
                        <i class="fas fa-chevron-circle-right"></i>
                        <h6> Traceable Ingredients</h6>
                    </div>
                    <div className="text-center wrong width">
                        <i class="far fa-times-circle"></i>
                        <h6>Non-GMO</h6>
                    </div>
                    <div className="text-center tick width">
                        <i class="far fa-check-square"></i>
                        <h6>Third Party Tested</h6>
                    </div>
                    <div className="text-center vegan width">
                        <i class="fas fa-seedling"></i>
                        <h6>Vegan</h6>
                    </div>
                    <div className="text-center drop width">
                        <i class="fas fa-tint"></i>
                        <h6 >No Artificial Flavors or Synthetic Fillers</h6>
                    </div>
                </div>
            </div>
        </section>
        
    </>)
}

export default Sec1;