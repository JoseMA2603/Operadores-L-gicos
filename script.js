document.addEventListener("DOMContentLoaded", function () {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const andResult = document.getElementById("andResult");
    const orResult = document.getElementById("orResult");
    const xorResult = document.getElementById("xorResult");

    function updateResults() {
        const val1 = checkbox1.checked;
        const val2 = checkbox2.checked;
        
        andResult.textContent = val1 && val2 ? "✅ True" : "❌ False";
        orResult.textContent = val1 || val2 ? "✅ True" : "❌ False";
        xorResult.textContent = val1 !== val2 ? "✅ True" : "❌ False";
    }

    checkbox1.addEventListener("change", updateResults);
    checkbox2.addEventListener("change", updateResults);
});