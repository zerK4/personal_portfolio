new Chart(document.getElementById("stats"), {
    type: 'line',
    data: {
      labels: ["Accounts","Users", "Servers", "Computers", "Admins", "Managers","Breaches", "Phishing Attacks" ],
      datasets: [
        {
          label: "Business Data",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,1000,6000,500,1500,6000,500,1500]
        }
      ]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {  
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stats Chart'
          }
        }
      },
});

new Chart(document.getElementById("donut-chart"), {
    type: 'pie',
    data: {
      labels: ["Accounts", "Servers", "Computers", "Admins", "Managers"],
      datasets: [
        {
          label: "Business Data",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,1000,6000,500,1500]
        }
      ]
    },
    options: {
        scale: '1.1',
        type: 'scale',
        responsive: true,
        plugins: {
          legend: {  
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stats Chart'
          }
        }
      },
});
new Chart(document.getElementById("chart2"), {
    type: 'radar',
    data: {
      labels: ["Accounts", "Servers", "Computers", "Admins", "Managers"],
      datasets: [
        {
          label: "Business Data",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,1000,6000,500,1500]
        }
      ]
    },
    options: {
        scale: '1.1',
        type: 'scale',
        responsive: true,
        plugins: {
          legend: {  
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stats Chart'
          }
        }
      },
});
new Chart(document.getElementById("chart3"), {
    type: 'polarArea',
    data: {
      labels: ["Accounts", "Servers", "Computers", "Admins", "Managers"],
      datasets: [
        {
          label: "Business Data",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,1000,6000,500,1500]
        }
      ]
    },
    options: {
        scale: '1.1',
        type: 'scale',
        responsive: true,
        plugins: {
          legend: {  
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stats Chart'
          }
        }
      },
});
new Chart(document.getElementById("chart4"), {
    type: 'bar',
    data: {
      labels: ["Accounts", "Servers", "Computers", "Admins", "Managers"],
      datasets: [
        {
          label: "Business Data",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5000,1000,6000,500,1500]
        }
      ]
    },
    options: {
        scale: '1.1',
        type: 'scale',
        responsive: true,
        plugins: {
          legend: {  
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stats Chart'
          }
        }
      },
});