/* =============================================
   Campus Connect – Premium SaaS Application
   ============================================= */

// ─── REALISTIC AVATARS ───
const AVATARS = {
    priya:    'https://randomuser.me/api/portraits/women/44.jpg',
    rahul:    'https://randomuser.me/api/portraits/men/32.jpg',
    sneha:    'https://randomuser.me/api/portraits/women/68.jpg',
    arjun:    'https://randomuser.me/api/portraits/men/45.jpg',
    kavitha:  'https://randomuser.me/api/portraits/women/65.jpg',
    vikram:   'https://randomuser.me/api/portraits/men/22.jpg',
    ananya:   'https://randomuser.me/api/portraits/women/33.jpg',
    karthik:  'https://randomuser.me/api/portraits/men/52.jpg',
    meera:    'https://randomuser.me/api/portraits/women/57.jpg',
    self:     'https://randomuser.me/api/portraits/men/75.jpg',
    deepa:    'https://randomuser.me/api/portraits/women/72.jpg',
    ravi:     'https://randomuser.me/api/portraits/men/36.jpg',
};

// ─── SAMPLE DATA ───
const samplePosts = [
    {
        id: 1,
        author: 'Priya Sharma',
        avatar: AVATARS.priya,
        time: '2 hours ago',
        title: 'Cracked my first Google Interview Round! 🎉',
        content: 'After 6 months of consistent DSA practice, I finally cleared the Google phone screen! Here are my top resources: LeetCode top 150, Striver\'s SDE sheet, and the CSES problem set. Don\'t give up, consistency is key!',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        tags: ['internship', 'dsa'],
        likes: 234,
        liked: false,
        saved: false,
        group: null,
        comments: [
            { author: 'Rahul Kumar', avatar: AVATARS.rahul, text: 'Congrats Priya! 🎉 Which topics were asked?', time: '1h ago' },
            { author: 'Sneha Patel', avatar: AVATARS.sneha, text: 'So inspiring! Can you share your study schedule?', time: '45m ago' }
        ],
        showComments: false
    },
    {
        id: 2,
        author: 'Arjun Menon',
        avatar: AVATARS.arjun,
        time: '5 hours ago',
        title: 'Binary Tree Visualizer – My weekend project 🌳',
        content: 'Built a binary tree visualizer using D3.js! It supports BFS, DFS, insertion, and deletion with smooth animations. Check it out and let me know what features to add next.',
        image: 'images/post-coding.png',
        tags: ['dsa', 'projects'],
        likes: 178,
        liked: false,
        saved: false,
        group: null,
        comments: [
            { author: 'Kavitha R', avatar: AVATARS.kavitha, text: 'This is amazing! Can you add AVL tree rotations?', time: '3h ago' }
        ],
        showComments: false
    },
    {
        id: 3,
        author: 'Sneha Patel',
        avatar: AVATARS.sneha,
        time: '8 hours ago',
        title: 'Team needed for Smart Campus Hackathon 🚀',
        content: 'Looking for 2 more team members for the upcoming Smart Campus Hackathon. We\'re building an AI-powered student assistant. Need someone experienced with React and Python ML. DM if interested!',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
        tags: ['projects'],
        likes: 145,
        liked: false,
        saved: false,
        group: null,
        comments: [
            { author: 'Vikram S', avatar: AVATARS.vikram, text: 'I know React well! Let me join 🙋‍♂️', time: '6h ago' },
            { author: 'Ananya G', avatar: AVATARS.ananya, text: 'I can help with the ML part. Check my profile!', time: '5h ago' }
        ],
        showComments: false
    },
    {
        id: 4,
        author: 'Rahul Kumar',
        avatar: AVATARS.rahul,
        time: '1 day ago',
        title: 'My study method that got me 9.5 CGPA 📚',
        content: 'Here\'s what worked for me: 1) Active recall instead of passive reading, 2) Spaced repetition with Anki cards, 3) Teaching concepts to peers (Feynman technique), 4) Consistent daily study blocks. Quality > Quantity!',
        image: '',
        tags: ['tips'],
        likes: 312,
        liked: false,
        saved: false,
        group: null,
        comments: [
            { author: 'Priya Sharma', avatar: AVATARS.priya, text: 'Anki is a game changer! Been using it for DSA patterns too.', time: '20h ago' }
        ],
        showComments: false
    },
    {
        id: 5,
        author: 'Kavitha Ramaswamy',
        avatar: AVATARS.kavitha,
        time: '2 days ago',
        title: 'Amazon SDE Intern – Applications now open! 💼',
        content: 'Amazon has opened applications for SDE internships (Summer 2026). They\'re looking for pre-final year students. Process: OA + 2 technical rounds. Apply before April 30th!',
        image: '',
        tags: ['internship'],
        likes: 456,
        liked: false,
        saved: false,
        group: null,
        comments: [],
        showComments: false
    },
    {
        id: 6,
        author: 'Vikram Sundar',
        avatar: AVATARS.vikram,
        time: '3 days ago',
        title: 'Understanding Dynamic Programming – A visual guide 🧠',
        content: 'Created a comprehensive visual guide for DP patterns. Covers: Fibonacci, Knapsack, LCS, LIS, Matrix Chain, and more. Each pattern includes step-by-step state transitions with diagrams.',
        image: '',
        tags: ['dsa', 'tips'],
        likes: 289,
        liked: false,
        saved: false,
        group: null,
        comments: [
            { author: 'Arjun Menon', avatar: AVATARS.arjun, text: 'This is gold! Finally understood bottom-up DP.', time: '2d ago' }
        ],
        showComments: false
    },
    { id: 1001, author: 'Alex Sharma', avatar: 'letter:T', time: '1 wk ago', title: 'Why I love React over Angular', content: 'React gives me the flexibility to structure my code...', image: '', tags: ['projects'], likes: 45, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1002, author: 'Alex Sharma', avatar: 'letter:T', time: '2 wks ago', title: 'Just submitted my assignment!', content: 'Finally done with the database systems assignment. SQL is powerful.', image: '', tags: ['projects'], likes: 12, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1003, author: 'Alex Sharma', avatar: 'letter:T', time: '3 wks ago', title: 'Looking for a study buddy', content: 'Anyone want to practice LeetCode blind 75 together?', image: '', tags: ['dsa'], likes: 30, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1004, author: 'Alex Sharma', avatar: 'letter:T', time: '4 wks ago', title: 'My journey into web development', content: 'It started a year ago when I first learned HTML. Now I am building full stack apps!', image: '', tags: ['tips'], likes: 100, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1005, author: 'Alex Sharma', avatar: 'letter:T', time: '1 mo ago', title: 'Tips for internship interviews', content: 'Always ask clarifying questions before jumping into code.', image: '', tags: ['internship'], likes: 88, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1006, author: 'Alex Sharma', avatar: 'letter:T', time: '1 mo ago', title: 'Understanding closures in JS', content: 'Closures are confusing at first, but think of them as functions with memory.', image: '', tags: ['tips'], likes: 55, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1007, author: 'Alex Sharma', avatar: 'letter:T', time: '2 mos ago', title: 'Attended the Google DevFest', content: 'Learned so much about Firebase and Flutter today.', image: '', tags: ['projects'], likes: 110, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1008, author: 'Alex Sharma', avatar: 'letter:T', time: '2 mos ago', title: 'How to use Git effectively', content: 'Stop using git add . and commit -m "update". Write descriptive commit messages!', image: '', tags: ['tips'], likes: 78, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1009, author: 'Alex Sharma', avatar: 'letter:T', time: '3 mos ago', title: 'DSA Progress: 100 questions solved', content: 'Consistency pays off. Hit the 100 problem mark on LeetCode.', image: '', tags: ['dsa'], likes: 205, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1010, author: 'Alex Sharma', avatar: 'letter:T', time: '3 mos ago', title: 'Building a portfolio site', content: 'Should I use Next.js or stick to basic React?', image: '', tags: ['projects'], likes: 25, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1011, author: 'Alex Sharma', avatar: 'letter:T', time: '4 mos ago', title: 'My first hackathon experience', content: 'Didnt win, but learned how to work fast and collaborate.', image: '', tags: ['internship'], likes: 150, liked: false, saved: false, group: null, comments: [], showComments: false },
    { id: 1012, author: 'Alex Sharma', avatar: 'letter:T', time: '4 mos ago', title: 'Hello World! Joining Campus Connect', content: 'Excited to be part of this community. Im a CSE major from SRM.', image: '', tags: ['tips'], likes: 300, liked: false, saved: false, group: null, comments: [], showComments: false }
];

