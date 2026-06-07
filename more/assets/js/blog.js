/* ======================================================
   BLOG ENGINE — TAG FILTER
   ====================================================== */

const blogList = document.getElementById("blog-list");
const blogView = document.getElementById("blog-view");
const blogContent = document.getElementById("blog-content");
const blogTags = document.getElementById("blog-tags");
const closeBtn = document.getElementById("close-blog");

let allPosts = [];
let activeTag = "ALL";

/* Load posts */
fetch("blog/index.json")
  .then(res => res.json())
  .then(posts => {
    allPosts = posts;
    renderTags(posts);
    renderPosts(posts);
  });

/* Render Tags */
function renderTags(posts) {
  const tags = new Set();
  posts.forEach(p => p.tags.forEach(t => tags.add(t)));

  blogTags.innerHTML = `<span class="blog-tag active" data-tag="ALL">ALL</span>`;

  tags.forEach(tag => {
    blogTags.innerHTML += `<span class="blog-tag" data-tag="${tag}">${tag}</span>`;
  });

  document.querySelectorAll(".blog-tag").forEach(tagEl => {
    tagEl.onclick = () => {
      document.querySelectorAll(".blog-tag").forEach(t => t.classList.remove("active"));
      tagEl.classList.add("active");
      activeTag = tagEl.dataset.tag;
      filterPosts();
    };
  });
}

/* Render Posts */
function renderPosts(posts) {
  blogList.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.dataset.tags = post.tags.join(",");
    card.innerHTML = `
      <div class="meta">${post.date}</div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    `;
    card.onclick = () => loadPost(post.id);
    blogList.appendChild(card);
  });
}

/* Filter */
function filterPosts() {
  const filtered =
    activeTag === "ALL"
      ? allPosts
      : allPosts.filter(p => p.tags.includes(activeTag));

  gsap.to(".blog-card", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      renderPosts(filtered);
      gsap.from(".blog-card", {
        opacity: 0,
        y: 20,
        stagger: 0.08
      });
    }
  });
}

/* Load Markdown */
function loadPost(id) {
  fetch(`blog/${id}.md`)
    .then(res => res.text())
    .then(md => {
      blogContent.innerHTML = marked.parse(md);
      blogView.classList.remove("hidden");
      blogView.scrollIntoView({ behavior: "smooth" });
    });
}

closeBtn.onclick = () => blogView.classList.add("hidden");

