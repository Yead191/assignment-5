// function getInputValueById(id) {
//     parseFloat(document.getElementById(id).value)


// }


// noakhali

const noakhaliBtn = document.getElementById('noakhaliBtn')
noakhaliBtn.addEventListener('click', function () {
    const noakhaliDonatedAmount = parseFloat(document.getElementById('noakhaliAmount').innerText)
    const noakhaliInput = parseFloat(document.getElementById('noakhaliInput').value)
    const inputNoakhali = document.getElementById('noakhaliInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    const newBalance = wallet - noakhaliInput;
    balance.innerText = newBalance



    const totalDonated = noakhaliDonatedAmount + noakhaliInput;


    const finalNoakhali = document.getElementById('noakhaliAmount')

    finalNoakhali.innerText = totalDonated;
    inputNoakhali.value = ''

    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", 'mb-8')
    historytab.innerHTML = `
    <p class= "text-2xl font-bold mb-4">${noakhaliInput} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
    <p class="font-light text-md" >Date: ${new Date() }
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)




})


// lakshmipur
const laxBtn = document.getElementById('laxBtn')
laxBtn.addEventListener('click', function () {
    const laxDonatedAmount = parseFloat(document.getElementById('laxAmount').innerText)
    const laxInput = parseFloat(document.getElementById('laxInput').value)
    const inputlax = document.getElementById('laxInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    const newBalance = wallet - laxInput;
    balance.innerText = newBalance



    const totalDonated = laxDonatedAmount + laxInput;


    const finallax = document.getElementById('laxAmount')

    finallax.innerText = totalDonated;
    inputlax.value = ''

    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
    historytab.innerHTML = `
    <p class= "text-2xl font-bold mb-4">${laxInput} Taka is Donated for Flood Relief in Lakshmipur,Bangladesh</p>
    <p class="font-light text-md" >Date: ${new Date() }
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)



})

// quota
const quotaBtn = document.getElementById('quotaBtn')
quotaBtn.addEventListener('click', function () {
    const quotaDonatedAmount = parseFloat(document.getElementById('quotaAmount').innerText)
    const quotaInput = parseFloat(document.getElementById('quotaInput').value)
    const inputquota = document.getElementById('quotaInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    const newBalance = wallet - quotaInput;
    balance.innerText = newBalance



    const totalDonated = quotaDonatedAmount + quotaInput;


    const finalquota = document.getElementById('quotaAmount')

    finalquota.innerText = totalDonated;
    inputquota.value = ''


    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
    historytab.innerHTML = `
    <p class= "text-2xl font-bold mb-4">${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="font-light text-md" >Date: ${new Date() }
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)
    



})