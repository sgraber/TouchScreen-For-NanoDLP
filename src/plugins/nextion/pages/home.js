require("babel-polyfill");
import abstract from "./abstract.js";

export default class Home extends abstract{


  constructor(screenManager){
    super(screenManager);
  }

  async init(options){
    await this.setScreen("home");
    await this.setText("t0", "Not Printing");
    
    if(options)
      console.log("options", options);
    
    this.addListener("click_b3", (e)=>{
      this.changePage("settings");
    });

    this.addListener("click_b1", (e)=>{
      this.changePage("plates");
    });
    
    this.addListener("click_b0", (e)=>{
      this.changePage("/button/press/0");
    });
    
    this.addListener("click_b2", (e)=>{
      this.changePage("/button/press/1");
    });
    
    this.addListener("click_b4", (e)=>{
      this.changePage("/printer/off");
    });
    
    this.addListener("click_b5", (e)=>{
      this.changePage("printer/restart");
    });    
  }
  
  async update(status, log){
    if(status.Printing){
      return this.changePage("home");
    }
  }
}
