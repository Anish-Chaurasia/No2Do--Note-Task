import React, { useEffect, useState } from 'react'
import notestyl from './notes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addnotes, handlefav, removenote } from './NoteCounterSlice';





function Notes() {
  const currDate = new Date().toLocaleDateString("de-DE");
  const currTime = new Date().toLocaleTimeString();
  const currdateTime = `${currDate} | ${currTime}`
  const [newnote, setNewnote] = useState(true)
  const [userinput, setUserinput] = useState({ head: "", txt: "", fav: false, currDateTime: currdateTime })

  const notelist = useSelector(state => state.notes);
  const dispatch = useDispatch();
  console.log(notelist)

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserinput({ ...userinput, [name]: value });
  }

  useEffect(() => {
    setUserinput({ head: "", txt: "", fav: false, currDateTime: currdateTime })

  }, [notelist])

  return (
    <div className={notestyl.container} >

      {
        notelist.length == 0 ? <img id={notestyl.empty} src='./noteimg/emptynotes.png' /> : (

          <div>
            <div id={notestyl.yournotes}>
              <div>     <h1>Your Notes</h1></div>
              <div id={notestyl.notenavbtn}> <button>All Notes</button>
                <button>Favourite Notes</button></div>
            </div>
            <div className={notestyl.allnotediv}>

              {
                notelist.map((item, index) => {
                  return (
                    <div className={notestyl.singlenotediv}>
                      <div className={notestyl.headdiv}>  <h2>{item.head}</h2></div>
                      <div id={notestyl.para}>
                        <p>{item.txt}</p>
                      </div>
                      <div className={notestyl.time_imp_div}>
                        <div > <p>{item.currDateTime}</p>
                          {item.fav == false ? <img src='./noteimg/notfav.png' /> : <img src='./noteimg/addfav.png' />}</div>
                        <button key={index} id={notestyl.btn1} onClick={() => dispatch(handlefav(index))}>Important</button>
                        <button id={notestyl.btn2} key={index} onClick={() => dispatch(removenote(index))}>Delete</button>
                      </div>



                    </div>
                  )

                })
              }
            </div>
          </div>
        )


      }
      <div className={!newnote ? notestyl.notshowtextinput : notestyl.showtextinput}>
        <div className={notestyl.formdiv}>

          <form onSubmit={(event) => dispatch(addnotes({ userinput: userinput, x: event }))}>
            <input type='text' value={userinput.head} name='head' onChange={handleinput} placeholder='Add Title' required />
            <textarea typeof='textarea' value={userinput.txt} name='txt' onChange={handleinput} placeholder='Make Your Notes' />
            <div>
              <button type='submit' >Add Note</button>
              <button type='button' onClick={()=>setNewnote(!newnote)}>Close</button>
            </div>
          </form>
        </div>

      </div>
      <div className={notestyl.addnew}>
        <button type='button' onClick={() => setNewnote(!newnote)}>{!newnote ? <img src='./noteimg/add.png' /> : <img src='./noteimg/minus.png' />}</button>


      </div>

    </div>

  )
}

export default Notes
