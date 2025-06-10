const scaleValues = [
  { value: -3, label: "Very Poor", color: "#e74c3c" },
  { value: -2, label: "Poor", color: "#ea615d" },
  { value: -1, label: "Slightly Poor", color: "#f1948a" },
  { value: 0, label: "Neutral or N/A", color: "#bdc3c7" },
  { value: 1, label: "Slightly Good", color: "#7ed6df" },
  { value: 2, label: "Good", color: "#2ecc71" },
  { value: 3, label: "Very Good", color: "#27ae60" },
];

const questions = [
  "I look after my mental health regularly.",
  "I'm happy the way I handle my emotions in any situation.",
  "I seek counseling or accountability from a trusted friend, mentor, or a coach to keep my mindset and behaviour in check.",
  "I'm able to focus well and be mindful as I do my work and personal activities.",
  "I've enhanced my personal and professional value by learning new skills from both free and paid sources.",
  "I've obtained or am working toward the degree, license, or qualifications needed to advance my career or business.",
  "I’m grateful to apply what I’ve learned, aligning it with my work and personal life, making both easier and more enjoyable.",
  "I live life to the fullest by wisely managing my time around priorities aligned with my vision and sustainability goals.",
  "I'm happy with my physical health, fitness and attributes (e.g. weight), achieved through a sustainable routine of exercise and proper nutrition.",
  "I feel genuinely confident in myself, having worked hard to discover, accept, and develop my authentic personality and unique character.",
  "My hobbies support a healthy, active lifestyle while enhancing my intellect, creativity, and social skills at the same time.",
  "I've developed good financial habits to save for the future and maintain a healthy cash flow.",
  "I've made or explored new investments (e.g., real estate, stocks, etc.) in the past 6-12 months as part of my financial plans.",
  "I'm contributing to health insurance, life insurance, and pension plans for emergencies and retirement.",
  "I’m grateful to afford what I need and want within my means, bringing convenience, productivity, and enjoyment to myself (and dependents).",
  "I allocate a portion of my income to charity and generosity, finding fulfillment in helping others and making a difference.",
  "I'm on track to achieving or have achieved financial independence, providing freedom and security.",
  "I maintain work-life harmony and effectively manage stress to keep it from impacting my personal life.",
  "I seek leadership advice and mentorship to guide my career planning and advancement.",
  "I've achieved my major career goals, such as a role change, promotion, bonus, or salary increase, set within the last 12 months.",
  "I feel accomplished and fulfilled in my career, reflected in completed projects, awards, recognitions, and positive feedbacks.",
  "I always plan my travels early and practically, allowing me to fully enjoy them without straining my finances and other priorities in life.",
  "I try new activities at least once a month, whether spontaneously or from a bucket list, to fuel my creativity, curiosity, and competitiveness.",
  "I feel fulfilled knowing that I'm giving back to the world through social and environmental advocacies or charitable activities.",
  "I’m happy and content in my love life, actively investing in personal growth and nurturing my relationship with my partner.",
  "I cultivate and sustain meaningful, healthy relationships with my family and friends.",
  "I actively participate in social activities and connect with communities of like-minded individuals.",
  "I challenge myself to bring my business ideas to life, embracing the growth that comes with developing them, regardless of the outcome.",
  "I am proud of my business' achievements over the past 6-12 months and its positive contributions to the economy, society, and environment.",
  "I've increased my passive or recurring income compared to 6-12 months ago, bringing me closer to financial sustainability."

];


/// Data definition ends

let currentQuestion = 0;
let answers = [];

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const scaleOptions = document.getElementById("scale-options");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");



function renderQuestion() {
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = questions[currentQuestion];

  scaleOptions.innerHTML = "";
  scaleValues.forEach(option => {
    const div = document.createElement("div");
    div.className = "scale-option";
    if (answers[currentQuestion] === option.value) {
      div.classList.add("selected");
    }

    div.innerHTML = `
      <div class="scale-circle" style="background:${option.color}">${option.value}</div>
      <span>${option.label}</span>
    `;
    div.addEventListener("click", () => {
      answers[currentQuestion] = option.value;
      renderQuestion();
    });

    scaleOptions.appendChild(div);
  });

  backBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "FINISH" : "NEXT >";
}

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});


renderQuestion();




