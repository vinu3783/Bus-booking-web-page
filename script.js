
document.getElementById("traveler-form").addEventListener("submit", function(event) {
    event.preventDefault();

 
    const travelerDetails = {
        busName: document.getElementById("selected-bus").value,
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        aadhar: document.getElementById("aadhar").value,
        phone: document.getElementById("phone").value
    };
    sessionStorage.setItem("travelerDetails", JSON.stringify(travelerDetails));

   
    window.location.href = "ticket.html";
});

document.getElementById("traveler-form").addEventListener("submit", function(event) {
    event.preventDefault();

 
    const travelerDetails = {
        busName: document.getElementById("selected-bus").value,
        fromLocation: document.getElementById("from-location").value,
        toLocation: document.getElementById("to-location").value,
        travelDate: document.getElementById("travel-date").value,
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        aadhar: document.getElementById("aadhar").value,
        phone: document.getElementById("phone").value
    };
    sessionStorage.setItem("travelerDetails", JSON.stringify(travelerDetails));

 
    window.location.href = "ticket.html";
});





document.addEventListener("DOMContentLoaded", function() {
    const travelerDetails = JSON.parse(sessionStorage.getItem("travelerDetails"));
    
    if (travelerDetails) {
        document.getElementById("customer-id").innerText = generateCustomerId();
        document.getElementById("bus-name").innerText = travelerDetails.busName;
        document.getElementById("from-location").innerText = travelerDetails.fromLocation;
        document.getElementById("to-location").innerText = travelerDetails.toLocation;
        document.getElementById("travel-date").innerText = travelerDetails.travelDate;
        document.getElementById("first-name").innerText = travelerDetails.firstName;
        document.getElementById("last-name").innerText = travelerDetails.lastName;
        document.getElementById("age").innerText = travelerDetails.age;
        document.getElementById("sex").innerText = travelerDetails.sex;
        document.getElementById("aadhar").innerText = travelerDetails.aadhar;
        document.getElementById("phone").innerText = travelerDetails.phone;

    }
});


function generateCustomerId() {
    return "TG" + Math.floor(Math.random() * 1000000);
}


function downloadTicketPDF() {
    const ticketContainer = document.getElementById("ticket-container");
    html2pdf(ticketContainer, {
        margin: 1,
        filename: 'TravelGo_Ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}

document.getElementById("traveler-form").addEventListener("submit", function(event) {
    event.preventDefault();

  
    const travelerDetails = {
        busName: document.getElementById("selected-bus").value,
        from: document.getElementById("from").value,
        to: document.getElementById("to").value,
        date: document.getElementById("date").value,
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        aadhar: document.getElementById("aadhar").value,
        phone: document.getElementById("phone").value,
        


    };

   
    sessionStorage.setItem("travelerDetails", JSON.stringify(travelerDetails));
    console.log("Traveler Details: ", travelerDetails);


   
    window.location.href = "ticket.html";
});




document.addEventListener("DOMContentLoaded", function() {
  
    const travelerDetails = JSON.parse(sessionStorage.getItem("travelerDetails"));
    
    if (travelerDetails) {
        document.getElementById("customer-id").innerText = generateCustomerId();
        document.getElementById("bus-name").innerText = travelerDetails.busName;
        document.getElementById("from").innerText = travelerDetails.from;
        document.getElementById("to").innerText = travelerDetails.to;
        document.getElementById("date").innerText = travelerDetails.date;
        document.getElementById("first-name").innerText = travelerDetails.firstName;
        document.getElementById("last-name").innerText = travelerDetails.lastName;
        document.getElementById("age").innerText = travelerDetails.age;
        document.getElementById("sex").innerText = travelerDetails.sex;
        document.getElementById("aadhar").innerText = travelerDetails.aadhar;
        document.getElementById("phone").innerText = travelerDetails.phone;
        console.log("Traveler Details: ", travelerDetails);
    } else {
        console.error("Traveler details not found in sessionStorage.");
    }
});


function generateCustomerId() {
    return "TG" + Math.floor(Math.random() * 1000000);
}


function downloadTicketPDF() {
    const ticketContainer = document.getElementById("ticket-container");
    html2pdf(ticketContainer, {
        margin: 1,
        filename: 'TravelGo_Ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}
console.log("Traveler Details: ", travelerDetails);

if (sessionStorage.getItem("travelerDetails") === null) {
    alert("Traveler details are not found. Please return to the previous page and confirm your details.");
    window.location.href = "form.html";
}



























// Open the traveler details form modal and set the selected bus name
function openTravelerForm(busName) {
    document.getElementById("selected-bus").value = busName; // Set the selected bus name
    document.getElementById("traveler-form-modal").style.display = "block";
}

// Close the traveler details form modal
function closeTravelerForm() {
    document.getElementById("traveler-form-modal").style.display = "none";
}

// Handle traveler form submission
document.getElementById("traveler-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate that required fields have values
    const requiredFields = ['selected-bus', 'from-location', 'to-location', 'travel-date', 'first-name', 'last-name', 'age', 'sex', 'aadhar', 'phone'];
    let allFieldsFilled = true;

    requiredFields.forEach(fieldId => {
        if (!document.getElementById(fieldId).value) {
            allFieldsFilled = false;
            alert(`Please fill out the ${fieldId} field.`);
        }
    });

    if (allFieldsFilled) {
        // Save traveler details to sessionStorage
        const travelerDetails = {
            busName: document.getElementById("selected-bus").value,
            fromLocation: document.getElementById("from-location").value,
            toLocation: document.getElementById("to-location").value,
            travelDate: document.getElementById("travel-date").value,
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            age: document.getElementById("age").value,
            sex: document.getElementById("sex").value,
            aadhar: document.getElementById("aadhar").value,
            phone: document.getElementById("phone").value
        };
        sessionStorage.setItem("travelerDetails", JSON.stringify(travelerDetails));

        // Redirect to ticket.html
        window.location.href = "ticket.html";
    }
});

// Load traveler details into the ticket page when it loads
document.addEventListener("DOMContentLoaded", function() {
    const travelerDetails = JSON.parse(sessionStorage.getItem("travelerDetails"));
    
    if (travelerDetails) {
        document.getElementById("customer-id").innerText = generateCustomerId();
        document.getElementById("bus-name").innerText = travelerDetails.busName;
        document.getElementById("from-location").innerText = travelerDetails.fromLocation;
        document.getElementById("to-location").innerText = travelerDetails.toLocation;
        document.getElementById("travel-date").innerText = travelerDetails.travelDate;
        document.getElementById("first-name").innerText = travelerDetails.firstName;
        document.getElementById("last-name").innerText = travelerDetails.lastName;
        document.getElementById("age").innerText = travelerDetails.age;
        document.getElementById("sex").innerText = travelerDetails.sex;
        document.getElementById("aadhar").innerText = travelerDetails.aadhar;
        document.getElementById("phone").innerText = travelerDetails.phone;
    } else {
        alert("No traveler details found. Please go back and fill out the form.");
    }
});

// Generate a random Customer ID
function generateCustomerId() {
    return "TG" + Math.floor(Math.random() * 1000000);
}

// Function to download the ticket as a PDF
function downloadTicketPDF() {
    const ticketContainer = document.getElementById("ticket-container");
    html2pdf(ticketContainer, {
        margin: 1,
        filename: 'TravelGo_Ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}