// Group-specific posts
const groupPosts = {
    dsa: [
        { id: 101, author: 'Vikram Sundar', avatar: AVATARS.vikram, time: '3h ago', title: 'Graph traversal cheat sheet 📊', content: 'Made a one-page cheat sheet covering BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall with time complexities. Comment if you want the PDF!', image: '', tags: ['dsa'], likes: 89, liked: false, saved: false, group: 'dsa', comments: [{ author: 'Priya Sharma', avatar: AVATARS.priya, text: 'Please share the PDF!', time: '2h ago' }], showComments: false },
        { id: 102, author: 'Rahul Kumar', avatar: AVATARS.rahul, time: '6h ago', title: 'Sliding window pattern explained 🪟', content: 'Sliding window is one of the most asked patterns. Here\'s how I approach them: 1) Identify the window, 2) Expand right, 3) Shrink left when condition breaks.', image: '', tags: ['dsa'], likes: 134, liked: false, saved: false, group: 'dsa', comments: [], showComments: false },
    ],
    internship: [
        { id: 201, author: 'Priya Sharma', avatar: AVATARS.priya, time: '1h ago', title: 'Microsoft Explore Intern – Timeline 📅', content: 'For those applying to Microsoft Explore: Applications close May 15. First round is online assessment, followed by 2 interviews. Focus on arrays, strings, and basic graphs.', image: '', tags: ['internship'], likes: 167, liked: false, saved: false, group: 'internship', comments: [], showComments: false },
        { id: 202, author: 'Deepa Lakshmi', avatar: AVATARS.deepa, time: '5h ago', title: 'Resume tips that got me 5 interview calls ✨', content: 'Key tips: 1) Keep it 1 page, 2) Quantify achievements, 3) Put projects before education, 4) Use action verbs, 5) Tailor for each company.', image: '', tags: ['internship', 'tips'], likes: 203, liked: false, saved: false, group: 'internship', comments: [{ author: 'Kavitha R', avatar: AVATARS.kavitha, text: 'Following this advice immediately!', time: '4h ago' }], showComments: false },
    ],
    project: [
        { id: 301, author: 'Arjun Menon', avatar: AVATARS.arjun, time: '4h ago', title: 'Looking for React Native devs for fitness app 💪', content: 'Building a campus fitness tracking app. Need 2 React Native developers. The app will include workout plans, calorie tracking, and social challenges between friends.', image: '', tags: ['projects'], likes: 76, liked: false, saved: false, group: 'project', comments: [], showComments: false },
    ],
    tips: [
        { id: 401, author: 'Meera Nair', avatar: AVATARS.meera, time: '2h ago', title: 'Notion template for semester planning 📝', content: 'Created a free Notion template for semester planning. Includes: class schedule, assignment tracker, exam prep timeline, and habit tracker. Link in comments!', image: '', tags: ['tips'], likes: 198, liked: false, saved: false, group: 'tips', comments: [{ author: 'Sneha Patel', avatar: AVATARS.sneha, text: 'This is exactly what I needed!', time: '1h ago' }], showComments: false },
    ]
};

const sampleGroups = [
    { id: 'dsa', name: 'DSA Class', banner: 'dsa', icon: 'fa-solid fa-code', members: 1248, postsCount: 342, desc: 'Master Data Structures & Algorithms together. Share problems, solutions, and interview prep strategies.', joined: true },
    { id: 'internship', name: 'Internship Prep', banner: 'internship', icon: 'fa-solid fa-briefcase', members: 2156, postsCount: 567, desc: 'Everything about internship applications, interview prep, resume tips, and referral sharing.', joined: true },
    { id: 'project', name: 'Project Hub', banner: 'project', icon: 'fa-solid fa-rocket', members: 892, postsCount: 198, desc: 'Collaborate on projects, find team members, showcase your work, and get feedback from peers.', joined: false },
    { id: 'tips', name: 'Study Tips & Resources', banner: 'tips', icon: 'fa-solid fa-lightbulb', members: 1567, postsCount: 445, desc: 'Share study strategies, useful resources, course materials, and productivity hacks.', joined: false }
];

