function applyArticlePage() {
    if (window.PAGE_CONFIG && window.PAGE_CONFIG.isPost) {
        document.body.classList.add('trm-article-page');

        var sidebar = document.querySelector('.trm-page-sidebar');
        if (sidebar) {
            sidebar.style.display = 'none';
        }

        var content = document.querySelector('.trm-page-content');
        if (content) {
            content.style.flex = '0 0 100%';
            content.style.maxWidth = '100%';
            content.style.paddingLeft = '0';
            content.style.paddingRight = '0';
        }

        var inner = document.querySelector('.trm-page-content .trm-content');
        if (inner) {
            inner.style.margin = '0 auto';
            inner.style.maxWidth = '900px';
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyArticlePage);
} else {
    applyArticlePage();
}
// For Swup page transitions
if (window.swup) {
    window.swup.on('contentReplaced', applyArticlePage);
}