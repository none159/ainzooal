import React from 'react'
import lvl from '../images/Screenshot at Aug 23 12-08-26.png'
import stats from '../images/Screenshot at Aug 23 12-09-15.png'
import minigame from '../images/Screenshot at Aug 23 12-10-50.png'
import welcoming from '../images/Screenshot at Aug 23 12-08-53.png'
const Hero = ()=>{
    return(
        <section className='Hero-section'>
            <div className='hero-container'>
                <div className='invite-container'>
                    <h2>Make your Discord server More Boring with Ainzu</h2>
                    <a className='invite' href='https://discord.com/api/oauth2/authorize?client_id=1011607290643763221&permissions=8&scope=bot' target='_blank'>Add to Server</a>
                </div>
                <div className='boxes'>
                       <h2 className='title'>
                          Why Ainzu?
                       </h2>
                       <div className='boxes-container'>
                        <div className='box1'>
                            <h2>- No reason</h2>
                            <h3>
                                there is no reason<br></br>
                                to add Ainzu<br></br>
                                to your Server<br></br>
                                if you don't have<br></br>
                                a boring life.
                            </h3>
                        </div>
                        <div className='box2'>
                            <h2>- Not Responsable</h2>
                            <h3> You can punish member<br></br>
                                without feeling <br></br>
                                responsable.
                            </h3>
                        </div>
                        <div className='box3'>
                            <h2>- Feeling good</h2>
                            <h3>
                                you can feel good <br></br>
                                about yourself <br></br>
                                if you have boring <br></br>
                                life like Ainzu
                            </h3>
                        </div>
                      </div>
                      <a href='https://discord.com/api/oauth2/authorize?client_id=1011607290643763221&permissions=8&scope=bot' style={{textDecoration:'none'}} target='_blank'><button className='invite invite2' >Invite to Server</button></a>
                </div>
                <div className='features'>
                          <div className='feature1'>
                            <div>
                            <h2>Leveling system</h2>
                            <h3>Ainzu leveling system misures how boring your life is by typing</h3>
                            </div>
                            <img src={lvl}></img>
                          </div>
                          <div className='feature2'>
                           <div>
                            <h2>Mini game</h2>
                            <h3>Enhance your irresponsible feeling by playing the mini game and winning</h3>
                            </div>
                           <img src={minigame}></img>
                          </div>
                          <div className='feature3'>
                            <div>
                            <h2>Members Stats</h2>
                            <h3>Check other members stats and Enhance your secureness</h3>
                            </div>
                            <img src={stats}></img>
                          </div>
                          <div className='feature4'>
                            <div>
                            <h2>Welcoming</h2>
                            <h3>Ainzu welcoming new boring members to the Server</h3>
                            </div>
                            <img src={welcoming}></img>
                          </div>
                      </div>
            </div>
        </section>
    )
}
export default Hero;