const exploreCategories = [
    { tag: 'dsa', icon: '💻', name: 'DSA Mastery', count: '67 posts' },
    { tag: 'internship', icon: '💼', name: 'Google Internship', count: '42 posts' },
    { tag: 'projects', icon: '🤖', name: 'AI Trends', count: '38 posts' },
    { tag: 'tips', icon: '📚', name: 'Study Hacks', count: '29 posts' },
    { tag: 'internship', icon: '🏢', name: 'Amazon SDE', count: '35 posts' },
    { tag: 'projects', icon: '🚀', name: 'Open Source', count: '24 posts' },
];

const trendingTopics = [
    { tag: 'dsa', label: '#DSAMastery', count: '245 posts this week' },
    { tag: 'internship', label: '#GoogleInternship', count: '189 posts this week' },
    { tag: 'projects', label: '#ReactProjects', count: '132 posts this week' },
    { tag: 'tips', label: '#StudyHacks', count: '98 posts this week' },
];

const suggestedFriends = [
    { name: 'Ananya Gupta', avatar: AVATARS.ananya, info: 'CSE \'26 • 5 mutual' },
    { name: 'Karthik Raja', avatar: AVATARS.karthik, info: 'ECE \'25 • 3 mutual' },
    { name: 'Meera Nair', avatar: AVATARS.meera, info: 'IT \'26 • 8 mutual' },
];

const sampleNotifications = [
    { type: 'like', text: '<strong>Priya Sharma</strong> liked your post "Binary Tree Visualizer"', time: '5 min ago', unread: true },
    { type: 'comment', text: '<strong>Rahul Kumar</strong> commented on your post', time: '15 min ago', unread: true },
    { type: 'group', text: 'New post in <strong>DSA Class</strong> group', time: '30 min ago', unread: true },
    { type: 'follow', text: '<strong>Ananya Gupta</strong> started following you', time: '1 hour ago', unread: true },
    { type: 'like', text: '<strong>Vikram S</strong> liked your comment', time: '2 hours ago', unread: true },
    { type: 'comment', text: '<strong>Sneha Patel</strong> replied to your comment', time: '3 hours ago', unread: false },
    { type: 'group', text: 'You were added to <strong>Project Hub</strong>', time: '5 hours ago', unread: false },
    { type: 'like', text: '<strong>Kavitha R</strong> and 12 others liked your post', time: '1 day ago', unread: false },
];

// ─── STATE ───
let posts = [...samplePosts];
let currentFilter = 'all';
let selectedTags = [];
let postIdCounter = 500;

// ─── HELPERS ───
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSidebar();
    initCreatePost();
    initFilterTabs();
    renderPosts();
    renderGroups();
    renderNotifications();
    renderTrending();
    renderSuggested();
    renderExplore();
    initInviteModal();
    initProfileTabs();
    initPostOverlay();
    initGlobalPostModal();
    initPremiumInteractions();
});

// =============================================
//   PREMIUM INTERACTIONS (GLOW, RIPPLE, SPARKLES)
// =============================================
function initPremiumInteractions() {
    // Cursor glow
    let glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });

    // Ripple & Sparkles on click
    document.addEventListener("click", function(e) {
        // Intercept modal overlay clicks gracefully but still show sparkles, except on actual interactive elements where we might not want it blocking.
        // Let's just create them normally.
        let ripple = document.createElement("div");
        ripple.className = "ripple";
        ripple.style.left = e.clientX + "px";
        ripple.style.top = e.clientY + "px";
        ripple.style.width = "20px";
        ripple.style.height = "20px";

        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // Sparkles
        for(let i = 0; i < 15; i++){
            let s = document.createElement("div");
            s.className = "sparkle";

            let x = (Math.random() - 0.5) * 120 + "px";
            let y = (Math.random() - 0.5) * 120 + "px";

            s.style.setProperty("--x", x);
            s.style.setProperty("--y", y);

            s.style.left = e.clientX + "px";
            s.style.top = e.clientY + "px";

            document.body.appendChild(s);
            setTimeout(() => s.remove(), 700);
        }
    });
}

// =============================================
//   NAVBAR
// =============================================
function initNavbar() {
    window.addEventListener('scroll', () => {
        $('#navbar').classList.toggle('scrolled', window.scrollY > 10);
    });
    $('#notifBtn').addEventListener('click', () => navigateTo('notifications'));
    $('#navProfileBtn').addEventListener('click', () => navigateTo('profile'));
    $('#logoLink').addEventListener('click', (e) => { e.preventDefault(); navigateTo('feed'); });
    $('#globalSearch').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (q) { navigateTo('feed'); filterPostsBySearch(q); }
        else renderPosts();
    });
}

// =============================================
//   SIDEBAR
// =============================================
function initSidebar() {
    $$('.sidebar__link[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.section);
            closeSidebar();
        });
    });

    // Sidebar group clicks → open group feed
    $$('.sidebar__group[data-group]').forEach(el => {
        el.addEventListener('click', () => {
            const gid = el.dataset.group;
            const group = sampleGroups.find(g => g.id === gid);
            if (group && group.joined) {
                navigateTo('groups');
                setTimeout(() => openGroupFeed(gid), 50);
            } else {
                navigateTo('groups');
                showToast('Join the group first to see its feed');
            }
            closeSidebar();
        });
    });

    $('#menuToggle').addEventListener('click', () => {
        $('#sidebar').classList.toggle('open');
        $('#sidebarOverlay').classList.toggle('show');
    });
    $('#sidebarOverlay').addEventListener('click', closeSidebar);
}

function closeSidebar() {
    $('#sidebar').classList.remove('open');
    $('#sidebarOverlay').classList.remove('show');
}

