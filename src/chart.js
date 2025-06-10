  ///Here i calculate the values for each of the axis

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("selfcare-header");
    console.log(header);
})



function showRadarChart(scores) {
  const ctx = document.getElementById("resultChart").getContext("2d");

  const labels = ["Spirituality", "Career", "Education", "Avocation", "Lifestyle", "Relationships", "Finance", "Entrepreneurship"];


  console.log("Here are the scores", scores)
  const dataValues = scores; 


  new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [{
        label: "Your PERSU Profile",
        data: dataValues,
        fill: true,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderColor: "black",
        borderWidth: 3,
        pointBackgroundColor: "black"
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: -100,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: (value) => `${value}%`,
            color: "#444"
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)"
          },
          pointLabels: {
            font: {
              size: 14,
              weight: "bold"
            },
            color: "#000"
          }
        }
      },
    },
  });

}


nextBtn.addEventListener("click", () => {
  if (answers[currentQuestion] === undefined) {
    alert("Please select an option.");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    // === SHOW ONLY THE CHART ===
    const scores = calculateCategoryScores(answers);

    document.getElementById("quizContent").classList.add("hidden");
    document.getElementById("chartContainer").classList.remove("hidden");
    document.getElementById("option").classList.remove("hidden");
    document.getElementById("chartArea").classList.remove("hidden");
    document.getElementById("selfcare-header").style.visibility = "hidden";

    console.log("Answers: ", answers)
    console.log("Scores before: ", scores)
    showRadarChart(scores);
  }
});

const backgroundImagePlugin = {
  id: 'customCanvasBackgroundImage',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const { top, left, width, height } = chart.chartArea;
      ctx.drawImage(image, left, top, width, height);
    } else {
      image.onload = () => chart.draw();
    }
  }
};