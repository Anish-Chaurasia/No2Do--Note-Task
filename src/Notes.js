import React, { useState } from 'react'
import notestyl from './notes.module.css'


function Notes() {
  const [newnote, setNewnote] = useState(false)
  const [userinput, setUserinput] = useState({ head: "", txt: "", fav: false })
  const [notelist, setNotelist] = useState([])
  const currDate = new Date().toLocaleDateString("de-DE");
  const currTime = new Date().toLocaleTimeString();

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserinput({ ...userinput, [name]: value });
  }

  function handledata(event) {
    event.preventDefault();
    setNotelist([...notelist, userinput])
    setUserinput({ head: "", txt: "", fav: false })
    setNewnote(!newnote)

  }


  return (
    <div className={notestyl.container} >

      {
        notelist.length == 0 ? <img id={notestyl.empty} src='./noteimg/emptynotes.png' /> : (

          <div>
            {
              notelist.map(item => {
                return (
                  <div>
                    <h1>{item.head}</h1>
                    <button>imp</button>
                    <p>{currDate}</p>
                    <p>{}</p>
                    <p>{item.txt}</p>


                  </div>
                )

              })
            }
          </div>
        )


      }
      <div className={!newnote ? notestyl.notshowtextinput : notestyl.showtextinput}>

        <form onSubmit={handledata}>
          <input type='text' value={userinput.head} name='head' onChange={handleinput} placeholder='Add Title' required />
          <textarea typeof='textarea' value={userinput.txt} name='txt' onChange={handleinput} placeholder='Make Your Notes' />
          <button type='submit' >Add Note</button>
        </form>

      </div>
      <div className={notestyl.addnew}>
        <button type='button' onClick={() => setNewnote(!newnote)}>{!newnote ? <img src='./noteimg/add.png' /> : <img src='./noteimg/minus.png' />}</button>


      </div>

    </div>

  )
}

export default Notes
