const textarea = document.getElementById('tweetInput');
const charCounter = document.getElementById('enteredCount');
const remCounter = document.getElementById('remainingCount');
const maxChars = 280;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;

  // Update live counter
  charCounter.textContent = `${currentLength}`;
   remCounter.textContent = `${maxChars - currentLength}`;

  // Optional: prevent input beyond 140 even if maxlength is removed
  if (currentLength > maxChars) {
    textarea.value = textarea.value.slice(0, maxChars);
    charCounter.textContent = `${maxChars} / ${maxChars}`;
    alert('Character limit exceeded!');
  }
});

// Event listener which shows alert after typing text nad pressing button for submit
document.querySelector('.tweet-btn').addEventListener('click', () => {
  const currentLength = textarea.value.length;
  if (currentLength > maxChars) {
    alert('Character limit exceeded!');
  } else {
    alert(`${textarea.value}`);
  }
});