function navigateTo(section) {
    $$('.sidebar__link').forEach(l => l.classList.remove('active'));
    const active = $(`.sidebar__link[data-section="${section}"]`);
    if (active) active.classList.add('active');

    $$('.section').forEach(s => s.classList.remove('active'));
    const target = $(`#section${cap(section)}`);
    if (target) target.classList.add('active');

    // Section-specific renders
    if (section === 'profile') renderProfilePosts();
    if (section === 'explore') renderExplorePosts();
    if (section === 'saved') renderSavedPosts();
    if (section === 'groups') {
        // Reset to groups grid view
        $('#groupsView').style.display = 'block';
        $('#groupFeedView').style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// =============================================
//   CREATE POST
// =============================================
function initCreatePost() {
    $('#createPostPrompt').addEventListener('click', () => {
        $('#createPostForm').classList.add('open');
        $('#createPostPrompt').style.display = 'none';
        $('#postTitle').focus();
    });

    $$('.create-post__tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
            const tag = btn.dataset.tag;
            if (selectedTags.includes(tag)) selectedTags = selectedTags.filter(t => t !== tag);
            else selectedTags.push(tag);
        });
    });

    $('#postImage').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                $('#previewImg').src = ev.target.result;
                $('#imagePreview').classList.add('show');
            };
            reader.readAsDataURL(file);
        }
    });

    $('#removeImg').addEventListener('click', () => {
        $('#imagePreview').classList.remove('show');
        $('#previewImg').src = '';
        $('#postImage').value = '';
    });

    $('#submitPost').addEventListener('click', () => {
        const title = $('#postTitle').value.trim();
        const content = $('#postContent').value.trim();
        const imgSrc = $('#previewImg').src;

        if (!title && !content) { showToast('Please add a title or content'); return; }

        const newPost = {
            id: ++postIdCounter,
            author: 'Alex Sharma',
            avatar: 'letter:T',
            time: 'Just now',
            title, content,
            image: imgSrc && !imgSrc.endsWith(window.location.pathname) ? imgSrc : '',
            tags: [...selectedTags],
            likes: 0, liked: false, saved: false,
            group: null,
            comments: [],
            showComments: false
        };

        posts.unshift(newPost);
        renderPosts();

        // Reset
        $('#postTitle').value = '';
        $('#postContent').value = '';
        $('#imagePreview').classList.remove('show');
        $('#previewImg').src = '';
        $('#postImage').value = '';
        selectedTags = [];
        $$('.create-post__tag-btn').forEach(b => b.classList.remove('selected'));
        $('#createPostForm').classList.remove('open');
        $('#createPostPrompt').style.display = 'flex';
        showToast('Post published successfully! 🎉');
        updateProfilePostCount();
    });
}

// =============================================
//   FILTER TABS
// =============================================
function initFilterTabs() {
    $$('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderPosts();
        });
    });
}

function filterPostsBySearch(q) {
    const filtered = posts.filter(p =>
        (p.title + p.content + p.author + p.tags.join(' ')).toLowerCase().includes(q)
    );
    renderPostsList(filtered, '#postsFeed');
}

// =============================================
//   FILTER BY TAG (from Explore & Trending)
// =============================================
function filterByTag(tag) {
    navigateTo('feed');
    $$('.filter-tab').forEach(t => t.classList.remove('active'));
    const target = $(`.filter-tab[data-filter="${tag}"]`);
    if (target) target.classList.add('active');
    currentFilter = tag;
    renderPosts();
}

// =============================================
//   RENDER POSTS
// =============================================
function renderPosts() {
    let filtered = currentFilter === 'all' ? posts : posts.filter(p => p.tags.includes(currentFilter));
    renderPostsList(filtered, '#postsFeed');
}

function renderPostsList(list, containerId) {
    const container = $(containerId);
    if (!container) return;
    if (!list.length) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state__icon">🔍</div><h3 class="empty-state__title">No posts found</h3><p class="empty-state__text">Try a different filter or create a new post</p></div>`;
        return;
    }
    container.innerHTML = list.map(p => postHTML(p)).join('');
    attachPostListeners(container);
}

function postHTML(p) {
    const tags = p.tags.map(t => {
        const labels = { dsa: '💻 DSA', internship: '💼 Internship', projects: '🚀 Projects', tips: '📚 Study Tips' };
        return `<span class="post-tag ${t}">${labels[t] || t}</span>`;
    }).join('');

    const renderCommentAvatar = (c) => {
        if (c.avatar && c.avatar.startsWith('letter:')) {
            const letter = c.avatar.split(':')[1];
            return `<div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#5B5FEF,#8B5CF6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0;">${letter}</div>`;
        }
        return `<img class="comment__avatar" src="${c.avatar}" alt="${c.author}">`;
    };

    const comments = p.comments.map(c => `
        <div class="comment">
            ${renderCommentAvatar(c)}
            <div class="comment__body">
                <span class="comment__author">${c.author}</span>
                <p class="comment__text">${c.text}</p>
                <span class="comment__time">${c.time}</span>
            </div>
        </div>`).join('');

    // Random like avatars for social proof
    const likeAvatars = [AVATARS.priya, AVATARS.rahul, AVATARS.sneha];

    // Render post avatar (letter or image)
    let postAvatar;
    if (p.avatar && p.avatar.startsWith('letter:')) {
        const letter = p.avatar.split(':')[1];
        postAvatar = `<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#5B5FEF,#8B5CF6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0;">${letter}</div>`;
    } else {
        postAvatar = `<img class="post-card__avatar" src="${p.avatar}" alt="${p.author}">`;
    }

    return `
    <article class="post-card" data-post-id="${p.id}">
        <div class="post-card__header">
            ${postAvatar}
            <div class="post-card__meta">
                <div class="post-card__author">${p.author}</div>
                <div class="post-card__time">${p.time}</div>
            </div>
            <button class="post-card__menu"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
        ${p.title ? `<h3 class="post-card__title">${p.title}</h3>` : ''}
        ${p.content ? `<p class="post-card__content">${p.content}</p>` : ''}
        ${p.image ? `<img class="post-card__image" src="${p.image}" alt="Post" loading="lazy">` : ''}
        ${tags ? `<div class="post-card__tags">${tags}</div>` : ''}
        <div class="post-card__stats">
            <div class="post-card__likes-info">
                <div class="post-card__likes-avatars">
                    ${p.likes > 0 ? likeAvatars.slice(0, Math.min(3, p.likes)).map(a => `<img src="${a}" alt="">`).join('') : ''}
                </div>
                <span class="likes-count">${p.likes} likes</span>
            </div>
            <span>${p.comments.length} comments</span>
        </div>
        <div class="post-card__actions">
            <button class="post-action-btn like-btn ${p.liked ? 'liked' : ''}" data-id="${p.id}">
                <i class="fa-${p.liked ? 'solid' : 'regular'} fa-heart"></i>
                <span>${p.liked ? 'Liked' : 'Like'}</span>
            </button>
            <button class="post-action-btn comment-btn" data-id="${p.id}">
                <i class="fa-regular fa-comment"></i>
                <span>Comment</span>
            </button>
            <button class="post-action-btn share-btn" data-id="${p.id}">
                <i class="fa-solid fa-share-nodes"></i>
                <span>Share</span>
            </button>
            <button class="post-action-btn save-btn ${p.saved ? 'saved' : ''}" data-id="${p.id}">
                <i class="fa-${p.saved ? 'solid' : 'regular'} fa-bookmark"></i>
            </button>
        </div>
        <div class="post-card__comments ${p.showComments ? 'open' : ''}" data-cfor="${p.id}">
            ${comments}
            <div class="comment-input-row">
                <input type="text" placeholder="Write a comment..." class="c-input" data-id="${p.id}">
                <button class="c-submit" data-id="${p.id}"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    </article>`;
}

