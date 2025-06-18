import './App.css'
import { useEffect, useRef, useState } from 'react'


function Timer() {
    let isampm
    useEffect(() => {
        const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let ampm = time.getHours();
    //let seconds = time.getSeconds() // comment this later and indent hour if
        let hdisplay = document.getElementById("hour")
        let mindisplay = document.getElementById("minutes")
    if(hour > 12){
        hour = hour - 12;
        console.log(hour  + "aa")
    } // try a set interval later fix indentation
            
           

     isampm = ampm >= 12 ? "PM" : "AM" // bring let down if it does not work
    console.log(isampm)
    let smin = String(minutes)
    let nsmin = Number(smin)
     if(minutes < 10){
        //minutes = Number("0") + minutes;
      // mindisplay.innerHTML = "0" + minutes.toString()
       //console.log(minutes)
       //console.log( "0" + minutes.toString())
          // only bottom here uncomment
       
        smin =  String(minutes.toString())
        console.log(smin);
        mindisplay!.innerHTML =  `0${smin}`
        

         // test code
    }
       console.log(smin)
    if(minutes == 0) {
        mindisplay!.innerHTML = "00"
          //test code
    }

    if(minutes == 10) {
        mindisplay!.innerHTML = "10"
          //test code
    }

    if(minutes > 10) {
        mindisplay!.innerHTML = minutes.toString()
        
    }
   // if(hour == 13) {
       // hdisplay.innerHTML = "1"
    //}// testing REMOVE IF CAUSING ISSSUES
    let alt = minutes
    setInterval(() => {
        //let ss = Number(mindisplay)
        //mindisplay.innerHTML = String(ss)
            //if(hour > 12){
                //hour = hour - 12;
               //console.log(hour  + "aa")
            //}// try >= 13 later it shows when it's 2 o clock but not for 1 o clock
      

        if(minutes >= 9 && minutes !== 60) { // 9 just for testing change back to 10 later
            mindisplay!.innerHTML = String(minutes += 1)
            console.log(minutes)
            }
          // setinterval works but this is just incrments the number once then repeats it every 60 seconds
          // the issue is minutes is not increasing 
     // testing
          //if(hour == 13) {
           // hour = 1
        // } // testing

        if(hour == 12 && minutes == 60) {
           mindisplay!.innerHTML = `00`
           minutes = 0
           hour = 1
           hdisplay!.innerHTML = String(hour)
           console.log(hour  + "aa")
        } // shows 1 aa imdiatly but doesn't show in the dom we will add it tommorow 

         if(minutes == 60 && hour !== 12) { // get rid of || later add && hour !== 12
            mindisplay!.innerHTML = `00`
            hdisplay!.innerHTML = String(hour += 1)
            minutes = 0  // just testing
            console.log(minutes)
            console.log(hour)// testing 
         } // it shows 1aa imdiatley when it's up here
         //if(hour == 13) {
           // hour = 1
         //} // testing

         //if(hour > 12){
           // hour = hour - 12;
           //console.log(hour  + "aa")
        //} // it shows 1aa which means it kind of works it shows 1 minute after the hour changes to 13

        //if(minutes == 60) { // get rid of || later add && hour !== 12
           // mindisplay.innerHTML = `00`
           // hdisplay.innerHTML = String(hour += 1)
           // minutes = 0  // just testing
            //console.log(minutes)
            //console.log(hour)// testing
         //}

          
         if(minutes == 0 && minutes < 1) { // remove second
            mindisplay!.innerHTML = `00` 
            //mindisplay!.innerHTML = "0" + String(minutes += 1) just a test after 60 seconds interveal
            // test
            setTimeout(() => {
                mindisplay!.innerHTML = "0" + String(minutes += 1)
               // minutes+= 1 
                console.log(minutes)
                console.log("should not")
            },60000) // test
             // test remove later
             //test remove later
             //setInterval(() => {
                //minutes += 1
             //}, 60000)
            
       }  //testing
         
       //if(minutes == 1) {
       // mindisplay.innerHTML = `0${minutes}`
      // } // testing remove later

         console.log(minutes)
        // let age = 13
        // if(age == 13 || age > 13) {
         //   console.log("teen")
        // }

        
         //if(minutes == 0) {
           //mindisplay.innerHTML = `0${minutes}` // change to 00 later
           //console.log("waho")
           //console.log(minutes)
          // minutes += 1 // testing  
         //} // testing

          // if(minutes == 1) {
           // mindisplay.innerHTML = "0" + String(minutes)
           //} // testing remove later

         if(minutes <= 9 && minutes > 1) { // add = sign later
           mindisplay!.innerHTML = "0" + String(minutes += 1)  // use minutes 
           
         
          console.log("This is a test")
          console.log(minutes)
        }
         // just testing get rid of later

         //if(minutes < 10) {
           // mindisplay.innerHTML = String(minutes + 1)
         //}

    }, 60000); //testing
      
    console.log("0" + String(nsmin += 1) ) // this works 
    console.log(Number(minutes.toString()) + 1 )
    console.log(String(Number(minutes.toString())) + 1)
    console.log(minutes.toString() + String(1))
    console.log(String(minutes +  1))

    //if(seconds == 60) {
        //mindisplay.innerHTML = minutes.toString() + 1
        
    //} // testing

    //if(seconds > 10) {
        //let ss = Number(minutes.toString() + 1)
        //mindisplay.innerHTML = `${ss}`
   // } //testing

    hdisplay!.innerHTML = hour.toString() // this might be the issue why it's not showing one
    
    
    
    console.log(hour, time.getMinutes(),time.getSeconds());
        console.log("hdisplay:", hdisplay)
        console.log("mindisplay:", mindisplay)

       
       
    },[])

         
          
         function setalarm() {
            let alarmText = document.getElementById("alarm")
            alarmText!.innerHTML = "Stop Alarm"
            let alarm = document.getElementById("alarmcon") as HTMLElement
            const selectElement = document.getElementById("mins") as HTMLSelectElement
            const selectedVal = selectElement.value
            const selectedText = selectElement.options[selectElement.selectedIndex].text
            const selectElementH = document.getElementById("Hour") as HTMLSelectElement
            const selectedTextH = selectElementH.options[selectElementH.selectedIndex].text
            let minval = document.getElementById("minutes")
            let hourval = document.getElementById("hour")
            const selectElementT = document.getElementById("ampm") as HTMLSelectElement
            const selectedTextT = selectElementT.options[selectElementT.selectedIndex].text
            let isPaused = false
            console.log("yellows")
            //console.log(minutes)
            console.log(minval)
            console.log(selectedText)
            console.log(selectedTextH)
            console.log(selectedTextT)
            const audio = new Audio('public/sparkle.mpeg')
            let clicked = 1
            const checkt = setInterval(() => {
              if(minval?.innerHTML == selectedText) {
            console.log("we got a match")
           }

           if(hourval?.innerHTML == selectedTextH) {
            console.log("we got a match for hour")
           }

           if(isampm! == selectedTextT) {
            //console.log("we got a match for am/pm")
           }

             if(minval?.innerHTML == selectedText && hourval?.innerHTML == selectedTextH && isampm! == selectedTextT) {
                clearInterval(checkt)
                audio.play()
                 alarmText!.innerHTML = "Set Alarm"
             }
            },1000)
             // if ending
              // test
        
         // testing 
             alarm?.addEventListener("click",() => {
                clearInterval(checkt)
              console.log("check cleared!")
               console.log("you you")
              alarmText!.innerHTML = "Set Alarm"
               clearInterval(checkt)
               
           })

           
        
    }


    
   
    

        return(
            <>
            <div id='time'>
             <h1  id = 'hour'>00</h1>
             <h1 id='colon'>:</h1>
             <h1 id='minutes'>00</h1>
            </div>
            <div className='control'>
                <div className='options'>
                <span className='hourpick'>
                 <h1 className='hourlable'>Hour</h1>
                <select name="Hour" id="Hour">
                    <option value={0}> Select Hour</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                </select>

            </span>
            <span className='minpick'>
                <h1 className='minlable'>Minutes</h1>
                <select name="mins" id="mins">
                    <option value={0}>Select Minutes</option>
                    <option value={1}>00</option>
                    <option value={2}>01</option>
                    <option value={3}>02</option>
                    <option value={4}>03</option>
                    <option value={5}>04</option>
                    <option value={6}>05</option>
                    <option value={7}>06</option>
                    <option value={8}>07</option>
                    <option value={9}>08</option>
                    <option value={10}>09</option>
                    <option value={11}>10</option>
                    <option value={12}>11</option>
                    <option value={13}>12</option>
                    <option value={14}>13</option>
                    <option value={15}>14</option>
                    <option value={16}>15</option>
                    <option value={17}>16</option>
                    <option value={18}>17</option>
                    <option value={19}>18</option>
                    <option value={20}>19</option>
                    <option value={21}>20</option>
                    <option value={22}>21</option>
                    <option value={23}>22</option>
                    <option value={24}>23</option>
                    <option value={25}>24</option>
                    <option value={26}>25</option>
                    <option value={27}>26</option>
                    <option value={28}>27</option>
                    <option value={29}>28</option>
                    <option value={30}>29</option>
                    <option value={31}>30</option>
                    <option value={32}>31</option>
                    <option value={33}>32</option>
                    <option value={34}>33</option>
                    <option value={35}>34</option>
                    <option value={36}>35</option>
                    <option value={37}>36</option>
                    <option value={38}>37</option>
                    <option value={39}>38</option>
                    <option value={40}>39</option>
                    <option value={41}>40</option>
                    <option value={42}>41</option>
                    <option value={43}>42</option>
                    <option value={44}>43</option>
                    <option value={45}>44</option>
                    <option value={46}>45</option>
                    <option value={47}>46</option>
                    <option value={48}>47</option>
                    <option value={49}>48</option>
                    <option value={50}>49</option>
                    <option value={51}>50</option>
                    <option value={52}>51</option>
                    <option value={53}>52</option>
                    <option value={54}>53</option>
                    <option value={55}>54</option>
                    <option value={56}>55</option>
                    <option value={57}>56</option>
                    <option value={58}>57</option>
                    <option value={59}>58</option>
                    <option value={60}>59</option>
                </select>
            </span>
            <span className='ampmpick'>
            <h1 className='ampmlable'>AM/PM</h1>
            <select name='ampm' id='ampm'>
                <option value={0}>Select time notation</option>
                <option value='AM'>AM</option>
                <option value='PM'>PM</option>
            </select>
            </span>
            </div>
            <span id='alarmcon'>
                <button id='alarm' onClick = {setalarm}>Set Alarm</button>
            </span>
            </div>
            </>
           

        )
        
        
}
console.log("hello")
//useEffect(() => {
    
    
    
    
    
//},[])
    
    




console.log("Say here")
export default Timer