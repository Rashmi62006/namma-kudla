// === SEARCH FILTER ===
const searchBar = document.getElementById('searchBar');
const postCards = document.querySelectorAll('.post-card');

if (searchBar) {
  searchBar.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    postCards.forEach(card => {
      const title = card.dataset.title || '';
      const textMatch = title.toLowerCase().includes(q);
      card.style.display = q === '' ? 'flex' : (textMatch ? 'flex' : 'none');
    });
  });
}

// === COMMENTS using localStorage ===
const commentsList = document.getElementById('commentsList');
const commentInput = document.getElementById('commentInput');
const commentBtn = document.getElementById('commentBtn');

function loadComments() {
  const arr = JSON.parse(localStorage.getItem('nk_comments') || '[]');
  commentsList.innerHTML = arr.length
    ? arr.map(c => `<p>${escapeHtml(c)}</p>`).join('')
    : '<p style="color:#666">No comments yet — be the first!</p>';
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

if (commentBtn) {
  commentBtn.addEventListener('click', () => {
    const text = (commentInput.value || '').trim();
    if (!text) return;
    const arr = JSON.parse(localStorage.getItem('nk_comments') || '[]');
    arr.push(text);
    localStorage.setItem('nk_comments', JSON.stringify(arr));
    commentInput.value = '';
    loadComments();
  });
}

loadComments();
