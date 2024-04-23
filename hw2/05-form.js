document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userInfoBody = document.getElementById("userInfoBody");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const department = document.getElementById("departmentSelect").value;
        const message = document.getElementById("messageInput").value;
        const course1 = document.getElementById("course1").checked;
        const course2 = document.getElementById("course2").checked;
        const course3 = document.getElementById("course3").checked;

        userInfoBody.innerHTML = "";

        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${name}`;
        userInfoBody.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${email}`;
        userInfoBody.appendChild(emailElement);

        const departmentElement = document.createElement("p");
        departmentElement.textContent = `Department: ${department}`;
        userInfoBody.appendChild(departmentElement);

        const messageElement = document.createElement("p");
        messageElement.textContent = `Message: ${message}`;
        userInfoBody.appendChild(messageElement);

        const coursesElement = document.createElement("p");
        let courses = [];
        if (course1) courses.push("Course 1");
        if (course2) courses.push("Course 2");
        if (course3) courses.push("Course 3");
        coursesElement.textContent = `Courses: ${courses.join(", ")}`;
        userInfoBody.appendChild(coursesElement);
        const userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'));
        userInfoModal.show();
    });
    const resetButton = document.querySelector("button[type='reset']");
    resetButton.addEventListener("click", function () {
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("departmentSelect").selectedIndex = 0;
        document.getElementById("messageInput").value = "";
        document.getElementById("course1").checked = false;
        document.getElementById("course2").checked = false;
        document.getElementById("course3").checked = false;
    });
});
