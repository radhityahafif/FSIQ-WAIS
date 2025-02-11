const quizData = [
    {
      question: "Apa kepanjangan dari FSIQ dalam WAIS?",
      options: ["Full Standard Intelligence Quotient", "Full Scale Intelligence Quality", "Full Scale Intelligence Quotient", "Full Standard IQ Quotient"],
      answer: "Full Scale Intelligence Quotient",
    },
    {
      question: "Siapa yang mengembangkan tes WAIS?",
      options: ["Lewis Terman", "David Wechsler", "Alfred Binet", "Howard Gardner"],
      answer: "David Wechsler",
    },
    {
      question: "WAIS pertama kali diperkenalkan pada tahun?",
      options: ["1935", "1945", "1955", "1965"],
      answer: "1955",
    },
    {
      question: "Apa tujuan utama dari tes WAIS?",
      options: ["Menilai kepribadian seseorang", "Mengukur kecerdasan umum dan fungsi kognitif", "Menentukan bakat dalam seni", "Mendiagnosis gangguan psikologis"],
      answer: "Mengukur kecerdasan umum dan fungsi kognitif",
    },
    {
      question: "WAIS saat ini berada pada versi keberapa?",
      options: [
        "WAIS-II",
        "WAIS-III",
        "WAIS-IV",
        "WAIS-V",
      ],
      answer: "WAIS-IV",
    },
    {
      question: "Skor rata-rata IQ dalam WAIS adalah?",
      options: ["85", "90", "100", "110"],
      answer: "100",
    },
    {
      question: "Skor IQ 130+ dalam WAIS dikategorikan sebagai?",
      options: [
        "Rata-rata",
        "Di atas rata-rata",
        "Sangat Superior",
        "Defisit intelektual",
      ],
      answer: "Sangat Superior",
    },
    {
      question: "Manakah dari berikut ini yang merupakan komponen dalam FSIQ?",
      options: ["Emotional Intelligence", "Fluid Reasoning Index", "Personality Traits", "Social Quotient"],
      answer: "Fluid Reasoning Index",
    },
    {
      question: "Apa fungsi utama dari Working Memory Index (WMI)?",
      options: [
        "Mengukur kecepatan pemrosesan informasi",
        "Menilai kemampuan menyimpan dan memanipulasi informasi",
        "Mengukur kemampuan berpikir visual",
        "Menentukan tingkat verbal seseorang",
      ],
      answer: "Menilai kemampuan menyimpan dan memanipulasi informasi",
    },
    {
      question: "Komponen WAIS yang mengukur kecepatan dalam mengolah informasi adalah?",
      options: ["Working Memory Index", "Processing Speed Index", "Fluid Reasoning Index", "General Ability Index"],
      answer: "Processing Speed Index",
    },
    {
      question: `Subtes "Digit Span" dalam WAIS mengukur?`,
      options: ["Pemahaman verbal", "Daya ingat jangka pendek", "Kecepatan pemrosesan", "Kemampuan spasial"],
      answer: "Daya ingat jangka pendek",
    },
    {
      question: "Apa kegunaan dari General Ability Index (GAI) dalam WAIS?",
      options: ["Untuk menggantikan FSIQ jika hasil WMI dan PSI terlalu rendah", "Untuk menilai kepribadian seseorang", " Untuk menentukan tingkat kreativitas", "Untuk menilai kecerdasan emosional"],
      answer: "Untuk menggantikan FSIQ jika hasil WMI dan PSI terlalu rendah",
    },
    {
      question: "Apa perbedaan utama antara WAIS dan tes IQ lainnya?",
      options: [
        "WAIS hanya digunakan untuk anak-anak",
        "WAIS mencakup lebih banyak aspek kecerdasan dibandingkan tes lainnya",
        "WAIS hanya menilai kemampuan matematika",
        "WAIS hanya mengukur kecepatan berpikir",
      ],
      answer: "WAIS mencakup lebih banyak aspek kecerdasan dibandingkan tes lainnya",
    },
    {
      question: "Tes WAIS digunakan dalam bidang berikut, kecuali?",
      options: ["Psikologi klinis", "Pendidikan", "Manajemen perusahaan", "Olahraga profesional"],
      answer: "Olahraga profesional",
    },
    {
      question: "Subtes 'Matrix Reasoning' dalam WAIS mengukur?",
      options: ["Kemampuan spasial", "Kemampuan verbal", "Pemecahan masalah dan pola logis", "Ingatan jangka pendek"],
      answer: "Pemecahan masalah dan pola logis",
    },
    {
      question: "Rentang skor WAIS yang dianggap sebagai 'di bawah rata-rata' adalah?",
      options: [
        "110-119",
        "90-109",
        "80-89",
        "70-79",
      ],
      answer: "80-89",
    },
    {
      question: "Faktor apa yang dapat mempengaruhi hasil tes WAIS seseorang?",
      options: ["Tingkat pendidikan", "Kondisi kesehatan", "Faktor lingkungan", "Semua jawaban benar"],
      answer: "Semua jawaban benar",
    },
    {
      question: "Subtes 'Coding' dalam WAIS mengukur?",
      options: ["Kemampuan memahami bahasa", "Kecepatan pemrosesan dan akurasi", "Kemampuan mengingat pola angka", "Kemampuan dalam memecahkan masalah kompleks"],
      answer: "Kecepatan pemrosesan dan akurasi",
    },
    {
      question: "Mengapa tes WAIS sering digunakan untuk mendiagnosis gangguan belajar?",
      options: ["Karena dapat mengidentifikasi kekuatan dan kelemahan kognitif seseorang", "Karena hanya menilai aspek verbal", "Karena hanya digunakan untuk menilai anak-anak", "Karena tes ini bersifat subjektif"],
      answer: "Karena dapat mengidentifikasi kekuatan dan kelemahan kognitif seseorang",
    },
    {
      question: "Apa yang terjadi jika seseorang memiliki skor IQ di bawah 70 dalam WAIS?",
      options: ["Mereka dianggap jenius", "Mereka dianggap berada dalam kategori defisit intelektual", "Mereka dianggap memiliki kecerdasan di atas rata-rata", "Mereka tidak perlu menjalani tes lagi"],
      answer: "Mereka dianggap berada dalam kategori defisit intelektual",
    },
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  const retryButton = document.getElementById("retry");
  const showAnswerButton = document.getElementById("showAnswer");
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `${currentQuestion + 1}.${questionData.question}`;
  
    const optionsElement = document.createElement("div");
    optionsElement.className = "options";
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement("label");
      option.className = "option";
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "inline-block";
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = "block";
    submitButton.style.display = "inline-block";
    retryButton.style.display = "none";
    showAnswerButton.style.display = "none";
    resultContainer.innerHTML = "";
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "none";
  
    let incorrectAnswersHtml = "";
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
          <p>
            <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
            <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
            <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
          </p>
        `;
    }
  
    resultContainer.innerHTML = `
        <p>You scored ${score} out of ${quizData.length}!</p>
        <p>Incorrect Answers:</p>
        ${incorrectAnswersHtml}
      `;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  retryButton.addEventListener("click", retryQuiz);
  showAnswerButton.addEventListener("click", showAnswer);
  
  displayQuestion();
  