import React from 'react'
import "../style/LekcijaCela.css"
import { Link } from 'react-router-dom';

const LekcijaCela = ({l}) => {


    return (
        <section className='background'>
          <div className="container py-5 h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <img className='details-img' src={l.imageUrl}alt="Photo"  />
              <div className="col-12 col-md-8 col-lg-6 col-xl-5" >
                  <div className="card bg-dark text-white" style={{borderRadius: 1+"rem"}}>
                    <div className="card-body p-5 text-center">
    
    
    
                        <div className="mb-md-3 mt-md-2 pb-5">
    
                            
                            <p className="title" >{l.naziv}</p>
    
    
                            <div className="form-outline form-white mb-4">
                                <p className="author" >Trajanje: {l.trajanje}</p>
                            </div>
    
                            <div className="form-outline form-white mb-4">
                              <p className="cat" >Tezina: {l.tezina}</p>
                            </div>
    
                            <div className="form-outline form-white mb-4">
                              <p className="desc" >Tekst:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                            </div>
    
                        
                
                              
                               <a href ="/pocetna"> <button className="book-button">
                                 Završi sa učenjem
                                </button></a>
                              
                            </div>
    
                            
    
                        </div>
    
                </div>
                </div>
            </div>
            </div>
        
        </section>
    
    
    
    
     
    
  )


}
export default LekcijaCela