(function () {
  const THEME_KEY = 'campus-connect-theme';
  const ACTIVE_CLASS_KEY = 'campus-connect-active-class';
  let activeFeedFilter = 'all';

  const USERS = [
    {
      id: 'u1',
      name: 'Riya Kapoor',
      major: 'Computer Science',
      headline: 'SDE Intern @ ByteWave',
      mutual: 12,
      avatar: 'https://i.pravatar.cc/120?img=5'
    },
    {
      id: 'u2',
      name: 'Aarav Menon',
      major: 'Data Science',
      headline: 'ML Placement Prep | 4th Year',
      mutual: 8,
      avatar: 'https://i.pravatar.cc/120?img=12'
    },
    {
      id: 'u3',
      name: 'Sana Patel',
      major: 'Design Studies',
      headline: 'Product Design Intern @ FrameLab',
      mutual: 17,
      avatar: 'https://i.pravatar.cc/120?img=32'
    },
    {
      id: 'u4',
      name: 'Neha Verma',
      major: 'Electronics',
      headline: 'Embedded Systems Project Lead',
      mutual: 10,
      avatar: 'https://i.pravatar.cc/120?img=47'
    },
    {
      id: 'u5',
      name: 'Leo Zhang',
      major: 'Business Analytics',
      headline: 'Consulting & Product Roles',
      mutual: 6,
      avatar: 'https://i.pravatar.cc/120?img=14'
    },
    {
      id: 'u6',
      name: 'Maya Joseph',
      major: 'Physics',
      headline: 'Research Assistant | Quantum Lab',
      mutual: 9,
      avatar: 'https://i.pravatar.cc/120?img=25'
    },
    {
      id: 'u7',
      name: 'Omar Ali',
      major: 'Economics',
      headline: 'Placement Cell Coordinator',
      mutual: 14,
      avatar: 'https://i.pravatar.cc/120?img=68'
    },
    {
      id: 'u8',
      name: 'Anya Roy',
      major: 'Media Studies',
      headline: 'Campus Storytelling Club',
      mutual: 7,
      avatar: 'https://i.pravatar.cc/120?img=39'
    }
  ];

  const CLASSES = [
    { id: 'c1', name: 'Data Structures - A', members: 42, status: 'active', subtitle: 'Ongoing coding prep' },
    { id: 'c2', name: 'UI/UX Studio', members: 19, status: 'active', subtitle: 'Design critique thread' },
    { id: 'c3', name: 'Modern Physics Lab', members: 27, status: 'active', subtitle: 'Weekly experiment Q&A' },
    { id: 'c4', name: 'Economics Seminar', members: 34, status: 'closed', subtitle: 'Final report review' }
  ];

  const PUBLIC_POSTS = [
    {
      id: 'p1',
      userId: 'u3',
      time: '1h ago',
      title: 'Design Internship Shortlist Finally Out',
      content:
        'I just shortlisted 20 product design internship openings for 2026 with stipend, remote/hybrid mode, and portfolio requirements. Comment if you want the full spreadsheet and I will drop it here.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      tags: ['Internship', 'Design'],
      likes: 146,
      views: 1840,
      comments: [
        { userId: 'u1', time: '55m ago', text: 'Please share. I am applying next week and this helps a lot.' },
        { userId: 'u5', time: '42m ago', text: 'Can you add product analyst roles too?' }
      ]
    },
    {
      id: 'p2',
      userId: 'u7',
      time: '3h ago',
      title: 'Placement Update: 18 Students Selected',
      content:
        'Today\'s campus drive closed with 18 offers across SDE, analyst, and associate PM roles. Sharing role-wise CTC breakup and interview pattern in the comments so juniors can prepare smarter.',
      image: '',
      tags: ['Placement', 'Career'],
      likes: 212,
      views: 2410,
      comments: [
        { userId: 'u2', time: '2h ago', text: 'Could you share the DSA rounds pattern for SDE?' },
        { userId: 'u8', time: '95m ago', text: 'Congrats seniors. This motivates the entire batch.' }
      ]
    },
    {
      id: 'p3',
      userId: 'u2',
      time: 'Yesterday',
      title: 'Open Source Study Sprint: Systems Design + LeetCode',
      content:
        'Starting a 14-day peer sprint for placements. Daily target: one system design discussion and three medium-level coding questions. Anyone serious about consistency can join.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
      tags: ['Study', 'Placement', 'Project'],
      likes: 98,
      views: 1290,
      comments: [{ userId: 'u4', time: '23h ago', text: 'Add me. I can lead two mock interview rounds.' }]
    }
  ];

  const CLASS_POSTS = [
    {
      id: 'cp1',
      classId: 'c1',
      userId: 'u2',
      time: 'Today, 09:12 AM',
      title: 'Doubt: AVL Rotation in Placement Coding Round',
      content:
        'In yesterday\'s mock OA I solved BST insertion but failed on balancing after deletions. Can someone explain LL, LR, RR, RL with one practical interview style question?',
      image: '',
      tags: ['Doubt', 'Placement'],
      likes: 24,
      views: 320,
      comments: [
        { userId: 'u4', time: '09:19 AM', text: 'Start with LL and RR first. Then move to LR and RL cases.' },
        { userId: 'u3', time: '09:24 AM', text: 'I uploaded a visual rotation sheet in class resources.' }
      ]
    },
    {
      id: 'cp2',
      classId: 'c1',
      userId: 'u3',
      time: 'Today, 10:43 AM',
      title: 'Project Discussion: Heap vs Priority Queue Notes + Example',
      content:
        'I merged class notes and one mini project use case (task scheduler). Please review complexity analysis and comment if we should present this as a batch project in lab.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      tags: ['Project', 'Study'],
      likes: 37,
      views: 410,
      comments: [{ userId: 'u6', time: '10:49 AM', text: 'Add one min-heap coding snippet and it is presentation-ready.' }]
    }
  ];

  let activeClassId = 'c1';

  function setActiveClass(id) {
    if (!id) {
      return;
    }
    activeClassId = id;
    localStorage.setItem(ACTIVE_CLASS_KEY, id);
  }

  function getInitialClassId() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('class');
    const fromStorage = localStorage.getItem(ACTIVE_CLASS_KEY);
    return fromQuery || fromStorage || activeClassId;
  }

  function initials(name) {
    return name
      .split(' ')
      .map(function (part) {
        return part[0];
      })
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  function userById(id) {
    return USERS.find(function (user) {
      return user.id === id;
    });
  }

  function avatarMarkup(user, className) {
    const cls = className || 'avatar';
    if (user && user.avatar) {
      return '<div class="' + cls + '"><img src="' + user.avatar + '" alt="' + user.name + ' avatar" /></div>';
    }
    return '<div class="' + cls + '">' + initials(user ? user.name : 'U') + '</div>';
  }

  function commentsMarkup(post, scope) {
    const collapsedByDefault = scope === 'public';
    const stateClass = collapsedByDefault ? 'comment-list collapsed' : 'comment-list';
    const commentsHtml = post.comments
      .map(function (comment) {
        const commentUser = comment.userId ? userById(comment.userId) : { name: comment.user || 'Student' };
        return (
          '<div class="comment">' +
          '<div class="comment-head">' +
          '<strong>' +
          (commentUser ? commentUser.name : 'Student') +
          '</strong>' +
          '<span class="comment-time">' +
          (comment.time || 'Just now') +
          '</span>' +
          '</div>' +
          '<div>' +
          comment.text +
          '</div>' +
          '</div>'
        );
      })
      .join('');

    return {
      buttonLabel: collapsedByDefault ? 'Show comments (' + post.comments.length + ')' : 'Hide comments (' + post.comments.length + ')',
      block: '<div class="' + stateClass + '" id="comments-' + scope + '-' + post.id + '">' + commentsHtml + '</div>'
    };
  }

  function showToast(message, type) {
    const host = document.querySelector('.toast-host');
    if (!host) {
      return;
    }

    const node = document.createElement('div');
    node.className = 'toast ' + (type || 'success');
    node.textContent = message;
    host.appendChild(node);

    setTimeout(function () {
      node.style.opacity = '0';
      node.style.transform = 'translateX(12px)';
      setTimeout(function () {
        node.remove();
      }, 250);
    }, 2400);
  }

  function setLoading(button, loading, label) {
    if (!button) {
      return;
    }

    if (loading) {
      button.dataset.originalLabel = button.textContent;
      button.disabled = true;
      button.innerHTML = '<span class="spinner"></span> ' + (label || 'Loading...');
      return;
    }

    button.disabled = false;
    button.textContent = button.dataset.originalLabel || button.textContent;
  }

  function applyTheme(theme) {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  }

  function attachThemeToggles() {
    const saved = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(saved);

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
        applyTheme(next);
      });
    });
  }

  function attachRippleEffects() {
    document.addEventListener('click', function (event) {
      const target = event.target.closest('.btn, .icon-btn, .action-chip, .nav-item, .class-item');
      if (!target) {
        return;
      }

      const circle = document.createElement('span');
      const diameter = Math.max(target.clientWidth, target.clientHeight);
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - diameter / 2;
      const y = event.clientY - rect.top - diameter / 2;

      circle.className = 'ripple';
      circle.style.width = diameter + 'px';
      circle.style.height = diameter + 'px';
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';

      const oldRipple = target.querySelector('.ripple');
      if (oldRipple) {
        oldRipple.remove();
      }

      target.appendChild(circle);
    });
  }

  function setupMobileSidebar() {
    const toggle = document.querySelector('[data-mobile-toggle]');
    const sidebar = document.querySelector('[data-sidebar]');
    const overlay = document.querySelector('[data-overlay]');

    if (!toggle || !sidebar || !overlay) {
      return;
    }

    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  function postTemplate(post, scope) {
    const user = userById(post.userId) || USERS[0];
    const commentSection = commentsMarkup(post, scope);
    const tags = (post.tags || [])
      .map(function (tag) {
        return '<span class="tag tag-' + tag.toLowerCase() + '">#' + tag + '</span>';
      })
      .join('');

    return (
      '<article class="post-card" data-post-id="' +
      post.id +
      '">' +
      '<div class="post-head"><div class="user-wrap">' +
      avatarMarkup(user) +
      '<div><strong>' +
      user.name +
      '</strong><div class="post-time">' +
      user.headline +
      ' • ' +
      post.time +
      '</div></div></div></div>' +
      (post.title ? '<h3 class="post-title">' + post.title + '</h3>' : '') +
      '<p class="post-content">' +
      post.content +
      '</p>' +
      (tags ? '<div class="tag-list">' + tags + '</div>' : '') +
      (post.image ? '<img class="post-image" src="' + post.image + '" alt="Post media" />' : '') +
      '<div class="post-type">📝 ' +
      (post.image ? 'Image post' : 'Text post') +
      '</div>' +
      '<div class="post-actions"><button class="action-chip like-chip" data-like-btn data-like-post="' +
      post.id +
      '">❤ <span data-like-count>' +
      post.likes +
      '</span></button><button class="action-chip" data-comment-btn="comments-' +
      scope +
      '-' +
      post.id +
      '" data-comment-post="' +
      post.id +
      '">' +
      commentSection.buttonLabel +
      '</button></div>' +
      '<div class="engagement-row"><span class="engagement-item">👍 ' +
      post.likes +
      '</span><span class="engagement-item">💬 ' +
      post.comments.length +
      ' replies</span><span class="engagement-item">👁 ' +
      (post.views || 0) +
      ' views</span></div>' +
      commentSection.block +
      '</article>'
    );
  }

  function renderStories() {
    const host = document.querySelector('[data-stories]');
    if (!host) {
      return;
    }

    host.innerHTML = USERS.slice(0, 8)
      .map(function (user) {
        return (
          '<div class="story-item"><div class="story-ring">' +
          avatarMarkup(user) +
          '</div><div class="story-name">' +
          user.name.split(' ')[0] +
          '</div></div>'
        );
      })
      .join('');
  }

  function renderSuggestedUsers() {
    const host = document.getElementById('suggestedUsers');
    if (!host) {
      return;
    }

    host.innerHTML =
      '<h3>Suggested Users</h3>' +
      USERS.slice(1, 6)
        .map(function (user) {
          return (
            '<div class="suggested-user"><div class="user-wrap">' +
            avatarMarkup(user) +
            '</div><div><strong>' +
            user.name +
            '</strong><p>' +
            user.headline +
            '</p></div></div><button class="btn btn-secondary" data-follow-btn>Follow</button></div>'
          );
        })
        .join('');
  }

  function renderPublicFeed() {
    const feed = document.getElementById('publicFeed');
    if (!feed) {
      return;
    }

    const selected = activeFeedFilter.toLowerCase();
    const source = selected === 'all'
      ? PUBLIC_POSTS
      : PUBLIC_POSTS.filter(function (post) {
          return (post.tags || []).some(function (tag) {
            return tag.toLowerCase() === selected;
          });
        });

    feed.innerHTML = source.map(function (post) {
      return postTemplate(post, 'public');
    }).join('');

    if (!source.length) {
      feed.innerHTML =
        '<section class="empty-state"><div class="emoji">🧵</div><h3 style="margin-bottom: 6px">No threads in this category</h3><p style="margin: 0">Try a different tag or create the first post.</p></section>';
    }
  }

  function renderClassGrid() {
    const host = document.getElementById('classGrid');
    if (!host) {
      return;
    }

    host.innerHTML = CLASSES.map(function (item) {
      return (
        '<article class="class-card" data-class-id="' +
        item.id +
        '"><h3>' +
        item.name +
        '</h3><div class="meta-row"><span>' +
        item.members +
        ' members</span><span class="status-pill ' +
        item.status +
        '">' +
        (item.status === 'active' ? 'Active' : 'Closed') +
        '</span></div></article>'
      );
    }).join('');
  }

  function renderFriends(list) {
    const host = document.getElementById('friendsGrid');
    const empty = document.getElementById('friendsEmpty');
    if (!host || !empty) {
      return;
    }

    if (!list.length) {
      host.innerHTML = '';
      empty.style.display = 'block';
      return;
    }

    empty.style.display = 'none';
    host.innerHTML = list
      .map(function (user) {
        return (
          '<article class="friend-card"><div class="friend-head">' +
          avatarMarkup(user) +
          '</div><div><strong>' +
          user.name +
          '</strong><div class="friend-meta">' +
          user.major +
          ' • ' +
          user.headline +
          '</div></div></div><span class="mutual-chip">' +
          user.mutual +
          ' mutual connections</span><div class="friend-actions"><button class="btn btn-primary" data-follow-btn>Add Friend</button><button class="btn btn-secondary" data-follow-btn>Invite</button></div></article>'
        );
      })
      .join('');
  }

  function updateGroupHeader(currentClass) {
    const title = document.getElementById('groupTitle');
    const subtitle = document.getElementById('groupSubtitle');
    const status = document.getElementById('groupStatus');

    if (title) {
      title.textContent = currentClass.name;
    }

    if (subtitle) {
      subtitle.textContent = currentClass.subtitle;
    }

    if (status) {
      status.textContent = currentClass.status === 'active' ? 'Session Active' : 'Session Closed';
      status.className = 'status-pill ' + currentClass.status;
    }
  }

  function renderJoinedClassList() {
    const host = document.getElementById('joinedClassList');
    if (!host) {
      return;
    }

    host.innerHTML = CLASSES.map(function (item) {
      return (
        '<article class="class-item ' +
        (item.id === activeClassId ? 'active' : '') +
        '" data-class-switch="' +
        item.id +
        '"><strong>' +
        item.name +
        '</strong><p style="margin: 6px 0 0; color: var(--text-muted)">' +
        item.subtitle +
        '</p></article>'
      );
    }).join('');
  }

  function renderClassPosts() {
    const host = document.getElementById('classPostFeed');
    if (!host) {
      return;
    }

    const filtered = CLASS_POSTS.filter(function (post) {
      return post.classId === activeClassId;
    });

    if (!filtered.length) {
      host.innerHTML =
        '<section class="empty-state"><div class="emoji">📝</div><h3 style="margin-bottom: 6px">No posts yet</h3><p style="margin: 0">Start the first thread in this class.</p></section>';
      return;
    }

    host.innerHTML = filtered
      .map(function (post) {
        return postTemplate(post, 'class');
      })
      .join('');
  }

  function findPostById(postId) {
    const id = String(postId);
    return (
      PUBLIC_POSTS.find(function (post) {
        return post.id === id;
      }) ||
      CLASS_POSTS.find(function (post) {
        return post.id === id;
      })
    );
  }

  function setupInteractionHandlers() {
    document.addEventListener('click', function (event) {
      const likeButton = event.target.closest('[data-like-btn]');
      if (likeButton) {
        const postId = likeButton.getAttribute('data-like-post');
        const post = findPostById(postId);
        const countNode = likeButton.querySelector('[data-like-count]');

        if (!post || !countNode) {
          return;
        }

        const active = likeButton.classList.toggle('active');
        post.likes += active ? 1 : -1;
        post.views = (post.views || 0) + 1;
        countNode.textContent = String(post.likes);
        likeButton.classList.remove('like-pop');
        void likeButton.offsetWidth;
        likeButton.classList.add('like-pop');
        return;
      }

      const commentButton = event.target.closest('[data-comment-btn]');
      if (commentButton) {
        const postId = commentButton.getAttribute('data-comment-post');
        const post = findPostById(postId);
        const targetId = commentButton.getAttribute('data-comment-btn');
        const block = document.getElementById(targetId);

        if (!post || !block) {
          return;
        }

        const collapsed = block.classList.toggle('collapsed');
        commentButton.textContent =
          (collapsed ? 'Show comments (' : 'Hide comments (') + post.comments.length + ')';
        if (!collapsed) {
          block.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      const followButton = event.target.closest('[data-follow-btn]');
      if (followButton) {
        const followed = followButton.dataset.followed === 'yes';
        followButton.dataset.followed = followed ? 'no' : 'yes';
        followButton.textContent = followed ? 'Follow' : 'Following';
        showToast(followed ? 'Removed from following.' : 'Connection request sent.', 'success');
        return;
      }

      const classSwitch = event.target.closest('[data-class-switch]');
      if (classSwitch) {
        setActiveClass(classSwitch.getAttribute('data-class-switch'));
        const currentClass = CLASSES.find(function (item) {
          return item.id === activeClassId;
        });
        if (!currentClass) {
          return;
        }
        renderJoinedClassList();
        updateGroupHeader(currentClass);
        renderClassPosts();
      }
    });
  }

  function setupAskPostModal() {
    const modal = document.querySelector('[data-ask-modal]');
    const openBtn = document.querySelector('[data-open-ask-modal]');
    const closeBtn = document.querySelector('[data-close-ask-modal]');
    const form = document.querySelector('[data-ask-form]');

    if (!modal || !openBtn || !closeBtn || !form) {
      return;
    }

    openBtn.addEventListener('click', function () {
      modal.classList.add('open');
    });

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('open');
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const titleInput = form.querySelector('[name="title"]');
      const contentInput = form.querySelector('[name="content"]');
      const title = titleInput ? titleInput.value.trim() : '';
      const content = contentInput ? contentInput.value.trim() : '';

      if (title.length < 6 || content.length < 10) {
        showToast('Add a clear title and more details in your thread.', 'error');
        return;
      }

      PUBLIC_POSTS.unshift({
        id: 'p' + Date.now(),
        userId: 'u1',
        time: 'Just now',
        title: title,
        content: content,
        image: '',
        tags: ['Study'],
        likes: 0,
        views: 1,
        comments: []
      });

      modal.classList.remove('open');
      form.reset();
      activeFeedFilter = 'all';
      document.querySelectorAll('[data-filter]').forEach(function (chip) {
        chip.classList.toggle('active', chip.getAttribute('data-filter') === 'all');
      });
      renderPublicFeed();
      showToast('Thread posted successfully.', 'success');
    });
  }

  function setupFeedFilters() {
    const host = document.querySelector('[data-feed-filters]');
    if (!host) {
      return;
    }

    host.addEventListener('click', function (event) {
      const chip = event.target.closest('[data-filter]');
      if (!chip) {
        return;
      }

      activeFeedFilter = chip.getAttribute('data-filter') || 'all';
      host.querySelectorAll('[data-filter]').forEach(function (item) {
        item.classList.toggle('active', item === chip);
      });
      renderPublicFeed();
    });
  }

  function setupModal() {
    const modal = document.querySelector('[data-modal]');
    if (!modal) {
      return;
    }

    const openBtn = document.querySelector('[data-open-modal]');
    const closeBtns = document.querySelectorAll('[data-close-modal]');

    if (openBtn) {
      openBtn.addEventListener('click', function () {
        modal.classList.add('open');
      });
    }

    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.classList.remove('open');
      });
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('open');
      }
    });

    const createForm = document.querySelector('[data-create-class-form]');
    if (!createForm) {
      return;
    }

    createForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const className = createForm.querySelector('[name="className"]');
      const rawName = className ? className.value.trim() : '';

      if (rawName.length < 3) {
        showToast('Class name must be at least 3 characters.', 'error');
        return;
      }

      CLASSES.unshift({
        id: 'c' + Date.now(),
        name: rawName,
        members: 1,
        status: 'active',
        subtitle: 'New class room'
      });

      renderClassGrid();
      renderJoinedClassList();
      showToast('Class created successfully.', 'success');
      modal.classList.remove('open');
      createForm.reset();
    });
  }

  function setupAuthForms() {
    document.querySelectorAll('[data-auth-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const isRegister = form.getAttribute('data-auth-form') === 'register';
        const email = form.querySelector('input[type="email"]');
        const password = form.querySelector('input[type="password"]');

        if (!email || !password || !email.value.trim() || password.value.length < 6) {
          showToast('Please provide valid credentials.', 'error');
          return;
        }

        if (isRegister) {
          const name = form.querySelector('input[name="name"]');
          if (!name || name.value.trim().length < 3) {
            showToast('Please enter your full name.', 'error');
            return;
          }
          setLoading(submitBtn, true, 'Creating...');
          setTimeout(function () {
            setLoading(submitBtn, false);
            showToast('Registration successful. Welcome to Campus Connect!', 'success');
            setTimeout(function () {
              window.location.href = 'feed.html';
            }, 700);
          }, 700);
        } else {
          setLoading(submitBtn, true, 'Signing in...');
          setTimeout(function () {
            setLoading(submitBtn, false);
            showToast('Login successful. Redirecting...', 'success');
            setTimeout(function () {
              window.location.href = 'feed.html';
            }, 700);
          }, 700);
        }
      });
    });
  }

  function setupDashboardActions() {
    const joinBtn = document.querySelector('[data-join-class-btn]');
    const joinInput = document.querySelector('[data-join-input]');

    if (joinBtn && joinInput) {
      joinBtn.addEventListener('click', function () {
        if (!joinInput.value.trim()) {
          showToast('Enter a class code to join.', 'error');
          return;
        }

        setLoading(joinBtn, true, 'Joining...');
        setTimeout(function () {
          setLoading(joinBtn, false);
          showToast('Class joined successfully.', 'success');
          joinInput.value = '';
          window.location.href = 'group.html';
        }, 650);
      });
    }

    const classGrid = document.getElementById('classGrid');
    if (classGrid) {
      classGrid.addEventListener('click', function (event) {
        const card = event.target.closest('[data-class-id]');
        if (!card) {
          return;
        }

        const classId = card.getAttribute('data-class-id');
        if (!classId) {
          return;
        }

        setActiveClass(classId);
        window.location.href = 'group.html?class=' + encodeURIComponent(classId);
      });
    }
  }

  function setupFriendsPage() {
    const search = document.getElementById('friendSearch');
    if (!search) {
      return;
    }

    renderFriends(USERS);

    search.addEventListener('input', function () {
      const query = search.value.trim().toLowerCase();
      const filtered = USERS.filter(function (user) {
        return user.name.toLowerCase().includes(query) || user.major.toLowerCase().includes(query);
      });
      renderFriends(filtered);
    });
  }

  function setupFeedPage() {
    if (!document.getElementById('publicFeed')) {
      return;
    }

    const skeletonHost = document.querySelector('[data-skeletons]');
    const feed = document.getElementById('publicFeed');
    if (skeletonHost && feed) {
      feed.style.display = 'none';
      setTimeout(function () {
        skeletonHost.style.display = 'none';
        feed.style.display = 'block';
      }, 800);
    }

    renderStories();
    renderSuggestedUsers();
    renderPublicFeed();
    setupFeedFilters();
    setupAskPostModal();
  }

  function setupDashboardPage() {
    renderClassGrid();
  }

  function setupGroupPage() {
    if (!document.getElementById('classPostFeed')) {
      return;
    }

    const requestedClassId = getInitialClassId();
    const exists = CLASSES.some(function (item) {
      return item.id === requestedClassId;
    });
    if (exists) {
      setActiveClass(requestedClassId);
    }

    const skeletonHost = document.querySelector('[data-skeletons]');
    const feed = document.getElementById('classPostFeed');
    if (skeletonHost && feed) {
      feed.style.display = 'none';
      setTimeout(function () {
        skeletonHost.style.display = 'none';
        feed.style.display = 'block';
      }, 900);
    }

    const currentClass = CLASSES.find(function (item) {
      return item.id === activeClassId;
    }) || CLASSES[0];
    setActiveClass(currentClass.id);

    renderJoinedClassList();
    updateGroupHeader(currentClass);
    renderClassPosts();

    const postForm = document.querySelector('[data-post-form]');
    if (!postForm) {
      return;
    }

    postForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const input = postForm.querySelector('textarea');
      const submitBtn = postForm.querySelector('button[type="submit"]');
      const imageInput = document.getElementById('classImage');

      if (!input || !input.value.trim()) {
        showToast('Write something before posting.', 'error');
        return;
      }

      setLoading(submitBtn, true, 'Posting...');
      setTimeout(function () {
        const hasImage = imageInput && imageInput.files && imageInput.files[0];
        CLASS_POSTS.unshift({
          id: 'cp' + Date.now(),
          classId: activeClassId,
          userId: 'u1',
          time: 'Just now',
          title: hasImage ? 'Project Update with Screenshot' : 'Study Discussion',
          content: input.value.trim(),
          image: hasImage ? URL.createObjectURL(imageInput.files[0]) : '',
          tags: [hasImage ? 'Project' : 'Study'],
          likes: 0,
          views: 1,
          comments: []
        });

        setLoading(submitBtn, false);
        renderClassPosts();
        showToast('Post submitted to your class feed.', 'success');
        input.value = '';
        if (imageInput) {
          imageInput.value = '';
        }
      }, 700);
    });
  }

  function init() {
    attachThemeToggles();
    attachRippleEffects();
    setupInteractionHandlers();
    setupMobileSidebar();
    setupModal();
    setupAuthForms();
    setupDashboardActions();
    setupFeedPage();
    setupFriendsPage();
    setupDashboardPage();
    setupGroupPage();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
