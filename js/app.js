// 丰富的作品数据
const worksData = [
    {
        id: 1,
        title: '品牌视觉识别系统',
        category: 'design',
        categoryName: '品牌设计',
        description: '为科技初创公司打造完整的品牌视觉识别系统，包括Logo设计、色彩规范、字体系统和应用延展。整体风格现代简约，传达创新与专业。',
        tags: ['品牌VI', 'Logo设计', '科技'],
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500'
    },
    {
        id: 2,
        title: '电商APP界面设计',
        category: 'design',
        categoryName: 'UI/UX设计',
        description: '移动端电商应用的完整界面设计方案，包含首页、商品详情、购物车、订单等核心页面。采用卡片式设计，注重用户体验和视觉层次。',
        tags: ['UI设计', '移动端', '电商'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500'
    },
    {
        id: 3,
        title: '企业官网重设计',
        category: 'design',
        categoryName: '网页设计',
        description: '为传统企业打造现代化官网设计，采用全屏大图、微动画交互和响应式布局。视觉风格简洁大气，突出品牌核心价值。',
        tags: ['网页设计', '企业官网', '响应式'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500'
    },
    {
        id: 4,
        title: '产品包装设计',
        category: 'design',
        categoryName: '包装设计',
        description: '高端护肤品系列包装设计，采用极简主义风格，配合烫金工艺和特种纸张，营造奢华质感。',
        tags: ['包装设计', '奢侈品', '极简'],
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500'
    },
    {
        id: 5,
        title: '插画风格海报',
        category: 'design',
        categoryName: '插画设计',
        description: '原创数字插画海报系列，融合扁平风格与渐变色彩，主题涵盖自然、城市和生活方式。',
        tags: ['插画', '数字艺术', '海报'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500'
    },
    {
        id: 6,
        title: '社交媒体配图设计',
        category: 'design',
        categoryName: '社媒设计',
        description: '为品牌社交媒体账号设计的视觉内容系列，包括Instagram帖子、故事模板和宣传图。风格统一且富有创意。',
        tags: ['社交媒体', '内容营销', '视觉设计'],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500'
    },
    {
        id: 7,
        title: '城市光影摄影',
        category: 'photo',
        categoryName: '城市摄影',
        description: '捕捉都市建筑与光影的完美结合，通过构图和光线运用展现城市的独特魅力。',
        tags: ['城市', '建筑', '光影'],
        image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=500'
    },
    {
        id: 8,
        title: '自然风光系列',
        category: 'photo',
        categoryName: '风景摄影',
        description: '探索大自然的壮丽景色，从高山到海洋，每一帧都是对自然之美的致敬。',
        tags: ['自然', '风景', '户外'],
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500'
    },
    {
        id: 9,
        title: '人像摄影作品',
        category: 'photo',
        categoryName: '人像摄影',
        description: '专注于人物肖像摄影，通过光影和表情捕捉人物的内心世界和独特个性。',
        tags: ['人像', '情绪', '光影'],
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500'
    },
    {
        id: 10,
        title: '产品展示视频',
        category: 'video',
        categoryName: '视频制作',
        description: '高端产品展示视频，结合精致的画面构图和流畅的镜头语言，展现产品的细节与品质。',
        tags: ['产品视频', '商业广告', '品牌宣传'],
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    },
    {
        id: 11,
        title: '动态Logo动画',
        category: 'video',
        categoryName: '动效设计',
        description: '品牌Logo的动态演绎动画，通过流畅的过渡和精致的细节提升品牌识别度。',
        tags: ['动效', 'Logo动画', '品牌'],
        image: 'https://images.unsplash.com/photo-1595617795501-9661aafda72a?w=500'
    },
    {
        id: 12,
        title: '品牌故事短片',
        category: 'video',
        categoryName: '视频制作',
        description: '讲述品牌背后故事的情感短片，通过叙事手法和视觉美学打动观众。',
        tags: ['品牌故事', '纪录片', '情感'],
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500'
    },
    {
        id: 13,
        title: '品牌设计指南手册',
        category: 'design',
        categoryName: '设计系统',
        description: '详细的品牌设计指南手册，包含品牌定位、视觉规范、应用示例等完整内容。',
        tags: ['设计规范', '品牌手册', 'VI系统'],
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500'
    },
    {
        id: 14,
        title: '数据可视化设计',
        category: 'design',
        categoryName: '信息设计',
        description: '复杂数据的可视化呈现方案，将枯燥的数据转化为直观美观的信息图表。',
        tags: ['数据可视化', '信息图表', 'UI'],
        image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd1137c?w=500'
    },
    {
        id: 15,
        title: '品牌图标系统',
        category: 'design',
        categoryName: '图标设计',
        description: '为产品设计的完整图标系统，风格统一、识别性强，适用于多平台应用。',
        tags: ['图标设计', 'UI图标', '系统设计'],
        image: 'https://images.unsplash.com/photo-1523414609791-e957c608bbb5?w=500'
    },
    {
        id: 16,
        title: '网页交互动效',
        category: 'design',
        categoryName: '交互设计',
        description: '网页交互动效设计方案，包括滚动动画、悬停效果、页面过渡等微交互细节。',
        tags: ['交互设计', '动效', '网页'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500'
    },
    {
        id: 17,
        title: '商业产品摄影',
        category: 'photo',
        categoryName: '产品摄影',
        description: '专业商业产品摄影，通过精心布置的场景和灯光，展现产品的质感与细节。',
        tags: ['产品', '商业', '静物'],
        image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=500'
    },
    {
        id: 18,
        title: '短视频创意剪辑',
        category: 'video',
        categoryName: '视频剪辑',
        description: '创意短视频内容制作，包括脚本创作、拍摄和后期剪辑，适合社交媒体传播。',
        tags: ['短视频', '剪辑', '社交媒体'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500'
    },
    {
        id: 19,
        title: '音频播客封面',
        category: 'audio',
        categoryName: '音频设计',
        description: '为播客节目设计的封面艺术作品，结合品牌调性与听觉体验，打造独特的视觉识别。',
        tags: ['播客', '封面设计', '音频'],
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500'
    },
    {
        id: 20,
        title: '音乐专辑封面',
        category: 'audio',
        categoryName: '专辑设计',
        description: '独立音乐专辑封面设计，融合抽象艺术与音乐风格，创造视觉与听觉的完美融合。',
        tags: ['专辑封面', '音乐', '艺术'],
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500'
    },
    {
        id: 21,
        title: '旅行随笔集',
        category: 'writing',
        categoryName: '文字创作',
        description: '记录旅行见闻的图文随笔集，文字与摄影的完美结合，带你领略世界各地的风土人情。',
        tags: ['旅行', '随笔', '图文'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500'
    },
    {
        id: 22,
        title: '设计方法论',
        category: 'writing',
        categoryName: '设计文章',
        description: '分享设计思维与方法论的专栏文章，探讨设计背后的逻辑与思考过程。',
        tags: ['设计理论', '方法论', '专栏'],
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500'
    },
    {
        id: 23,
        title: '极简室内摄影',
        category: 'photo',
        categoryName: '室内摄影',
        description: '简约风格的室内空间摄影，通过光影和线条展现空间的美感与设计感。',
        tags: ['室内', '极简', '空间'],
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500'
    },
    {
        id: 24,
        title: '品牌年度报告设计',
        category: 'design',
        categoryName: '报告设计',
        description: '企业年度报告的视觉设计方案，将数据与故事完美结合，呈现专业形象。',
        tags: ['年度报告', '数据可视化', '企业'],
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500'
    }
];

// DOM元素
const filterButtons = document.querySelectorAll('.filter-btn');
const worksGrid = document.querySelector('.works-grid');
const modal = document.getElementById('workModal');
const closeModal = document.querySelector('#workModal .close');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// 添加作品相关元素
const addWorkBtn = document.getElementById('addWorkBtn');
const addWorkModal = document.getElementById('addWorkModal');
const addWorkForm = document.getElementById('addWorkForm');
const closeAddModal = addWorkModal.querySelector('.close');
const workCategorySelect = document.getElementById('workCategory');
const audioGroup = document.getElementById('audioGroup');

// 分类图标配置
const categoryConfig = {
    design: { icon: 'fa-palette', textColor: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.15)' },
    photo: { icon: 'fa-camera', textColor: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.15)' },
    video: { icon: 'fa-film', textColor: '#22d3ee', bgColor: 'rgba(34, 211, 238, 0.15)' },
    writing: { icon: 'fa-book-open', textColor: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.15)' },
    audio: { icon: 'fa-music', textColor: '#10b981', bgColor: 'rgba(16, 185, 129, 0.15)' }
};

// 滚动动画观察器
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 初始化
function init() {
    initWorks();
    setupScrollAnimations();
    initStatsCounter();
}

// 设置滚动动画
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(80px)';
        section.style.transition = 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });
}

// 初始化作品网格
function initWorks() {
    renderWorks(worksData);
}

// 渲染作品
function renderWorks(works) {
    worksGrid.innerHTML = '';
    
    if (works.length === 0) {
        worksGrid.innerHTML = '<div style="text-align: center; padding: 4rem; color: var(--text-muted);">暂无作品</div>';
        return;
    }
    
    works.forEach((work, index) => {
        const card = document.createElement('div');
        card.className = `work-card ${work.category === 'audio' ? 'audio-card' : ''}`;
        card.dataset.id = work.id;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`;
        
        const config = categoryConfig[work.category] || { icon: 'fa-image', textColor: '#6b7280', bgColor: 'rgba(107, 114, 128, 0.15)' };
        
        let imageContent = '';
        if (work.image) {
            imageContent = `
                <div class="work-image">
                    <img src="${work.image}" alt="${work.title}" 
                         loading="lazy"
                         onerror="this.style.display='none'; this.parentElement.className='work-image fallback'; this.parentElement.innerHTML='<i class=\\'fas ${config.icon}\\' style=\\'color: ${config.textColor};\\'></i>';" />
                </div>
            `;
        } else {
            imageContent = `
                <div class="work-image fallback">
                    <i class="fas ${config.icon}" style="color: ${config.textColor};"></i>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${imageContent}
            <div class="work-info">
                <div class="work-category-badge" style="background: ${config.bgColor}; color: ${config.textColor}; border-color: ${config.textColor}30;">
                    <i class="fas ${config.icon}"></i>
                    <span>${work.categoryName}</span>
                </div>
                <h3 class="work-title">${work.title}</h3>
                <p class="work-description">${work.description.substring(0, 70)}...</p>
                <div class="work-tags">
                    ${work.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="work-hover-effect">
                    <span class="view-text">查看详情</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(work));
        worksGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 60);
    });
}

// 筛选作品
function filterWorks(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderWorks(worksData);
    } else {
        const filtered = worksData.filter(work => work.category === category);
        renderWorks(filtered);
    }
}

// 打开详情模态框
function openModal(work) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    
    const existingAudio = document.querySelector('.modal-audio');
    if (existingAudio) existingAudio.remove();
    
    const config = categoryConfig[work.category] || { icon: 'fa-image', textColor: '#6b7280', bgColor: 'rgba(107, 114, 128, 0.15)' };
    
    if (work.image) {
        modalImage.innerHTML = `<img src="${work.image}" alt="${work.title}" />`;
    } else {
        modalImage.innerHTML = `<i class="fas ${config.icon} modal-icon" style="color: ${config.textColor};"></i>`;
    }
    
    modalTitle.textContent = work.title;
    modalCategory.innerHTML = `<span style="width: 10px; height: 10px; border-radius: 50%; background: ${config.textColor}; display: inline-block; margin-right: 8px;"></span>${work.categoryName}`;
    modalCategory.style.color = config.textColor;
    modalCategory.style.background = config.bgColor;
    modalDescription.textContent = work.description;
    modalTags.innerHTML = work.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    if (work.audio) {
        const audioPlayer = document.createElement('div');
        audioPlayer.className = 'modal-audio';
        audioPlayer.innerHTML = `<audio src="${work.audio}" controls style="width: 100%; margin-top: 1rem; border-radius: 12px;"></audio>`;
        document.querySelector('.modal-info').appendChild(audioPlayer);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 导航栏切换
function toggleNav() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// 平滑滚动
function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href') || e.target.parentElement.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
}

// 统计数字动画
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateNumber(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => statsObserver.observe(num));
}

