// Eligibility Checker Logic
document.getElementById('eligibilityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const crop = document.getElementById('crop').value;
    const income = parseInt(document.getElementById('income').value);
    const region = document.getElementById('region').value;
  
    let eligibilityStatus = '';
  
    if (income < 500000 && (crop.toLowerCase() === 'wheat' || crop.toLowerCase() === 'rice')) {
      eligibilityStatus = 'You are eligible for multiple schemes!';
    } else {
      eligibilityStatus = 'You may not be eligible for current schemes.';
    }
  
    document.getElementById('eligibilityStatus').textContent = eligibilityStatus;
    document.getElementById('result').classList.remove('hidden');
  });