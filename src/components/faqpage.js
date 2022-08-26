import React from 'react'
import Nav from './nav'
import Footer from './footer'
const Faq = ()=>{
    return(
      <>
            <Nav />
            <section>
                <div className='faq-container'>
                    <h2 className='questions-title'>Questions</h2>
                    <div className='questions'>
                        <h2>1- Why member not punished?</h2>
                        <h3>we fixing this matter just try again it will work</h3>
                        <h2>2- Why bot offline?</h2>
                        <h3>the bot is offline when we're doing some changes</h3>
                        <h2>3- Why Im using this trash bot?</h2>
                        <h3>I don't know either It's just a boring bot for boring people.</h3>
                    </div>
                </div>
            </section>
            <Footer />
      </>
    )
}
export default Faq;