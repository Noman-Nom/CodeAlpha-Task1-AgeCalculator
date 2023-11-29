function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultParagraph = document.getElementById('result');

    const dob = new Date(dobInput.value);
    const currentDate = new Date();

    // Calculate age
    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        resultParagraph.textContent = `Your age is ${age - 1} years.`;
    } else {
        resultParagraph.textContent = `Your age is ${age} years.`;
    }
}
