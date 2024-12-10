document.getElementById("show-database-button").addEventListener("click", function () {
  const databaseContainer = document.getElementById("database-container");
  if (databaseContainer.style.display === "none") {
    databaseContainer.style.display = "block";
    this.textContent = "Hide Database";
  } else {
    databaseContainer.style.display = "none";
    this.textContent = "Show Database";
  }
});
