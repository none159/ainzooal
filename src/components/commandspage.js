import React from 'react'
import Nav from './nav'
import Footer from './footer'
const Commands = ()=>{
    return(
        <>
            <Nav />
            <section>
                <div className='commands-container'>
                    <div className='generalinfos'>
                        <h2>-Prefix:</h2>
                        <h3>Ainzu use a # prefix</h3>
                        <h2>-Rules:</h2>
                        <h3>0- Don't span commands</h3>
                        <h2>-Declaimes:</h2>
                        <h3>bot has some bugs on the minigame punishements</h3>
                    </div>
                    <span></span>
                    <div className='commands'>
                        <h2>-Stats:</h2>
                        <h3>Display yours or a member stat</h3>
                        <h2>-Level:</h2>
                        <h3>Display yours or a member level</h3>
                        <h2>-Declarwar:</h2>
                        <h3>a minigame but loser is punished</h3>
                        <h2>-Help:</h2>
                        <h3>show all available commands</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Commands;