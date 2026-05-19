let balance = 0;

const categoryEl = document.getElementById("category");
const balanceEl = document.getElementById("balance");
const amountEl = document.getElementById("amount");
const aiMessage = document.getElementById("ai-message");

// handle style
function updateDisplay() {
  balanceEl.textContent = `$${balance}`;

  if (balance < 0) {
    balanceEl.classList.add("negative");
  } else {
    balanceEl.classList.remove("negative");
  }

  // AI personality states
  if (balance < -100) {
    aiMessage.textContent = "💀 SYSTEM ALERT: You are financially unstable. This is no longer a joke.";
  } 
  else if (balance < 0) {
    aiMessage.textContent = "🚨 Debt detected. I am judging you quietly.";
  } 
  else if (balance === 0) {
    aiMessage.textContent = "You are at zero. Neutral. Empty. Suspicious.";
  } 
  else if (balance < 50) {
    aiMessage.textContent = "I am not impressed. You are barely surviving.";
  } 
  else if (balance < 200) {
    aiMessage.textContent = "Progress detected. Emotionally, I remain unimpressed.";
  } 
  else if (balance < 500) {
    aiMessage.textContent = "Stable finances. I am watching for mistakes.";
  } 
  else {
    aiMessage.textContent = "High balance detected. I do not trust this level of success.";
  }
}

function addIncome() {
    const value = Number(amountEl.value);
    if (!value) return;

    const category = categoryEl.value;

    balance += value;

    const li = document.createElement("li");
    li.textContent = `+ $${value} (${category})`;
    li.classList.add("positive");
    transactionsEl.prepend(li);

    updateDisplay("income", value, category);)
    updateDisplay();

    amountEl.value = "";
}

function addExpense() {
  const value = Number(amountEl.value);
  if (!value) return;

  const category = categoryEl.value;

  balance -= value;

  const li = document.createElement("li");
  li.textContent = `- $${value} (${category})`;
  li.classList.add("transaction-negative");
  transactionsEl.prepend(li);

  updateAI("expense", value, category);
  updateDisplay();

  amountEl.value = "";
}

function updateAI(type, value, category) {

  if (type === "expense") {

    if (category === "food") {
      aiMessage.textContent = "You are literally feeding yourself. I will allow it... reluctantly.";
    }

    else if (category === "rent") {
      aiMessage.textContent = "Survival expense detected. Carry on.";
    }

    else if (category === "bills") {
      aiMessage.textContent = "Mandatory payment detected. No joy. Only compliance.";
    }

    else if (category === "fun") {
      aiMessage.textContent = "Fun spending detected. Emotionally irresponsible, but understandable.";
    }

    else if (category === "chaos") {
      aiMessage.textContent = "⚠️ Chaos spending detected. I am losing faith in you.";
    }

    else {
      aiMessage.textContent = "Transaction recorded. I will not comment further.";
    }
  }

  else if (type === "income") {
    aiMessage.textContent = "Income detected. Temporary optimism engaged.";
  }
}