function animateNumber(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

// 事件监听
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => filterWorks(btn.dataset.filter));
});

closeModal.addEventListener('click', closeModalFunc);

navToggle.addEventListener('click', toggleNav);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// 点击模态框外部关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 打开添加作品模态框
function openAddWorkModal() {
    addWorkModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭添加作品模态框
function closeAddWorkModal() {
    addWorkModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    addWorkForm.reset();
}

// 显示成功消息
function showSuccessMessage(message) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.classList.add('fade-out');
        setTimeout(() => successMsg.remove(), 500);
    }, 3500);
}

// 处理添加作品表单提交
function handleAddWorkSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('workTitle').value;
    const category = document.getElementById('workCategory').value;
    const description = document.getElementById('workDescription').value;
    const tagsInput = document.getElementById('workTags').value;
    const image = document.getElementById('workImage').value;
    const audio = document.getElementById('workAudio').value;
    
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    
    const categoryNames = {
        design: '设计',
        photo: '摄影',
        video: '视频',
        audio: '音频',
        writing: '文字'
    };
    
    const newWork = {
        id: worksData.length + 1,
        title: title,
        category: category,
        categoryName: categoryNames[category],
        description: description,
        tags: tags.length > 0 ? tags : ['未分类'],
        image: image || null,
        audio: audio || null
    };
    
    worksData.unshift(newWork);
    renderWorks(worksData);
    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active');
    
    closeAddWorkModal();
    showSuccessMessage('作品添加成功！');
}

