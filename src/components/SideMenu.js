import React, { useEffect, useState } from 'react';
import MenuItem from './Menuitems';



const menuItems=[
    {name: "Dashboard" ,exact:true, to:`/`},
    {
        name:"Content",
        exact:true,
        to:`/content`,
        subMenus:[{name: "Courses" , to:'/Content/Courses'},{name:"Videos" , to:'/Content/Videos'} ],
    },
    {name:"Design",to:`/design`},
];



const SideMenu=(props)=>{
     const [inactive,setInactive]=useState(false);
       
     useEffect(()=>{
         if(inactive){
             document.querySelectorAll('.sub-menu').forEach(el=>{
                 el.classList.remove("active");
             })
         }
         props.onCollapse(inactive);
     },[inactive])

     

    return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
       <div className="top-section">
           <div className="logo">
               <img src="https://freepngimg.com/thumb/tea/75299-leaf-tea-ideas-environmental-vector-design-logo-thumb.png" alt="webscript" />
           </div>
             <div 
             onClick={()=>setInactive(!inactive)}
               className="toggle-menu-btn">
             {!inactive ? <i class="bi bi-arrow-left-circle-fill"></i> : <i class="bi bi-arrow-right-circle-fill"></i>}
             </div>
             </div>

                <div className="search-container">
                    <button  className="search-btn">
                    <i class="bi bi-search"></i>
                    </button>
                    
                    <input type="text" placeholder="search" />
                </div>
                        <div className="divider">
                            
                        </div>


                     <div className="main-menu">
                         <ul>
                             {
                                 menuItems.map((menuItem,index)=>(
                                     <MenuItem
                                     key={index}
                                     name={menuItem.name}
                                     exact={menuItem.exact}
                                     to={menuItem.to}
                                     subMenus={menuItem.subMenus || []}
                                     onClick={()=>{
                                         if(inactive){
                                             setInactive(false);
                                         }
                                     }}
                                     />
        

                                 ))

                             }
                             {/* <li>
                                 <a className="menu-item">
                                     <div className="menu-icon">
                                     <i class="bi bi-speedometer2"></i>
                                     </div>
                                     <span>DashBoard</span></a>
                             </li>

                             <MenuItem 
                             name={"Content"}
                             subMenus={[{
                                 name: "Courses"
                             },{
                                 name:"Videos"
                             }
                            ]}
                             />

                             <li>
                                 <a className="menu-item">
                                     <div className="menu-icon">
                                     <i class="bi bi-vector-pen"></i>
                                     </div>
                                     <span>Design</span></a>
                             </li> */}
                         </ul>
                         </div> 

                         <div className="side-menu-footer">
                             <div className="avatar">
                                 <img src="https://image.shutterstock.com/image-vector/creative-minimalist-letter-m-logo-600w-1289019160.jpg" alt="image" />
                             </div>
                              <div className="user-info">
                                  <h5>Mohit Mittal[NITJ]</h5>
                                   <p>mittalbaba123@gmail.com</p>
                                   <p>+91 7007585756</p>
                              </div>

                             </div>  
                       

       
    </div>
    )
};

export default SideMenu ;