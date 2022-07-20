// Get Elements
const fiverr_form = document.getElementById('fiverr_form');
const msg = document.querySelector('.msg');
const counter = document.querySelector('.counter');




// fiverr_form submit
fiverr_form.onsubmit = (e) => {
    e.preventDefault();

    // Get data from fiverr_form
    const form_data = new FormData(e.target);
    const { date, time } = Object.fromEntries(form_data.entries());
    

    // validation
    if( !date || !time ){
        msg.innerHTML = setAlert('Date and time must be selected !');
    };

    // Get timestamps
    const start_time = Date.now();
    const end_time = new Date( date + ' ' + time );
    const order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

    // Get value form milisecound
    const total_sec = Math.floor(order_time / 1000);
    const total_min = Math.floor(total_sec / 60);
    const total_hour = Math.floor(total_min / 60);
    const total_day = Math.floor(total_hour / 24);

    
    const hours = total_hour - (total_day * 24 );
    const min = total_min - (total_day * 24 * 60 ) - ( hours * 60 );
    const sec = total_sec - ( total_day * 24 * 60 * 60 ) - ( hours * 60 * 60 ) - ( min * 60 );


    counter.innerHTML = ` <h1>${ total_day } Days : ${ hours } Hours : ${ min } Minites : ${ sec } Secound</h1> `

    
    const count = setInterval(() => {
    
        // Get timestamps
        const start_time = Date.now();
        const end_time = new Date( date + ' ' + time );
        const order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

        // Get value form milisecound
        const total_sec = Math.floor(order_time / 1000);
        const total_min = Math.floor(total_sec / 60);
        const total_hour = Math.floor(total_min / 60);
        const total_day = Math.floor(total_hour / 24);

        
        const hours = total_hour - (total_day * 24 );
        const min = total_min - (total_day * 24 * 60 ) - ( hours * 60 );
        const sec = total_sec - ( total_day * 24 * 60 * 60 ) - ( hours * 60 * 60 ) - ( min * 60 );

        if( total_sec <= 0 ){
            clearInterval(count)
        };

        counter.innerHTML = ` <h1>${ total_day } Days : ${ hours } Hours : ${ min } Minites : ${ sec } Secound</h1> `

   }, 1000);

};