// 根据分类显示/隐藏音频输入
function handleCategoryChange() {
    if (workCategorySelect.value === 'audio') {
        audioGroup.style.display = 'block';
        audioGroup.style.animation = 'fadeIn 0.3s ease';
    } else {
        audioGroup.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            audioGroup.style.display = 'none';
            document.getElementById('workAudio').value = '';
        }, 200);
    }
}

// 添加作品相关事件监听
addWorkBtn.addEventListener('click', openAddWorkModal);
closeAddModal.addEventListener('click', closeAddWorkModal);
addWorkForm.addEventListener('submit', handleAddWorkSubmit);
workCategorySelect.addEventListener('change', handleCategoryChange);

// 点击添加作品模态框外部关闭
addWorkModal.addEventListener('click', (e) => {
    if (e.target === addWorkModal) {
        closeAddWorkModal();
    }
});

// 取消按钮事件
document.querySelector('.btn-cancel').addEventListener('click', closeAddWorkModal);

// 键盘事件：ESC关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.style.display === 'block') closeModalFunc();
        if (addWorkModal.style.display === 'block') closeAddWorkModal();
    }
});

// 联系表单相关
const contactForm = document.getElementById('contactForm');

// 处理联系表单提交
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    // 模拟发送成功
    console.log('发送消息:', { name, email, subject, message });
    
    contactForm.reset();
    showSuccessMessage('消息发送成功！我会尽快回复您。');
}

// 添加联系表单事件监听
if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);