window.addEventListener("load",checkInternetConnection());
function checkInternetConnection(){
    const statusText = document.getElementById('statusText');
    const IpAddressText = document.getElementById('IpAddressText');
    const NetworkStrengthText = document.getElementById('NetworkStrengthText');
    statusText.textContent = 'checking....'
    if(navigator.onLine)//it is used to check wether the system is online or not
    {
        fetch('https://api.ipify.org?format=json') //it is used to fecth the data form he ipify.org wesite
        .then((Response)=>Response.json())//it is used to conver the obtain response form the website to json
        .then((data)=>{
            IpAddressText.textContent = data.ip;
            statusText.textContent = 'Connected';
            
            const connection = navigator.connection;

            const NetworkStrength = connection ? connection.downlink + ' Mbps': 'Unknown'; 
            NetworkStrengthText.textContent = NetworkStrength;
        })
    }else{
        statusText.textContent="Disconnected";
        IpAddressText.textContent = '-';
        NetworkStrengthText.textContent = '-';

    }
}