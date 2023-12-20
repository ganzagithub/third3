document.addEventListener('DOMContentLoaded', function() {
    let MenuBtn = document.getElementById('MenuBtn');

    if (MenuBtn) {
        MenuBtn.addEventListener('click', function(e) {
            let bodyElement = document.querySelector('body');

            if (bodyElement) {
                bodyElement.classList.toggle('mobile-nav-active');
            }

            // Toggle between 'fa-bars' and 'fa-xmark'
            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-xmark');
        });
    }

    // Your Typed.js code goes here (assuming the library is properly loaded)
    let typed = new Typed('.auto-input', {
        strings: ['front-end developer!', 'freelancer!', 'UI Designer!', 'youtuber!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map');
    var icon = document.getElementById('location-icon');
    var locationLink = document.getElementById('location-link');

    function toggleMapVisibility() {
        // Toggle the visibility of the map
        map.style.display = (map.style.display === 'none' || map.style.display === '') ? 'block' : 'none';
    }

    icon.addEventListener('click', toggleMapVisibility);

    // Add click event to the location link
    locationLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the link from navigating
        toggleMapVisibility();
    });
});

var map = document.getElementById('map');
var locationLink = document.getElementById('location-link');
var locationIcon = document.querySelector('.icon');

function toggleMapVisibility() {
    // Toggle the visibility of the map
    map.style.display = (map.style.display === 'none' || map.style.display === '') ? 'block' : 'none';
}

// Add click event to the location link
locationLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from navigating
    toggleMapVisibility();
});

// Add click event to the location icon
locationIcon.addEventListener('click', function () {
    toggleMapVisibility();
});
var map = document.getElementById('map');
var locationLink = document.getElementById('location-link');
var locationIcon = document.querySelector('.icon');

function toggleMapVisibility() {
    // Toggle the visibility of the map
    map.style.display = (map.style.display === 'none' || map.style.display === '') ? 'block' : 'none';
}

// Add click event to the location link
locationLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from navigating
    toggleMapVisibility();
});

// Add click event to the location icon
locationIcon.addEventListener('click', function () {
    toggleMapVisibility();
});
var map = document.getElementById('map');
var locationLink = document.getElementById('location-link');
var locationIcon = document.querySelector('.icon');

function toggleMapVisibility() {
    // Toggle the visibility of the map
    map.style.display = (map.style.display === 'none' || map.style.display === '') ? 'block' : 'none';
}

// Add click event to the location link
locationLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from navigating
    toggleMapVisibility();
});

// Add click event to the location icon
locationIcon.addEventListener('click', function () {
    toggleMapVisibility();
});
document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map');
    var locationLink = document.getElementById('location-link');
    var locationIcon = document.querySelector('.icon');

    function toggleMapVisibility() {
        // Toggle the visibility of the map
        map.style.display = (map.style.display === 'none' || map.style.display === '') ? 'block' : 'none';
    }

    // Add click event to the location link
    locationLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the link from navigating
        toggleMapVisibility();
    });

    // Add click event to the location icon
    locationIcon.addEventListener('click', function () {
        toggleMapVisibility();
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        var locationLink = document.getElementById('location-link');
        var locationInfo = document.getElementById('location-info');

        locationLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from navigating

            // Create an iframe element for Google Maps
            var iframe = document.createElement('iframe');
            iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.552373306264!2d30.05802887405004!3d-1.931107736668913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca40387460893%3A0x11e1445d1a3cbdd6!2sKG%2014%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1702801053025!5m2!1sen!2srw";
            iframe.width = "100%";
            iframe.height = "250";
            iframe.style.border = "4px";
            iframe.style.loading = "lazy";
            iframe.style.referrerpolicy = "no-referrer-when-downgrade";

            // Append the iframe to the location info div
            locationInfo.innerHTML = ''; // Clear any existing content
            locationInfo.appendChild(iframe);

            // Show the location info
            locationInfo.style.display = 'block';
        });
    });
    document.getElementById('messageForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simulate sending the message (you can replace this with actual AJAX request)
        var message = document.getElementById('message').value;

        // Save the message to local storage
        localStorage.setItem('lastMessage', message);

        // Show the notification
        showNotification();

        // Clear the form
        document.getElementById('messageForm').reset();
    });

    function showNotification() {
        var notification = document.getElementById('notification');
        notification.style.display = 'block';

        // Hide the notification after 3 seconds (adjust as needed)
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    }

    // Check for new messages on page load
    window.addEventListener('load', function () {
        var lastMessage = localStorage.getItem('lastMessage');

        if (lastMessage) {
            // Display the last message
            alert('New Message Received:\n' + lastMessage);
            
            // Clear the stored message after displaying it
            localStorage.removeItem('lastMessage');
        }
    });