// Get references to the country and state dropdowns
var countryDropdown = document.getElementById("countryId");
var stateDropdownContainer = document.getElementById("state-dropdown-container");
var stateDropdown = document.querySelector("#state-dropdown-container select");

// Define the state options for each country
var stateOptions = {
    India: [
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        // Add more state options here as needed
    ],
    USA: [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'Alaska', label: 'Alaska' },
        { value: 'Arizona', label: 'Arizona' },
        { value: 'Arkansas', label: 'Arkansas' },
        // Add more state options here as needed
    ],
    // Define state options for other countries here
};

// Add an event listener to the country dropdown
function myCountries() {
    // Get the selected country value
    var selectedCountry = countryDropdown.value;

    // If the selected country is USA, show the state dropdown and populate the options
    if (selectedCountry === "USA") {
        // Show the state dropdown
        stateDropdownContainer.style.display = "block";

        // Remove any existing options from the state dropdown
        stateDropdown.innerHTML = "";
        
        // Add the state options for the selected country
        stateOptions[selectedCountry].forEach(function (state) {
            var option = document.createElement("option");
            option.value = state.value;
            option.textContent = state.label;
            stateDropdown.appendChild(option);
        });
    }
    else if (selectedCountry === "India") {
        stateDropdownContainer.style.display = "block";

        // Remove any existing options from the state dropdown
        stateDropdown.innerHTML = "";

        // Add the state options for the selected country
        stateOptions[selectedCountry].forEach(function (state) {
            var option = document.createElement("option");
            option.value = state.value;
            option.textContent = state.label;
            stateDropdown.appendChild(option);
        });
    }
    else {
        // If the selected country is not USA, hide the state dropdown
        stateDropdown.innerHTML = "<option value=''>Select State</option>";   
        // stateDropdownContainer.style.display = "none";
    }
};