function attachPostListeners(container) {
    // Like
    container.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const post = findPost(id);
            if (!post) return;
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            btn.classList.toggle('liked', post.liked);
            btn.querySelector('i').className = `fa-${post.liked ? 'solid' : 'regular'} fa-heart`;
            btn.querySelector('span').textContent = post.liked ? 'Liked' : 'Like';
            const card = btn.closest('.post-card');
            const likesCount = card?.querySelector('.likes-count');
            if (likesCount) likesCount.textContent = `${post.likes} likes`;
        });
    });

    // Comment toggle
    container.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cd = container.querySelector(`[data-cfor="${btn.dataset.id}"]`);
            if (cd) {
                cd.classList.toggle('open');
                if (cd.classList.contains('open')) cd.querySelector('.c-input')?.focus();
            }
        });
    });

    // Comment submit
    container.querySelectorAll('.c-submit').forEach(btn => {
        btn.addEventListener('click', () => addComment(btn.dataset.id, container));
    });
    container.querySelectorAll('.c-input').forEach(inp => {
        inp.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addComment(inp.dataset.id, container);
        });
    });

    // Share
    container.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard?.writeText(location.href + '?post=' + btn.dataset.id)
                .then(() => showToast('Link copied to clipboard! 🔗'))
                .catch(() => showToast('Share this post with friends!'));
        });
    });

    // Save
    container.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const post = findPost(id);
            if (!post) return;
            post.saved = !post.saved;
            btn.classList.toggle('saved', post.saved);
            btn.querySelector('i').className = `fa-${post.saved ? 'solid' : 'regular'} fa-bookmark`;
            showToast(post.saved ? 'Post saved! 🔖' : 'Removed from saved');
        });
    });

    // Like buttons stopProp
    container.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => e.stopPropagation());
    });

    // Click card → open post detail overlay
    container.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.post-card__actions') || e.target.closest('.post-card__comments') || e.target.closest('.comment-input-row')) return;
            const pid = parseInt(card.dataset.postId);
            openPostOverlay(pid);
        });
    });
}

function addComment(postId, container) {
    const input = container.querySelector(`.c-input[data-id="${postId}"]`);
    const text = input?.value.trim();
    if (!text) return;

    const post = findPost(parseInt(postId));
    if (!post) return;

    post.comments.push({
        author: 'Alex Sharma', avatar: 'letter:T',
        text, time: 'Just now'
    });
    post.showComments = true;

    const cd = container.querySelector(`[data-cfor="${postId}"]`);
    if (cd) {
        const commentsHTML = post.comments.map(c => {
            let cAvatar;
            if (c.avatar && c.avatar.startsWith('letter:')) {
                const letter = c.avatar.split(':')[1];
                cAvatar = `<div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#5B5FEF,#8B5CF6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0;">${letter}</div>`;
            } else {
                cAvatar = `<img class="comment__avatar" src="${c.avatar}" alt="${c.author}">`;
            }
            return `
            <div class="comment">
                ${cAvatar}
                <div class="comment__body">
                    <span class="comment__author">${c.author}</span>
                    <p class="comment__text">${c.text}</p>
                    <span class="comment__time">${c.time}</span>
                </div>
            </div>`;
        }).join('');

        cd.innerHTML = `${commentsHTML}
            <div class="comment-input-row">
                <input type="text" placeholder="Write a comment..." class="c-input" data-id="${postId}">
                <button class="c-submit" data-id="${postId}"><i class="fa-solid fa-paper-plane"></i></button>
            </div>`;
        cd.classList.add('open');

        cd.querySelector('.c-submit').addEventListener('click', () => addComment(postId, container));
        cd.querySelector('.c-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addComment(postId, container);
        });

        const stat = cd.closest('.post-card')?.querySelector('.post-card__stats span:last-child');
        if (stat) stat.textContent = `${post.comments.length} comments`;
    }
    showToast('✅ Comment posted successfully!');
}

function findPost(id) {
    let p = posts.find(x => x.id === id);
    if (p) return p;
    for (const key in groupPosts) {
        p = groupPosts[key].find(x => x.id === id);
        if (p) return p;
    }
    return null;
}

