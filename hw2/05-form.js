document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userInfoBody = document.getElementById("userInfoBody");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const elements = [
            { label: "Name", value: document.getElementById("nameInput").value },
            { label: "Email", value: document.getElementById("emailInput").value },
            { label: "Department", value: document.getElementById("departmentSelect").value },
            { label: "Message", value: document.getElementById("messageInput").value }
        ];

        const courses = [];
        if (document.getElementById("course1").checked) courses.push("Course 1");
        if (document.getElementById("course2").checked) courses.push("Course 2");
        if (document.getElementById("course3").checked) courses.push("Course 3");

        if (courses.length > 0) {
            elements.push({ label: "Courses", value: courses.join(", ") });
        }

        userInfoBody.innerHTML = "";
        elements.forEach(element => {
            const elementNode = createInfoElement(element.label, "p");
            elementNode.textContent = `${element.label}: ${element.value}`;
            userInfoBody.appendChild(elementNode);
        });

        const userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'));
        userInfoModal.show();
    });

    function createInfoElement(label, elementType) {
        const element = document.createElement(elementType);
        element.textContent = `${label}: `;
        return element;
    }
});
