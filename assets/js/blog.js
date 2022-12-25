// Fetch HPB Public Covid-19 API


// Update Time

const article_six = document.getElementById('article_six');



// Date & Time

let getarticle_six = () => {

    fetch(`https://techuvindubro.blogspot.com/feeds/posts/default?alt=json`)
    .then(response => {
        return response.json()
    })
    .then(feed => {
        console.log(feed);
        article_six.innerHTML = feed.entry["6"].titile.$t;
        
    })

}

getarticle_six(); 


// Local Data

// Local New Cases

let getlocal_new_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        local_new_cases.innerHTML = data["data"].local_new_cases;

    })

}

 getlocal_new_cases();


 // Local Total Cases

let getlocal_total_cases = () => {

fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
.then(response => {
return response.json()
})
.then(data => {
console.log(data);
local_total_cases.innerHTML = data["data"].local_total_cases;

})

}

getlocal_total_cases();


// Local Active Cases

let getlocal_total_number_of_individuals_in_hospitals = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    local_total_number_of_individuals_in_hospitals.innerHTML = data["data"].local_total_number_of_individuals_in_hospitals;
    
    })
    
    }
    
getlocal_total_number_of_individuals_in_hospitals();


// Local Total Deaths

let getlocal_deaths = () => {

        fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
        .then(response => {
        return response.json()
        })
        .then(data => {
        console.log(data);
        local_deaths.innerHTML = data["data"].local_deaths;
        
        })
        
        }
        
getlocal_deaths();


// Local Recovered

let getlocal_recovered = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    local_recovered.innerHTML = data["data"].local_recovered;
    
    })
    
    }
    
getlocal_recovered();



// End of the Local Data



// Global Data


// Global New Cases

let getglobal_new_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_new_cases.innerHTML = data["data"].global_new_cases;
    
    })
    
    }
    
getglobal_new_cases();


// Global Total Cases

let getglobal_total_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_total_cases.innerHTML = data["data"].global_total_cases;
    
    })
    
    }
    
getglobal_total_cases();


// Global Deaths

let getglobal_deaths = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_deaths.innerHTML = data["data"].global_deaths;
    
    })
    
    }
    
getglobal_deaths();


// Global Recoverded

let getglobal_recovered = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_recovered.innerHTML = data["data"].global_recovered;
    
    })
    
    }
    
getglobal_recovered();


// Glbal PCR Test

let gettotal_pcr_testing_count = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    total_pcr_testing_count.innerHTML = data["data"].total_pcr_testing_count;
    
    })
    
    }
    
gettotal_pcr_testing_count();