// =============================================
//   GROUPS
// =============================================
function renderGroups() {
    const grid = $('#groupsGrid');
    if (!grid) return;

    grid.innerHTML = sampleGroups.map(g => `
        <div class="group-card" data-gid="${g.id}">
            <div class="group-card__banner ${g.banner}">
                <i class="${g.icon} group-card__banner-icon"></i>
                <h3>${g.name}</h3>
            </div>
            <div class="group-card__body">
                <div class="group-card__stats">
                    <span><i class="fa-solid fa-users"></i> ${g.members.toLocaleString()} members</span>
                    <span><i class="fa-solid fa-message"></i> ${g.postsCount} posts</span>
                </div>
                <p class="group-card__desc">${g.desc}</p>
                <button class="group-card__btn ${g.joined ? 'joined' : 'join'}" data-gid="${g.id}">
                    ${g.joined ? '<i class="fa-solid fa-check"></i> Joined' : '<i class="fa-solid fa-plus"></i> Join Group'}
                </button>
            </div>
        </div>
    `).join('');

    // Join/Leave
    grid.querySelectorAll('.group-card__btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const g = sampleGroups.find(x => x.id === btn.dataset.gid);
            if (!g) return;
            g.joined = !g.joined;
            g.members += g.joined ? 1 : -1;
            btn.className = `group-card__btn ${g.joined ? 'joined' : 'join'}`;
            btn.innerHTML = g.joined ? '<i class="fa-solid fa-check"></i> Joined' : '<i class="fa-solid fa-plus"></i> Join Group';
            const card = btn.closest('.group-card');
            card.querySelector('.group-card__stats span:first-child').innerHTML = `<i class="fa-solid fa-users"></i> ${g.members.toLocaleString()} members`;
            showToast(g.joined ? `Joined ${g.name}! 🎉` : `Left ${g.name}`);
        });
    });

    // Click group card → open group feed
    grid.querySelectorAll('.group-card').forEach(card => {
        card.addEventListener('click', () => {
            const gid = card.dataset.gid;
            const g = sampleGroups.find(x => x.id === gid);
            if (g && g.joined) {
                openGroupFeed(gid);
            } else {
                showToast('Join the group first to view its feed');
            }
        });
    });
}

function openGroupFeed(gid) {
    const g = sampleGroups.find(x => x.id === gid);
    if (!g) return;

    $('#groupsView').style.display = 'none';
    const view = $('#groupFeedView');
    view.style.display = 'block';

    const gPosts = groupPosts[gid] || [];

    view.innerHTML = `
        <div class="group-feed">
            <div class="group-feed__header">
                <div class="group-feed__banner group-card__banner ${g.banner}">
                    <div><h2>${g.name}</h2><p>${g.members.toLocaleString()} members • ${g.postsCount} posts</p></div>
                </div>
                <div class="group-feed__meta">
                    <div class="group-feed__stats">
                        <span><strong>${g.members.toLocaleString()}</strong> members</span>
                        <span><strong>${g.postsCount}</strong> posts</span>
                    </div>
                    <button class="group-feed__back" id="backToGroups"><i class="fa-solid fa-arrow-left"></i> Back</button>
                </div>
            </div>
            <div class="create-post" style="margin-bottom:20px;">
                <div class="create-post__header">
                    <div class="create-post__avatar-letter">T</div>
                    <div class="create-post__prompt" id="groupPostPrompt">Share something with ${g.name}... ✍️</div>
                </div>
                <div class="create-post__form" id="groupPostForm">
                    <input type="text" id="groupPostTitle" placeholder="Post title...">
                    <textarea id="groupPostContent" placeholder="Share your thoughts..."></textarea>
                    <div style="margin-top:10px;">
                        <input type="file" id="groupPostImage" accept="image/*" style="font-size:0.75rem;">
                    </div>
                    <div class="create-post__actions">
                        <div></div>
                        <button class="create-post__submit" id="submitGroupPost"><i class="fa-solid fa-paper-plane"></i> Post</button>
                    </div>
                </div>
            </div>
            <div id="groupPostsFeed"></div>
        </div>
    `;

    renderPostsList(gPosts, '#groupPostsFeed');

    // Back button
    view.querySelector('#backToGroups').addEventListener('click', () => {
        view.style.display = 'none';
        $('#groupsView').style.display = 'block';
    });

    // Group create post
    view.querySelector('#groupPostPrompt').addEventListener('click', () => {
        view.querySelector('#groupPostForm').classList.add('open');
        view.querySelector('#groupPostPrompt').style.display = 'none';
        view.querySelector('#groupPostTitle').focus();
    });

    view.querySelector('#submitGroupPost').addEventListener('click', () => {
        const title = view.querySelector('#groupPostTitle').value.trim();
        const content = view.querySelector('#groupPostContent').value.trim();
        const file = view.querySelector('#groupPostImage').files[0];

        if (!title && !content && !file) { showToast('Please add content or an image'); return; }

        const createAndRender = (imgSrc) => {
            const newPost = {
                id: ++postIdCounter,
                author: 'Alex Sharma', avatar: 'letter:T',
                time: 'Just now', title, content,
                image: imgSrc || '', tags: [gid === 'internship' ? 'internship' : gid === 'project' ? 'projects' : gid],
                likes: 0, liked: false, saved: false, group: gid,
                comments: [], showComments: false
            };
            if (!groupPosts[gid]) groupPosts[gid] = [];
            groupPosts[gid].unshift(newPost);
            renderPostsList(groupPosts[gid], '#groupPostsFeed');

            view.querySelector('#groupPostTitle').value = '';
            view.querySelector('#groupPostContent').value = '';
            view.querySelector('#groupPostImage').value = '';
            view.querySelector('#groupPostForm').classList.remove('open');
            view.querySelector('#groupPostPrompt').style.display = 'flex';
            showToast('Posted in ' + g.name + '! 🎉');
        };

        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => createAndRender(ev.target.result);
            reader.readAsDataURL(file);
        } else {
            createAndRender('');
        }
    });
}

// =============================================
//   EXPLORE
// =============================================
function renderExplore() {
    const grid = $('#exploreGrid');
    if (!grid) return;

    grid.innerHTML = exploreCategories.map(c => `
        <div class="explore-cat" data-etag="${c.tag}">
            <div class="explore-cat__icon">${c.icon}</div>
            <div class="explore-cat__name">${c.name}</div>
            <div class="explore-cat__count">${c.count}</div>
        </div>
    `).join('');

    grid.querySelectorAll('.explore-cat').forEach(cat => {
        cat.addEventListener('click', () => filterByTag(cat.dataset.etag));
    });
}

function renderExplorePosts() {
    const sorted = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 4);
    renderPostsList(sorted, '#explorePosts');
}

// =============================================
//   TRENDING (Right Sidebar – Clickable)
// =============================================
function renderTrending() {
    // Replaced by inline HTML buttons for filterPosts trending widget
}

window.filterPosts = function(topic) {
    document.querySelectorAll('.trend-btn').forEach(btn => {
        if (btn.innerText.includes(topic)) {
            btn.style.background = 'var(--primary)';
            btn.style.color = '#fff';
            btn.style.borderColor = 'var(--primary)';
        } else {
            btn.style.background = 'var(--card)';
            btn.style.color = 'var(--text)';
            btn.style.borderColor = 'var(--border)';
        }
    });

    const postCards = document.querySelectorAll('#mainPostsFeed .post-card');
    postCards.forEach((p, index) => {
        if (index < 5) {
            p.style.display = 'block'; 
        } else {
            if (p.innerText.toLowerCase().includes(topic.toLowerCase())) {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        }
    });
};

// =============================================
//   SUGGESTED FRIENDS
// =============================================
function renderSuggested() {
    const container = $('#suggestedWidget');
    if (!container) return;

    container.innerHTML = suggestedFriends.map(f => `
        <div class="sug-friend">
            <img class="sug-friend__avatar" src="${f.avatar}" alt="${f.name}">
            <div class="sug-friend__info">
                <h4>${f.name}</h4>
                <p>${f.info}</p>
            </div>
            <button class="sug-friend__btn">Follow</button>
        </div>
    `).join('');

    container.querySelectorAll('.sug-friend__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.closest('.sug-friend').querySelector('h4').textContent;
            if (btn.classList.contains('following')) {
                btn.classList.remove('following');
                btn.textContent = 'Follow';
            } else {
                btn.classList.add('following');
                btn.textContent = 'Following';
                showToast(`Follow request sent to ${name}! 🤝`);
            }
        });
    });
}

// =============================================
//   NOTIFICATIONS
// =============================================
function renderNotifications() {
    const list = $('#notifList');
    if (!list) return;

    const html = sampleNotifications.map(n => {
        const iconMap = { like: 'fa-heart', comment: 'fa-comment', group: 'fa-users', follow: 'fa-user-plus' };
        return `
        <div class="notif-item ${n.unread ? 'unread' : ''}">
            <div class="notif-item__icon ${n.type}"><i class="fa-solid ${iconMap[n.type]}"></i></div>
            <div class="notif-item__content">
                <p class="notif-item__text">${n.text}</p>
                <span class="notif-item__time">${n.time}</span>
            </div>
        </div>`;
    }).join('');

    const header = list.querySelector('.notif-header');
    list.innerHTML = '';
    list.appendChild(header);
    list.insertAdjacentHTML('beforeend', html);

    $('#markAllRead').addEventListener('click', () => {
        sampleNotifications.forEach(n => n.unread = false);
        list.querySelectorAll('.notif-item.unread').forEach(i => i.classList.remove('unread'));
        const badge = $('#notifBtn .badge');
        if (badge) badge.style.display = 'none';
        showToast('All notifications marked read ✅');
    });
}

// =============================================
//   PROFILE
// =============================================
function initProfileTabs() {
    $$('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.profile-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProfileContent(tab.dataset.ptab);
        });
    });
}

function renderProfilePosts() {
    const mine = posts.filter(p => p.author === 'Alex Sharma');
    if (mine.length) renderPostsList(mine, '#profileContent');
    else $('#profileContent').innerHTML = `<div class="empty-state"><div class="empty-state__icon">✍️</div><h3 class="empty-state__title">No posts yet</h3><p class="empty-state__text">Share your thoughts with the community!</p></div>`;
}

function renderProfileContent(tab) {
    const c = $('#profileContent');
    if (tab === 'posts') { renderProfilePosts(); return; }
    if (tab === 'activity') {
        c.innerHTML = `
        <div class="widget" style="padding:24px;">
            <h3 style="font-size:0.92rem;font-weight:700;color:var(--text);margin-bottom:16px;">📊 Activity Summary</h3>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
                <div style="background:var(--primary-light);padding:18px;border-radius:var(--radius-md);text-align:center;">
                    <div style="font-size:1.4rem;font-weight:800;color:var(--primary);">42</div>
                    <div style="font-size:0.72rem;color:var(--subtext);margin-top:4px;">Posts Liked</div>
                </div>
                <div style="background:var(--blue-light);padding:18px;border-radius:var(--radius-md);text-align:center;">
                    <div style="font-size:1.4rem;font-weight:800;color:var(--blue);">28</div>
                    <div style="font-size:0.72rem;color:var(--subtext);margin-top:4px;">Comments</div>
                </div>
                <div style="background:var(--green-light);padding:18px;border-radius:var(--radius-md);text-align:center;">
                    <div style="font-size:1.4rem;font-weight:800;color:var(--green);">4</div>
                    <div style="font-size:0.72rem;color:var(--subtext);margin-top:4px;">Groups</div>
                </div>
                <div style="background:var(--amber-light);padding:18px;border-radius:var(--radius-md);text-align:center;">
                    <div style="font-size:1.4rem;font-weight:800;color:var(--amber);">15</div>
                    <div style="font-size:0.72rem;color:var(--subtext);margin-top:4px;">Shared</div>
                </div>
            </div>
        </div>`;
        return;
    }
    if (tab === 'about') {
        c.innerHTML = `
        <div class="widget" style="padding:24px;">
            <h3 style="font-size:0.92rem;font-weight:700;color:var(--text);margin-bottom:16px;">📋 About Me</h3>
            <div style="display:flex;flex-direction:column;gap:12px;">
                ${[
                    ['fa-graduation-cap', 'B.Tech CSE, Class of 2026'],
                    ['fa-building', 'SRM University, Chennai'],
                    ['fa-code', 'Full Stack Developer & DSA Enthusiast'],
                    ['fa-location-dot', 'Chennai, Tamil Nadu'],
                    ['fa-link', 'github.com/alexsharma']
                ].map(([icon, text]) => `
                    <div style="display:flex;align-items:center;gap:10px;">
                        <i class="fa-solid ${icon}" style="color:var(--primary);width:20px;text-align:center;"></i>
                        <span style="font-size:0.84rem;color:var(--subtext);">${text}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="widget" style="padding:24px;margin-top:20px;">
            <h3 style="font-size:0.92rem;font-weight:700;color:var(--text);margin-bottom:16px;">👥 Friends</h3>
            <div style="display:flex;flex-direction:column;gap:16px;">
                ${[
                    {name:"Priya Sharma", img:AVATARS.priya},
                    {name:"Rahul Kumar", img:AVATARS.rahul},
                    {name:"Sneha Patel", img:AVATARS.sneha},
                    {name:"Arjun Menon", img:AVATARS.arjun},
                    {name:"Vikram Sundar", img:AVATARS.vikram}
                ].map(f => `
                    <div style="display:flex;align-items:center;gap:12px;">
                        <img src="${f.img}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
                        <span style="font-size:0.85rem;font-weight:600;color:var(--text);">${f.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }
}

function updateProfilePostCount() {
    const el = $('#profilePostCount');
    if (el) el.textContent = posts.filter(p => p.author === 'Alex Sharma').length;
}

// =============================================
//   SAVED POSTS
// =============================================
function renderSavedPosts() {
    const saved = posts.filter(p => p.saved);
    const c = $('#savedContainer');
    if (saved.length) renderPostsList(saved, '#savedContainer');
    else c.innerHTML = `<div class="empty-state"><div class="empty-state__icon">📌</div><h3 class="empty-state__title">No saved posts yet</h3><p class="empty-state__text">Bookmark posts from the feed to find them here</p></div>`;
}

// =============================================
//   INVITE MODAL
// =============================================
function initInviteModal() {
    const overlay = $('#inviteModal');
    const inviteUsers = [
        { name: 'Priya Sharma', avatar: AVATARS.priya },
        { name: 'Rahul Kumar', avatar: AVATARS.rahul },
        { name: 'Sneha Patel', avatar: AVATARS.sneha },
        { name: 'Arjun Menon', avatar: AVATARS.arjun },
        { name: 'Kavitha Ramaswamy', avatar: AVATARS.kavitha },
        { name: 'Vikram Sundar', avatar: AVATARS.vikram },
        { name: 'Ananya Gupta', avatar: AVATARS.ananya },
        { name: 'Meera Nair', avatar: AVATARS.meera },
    ];

    $('#inviteBtn').addEventListener('click', () => {
        $('#inviteStep1').style.display = 'block';
        $('#inviteStep2').style.display = 'none';
        // Render invite list
        const list = $('#inviteList');
        list.innerHTML = inviteUsers.map(u => `
            <div class="invite-user">
                <img src="${u.avatar}" alt="${u.name}">
                <span>${u.name}</span>
                <button>Invite</button>
            </div>
        `).join('');

        list.querySelectorAll('.invite-user button').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.textContent = 'Invited ✓';
                btn.classList.add('invited');
                spawnConfetti();
                showToast(`Invitation sent to ${btn.closest('.invite-user').querySelector('span').textContent}!`);
            });
        });

        overlay.classList.add('show');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('show');
    });

    $('#closeInviteSuccess').addEventListener('click', () => overlay.classList.remove('show'));
}

function spawnConfetti() {
    const colors = ['#5B5FEF', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'confetti-piece';
            p.style.left = Math.random() * 100 + 'vw';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (1.5 + Math.random()) + 's';
            p.style.width = (6 + Math.random() * 8) + 'px';
            p.style.height = (6 + Math.random() * 8) + 'px';
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 2500);
        }, i * 25);
    }
}

// =============================================
//   POST DETAIL OVERLAY
// =============================================
function initPostOverlay() {
    const overlay = $('#postOverlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePostOverlay();
    });
}

function openPostOverlay(postId) {
    const post = findPost(postId);
    if (!post) return;
    const overlay = $('#postOverlay');
    const popup = $('#postPopup');

    popup.innerHTML = `
        <button class="post-popup__close" onclick="closePostOverlay()"><i class="fa-solid fa-xmark"></i></button>
        ${postHTML(post)}
    `;

    // Open comments by default in overlay
    const commentsEl = popup.querySelector('.post-card__comments');
    if (commentsEl) commentsEl.classList.add('open');

    attachPostListeners(popup);
    overlay.classList.add('show');
}

function closePostOverlay() {
    $('#postOverlay').classList.remove('show');
}

// =============================================
//   GLOBAL POST MODAL
// =============================================
function initGlobalPostModal() {
    const modal = $('#globalPostModal');

    $('#globalPostBtn').addEventListener('click', () => {
        modal.classList.add('show');
        $('#gPostTitle').value = '';
        $('#gPostContent').value = '';
        $('#gPostImage').value = '';
        setTimeout(() => $('#gPostTitle').focus(), 100);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    $('#gPostCancel').addEventListener('click', () => modal.classList.remove('show'));

    $('#gPostSubmit').addEventListener('click', () => {
        const title = $('#gPostTitle').value.trim();
        const content = $('#gPostContent').value.trim();
        const category = $('#gPostCategory').value;

        if (!title && !content) { showToast('Please add a title or content'); return; }

        const fileInput = $('#gPostImage');
        const processPost = (imgSrc) => {
            const newPost = {
                id: ++postIdCounter,
                author: 'Alex Sharma',
                avatar: 'letter:T',
                time: 'Just now',
                title, content,
                image: imgSrc || '',
                tags: [category],
                likes: 0, liked: false, saved: false,
                group: null,
                comments: [],
                showComments: false
            };
            posts.unshift(newPost);
            navigateTo('feed');
            renderPosts();
            modal.classList.remove('show');
            showToast('Post published successfully! 🎉');
            updateProfilePostCount();
        };

        if (fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => processPost(ev.target.result);
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            processPost('');
        }
    });
}

// =============================================
//   TOAST
// =============================================
function showToast(msg) {
    const t = $('#toast');
    $('#toastMsg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// =============================================
//   KEYBOARD
// =============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        $('#inviteModal').classList.remove('show');
        $('#globalPostModal').classList.remove('show');
        closePostOverlay();
    }
});

// =============================================
//   AVATAR HELPER (Support letter avatars)
// =============================================
function avatarHTML(avatar, name, sizeClass) {
    if (avatar && avatar.startsWith('letter:')) {
        const letter = avatar.split(':')[1];
        return `<div class="${sizeClass || 'post-card__avatar-letter'}" style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#5B5FEF,#8B5CF6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0;">${letter}</div>`;
    }
    return `<img class="${sizeClass || 'post-card__avatar'}" src="${avatar}" alt="${name}">`;
}
